import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import usePinViewModel from './usePinViewModel';
import { spacing, fontSizes, wp, hp } from '../../utils/responsive';
import { fonts } from '../../utils/fonts';
import { useTheme } from '../../contexts/ThemeContext';

function PinScreen() {
  const { pin, activeButton, onNumberPress, onBackspace, title, errorMessage, type, handleBiometricAuth } =
    usePinViewModel();
  const { colors, isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background.primary,
      paddingHorizontal: spacing.lg,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      paddingTop: hp(80),
    },
    title: {
      fontSize: fontSizes.xxl,
      fontFamily: fonts.semiBold,
      color: colors.text.primary,
      marginBottom: spacing.sm,
    },
    errorText: {
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      color: colors.error.primary,
      marginBottom: spacing.xl,
      textAlign: 'center',
    },
    pinIndicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: hp(80),
      gap: spacing.md,
    },
    pinDot: {
      width: wp(20),
      height: wp(20),
      borderRadius: wp(10),
      borderWidth: wp(2),
      borderColor: colors.border.primary,
      backgroundColor: 'transparent',
    },
    pinDotFilled: {
      backgroundColor: colors.button.bg.secondary,
      borderColor: colors.button.bg.secondary,
    },
    keypadContainer: {
      width: '100%',
      maxWidth: wp(320),
      paddingHorizontal: spacing.xxl - spacing.sm,
    },
    keypadRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: spacing.xxl - spacing.sm,
    },
    keypadButton: {
      width: wp(80),
      height: wp(80),
      borderRadius: wp(40),
      borderWidth: wp(2),
      borderColor: colors.border.primary,
      backgroundColor: colors.background.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    keypadButtonActive: {
      backgroundColor: colors.button.bg.secondary,
      borderColor: colors.button.bg.secondary,
    },
    keypadButtonText: {
      fontSize: fontSizes.massive,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
    },
    keypadButtonTextActive: {
      color: colors.text.invert,
    },
    backspaceButton: {
      width: wp(80),
      height: wp(80),
      justifyContent: 'center',
      alignItems: 'center',
    },
    backspaceIcon: {
      fontSize: fontSizes.huge,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
    },
    emptySpace: {
      width: wp(80),
      height: wp(80),
    },
    textContainer: {
      width: '100%',
      alignItems: 'center',
      height: hp(100),
    },
    fingerprintButton: {
      width: wp(80),
      height: wp(80),
      justifyContent: 'center',
      alignItems: 'center',
    },
    fingerprintIcon: {
      width: wp(48),
      height: wp(48),
    },
    footer: {
      paddingVertical: spacing.lg,
      alignItems: 'center',
    },
    forgetPinText: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
    },
  });

  const renderKeypadButton = (number: string) => {
    const isActive = activeButton === number;

    return (
      <TouchableOpacity
        key={number}
        style={[styles.keypadButton, isActive && styles.keypadButtonActive]}
        onPress={() => onNumberPress(number)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.keypadButtonText,
            isActive && styles.keypadButtonTextActive,
          ]}
        >
          {number}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title()}</Text>
            <Text style={styles.errorText}>{errorMessage || ' '}</Text>
          </View>

          <View style={styles.pinIndicatorContainer}>
            {pin.map((digit, index) => (
              <View
                key={index}
                style={[styles.pinDot, digit !== '' && styles.pinDotFilled]}
              />
            ))}
          </View>

          <View style={styles.keypadContainer}>
            {/* Row 1 */}
            <View style={styles.keypadRow}>
              {renderKeypadButton('1')}
              {renderKeypadButton('2')}
              {renderKeypadButton('3')}
            </View>

            {/* Row 2 */}
            <View style={styles.keypadRow}>
              {renderKeypadButton('4')}
              {renderKeypadButton('5')}
              {renderKeypadButton('6')}
            </View>

            {/* Row 3 */}
            <View style={styles.keypadRow}>
              {renderKeypadButton('7')}
              {renderKeypadButton('8')}
              {renderKeypadButton('9')}
            </View>

            {/* Row 4 */}
            <View style={styles.keypadRow}>
              {type === 'access' ? (
                <TouchableOpacity
                  style={styles.fingerprintButton}
                  onPress={handleBiometricAuth}
                  activeOpacity={0.7}
                >
                  <Image
                    source={
                      isDarkMode
                        ? require('../../assets/images/dark/touch-id-dark.png')
                        : require('../../assets/images/light/touch-id-light.png')
                    }
                    style={styles.fingerprintIcon}
                  />
                </TouchableOpacity>
              ) : (
                <View style={styles.emptySpace} />
              )}
              {renderKeypadButton('0')}
              <TouchableOpacity
                style={styles.backspaceButton}
                onPress={onBackspace}
                activeOpacity={0.7}
              >
                <Text style={styles.backspaceIcon}>⌫</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {type === 'access' && (
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => console.log('Forgot PIN pressed')}
              activeOpacity={0.7}
            >
              <Text style={styles.forgetPinText}>ลืมรหัส PIN ?</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default PinScreen;
