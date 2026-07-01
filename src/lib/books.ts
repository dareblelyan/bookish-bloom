export type Book = {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  coverGradient: string;
  coverAccent: string;
};

export const books: Book[] = [
  {
    slug: "the-overstory",
    title: "The Overstory",
    author: "Richard Powers",
    date: "March 12, 2026",
    category: "Literary Fiction",
    excerpt:
      "A sweeping, cathedral-like novel that braids nine human lives around the quiet, ancient intelligence of trees.",
    content: [
      "Richard Powers writes with the patience of a botanist and the ambition of a symphonist. The Overstory begins as nine separate portraits — a Vietnam vet, an artist, a graduate student, a coder — and slowly, almost imperceptibly, roots them together.",
      "What surprised me most is how the novel earns its scale. The trees are not metaphors; they are characters, and by the final section I found myself reading dialogue between humans as the smaller, more transient story.",
      "It is a book that changes the way you walk past a maple. Highly recommended for anyone who wants fiction to expand the borders of their attention.",
    ],
    coverGradient: "linear-gradient(160deg, #2f4a3a 0%, #6b8f71 100%)",
    coverAccent: "#e9dcc0",
  },
  {
    slug: "piranesi",
    title: "Piranesi",
    author: "Susanna Clarke",
    date: "February 24, 2026",
    category: "Fantasy",
    excerpt:
      "A slim, luminous puzzle-box of a novel set in an infinite house of tides, statues, and forgetting.",
    content: [
      "Piranesi is short enough to read in an afternoon and strange enough to reread for a lifetime. Clarke gives us a narrator whose sincerity is so complete that the mystery of his world becomes indistinguishable from the mystery of his own kindness.",
      "The prose is quiet, almost devotional. Every hall, every statue, every seabird is catalogued with the care of a monk copying scripture — and that care is, in the end, the book's argument.",
      "A perfect winter read. Bring a candle.",
    ],
    coverGradient: "linear-gradient(160deg, #1c2740 0%, #4a6a94 100%)",
    coverAccent: "#d9c48a",
  },
  {
    slug: "a-gentleman-in-moscow",
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    date: "January 30, 2026",
    category: "Historical Fiction",
    excerpt:
      "Three decades of Russian history, refracted through the manners and small mercies of a single hotel.",
    content: [
      "Towles' Count Rostov is one of the most companionable narrators in recent memory — a man sentenced to house arrest inside the Metropol Hotel who responds by making a life of astonishing depth within its walls.",
      "The novel's central trick is that its constraints keep tightening while its interior keeps widening. History rages outside; inside, a waiter debates the correct wine for bouillabaisse.",
      "Warm without being sentimental. A book I press into the hands of anyone who thinks they are done with historical fiction.",
    ],
    coverGradient: "linear-gradient(160deg, #5a1f1f 0%, #a8624a 100%)",
    coverAccent: "#f2e3c4",
  },
  {
    slug: "the-employees",
    title: "The Employees",
    author: "Olga Ravn",
    date: "January 8, 2026",
    category: "Speculative",
    excerpt:
      "A workplace novel disguised as a spaceship log — or possibly the other way around.",
    content: [
      "Ravn's slim book is structured as a series of numbered statements collected from the crew of the Six-Thousand Ship. Some speakers are human; some are not. The pleasure is in the seams.",
      "It reads like an HR report written by a poet. Grief, longing, and the smell of strange objects accumulate in the margins.",
      "Perfect for readers who liked Solaris but wanted less certainty.",
    ],
    coverGradient: "linear-gradient(160deg, #2a2a2a 0%, #6d6d6d 100%)",
    coverAccent: "#c9a961",
  },
];

export const recommendations = books.slice(0, 3);
