import type { AppProps } from "next/app";

import { ThemeProvider } from "src/styles";
import GlobalStyle from "src/styles/globalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
