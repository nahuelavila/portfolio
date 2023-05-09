import { WAICard } from "../components/WAICard.jsx";
import { WIDCard } from "../components/WIDCard.jsx";

export default function Home() {
  return (
    <main>
      {/* <section className="header">header</section> */}
      <section className="whoamai-card">
        <WAICard />
        <WIDCard />
      </section>
    </main>
  );
}
