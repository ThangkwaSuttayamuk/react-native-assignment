import { useState } from 'react';
import * as LocalAuthentication from 'react-native-biometrics';
import { useNavigate } from '../../hooks/useNavigation';

const useTouchIDViewModel = () => {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const onSetupBiometric = async () => {
    try {
      setIsAuthenticating(true);

      const rnBiometrics = new LocalAuthentication.default();

      const { available, biometryType } =
        await rnBiometrics.isSensorAvailable();

      if (!available) {
        console.log('Device does not support biometric authentication');
        return;
      }

      console.log('Biometry type:', biometryType);

      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'ยืนยันตัวตนด้วยลายนิ้วมือ',
        cancelButtonText: 'ยกเลิก',
      });

      if (success) {
        console.log('Biometric authentication successful');
      } else {
        console.log('Biometric authentication failed');
      }
    } catch (error) {
      console.error('Error setting up biometric:', error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const onSkip = () => {
    // TODO: Navigate to next screen without setting up biometric
    console.log('Skipping biometric setup');
    navigate.replace('Pin', { type: 'access' });
    // TODO: Navigate to home/main screen
  };

  return {
    isAuthenticating,
    onSetupBiometric,
    onSkip,
  };
};

export default useTouchIDViewModel;
