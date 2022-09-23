import '../styles/globals.css';
import Layout from './components/layout';
import type { AppProps } from 'next/app';
import Seo from '../links/seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
