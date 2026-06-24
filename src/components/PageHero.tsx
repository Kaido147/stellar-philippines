import "./PageHero.css";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  desc: string;
  stats?: { value: string; label: string }[];
}

export default function PageHero({ eyebrow, title, desc, stats }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true">
        <div className="page-hero-blob page-hero-blob-1" />
        <div className="page-hero-blob page-hero-blob-2" />
      </div>
      <div className="container page-hero-layout">
        <div className="page-hero-content">
          <p className="page-hero-eyebrow">{eyebrow}</p>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-desc">{desc}</p>
        </div>
        {stats && stats.length > 0 && (
          <div className="page-hero-aside" aria-hidden="true">
            {stats.map((stat) => (
              <div key={stat.label} className="page-hero-stat">
                <span className="page-hero-stat-value">{stat.value}</span>
                <span className="page-hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
