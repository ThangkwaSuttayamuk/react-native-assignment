import { useState } from 'react';
import { useNavigate } from '../../hooks/useNavigation';
import useUserStore from '../../stores/useUserStore';
import { formatPhoneNumber } from '../../utils/phoneUtils';

const useViewModel = () => {
  const navigate = useNavigate();
  const [supportPhone] = useState('02-XXX-XXXX');
  const { user, resetUserStore } = useUserStore();

  const maskedPhoneNumber = formatPhoneNumber(user.phoneNumber);

  const onRequestOtp = () => {
    console.log('Requesting OTP for:', user.phoneNumber);
    navigate.navigation('OTP');
  };

  const onBack = () => {
    console.log('Navigate back');
    resetUserStore();
    navigate.goBack();
  };

  return {
    maskedPhoneNumber,
    supportPhone,
    onRequestOtp,
    onBack,
  };
};

export default useViewModel;
