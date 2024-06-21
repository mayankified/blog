import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Error | mayank",
  description: "You go to a page which no one has ever made",
  icons: "/favicon-32x32.png",
};
const custom404 = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="error-container">
        <h1>404 Page Not Found</h1>
        <p>❌ You go to a page which no one has ever made</p>
        <p>
          <a href="/">Home</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default custom404;
