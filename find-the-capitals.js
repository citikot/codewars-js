function capital(capitals){
  return capitals.map( el => {
    let keys = Object.keys(el);
    return `The capital of ${el[keys[0]]} is ${el[keys[1]]}`;
  });  
}
