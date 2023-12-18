import Head from "next/head";
import { Inter } from "next/font/google";

// フォントの指定
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikeista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>ホーム画面</main>
    </>
  );
}
