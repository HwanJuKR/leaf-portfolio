import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/pages/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
