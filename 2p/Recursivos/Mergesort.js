let ys = [36, 98, 51, 79, 64, 94, 12];
const MergeSort = (ys) => {
  const half = ys.length / 2;
  if (ys.length < 2) return ys;
  const left = ys.splice(0, half);
  return merge(MergeSort(left), MergeSort(ys));
};
const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};
console.log(MergeSort(ys));
