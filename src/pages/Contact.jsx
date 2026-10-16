import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import DemoForm from "../components/DemoForm.jsx";
import { CONTACT } from "../data/site.js";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      <section className="contact">
        <div className="container contact__grid">
          <Reveal>
            <aside className="contact-info">
              <div className="contact-info__row">
                <span className="contact-info__icon">
                  <PinIcon />
                </span>
                <div>
                  <h2 className="contact-info__label">Address:</h2>
                  <address>
                    {CONTACT.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
              </div>
              <div className="contact-info__row">
                <span className="contact-info__icon">
                  <PhoneIcon />
                </span>
                <div>
                  <h2 className="contact-info__label">Phone:</h2>
                  <a className="contact-info__phone" href={CONTACT.phoneHref}>
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={120}>
            <div className="contact-form">
              <h2 className="contact-form__title">Please use the form below to send us an email:</h2>
              <DemoForm className="cform" success="Thank you, your message has been sent (demo, nothing was submitted).">
                <div className="cform__field">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" placeholder="Name" autoComplete="name" required />
                </div>
                <div className="cform__field">
                  <label htmlFor="c-email">Email address</label>
                  <input id="c-email" name="email" type="email" placeholder="Email" autoComplete="email" required />
                </div>
                <div className="cform__field">
                  <label htmlFor="c-tel">Telephone no.</label>
                  <div className="cform__tel">
                    <input id="c-tel" name="tel" type="tel" placeholder="Telephone" autoComplete="tel" />
                    <label className="visually-hidden" htmlFor="c-ext">
                      Extension
                    </label>
                    <input id="c-ext" name="ext" placeholder="EXT" inputMode="numeric" />
                  </div>
                </div>
                <div className="cform__field">
                  <label htmlFor="c-msg">Please enter your message here:</label>
                  <textarea id="c-msg" name="message" rows={6} required />
                </div>
                <label className="cform__consent">
                  <input type="checkbox" required />
                  <span>
                    I consent to my details to be used as specified in the Privacy Policy
                  </span>
                </label>
                {/* reCAPTCHA goes here: needs the site's Google reCAPTCHA key + backend verification */}
                <div className="cform__captcha" aria-hidden="true">
                  reCAPTCHA
                </div>
                <div className="cform__actions">
                  <button className="cform__submit" type="submit">
                    Submit
                  </button>
                </div>
              </DemoForm>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
