import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { fonts } from '../../utils/fonts';
import { borderRadius, fontSizes, spacing, wp } from '../../utils/responsive';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'outline';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

function PrimaryButton({ 
  title, 
  variant = 'primary',
  disabled,
  buttonStyle,
  textStyle,
  ...touchableProps 
}: PrimaryButtonProps) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    button: {
      width: '100%',
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButton: {
      backgroundColor: colors.button.bg.secondary,
    },
    outlineButton: {
      borderWidth: wp(1),
      borderColor: colors.button.bg.secondary,
      backgroundColor: 'transparent',
    },
    disabledButton: {
      backgroundColor: colors.button.bg.inactive,
      opacity: 0.5,
    },
    buttonText: {
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
    primaryText: {
      color: colors.text.invert,
    },
    outlineText: {
      color: colors.button.bg.secondary,
    },
  });

  const buttonStyles = [
    styles.button,
    variant === 'primary' ? styles.primaryButton : styles.outlineButton,
    disabled && styles.disabledButton,
    buttonStyle,
  ];

  const textStyles = [
    styles.buttonText,
    variant === 'primary' ? styles.primaryText : styles.outlineText,
    textStyle,
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles}
      activeOpacity={0.8}
      disabled={disabled}
      {...touchableProps}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
