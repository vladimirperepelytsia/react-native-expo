import 'react-native-reanimated';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';

import App from '@/Screens/App';
import { persistor, store } from '@/store/store';

const InterRegular = require('../assets/fonts/Inter-Regular.ttf');
const UbuntuRegular = require('../assets/fonts/Ubuntu-Regular.ttf');

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

Sentry.init({
  enabled: !!process.env.EXPO_PUBLIC_SENTRY_DSN,
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function RootLayout() {
  const [loaded] = useFonts({
    InterRegular,
    UbuntuRegular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Sentry.wrap(RootLayout);
