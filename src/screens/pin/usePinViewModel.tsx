import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useNavigate } from '../../hooks/useNavigation';
import { PinParams } from '../../models/types/screenParams/pinParams';
import useUserStore from '../../stores/useUserStore';

const usePinViewModel = () => {
  const navigate = useNavigate();
  const route = useRoute();
  const params = route.params as PinParams;
  const { type, pin: paramPin } = params;
  const [pin, setPin] = useState<string[]>(['', '', '', '', '', '']);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const { pin: userPin, isBiometricEnabled } = useUserStore().user;
  const { user, setUser } = useUserStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const title = () => {
    switch (type) {
      case 'access':
        return 'กรุณากรอกรหัส PIN CODE';
      case 'confirm':
        return 'ยืนยันรหัส PIN CODE';
      case 'setting':
        return 'ตั้งรหัส PIN CODE';
      default:
        return 'กรุณากรอกรหัส PIN CODE';
    }
  };

  const handleBiometricAuth = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();

      const { available, biometryType } =
        await rnBiometrics.isSensorAvailable();

      if (biometryType === BiometryTypes.TouchID) {
        console.log('Device supports Touch ID');
      } else if (biometryType === BiometryTypes.FaceID) {
        console.log('Device supports Face ID');
      } else if (biometryType === BiometryTypes.Biometrics) {
        console.log('Device supports generic biometrics (Android)');
      } else {
        console.log('No biometric sensor available.');
      }

      if (!available) {
        Alert.alert(
          'Biometric Not Available',
          'Touch ID is not available on this device.',
        );
        return;
      }

      // Only allow Touch ID/Fingerprint, not Face ID
      if (biometryType === BiometryTypes.FaceID) {
        Alert.alert(
          'Face ID Not Supported',
          'Please use Touch ID or PIN code to login.',
        );
        return;
      }

      // Prompt for biometric authentication
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage:
          'เข้าใช้งานด้วย Touch ID หรือยกเลิกเพื่อกลับไปใช้รหัส PIN',
        cancelButtonText: 'ยกเลิก',
      });

      if (success) {
        console.log('Biometric authentication successful');
        setErrorMessage(null);
        // Navigate to home or next screen
        console.log('go to home page');
      } else {
        console.log('Biometric authentication cancelled');
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
      Alert.alert(
        'Authentication Error',
        'An error occurred during biometric authentication.',
      );
    }
  };

  // Auto-trigger biometric authentication when screen loads with type 'access'
  useEffect(() => {
    if (type === 'access') {
      // Small delay to ensure screen is fully mounted
      const timer = setTimeout(() => {
        handleBiometricAuth();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [type]);

  const onNumberPress = (number: string) => {
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage(null);
    }

    // Set active button for visual feedback
    setActiveButton(number);
    setTimeout(() => setActiveButton(null), 150);

    // Find first empty slot
    const emptyIndex = pin.findIndex(digit => digit === '');

    if (emptyIndex !== -1) {
      const newPin = [...pin];
      newPin[emptyIndex] = number;
      setPin(newPin);

      // Check if PIN is complete
      if (emptyIndex === 5) {
        const completePin = newPin.join('');
        onPinComplete(completePin);
      }
    }
  };

  const onBackspace = () => {
    // Set active button for visual feedback
    setActiveButton('backspace');
    setTimeout(() => setActiveButton(null), 150);

    // Find last filled slot
    let lastFilledIndex = -1;
    for (let i = pin.length - 1; i >= 0; i--) {
      if (pin[i] !== '') {
        lastFilledIndex = i;
        break;
      }
    }

    if (lastFilledIndex !== -1) {
      const newPin = [...pin];
      newPin[lastFilledIndex] = '';
      setPin(newPin);
    }
  };

  const onPinComplete = (completePin: string) => {
    console.log('PIN entered:', completePin);
    switch (type) {
      case 'access':
        console.log('Verifying access PIN...');
        if (completePin === userPin) {
          setErrorMessage(null);
          if (isBiometricEnabled) {
            console.log('go to bio page');
            navigate.reset({
              index: 0,
              routes: [{ name: 'TouchID' }],
            });
            resetPin();
          } else {
            console.log('go to home page');
            resetPin();
          }
          // go to home page
        } else {
          setErrorMessage('รหัส PIN ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
          resetPin();
        }
        break;
      case 'confirm':
        if (paramPin === completePin) {
          setErrorMessage(null);
          setUser({ ...user, pin: completePin });
          resetPin();
          navigate.reset({
            index: 0,
            routes: [{ name: 'TouchID' }],
          });
        } else {
          setErrorMessage('รหัส PIN ที่ยืนยันไม่ตรงกัน กรุณาลองใหม่อีกครั้ง');
          resetPin();
        }
        break;
      case 'setting':
        resetPin();
        navigate.reset({
          index: 0,
          routes: [
            { name: 'Pin', params: { type: 'confirm', pin: completePin } },
          ],
        });
        break;
      default:
        break;
    }
  };

  const resetPin = () => {
    setPin(['', '', '', '', '', '']);
  };

  return {
    pin,
    activeButton,
    onNumberPress,
    onBackspace,
    resetPin,
    title,
    errorMessage,
    type,
    handleBiometricAuth,
  };
};

export default usePinViewModel;
