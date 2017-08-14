import { PhoneNum } from './phone.js';
import { isEmail } from './isEmail.js';
import { NuminStr } from './pre_suffix.js';
import { Decimal } from './decimal.js';
import { Fraction } from './fraction.js';

/**
 * 
 * 
 * @export
 * @param {any} arr 
 * @param {any} index
 * decides the category of string @ arr[index] 
 */
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
		//no number at this index or ambiguous
	}
}
