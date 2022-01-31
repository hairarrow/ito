import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import { META } from "./_document";

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<title>{META.title}</title>
				</Head>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle />
						<Component {...pageProps} />
					</>
				</ThemeProvider>
			</>
		);
	}
}
