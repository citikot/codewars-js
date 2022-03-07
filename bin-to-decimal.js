function binToDec(bin){
    let start = 0;
    let binNum = bin.split('').reverse().reduce( (start, el, index) => (el === '0') ? start : start + 2 ** index , start);
    return binNum;
  }
