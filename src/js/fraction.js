import { N2W } from './n2w.js';

/**
 * 
 * 
 * @export
 * @class Fraction
 */
export class Fraction {

	/**
	 * Creates an instance of Fraction.
	 * @param {any} arr 
	 * @param {any} index 
	 * @memberof Fraction
	 */
	constructor(arr, index) {
		this.arr=arr;
		this.index=index;
		this.str=arr[index];
		this.bstr='';
		this.astr='';
	}

	/**
	 * 
	 * 
	 * @returns (true|false) true if arr[index] is fraction else false
	 * @memberof Fraction
	 */
	isFraction(){
		let count=0;
		for(let i=0;i<this.str.length;i++){
			if(this.str[i] === '/'){
				count++;
			}
		}
		if(count === 1){
			return true;
		}
		else{
			return false;
		}
	}

	/**
	 * 
	 * parse string to get number before '/' and number after 
	 * @memberof Fraction
	 */
	parseFraction(){
		let i=0;
		for(i=0;i<this.str.length;i++){
			if(this.str[i] === '/')
				break;
			this.bstr+=this.str[i];
		}
		i++;
		for(;i<this.str.length;i++){
			this.astr+=this.str[i];
		}
	}
    
	/**
	 * 
	 * converts string 'a fraction' at arr[index] to its equivalent 
	 * like 2/3 as two by three 
	 * @memberof Fraction
	 */
	convert(){
		this.parseFraction();
		let result='';
		let n2wObj=new N2W();
		result+=n2wObj.numTostring(this.bstr);
		result+=' by ';
		result+=n2wObj.numTostring(this.astr);
		this.arr[this.index]=result+' ';
	}
}