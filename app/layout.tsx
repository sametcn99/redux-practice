import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Redux-Toolkit Practicing Examples",
  description:
    "This project encompasses various examples demonstrating how to use Redux Toolkit in different scenarios to enhance state management in modern React applications.",
  authors: [{ name: "sametcn99", url: "https://www.sametcc.me/" }],
  keywords: "Redux, Toolkit, Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00ff00" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Redux-Toolkit Practicing Examples" />
      </head>
      <body className="flex flex-col items-center text-green-400 antialiased transition-all duration-1000">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
