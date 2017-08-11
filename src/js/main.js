import { decider } from './decider.js';

class Converter {
  constructor(str) {
    this.str = str;
    this.arr = [];
  }
  convert() {
    this.arr = this.str.split(' ');
    for (let i = 0; i < this.arr.length; i++) {
      decider(this.arr, i);
      this.str = this.arr.join(' ');
    }
  }
}

let numstr = new Converter('+91-83623283 234.434kg 2.04  dsds asa344s@gmail.com +438-94973 cc12cc');
numstr.convert();
console.log(numstr.str);
