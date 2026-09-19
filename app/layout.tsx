import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DK Concept Hair | Salão de Beleza no Norte Shopping RJ",
  description: "DK Concept Hair no Norte Shopping, Cachambi, Rio de Janeiro. Cabelos, beleza e cuidados personalizados. Agende seu horário pelo WhatsApp.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
