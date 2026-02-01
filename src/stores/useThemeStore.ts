import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ThemeModel } from '../models/types/theme.model';

const useThemeStore = create<ThemeModel>()(
  persist(
    (set) => ({
      isDarkMode: false, // <-- Change this to true for dark mode
      
      setDarkMode: (payload) => set({ isDarkMode: payload }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStore;