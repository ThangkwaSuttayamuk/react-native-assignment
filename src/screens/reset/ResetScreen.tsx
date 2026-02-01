import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { fonts } from '../../utils/fonts';
import { borderRadius, fontSizes, hp, spacing, wp } from '../../utils/responsive';
import useResetViewModel from './useResetViewModel';

function ResetScreen() {
  const { onContinue } = useResetViewModel();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background.primary,
      paddingHorizontal: spacing.lg,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    iconContainer: {
      width: wp(200),
      height: wp(200),
      borderRadius: wp(100),
      borderWidth: wp(3),
      borderColor: colors.button.bg.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.xxl,
    },
    checkIcon: {
      fontSize: hp(80),
      color: colors.button.bg.secondary,
      fontFamily: fonts.semiBold,
    },
    title: {
      fontSize: fontSizes.massive,
      fontFamily: fonts.bold,
      color: colors.text.primary,
      marginBottom: spacing.md,
    },
    description: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      textAlign: 'center',
      marginBottom: hp(60),
    },
    buttonContainer: {
      width: '100%',
      paddingBottom: spacing.xxl,
    },
    continueButton: {
      backgroundColor: colors.button.bg.secondary,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    continueButtonText: {
      color: colors.text.invert,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>

          <Text style={styles.title}>สำเร็จ</Text>
          
          <Text style={styles.description}>
            รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={onContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>ตกลง</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ResetScreen;
