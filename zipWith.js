function zipWith(fn,a0,a1) {
  let res = [];
  let len = ((a0.length - a1.length) >= 0 ) ? a1.length : a0.length;
  for (let i = 0; i < len; i++) {
    res.push(fn(a0[i], a1[i]));
  }
  return res;
}
