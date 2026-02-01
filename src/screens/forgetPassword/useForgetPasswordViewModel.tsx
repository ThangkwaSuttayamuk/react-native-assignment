import { useState } from 'react';
import { useNavigate } from '../../hooks/useNavigation';

const useForgetPasswordViewModel = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailOrPhoneChange = (value: string) => {
    setEmailOrPhone(value);
  };

  const onSubmit = async () => {
    if (!emailOrPhone.trim()) {
      console.log('Please enter email or phone number');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Submitting forgot password request for:', emailOrPhone);

      navigate.reset(
        {
          index: 0,
          routes: [{ name: 'Reset'}],
        }
      );

      console.log('Password reset request sent successfully');
    } catch (error) {
      console.error('Failed to send password reset request:', error);
      // TODO: Show error message
    } finally {
      setIsLoading(false);
    }
  };

  const onBack = () => {
    navigate.goBack();
  };

  const isSubmitEnabled = emailOrPhone.trim().length > 0 && !isLoading;

  return {
    emailOrPhone,
    isLoading,
    isSubmitEnabled,
    onEmailOrPhoneChange,
    onSubmit,
    onBack,
  };
};

export default useForgetPasswordViewModel;
