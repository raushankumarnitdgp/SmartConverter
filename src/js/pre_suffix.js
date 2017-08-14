import { N2W } from './n2w.js';
import { convertOrdinal } from './ordinal.js';

/**
 * 
 * 
 * @export
 * @class NuminStr
 */
export class NuminStr {

	/**
	 * Creates an instance of NuminStr.
	 * @param {any} arr 
	 * @param {any} index 
	 * @memberof NuminStr
	 */
	constructor(arr, index) {
		this.arr = arr;
		this.index = index;
	}

	/**
	 * 
	 * 
	 * @returns (true|false) if string contains any number then true else false
	 * @memberof NuminStr
	 */
	isNuminStr() {
		let numberPattern = /\d+/g;
		let numArr = this.arr[this.index].match(numberPattern);
		if (numArr === null) {
			return false;
		}
		return true;
	}

	/**
	 * 
	 * converts numerical string present at arr[index] to its equivalent word 
	 * @memberof NuminStr
	 */
	convert() {
		let numberPattern = /\d+/g;
		let numArr = this.arr[this.index].match(numberPattern);
		let numStrarr = [];
		let i;
		let n2wObj = new N2W();
		for ( i = 0; i < numArr.length; i++) {
			numStrarr[i] = n2wObj.numTostring(numArr[i]);
		}
    
		for (i = 0; i < numArr.length; i++) {
			this.arr[this.index] = this.arr[this.index].replace(numArr[i], numStrarr[i]);
		}
		this.arr[this.index]+=' ';
		convertOrdinal(this.arr,this.index);
	}
}
