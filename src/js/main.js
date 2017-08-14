import { decider } from './decider.js';
document.getElementById('convert1').addEventListener('click', printNum);

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

function printNum() {
  let text = document.getElementById('number').value;
  let numstr = new Converter(text);
  numstr.convert();
  setTimeout(function (){
    document.getElementById('toString').innerHTML = numstr.str;
  },0);
}
