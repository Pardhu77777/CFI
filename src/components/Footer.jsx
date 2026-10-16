import { Link } from "react-router-dom";
import { CONTACT } from "../data/site.js";
import { Logo } from "./Header.jsx";
import DemoForm from "./DemoForm.jsx";
import { SocialLinks } from "./Icon.jsx";

const EXPLORE = [
  ["About CFI", "/about"],
  ["News", "/news"],
  ["Prayer", "/prayer"],
  ["Magazine", "/magazine"],
  ["Useful links", "/links"],
];

const SUPPORT = [
  ["Donate", "/donate"],
  ["Support", "/support"],
  ["Shop", "/shop"],
  ["Downloads", "/downloads"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <SocialLinks />
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {EXPLORE.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              {SUPPORT.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Stay in touch</h4>
            <p>Get news and prayer updates by email.</p>
            <DemoForm className="newsletter" success="Thanks, you're subscribed (demo).">
              <label className="visually-hidden" htmlFor="nl-email">
                Email address
              </label>
              <input id="nl-email" type="email" placeholder="Your email" required />
              <button className="btn btn--primary btn--sm" type="submit">
                Join
              </button>
            </DemoForm>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} CFI Charitable Trust is a Company limited by guarantee, No. {CONTACT.companyNo}. Registered Charity No.{" "}
            {CONTACT.charityNo}
          </span>
        </div>
      </div>
    </footer>
  );
}
