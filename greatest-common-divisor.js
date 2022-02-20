function mygcd(x,y){
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
