import { Fraction } from '../src/js/fraction.js';

describe('Fraction',function(){
    it('convert fractional numbers to word',function(){
        let arr=['23/2','234/23/232/23'];
        const fraction1=new Fraction(arr,0);
        expect(fraction1.isFraction()).toBe(true);
        const fraction2=new Fraction(arr,1);
        expect(fraction2.isFraction()).toBe(false);
        fraction1.convert();
        expect(fraction1.arr[0]).toBe('twenty three by two ');
    })
})