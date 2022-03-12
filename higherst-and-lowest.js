function highAndLow(numbers){
  // ...
  let arr = numbers.split(" ").map(el => parseInt(el));
  let last = arr.length - 1;

  for (let i = last; i >= 0 ; i--) {
    for (let j = 0; j < i; j++ ) {
      if (arr[j] > arr[j+1]) {
        let t = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = t;
      }
    }
  }
  let max = arr[arr.length-1];
  let min = arr[0];

  return `${max} ${min}`;
}

