import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";
import { asset } from "../data/site.js";

const PDF = "https://www.cfi.org.uk/uploads/texteditor/Questions_Questions_booklet_v10.pdf";

export default function IsraelQuestions() {
  return (
    <AboutLayout title="Israel - Questions, Questions">
      <Reveal>
        <p className="iq-intro">
          Do you have questions about Israel? This booklet contains five short articles about the land, the Jews, the Bible, friends, and the Arabs.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="iq-stage">
          <a className="iq-book" href={PDF} target="_blank" rel="noopener noreferrer">
            <span className="iq-book__cover">
              <img src={asset("books/questions-questions.png")} alt="Questions Questions booklet cover" width="300" height="427" />
            </span>
            <span className="iq-book__badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              PDF
            </span>
            <span className="visually-hidden">Open the Questions Questions booklet (PDF, opens in a new tab)</span>
          </a>
        </div>
      </Reveal>
    </AboutLayout>
  );
}
