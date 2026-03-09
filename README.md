# emery.pro

Simple React page with static content for:
- Home (`/`): contact info only
- Privacy Policy (`/app/pgp-andy/privacy-policy/`)

Note: for static GitHub Pages folder routes, use trailing-slash links.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy To GitHub Pages

This repo includes a workflow at `.github/workflows/deploy-pages.yml` that builds and deploys the `dist` folder to GitHub Pages on every push to `main`.

Custom domain is preconfigured with `public/CNAME` set to `emery.pro`.

In GitHub:
1. Open `Settings` -> `Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`
3. Push to `main` (or run the workflow manually from the `Actions` tab)

After deployment, your site will be available at your GitHub Pages URL.
Once DNS is pointed correctly, GitHub Pages will also serve it on `https://emery.pro`.

## Edit Content

- Update contact info in `src/App.jsx`
- Update privacy policy text in `src/App.jsx`