import { useState } from "react";

// Click-to-play YouTube: shows thumbnail first, loads the iframe only when clicked.
// `bare` hides the heading/text (e.g. when the caller shows its own heading).
export default function VideoFeature({ id, embed, title, text, bare = false }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="vcard">
      {!bare && <h3 className="vcard__title">{title}</h3>}
      {!bare && text && <p className="vcard__text">{text}</p>}
      <div className="vcard__media">
        {playing ? (
          <iframe
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="vcard__poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="vcard__play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </article>
  );
}
