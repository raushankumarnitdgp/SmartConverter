import { PhoneNum } from './phone.js';
import { isEmail } from './isEmail.js';
import { NuminStr } from './numInstr.js';
import { Decimal } from './decimal.js'

export function decider(arr, index) {
  const phone = new PhoneNum(arr, index);
  const others = new NuminStr(arr, index);
  const decimal = new Decimal(arr, index);
  if (phone.isPhone() === true) {
    phone.convert();
  } else if (isEmail(arr[index]) === true) {
    //do nothing ,no change
  } else if(decimal.isDecimal() === true) {
    decimal.convert();
  }  else if (others.isNuminStr() === true) {
    others.convert();
  } else {
    //no number at this index
  }
}


// phone-no: \b(\+|0)[1-9]{1,6}+(\-)[0-9]{4,10}\b
// cardinal no: without regex
// email : \b[A-Z0-9.#&^!?:;_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig
