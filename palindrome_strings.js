function isPalindrome(line) {

  str = line.toString();
  strLen = str.length;
  
  for (let i = 0; i < (strLen / 2); i++) {
    if (str[i] !== str[strLen - i - 1]) return false;   
  }
    return true;
}
