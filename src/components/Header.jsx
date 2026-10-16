import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAV, SITE_NAME, SITE_TAGLINE } from "../data/site.js";
import { SocialLinks } from "./Icon.jsx";

const isMobile = () => window.matchMedia("(max-width: 1000px)").matches;

function SearchBox({ id, onSearch }) {
  return (
    <form className="search" role="search" onSubmit={onSearch}>
      <label className="visually-hidden" htmlFor={id}>
        Search
      </label>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
      <input id={id} name="q" type="search" placeholder="Search..." />
    </form>
  );
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label={`${SITE_NAME} ${SITE_TAGLINE}, home`}>
      <img src="/cfi-logo.png" alt="" width="166" height="175" />
      <span className="logo__text">
        <span className="logo__name">{SITE_NAME}</span>
        <span className="logo__tag">{SITE_TAGLINE}</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [stuck, setStuck] = useState(false);
  const mastheadRef = useRef(null);
  const location = useLocation();

  // Nav is "stuck" once the masthead scrolls out of view: show mini logo
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting));
    io.observe(mastheadRef.current);
    return () => io.disconnect();
  }, []);
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [location.pathname, location.search, location.hash]);

  // Search goes to Downloads page with the query pre-filled
  const handleSearch = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q").trim();
    navigate(q ? `/downloads?q=${encodeURIComponent(q)}` : "/downloads");
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="masthead" ref={mastheadRef}>
        <div className="container">
          <Logo />
          <div className="masthead__actions">
            <SearchBox id="site-search" onSearch={handleSearch} />
            <Link className="btn-donate" to="/donate">
              Donate
            </Link>
            <Link className="btn-login" to="/login">
              Login
            </Link>
            <button
              className="nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mainnav ${open ? "open" : ""} ${stuck ? "stuck" : ""}`} id="primary-nav" aria-label="Main">
        <div className="container">
          <Link className="nav-mini" to="/" aria-label="Home" tabIndex={stuck ? 0 : -1}>
            <img src="/cfi-logo.png" alt="" />
          </Link>
          <SearchBox id="site-search-mobile" onSearch={handleSearch} />
          <ul className="nav__list">
            {NAV.map((item) =>
              item.sub ? (
                <li key={item.label} className={`nav__item ${openSub === item.label ? "open" : ""}`}>
                  <NavLink
                    className="nav__link"
                    to={item.to}
                    aria-haspopup="true"
                    onClick={(e) => {
                      if (isMobile()) {
                        e.preventDefault();
                        setOpenSub((s) => (s === item.label ? null : item.label));
                      }
                    }}
                  >
                    {item.label}
                    <span className="nav__caret" aria-hidden="true">
                      ▼
                    </span>
                  </NavLink>
                  <ul className="nav__sub">
                    {item.sub.map((s) => (
                      <li key={s.to}>
                        <Link to={s.to}>{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label} className="nav__item">
                  <NavLink className="nav__link" to={item.to} end={item.to === "/"}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <SocialLinks />
        </div>
      </nav>
    </>
  );
}
