import { Link, Navigate, useParams } from "react-router-dom";
import NewsLayout from "../components/NewsLayout.jsx";
import Reveal from "../components/Reveal.jsx";
import VideoFeature from "../components/VideoFeature.jsx";
import { NEWS, splitDate } from "../data/news.js";

export default function NewsArticle() {
  const { slug } = useParams();
  const n = NEWS.find((a) => a.slug === slug);
  if (!n) return <Navigate to="/news" replace />;
  const d = splitDate(n.date);

  return (
    <NewsLayout title={n.title} crumbs={[{ label: "News", to: "/news" }, { label: n.title }]}>
      <Reveal>
        <article className="article">
          <time className="news-date news-date--inline" dateTime={n.date}>
            <span className="news-date__day">{d.day}</span>
            <span className="news-date__my">
              <span>{d.month}</span>
              <span>{d.year}</span>
            </span>
          </time>

          {n.body.map((b, i) =>
            b.type === "quote" ? (
              <blockquote key={i} className="article__quote">
                {b.paras.map((p, j) =>
                  typeof p === "string" ? (
                    <p key={j}>{p}</p>
                  ) : (
                    <p key={j} className="article__pull">
                      {p.highlight}
                    </p>
                  )
                )}
              </blockquote>
            ) : (
              <p key={i} className="article__p">
                {b.text}
              </p>
            )
          )}

          {n.video && (
            <div className="article__video">
              <VideoFeature bare id={n.video.id} embed={n.video.embed} title={n.title} />
            </div>
          )}

          <Link className="article__back" to="/news">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            News
          </Link>
        </article>
      </Reveal>
    </NewsLayout>
  );
}
