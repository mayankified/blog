import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me | mayank",
  description: "Mayank is the author of this blog"
  ,icons:'/favicon-32x32.png'

};

const page = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="about-container">
        <div className="about-section">
          <h1>About Me</h1>
          <p>
            I use linux mint. I don&apos;t even know 100% about what I&apos;m
            doing with it but I use it anyway.
          </p>
          <p>
            Sometimes hang around with frontend, sometimes backend, sometimes
            design. Everything&apos;s is so tiring that leads to beat a meat in
            the end.
          </p>
        </div>
        <div className="about-section">
          <h2>🔥 Skills</h2>
          <ul>
            <li>
              <strong>Frontend</strong>:{" "}
              <span>
                {" "}
                React - Nextjs - HTML - CSS - SCSS - ReduxToolkit - FramerMotion
              </span>
            </li>
            <li>
              <strong>Backend</strong>:{" "}
              <span> NodeJs - ExpressJs - NextJS ServerAction - GO Lang</span>
            </li>
            
            <li>
              <strong>Database</strong>:{" "}
              <span> MongoDB - PostgreSQL - Firebase</span>
            </li>
            <li>
              <strong>Devops</strong>:{" "}
              <span> Git - Docker - AWS - Prometheus</span>
            </li>
            <li>
              <strong>Programming Languages</strong>:{" "}
              <span> C++ - Python - C - Javascript - Go Lang</span>
            </li>
            <li>
                <strong>Tools and Techs</strong> : <span>
                    Github - ESLint - Kafka
                </span>
            </li>
            <li>
                <strong>Data Science & Machine Learning</strong> : <span>
                    Pandas - Numpy - Scikit-learn - Tensorflow - Keras
                </span>
            </li>
            <li>
                <strong>Proficient in Data Structures and Algorithm</strong>
            </li>
          </ul>
        </div>
        <div className="about-section">
          <h2>🛠️ Personal Tools</h2>
          <ul>
            <li>
              <strong>Main Machine</strong>:{" "}
              <a href="https://www.linuxmint.com/">Linux Mint</a>{" "}
            </li>
            <li>
              <strong>Editor</strong>:{" "}
              <a href="https://code.visualstudio.com/">VS Code</a> +{" "}
              <a href="https://github.com/tmux/tmux/wiki">tmux</a> 🔥
            </li>
            
          </ul>
        </div>
        <div className="about-section">
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
