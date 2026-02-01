import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Keyboard } from 'react-native';
import { useNavigate } from '../../hooks/useNavigation';
import {
  loginDefaultValues,
  loginSchema,
  TLoginSchema,
} from '../../models/schemas/login.schema';
import { useLoginService } from '../../services/auth/useLoginService';
import useUserStore from '../../stores/useUserStore';

const useLoginViewModel = () => {
  const { t } = useTranslation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const loginService = useLoginService;
  const {setUser} = useUserStore();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema(t)),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: loginDefaultValues,
  });

  const onLogin: SubmitHandler<TLoginSchema> = async data => {
    console.log('Login:', { data, rememberMe });

    const resp = await loginService({
      username: data.email,
      password: data.password,
    });

    if (resp.user) {
      setUser(resp.user);
      console.log('Login successful:', resp.user);
      navigate.navigation('RequestOTP');
    } else {
      console.log('Login failed: Invalid credentials');
      setError('email', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };

  const onLoginError: SubmitErrorHandler<TLoginSchema> = formErrors => {
    console.log('Login validation errors:', formErrors);
  };

  const onForgotPassword = () => {
    navigate.navigation('ForgetPassword');
  };

  const onRegister = () => {
    // TODO: Navigate to registration screen
    console.log('Navigate to register');
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return {
    isKeyboardVisible,
    rememberMe,
    setRememberMe,
    control,
    errors,
    handleSubmit,
    onLogin,
    onLoginError,
    onForgotPassword,
    onRegister,
  };
};

export default useLoginViewModel;
