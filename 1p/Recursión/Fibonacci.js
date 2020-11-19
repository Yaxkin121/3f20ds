function serie(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return serie(num - 1) + serie(num - 2);
  }
  console.log(serie(11));