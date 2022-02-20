import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme } from "@/src/theme";
import { createEmotionCache } from "@/src/createEmotionCache";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

type PortfolioAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

function PortfolioApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: PortfolioAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              background:
                "radial-gradient(ellipse at bottom, #0B1637 0%, #090A0F 100%)",
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default PortfolioApp;
