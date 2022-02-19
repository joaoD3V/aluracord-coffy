import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';
import { UserContextProvider } from 'contexts/UserContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Coffy</title>
        <link rel="shortcut icon" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <meta
          name="description"
          content="Seja bem vindo ao Coffy! ☕
          Pegue um café e vamos conversar"
        />
      </Head>
      <GlobalStyles />
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}
export default App;
