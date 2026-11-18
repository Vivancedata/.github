// The VivanceData mark: a V lit in the site's dot matrix, resolving to one green
// dot. Two cuts, because a 5x5 matrix with dim dots turns to noise below ~40px:
//   mark('full')  the whole matrix, for avatars and anything 48px and up
//   mark('small') the nine lit dots only, enlarged, for favicons and lockups
const LIT = [[0, 0], [0, 4], [1, 0], [1, 4], [2, 1], [2, 3], [3, 1], [3, 3]];
const POINT = [4, 2];

function mark(cut, { ink = 'hsl(38 18% 91%)', green = 'hsl(152 42% 58%)', dim = 'hsl(50 6% 24%)' } = {}) {
  const full = cut === 'full';
  const [origin, pitch, r] = full ? [48, 40, 13] : [32, 48, 19];
  const at = ([row, col], radius, fill) =>
    `<circle cx="${origin + pitch * col}" cy="${origin + pitch * row}" r="${radius}" fill="${fill}"/>`;
  const lit = new Set(LIT.concat([POINT]).map(String));
  let dots = '';
  if (full) {
    for (let row = 0; row < 5; row++)
      for (let col = 0; col < 5; col++) if (!lit.has(String([row, col]))) dots += at([row, col], 6, dim);
  }
  dots += LIT.map((d) => at(d, r, ink)).join('') + at(POINT, r, green);
  return `<svg viewBox="0 0 256 256" fill="none" aria-hidden="true">${dots}</svg>`;
}
