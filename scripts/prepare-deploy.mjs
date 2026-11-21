import { copyFile, mkdir, writeFile } from "node:fs/promises";

await Promise.all([
  mkdir("dist/server", { recursive: true }),
  mkdir("dist/experience", { recursive: true }),
  mkdir("dist/publications", { recursive: true }),
  mkdir("dist/misc", { recursive: true }),
]);

await Promise.all([
  copyFile("dist/index.html", "dist/experience/index.html"),
  copyFile("dist/index.html", "dist/publications/index.html"),
  copyFile("dist/index.html", "dist/misc/index.html"),
  copyFile("dist/index.html", "dist/404.html"),
]);

await writeFile(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
);
