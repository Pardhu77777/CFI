const PATHS = {
  x: "M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.3L1 2h6.3l4.4 5.9L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z",
  facebook: "M14 9h3V5h-3c-2.8 0-5 2.2-5 5v2H6v4h3v8h4v-8h3l1-4h-4v-2c0-.6.4-1 1-1z",
  youtube:
    "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9L15.6 12l-5.8 3.1z",
  instagram:
    "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C4 2.3 2.3 4 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.9 1.9 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.9-.2 5.6-1.9 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.9-1.9-5.6-5.8-5.8C15 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2.8.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1C5.2 20 4 18.7 3.9 16c-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.2 5.3 4 8 3.9c1-.1 1.3-.1 4-.1z",
};

export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}

const SOCIAL = [
  { name: "x", label: "CFI UK on X (Twitter)", href: "https://twitter.com/cfi_uk" },
  { name: "facebook", label: "CFI UK on Facebook", href: "https://www.facebook.com/CFIUK" },
  { name: "youtube", label: "CFI UK on YouTube", href: "https://www.youtube.com/CFIUK" },
  { name: "instagram", label: "CFI UK on Instagram", href: "https://www.instagram.com/christianfriendsofisrael_uk/" },
];

// Used in the nav and the footer.
export function SocialLinks() {
  return (
    <ul className="social">
      {SOCIAL.map((s) => (
        <li key={s.name}>
          <a href={s.href} className={`s-${s.name}`} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}>
            <Icon name={s.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}
