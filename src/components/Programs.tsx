import "./Programs.css";

const programs = [
  {
    title: "Developer Grants",
    desc: "Apply for funding to build open-source tools, protocols, and applications on Stellar.",
    href: "https://stellar.org/grants-and-funding",
    tag: "Funding",
  },
  {
    title: "Stellar Enterprise Fund",
    desc: "Venture-style funding for startups scaling real-world financial products on the network.",
    href: "https://stellar.org/enterprise-fund",
    tag: "Startups",
  },
  {
    title: "Stellar Quest",
    desc: "Interactive learning quests that teach Stellar fundamentals through hands-on challenges.",
    href: "https://quest.stellar.org/",
    tag: "Learn",
  },
  {
    title: "Ambassador Program",
    desc: "Represent Stellar in your region, organize events, and help onboard new builders.",
    href: "https://stellar.org/community/ambassadors",
    tag: "Community",
  },
];

export default function Programs() {
  return (
    <section className="programs section-bleed" id="programs">
      <div className="container">
        <div className="section-header programs-header">
          <div className="section-header-text">
            <p className="section-label">Grow</p>
            <h2 className="section-title">Grants &amp; programs</h2>
          </div>
          <div className="section-header-aside">
            <p className="section-desc">
              Accelerate your project with Stellar's funding programs, learning
              quests, and community initiatives.
            </p>
          </div>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <a
              key={program.title}
              href={program.href}
              target="_blank"
              rel="noopener noreferrer"
              className="program-card"
            >
              <span className="program-tag">{program.tag}</span>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-desc">{program.desc}</p>
              <span className="program-link">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
