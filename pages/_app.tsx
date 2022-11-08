/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
