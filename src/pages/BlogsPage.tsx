import PageHero from "../components/PageHero";
import { blogPosts } from "../data/blogs";
import "./BlogsPage.css";

const categoryColors: Record<string, string> = {
  Tutorial: "var(--sds-clr-lilac-04)",
  Insights: "var(--sds-clr-gold-09)",
  Technical: "var(--sds-clr-mint-09)",
  Guide: "var(--sds-clr-teal-09)",
  Community: "var(--sds-clr-navy-09)",
};

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Stories from Filipino Stellar builders"
        desc="Tutorials, project deep-dives, and community updates written by and for the Stellar Philippines chapter."
        stats={[
          { value: String(blogPosts.length), label: "Articles published" },
          { value: "5", label: "Topic categories" },
          { value: "PH", label: "Local perspective" },
          { value: "Open", label: "Community written" },
        ]}
      />

      <section className="blogs-section">
        <div className="container">
          <article className="blog-featured">
            <div className="blog-featured-content">
              <span className="blog-category">{featured.category}</span>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-excerpt">{featured.excerpt}</p>
              <div className="blog-meta">
                <span>{featured.author}</span>
                <span className="blog-meta-dot">·</span>
                <span>{featured.date}</span>
                <span className="blog-meta-dot">·</span>
                <span>{featured.readTime}</span>
              </div>
              <button type="button" className="btn btn-primary btn-arrow">
                Read article
              </button>
            </div>
            <div
              className="blog-featured-visual"
              style={{ background: categoryColors[featured.category] }}
            >
              <span className="blog-featured-tag">{featured.tag}</span>
            </div>
          </article>

          <div className="blogs-grid">
            {rest.map((post) => (
              <article key={post.id} className="blog-card">
                <div
                  className="blog-card-accent"
                  style={{ background: categoryColors[post.category] }}
                />
                <div className="blog-card-body">
                  <div className="blog-card-top">
                    <span className="blog-category blog-category-sm">
                      {post.category}
                    </span>
                    <span className="blog-tag">{post.tag}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.author}</span>
                    <span className="blog-meta-dot">·</span>
                    <span>{post.date}</span>
                    <span className="blog-meta-dot">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button type="button" className="card-link blog-read-more">
                    Read more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
