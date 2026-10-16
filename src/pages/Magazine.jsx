import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";

// Add older issues here (newest first). `embed` is Yumpu's embeddable viewer URL.
const ISSUES = [
  {
    title: "ENHANCE - 3rd Quarter 2026",
    embed: "https://www.yumpu.com/en/embed/view/71259153",
  },
];

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
export default function Magazine() {
  const issue = ISSUES[0];
  const boxRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [nudge, setNudge] = useState(false);

  // Yumpu measures its frame once on load, so only start it after the box has its real size.
  useEffect(() => {
    let timer;
    let raf = requestAnimationFrame(function check() {
      if (boxRef.current && boxRef.current.offsetWidth > 320) timer = setTimeout(() => setReady(true), 1200);
      else raf = requestAnimationFrame(check);
    });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <PageHero title="ENHANCE Magazine" crumbs={[{ label: "News", to: "/news" }, { label: "ENHANCE Magazine" }]} />

      <section className="about">
        <div className="container about__grid">
          <aside className="about__side">
            <Reveal className="about__links">
              <div className="side-card">
                <h2 className="side-card__title">ENHANCE Issues</h2>
                <ul className="side-nav">
                  {ISSUES.map((i) => (
                    <li key={i.title}>
                      <NavLink to="/magazine" end className="side-nav__link">
                        <span>{i.title}</span>
                        <Chevron />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <div className="about__main">
            <Reveal>
              <h2 className="dl-heading">{issue.title}</h2>
              <div className="mag-viewer" ref={boxRef}>
                {ready && (
                  <iframe
                    src={issue.embed}
                    title={issue.title}
                    allowFullScreen
                    allow="fullscreen"
                    // Yumpu sometimes lays out too small on first load; a 1px resize makes it re-fit the box.
                    onLoad={() => {
                      [600, 1500, 3000].forEach((t) => {
                        setTimeout(() => setNudge(true), t);
                        setTimeout(() => setNudge(false), t + 150);
                      });
                    }}
                    style={{ position: "absolute", inset: 0, width: nudge ? "calc(100% - 1px)" : "100%", height: "100%", border: 0 }}
                  />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
