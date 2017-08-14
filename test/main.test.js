import { Converter,printNum,clicked } from '../src/js/main.js';
import { decider } from '../src/js/decider.js';

beforeAll(function(){
	var content='<body><textarea rows="20" cols="80" id="number"></textarea><button type="button" id="convert1">Convert To Word</button> <br><br><div id="toString"></div></body>';
	document.body.insertAdjacentHTML('afterbegin', content);
});

describe('Converter',function(){
	it('converts all number in string',function(){
		jest.useFakeTimers();
		const convObj= new Converter('21 3.01 is 1st');
		convObj.convert();
		expect(setTimeout.mock.calls.length).toBe(convObj.arr.length+1);
		const decider=jest.fn();
		expect(decider).not.toBeCalled();
		jest.runAllTimers();
	});
});

describe('Converter',function(){
	it('printNum',function(){
		printNum();
		expect(setTimeout.mock.calls[0][1]).toBe(0);
		clicked();
		jest.runAllTimers();
	});
});
