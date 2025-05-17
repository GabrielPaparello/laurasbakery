import { Cta } from "./components/Cta";
import { Hero } from "./components/Hero";
import { Lugar } from "./components/Lugar";
import { Menu } from "./components/Menu";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <Lugar />
      <Cta />
      <Menu />
    </div>
  );
}
