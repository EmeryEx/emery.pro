const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP

Replace this block with your actual public key.

-----END PGP PUBLIC KEY BLOCK-----`;

export default function App() {
  const effectiveDate = 'March 9, 2026';

  return (
    <div className="page">
      <header className="header">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <a href="#" aria-current="false">Apps</a>
          <span aria-hidden="true">&gt;</span>
          <a href="#" aria-current="false">PGP Andy</a>
          <span aria-hidden="true">&gt;</span>
          <span aria-current="page">Privacy Policy</span>
        </nav>
        <h1>Home</h1>
        <p className="subtitle">Contact information and public PGP key</p>
      </header>

      <main className="content">
        <section className="card" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>Email: andy@example.com</p>
          <p>Signal: @andy.01</p>
          <p>Website: https://emery.pro</p>
        </section>

        <section className="card" aria-labelledby="pgp-heading">
          <h2 id="pgp-heading">Public PGP Key</h2>
          <pre>{pgpKey}</pre>
        </section>

        <section className="card" aria-labelledby="privacy-policy-heading">
          <h2 id="privacy-policy-heading">Privacy Policy</h2>
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
