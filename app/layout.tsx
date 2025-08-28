import "./globals.css";
import { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "PeerPays — Simplifying credit, amplifying rewards",
  description: "PeerPays helps credit card holders generate secondary income and maximize rewards.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Nav />
        <main className="min-h-[70vh] pt-32 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
