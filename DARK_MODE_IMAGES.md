# Dark Mode Images Checklist

## Required Dark Mode Image Assets

Your app references these dark mode images. Make sure they exist in your `/assets/images/dark/` directory:

### Icons Used in App:
1. `back-dark.png` - Back button icon (used in BackButton.tsx)
2. `show-dark.png` - Show password icon (used in PlainTextInput.tsx)
3. `hide-dark.png` - Hide password icon (used in PlainTextInput.tsx)
4. `otp-dark.png` - OTP icon (used in RequestOtpScreen.tsx)
5. `touch-id-dark.png` - Touch ID/Fingerprint icon (used in PinScreen.tsx, TouchIDScreen.tsx)
6. `policy-dark.png` - Policy icon (used in PolicyScreen.tsx)

## How to Create Dark Mode Assets

### Option 1: Invert Light Images
For simple icons, you can invert the light versions:
- Use an image editor (Photoshop, GIMP, etc.)
- Invert colors (white becomes black, black becomes white)
- Adjust for better visibility on dark backgrounds

### Option 2: Design Specific Dark Variants
For better results, design specific dark mode versions:
- Use lighter colors that contrast well with dark backgrounds
- White or light gray icons work well
- Ensure sufficient contrast (WCAG AA standard)

### Option 3: Use Tintable Images
If your images are single-color icons:
- Use white PNGs with transparency
- Tint them programmatically in code
- This works best for simple icon shapes

## Temporary Fallback

If dark mode images don't exist yet, the app will show:
- Light mode images in dark mode (not ideal but functional)
- You can temporarily use light images until dark versions are ready

## Color Recommendations for Dark Mode Icons

- **Primary icons**: `#FFFFFF` (white) or `#E5E5E5` (light gray)
- **Secondary icons**: `#B0B0B0` (medium gray)
- **Accent icons**: `#0A84FF` (iOS blue) or your brand color
- **Background**: Ensure icons work on `#1C1C1E` (dark gray) backgrounds

## Testing Dark Mode Images

1. Place dark mode images in `/assets/images/dark/`
2. Set `isDarkMode: true` in [useThemeStore.ts](src/stores/useThemeStore.ts)
3. Reload app and verify all icons appear correctly
4. Check contrast and visibility on dark backgrounds

## Quick Check Command

Run this to see if dark mode images exist:
```bash
ls -la src/assets/images/dark/
```

Expected output should show all 6 images listed above.
