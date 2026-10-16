import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";

const HEBREW_WORDS = ["Kesher", "Yeshua", "Mashiach", "Torah", "YHVH", "Halleluyah", "Chesed", "Kadosh", "Shalom", "Amen"];

const SUBJECTS = [
  "The Jewishness of Jesus",
  "Jesus the Rabbi",
  "Jesus the Messiah",
  "The Jewishness of the Scriptures",
  "Salvation is from the Jews",
  "The Great Divide",
  "Anti-Semitism",
  "Physical Restoration and Rebirth of Israel",
  "Israel: Prophecy Fulfilled",
  "Israel Today and Tomorrow",
];

const FACTS = [
  ["10", "main teaching sessions"],
  ["approx. 50", "minutes each"],
  ["5", "DVDs"],
  ["524", "minutes running time"],
];

export default function KesherCourse() {
  return (
    <AboutLayout title="Kesher Course">
      <Reveal>
        <div className="kq">
          <p>Christians and Jews - blood brothers or separated brethren?</p>
          <p>Israel - political accident or covenant people?</p>
          <p>And where does the Church fit in?</p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <p className="kc-text">
          These and other questions are explored in the Course’s 10 main teaching sessions (approx. 50 minutes each) showing the connection between Judaism and Christianity, Israel
          and the Church.
        </p>
      </Reveal>

      <Reveal delay={160}>
        <dl className="kfacts">
          {FACTS.map(([n, l]) => (
            <div key={l} className="kfact">
              <dt>{l}</dt>
              <dd>{n}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <div className="kcard">
          <p>Additionally, each programme includes a 10-15 minute study on important Hebrew words:</p>
          <ul className="kwords">
            {HEBREW_WORDS.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <p>These are designed to enrich our understanding of the Bible.</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="kcard">
          <p>
            This popular course has recently been completely revised and updated. It comes as a boxed set of 5 DVDs (in PAL format: running time 524 minutes), complete with a copy of
            the Student Guide.
          </p>
          <p>Recommended for personal study, or for churches and home/cell groups as a study course to cover in a school term.</p>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="ksub-title">Subjects covered in the main sessions:</h2>
      </Reveal>
      <ol className="ksubjects">
        {SUBJECTS.map((s, i) => (
          <li key={s}>
            <Reveal delay={(i % 2) * 80}>
              <span className="ksubjects__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{s}</span>
            </Reveal>
          </li>
        ))}
      </ol>
    </AboutLayout>
  );
}
