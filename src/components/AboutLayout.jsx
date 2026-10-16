import { Link, NavLink } from "react-router-dom";
import PageHero from "./PageHero.jsx";
import Reveal from "./Reveal.jsx";
import VideoFeature from "./VideoFeature.jsx";

const ABOUT_LINKS = [
  { label: "Who we are", to: "/about", built: true },
  { label: "International Relationships", to: "/about/international-relationships", built: true },
  { label: "How we began", to: "/about/how-we-began", built: true },
  { label: "What we do", to: "/about/what-we-do", built: true },
  { label: "Doctrinal information", to: "/about/doctrinal-information", built: true },
  { label: "Kesher Course", to: "/about/kesher-course", built: true },
  { label: "Israel - Questions, Questions", to: "/about/israel-questions", built: true },
];

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// Shared shell for About sub-pages: page hero, sticky sidebar (links + video), main content.
export default function AboutLayout({ title, children }) {
  return (
    <>
      <PageHero title={title} crumbs={[{ label: title }]} />

      <section className="about">
        <div className="container about__grid">
          <aside className="about__side">
            <Reveal className="about__links">
              <div className="side-card">
                <h2 className="side-card__title">About CFI</h2>
                <ul className="side-nav">
                  {ABOUT_LINKS.map((l) => {
                    const inner = (
                      <>
                        <span>{l.label}</span>
                        <Chevron />
                      </>
                    );
                    return (
                      <li key={l.label}>
                        {l.built ? (
                          <NavLink to={l.to} end className="side-nav__link">
                            {inner}
                          </NavLink>
                        ) : (
                          <Link to={l.to} className="side-nav__link">
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120} className="about__video">
              <div className="side-card side-card--video">
                <h2 className="side-card__title">New to CFI?</h2>
                <VideoFeature bare id="8vEZvwmLuO4" embed="https://www.youtube.com/embed/8vEZvwmLuO4?rel=0&autoplay=1" title="New to CFI?" />
              </div>
            </Reveal>
          </aside>

          <div className="about__main">{children}</div>
        </div>
      </section>
    </>
  );
}
