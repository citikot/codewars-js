function distinct(a) {
  res = a.filter((item, index, a) => a.indexOf(item) === index);
  return res;
}
