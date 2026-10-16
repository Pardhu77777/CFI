import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { RECOMMENDED as BOOKS } from "../data/shop.js";

const CATEGORIES = [
  { label: "Special Offers", filter: "offers" },
  { label: "Latest Products", filter: "latest" },
  { label: "Books", filter: "books" },
  { label: "Booklets", filter: "booklets" },
  { label: "DVDs", filter: "dvds" },
  { label: "CDs", filter: "cds" },
  { label: "Pamphlets", filter: "pamphlets" },
  { label: "MP4/USB", filter: "mp4-usb" },
  { label: "Maps", filter: "maps" },
  { label: "CD-Roms", filter: "cd-roms" },
  { label: "Music", filter: "music" },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function ShopHighlight() {
  return (
    <section className="resources">
      <div className="container resources__grid">
        <div>
          <Reveal>
            <h2 className="resources__title">Recommended Resources</h2>
          </Reveal>
          <div className="books">
            {BOOKS.map((b, i) => (
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

        <Reveal delay={200}>
          <aside className="cats" aria-labelledby="cats-title">
            <h2 className="resources__title" id="cats-title">
              Browse by Category
            </h2>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c.label}>
                  <Link to={`/shop?filter=${c.filter}`}>
                    <span>{c.label}</span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
