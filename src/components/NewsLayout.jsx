import { Link, NavLink } from "react-router-dom";
import PageHero from "./PageHero.jsx";
import Reveal from "./Reveal.jsx";
import { NEWS_CATEGORIES, NEWS_TAGS } from "../data/news.js";

export const TypeIcon = ({ type }) => {
  if (type === "video")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M10 8.5v7l6-3.5z" fill="#fff" />
      </svg>
    );
  if (type === "audio")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5L6 9H2v6h4l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </svg>
  );
};

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// Shared shell for News pages: hero + main content + sidebar (News links, Categories, Tags).
export default function NewsLayout({ title = "News", crumbs = [{ label: "News" }], children }) {
  return (
    <>
      <PageHero title={title} crumbs={crumbs} />

      <section className="about news">
        <div className="container news__grid">
          <div className="news__main">{children}</div>

          <aside className="news__side">
            <Reveal>
              <div className="side-card">
                <h2 className="side-card__title">News</h2>
                <ul className="side-nav">
                  <li>
                    <NavLink to="/news" end className="side-nav__link">
                      <span>News</span>
                      <Chevron />
                    </NavLink>
                  </li>
                  <li>
                    <Link to="/magazine" className="side-nav__link">
                      <span>Enhance</span>
                      <Chevron />
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="side-card">
                <h2 className="side-card__title">Categories</h2>
                <ul className="side-nav">
                  {NEWS_CATEGORIES.map((c) => (
                    <li key={c.type}>
                      <Link to={`/news?type=${c.type}`} className="side-nav__link side-nav__link--icon">
                        <span className="side-nav__type">
                          <TypeIcon type={c.type} />
                          {c.label}
                        </span>
                        <Chevron />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="side-card">
                <h2 className="side-card__title">News Tags</h2>
                <ul className="news-tags">
                  {NEWS_TAGS.map((t) => (
                    <li key={t}>
                      <Link to={`/news?tag=${encodeURIComponent(t)}`}>{t}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
