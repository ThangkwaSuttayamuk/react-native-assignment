/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import './src/configs/i18n/i18n'; // Initialize i18n
import { ThemeProvider } from './src/contexts/ThemeContext';
import RootNavigation from './src/navigations/RootNavigation';

const App: React.FC = () => {
  
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
