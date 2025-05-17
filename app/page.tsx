import { Hero } from "./components/Hero";
import { Lugar } from "./components/Lugar";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <Lugar />
    </div>
  );
}
