import "./Resources.css";

const resources = [
  {
    accent: "var(--sds-clr-lilac-09)",
    title: "Developer Docs",
    desc: "Comprehensive guides for building apps, issuing assets, writing smart contracts, and connecting to financial rails.",
    href: "https://developers.stellar.org/docs",
    linkText: "Read the docs",
  },
  {
    accent: "var(--sds-clr-gold-09)",
    title: "Quick Start Tutorials",
    desc: "Step-by-step tutorials to deploy your first smart contract, create a wallet, or issue a token on Stellar.",
    href: "https://developers.stellar.org/docs/build",
    linkText: "Start a tutorial",
  },
  {
    accent: "var(--sds-clr-mint-09)",
    title: "Tools & SDKs",
    desc: "Stellar CLI, JavaScript SDK, Soroban RPC, Horizon API, and more — everything you need in your stack.",
    href: "https://developers.stellar.org/docs/tools",
    linkText: "Browse tools",
  },
  {
    accent: "var(--sds-clr-navy-09)",
    title: "Testnet & Futurenet",
    desc: "Experiment freely on Stellar's test networks before deploying to mainnet. Free test XLM available via friendbot.",
    href: "https://developers.stellar.org/docs/networks",
    linkText: "Explore networks",
  },
  {
    accent: "var(--sds-clr-teal-09)",
    title: "Stellar Developer Discord",
    desc: "Ask questions, get code reviews, and connect with builders worldwide — including the PH community.",
    href: "https://discord.gg/stellardev",
    linkText: "Join Discord",
  },
  {
    accent: "var(--sds-clr-green-09)",
    title: "Stack Exchange",
    desc: "Search answered questions or ask your own on the Stellar Stack Exchange — the dev Q&A hub.",
    href: "https://stellar.stackexchange.com/",
    linkText: "Ask a question",
  },
];

export default function Resources() {
  return (
    <section className="resources section-bleed" id="resources">
      <div className="container">
        <div className="section-header resources-header">
          <div className="section-header-text">
            <p className="section-label">Get started</p>
            <h2 className="section-title">Everything you need to build</h2>
          </div>
          <div className="section-header-aside">
            <p className="section-desc">
              Ship faster with official Stellar documentation, tools, and community
              support — curated for builders in the Philippines.
            </p>
          </div>
        </div>

        <div className="resources-grid">
          {resources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <div
                className="resource-card-accent"
                style={{ background: item.accent }}
              />
              <div className="resource-card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <span className="card-link">{item.linkText} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
