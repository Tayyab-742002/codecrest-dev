import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "../components/layout/navigation/navigation";
import { Footer } from "../components/layout/footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Codecrest - Building Digital Excellence",
  description:
    "Codecrest company website - We build exceptional digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
