import React, { createContext, ReactNode, useContext } from 'react';
import { getThemedColors } from '../assets/color/colors';
import useThemeStore from '../stores/useThemeStore';

interface ThemeContextValue {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: ReturnType<typeof getThemedColors>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  const colors = getThemedColors(isDarkMode);

  const value = {
    isDarkMode,
    toggleTheme: toggleDarkMode,
    colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
