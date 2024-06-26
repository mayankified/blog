import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// layout
import "../styles/layout.css";

// components
import "../styles/components/header.css";
import "../styles/components/footer.css";

// pages
import "../styles/pages/homepage.css";
import "../styles/pages/blog-posts.css";
import "../styles/pages/post.css";
import "../styles/pages/contact.css";
import "../styles/pages/about.css";
import "../styles/pages/_error.css";
// import "../styles/pages/project.css"

import "../styles/prismjs.css";
import Navbar from "@/components/Navbar";



// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="0SQVjTXy2XKkBxYO0-MlaohLaPAIGnOk5PsyPMDguA0" />
          <meta name="msvalidate.01" content="63987749E77CB757DE18F80521B66F0A" />
      </head>
      <body>{children}</body>
    </html>
  );
}
