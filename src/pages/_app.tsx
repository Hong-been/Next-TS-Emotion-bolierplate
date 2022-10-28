import type {AppProps} from "next/app";
import {ThemeProvider, GlobalStyle} from "src/styles";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
