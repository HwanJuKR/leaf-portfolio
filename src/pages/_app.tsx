import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/pages/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leaf - Portfolio</title>
        <meta
          name="description"
          content="프론트엔드 개발자 서환주의 포트폴리오"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
