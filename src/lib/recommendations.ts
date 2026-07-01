// Manually curated recommendations for the sidebar.
// Edit this list by hand — it is intentionally not derived from the books array.
export type Recommendation = {
  title: string;
  author: string;
  coverGradient: string;
  href?: string;
};

export const manualRecommendations: Recommendation[] = [
  {
    title: "Bluets",
    author: "Maggie Nelson",
    coverGradient: "linear-gradient(160deg, #1e3a8a 0%, #60a5fa 100%)",
  },
  {
    title: "Stoner",
    author: "John Williams",
    coverGradient: "linear-gradient(160deg, #3f2a14 0%, #a97c50 100%)",
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    coverGradient: "linear-gradient(160deg, #0b3d3b 0%, #5fb0a7 100%)",
  },
  {
    title: "Gilead",
    author: "Marilynne Robinson",
    coverGradient: "linear-gradient(160deg, #4a3b1f 0%, #c9a961 100%)",
  },
  {
    title: "Housekeeping",
    author: "Marilynne Robinson",
    coverGradient: "linear-gradient(160deg, #2b2b3d 0%, #7a7a99 100%)",
  },
];
