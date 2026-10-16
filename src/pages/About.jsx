import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";

const PILLARS = [
  {
    letter: "C",
    heading: "CHRISTIAN ....",
    text: "We are a non-denominational Christian organisation, seeking to lift up the name of Jesus in all we do to bless his Jewish brethren and share the message of His love both for Israel and the Church.",
  },
  {
    letter: "F",
    heading: "FRIENDS ...",
    text: "A true friend is faithful in all circumstances. As Jews in the past have suffered great persecution in the name of Christ, we seek to show them real friendship and love in His name.",
  },
  {
    letter: "I",
    heading: "... of ISRAEL",
    text: "Israel means the Jewish people, both inside the nation and in the Diaspora throughout the world. It also means the modern nation of Israel, which includes both Jews and Arabs, all precious to God.",
  },
];

export default function About() {
  return (
    <AboutLayout title="Who we are">
      <div className="pillars">
        {PILLARS.map((p, i) => (
          <Reveal key={p.letter} delay={i * 140}>
            <article className="pillar">
              <span className="pillar__letter" aria-hidden="true">
                {p.letter}
              </span>
              <div>
                <h2 className="pillar__heading">{p.heading}</h2>
                <p>{p.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={420}>
        <blockquote className="about-quote">
          <p>So, we are Christians who love Israel and its peoples and believe that God has a special place for them in his kingdom purposes before the return of Messiah.</p>
        </blockquote>
      </Reveal>
    </AboutLayout>
  );
}
