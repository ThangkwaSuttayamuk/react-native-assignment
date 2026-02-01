import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/button/BackButton';
import useViewModel from './useViewModel';
import { useTranslation } from 'react-i18next';
import { spacing, fontSizes, borderRadius, wp, hp } from '../../utils/responsive';
import { fonts } from '../../utils/fonts';
import { useTheme } from '../../contexts/ThemeContext';

function RequestOtpScreen() {
  const {t} = useTranslation();
  const { maskedPhoneNumber, supportPhone, onRequestOtp, onBack } = useViewModel();
  const { colors, isDarkMode } = useTheme();

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
    content: {
      flex: 1,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: hp(100),
    },
    iconContainer: {
      marginBottom: spacing.xxl,
    },
    icon: {
      width: wp(80),
      height: wp(80),
    },
    titleText: {
      fontSize: fontSizes.xxl,
      fontFamily: fonts.semiBold,
      color: colors.text.primary,
      marginBottom: spacing.lg,
      textAlign: 'center',
    },
    phoneNumber: {
      fontSize: fontSizes.xxxl,
      fontFamily: fonts.bold,
      color: colors.button.bg.secondary,
      marginBottom: hp(60),
    },
    requestButton: {
      backgroundColor: colors.button.bg.secondary,
      width: '100%',
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.xxl,
    },
    requestButtonText: {
      color: colors.text.invert,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
    supportText: {
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      textAlign: 'center',
      lineHeight: fontSizes.xxl,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={onBack} />
        </View>

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Image
              source={
                isDarkMode
                  ? require('../../assets/images/dark/otp-dark.png')
                  : require('../../assets/images/light/otp-light.png')
              }
              style={styles.icon}
            />
          </View>

          <Text style={styles.titleText}>
            {t('requestOTP.title')}
          </Text>

          <Text style={styles.phoneNumber}>{maskedPhoneNumber}</Text>

          <TouchableOpacity
            style={styles.requestButton}
            onPress={onRequestOtp}
            activeOpacity={0.8}
          >
            <Text style={styles.requestButtonText}>{t('requestOTP.button')}</Text>
          </TouchableOpacity>

          <Text style={styles.supportText}>
            {t('requestOTP.support')}{supportPhone}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RequestOtpScreen;
