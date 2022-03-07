function divCon(x){
    let strIntSum = 0;
    let nonStrIntSum = 0; 
    let arrLen = x.length;
    for (let i = 0; i < arrLen; i++) {
      if (typeof x[i] === 'string') {
        strIntSum += parseInt(x[i]);
        console.log(strIntSum);
      } else {
        nonStrIntSum += x[i];
        console.log(nonStrIntSum);
      }
    }
    return nonStrIntSum - strIntSum;
}
