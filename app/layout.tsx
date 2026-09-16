import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> |{" "}
          <Link href="/products">Products</Link> |{" "}
          <Link href="/about">About</Link>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}