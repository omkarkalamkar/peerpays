import "./globals.css";
import { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "PeerPays — Simplifying credit, amplifying rewards",
  description: "PeerPays helps credit card holders generate secondary income and maximize rewards.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
