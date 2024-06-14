"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [loadingState, setLoadingState] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingState((prev) => (prev === "..." ? "" : prev + "."));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-logo">
          <Link href="/">
            <div>
              <span className="header-logo-icon">t(·̿Ĺ̯·̿ ̿)</span>
              <span className="header-logo-text">mayank{loadingState}</span>
            </div>
          </Link>
        </div>
        <div className="header-links">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
