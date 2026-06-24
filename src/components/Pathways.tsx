import "./Pathways.css";

const pathways = [
  {
    tag: "Smart Contracts",
    title: "Build with Soroban",
    desc: "Write smart contracts in Rust on Stellar's Soroban platform. Deploy DeFi protocols, token standards, and on-chain logic.",
    href: "https://developers.stellar.org/docs/build/smart-contracts",
    color: "var(--sds-clr-lilac-09)",
  },
  {
    tag: "Payments",
    title: "Launch a payment app",
    desc: "Enable fast, low-cost cross-border payments and remittances — a natural fit for the Philippines' remittance economy.",
    href: "https://stellar.org/use-cases/payments",
    color: "var(--sds-clr-navy-09)",
  },
  {
    tag: "Tokenization",
    title: "Issue assets on-chain",
    desc: "Tokenize real-world value — from stablecoins to treasury assets — on a network built for asset issuance.",
    href: "https://developers.stellar.org/docs/tokens",
    color: "var(--sds-clr-teal-09)",
  },
  {
    tag: "Anchors",
    title: "Connect fiat on/off ramps",
    desc: "Build or integrate anchor services that bridge PHP and other fiat currencies to the Stellar network.",
    href: "https://developers.stellar.org/docs/build/apps/application-design-considerations",
    color: "var(--sds-clr-green-09)",
  },
];

export default function Pathways() {
  return (
    <section className="pathways section-bleed" id="pathways">
      <div className="container">
        <div className="section-header pathways-header">
          <div className="section-header-text">
            <p className="section-label">Build paths</p>
            <h2 className="section-title">What will you build?</h2>
          </div>
          <div className="section-header-aside pathways-header-aside">
            <p className="section-desc">
              Whether you're building your first dApp or scaling an enterprise
              solution, Stellar has a path for every builder — especially in
              markets where financial access matters most.
            </p>
            <a
              href="https://developers.stellar.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-arrow pathways-cta"
            >
              View all guides
            </a>
          </div>
        </div>

        <div className="pathways-grid">
          {pathways.map((path) => (
            <a
              key={path.title}
              href={path.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pathway-card"
            >
              <div
                className="pathway-accent"
                style={{ background: path.color }}
              />
              <div className="pathway-content">
                <span className="pathway-tag">{path.tag}</span>
                <h3 className="pathway-title">{path.title}</h3>
                <p className="pathway-desc">{path.desc}</p>
                <span className="pathway-link">Learn more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
