import 'bootstrap/dist/css/bootstrap.css';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import Layout from '../components/Layout';
import Head from 'next/head';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-C0L59QJF4N'
        ></Script>
        <Script>
          {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C0L59QJF4N');
          `}
        </Script>
        <Head>
          <title>Refero</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default App;
