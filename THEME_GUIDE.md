# Theme Implementation Guide

## Overview
Your app now has a complete dark/light theme system that:
- Persists theme preference using AsyncStorage
- Provides theme context throughout the app
- Includes a toggle button for easy switching
- Supports theme-aware colors and images

## Quick Start

### 1. Using Theme in Components

```tsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { isDarkMode, colors, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: colors.neutral.bg.lv1.light }}>
      <Text style={{ color: colors.neutral.text.primary.light }}>
        Hello {isDarkMode ? 'Dark' : 'Light'} Mode!
      </Text>
    </View>
  );
}
```

### 2. Using the Helper Hook

```tsx
import { useThemedColors } from '../hooks/useThemedColors';

function MyComponent() {
  const { getColor, isDarkMode } = useThemedColors();

  return (
    <View style={{ backgroundColor: getColor('neutral.bg.lv1') }}>
      <Text style={{ color: getColor('neutral.text.primary') }}>
        Text content
      </Text>
    </View>
  );
}
```

### 3. Adding Theme Toggle Button

```tsx
import ThemeToggleButton from '../components/button/ThemeToggleButton';

function SettingsScreen() {
  return (
    <View>
      <ThemeToggleButton />
    </View>
  );
}
```

### 4. Theme-Aware Images

```tsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { isDarkMode } = useTheme();

  return (
    <Image
      source={
        isDarkMode
          ? require('../assets/images/dark/logo-dark.png')
          : require('../assets/images/light/logo-light.png')
      }
    />
  );
}
```

## Color Structure

The theme system uses a nested color structure. Access colors using the path:

- `colors.neutral.bg.lv1.light` - Background color
- `colors.neutral.text.primary.light` - Primary text color
- `colors.accent.bg.lv1.dark` - Accent background color
- `colors.neutral.border.tertiary.light` - Border color

Or use the helper:
```tsx
const { getColor } = useThemedColors();
const bgColor = getColor('neutral.bg.lv1'); // Auto selects light/dark
```

## Dark Mode Colors

The dark mode colors are defined in [colors.ts](../assets/color/colors.ts) under `darkModeColors`. 
These are merged with light mode colors when dark mode is active.

Key dark mode overrides:
- Background: `#1C1C1E` (dark gray)
- Text: `#FFFFFF` (white)
- Borders: `#48484A` (lighter gray)
- Cards: `#2C2C2E` (medium gray)

## Updating Existing Screens

To update an existing screen to use themes:

1. Import the theme hook:
   ```tsx
   import { useTheme } from '../../contexts/ThemeContext';
   ```

2. Get theme values:
   ```tsx
   const { colors, isDarkMode } = useTheme();
   ```

3. Replace hardcoded colors with theme colors:
   ```tsx
   // Before
   backgroundColor: '#FFFFFF'
   
   // After
   backgroundColor: colors.neutral.bg.lv1.light
   ```

4. Update StyleSheet to use dynamic colors:
   ```tsx
   // Move styles inside component to access theme
   const { colors } = useTheme();
   
   const styles = StyleSheet.create({
     container: {
       backgroundColor: colors.neutral.bg.lv1.light,
       // ... other styles
     },
   });
   ```

## Best Practices

1. **Always use theme colors** - Don't hardcode colors in styles
2. **Test both themes** - Switch between light/dark to ensure UI looks good
3. **Add dark mode assets** - Provide dark variants for images/icons
4. **Use getColor helper** - Simplifies color access with automatic theme selection
5. **Persist is automatic** - Theme preference saves automatically

## Files Modified

- [useThemeStore.ts](../stores/useThemeStore.ts) - Store with persistence
- [colors.ts](../assets/color/colors.ts) - Added dark mode colors
- [ThemeContext.tsx](../contexts/ThemeContext.tsx) - Theme provider
- [App.tsx](../../App.tsx) - Wrapped with ThemeProvider
- [BackButton.tsx](../components/button/BackButton.tsx) - Example themed component

## Need Help?

- Check existing themed components for examples
- Use TypeScript autocomplete to explore color paths
- The theme persists automatically using AsyncStorage
