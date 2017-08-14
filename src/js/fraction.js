import { N2W } from './n2w.js';

export class Fraction {
  constructor(arr, repIndex) {
    this.arr=arr;
    this.repIndex=repIndex;
    this.str=arr[repIndex];
    this.bstr='';
    this.astr='';
  }
  isFraction(){
      let count=0;
      for(let i=0;i<this.str.length;i++){
          if(this.str[i] === '/'){
              count++;
          }
      }
      if(count === 1){
          return true;
      }
      else{
          return false;
      }
  }
  parseFraction(){
    let i=0;
    for(i=0;i<this.str.length;i++){
        if(this.str[i] === '/')
            break;
        this.bstr+=this.str[i];
    }
    i++;
    for(;i<this.str.length;i++){
        this.astr+=this.str[i];
    }
  }

  convert(){
      this.parseFraction();
      let result='';
      let n2wObj=new N2W();
      result+=n2wObj.numTostring(this.bstr);
      result+=' by ';
      result+=n2wObj.numTostring(this.astr);
      this.arr[this.repIndex]=result+' ';
  }
}