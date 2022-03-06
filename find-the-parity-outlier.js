function findOutlier(integers){
  let evenCounter = 0;
  for (let i = 0; i < 3; i ++) {
    if (integers[i] % 2 === 0) evenCounter++;   
  }
  let res = (evenCounter < 2)  ? integers.filter(el => el % 2 === 0) : integers.filter(el => el % 2 !== 0); 
  return res[0]; 
}
