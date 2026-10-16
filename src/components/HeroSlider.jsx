import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../data/site.js";

const DURATION = 7000;

// Headings + button labels from the current site. `text` is a short summary; paste full copy here if needed.
const SLIDES = [
  {
    image: asset("hero/hero-1.jpg"),
    alt: "Suggested Autumn Resources leaflet, September 2026",
    eyebrow: "Shop",
    badge: "NEW",
    title: "Suggested Autumn Resources",
    text: "Five resources we recommend this season, from a book on the biblical feasts to a DVD on archaeology from King David's era.",
    cta: { label: "More detail", to: "/shop?filter=latest" },
  },
  {
    image: asset("hero/hero-2.jpg"),
    alt: "Cover of Enhance magazine, 3rd quarter 2026",
    eyebrow: "Magazine",
    title: "ENHANCE 3rd Quarter 2026",
    text: "The latest edition of our magazine: teaching articles, event reports and resource details.",
    cta: { label: "Read online", to: "/magazine" },
  },
  {
    image: asset("hero/hero-3.jpg"),
    alt: "Biblical Lands of Israel calendar cover",
    eyebrow: "New calendar",
    badge: "2026–27",
    title: "Biblical Lands of Israel Calendar",
    text: "Our new 16-month calendar, September 2026 to December 2027, with photos of the lands of the twelve tribes and weekly scripture readings.",
    cta: { label: "More detail", to: "/shop?filter=latest" },
  },
  {
    image: asset("hero/hero-4.jpg"),
    alt: "Volunteers at Project Open Gates, providing practical aid for new immigrants",
    eyebrow: "Projects",
    title: "Humanitarian Aid in Israel",
    text: "We support aid projects in Israel run by our partner ministry, CFI Jerusalem. Watch a short video about the work.",
    cta: { label: "See projects", to: "/support" },
    cta2: { label: "Donate", to: "/donate" },
  },
  {
    image: asset("hero/hero-5.jpg"),
    alt: "Educating for Extremism article spread",
    eyebrow: "Current affairs",
    title: "Educating for Extremism",
    text: "A look at the Palestinian Authority school curriculum and why Western funding has not brought change.",
    cta: { label: "More detail", to: "/news" },
  },
];

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

// Auto-advancing slider with a single "next" control, swipe and arrow keys.
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const running = true; // always auto-advance; clicking "next" restarts the timer
  const touchX = useRef(null);
  const stageRef = useRef(null);

  const onStageMove = (e) => {
    const r = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    stageRef.current.style.setProperty("--ry", `${x * 10}deg`);
    stageRef.current.style.setProperty("--rx", `${-y * 8}deg`);
  };
  const onStageLeave = () => {
    stageRef.current.style.setProperty("--ry", "0deg");
    stageRef.current.style.setProperty("--rx", "0deg");
  };

  const go = useCallback((n) => setIndex((n + SLIDES.length) % SLIDES.length), []);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(id);
  }, [running, index]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const slide = SLIDES[index];
  const upcoming = SLIDES[(index + 1) % SLIDES.length];
  const Heading = index === 0 ? "h1" : "h2";

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero__ambient" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <img key={s.image} src={s.image} alt="" className={i === index ? "on" : ""} />
        ))}
      </div>

      <div className="hero__orbs" aria-hidden="true">
        <span className="hero__orb hero__orb--gold" />
        <span className="hero__orb hero__orb--blue" />
        <span className="hero__orb hero__orb--white" />
      </div>

      <div className="container">
        <div className="hero__inner">
          <div className="hero__stage" ref={stageRef} onMouseMove={onStageMove} onMouseLeave={onStageLeave}>
            <span className="hero__halo" aria-hidden="true" />
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={`hero__spark hero__spark--${n}`} aria-hidden="true" />
            ))}
            <div className="hero__stack">
              <div className="hero__frame">
                <span className="hero__shine" key={index} aria-hidden="true" />
                {SLIDES.map((s, i) => (
                  <img key={s.image} src={s.image} alt={i === index ? s.alt : ""} aria-hidden={i !== index} className={i === index ? "on" : ""} />
                ))}
              </div>
              {slide.badge && <span className="hero__badge">{slide.badge}</span>}
            </div>
          </div>

          <div className="hero__copy" key={index} aria-live="polite">
            <span className="hero__eyebrow">{slide.eyebrow}</span>
            <Heading>{slide.title}</Heading>
            <p>{slide.text}</p>
            <div className="hero__actions">
              <Link className="hero__cta hero__cta--primary" to={slide.cta.to}>
                {slide.cta.label}
                <Arrow dir="right" />
              </Link>
              {slide.cta2 && (
                <Link className="hero__cta hero__cta--ghost" to={slide.cta2.to}>
                  {slide.cta2.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        <button className="hero__next" type="button" onClick={next} aria-label={`Next slide: ${upcoming.title}`}>
          <span className="hero__next-label">
            <small>Next</small>
            {upcoming.title}
          </span>
          <span className="hero__next-btn">
            <svg className="hero__ring" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="24" cy="24" r="22" />
              <circle
                key={`${index}-${running}`}
                className={running ? "run" : ""}
                cx="24"
                cy="24"
                r="22"
                style={{ "--dur": `${DURATION}ms` }}
              />
            </svg>
            <Arrow dir="right" />
          </span>
        </button>
      </div>

      <svg className="hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 240 80 480 0 720 30 S 1200 70 1440 25 V70 H0 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
