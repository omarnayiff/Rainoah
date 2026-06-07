import type { Metadata, Viewport } from "next";
import { Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fonte do wordmark "Rainoah" (aproximação do logo — TODO: trocar pelo logo oficial)
const logoFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rainoah | Powerflex GO — Alívio muscular em minutos",
  description:
    "A massageadora Powerflex GO da Rainoah alivia tensões, relaxa músculos cansados e acelera sua recuperação em poucos minutos. Frete grátis e garantia de 12 meses.",
  keywords: [
    "Rainoah",
    "Powerflex GO",
    "massageadora",
    "massage gun",
    "alívio muscular",
    "recuperação muscular",
  ],
  openGraph: {
    title: "Rainoah | Powerflex GO",
    description:
      "Alivie tensões e recupere seu corpo em poucos minutos com a Powerflex GO.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0067B4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${logoFont.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
