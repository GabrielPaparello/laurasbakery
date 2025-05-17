import { Nunito, Tinos } from "next/font/google";

// Nunito sí acepta subsets
const nunito = Nunito({ subsets: ["latin"] });

// Tinos NO acepta subsets, pero sí necesita los pesos definidos
const tinos = Tinos({ weight: ["400", "700"], preload:false }); // puedes ajustar según lo que necesites

export { nunito, tinos };
