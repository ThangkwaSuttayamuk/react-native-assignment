import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/button/BackButton';
import { useTheme } from '../../contexts/ThemeContext';
import { fonts } from '../../utils/fonts';
import { fontSizes, hp, spacing, wp } from '../../utils/responsive';
import useOtpViewModel from './useOtpViewModel';

function OtpScreen() {
  const {
    phoneNumber,
    otp,
    resendTimer,
    isResendEnabled,
    onOtpChange,
    onOtpKeyPress,
    onResendOtp,
    onBack,
    setInputRef,
  } = useOtpViewModel();
  
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.lg,
    },
    backButton: {
      width: wp(40),
      height: wp(40),
      justifyContent: 'center',
    },
    backIcon: {
      fontSize: fontSizes.xxxl,
      fontFamily: fonts.regular,
      color: colors.icon.primary
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.lg,
    },
    title: {
      fontSize: fontSizes.huge,
      fontFamily: fonts.bold,
      color: colors.text.primary,
      marginBottom: spacing.md,
    },
    description: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      marginBottom: spacing.sm,
      lineHeight: fontSizes.xxxl,
    },
    phoneNumber: {
      fontSize: fontSizes.lg,
      color: colors.text.secondary,
      fontFamily: fonts.medium,
      marginBottom: spacing.xxl,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp(60),
    },
    otpInput: {
      width: wp(48),
      height: hp(56),
      borderBottomWidth: wp(2),
      borderBottomColor: colors.text.primary,
      fontSize: fontSizes.massive,
      fontFamily: fonts.semiBold,
      color: colors.text.primary,
      textAlign: 'center',
      paddingBottom: spacing.sm,
    },
    otpInputFilled: {
      borderBottomColor: colors.text.primary,
    },
    footer: {
      alignItems: 'center',
      marginTop: 'auto',
      paddingBottom: spacing.xxl,
    },
    resendText: {
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      marginBottom: spacing.sm,
    },
    resendButton: {
      paddingVertical: spacing.sm,
    },
    resendButtonText: {
      fontSize: fontSizes.lg,
      color: colors.text.primary,
      fontFamily: fonts.semiBold,
    },
    resendButtonDisabled: {
      color: colors.button.outline.primary,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={onBack} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>ยืนยันตัวตน</Text>

          <Text style={styles.description}>
            กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ
          </Text>

          <Text style={styles.phoneNumber}>{phoneNumber}</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => setInputRef(ref, index)}
                style={[styles.otpInput, digit ? styles.otpInputFilled : null]}
                value={digit}
                onChangeText={value => onOtpChange(value, index)}
                onKeyPress={({ nativeEvent: { key } }) =>
                  onOtpKeyPress(key, index)
                }
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
                autoFocus={index === 0}
              />
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={styles.resendText}>หากคุณไม่ได้รับรหัส?</Text>

            <TouchableOpacity
              style={styles.resendButton}
              onPress={onResendOtp}
              disabled={!isResendEnabled}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.resendButtonText,
                  !isResendEnabled && styles.resendButtonDisabled,
                ]}
              >
                ส่งรหัสใหม่ ({resendTimer})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OtpScreen;
