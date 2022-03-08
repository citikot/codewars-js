function findShort(s){
  let words = s.split(" ");
  let min = words[0].length;
  for (let i = 1; i < words.length; i++) {
    wrdLen = words[i].length;
    if (wrdLen < min) min = wrdLen; 
  }
  return min;
}
