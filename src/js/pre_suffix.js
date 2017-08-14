import { N2W } from './n2w.js';
import { convertOrdinal } from './ordinal.js';
export class NuminStr {
	constructor(arr, index) {
		this.arr = arr;
		this.index = index;
	}
	isNuminStr() {
		let numberPattern = /\d+/g;
		let numArr = this.arr[this.index].match(numberPattern);
		if (numArr === null) {
			return false;
		}
		return true;
	}
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
