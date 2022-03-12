function isIsogram(str){
  //...
  let arr = str.toLowerCase().split("");
  let i = 0;
  for (; i < arr.length ; i++) {
    if (arr.indexOf(arr[i]) != i) return false;
  }
  return true;
}
