import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edith - Tabla Roca, Remodelación y Acabados",
  description:
    "Servicios profesionales de tabla roca, fachadas exteriores, divisiones, closets, islas, molduras, pintura, terminados y remodelación en general.",
  keywords:
    "tabla roca, remodelación, fachadas, closets, molduras, pintura, acabados, construcción",
  openGraph: {
    title: "Edith - Tabla Roca, Remodelación y Acabados",
    description:
      "Servicios profesionales de remodelación y acabados. Calidad y experiencia en cada proyecto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
