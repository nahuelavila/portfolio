import Head from 'next/head'
import { WAICard } from "../components/WAICard.jsx";
import { WIDCard } from "../components/WIDCard.jsx";
import { Footer } from "../components/Footer.jsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Nahuel Avila | Website</title>
        <meta name="description" content="Web developer with strong experience in testing and software development, specialized in React and Node.js. Focused on building efficient, scalable, and user-centered solutions." />
        <meta name="viewport" content="width=device-width" />
        <meta name="keywords" content="nahuel avila, portfolio, programmer, coding, javascript, nodejs, python"/>
      </Head>
      <WAICard />
      <WIDCard />
      <Footer />
    </main>
  );
}
