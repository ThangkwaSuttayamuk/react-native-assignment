/**
 * Theme Utility Functions
 * Helpers for working with the theme system
 */

import { useTheme } from '../contexts/ThemeContext';

/**
 * Maps common hardcoded colors to theme color paths
 * Useful for converting existing components to use themes
 */
export const colorMap = {
  // Whites and light backgrounds
  '#FFFFFF': 'neutral.bg.lv1',
  '#F9FAFA': 'neutral.bg.based',
  '#F5F5F5': 'neutral.bg.based',
  '#F2F4F5': 'neutral.bg.seconday',
  
  // Blacks and dark text
  '#000000': 'neutral.text.primary',
  '#393C3E': 'neutral.text.primary',
  '#333': 'neutral.text.primary',
  
  // Grays
  '#999': 'neutral.text.secondary',
  '#666': 'neutral.text.tertiary',
  '#858D91': 'neutral.text.secondary',
  '#98A1A6': 'neutral.text.tertiary',
  '#BEC9CF': 'neutral.text.placeholder',
  '#ABB5BA': 'neutral.text.disable',
  
  // Borders
  '#E0E0E0': 'neutral.border.tertiary',
  '#CCC': 'neutral.border.secondary',
  '#CBD4D9': 'neutral.border.tertiary',
  '#D1D9DD': 'neutral.border.quaternary',
  '#C4CED4': 'neutral.border.secondary',
  
  // Primary/Accent colors
  '#009BFF': 'accent.bg.lv1',
  '#0A84FF': 'accent.bg.lv1',
  '#2D7A5E': 'accent.bg.lv1', // Or keep as custom if it's specific to your brand
  
  // Error/Warning
  '#E42313': 'error.bg.base',
  '#FF3B30': 'error.bg.base',
  '#FFC20A': 'warning.bg.based',
  
  // Success
  '#39814A': 'success.green',
};

/**
 * Helper to suggest theme color path for a hex color
 */
export const suggestThemeColor = (hexColor: string): string => {
  const normalized = hexColor.toUpperCase();
  return colorMap[normalized] || 'unknown - add to theme';
};

/**
 * Hook to get dynamic theme-aware StatusBar style
 */
export const useStatusBarStyle = () => {
  const { isDarkMode } = useTheme();
  return isDarkMode ? 'light-content' : 'dark-content';
};

/**
 * Get theme-aware shadow style
 */
export const useThemedShadow = () => {
  const { isDarkMode } = useTheme();
  
  return {
    shadowColor: isDarkMode ? '#FFFFFF' : '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: isDarkMode ? 0.1 : 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };
};

/**
 * Hook to get theme-aware keyboard appearance
 */
export const useKeyboardAppearance = () => {
  const { isDarkMode } = useTheme();
  return isDarkMode ? 'dark' : 'light';
};

/**
 * Convert opacity hex to rgba
 * Useful for dark mode overlays
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default {
  colorMap,
  suggestThemeColor,
  useStatusBarStyle,
  useThemedShadow,
  useKeyboardAppearance,
  hexToRgba,
};
