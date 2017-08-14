import { decider } from '../src/js/decider.js';

describe('Decider',function(){
	it('decides string category',function(){
		let arr=['09835049463','2.3','abc23@gmail.com','2/3','AC10','abxc'];
		decider(arr,1);
		expect(arr[1]).toBe('two point three  ');
		decider(arr,0);
		expect(arr[0]).toBe('zero nine eight three five zero four nine four six three  ');
		decider(arr,2);
		expect(arr[2]).toBe('abc23@gmail.com');
		decider(arr,3);
		expect(arr[3]).toBe('two by three ');
		decider(arr,4);
		expect(arr[4]).toBe('ACten ');
		decider(arr,5);
		expect(arr[5]).toBe('abxc');
	});
});