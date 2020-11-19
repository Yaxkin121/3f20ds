function serief(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return serief(num - 1) + serief(num - 2);
  }
  console.log(serief(11));