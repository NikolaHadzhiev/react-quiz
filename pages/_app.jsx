import '../styles/globals.css'
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>React code quiz</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/sly1ocm.css" />
      </Head>
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

