import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/splash/SplashScreen';
import LoginScreen from '../screens/login';
import WelcomeScreen from '../screens/welcome';
import PolicyScreen from '../screens/policy';
import ForgetPasswordScreen from '../screens/forgetPassword';
import ResetScreen from '../screens/reset';
import RequestOTPScreen from '../screens/requestOtp';
import OtpScreen from '../screens/otp';
import PinScreen from '../screens/pin';
import { PinParams } from '../models/types/screenParams/pinParams';
import TouchIDScreen from '../screens/touchID';

export type RootStackParams = {
  Splash: undefined;
  LogIn: undefined;
  Welcome: undefined;
  Policy: undefined;
  ForgetPassword: undefined;
  Reset: undefined;
  RequestOTP: undefined;
  OTP: undefined;
  Pin: PinParams;
  TouchID: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false, animation: 'none' }}
      >
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="LogIn" component={LoginScreen} />
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Policy" component={PolicyScreen} />
        <RootStack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
        />
        <RootStack.Screen name="Reset" component={ResetScreen} />
        <RootStack.Screen name="RequestOTP" component={RequestOTPScreen} />
        <RootStack.Screen name="OTP" component={OtpScreen} />
        <RootStack.Screen name="Pin" component={PinScreen} />
        <RootStack.Screen name="TouchID" component={TouchIDScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
