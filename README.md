# Jinxin Yang — Academic Portfolio

A responsive, single-page academic portfolio for Jinxin Yang, an undergraduate researcher working across wireless communications, networked systems, graph neural networks, Age of Information, and AI infrastructure.

## Technology

- React and TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- GitHub Actions deployment to GitHub Pages

## Local development

Node.js 20 or newer is recommended.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production build

```bash
npm run build
```

The deployable static site is generated in `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Replace every placeholder listed below.
2. Create a repository named `Rosword.github.io`.
3. Push this project to its `main` branch.
4. In the GitHub repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions** as the source.
6. The workflow in `.github/workflows/deploy.yml` will build and publish the site after each push to `main`.

Example commands:

```bash
git init
git add .
git commit -m "Build personal academic website"
git branch -M main
git remote add origin https://github.com/Rosword/Rosword.github.io.git
git push -u origin main
```

## Placeholders to replace

- LinkedIn profile URL in the hero, contact section, and footer
- Google Scholar profile URL in the hero, contact section, and footer
- Optional Paper, DOI, and Code links in `src/components/Publications.tsx` once real URLs are available

Unfilled social links are intentionally shown as disabled labels so the site never sends visitors to a fake URL.

## Updating content

The main repeatable content lives in `src/data/portfolio.ts`. Section-specific narrative content is stored in the matching component under `src/components/`.

The downloadable CV is stored at `public/Jinxin_Yang_CV.pdf`.

## Project structure

```text
.github/workflows/deploy.yml
public/
  Jinxin_Yang_CV.pdf
  favicon.svg
src/
  components/
  data/portfolio.ts
  App.tsx
  index.css
  main.tsx
index.html
package.json
vite.config.ts
```
