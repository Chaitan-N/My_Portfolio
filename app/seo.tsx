import { Metadata } from "next";

export const seoMetadata: Metadata = {
  viewport: "initial-scale=1.0, width=device-width",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
  title: "Chaitanya.co | Chaitanya Narra",
  description:
    "I blog about python software development, machine learning, data engineering, and flow blockchain development.",
  openGraph: {
    title: "Chaitanya.co",
    description:
      "I blog about python software development, machine learning, data engineering, and flow blockchain development.",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/images/louis.jpg",
        width: 224,
        height: 224,
        alt: "Louis Guitton",
        type: "image/jpg",
      },
    ],
    siteName: "Chaitanya.co",
  },
  twitter: {
    creator: "@louis_guitton",
    site: "@louis_guitton",
    card: "summary_large_image",
    title: "guitton.co",
    description:
      "I blog about python software development, machine learning, data engineering, and flow blockchain development.",
    images: "/images/louis.jpg",
  },
  keywords: [
    "blog",
    "nlp",
    "machine learning",
    "data engineering",
    "python",
    "blockchain",
  ],
  authors: [{ name: "Chaitanya Narra", url: "https://guitton.co" }],
};
