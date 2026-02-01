import { StyleSheet, Text, View } from 'react-native';
import useWelcomeViewModel from './useWelcomeViewModel';
import { useTranslation } from 'react-i18next';
import PrimaryButton from '../../components/button/PrimaryButton';
import { spacing, fontSizes } from '../../utils/responsive';
import { fonts } from '../../utils/fonts';
import { useTheme } from '../../contexts/ThemeContext';

function WelcomeScreen() {
  const { onSelectLanguage } = useWelcomeViewModel();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background.primary,
      paddingHorizontal: spacing.lg,
    },
    titleText: {
      fontSize: fontSizes.massive,
      fontFamily: fonts.bold,
      color: colors.text.primary,
      marginBottom: spacing.sm,
    },
    subtitleText: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      marginBottom: spacing.xxl,
    },
    buttonContainer: {
      width: '100%',
      flexDirection: 'column',
      gap: spacing.sm + spacing.xs,
    },
    button: {
      backgroundColor: colors.button.bg.secondary,
      width: '100%',
      paddingVertical: spacing.md,
      borderRadius: spacing.sm,
      marginVertical: spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: colors.text.invert,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
    titleContainer: {
      width: '100%',
      alignItems: 'flex-start',
      marginBottom: spacing.xxl,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{t('welcome.title')}</Text>
        <Text style={styles.subtitleText}>{t('welcome.selectLanguage')}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={t('welcome.english')}
          onPress={() => onSelectLanguage('en')}
        />

        <PrimaryButton
          title={t('welcome.thai')}
          onPress={() => onSelectLanguage('th')}
        />
      </View>
    </View>
  );
}

export default WelcomeScreen;
