import { decider } from './decider.js';

/**
 * 
 * 
 * @export
 * @class Converter
 */
export class Converter {

	/**
	 * Creates an instance of Converter.
	 * @param str 
	 * @memberof Converter
	 */
	constructor(str) {
		this.str = str;
		this.arr = [];
	}

	/**
	 * 
	 * converts numbers present in str to equivalent str having word in place of numbers
	 * arr have string of str split by space
	 * @memberof Converter
	 */
	convert() {
		this.arr = this.str.split(' ');
		var that=this;
		for (let i = 0; i < this.arr.length; i++) {
			setTimeout(function(){
				decider(that.arr, i);
			},0);
		}

		setTimeout(function(){
			that.str = that.arr.join(' ');
		},0);
	}
}

/**
 * takes input from element having id:number 
 * and converted output at element #id:toString
 * @export
 */
export function printNum() {
	let text = document.getElementById('number').value;
	let numstr = new Converter(text);
	numstr.convert();
	setTimeout(function (){
		document.getElementById('toString').innerHTML = numstr.str;
	},0);
}

/**
 * event listener of element #id:convert1 
 * @export
 */
export function clicked(){
	document.getElementById('convert1').addEventListener('click', printNum);
}

window.onload = clicked;