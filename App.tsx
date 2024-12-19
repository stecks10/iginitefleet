import { ThemeProvider } from 'styled-components';
import { Signin } from './src/screens/SignIn';
import theme from './src/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Signin />;
    </ThemeProvider>
  );
}
