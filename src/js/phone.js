import { N2W } from './n2w.js';
export class PhoneNum {
	constructor(arr, index) {
		this.arr = arr;
		this.index = index;
		this.num = arr[index];
	}
	isPhone() {
		const pattern = /((\+|0)([0-9]{1,7})(-)([0-9]{3,10}))|(\b(0)([0-9]{10})\b)/g;
		return pattern.test(this.num)?true:false;
	}
	convert() {
		let result='';
		let i;
		let str=this.num;
		let n2wObj = new N2W();
		for(i=0;i<str.length;i++){
			if(str[i]>= '1' && str[i]<='9'){
				result+=n2wObj.numTostring(str[i])+' ';
			} else if(str[i] === '0'){
				result+='zero ';
			} else {
				result+=str[i];
			}
		}
		this.arr[this.index]=result+' ';
	}
}
