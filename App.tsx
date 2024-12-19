import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { ANDROID_CLIENT_ID } from '@env';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Loading } from './src/components/Loading';
import { Signin } from './src/screens/SignIn';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  console.log(ANDROID_CLIENT_ID);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Signin />
    </ThemeProvider>
  );
}
