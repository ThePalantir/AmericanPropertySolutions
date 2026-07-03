import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aps-demo.vercel.app"),
  title: {
    default: "American Property Solutions | Demo Concept",
    template: "%s | American Property Solutions Demo"
  },
  description:
    "Demo concept for American Property Solutions, showing clearer property maintenance positioning, service organization, and walkthrough paths.",
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link className="skip-link" href="#main">
          Skip to content
        </Link>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

