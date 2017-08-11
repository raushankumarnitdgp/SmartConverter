import { N2W } from './n2w.js';
export class PhoneNum {
  constructor(arr, repIndex) {
    this.arr = arr;
    this.repIndex = repIndex;
    this.num = arr[repIndex];
  }
  isPhone() {
    const pattern = /(\+|0)([1-9]{1,7})(\-)([0-9]{3,10})/g;
    let pnum = [];
    pnum = this.num.match(pattern);
    if (pnum === null) { return false; }
    return true;
  }
  convert() {
    let result='';
    let i;
    let str=this.num;
    let n2wObj = new N2W();
    for(i=0;i<str.length;i++){
      if(str[i]>= '0' && str[i]<='9'){
        result+=n2wObj.numTostring(str[i])+' ';
      }
      else{
        result+=str[i]+' ';
      }
    }
    this.arr[this.repIndex]=result;
  }
}
