import { N2W } from '../src/js/n2w.js';

describe('N2W',function(){
    it('converts number to words',function(){
        const num = new N2W();
        expect(num.numTostring(121)).toBe('one hundred twenty one');
        expect(num.numTostring(1000000)).toBe('one million ');
        expect(num.numTostring(1000000000)).toBe('one billion ');  
        expect(num.numTostring(1000)).toBe('one thousand ');
        expect(num.numTostring(111)).toBe('one hundred eleven');               
    })
})