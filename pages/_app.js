import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';
import '../styles/globals.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
