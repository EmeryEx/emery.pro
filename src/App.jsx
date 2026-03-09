import React from 'react';

const PRIVACY_PATH = '/app/pgp-andy/privacy-policy';

function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <h1>Home</h1>
        <p className="subtitle">Contact information</p>
      </header>

      <main className="content">
        <section className="card" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>Email: andy@example.com</p>
          <p>Signal: @andy.01</p>
          <p>Website: https://emery.pro</p>
        </section>

        <section className="card" aria-labelledby="policy-link-heading">
          <h2 id="policy-link-heading">Legal</h2>
          <p>
            <a href={PRIVACY_PATH}>View Privacy Policy</a>
          </p>
        </section>
      </main>
    </div>
  );
}

function PrivacyPolicyPage() {
  const effectiveDate = 'March 9, 2026';

  return (
    <div className="page">
      <header className="header">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">&gt;</span>
          <span>Apps</span>
          <span aria-hidden="true">&gt;</span>
          <span>PGP Andy</span>
          <span aria-hidden="true">&gt;</span>
          <span aria-current="page">Privacy Policy</span>
        </nav>
        <h1>Privacy Policy</h1>
      </header>

      <main className="content">
        <section className="card" aria-labelledby="privacy-policy-heading">
          <h2 id="privacy-policy-heading">PGP Andy Privacy Policy</h2>
          <p><strong>Effective date:</strong> {effectiveDate}</p>
          <p>
            PGP Andy is designed to run fully offline. The app does not collect,
            store, or transmit personal data.
          </p>
          <p>
            The app does not use analytics, advertising SDKs, tracking tools, or
            third-party data processors.
          </p>
          <p>
            Since no personal data is collected, there is no personal data to access,
            correct, export, or delete.
          </p>
          <p>
            If you have questions about this policy, contact: andy@example.com.
          </p>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === PRIVACY_PATH) {
    return <PrivacyPolicyPage />;
  }

  return <HomePage />;
}
