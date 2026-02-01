import { create } from 'zustand';

type RegisterModelStoreModel = {
  username: string;
  password: string;
  phoneNumber: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  resetRegisterStore: () => void;
};

const useRegisterStore = create<RegisterModelStoreModel>(set => ({
  username: '',
  password: '',
  phoneNumber: '',
  setUsername: (username: string) => set({ username }),
  setPassword: (password: string) => set({ password }),
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
  resetRegisterStore: () => set({ username: '', password: '', phoneNumber: '' }),
}));

export default useRegisterStore;
