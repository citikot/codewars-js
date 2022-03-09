function validPass(password){
  regexp = /^(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z@#$%&^]{4,19}$/;
  let res = regexp.test(password) ? 'VALID' : 'INVALID';
  return res;
}
