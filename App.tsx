import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { REALM_APP_ID } from '@env';
import { AppProvider, UserProvider } from '@realm/react';

import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Signin } from './src/screens/SignIn';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700 }}
        >
          <UserProvider fallback={Signin}>
            <Home />
          </UserProvider>
        </SafeAreaView>
      </ThemeProvider>
    </AppProvider>
  );
}
