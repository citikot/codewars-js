function findOdd(A) {
  let mapped = {};
  A.forEach((el) => {
    mapped[el] = (!mapped[el]) ? 1 : mapped[el] + 1;
  });
  console.log(mapped);
  for (const key in mapped) {
    if (mapped[key] % 2 === 1) return +key;
  }
}
