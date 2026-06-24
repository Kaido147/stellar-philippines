import "./Stats.css";

const stats = [
  {
    value: "3–5s",
    label: "Average settlement time",
    detail: "on the Stellar network",
  },
  {
    value: "$0.0007",
    label: "Average transaction cost",
    detail: "fraction of a cent per op",
  },
  {
    value: "90+",
    label: "Countries with on/off ramps",
    detail: "including the Philippines",
  },
  {
    value: "Open",
    label: "Source & permissionless",
    detail: "build without gatekeepers",
  },
];

export default function Stats() {
  return (
    <section className="stats section-bleed">
      <div className="container">
        <div className="section-header stats-header">
          <div className="section-header-text">
            <p className="section-label">Network</p>
            <h2 className="section-title">Powered by performance</h2>
          </div>
          <div className="section-header-aside">
            <p className="section-desc">
              Stellar is a decentralized public blockchain built for real-world
              financial services — faster, cheaper, and more energy-efficient than
              most alternatives.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
