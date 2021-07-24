import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';
import '../styles/globals.css';
import theme from '../theme';
import { SearchProvider } from '../utils/search';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
