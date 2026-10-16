import { Link } from "react-router-dom";
import AboutLayout from "../components/AboutLayout.jsx";
import Reveal from "../components/Reveal.jsx";

const ICONS = {
  prayer: "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z",
  gift: "M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z",
  people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 11a2.5 2.5 0 1 0 0-5M16 14c3 0 5 2.2 5 5",
  plane: "M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
  news: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9h4M18 14h-8M15 18h-5M10 6h8v4h-8z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
  mic: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8",
  board: "M2 3h20v14H2zM8 21h8M12 17v4M6 8h7M6 12h5",
  pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  church: "M12 2v4M10 4h4M6 22V12l6-4 6 4v10M2 22h20M10 22v-4a2 2 0 0 1 4 0v4",
  link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
};

const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={ICONS[name]} />
  </svg>
);

const BLESSING = [
  { icon: "prayer", title: "Encouraging informed prayer", text: ["With regular prayer letters and resources, a weekly prayer line and broadcast, the Wall of Prayer project etc."], more: "/prayer" },
  {
    icon: "gift",
    title: "Channelling support to projects in Israel",
    text: ["Helping holocaust survivors and new immigrants, terror victims and the poor and needy, Jewish and Palestinian children, Christian believers in Israel, etc., in the name of Jesus."],
    more: "/support",
  },
  { icon: "people", title: "Joint events with the UK Jewish community", text: ["At national and local level, for Lobby days in parliament, Holocaust Memorial Days, solidarity meetings, Israel Independence celebrations, etc"] },
  { icon: "plane", title: "Taking tours to Israel", text: ["CFI staff promote selected tours to Israel each year."] },
  { icon: "news", title: "Providing accurate news from the Middle East", text: ["Countering misinformation and propaganda with truthful reporting from Christians on the spot."] },
];

const SERVING = [
  {
    icon: "book",
    title: "Publications",
    text: [
      "Sign up for our free quarterly magazine and monthly prayer letter, or check out our publications on our website.",
      "Resources including books, videos, teaching tapes, Hebrew learning, the Kesher Course ... CFI has the largest selection of resources on Israel and Hebraic roots in the UK.",
    ],
  },
  { icon: "mic", title: "Teaching Conferences and Ministry Tours", text: ["With international speakers on Israel or the Hebraic background to the New Testament"] },
  {
    icon: "board",
    title: "Regional seminars and workshops",
    text: ["Learn about God’s purposes for Israel, and how to communicate this message. Why not invite us to visit your church, or to hold a day seminar in your town?"],
  },
  { icon: "pin", title: "Regional Links", text: ["We have a number of people in different parts of the UK who are there to serve you in their area. Contact us for further details."] },
  { icon: "church", title: "Church Links", text: ["We also have individuals in many churches who handle CFI materials just for their own fellowship."] },
  {
    icon: "link",
    title: "Working together with others",
    text: ["We are part of Love Never Fails, an umbrella organisation bringing together over twenty ministries in the UK who understand God’s purposes for Israel, to spread this message at Christian events nationwide."],
  },
];

function ServiceGrid({ items }) {
  return (
    <div className="services">
      {items.map((s, i) => (
        <Reveal key={s.title} delay={(i % 2) * 100}>
          <article className="service">
            <span className="service__icon">
              <Icon name={s.icon} />
            </span>
            <h4 className="service__title">{s.title}</h4>
            {s.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
            {s.more && (
              <Link className="service__more" to={s.more}>
                More ...<span className="visually-hidden"> about {s.title.toLowerCase()}</span>
              </Link>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <AboutLayout title="What we do">
      <Reveal>
        <p className="focus-intro">Our ministry has two main points of focus:</p>
      </Reveal>

      <section className="focus" aria-labelledby="focus-1">
        <Reveal>
          <h2 className="focus__title" id="focus-1">
            <span className="focus__num" aria-hidden="true">
              1
            </span>
            Blessing Israel
          </h2>
          <p className="focus__text">
            We seek to break down barriers and build bridges of genuine friendship with Israel and the UK Jewish community. Relationship leads to reconciliation and mutual
            understanding. Today as anti-Semitism again rises world-wide, Israel and Jewish people are deeply touched by Christian solidarity and support.
          </p>
          <h3 className="focus__lead">We help Christians to bless Israel by:</h3>
        </Reveal>
        <ServiceGrid items={BLESSING} />
      </section>

      <section className="focus" aria-labelledby="focus-2">
        <Reveal>
          <h2 className="focus__title" id="focus-2">
            <span className="focus__num" aria-hidden="true">
              2
            </span>
            Serving The Church
          </h2>
          <p className="focus__text">
            <strong>Making the connection</strong> - in previous generations many Christians understood the importance of Israel’s restoration in God’s Kingdom purposes and actively
            promoted it, today this legacy has largely been lost. There is great ignorance, impoverishing the churches. CFI helps Christians understand the biblical relationship between
            Israel and the Church and reconnect with the Hebraic roots of their faith (Romans 11:16-18). We also seek to give a truthful and balanced perspective on events in the Middle
            East and be a prophetic voice bringing ‘understanding of the times’.
          </p>
          <h3 className="focus__lead">We accomplish this through:</h3>
        </Reveal>
        <ServiceGrid items={SERVING} />
      </section>
    </AboutLayout>
  );
}
