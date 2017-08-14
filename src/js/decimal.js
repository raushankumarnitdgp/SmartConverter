import { N2W } from './n2w.js';

/**
 * 
 * 
 * @export
 * @class Decimal
 */
export class Decimal {

	/**
	 * Creates an instance of Decimal.
	 * @param {any} arr 
	 * @param {any} index 
	 * @memberof Decimal
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
	 * @returns (true|false) true if arr[index] else false
	 * @memberof Decimal
	 */
	isDecimal(){
		let count=0;
		for(let i=0;i<this.str.length;i++){
			if(this.str[i] === '.'){
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
	 * parse string to get number before '.' and number after
	 * @memberof Decimal
	 */
	parseDecimal(){
		let i=0;
		for(i=0;i<this.str.length;i++){
			if(this.str[i] === '.')
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
	 * converts string 'a decimal' at arr[index] to its equivalent
	 * like 2.03 as two point zero three 
	 * @memberof Decimal
	 */
	convert(){
		this.parseDecimal();
		let result='';
		let n2wObj=new N2W();
		result+=n2wObj.numTostring(this.bstr);
		result+=' point ';
		for(let i=0;i<this.astr.length;i++){
			if(this.astr[i] === '0') {
				result+='zero ';
			}
			else {
				if(this.astr[i]>='1' && this.astr[i]<='9'){
					result+=n2wObj.numTostring(this.astr[i])+' ';
				}
				else{
					result+=this.astr[i];
				}
			}
		}
		this.arr[this.index]=result+' ';
	}
}