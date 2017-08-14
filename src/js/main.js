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
	 * @param str as 
	 * @memberof Converter
	 */
	constructor(str) {
		this.str = str;
		this.arr = [];
	}
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

export function printNum() {
	let text = document.getElementById('number').value;
	let numstr = new Converter(text);
	numstr.convert();
	setTimeout(function (){
		document.getElementById('toString').innerHTML = numstr.str;
	},0);
}

export function clicked(){
	document.getElementById('convert1').addEventListener('click', printNum);
}

window.onload = clicked;