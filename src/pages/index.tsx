import Main from "@/components/main/main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leaf - Portfolio</title>
        <meta name="description" content="프론트엔드 개발자 서환주의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
