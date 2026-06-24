import "./Community.css";

const channels = [
  {
    name: "Stellar Developer Discord",
    desc: "The primary hub for Stellar developers. Find help, share projects, and collaborate with builders globally.",
    href: "https://discord.gg/stellardev",
    cta: "Join Discord",
  },
  {
    name: "Developer Newsletter",
    desc: "Technical updates, new resources, and protocol news — made by devs, for devs.",
    href: "https://stellar.org/community#newsletter",
    cta: "Subscribe",
  },
  {
    name: "Stellar Ecosystem",
    desc: "Explore live projects, anchors, and tools built on Stellar — find partners and inspiration.",
    href: "https://stellar.org/ecosystem",
    cta: "Explore ecosystem",
  },
];

export default function Community() {
  return (
    <section className="community" id="community">
      <div className="container">
        <div className="community-header">
          <p className="section-label">Community</p>
          <h2 className="section-title">Build together, grow together</h2>
          <p className="section-desc">
            Stellar Philippines is part of a global open-source community. Connect
            with fellow Filipino builders, share knowledge at local meetups, and
            contribute to the network that powers real-world finance.
          </p>
        </div>

        <div className="community-grid">
          {channels.map((channel) => (
            <div key={channel.name} className="card community-card">
              <h3 className="card-title">{channel.name}</h3>
              <p className="card-desc">{channel.desc}</p>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {channel.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="community-highlight">
          <div className="community-highlight-content">
            <h3 className="community-highlight-title">
              Filipino builders welcome
            </h3>
            <p className="community-highlight-desc">
              The Philippines is one of the world's largest remittance markets —
              and a natural home for Stellar-powered financial innovation. Whether
              you're in Manila, Cebu, Davao, or building remotely, you're part of
              this community.
            </p>
          </div>
          <div className="community-highlight-stats">
            <div className="highlight-stat">
              <span className="highlight-stat-value">7,641</span>
              <span className="highlight-stat-label">Islands, one network</span>
            </div>
            <div className="highlight-stat">
              <span className="highlight-stat-value">24/7</span>
              <span className="highlight-stat-label">Global settlement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
