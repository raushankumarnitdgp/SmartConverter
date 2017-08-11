import { PhoneNum } from './phone.js';
import { isEmail } from './isEmail.js';
import { NuminStr } from './pre_suffix.js';
import { Decimal } from './decimal.js';
import { Fraction } from './fraction.js'

export function decider(arr, index) {
    const phone = new PhoneNum(arr, index);
    const pre_suffix = new NuminStr(arr, index);
    const decimal = new Decimal(arr, index);
    const fraction = new Fraction(arr, index);
    if (phone.isPhone() === true) {
      phone.convert();
    } else if (isEmail(arr[index]) === true) {
      //do nothing ,no change
    } else if(decimal.isDecimal() === true) {
      decimal.convert();
    } else if(fraction.isFraction() === true) {
      fraction.convert();
    } else if (pre_suffix.isNuminStr() === true) {
      pre_suffix.convert();
    } else {
      //no number at this index
    }
}


// phone-no: \b(\+|0)[1-9]{1,6}+(\-)[0-9]{4,10}\b
// cardinal no: without regex
// email : \b[A-Z0-9.#&^!?:;_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig
