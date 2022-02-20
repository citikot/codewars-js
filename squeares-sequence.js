function squares(x, n) {
  
  let res = [];
  
  if (n > 0) {
    res[0] = x;
    let i = 1;
    for (; i < n; i++) {
      res[i] = Math.pow(res[i-1],2); 
    }
  }
  return res;
}
