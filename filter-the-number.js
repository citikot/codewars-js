var FilterString = function(value) {
  
  var regexp = /\D+/gmi;
  var numbers = parseInt(value.replace(regexp, ""));
  return numbers;
}
