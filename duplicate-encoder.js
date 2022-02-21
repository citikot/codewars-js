function duplicateEncode(word){
  let orig = word.toLowerCase();
  let res = "";
  for (let i = 0; i < orig.length; i++) {
    if (i !== orig.lastIndexOf(orig[i])) {
      res += ")";
    } else if (i !== orig.indexOf(orig[i])) {
      res += ")";
    } else {
      res += "(";
    }
  } 
  return res;
}
