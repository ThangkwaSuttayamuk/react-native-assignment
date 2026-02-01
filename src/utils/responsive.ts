import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 11 Pro Max or similar)
const BASE_WIDTH = 414;
const BASE_HEIGHT = 896;

/**
 * Scales a value based on screen width
 * @param size - The size to scale
 * @returns Scaled size based on screen width
 */
export const wp = (size: number): number => {
  const percentage = (size / BASE_WIDTH) * 100;
  const elemWidth = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(elemWidth));
};

/**
 * Scales a value based on screen height
 * @param size - The size to scale
 * @returns Scaled size based on screen height
 */
export const hp = (size: number): number => {
  const percentage = (size / BASE_HEIGHT) * 100;
  const elemHeight = (percentage * SCREEN_HEIGHT) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(elemHeight));
};

/**
 * Scales font size based on screen width
 * @param size - The font size to scale
 * @returns Scaled font size
 */
export const fs = (size: number): number => {
  return wp(size);
};

/**
 * Returns responsive spacing values
 */
export const spacing = {
  xs: wp(4),
  sm: wp(8),
  md: wp(16),
  lg: wp(24),
  xl: wp(32),
  xxl: wp(40),
  xxxl: wp(48),
};

/**
 * Returns responsive font sizes
 */
export const fontSizes = {
  xs: fs(10),
  sm: fs(12),
  md: fs(14),
  lg: fs(16),
  xl: fs(18),
  xxl: fs(20),
  xxxl: fs(24),
  huge: fs(28),
  massive: fs(32),
};

/**
 * Returns responsive border radius values
 */
export const borderRadius = {
  sm: wp(4),
  md: wp(8),
  lg: wp(12),
  xl: wp(16),
  full: wp(9999),
};

/**
 * Returns screen dimensions
 */
export const dimensions = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};

/**
 * Checks if device is small (screen width < 375)
 */
export const isSmallDevice = SCREEN_WIDTH < 375;

/**
 * Checks if device is large (screen width >= 768)
 */
export const isLargeDevice = SCREEN_WIDTH >= 768;

/**
 * Export fonts for easy access
 */
export { fonts } from './fonts';
