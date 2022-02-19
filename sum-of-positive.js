function positiveSum(arr) {
  
  if (arr.length > 0) {
    return arr.reduce(((prevVal, currentVal) => currentVal > 0 ? prevVal + currentVal : prevVal), 0);
  } else {
    return 0;
  }   
}
