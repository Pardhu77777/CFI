import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";

const Globe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

const People = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.6" />
    <path d="M15.5 14.2c.5-.1 1-.2 1.5-.2 2.8 0 5 2.2 5 5" />
  </svg>
);

export default function InternationalRelationships() {
  return (
    <AboutLayout title="International Relationships">
      <Reveal>
        <div className="lead-card">
          <span className="lead-card__icon">
            <Globe />
          </span>
          <p>
            <strong>Christian Friends of Israel UK (CFI UK)</strong> is in fellowship with a number of international organisations, that share our aims of serving the church
            through education and blessing Israel.
          </p>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <article className="org-card">
          <span className="org-card__icon">
            <People />
          </span>
          <p>
            <strong>Christian Friends of Israel Jerusalem</strong> is an independent not-for-profit NGO (amuta) that co-ordinates a variety of humanitarian projects in Israel. CFI UK
            facilitates people to support such projects as meet the requirements of UK Charity law.
          </p>
        </article>
      </Reveal>
    </AboutLayout>
  );
}
