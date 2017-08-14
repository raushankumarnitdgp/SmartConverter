import { convertOrdinal } from '../src/js/ordinal.js';

describe('Convert Ordinal',function(){
    it('converts if arr into ordinal equivalent',function(){
        let arr=['threerd fiveth'];
        convertOrdinal(arr,0);
        expect(arr[0]).toBe('third fifth');
    })
})