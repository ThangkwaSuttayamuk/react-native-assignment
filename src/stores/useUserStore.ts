import { create } from 'zustand';
import UserModel from '../models/interfaces/user.model';

type UserStoreModel = {
  user: UserModel;
  isOTPVerified: boolean;
  setUser: (user: UserModel) => void;
  setIsOTPVerified: (isVerified: boolean) => void;
  resetUserStore: () => void;
};

const useUserStore = create<UserStoreModel>(set => ({
  user: {
    id: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    pin: '',
    phoneNumber: '',
    email: '',
    isBiometricEnabled: false,
  },
  isOTPVerified: false,
  setUser: (user: UserModel) => set({ user }),
  setIsOTPVerified: (isVerified: boolean) => set({ isOTPVerified: isVerified }),
  resetUserStore: () =>
    set({
      user: {
        id: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        pin: '',
        phoneNumber: '',
        email: '',
        isBiometricEnabled: false,
      },
      isOTPVerified: false,
    }),
}));

export default useUserStore;
