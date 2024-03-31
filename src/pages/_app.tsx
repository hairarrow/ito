import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
import { META } from "./_document";
import { Comic_Neue } from "next/font/google";

import { AppProps } from "next/app";

const comicn = Comic_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const date = new Date();
  const isAprilFools = date.getMonth() === 3 && date.getDate() === 1;

  return (
    <>
      <Head>
        <title>{META.title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <main className={isAprilFools ? comicn.className : ""}>
          <GlobalStyle />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
