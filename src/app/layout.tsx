import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  title: "EMBER Comercializadora y Servicios Especializados",
  description: "Firma especializada en el desarrollo de infraestructura operativa, suministro de equipamiento comercial y soluciones logísticas de precisión.",
  openGraph: {
    title: "EMBER Comercializadora y Servicios Especializados",
    description: "Infraestructura Industrial, Soluciones de Equipamiento Corporativo y Logística de Distribución.",
    url: "/",
    siteName: "EMBER",
    images: [
      {
        url: "/ember_logo.png",
        width: 800,
        height: 600,
        alt: "EMBER Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/ember_logo.png",
    shortcut: "/ember_logo.png",
    apple: "/ember_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
