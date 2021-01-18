const convr = (ys, am) => {
  let pl = [],
    anws = [];
  while (ys > 0) {
    pl.push(ys % am);
    ys = Math.floor(ys / am);
  }
  while (pl.length > 0) {
    anws.push(pl.pop());
  }
  return anws.join("");
};
const num = 13,
  b = 2;
console.log(convr(num, b));
