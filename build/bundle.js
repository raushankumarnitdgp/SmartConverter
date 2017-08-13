/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class N2W {
  constructor() {
    this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.place = ['ones', 'tens', 'hundred'];
    this.hplace = ['thousand', 'million', 'billion'];
    this.oTens = ['ten', 'eleven', 'tweleve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'ninteen'];
    this.pTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  }

  numTostring(num) {
    let result = '';
    const count = num.toString().length;

    let digPos = 1;
    let i = count - 3;
    let hcount = 1;
    while (i > 0) {
      digPos *= 1000;
      i -= 3;
      hcount += 1;
    }

    while (hcount > 0) {
      const uDig = Math.floor(num / digPos);

      result += this.numToutil1(uDig, hcount);
      num %= digPos;
      digPos /= 1000;
      hcount--;
    }
    return result;
  }

  numToutil1(num, hcount) {
    let result = '';
    let count = num.toString().length;

    let digPos = 1;
    let i = count - 1;

    while (i > 0) {
      digPos *= 10;
      i--;
    }

    let flagOn = false;
    while (count > 0) {
        const uDig = Math.floor(num / digPos);

        switch (count) {
            case 1:
            if (flagOn === false) { result += this.numbers[uDig]; }
            break;
            case 2:
            if (uDig === 1) {
                result += this.oTens[num - 10];
                flagOn = true;
            } else if (uDig >= 2) {
                result += `${this.pTens[uDig - 2]} `;
            } else {
                result += '';
            }
            break;
            case 3:
            result += `${this.numbers[uDig]} hundred `;
            break;
        }
        num %= digPos;
        digPos /= 10;
        count--;
    }
    let suffix = '';
    switch (hcount) {
      case 1:
        break;
      case 2:
        suffix = ' thousand ';
        break;
      case 3:
        suffix = ' million ';
        break;
      case 4:
        suffix = ' billion ';
        break;
      default:
        break;
    }
    if (result !== '') { return result + suffix; } return result;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = N2W;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decider_js__ = __webpack_require__(2);



var page_content='<title>Convert Num to string ...</title><link href=assets/style.css rel=stylesheet><textarea cols=80 id=number rows=20></textarea><button id=convert1 type=button>Convert To Word</button><br><br><div id=toString></div>';
document.body.insertAdjacentHTML('afterbegin', page_content);


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
        Object(__WEBPACK_IMPORTED_MODULE_0__decider_js__["a" /* decider */])(that.arr, i);
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = decider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phone_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isEmail_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_suffix_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decimal_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fraction_js__ = __webpack_require__(8);






function decider(arr, index) {
    const phone = new __WEBPACK_IMPORTED_MODULE_0__phone_js__["a" /* PhoneNum */](arr, index);
    const pre_suffix = new __WEBPACK_IMPORTED_MODULE_2__pre_suffix_js__["a" /* NuminStr */](arr, index);
    const decimal = new __WEBPACK_IMPORTED_MODULE_3__decimal_js__["a" /* Decimal */](arr, index);
    const fraction = new __WEBPACK_IMPORTED_MODULE_4__fraction_js__["a" /* Fraction */](arr, index);
    if (phone.isPhone() === true) {
      phone.convert();
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1__isEmail_js__["a" /* isEmail */])(arr[index]) === true) {
      //do nothing ,no change
    } else if(decimal.isDecimal() === true) {
      decimal.convert();
    } else if(fraction.isFraction() === true) {
      fraction.convert();
    } else if (pre_suffix.isNuminStr() === true) {
      pre_suffix.convert();
    } else {
      //no number at this index
    }
}


// phone-no: \b(\+|0)[1-9]{1,6}+(\-)[0-9]{4,10}\b
// cardinal no: without regex
// email : \b[A-Z0-9.#&^!?:;_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ig


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__n2w_js__ = __webpack_require__(0);

class PhoneNum {
  constructor(arr, repIndex) {
    this.arr = arr;
    this.repIndex = repIndex;
    this.num = arr[repIndex];
  }
  isPhone() {
    const pattern = /((\+|0)([0-9]{1,7})(\-)([0-9]{3,10}))|(\b(0)([0-9]{10})\b)/g;
    let pnum = [];
    pnum = this.num.match(pattern);
    if (pnum === null) { return false; }
    return true;
  }
  convert() {
    let result='';
    let i;
    let str=this.num;
    let n2wObj = new __WEBPACK_IMPORTED_MODULE_0__n2w_js__["a" /* N2W */]();
    for(i=0;i<str.length;i++){
      if(str[i]>= '1' && str[i]<='9'){
        result+=n2wObj.numTostring(str[i])+' ';
      } else if(str[i] === '0'){
        result+='zero ';
      } else {
        result+=str[i];
      }
    }
    this.arr[this.repIndex]=result;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhoneNum;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmail;
function isEmail (str) {
  let pattern = /\b([A-Z@!_]+)([A-Z0-9@!._]*)([A-Z@!._]+)\b/gi;
  let pmail = [];
  pmail = str.match(pattern); 
  if(pmail === null)
    return false;
  else
    return true;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__n2w_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal_js__ = __webpack_require__(6);


class NuminStr {
  constructor(arr, rindex) {
    this.arr = arr;
    this.rindex = rindex;
  }
  isNuminStr() {
    let numberPattern = /\d+/g;
    let numArr = this.arr[this.rindex].match(numberPattern);
    if (numArr === null) {
      return false;
    }
    return true;
  }
  convert() {
    let numberPattern = /\d+/g;
    let numArr = this.arr[this.rindex].match(numberPattern);
    let numStrarr = [];
    let i;
    let n2wObj = new __WEBPACK_IMPORTED_MODULE_0__n2w_js__["a" /* N2W */]();
    for ( i = 0; i < numArr.length; i++) {
        numStrarr[i] = n2wObj.numTostring(numArr[i]);
    }
    
    for (i = 0; i < numArr.length; i++) {
        this.arr[this.rindex] = this.arr[this.rindex].replace(numArr[i], numStrarr[i]);
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__ordinal_js__["a" /* convertOrdinal */])(this.arr,this.rindex);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NuminStr;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertOrdinal;
function convertOrdinal(arr,index){
    let find=['onest','twond','threerd','fiveth'];
    let turnTo=['first','second','third','fifth'];
    for(let i=0;i<find.length;i++){
        arr[index]=arr[index].replace(find[i],turnTo[i]);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__n2w_js__ = __webpack_require__(0);


class Decimal {
  constructor(arr, repIndex) {
    this.arr=arr;
    this.repIndex=repIndex;
    this.str=arr[repIndex];
    this.bstr='';
    this.astr='';
  }
  isDecimal(){
      let count=0;
      for(let i=0;i<this.str.length;i++){
          if(this.str[i] === '.'){
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
  parseDecimal(){
    let i=0;
    for(i=0;i<this.str.length;i++){
        if(this.str[i] === '.')
            break;
        this.bstr+=this.str[i];
    }
    i++;
    for(;i<this.str.length;i++){
        this.astr+=this.str[i];
    }
  }

  convert(){
      this.parseDecimal();
      let result='';
      let n2wObj=new __WEBPACK_IMPORTED_MODULE_0__n2w_js__["a" /* N2W */]();
      result+=n2wObj.numTostring(this.bstr);
      result+=' point ';
      for(let i=0;i<this.astr.length;i++){
        if(this.astr[i] === '0') {
            result+='zero ';
        }
        else {
            if(this.astr[i]>='1' && this.astr[i]<='9'){
                result+=n2wObj.numTostring(this.astr[i])+' ';
            }
            else{
                result+=this.astr[i];
            }
        }
      }
      this.arr[this.repIndex]=result;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Decimal;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__n2w_js__ = __webpack_require__(0);


class Fraction {
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
      let n2wObj=new __WEBPACK_IMPORTED_MODULE_0__n2w_js__["a" /* N2W */]();
      result+=n2wObj.numTostring(this.bstr);
      result+=' by ';
      result+=n2wObj.numTostring(this.astr);
      this.arr[this.repIndex]=result;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fraction;


/***/ })
/******/ ]);