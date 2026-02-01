import { useTheme } from '../contexts/ThemeContext';
import { useMemo } from 'react';

/**
 * Custom hook to get theme-aware colors for any nested color path
 * Usage: 
 *   const { getColor } = useThemedColors();
 *   const bgColor = getColor('background.secondary');
 *   const textColor = getColor('text.primary');
 */
export const useThemedColors = () => {
  const { colors, isDarkMode } = useTheme();

  const getColor = useMemo(() => {
    return (path: string, mode: 'light' | 'dark' = isDarkMode ? 'dark' : 'light') => {
      const keys = path.split('.');
      let value: any = colors;
      
      for (const key of keys) {
        if (value && typeof value === 'object') {
          value = value[key];
        } else {
          return undefined;
        }
      }
      
      // If the final value has light/dark modes, return the appropriate one
      if (value && typeof value === 'object' && (value.light || value.dark)) {
        return value[mode];
      }
      
      return value;
    };
  }, [colors, isDarkMode]);

  return { colors, isDarkMode, getColor };
};
