import '../styles/globals.css';
import { CssBaseline, GeistProvider } from '@geist-ui/core';
import Layout from '../components/Layout';
import Script from 'next/script';

const App = ({ Component, pageProps }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Layout>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=UA-49136745-2'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-49136745-2');
        `}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
};

export default App;
