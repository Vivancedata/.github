// Renders every brand asset from the HTML sources beside this file.
//   node <path to>/profile/assets/source/render.mjs
// Run it from a directory that has Playwright installed (the site repo does);
// this repo has no package.json.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const { chromium } = createRequire(path.join(process.cwd(), 'package.json'))('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '..');

// [source page, output file, css width, css height, device scale]
const SHOTS = [
  ['avatar.html', 'avatar.png', 512, 512, 1],
  ['avatar.html', 'linkedin-logo.png', 512, 512, 800 / 512],
  ['avatar.html?cut=small', 'icon-small.png', 512, 512, 1],
  ['banner.html?v=org', 'banner-org.png', 1280, 640, 2],
  ['banner.html?v=vivancedata', 'banner-vivancedata.png', 1280, 640, 2],
  ['banner.html?v=ui', 'banner-ui.png', 1280, 640, 2],
  ['banner.html?v=crm', 'banner-crm.png', 1280, 640, 2],
  ['banner.html?v=learn', 'banner-learn.png', 1280, 640, 2],
  ['linkedin-cover.html', 'linkedin-cover.png', 1128, 191, 2],
];

const browser = await chromium.launch();
for (const [page, file, width, height, deviceScaleFactor] of SHOTS) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor });
  const tab = await context.newPage();
  await tab.goto(`file://${here}/${page}`);
  // `fonts.check()` is true for a family with no usable face, so load each one
  // and count what came back: a silent fallback renders the wrong brand.
  const missing = await tab.evaluate(async () => {
    const families = ['Instrument Serif', 'Geist', 'Geist Mono'];
    const loaded = await Promise.all(families.map((f) => document.fonts.load(`16px "${f}"`)));
    return families.filter((_, i) => loaded[i].length === 0);
  });
  if (missing.length) throw new Error(`${page}: font did not load: ${missing.join(', ')}`);
  await tab.screenshot({ path: path.join(out, file) });
  await context.close();
  console.log(file);
}
await browser.close();
