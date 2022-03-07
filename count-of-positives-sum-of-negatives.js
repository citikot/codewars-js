function countPositivesSumNegatives(input) {
    let res = [];
    if (input === null || input.length === 0) return res;
    let sumPos = 0;
    let sumNeg = 0;
    let arrLen = input.length;
    for (let i = 0; i < arrLen; i++) {
      if (input[i] > 0) {
        sumPos++;
      } else if (input[i] === 0){
        continue;
      } else {
        sumNeg += input[i];
      }
    }
    res.push(sumPos);
    res.push(sumNeg);
    return res;
}
