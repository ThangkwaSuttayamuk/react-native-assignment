/**
 * Noto Sans Thai Font Family Helper
 * 
 * Import this file to use Noto Sans Thai fonts with proper TypeScript types
 * 
 * @example
 * import { fonts } from './utils/fonts';
 * 
 * const styles = StyleSheet.create({
 *   title: {
 *     fontFamily: fonts.bold,
 *     fontSize: 24,
 *   }
 * });
 */

export const fonts = {
  // Regular weights
  thin: 'NotoSansThai-Thin',
  extraLight: 'NotoSansThai-ExtraLight',
  light: 'NotoSansThai-Light',
  regular: 'NotoSansThai-Regular',
  medium: 'NotoSansThai-Medium',
  semiBold: 'NotoSansThai-SemiBold',
  bold: 'NotoSansThai-Bold',
  extraBold: 'NotoSansThai-ExtraBold',
  black: 'NotoSansThai-Black',
  
  // Condensed variants (for compact layouts)
  condensedThin: 'NotoSansThai_Condensed-Thin',
  condensedExtraLight: 'NotoSansThai_Condensed-ExtraLight',
  condensedLight: 'NotoSansThai_Condensed-Light',
  condensedRegular: 'NotoSansThai_Condensed-Regular',
  condensedMedium: 'NotoSansThai_Condensed-Medium',
  condensedSemiBold: 'NotoSansThai_Condensed-SemiBold',
  condensedBold: 'NotoSansThai_Condensed-Bold',
  condensedExtraBold: 'NotoSansThai_Condensed-ExtraBold',
  condensedBlack: 'NotoSansThai_Condensed-Black',
  
  // Semi Condensed variants
  semiCondensedThin: 'NotoSansThai_SemiCondensed-Thin',
  semiCondensedExtraLight: 'NotoSansThai_SemiCondensed-ExtraLight',
  semiCondensedLight: 'NotoSansThai_SemiCondensed-Light',
  semiCondensedRegular: 'NotoSansThai_SemiCondensed-Regular',
  semiCondensedMedium: 'NotoSansThai_SemiCondensed-Medium',
  semiCondensedSemiBold: 'NotoSansThai_SemiCondensed-SemiBold',
  semiCondensedBold: 'NotoSansThai_SemiCondensed-Bold',
  semiCondensedExtraBold: 'NotoSansThai_SemiCondensed-ExtraBold',
  semiCondensedBlack: 'NotoSansThai_SemiCondensed-Black',
  
  // Extra Condensed variants
  extraCondensedThin: 'NotoSansThai_ExtraCondensed-Thin',
  extraCondensedExtraLight: 'NotoSansThai_ExtraCondensed-ExtraLight',
  extraCondensedLight: 'NotoSansThai_ExtraCondensed-Light',
  extraCondensedRegular: 'NotoSansThai_ExtraCondensed-Regular',
  extraCondensedMedium: 'NotoSansThai_ExtraCondensed-Medium',
  extraCondensedSemiBold: 'NotoSansThai_ExtraCondensed-SemiBold',
  extraCondensedBold: 'NotoSansThai_ExtraCondensed-Bold',
  extraCondensedExtraBold: 'NotoSansThai_ExtraCondensed-ExtraBold',
  extraCondensedBlack: 'NotoSansThai_ExtraCondensed-Black',
} as const;

export type FontFamily = typeof fonts[keyof typeof fonts];

// Font weight mapping for convenience
export const fontWeights = {
  100: fonts.thin,
  200: fonts.extraLight,
  300: fonts.light,
  400: fonts.regular,
  500: fonts.medium,
  600: fonts.semiBold,
  700: fonts.bold,
  800: fonts.extraBold,
  900: fonts.black,
} as const;

export default fonts;
