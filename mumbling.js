function accum(s) {
  var arr = s.toLowerCase().split("");
  var i = 0;
  for (; i < arr.length; i++) {
    arr[i] = arr[i].repeat(i+1);
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }  
return arr.join('-');
}
