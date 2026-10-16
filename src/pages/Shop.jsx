import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { PRODUCTS, SHOP_CATEGORIES, SHOP_SUBJECTS } from "../data/shop.js";

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// Browse links stay on this page until category/subject pages exist.
function BrowseCard({ title, items, active }) {
  return (
    <div className="side-card">
      <h2 className="side-card__title">{title}</h2>
      <ul className="side-nav">
        {items.map((label) => (
          <li key={label}>
            <Link to="/shop" className={`side-nav__link ${label === active ? "active" : ""}`} aria-current={label === active ? "page" : undefined}>
              <span>{label}</span>
              <Chevron />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Shop() {
  return (
    <>
      <PageHero title="Online Shop" crumbs={[{ label: "Online Shop" }]} />

      <section className="about shop">
        <div className="container news__grid">
          <div className="news__main">
            <Reveal>
              <h2 className="resources__title">Latest Products</h2>
            </Reveal>
            <div className="books">
              {PRODUCTS.map((b, i) => (
                <Reveal key={b.title} delay={i * 130}>
                  <Link className="book" to="/shop">
                    <span className="book__3d">
                      <img src={b.image} alt={b.title} loading="lazy" />
                    </span>
                    <span className="book__title">{b.title}</span>
                    {b.author && <span className="book__author">{b.author}</span>}
                    <span className="book__price">Price: {b.price}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="news__side">
            <Reveal>
              <BrowseCard title="Browse by Category" items={SHOP_CATEGORIES} active="Latest Products" />
            </Reveal>
            <Reveal delay={100}>
              <BrowseCard title="Browse by Subject" items={SHOP_SUBJECTS} />
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
