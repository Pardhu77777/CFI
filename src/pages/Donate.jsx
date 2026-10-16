import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";

const QUICK = [10, 25, 50, 100];

const money = (n) => `£${(Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, "")}`;

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />
  </svg>
);

// Used for both /donate and /support. Frontend only: no payment is taken.
export default function Donate() {
  const [amount, setAmount] = useState("25");
  const [purpose, setPurpose] = useState("support the work of CFI-UK");
  const [giftAid, setGiftAid] = useState(false);
  const [sent, setSent] = useState(false);

  const value = Number(amount) > 0 ? Number(amount) : 0;

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero title="Donations" crumbs={[{ label: "Donations" }]} />

      <section className="donate">
        <div className="container donate__grid">
          <Reveal>
            <form className="give" onSubmit={onSubmit}>
              <h2 className="give__title">I would like to donate:</h2>

              <div className="give__quick" role="group" aria-label="Quick amounts">
                {QUICK.map((q) => (
                  <button key={q} type="button" className={Number(amount) === q ? "active" : ""} onClick={() => setAmount(String(q))}>
                    £{q}
                  </button>
                ))}
              </div>

              <div className="give__line">
                <label className="give__amount">
                  <span className="visually-hidden">Amount in pounds</span>
                  <span className="give__currency" aria-hidden="true">
                    £
                  </span>
                  <input type="number" min="1" step="any" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </label>
                <span className="give__word">pounds to</span>
                <label className="give__purpose">
                  <span className="visually-hidden">Donation purpose</span>
                  <input value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                </label>
              </div>
              <p className="give__hint">(please adjust the amount as you wish)</p>

              <div className={`giftaid ${giftAid ? "is-on" : ""}`}>
                <div className="giftaid__head">
                  <span className="giftaid__badge" aria-hidden="true">
                    giftaid it
                  </span>
                  <div>
                    <p className="giftaid__title">UK tax payers can increase gift at no extra cost</p>
                    <p className="giftaid__text">Using Gift Aid means that for every £1 you give, we receive an extra 25p at no extra cost to you</p>
                  </div>
                </div>
                <label className="giftaid__check">
                  <input type="checkbox" checked={giftAid} onChange={(e) => setGiftAid(e.target.checked)} />
                  <span>I am a UK tax payer and I would like you to reclaim tax on this donation and any donations I have made in the past four years and all future donations</span>
                </label>
                <p className="giftaid__note">
                  <strong>Please note:</strong> You must pay an amount of income tax and/or capital gains tax equal to the tax we reclaim on your donation.
                </p>
              </div>

              <div className="give__actions">
                <button className="give__submit" type="submit">
                  <HeartIcon />
                  Donate now
                  {value > 0 && <span className="give__sum">{money(value)}</span>}
                </button>
                {giftAid && value > 0 && (
                  <span className="give__extra" aria-live="polite">
                    +{money(value * 0.25)} Gift Aid
                  </span>
                )}
              </div>
              {sent && (
                <p className="form-success" role="status" style={{ display: "block", marginTop: 16 }}>
                  Demo only. No payment taken.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <aside className="cheque">
              <span className="cheque__icon">
                <MailIcon />
              </span>
              <p>
                <strong>To give by cheque</strong>, (UK only) please make cheques payable to CFI Charitable Trust, and send to CFI, PO BOX 2687, Eastbourne, East Sussex, BN22 7LZ.
                Please note that we can only process cheques in pounds sterling.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
