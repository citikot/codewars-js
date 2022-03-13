/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false
*/

function checkConcatenatedSum(num, n){
  var rep = num.toString().split("");
  var res = false;
  var sum = 0;
  var i = 0;

  if (num >= 0) {
    for (;i < rep.length; i++) {
      sum += +rep[i].repeat(n);
      if (sum === num) res = true;      
    }
  } else {
      i = 1;
      for (;i < rep.length; i++) {
        sum += +rep[i].repeat(n);
        if (-sum === num) res = true;      
    }
  }
  return res; 
}
