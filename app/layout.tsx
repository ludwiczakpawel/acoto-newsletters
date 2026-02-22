import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Co To — marzec 2026",
  description: "Warsztaty i spektakle dla dzieci i mam w marcu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
