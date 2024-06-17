import { Inter, Lato } from "next/font/google";

import "./globals.css";
import Nawigacja from "@/components/navigation/Nawigacja";

const lato = Lato({
  subsets: ["latin"],
  variable: "--lato",
  weight: ["100", "400", "900"],
});

export const metadata = {
  title: "mykeson",
  description: "Portfolio - Michał Czaniecki",
};

export default function RootLayout({ children }) {
  return (
    // Dodac zmiane jezyka na przyklad
    <html lang="en">
      <body className={`${lato.variable} bg-whity font-lato overflow-x-hidden`}>
        <div className="relative z-50">
          <Nawigacja />
        </div>
        <div className="-z-1">{children}</div>
      </body>
    </html>
  );
}
