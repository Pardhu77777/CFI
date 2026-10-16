import { Link, NavLink } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";

// Only the Introduction page exists so far; the other prayer links open it too.
const PRAYER_LINKS = [
  "Introduction",
  "The importance of the biblical view",
  "The impact of war and hatred",
  "Funding for protection against antisemitism",
  "Restore, O Lord",
  "Ask where the good way is",
  "400 Days of Captivity",
  "Remembering the Impact of 7th October 2023",
  "Praying for Truth amid Conflict",
  "Start a Prayer Group",
  "Other Resources",
];

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function Prayer() {
  return (
    <>
      <PageHero title="Introduction" crumbs={[{ label: "Introduction" }]} />

      <section className="about">
        <div className="container about__grid">
          <aside className="about__side">
            <Reveal className="about__links">
              <div className="side-card">
                <h2 className="side-card__title">Prayer</h2>
                <ul className="side-nav">
                  {PRAYER_LINKS.map((label, i) => (
                    <li key={label}>
                      {i === 0 ? (
                        <NavLink to="/prayer" end className="side-nav__link">
                          <span>{label}</span>
                          <Chevron />
                        </NavLink>
                      ) : (
                        <Link to="/prayer" className="side-nav__link">
                          <span>{label}</span>
                          <Chevron />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <div className="about__main">
            <Reveal>
              <article className="article prayer">
                <h2 className="prayer__welcome">Welcome to our prayer pages</h2>

                <p className="article__p">
                  We thank you for your interest in supporting the ministry of Christian Friends of Israel and would greatly appreciate your prayers for all elements of the work of
                  CFI, its trustees, staff, regional links, church links and volunteers.
                </p>
                <p className="article__p">The Watchman’s Prayer Letter is updated every month, and we normally add another new page each month as well.</p>
                <p className="article__p">
                  A few years ago the Lord gave this prophecy for the work of CFI in the UK, which was tested out and prayed over by the trustees and staff, and is still as relevant
                  to us all as ever:
                </p>

                <blockquote className="prophecy">
                  <p>God will provide the strategies - not just to cope</p>
                  <p>
                    But to <strong>overcome</strong> and
                  </p>
                  <p>
                    Be <strong>victorious</strong>
                  </p>
                  <p>
                    <strong>IF</strong> we ask ... ...
                  </p>
                </blockquote>

                <p className="article__p">
                  As believers, we are in a battle as those who stand with Israel and for biblical truth. It’s important we know who we are and that we are <strong>overcomers</strong> in
                  Christ alone and that he promises protection for us and provision for us in these areas and for this ministry.
                </p>
                <p className="article__p">
                  If you would like to stand with Christian Friends of Israel, please use these prayer pointers as a guide, but if you would like to support further areas of the ministry
                  or pray for the staff and the volunteer area reps, for instance, or begin a CFI prayer group, please contact{" "}
                  <a className="prayer__mail" href="mailto:julia.soakell@cfi.org.uk">
                    julia.soakell@cfi.org.uk
                  </a>
                </p>

                <h3 className="prayer__sub">Pray for More Intercessors - Thoughts on a 1911 Prophecy</h3>

                <p className="article__p">
                  At a Lydia Conference in 2016, a prophecy from 1911 was shown to me that was startling in accuracy and detail. Shortly before his death in 1918, Bishop Aristocoli of the
                  Russian Orthodox Church passed it to Mother Barbara, a Russian nun.
                </p>
                <p className="article__p">
                  It mentions that not one nation will be without trial, and that the evils to come will affect Russia, that Germany would be divided and Italy would face many natural
                  disasters. <q className="prayer__inline-quote">Britain will lose her empire and all her colonies, and will come to almost total ruin, but will be saved through praying women.</q>
                </p>
                <p className="article__p">
                  As with all prophecies, the content of this one needs to be tested carefully. But let’s thank God for these words of prophecy, as in his mercy and compassion our Father
                  warns the nations - he is faithful and does not want anyone to be lost.
                </p>
                <p className="article__p">Let’s pray that the nations take note, turn back to God and search for their Saviour and Redeemer.</p>
                <p className="article__p">
                  Ask the Holy Spirit to expose the root of anti-Semitism that exists in individuals, churches and nations; and for a great revelation of the promises made by God to Abraham
                  and the Jewish people, and further revelation that the churches need to be praying people.
                </p>
                <p className="article__p">
                  It seems that many intercessors in the nations are women, but let’s pray for men and women, young and old, to pray for Israel and the Jewish people in an overflow of
                  their love for our heavenly Father.
                </p>

                <p className="prayer__sign">Julia Soakell</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
