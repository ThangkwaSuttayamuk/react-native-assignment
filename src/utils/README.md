# Responsive Utilities

This folder contains utility functions for creating responsive React Native applications.

## responsive.ts

Provides functions and constants for creating responsive layouts that adapt to different screen sizes.

### Functions

- **`wp(size: number)`** - Scales a value based on screen width
  ```typescript
  width: wp(100) // 100 relative to base width (414)
  ```

- **`hp(size: number)`** - Scales a value based on screen height
  ```typescript
  height: hp(50) // 50 relative to base height (896)
  ```

- **`fs(size: number)`** - Scales font size based on screen width
  ```typescript
  fontSize: fs(16) // 16 relative to base width
  ```

### Constants

- **`spacing`** - Predefined responsive spacing values
  ```typescript
  {
    xs: 4,    // Extra small
    sm: 8,    // Small
    md: 16,   // Medium
    lg: 24,   // Large
    xl: 32,   // Extra large
    xxl: 40,  // Extra extra large
    xxxl: 48  // Extra extra extra large
  }
  ```

- **`fontSizes`** - Predefined responsive font sizes
  ```typescript
  {
    xs: 10,     // Extra small
    sm: 12,     // Small
    md: 14,     // Medium
    lg: 16,     // Large
    xl: 18,     // Extra large
    xxl: 20,    // Extra extra large
    xxxl: 24,   // Extra extra extra large
    huge: 28,   // Huge
    massive: 32 // Massive
  }
  ```

- **`borderRadius`** - Predefined responsive border radius values
  ```typescript
  {
    sm: 4,    // Small
    md: 8,    // Medium
    lg: 12,   // Large
    xl: 16,   // Extra large
    full: 9999 // Full circle
  }
  ```

- **`dimensions`** - Screen dimensions
  ```typescript
  {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
  ```

- **`isSmallDevice`** - Boolean indicating if screen width < 375
- **`isLargeDevice`** - Boolean indicating if screen width >= 768

### Usage Example

```typescript
import { StyleSheet } from 'react-native';
import { spacing, fontSizes, borderRadius, wp, hp } from '../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg, // Responsive 24
  },
  title: {
    fontSize: fontSizes.huge, // Responsive 28
    marginBottom: spacing.md, // Responsive 16
  },
  button: {
    paddingVertical: spacing.md, // Responsive 16
    borderRadius: borderRadius.md, // Responsive 8
    width: wp(200), // Responsive width
    height: hp(50), // Responsive height
  },
  customSize: {
    width: wp(100), // Custom responsive width
    height: hp(80), // Custom responsive height
  }
});
```

### Base Dimensions

The responsive system is based on a reference device with:
- Width: 414 (iPhone 11 Pro Max)
- Height: 896

All values are scaled relative to these dimensions to ensure consistent sizing across different screen sizes.
