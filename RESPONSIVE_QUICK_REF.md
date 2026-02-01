# 🎨 Responsive Design Quick Reference

## Import Statement
```typescript
import { spacing, fontSizes, borderRadius, wp, hp } from '../../utils/responsive';
```

## Common Patterns

### Spacing & Padding
```typescript
padding: spacing.lg          // 24 responsive
paddingHorizontal: spacing.lg // 24 responsive  
paddingVertical: spacing.md   // 16 responsive
margin: spacing.xl           // 32 responsive
gap: spacing.sm              // 8 responsive
```

### Font Sizes
```typescript
fontSize: fontSizes.xl       // 18 - buttons
fontSize: fontSizes.xxl      // 20 - subtitles
fontSize: fontSizes.huge     // 28 - headings
fontSize: fontSizes.massive  // 32 - page titles
```

### Border Radius
```typescript
borderRadius: borderRadius.sm  // 4 - subtle
borderRadius: borderRadius.md  // 8 - standard
borderRadius: borderRadius.lg  // 12 - prominent
borderRadius: borderRadius.xl  // 16 - very round
```

### Custom Sizes
```typescript
width: wp(100)              // Width scaled to screen
height: hp(80)              // Height scaled to screen
borderWidth: wp(1)          // Border scaled to screen
```

## Size Scale Reference

### Spacing Scale
| Name | Size | Use Case |
|------|------|----------|
| xs   | 4    | Minimal gap |
| sm   | 8    | Small spacing |
| md   | 16   | Standard spacing |
| lg   | 24   | Large padding |
| xl   | 32   | Extra spacing |
| xxl  | 40   | Section spacing |
| xxxl | 48   | Major sections |

### Font Scale
| Name | Size | Use Case |
|------|------|----------|
| xs   | 10   | Tiny labels |
| sm   | 12   | Small text |
| md   | 14   | Body text small |
| lg   | 16   | Body text |
| xl   | 18   | Buttons, emphasis |
| xxl  | 20   | Subtitles |
| xxxl | 24   | Small headings |
| huge | 28   | Headings |
| massive | 32 | Page titles |

## Component Examples

### Button
```typescript
const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
  },
  buttonText: {
    fontSize: fontSizes.xl,
  }
});
```

### Input Field
```typescript
const styles = StyleSheet.create({
  input: {
    paddingVertical: spacing.sm + wp(4),
    fontSize: fontSizes.lg,
    borderBottomWidth: wp(1),
    marginBottom: spacing.xl,
  }
});
```

### Card Container
```typescript
const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
  }
});
```

### Icon Button
```typescript
const styles = StyleSheet.create({
  iconButton: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
  }
});
```

## ❌ Don't Do This
```typescript
// BAD - Hardcoded values
padding: 24,
fontSize: 16,
borderRadius: 8,
width: 100,
height: 50,
```

## ✅ Do This Instead
```typescript
// GOOD - Responsive values
padding: spacing.lg,
fontSize: fontSizes.lg,
borderRadius: borderRadius.md,
width: wp(100),
height: hp(50),
```

## Device Testing Checklist
- [ ] iPhone SE (375x667) - Small
- [ ] iPhone 11 (414x896) - Standard
- [ ] iPhone Pro Max (430x932) - Large
- [ ] iPad (768x1024) - Tablet
- [ ] Portrait orientation
- [ ] Landscape orientation

## Pro Tips
1. **Use constants first**: Always check if there's a predefined spacing/fontSize/borderRadius before using wp/hp
2. **Keep it consistent**: Use the same spacing values throughout your app
3. **Test on real devices**: Simulators are good, but real devices are better
4. **Think proportionally**: Large screens should have proportionally larger elements
5. **Touch targets matter**: Minimum 44pt for all tappable elements

## Need Help?
- 📖 Full docs: `/src/utils/README.md`
- 📊 Implementation details: `/RESPONSIVE_IMPLEMENTATION.md`
- 🎯 Before/After comparison: `/RESPONSIVE_GUIDE.md`
