import { NuminStr } from '../src/js/pre_suffix.js';
describe('Pre_suffix.js',function(){
	it('should convert number if it is in prefix or suffix of string',function(){
		let arr=['sskjdn','AC10'];
		const str1=new NuminStr(arr,1);
		expect(str1.isNuminStr()).toBe(true);
		const str2=new NuminStr(arr,0);
		expect(str2.isNuminStr()).toBe(false);
		str1.convert();
		expect(arr[1]).toBe('ACten ');
	});
});