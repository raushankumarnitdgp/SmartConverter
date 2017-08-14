import { N2W } from './n2w.js';
import { convertOrdinal } from './ordinal.js'
export class NuminStr {
  constructor(arr, rindex) {
    this.arr = arr;
    this.rindex = rindex;
  }
  isNuminStr() {
    let numberPattern = /\d+/g;
    let numArr = this.arr[this.rindex].match(numberPattern);
    if (numArr === null) {
      return false;
    }
    return true;
  }
  convert() {
    let numberPattern = /\d+/g;
    let numArr = this.arr[this.rindex].match(numberPattern);
    let numStrarr = [];
    let i;
    let n2wObj = new N2W();
    for ( i = 0; i < numArr.length; i++) {
        numStrarr[i] = n2wObj.numTostring(numArr[i]);
    }
    
    for (i = 0; i < numArr.length; i++) {
        this.arr[this.rindex] = this.arr[this.rindex].replace(numArr[i], numStrarr[i]);
    }
    this.arr[this.rindex]+=' ';
    convertOrdinal(this.arr,this.rindex);
  }
}
