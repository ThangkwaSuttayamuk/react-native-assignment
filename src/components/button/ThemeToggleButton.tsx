import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { fontSizes, spacing, wp } from '../../utils/responsive';

interface ThemeToggleButtonProps {
  style?: any;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ style }) => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.track,
          {
            backgroundColor: isDarkMode
              ? colors.button.bg.secondary.dark
              : colors.button.bg.primary.dark,
          },
        ]}
      >
        <View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: isDarkMode ? wp(28) : 0 }],
              backgroundColor: colors.background.secondary.light,
            },
          ]}
        >
          <Text style={styles.icon}>{isDarkMode ? '🌙' : '☀️'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
  },
  track: {
    width: wp(60),
    height: wp(32),
    borderRadius: wp(16),
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  thumb: {
    width: wp(28),
    height: wp(28),
    borderRadius: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    fontSize: fontSizes.md,
  },
});

export default ThemeToggleButton;
