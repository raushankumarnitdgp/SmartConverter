import { PhoneNum } from '../src/js/phone.js';

describe('Phone.js', function(){
	it('converts phone number ..', function(){
		let phone = new PhoneNum(['+91-9835049463'],0);
		expect(phone.isPhone()).toBe(true);
		phone.convert();
		expect(phone.arr[0]).toBe('+nine one -nine eight three five zero four nine four six three  ');
	});
});