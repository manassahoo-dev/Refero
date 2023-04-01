import 'bootstrap/dist/css/bootstrap.css';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import Layout from '../components/Layout';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
          crossOrigin='anonymous'
        />
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
    </SessionProvider>
  );
};

export default App;
