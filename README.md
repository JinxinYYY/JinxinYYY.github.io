# Jinxin Yang

Source code for my personal academic website: [jinxinyyy.github.io](https://jinxinyyy.github.io/).

The website contains four sections:

- Home
- Experience
- Publications
- Misc

## Development

This project uses React, TypeScript, and Vite.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Most academic content is stored in `src/data/portfolio.ts`. Page components are
in `src/components/`, and the main stylesheet is `src/index.css`.

## Deployment

Updates pushed to the `main` branch are published to GitHub Pages by the workflow
in `.github/workflows/deploy.yml`.
