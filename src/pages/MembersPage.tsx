import PageHero from "../components/PageHero";
import { members } from "../data/members";
import "./MembersPage.css";

const avatarColors = [
  "var(--sds-clr-lilac-09)",
  "var(--sds-clr-navy-09)",
  "var(--sds-clr-teal-09)",
  "var(--sds-clr-green-09)",
  "var(--sds-clr-gold-09)",
  "var(--sds-clr-mint-09)",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Community members"
        title="Meet the builders"
        desc="Organizers, developers, designers, and ambassadors powering the Stellar Philippines community across the archipelago."
        stats={[
          { value: String(members.length), label: "Active members" },
          { value: "6+", label: "Cities represented" },
          { value: "12+", label: "Skill areas" },
          { value: "100%", label: "Open community" },
        ]}
      />

      <section className="members-section">
        <div className="container">
          <div className="members-stats">
            <div className="members-stat">
              <span className="members-stat-value">{members.length}+</span>
              <span className="members-stat-label">Active members</span>
            </div>
            <div className="members-stat">
              <span className="members-stat-value">8</span>
              <span className="members-stat-label">Cities represented</span>
            </div>
            <div className="members-stat">
              <span className="members-stat-value">Open</span>
              <span className="members-stat-label">Always welcoming new builders</span>
            </div>
          </div>

          <div className="members-grid">
            {members.map((member, i) => (
              <article key={member.id} className="member-card">
                <div
                  className="member-avatar"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {getInitials(member.name)}
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-city">{member.city}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-skills">
                    {member.skills.map((skill) => (
                      <span key={skill} className="member-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="member-links">
                    {member.github && (
                      <a
                        href={`https://github.com/${member.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="member-link"
                      >
                        GitHub
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={`https://twitter.com/${member.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="member-link"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="members-join">
            <div className="members-join-content">
              <h2 className="members-join-title">Want to join the community?</h2>
              <p className="members-join-desc">
                Whether you're a seasoned Stellar developer or just getting started,
                there's a place for you in Stellar Philippines. Connect on Discord
                or come to our next meetup.
              </p>
            </div>
            <div className="members-join-actions">
              <a
                href="https://discord.gg/stellardev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-arrow"
              >
                Join Discord
              </a>
              <button type="button" className="btn btn-secondary">
                Apply to be a member
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
