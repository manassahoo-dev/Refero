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
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-C0L59QJF4N'
        />
            
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C0L59QJF4N', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
};

export default App;
