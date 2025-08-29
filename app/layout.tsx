import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "../components/ClientLayout";
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
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
