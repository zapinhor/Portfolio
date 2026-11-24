import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zapinhor.github.io/Portfolio/"),
  title: "Danilo Petraglia | Portfólio",
  description: "Portfólio de Danilo Petraglia — desenvolvedor web full stack e de jogos. Conheça o NabuLab, sites para clientes e jogos.",
  openGraph: {
    title: "Danilo Petraglia | Full Stack Web Developer & Game Developer",
    description: "Aplicações web, sites e jogos. Conheça os projetos de Danilo Petraglia.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Danilo Petraglia — Game Developer & Web" }],
  },
  twitter: { card: "summary_large_image", title: "Danilo Petraglia | Full Stack Web & Games", description: "Aplicações web, sites e jogos.", images: ["/og.png"] },
  icons: { icon: "/Portfolio/brand/favicon.svg", shortcut: "/Portfolio/brand/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
