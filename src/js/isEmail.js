export function isEmail (str) {
  let pattern = /\b([A-Z@!_]+)([A-Z0-9@!._]*)([A-Z@!._]+)\b/gi;
  let pmail = [];
  pmail = str.match(pattern); 
  if(pmail === null)
    return false;
  else
    return true;
}
