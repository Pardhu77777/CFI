import { Link, useSearchParams } from "react-router-dom";
import NewsLayout, { TypeIcon } from "../components/NewsLayout.jsx";
import Reveal from "../components/Reveal.jsx";
import { NEWS, splitDate } from "../data/news.js";

export default function News() {
  const [params] = useSearchParams();
  const type = params.get("type");
  const items = type ? NEWS.filter((n) => n.type === type) : NEWS;

  return (
    <NewsLayout>
      <div className="news-list">
        {items.map((n, i) => {
          const d = splitDate(n.date);
          return (
            <Reveal key={n.slug} delay={i * 100}>
              <article className="news-item">
                <div className="news-item__head">
                  <h2 className="news-item__title">
                    <span className={`news-item__type news-item__type--${n.type}`}>
                      <TypeIcon type={n.type} />
                    </span>
                    <Link to={`/news/${n.slug}`}>{n.title}</Link>
                  </h2>
                  <time className="news-date" dateTime={n.date}>
                    <span className="news-date__day">{d.day}</span>
                    <span className="news-date__my">
                      <span>{d.month}</span>
                      <span>{d.year}</span>
                    </span>
                  </time>
                </div>
                <p className="news-item__excerpt">{n.excerpt} ...</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </NewsLayout>
  );
}
