import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | mayank",
  description: "if you have anything to says about me, don't say it",
  icons: "/favicon-32x32.png",
};

const page = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="contact-container">
        <div className="contact-section">
          <h1>Brief Myself</h1>
          <p>Gym guy, DHH guy, Philoshoper guy, Artist guy...unfunny guy. </p>
          <p>
          
            I am a guy who doesn&apos;t know what he is doing. I just do it
            anyways.
          </p>
          <p>
            <i>
              &quot;It&apos;s good to be king. Wait, maybe. I think maybe
              I&apos;m just like a little bizarre little person who walks back
              and forth, ...&quot;
            </i>{" "}
            ~ Terry A. Davis
          </p>
        </div>
        <div className="contact-section">
          <h2>📝 Contact</h2>
          <ul>
            <li>
              <strong>Email</strong>: mayanklander@gmail.com
            </li>
            <li>
              <strong>GitHub</strong>:{" "}
              <a href="https://github.com/mayankified">mayankified</a>
            </li>
            <li>
              <strong>Instagram</strong>:{" "}
              <a href="https://www.reddit.com/user/mynkashh">mynkashh</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
