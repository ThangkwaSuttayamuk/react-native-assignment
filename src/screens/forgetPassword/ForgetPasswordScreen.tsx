import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/button/BackButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import { useTheme } from '../../contexts/ThemeContext';
import { fonts } from '../../utils/fonts';
import { fontSizes, spacing, wp } from '../../utils/responsive';
import useForgetPasswordViewModel from './useForgetPasswordViewModel';

function ForgetPasswordScreen() {
  const {
    emailOrPhone,
    isLoading,
    isSubmitEnabled,
    onEmailOrPhoneChange,
    onSubmit,
    onBack,
  } = useForgetPasswordViewModel();
  
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background.secondary,
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
      color: colors.icon.primary,
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
      marginBottom: spacing.xxl,
      lineHeight: fontSizes.xxxl,
    },
    inputContainer: {
      marginBottom: spacing.xl,
    },
    input: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      paddingVertical: spacing.sm + wp(4),
      paddingHorizontal: 0,
      borderBottomWidth: wp(1),
      borderBottomColor: colors.text.secondary,
    },
    inputFocused: {
      borderBottomColor: colors.text.secondary
    },
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={onBack} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>ลืมรหัสผ่าน?</Text>
          
          <Text style={styles.description}>
            กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                emailOrPhone.length > 0 && styles.inputFocused,
              ]}
              value={emailOrPhone}
              onChangeText={onEmailOrPhoneChange}
              placeholder="อีเมล / เบอร์โทรศัพท์"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>

          <PrimaryButton
            title="ส่ง"
            onPress={onSubmit}
            disabled={!isSubmitEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ForgetPasswordScreen;
