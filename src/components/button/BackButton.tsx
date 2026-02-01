import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { wp } from '../../utils/responsive';
import { useTheme } from '../../contexts/ThemeContext';

interface BackButtonProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  backButton: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
  },
  backImage: {
    width: wp(24),
    height: wp(24),
  },
});

function BackButton({ onPress }: BackButtonProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={
          isDarkMode
            ? require('../../assets/images/dark/back-dark.png')
            : require('../../assets/images/light/back-light.png')
        }
        style={styles.backImage}
      />
    </TouchableOpacity>
  );
}

export default BackButton;
