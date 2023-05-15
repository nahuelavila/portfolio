import Head from 'next/head'
import { WAICard } from "../components/WAICard.jsx";
import { WIDCard } from "../components/WIDCard.jsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Nahuel Avila</title>
        <meta name="description" content="Nahuel Avila&apos;s portfolio" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <WAICard />
      <WIDCard />
    </main>
  );
}
