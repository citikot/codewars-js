function squareDigits(num){
    let str = num + "";
    let digits = str.split('');
    digits = digits.map( el => el ** 2);
    return +digits.join('');
}
