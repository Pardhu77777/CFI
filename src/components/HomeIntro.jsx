import { Link } from "react-router-dom";
import VideoFeature from "./VideoFeature.jsx";
import Reveal from "./Reveal.jsx";
import { SITE_NAME, SITE_TAGLINE, asset } from "../data/site.js";

const VIDEOS = [
  {
    id: "f4QBfQ-NNY0",
    embed: "https://www.youtube.com/embed/f4QBfQ-NNY0?rel=0&showinfo=0&rel=0&color=white&autoplay=1",
    title: "A seminar at the Mission Worship Conference",
    text: "CFI UK presented this message to a Christian Mission in Action seminar in November 2025.",
  },
  {
    id: "b1dMTrwlNZM",
    embed: "https://www.youtube.com/embed/b1dMTrwlNZM?rel=0&showinfo=0&rel=0&color=white&autoplay=1",
    title: "Helping children who were returning to school",
    text: "CFI Jerusalem had the privilege of preparing 65 school bags for children in need, partnering with a friend.",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function ReadMore({ to, about }) {
  return (
    <Link className="fcard__more" to={to}>
      Read more<span className="visually-hidden"> about {about}</span>
      <Arrow />
    </Link>
  );
}

// Soft light that follows the mouse across a card
const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function HomeIntro() {
  return (
    <>
      <section className="intro-videos">
        <div className="container grid grid--2">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={i * 120}>
              <VideoFeature {...v} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="intro-cards">
        <div className="container grid grid--3">
          {/* Who we are */}
          <Reveal delay={0}>
          <article className="fcard" onMouseMove={spot}>
            <div className="fcard__banner fcard__banner--brand">
              <img src={asset("cfi-logo.png")} alt="" />
              <span>
                <strong>{SITE_NAME}</strong>
                <small>{SITE_TAGLINE}</small>
              </span>
            </div>
            <div className="fcard__body">
              <h3>Who we are</h3>
              <p>We are a ministry with a twin focus, we seek to:</p>
              <ol className="fcard__steps">
                <li>Bless Israel through practical and moral support.</li>
                <li>Serve the Church with teaching and resources about God’s love and purposes for Israel and the Hebraic roots of the Christian faith.</li>
              </ol>
              <ReadMore to="/about" about="who we are" />
            </div>
          </article>
          </Reveal>

          {/* Kesher Course */}
          <Reveal delay={140}>
          <article className="fcard" onMouseMove={spot}>
            <div className="fcard__banner fcard__banner--kesher">
              <span className="kesher">
                <strong>
                  MAKING THE
                  <br />
                  CONNECTION
                </strong>
                <small>JUDAISM · CHRISTIANITY · ISRAEL · THE CHURCH</small>
              </span>
            </div>
            <div className="fcard__body">
              <h3>Kesher Course</h3>
              <p>Kesher is a ten week course, which aims:</p>
              <ul className="fcard__checks">
                <li>To enrich our understanding of Jesus</li>
                <li>To deepen our trust in God’s faithfulness</li>
                <li>To give us a better understanding of current events in the Middle East</li>
              </ul>
              <ReadMore to="/about/kesher-course" about="the Kesher Course" />
            </div>
          </article>
          </Reveal>

          {/* We Collect Money For */}
          <Reveal delay={280}>
          <article className="fcard" onMouseMove={spot}>
            <div className="fcard__banner fcard__banner--aid">
              <strong>
                Humanitarian Aid Projects
                <br />
                in Israel
              </strong>
            </div>
            <div className="fcard__body">
              <h3>We Collect Money For</h3>
              <p>A small variety of projects including support for:</p>
              <ul className="fcard__tags">
                <li>Holocaust survivors</li>
                <li>New immigrants experiencing hardship</li>
                <li>People experiencing trauma from terror attacks</li>
                <li>Believers in the land</li>
              </ul>
              <ReadMore to="/support" about="the projects we collect money for" />
            </div>
          </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
