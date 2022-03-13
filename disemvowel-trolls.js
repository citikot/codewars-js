function disemvowel(str) {
  let regexp = /[aeuoi]/gi;
  return str.replace(regexp, "");
}
