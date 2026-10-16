import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { DOWNLOAD_CATEGORIES } from "../data/site.js";
import { DOWNLOADS } from "../data/downloads.js";

const DEFAULT_CAT = "bible";

const PdfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);
const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function Downloads() {
  const [params] = useSearchParams();
  const catId = DOWNLOAD_CATEGORIES.some((c) => c.id === params.get("cat")) ? params.get("cat") : DEFAULT_CAT;
  const cat = DOWNLOAD_CATEGORIES.find((c) => c.id === catId);
  const q = (params.get("q") || "").trim().toLowerCase();

  // A search (from the header) looks across every category; otherwise show the chosen one.
  const items = q
    ? Object.values(DOWNLOADS)
        .flat()
        .filter((d) => `${d.title} ${d.text || ""}`.toLowerCase().includes(q))
    : DOWNLOADS[catId] || [];
  const heading = q ? `Search: “${params.get("q").trim()}”` : cat.label;

  return (
    <>
      <PageHero title="Downloads" crumbs={[{ label: "Downloads" }]} />

      <section className="about">
        <div className="container about__grid">
          <aside className="about__side">
            <Reveal className="about__links">
              <div className="side-card">
                <h2 className="side-card__title">Downloads</h2>
                <ul className="side-nav">
                  {DOWNLOAD_CATEGORIES.map((c) => (
                    <li key={c.id}>
                      <Link to={`/downloads?cat=${c.id}`} className={`side-nav__link ${!q && c.id === catId ? "active" : ""}`} aria-current={!q && c.id === catId ? "page" : undefined}>
                        <span>{c.label}</span>
                        <Chevron />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <div className="about__main">
            <Reveal key={heading}>
              <h2 className="dl-heading">{heading}</h2>
            </Reveal>

            {items.length ? (
              <ul className="dl-list">
                {items.map((d, i) => (
                  <li key={d.href}>
                    <Reveal delay={i * 80}>
                      <article className="doc dl-item">
                        <span className="doc__icon">
                          <PdfIcon />
                          <small>PDF</small>
                        </span>
                        <div>
                          <a className="dl-item__title" href={d.href} target="_blank" rel="noopener noreferrer">
                            {d.title}
                            <span className="visually-hidden"> (PDF, opens in a new tab)</span>
                          </a>
                          {d.text && <p className="dl-item__text">{d.text}</p>}
                        </div>
                        <span className="doc__go" aria-hidden="true">
                          <ExternalIcon />
                        </span>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="dl-empty">No downloads in this category yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
