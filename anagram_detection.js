var isAnagram = function(test, original) {
  
  var source = test.split("").map(el => el.toLowerCase()).sort();
  var dest = original.split("").map(el => el.toLowerCase()).sort();
  
  if (source.length !== dest.length) {
    return false;
  } else {
    var i = 0;
    for (;i <= source.length - 1; i++) {
      if (source[i] != dest[i]) return false;
    }
    return true;
  }
};
