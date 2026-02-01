import { useEffect, useRef, useState } from 'react';
import { useNavigate } from '../../hooks/useNavigation';
import useUserStore from '../../stores/useUserStore';
import { formatPhoneNumber } from '../../utils/phoneUtils';

const useOtpViewModel = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(57);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const inputRefs = useRef<any[]>([]);
  const { user } = useUserStore();

  const phoneNumber = formatPhoneNumber(user.phoneNumber);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [resendTimer]);

  const onOtpChange = (value: string, index: number) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto verify when all digits are entered
    if (index === 5 && value) {
      const otpCode = [...newOtp].join('');
      if (otpCode.length === 6) {
        onVerifyOtp(otpCode);
      }
    }
  };

  const onOtpKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onVerifyOtp = (otpCode: string) => {
    console.log('Verifying OTP:', otpCode);
    if (user.pin) {
      if (user.isBiometricEnabled) {
        navigate.reset({
          index: 0,
          routes: [{ name: 'Pin', params: { type: 'access' } }],
        });
      } else {
        navigate.reset({
          index: 0,
          routes: [{ name: 'TouchID' }],
        });
      }
    } else {
      navigate.reset({
        index: 0,
        routes: [{ name: 'Pin', params: { type: 'setting' } }],
      });
    }
  };

  const onResendOtp = () => {
    if (!isResendEnabled) return;

    // TODO: Implement resend OTP logic
    console.log('Resending OTP to:', phoneNumber);
    // TODO: Call API to resend OTP

    // Reset timer
    setResendTimer(57);
    setIsResendEnabled(false);

    // Clear OTP inputs
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const onBack = () => {
    // TODO: Navigate back to previous screen
    console.log('Navigate back');
    navigate.goBack();
  };

  const setInputRef = (ref: any, index: number) => {
    inputRefs.current[index] = ref;
  };

  return {
    phoneNumber,
    otp,
    resendTimer,
    isResendEnabled,
    onOtpChange,
    onOtpKeyPress,
    onResendOtp,
    onBack,
    setInputRef,
  };
};

export default useOtpViewModel;
