import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from "react-native";
import { useNavigate } from '../../hooks/useNavigation';
import { fonts } from '../../utils/fonts';
import { fontSizes } from '../../utils/responsive';
import { useTheme } from '../../contexts/ThemeContext';

function SplashScreen() {
  const navigate = useNavigate();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.button.bg.secondary,
    },
    titleText: {
      fontSize: fontSizes.xxxl,
      fontFamily: fonts.bold,
      color: colors.text.invert,
      textAlign: 'center',
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      // Start fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800, // 800ms fade out
        useNativeDriver: true,
      }).start(() => {
        // Navigate after animation completes
        navigate.navigation('Welcome');
      });
    }, 1500); // Wait 1.5 seconds before starting fade

    return () => clearTimeout(timer);
  }, [navigate, fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.titleText}>
            Welcome
        </Text>
    </Animated.View>
  );
}

export default SplashScreen;
