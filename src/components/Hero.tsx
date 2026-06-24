import { useEffect, useState } from "react";
import "./Hero.css";

const rotatingWords = [
  "payments",
  "remittances",
  "DeFi",
  "tokenization",
  "the real world",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">For devs &amp; builders in the Philippines</p>

        <h1 className="hero-title">
          Where Filipino builders meet{" "}
          <span
            className={`hero-rotate ${visible ? "visible" : ""}`}
            aria-live="polite"
          >
            {rotatingWords[wordIndex]}
          </span>
        </h1>

        <p className="hero-desc">
          Stellar Philippines connects developers, founders, and innovators across
          the archipelago with the tools, community, and resources to ship on the
          Stellar network — fast, low-cost, and built for real-world impact.
        </p>

        <div className="hero-actions">
          <a
            href="https://developers.stellar.org/docs/build"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-arrow"
          >
            Start building
          </a>
          <a href="#resources" className="btn btn-secondary">
            Explore resources
          </a>
        </div>

        <div className="hero-tags">
          <span className="hero-tag">Open source</span>
          <span className="hero-tag">Smart contracts</span>
          <span className="hero-tag">Asset issuance</span>
          <span className="hero-tag">Cross-border payments</span>
        </div>
      </div>
    </section>
  );
}
