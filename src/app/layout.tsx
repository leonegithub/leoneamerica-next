import type { Metadata } from "next";
import Header from "./header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leone America",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qxk4lzc.css"
        ></link>
      </head>
      <Header />
      <body>{children}</body>
    </html>
  );
}
