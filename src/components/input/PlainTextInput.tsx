import { useRef, useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { spacing, fontSizes, wp } from '../../utils/responsive';
import { fonts } from '../../utils/fonts';
import { useTheme } from '../../contexts/ThemeContext';

interface PlainTextInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  error?: string;
}

function PlainTextInput({
  label,
  value,
  isPassword = false,
  error,
  ...textInputProps
}: PlainTextInputProps) {
  const { colors, isDarkMode } = useTheme();
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.xl,
      position: 'relative',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: wp(1),
      borderBottomColor: colors.border.primary,
    },
    input: {
      flex: 1,
      paddingVertical: spacing.sm + wp(4),
      paddingHorizontal: 0,
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.primary,
    },
    eyeButton: {
      padding: spacing.sm,
    },
    eyeIcon: {
      width: wp(24),
      height: wp(24),
    },
    labelContainer: {
      position: 'absolute',
      left: 0,
    },
    label: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
    },
    errorText: {
      color: colors.error.primary,
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      marginTop: -spacing.lg - spacing.sm,
      marginBottom: spacing.md,
    },
  });

  const handleFocus = (e: any) => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    textInputProps.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    textInputProps.onBlur?.(e);
  };

  const labelTop = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [spacing.sm + wp(4), -spacing.xxl + spacing.sm],
  });

  const labelFontSize = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [fontSizes.lg, fontSizes.md],
  });

  return (
    <View>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              top: labelTop,
            },
          ]}
          pointerEvents="none"
        >
          <Animated.Text
            style={[
              styles.label,
              {
                fontSize: labelFontSize,
              },
            ]}
          >
            {label}
          </Animated.Text>
        </Animated.View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            // onChangeText={onChange}
            secureTextEntry={isPassword && !isPasswordVisible}
            {...textInputProps}
          />
          {isPassword && (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              activeOpacity={0.7}
            >
              <Image
                source={
                  isPasswordVisible
                    ? isDarkMode
                      ? require('../../assets/images/dark/show-dark.png')
                      : require('../../assets/images/light/show-light.png')
                    : isDarkMode
                    ? require('../../assets/images/dark/hide-dark.png')
                    : require('../../assets/images/light/hide-light.png')
                }
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default PlainTextInput;
