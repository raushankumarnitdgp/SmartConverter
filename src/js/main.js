import { decider } from './decider.js';

class Converter {
  constructor(str) {
    this.str = str;
    this.arr = [];
  }
  convert() {
    this.arr = this.str.split(' ');
    var that=this;
    for (let i = 0; i < this.arr.length; i++) {
      setTimeout(function(){
        decider(that.arr, i);
      },0);
    }

    setTimeout(function(){
      that.str = that.arr.join(' ');
    },0);
  }
}

let numstr = new Converter('+91-83623283 4th 5th 3rd 85th 234.434kg 1/4 23/56 2.04  dsds asa344s@gmail.com +438-94973 cc12cc 1.1.1.1.1..1.1.1');
numstr.convert();
setTimeout(function(){
  console.log(numstr.str);
},0);