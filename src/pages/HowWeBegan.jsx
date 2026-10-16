import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";

const STEPS = [
  <>
    <strong>Christian Friends of Israel</strong> began with a meeting of a few Christian leaders in Jerusalem in December 1985, from the UK, USA, France and Israel, who were
    aware of an urgent need to set up a framework in which they could serve the Lord and bless Israel as true friends.
  </>,
  <>
    Out of a number of names proposed, that chosen - <strong>"Christian Friends of Israel"</strong> - expressed exactly how we believed Christians should relate to the Jewish
    people, both in view of the Church’s past history and also all that God was leading Israel through.
  </>,
  <>
    With the particular help of <strong>Lance Lambert</strong> and <strong>David Bivin</strong>, the principles and aims of CFI were worked through word by word, and these
    Foundation Principles stand unchanged today.
  </>,
];

export default function HowWeBegan() {
  return (
    <AboutLayout title="How we began">
      <ol className="timeline">
        {STEPS.map((text, i) => (
          <li key={i} className="timeline__item">
            <Reveal delay={i * 120}>
              <span className="timeline__marker" aria-hidden="true">
                {i + 1}
              </span>
              <div className="timeline__card">
                <p>{text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </AboutLayout>
  );
}
