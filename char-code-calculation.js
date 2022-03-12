function calc(x){
  var arr = x.split("");
  var rep = arr.map(el => el.charCodeAt()).join("");
  var mod = rep.replace(/7/gi,1);
  var rep1 = rep.split("").reduce((previousValue, currentValue) => +previousValue + +currentValue);
  var mod1 = mod.split("").reduce((previousValue, currentValue) => +previousValue + +currentValue);
  var res = rep1 - mod1;
  return res;
}
