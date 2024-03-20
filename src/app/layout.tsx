import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Website - Home",
  description: "Website - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
