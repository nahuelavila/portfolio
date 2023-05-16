import Head from 'next/head'
import { WAICard } from "../components/WAICard.jsx";
import { WIDCard } from "../components/WIDCard.jsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Nahuel Avila | Website</title>
        <meta name="description" content="Welcome to my website! How can I help you? Keep in mind that this website is still under construction." />
        <meta name="viewport" content="width=device-width" />
        <meta name="keywords" content="nahuel avila, portfolio, programmer, coding, javascript, nodejs, python"/>
      </Head>
      <WAICard />
      <WIDCard />
    </main>
  );
}
