import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zapinhor.github.io/Portfolio/"),
  title: "Danilo Petraglia | Portfólio",
  description: "Portfólio de Danilo Petraglia — desenvolvedor de jogos e desenvolvedor web full stack, com experiência em sites, aplicações e e-commerce.",
  openGraph: {
    title: "Danilo Petraglia | Game Developer & Full Stack Web Developer",
    description: "Desenvolvimento de jogos, sites, aplicações web e e-commerce. Conheça os projetos de Danilo Petraglia.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Danilo Petraglia — Game Developer & Web" }],
  },
  twitter: { card: "summary_large_image", title: "Danilo Petraglia | Games & Full Stack Web", description: "Desenvolvimento de jogos, sites, aplicações web e e-commerce.", images: ["/og.png"] },
  icons: { icon: "/Portfolio/brand/favicon.svg", shortcut: "/Portfolio/brand/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
