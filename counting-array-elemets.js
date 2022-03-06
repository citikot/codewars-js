function count(array) {
  let mapped = {};
  array.forEach((el) => {
    mapped[el] = (!mapped[el]) ? 1 : mapped[el] + 1;
  });
  return mapped;
}
