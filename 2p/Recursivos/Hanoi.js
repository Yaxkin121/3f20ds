let T1 = 1,
  T2 = 2,
  T3 = 3,
  ys = 4;

const Hn = (ys, am, des, a) => {
  if (ys === 1)
    console.log("Cambiar disco ", ys, " de torre ", am, " a torre ", des);
  else {
    Hn(ys - 1, am, a, des);
    console.log("Cambiar disco ", ys, " de torre ", am, " a torre ", des);
    Hn(ys - 1, a, des, am);
  }
};
Hn(ys, T1, T3, T2);
