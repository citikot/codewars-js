function removeEveryOther(arr){
  //your code here
  let i = 0;
  for (;i < arr.length; i++) arr.splice (i+1, 1);
  return arr;
}
