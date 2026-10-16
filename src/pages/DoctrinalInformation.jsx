import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";

const DOCS = [
  {
    label: "Foundation Principles",
    href: "https://www.cfi.org.uk/uploads/downloads/186/file/Foundation_Principles_of_Christian_Friends_of_Israel.pdf",
  },
  {
    label: "Statement of Faith",
    href: "https://www.cfi.org.uk/uploads/downloads/185/file/The_Doctrinal_Position_of_Christian_Friends_of_Israel.pdf",
  },
];

const PdfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export default function DoctrinalInformation() {
  return (
    <AboutLayout title="Doctrinal information">
      <div className="docs">
        {DOCS.map((d, i) => (
          <Reveal key={d.label} delay={i * 120}>
            <article className="doc">
              <span className="doc__icon">
                <PdfIcon />
                <small>PDF</small>
              </span>
              <p>
                To read our <strong>{d.label}</strong> (PDF file){" "}
                <a className="doc__link" href={d.href} target="_blank" rel="noopener noreferrer">
                  click here<span className="visually-hidden">: {d.label} PDF, opens in a new tab</span>
                </a>
                .
              </p>
              <span className="doc__go" aria-hidden="true">
                <ExternalIcon />
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </AboutLayout>
  );
}
