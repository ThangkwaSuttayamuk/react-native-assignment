import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { fonts } from '../../utils/fonts';
import { borderRadius, fontSizes, hp, spacing, wp } from '../../utils/responsive';
import useTouchIDViewModel from './useTouchIDViewModel';

function TouchIDScreen() {
  const { isAuthenticating, onSetupBiometric, onSkip } = useTouchIDViewModel();
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
      paddingTop: hp(60),
    },
    title: {
      fontSize: fontSizes.massive,
      fontFamily: fonts.bold,
      color: colors.text.primary,
      marginBottom: spacing.lg,
    },
    description: {
      fontSize: fontSizes.lg,
      fontFamily: fonts.regular,
      color: colors.text.secondary,
      lineHeight: fontSizes.xxxl,
      marginBottom: hp(80),
    },
    fingerprintContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: hp(120),
    },
    fingerprintCircle: {
      width: wp(160),
      height: wp(160),
      borderRadius: wp(80),
      backgroundColor: colors.background.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: wp(4),
      },
      shadowOpacity: 0.1,
      shadowRadius: wp(12),
      elevation: 5,
    },
    fingerprintIcon: {
      width: wp(80),
      height: wp(80),
    },
    buttonContainer: {
      width: '100%',
    },
    setupButton: {
      backgroundColor: colors.button.bg.secondary,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.lg,
    },
    setupButtonDisabled: {
      backgroundColor: colors.button.bg.primary.dark,
    },
    setupButtonText: {
      color: colors.text.invert,
      fontSize: fontSizes.xl,
      fontFamily: fonts.semiBold,
    },
    skipButton: {
      paddingVertical: spacing.sm + spacing.xs,
      alignItems: 'center',
    },
    skipButtonText: {
      color: colors.button.bg.secondary,
      fontSize: fontSizes.lg,
      fontFamily: fonts.semiBold,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Touch ID</Text>
          
          <Text style={styles.description}>
            ตั้งค่าล็อคอินด้วยลายนิ้วมือ{'\n'}เพื่อการเข้าถึงที่รวดเร็วขึ้น
          </Text>

          <View style={styles.fingerprintContainer}>
            <View style={styles.fingerprintCircle}>
              <Image
                source={
                  isDarkMode
                    ? require('../../assets/images/dark/touch-id-dark.png')
                    : require('../../assets/images/light/touch-id-light.png')
                }
                style={styles.fingerprintIcon}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.setupButton,
                isAuthenticating && styles.setupButtonDisabled,
              ]}
              onPress={onSetupBiometric}
              disabled={isAuthenticating}
              activeOpacity={0.8}
            >
              {isAuthenticating ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.setupButtonText}>
                  ตั้งค่าลายนิ้วมือ
                </Text>
              )}
            
            </TouchableOpacity> 

            <TouchableOpacity
              style={styles.skipButton}
              onPress={onSkip}
              disabled={isAuthenticating}
              activeOpacity={0.7}
            >
              <Text style={styles.skipButtonText}>ข้าม</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TouchIDScreen;
