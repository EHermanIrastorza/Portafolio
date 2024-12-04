import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mi portafolio",
  description: "Portafolio diseños.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="min-h-screen bg-grid-small bg-warm-cream relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-peach/40 via-warm-sand/30 to-warm-terra/20" />
        <div className="absolute inset-0 bg-gradient-mask" />
        <main className="relative">{children}</main>
    </body>
  </html>
  );
}
