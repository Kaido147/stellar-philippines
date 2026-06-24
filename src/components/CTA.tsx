import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta section-bleed">
      <div className="cta-inner">
        <div className="cta-content">
          <h2 className="cta-title">Ready to build on Stellar?</h2>
          <p className="cta-desc">
            Join Filipino developers shipping the future of open finance. Start
            with the docs, connect with the community, and bring your idea to
            life on the Stellar network.
          </p>
          <div className="cta-actions">
            <a
              href="https://developers.stellar.org/docs/build"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-arrow cta-btn-primary"
            >
              Start building
            </a>
            <a
              href="https://discord.gg/stellardev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary cta-btn-secondary"
            >
              Join the community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
