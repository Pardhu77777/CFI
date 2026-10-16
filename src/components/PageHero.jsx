import { Link } from "react-router-dom";

export default function PageHero({ title, intro, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <span className="breadcrumb__label">You are here:</span> <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="breadcrumb__sep" aria-hidden="true">
                »
              </span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
      <svg className="page-hero__wave" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 22C240 48 480 4 720 24S1200 46 1440 18V48H0Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
