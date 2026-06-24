import "./Footer.css";
import Logo from "./Logo";

const footerLinks = {
  Build: [
    { label: "Developer Docs", href: "https://developers.stellar.org/" },
    { label: "Smart Contracts", href: "https://developers.stellar.org/docs/build/smart-contracts" },
    { label: "Tools & SDKs", href: "https://developers.stellar.org/docs/tools" },
    { label: "Testnet", href: "https://developers.stellar.org/docs/networks" },
  ],
  Community: [
    { label: "Stellar Discord", href: "https://discord.gg/stellardev" },
    { label: "Stack Exchange", href: "https://stellar.stackexchange.com/" },
    { label: "Ecosystem", href: "https://stellar.org/ecosystem" },
    { label: "Blog", href: "https://stellar.org/blog" },
  ],
  Stellar: [
    { label: "stellar.org", href: "https://stellar.org/" },
    { label: "Foundation", href: "https://stellar.org/foundation" },
    { label: "Grants", href: "https://stellar.org/grants-and-funding" },
    { label: "Brand Resources", href: "https://stellar.org/brand-resources" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo" aria-label="Stellar Philippines">
              <Logo variant="light" className="site-logo--footer" />
            </a>
            <p className="footer-tagline">
              Helping Filipino builders ship on the Stellar network.
            </p>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="footer-col">
                <h4 className="footer-col-title">{group}</h4>
                <ul className="footer-col-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            Stellar Philippines is a community initiative. Not affiliated with
            the Stellar Development Foundation.
          </p>
          <p className="footer-copy">
            Built with the{" "}
            <a
              href="https://design-system.stellar.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-inline"
            >
              Stellar Design System
            </a>{" "}
            palette &amp; branding.
          </p>
        </div>
      </div>
    </footer>
  );
}
