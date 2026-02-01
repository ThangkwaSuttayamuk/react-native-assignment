# Fonts Setup Guide

## ✅ Fonts Successfully Linked!

All 18 Poppins font variants have been successfully added to your React Native project.

## Available Fonts

### Regular Weights
- `Poppins-Thin` (100)
- `Poppins-ExtraLight` (200)
- `Poppins-Light` (300)
- `Poppins-Regular` (400)
- `Poppins-Medium` (500)
- `Poppins-SemiBold` (600)
- `Poppins-Bold` (700)
- `Poppins-ExtraBold` (800)
- `Poppins-Black` (900)

### Italic Variants
- `Poppins-ThinItalic`
- `Poppins-ExtraLightItalic`
- `Poppins-LightItalic`
- `Poppins-Italic`
- `Poppins-MediumItalic`
- `Poppins-SemiBoldItalic`
- `Poppins-BoldItalic`
- `Poppins-ExtraBoldItalic`
- `Poppins-BlackItalic`

## Usage

### Option 1: Using the fonts helper
```typescript
import { fonts } from '../../utils/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  caption: {
    fontFamily: fonts.light,
    fontSize: 14,
  },
});
```

### Option 2: Using responsive utility (includes fonts)
```typescript
import { fonts, fontSizes } from '../../utils/responsive';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.huge, // Responsive!
  },
  subtitle: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.xl, // Responsive!
  },
});
```

### Option 3: Direct font name
```typescript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
});
```

## Testing the Fonts

To test if fonts are working:

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Quick Test Component
```typescript
import { Text, View, StyleSheet } from 'react-native';
import { fonts, fontSizes, spacing } from '../../utils/responsive';

function FontTest() {
  return (
    <View style={styles.container}>
      <Text style={styles.thin}>Poppins Thin (100)</Text>
      <Text style={styles.light}>Poppins Light (300)</Text>
      <Text style={styles.regular}>Poppins Regular (400)</Text>
      <Text style={styles.medium}>Poppins Medium (500)</Text>
      <Text style={styles.semiBold}>Poppins SemiBold (600)</Text>
      <Text style={styles.bold}>Poppins Bold (700)</Text>
      <Text style={styles.black}>Poppins Black (900)</Text>
      <Text style={styles.italic}>Poppins Italic</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  thin: {
    fontFamily: fonts.thin,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  light: {
    fontFamily: fonts.light,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  regular: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  medium: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  semiBold: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  bold: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  black: {
    fontFamily: fonts.black,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  italic: {
    fontFamily: fonts.italic,
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
});

export default FontTest;
```

## Files Modified

### iOS
- ✅ `/ios/Codediva/Info.plist` - Added `UIAppFonts` array with all font files
- ✅ Ran `pod install` to link fonts

### Android
- ✅ `/android/app/src/main/assets/fonts/` - Copied all .ttf files

### Configuration
- ✅ `/react-native.config.js` - Updated assets path
- ✅ `/src/utils/fonts.ts` - Created font helper utility
- ✅ `/src/utils/responsive.ts` - Exported fonts for convenience

## Troubleshooting

### Fonts not showing on iOS?
1. Clean build: `cd ios && rm -rf build && cd ..`
2. Rebuild: `npm run ios`

### Fonts not showing on Android?
1. Clean build: `cd android && ./gradlew clean && cd ..`
2. Rebuild: `npm run android`

### Fonts still not working?
1. Verify font files are in the correct location:
   - iOS: Listed in `Info.plist`
   - Android: In `android/app/src/main/assets/fonts/`
2. Restart Metro bundler: Stop and run `npm start -- --reset-cache`
3. Rebuild the app completely

## Best Practices

### 1. Use the fonts helper
```typescript
import { fonts } from '../../utils/fonts';
// or
import { fonts } from '../../utils/responsive';
```

### 2. Combine with responsive sizing
```typescript
import { fonts, fontSizes, spacing } from '../../utils/responsive';

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.huge,      // Responsive
    marginBottom: spacing.md,       // Responsive
  },
});
```

### 3. Create reusable text components
```typescript
import { Text, TextProps, StyleSheet } from 'react-native';
import { fonts, fontSizes } from '../../utils/responsive';

export const Title = ({ style, ...props }: TextProps) => (
  <Text style={[styles.title, style]} {...props} />
);

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.huge,
  },
});
```

## Next Steps

1. ✅ Rebuild your app to see the fonts in action
2. Update existing screens to use Poppins fonts
3. Create consistent typography components
4. Update your design system with font scales

Enjoy your new Poppins fonts! 🎉
