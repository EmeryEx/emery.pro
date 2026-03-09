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
          <p>Email: andy@example.com</p>
          <p>Signal: @andy.01</p>
          <p>Website: https://emery.pro</p>
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
            If you have questions about this policy, contact: andy@example.com.
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
