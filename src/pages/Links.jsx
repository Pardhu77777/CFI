import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";

const GROUPS = [
  {
    id: "cfi-ministries",
    title: "CFI Ministries",
    links: [
      { name: "Chretiens Amis d’Israel", href: "https://caifrance.fr/", text: "The French branch of Christian Friends of Israel" },
      { name: "Christliche Freunde Israels", href: "https://www.cfri.de/", text: "The German branch of Christian Friends of Israel" },
      { name: "CFI USA", href: "https://cfi-usa.org/", text: "The North American branch, located on the East coast of the USA - Charlotte, North Carolina." },
      { name: "CFI Canada", href: "https://cfi-canada.org/", text: "The Canadian branch, located in Newton, Surrey, British Columbia" },
    ],
  },
  {
    id: "other-ministries",
    title: "Other Ministries",
    links: [
      { name: "Centre for Judaic-Christian Studies", href: "https://jcstudies.com/", text: "Balanced, Biblically-based and Christ- centred materials from an Hebraic point of view." },
      {
        name: "Day of Prayer for the Peace of Jerusalem",
        href: "https://daytopray.com/",
        text: "Dedicated to sustained, fervent, and informed global intercession for the plans and purposes of G-d for Jerusalem and all her people which organises on the first Sunday of every October believers from 175 participating nations to pray for the peace of Jerusalem.",
      },
    ],
  },
  { id: "news-outlets", title: "News Outlets", links: [] },
  { id: "other-organisations", title: "Other Organisations", links: [] },
];

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

export default function Links() {
  return (
    <>
      <PageHero title="Links" crumbs={[{ label: "Links" }]} />

      <section className="about">
        <div className="container about__grid">
          <aside className="about__side">
            <Reveal className="about__links">
              <div className="side-card">
                <h2 className="side-card__title">Links</h2>
                <ul className="side-nav">
                  {GROUPS.map((g) => (
                    <li key={g.id}>
                      <a href={g.links.length ? `#${g.id}` : undefined} className="side-nav__link">
                        <span>{g.title}</span>
                        <Chevron />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <div className="about__main">
            <Reveal>
              <p className="iq-intro">The views expressed on these web sites are not necessarily those of CFI-UK or any of its affiliates.</p>
            </Reveal>

            {GROUPS.filter((g) => g.links.length).map((g) => (
              <section key={g.id} id={g.id} className="link-group">
                <Reveal>
                  <h2 className="dl-heading">{g.title}</h2>
                </Reveal>
                <ul className="dl-list">
                  {g.links.map((l, i) => (
                    <li key={l.href}>
                      <Reveal delay={i * 80}>
                        <article className="doc dl-item">
                          <span className="doc__icon">
                            <GlobeIcon />
                          </span>
                          <div>
                            <a className="dl-item__title" href={l.href} target="_blank" rel="noopener noreferrer">
                              {l.name}
                              <span className="visually-hidden"> (opens in a new tab)</span>
                            </a>
                            <p className="dl-item__text">{l.text}</p>
                          </div>
                          <span className="doc__go" aria-hidden="true">
                            <ExternalIcon />
                          </span>
                        </article>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
