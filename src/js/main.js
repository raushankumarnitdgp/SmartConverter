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

let numstr = new Converter('+91-83623283 234 2.34  dsds asa344s@gmail.com');
numstr.convert();
console.log(numstr.str);
