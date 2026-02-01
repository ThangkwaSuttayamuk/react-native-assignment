import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import PrimaryButton from '../../components/button/PrimaryButton';
import PlainTextInput from '../../components/input/PlainTextInput';
import useLoginViewModel from './useLoginViewModel';
import { spacing, fontSizes, borderRadius, wp, hp } from '../../utils/responsive';
import { fonts } from '../../utils/fonts';
import { useTheme } from '../../contexts/ThemeContext';

function LoginScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: hp(150),
      paddingHorizontal: spacing.lg,
      backgroundColor:  colors.background.primary,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor:  colors.background.primary,
    },
    scrollView: {
      flex: 1,
      backgroundColor:  colors.background.primary,
    },
    input: {
      backgroundColor: 'transparent',
      borderBottomWidth: wp(1),
      borderBottomColor: colors.text.secondary,
      paddingVertical: spacing.sm + wp(4),
      paddingHorizontal: 0,
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.primary,
      marginBottom: spacing.xl,
    },
    rememberContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.xl,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: wp(24),
      height: wp(24),
      borderWidth: wp(2),
      borderColor: colors.text.secondary,
      borderRadius: borderRadius.sm,
      marginRight: spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background.secondary,
    },
    checkboxChecked: {
      backgroundColor: colors.button.bg.secondary,
      borderColor: colors.button.bg.secondary,
    },
    checkboxText: {
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
    },
    forgotPassword: {
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
    },
    loginButton: {
      backgroundColor: colors.button.bg.secondary,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.xxl,
    },
    loginButtonText: {
      color: colors.text.invert,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: spacing.xl,
      marginTop: spacing.xl,
    },
    dividerLine: {
      flex: 1,
      height: wp(1),
      backgroundColor: colors.text.secondary,
    },
    dividerText: {
      fontSize: fontSizes.md,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      marginHorizontal: spacing.md,
    },
    registerButton: {
      backgroundColor: 'transparent',
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      borderWidth: wp(1),
      borderColor: colors.button.outline.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    registerButtonText: {
      color: colors.text.primary,
      fontSize: fontSizes.lg,
      fontFamily: fonts.medium,
    },
    rememberMeCheckText: {
      color: colors.text.invert,
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
    },
  });

  const {
    isKeyboardVisible,
    rememberMe,
    setRememberMe,
    control,
    errors,
    handleSubmit,
    onLogin,
    onLoginError,
    onForgotPassword,
    onRegister,
  } = useLoginViewModel();

//   const { errors } = useFormState({ control});

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      automaticallyAdjustKeyboardInsets={true}
      scrollEnabled={isKeyboardVisible}
    >
      <View style={[styles.container]}>
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value },
          }) => (
            <View style={{ marginBottom: spacing.md }}>
              <PlainTextInput
                label={t('login.usernamePlaceholder')}
                value={value}
                onChangeText={e => {
                    onChange(e);
                  }}
                onBlur={onBlur}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder=""
                error={errors?.email?.message as string}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <PlainTextInput
              label={t('login.passwordPlaceholder')}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder=""
              isPassword={true}
              error={error?.message}
            />
          )}
        />

        <View style={styles.rememberContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}
            >
              <View
                style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
              >
                {rememberMe && (
                  <Text style={styles.rememberMeCheckText}>✓</Text>
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.checkboxText}>{t('login.rememberMe')}</Text>
          </View>

          <TouchableOpacity onPress={onForgotPassword} activeOpacity={0.7}>
            <Text style={styles.forgotPassword}>
              {t('login.forgotPassword')}
            </Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton
          title={t('login.button.login')}
          onPress={handleSubmit(onLogin, onLoginError)}
        />

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>{t('login.noAccount')}</Text>
          <View style={styles.dividerLine} />
        </View>

        <PrimaryButton
          title={t('login.button.register')}
          onPress={onRegister}
          variant="outline"
        />
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
