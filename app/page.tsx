import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
    </div>
  );
}
