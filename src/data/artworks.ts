import { Artwork } from "../types";

// Curated presentation copy — cycled across imported artworks, editable per piece.
const CATEGORIES = [
  "Art digital",
  "Design Gráfico",
  "Conceitual",
  "Moda & Vetores",
  "Croqui de Moda",
  "Ilustração"
];

const DESCRIPTIONS = [
  "Estudo de fluidez cósmica usando gradientes violetas e carmim, explorando a gravidade e o movimento.",
  "Equilíbrio geométrico harmônico entre formas circulares e paleta autoral.",
  "Abstração de uma inteligência artificial sonhando em neon ciano e lilás.",
  "Refração de luz de alta intensidade sob polígonos translúcidos.",
  "Composição envolta em uma coroa solar eletromagnética ultra-brilhante.",
  "Esboço de alta costura com caimento volumoso e assimétrico.",
  "O contraste entre vegetação orgânica viva e estruturas modulares cibernéticas.",
  "Formas pastéis translúcidas que ecoam as ondas do oceano profundo.",
  "Expressão crua de entusiasmo cromático em alta saturação."
];

const GRADIENTS = [
  "from-purple-900 via-indigo-905 to-pink-600",
  "from-amber-500 via-orange-600 to-yellow-300",
  "from-cyan-500 via-blue-600 to-fuchsia-600",
  "from-rose-500 via-red-600 to-amber-400",
  "from-slate-900 via-purple-900 to-slate-900",
  "from-violet-600 via-pink-600 to-emerald-400",
  "from-emerald-500 via-teal-600 to-cyan-500",
  "from-sky-400 via-indigo-400 to-pink-300",
  "from-red-500 via-yellow-500 to-pink-500"
];

const artworkImages = import.meta.glob("../assets/artes/*.webp", {
  eager: true,
  import: "default"
}) as Record<string, string>;

export const PORTFOLIO_ARTWORKS: Artwork[] = Object.keys(artworkImages)
  .sort()
  .map((path, index) => ({
    id: index + 1,
    title: `Sem Título #${index + 1}`,
    category: CATEGORIES[index % CATEGORIES.length],
    description: DESCRIPTIONS[index % DESCRIPTIONS.length],
    gradient: GRADIENTS[index % GRADIENTS.length],
    image: artworkImages[path]
  }));
