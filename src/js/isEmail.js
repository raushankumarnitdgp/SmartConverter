export function isEmail (str) {
  let pattern = /\b[A-Z0-9.#&^!?:;_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi;
  let pmail = [];
  pmail = str.match(pattern); 
  if(pmail === null)
    return false;
  else
    return true;
}
