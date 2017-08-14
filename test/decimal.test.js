import { Decimal } from '../src/js/decimal.js';

describe('Decimal..',function(){
	it('checks whether a number is decimal and converts according...',function(){
		let arr=['23.210kg','234.23.232.23'];
		const decimal1=new Decimal(arr,0);
		expect(decimal1.isDecimal()).toBe(true);
		const decimal2=new Decimal(arr,1);
		expect(decimal2.isDecimal()).toBe(false);
		decimal1.convert();
		expect(decimal1.arr[0]).toBe('twenty three point two one zero kg ');
	});
});