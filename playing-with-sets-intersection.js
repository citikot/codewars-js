function inter(s1, s2){
  let arrA = [...s1];
  let arrB = [...s2];
  let intersection = arrA.filter(x => arrB.includes(x));
  return new Set(intersection);
}
