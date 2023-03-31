import { CssBaseline, GeistProvider } from '@geist-ui/core';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
};

export default App;
