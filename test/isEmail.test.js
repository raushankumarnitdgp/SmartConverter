import { isEmail } from '../src/js/isEmail.js';

describe('isEmail function',function(){
	it('checks whether given string is Email type',function(){
		let mail='abcdef2345@gmail.com';
        expect(isEmail(mail)).toBe(true);
        mail='2345th';
        expect(isEmail(mail)).toBe(false);
	});
});