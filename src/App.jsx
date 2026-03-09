import React from 'react';

const PRIVACY_SEGMENT = '/app/pgp-andy/privacy-policy';

const NAV_ITEMS = [
  {
    id: 'apps',
    label: 'Apps',
    apps: [
      {
        id: 'pgp-andy',
        label: 'PGP Andy',
        pages: [
          {
            id: 'privacy-policy',
            label: 'Privacy Policy',
            hrefFromHome: 'app/pgp-andy/privacy-policy/',
            hrefFromNested: './'
          }
        ]
      }
    ]
  }
];

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

function SiteNav({ currentPage }) {
  return (
    <nav className="site-nav" aria-label="Site navigation">
      <ul className="site-nav-root">
        <li>
          <a href={currentPage === 'home' ? './' : '../../../'} aria-current={currentPage === 'home' ? 'page' : undefined}>
            Home
          </a>
        </li>
        {NAV_ITEMS.map((group) => (
          <li key={group.id}>
            <span className="site-nav-heading">{group.label}</span>
            <ul>
              {group.apps.map((app) => (
                <li key={app.id}>
                  <span className="site-nav-heading">{app.label}</span>
                  <ul>
                    {app.pages.map((page) => {
                      const href = currentPage === 'home' ? page.hrefFromHome : page.hrefFromNested;
                      const isCurrent = currentPage === page.id;

                      return (
                        <li key={page.id}>
                          <a href={href} aria-current={isCurrent ? 'page' : undefined}>{page.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function HomePage() {
  const [copySuccess, setCopySuccess] = React.useState(false);

  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: BCPG v1.78.1
Comment: Exported by PGPAndy

mDMEaTB7shYJKwYBBAHaRw8BAQdAemT7z7m6dX3UeJWQtC2Vba8acaSIsdUj6fa3
PKzfeLu0GUVtZXJ5IFMyMiA8ZGV2QGVtZXJ5LnBybz6IdQQTFgoABgUCaajehgAh
CRArUNSb3DPnKBYhBEbssMufz8X7/+erLitQ1JvcM+coNgYBAMql9cYonE9CBJUu
6DHg+UMMFYNkbqAMPog0JRIouPlHAQCGMo4dpLuFY0wUkaQ79mMGc5Adxmo+LiSU
Qv3NtxSjCIiIBBMWCAASBQJpMHuyAhsBAhkAAhkBAhkBACgJEOUqUeO3wsAJCRDl
KlHjt8LACQkQ5SpR47fCwAkJEOUqUeO3wsAJ/v0A+gMiYJesXse4P6TmNXjJu7Sg
iHq69ATjrRjTbwX7ZYZGAQDxOv/5Hv1WaS/x8e35zGAa/TAYPSxy+cdGk0QZFgtr
BrgzBGkwe7IWCSsGAQQB2kcPAQEHQKn8nl/0/tl1D08QXqLlNF1OQgyNzULEDIwC
HI/p6+fXiGEEGBYIAAkFAmkwe7ICGwIACgkQ5SpR47fCwAlsxgD/ZJY2lUJjJocO
U3QCW881sNeSoDgT6lhFMFdKhDoAbhwBAMMu1tbpPgbuAsbWfQ007nQoaYnKRhZe
y64KxJ0ikl8JiMEEGBYKAGkFAmkwe7ICGwJfoAQZFgoABgUCaTB7sgAKCRD+GlYp
upsndtnbAQDMBI1MqFTjYvVBAG9eMmA7p7GA9wLhWPTuEB7qZs8GzwD/aWLj7dl7
1vEscvOHMm+p03IsFrgWxza8BbL5okxRGAAACgkQ5SpR47fCwAm6/AD6A7qC9r5/
wpl8bVSij0Jn1F+A0lXFImhyxvD4guceUwABAM0I4Brre3m7rVoRbMI1HBmGJdqu
VnFRnjuetJavLt0MuDgEaTB7shIKKwYBBAGXVQEFAQEHQJyKSvkN2l0pcl4tr5dy
Rg/j9Sg2dtfYSIdDVU8t/WsSAwEIB4hhBBgWCAAJBQJpMHuyAhsMAAoJEOUqUeO3
wsAJ5/kBAM9BxkoRwSqwGCpSM+2aqNIE2TBgT7fbYo9l9Nw2ASdvAP97TAfT8bm7
pDEXcTWYcbMnw42muYqR9377NI7Qx4rGBLgzBGlyQikWCSsGAQQB2kcPAQEHQD6v
xgYyBZqNVM037tePvJ7UeYjBU/7hlzoIGoVLMMsyiGcEGBYIAA8FAmlw8KkCGyAF
CQHhM4AACgkQ5SpR47fCwAm0YAD+KMmqsvLEgJY7umsHQNwDDR9w+P2htHwKT/oC
JcidpBQA/izaNh4xX+thgOZa4RPswgXKNcUJ/DDbM1rZGo5lOM8B
=Kr0Y
-----END PGP PUBLIC KEY BLOCK-----`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pgpKey).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="page">
      <header className="header">
        <SiteNav currentPage="home" />
        <h1>Home</h1>
        <p className="subtitle">Contact information</p>
      </header>

      <main className="content">
        <section className="card" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>Email: everchanging10@emery.pro</p>
          <p>Website: https://emery.pro</p>
        </section>

        <section className="card" aria-labelledby="pgp-heading">
          <h2 id="pgp-heading">PGP Public Key</h2>
          <div style={{ position: 'relative' }}>
            <pre style={{
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.85rem',
              lineHeight: '1.5'
            }}><code>{pgpKey}</code></pre>
            <button
              onClick={copyToClipboard}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: copySuccess ? '#4caf50' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              {copySuccess ? '✓ Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
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
        <SiteNav currentPage="privacy-policy" />
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
            If you have questions about this policy, contact: everchanging10@emery.pro.
          </p>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const path = normalizePath(window.location.pathname);
  const isPrivacyPage = path.endsWith(PRIVACY_SEGMENT);

  if (isPrivacyPage) {
    return <PrivacyPolicyPage />;
  }

  return <HomePage />;
}
