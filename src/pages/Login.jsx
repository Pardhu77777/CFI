import { useState } from "react";
import { Logo } from "../components/Header.jsx";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const EyeIcon = ({ off }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
    {off && <path d="M3 3l18 18" />}
  </svg>
);

// Demo only: nothing is submitted or stored.
export default function Login() {
  const [mode, setMode] = useState("login"); // login | forgot
  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");

  const submit = (text) => (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setMsg(text);
  };
  const switchTo = (m) => {
    setMode(m);
    setMsg("");
  };

  return (
    <section className="auth">
      <div className="container">
        <div className="auth__card">
          <div className="auth__brand">
            <Logo />
            <h2>{mode === "login" ? "Welcome back" : "Reset your password"}</h2>
            <p>{mode === "login" ? "Log in to your Christian Friends of Israel UK account." : "We’ll email you a link to choose a new password."}</p>
          </div>

          <div className="auth__panel">
            {mode === "login" ? (
              <form className="auth__form" onSubmit={submit("Demo only, no account system is connected.")} autoComplete="off">
                <h1>Login</h1>
                <label className="auth__field">
                  <span>Username or email</span>
                  <span className="auth__input">
                    <UserIcon />
                    <input name="user" placeholder="Username or email" required autoComplete="off" />
                  </span>
                </label>
                <label className="auth__field">
                  <span>Password</span>
                  <span className="auth__input">
                    <LockIcon />
                    <input name="password" type={showPass ? "text" : "password"} placeholder="Password" required autoComplete="off" />
                    <button type="button" className="auth__eye" onClick={() => setShowPass((s) => !s)} aria-label={showPass ? "Hide password" : "Show password"}>
                      <EyeIcon off={showPass} />
                    </button>
                  </span>
                </label>
                <div className="auth__row">
                  <label className="auth__remember">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="button" className="auth__link" onClick={() => switchTo("forgot")}>
                    Forgot password?
                  </button>
                </div>
                <button className="auth__submit" type="submit">
                  Login
                </button>
                {msg && (
                  <p className="auth__msg" role="status">
                    {msg}
                  </p>
                )}
              </form>
            ) : (
              <form className="auth__form" onSubmit={submit("Demo only, no email was sent.")} autoComplete="off">
                <h1>Forgot password</h1>
                <p className="auth__hint">Enter the email address linked to your account.</p>
                <label className="auth__field">
                  <span>Email address</span>
                  <span className="auth__input">
                    <MailIcon />
                    <input name="email" type="email" placeholder="you@example.com" required autoComplete="off" />
                  </span>
                </label>
                <button className="auth__submit" type="submit">
                  Send reset link
                </button>
                {msg && (
                  <p className="auth__msg" role="status">
                    {msg}
                  </p>
                )}
                <button type="button" className="auth__link auth__back" onClick={() => switchTo("login")}>
                  ← Back to login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
