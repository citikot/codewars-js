function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let i = 1;
  let tail = 0;
  let n1 = 0;
  let n2 = 1;
  
  do {
    if (i === n) return n1;
    tail = n2;
    n2 = n2 + n1;
    n1 = tail; 
    i += 1;
  } while (true);
}
