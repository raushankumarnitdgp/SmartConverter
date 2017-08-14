/**
 * 
 * 
 * @export
 * @class N2W
 */
export class N2W {

	/**
	 * Creates an instance of N2W.
	 * @memberof N2W
	 */
	constructor() {
		this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		this.place = ['ones', 'tens', 'hundred'];
		this.hplace = ['thousand', 'million', 'billion'];
		this.oTens = ['ten', 'eleven', 'tweleve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'ninteen'];
		this.pTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	}

	/**
	 * 
	 * @param {any} num : number (ex: 12, 12.01, 2000 etc.)
	 * @returns result: converts num (a number) to word form of num 
	 * @memberof N2W
	 */
	numTostring(num) {
		let result = '';
		const count = num.toString().length;

		let digPos = 1;
		let i = count - 3;
		let hcount = 1;
		while (i > 0) {
			digPos *= 1000;
			i -= 3;
			hcount += 1;
		}

		while (hcount > 0) {
			const uDig = Math.floor(num / digPos);

			result += this.numToutil1(uDig, hcount);
			num %= digPos;
			digPos /= 1000;
			hcount--;
		}
		return result;
	}

	/**
	 * 
	 * 
	 * @param {any} num : gets number of max length:3 ,it gets num from numTostring in chunk of 3
	 * @param {any} hcount : position of this chunk thousand , million ,billion
	 * @returns 
	 * @memberof N2W
	 */
	numToutil1(num, hcount) {
		let result = '';
		let count = num.toString().length;

		let digPos = 1;
		let i = count - 1;

		while (i > 0) {
			digPos *= 10;
			i--;
		}

		let flagOn = false;
		while (count > 0) {
			const uDig = Math.floor(num / digPos);

			switch (count) {
			case 1:
				if (flagOn === false) { result += this.numbers[uDig]; }
				break;
			case 2:
				if (uDig === 1) {
					result += this.oTens[num - 10];
					flagOn = true;
				} else if (uDig >= 2) {
					result += `${this.pTens[uDig - 2]} `;
				} else {
					result += '';
				}
				break;
			case 3:
				result += `${this.numbers[uDig]} hundred `;
				break;
			}
			num %= digPos;
			digPos /= 10;
			count--;
		}
		let suffix = '';
		switch (hcount) {
		case 1:
			break;
		case 2:
			suffix = ' thousand ';
			break;
		case 3:
			suffix = ' million ';
			break;
		case 4:
			suffix = ' billion ';
			break;
		}
		if (result !== '') { return result + suffix; } return result;
	}
}
