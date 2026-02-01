import { useTranslation } from 'react-i18next';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/button/BackButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import { useTheme } from '../../contexts/ThemeContext';
import { fonts } from '../../utils/fonts';
import { borderRadius, fontSizes, spacing, wp } from '../../utils/responsive';
import usePolicyViewModel from './usePolicyViewModel';

function PolicyScreen() {
  const { onDecline, onAccept, onBack, handleScroll, hasScrolledToBottom } =
    usePolicyViewModel();
  const { t } = useTranslation();
  const { colors, isDarkMode } = useTheme();
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
    contentCard: {
      flex: 1,
      backgroundColor: colors.background.secondary,
      marginTop: spacing.lg,
      borderTopLeftRadius: spacing.lg,
      borderTopRightRadius: spacing.lg,
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.xl,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: wp(-2),
      },
      shadowOpacity: 0.05,
      shadowRadius: wp(8),
      elevation: 5,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    icon: {
      width: wp(32),
      height: wp(32),
      marginRight: spacing.sm + spacing.xs,
    },
    title: {
      fontSize: fontSizes.xxxl,
      fontFamily: fonts.semiBold,
      color: colors.text.primary,
    },
    divider: {
      height: wp(1),
      backgroundColor: colors.border.primary,
      marginBottom: spacing.lg,
    },
    scrollContent: {
      flex: 1,
      marginBottom: spacing.lg,
    },
    policyText: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      lineHeight: fontSizes.xxxl,
      color: colors.text.secondary,
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingBottom: spacing.xxl,
      gap: spacing.sm + spacing.xs,
    },
    button: {
      flex: 1,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    declineButton: {
      backgroundColor: colors.background.secondary,
      borderWidth: wp(1),
      borderColor: colors.button.bg.secondary,
    },
    acceptButton: {
      backgroundColor: colors.button.bg.secondary,
    },
    acceptButtonDisabled: {
      backgroundColor: colors.button.bg.primary.dark,
      opacity: 0.5,
    },
    declineButtonText: {
      color: colors.button.bg.secondary,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
    acceptButtonText: {
      color: colors.text.invert,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
  });
  
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <BackButton onPress={onBack} />
      </View>

      <View style={styles.contentCard}>
        <View style={styles.titleContainer}>
          <Image
            source={
              isDarkMode
                ? require('../../assets/images/dark/policy-dark.png')
                : require('../../assets/images/light/policy-light.png')
            }
            style={styles.icon}
          />
          <Text style={styles.title}>{t('policy.title')}</Text>
        </View>

        <View style={styles.divider} />

        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Text style={styles.policyText}>{t('policy.content')}</Text>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={t('policy.decline')}
            onPress={onDecline}
            buttonStyle={styles.button}
            variant='outline'
          />

          <PrimaryButton
            title={t('policy.accept')}
            onPress={onAccept}
            disabled={!hasScrolledToBottom}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PolicyScreen;
