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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var N2W = exports.N2W = function () {
  function N2W() {
    _classCallCheck(this, N2W);

    this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    this.place = ['ones', 'tens', 'hundred'];
    this.hplace = ['thousand', 'million', 'billion'];
    this.oTens = ['ten', 'eleven', 'tweleve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'ninteen'];
    this.pTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  }

  _createClass(N2W, [{
    key: 'numTostring',
    value: function numTostring(num) {
      var result = '';
      var count = num.toString().length;

      var digPos = 1;
      var i = count - 3;
      var hcount = 1;
      while (i > 0) {
        digPos *= 1000;
        i -= 3;
        hcount += 1;
      }

      while (hcount > 0) {
        var uDig = Math.floor(num / digPos);

        result += this.numToutil1(uDig, hcount);
        num %= digPos;
        digPos /= 1000;
        hcount--;
      }
      return result;
    }
  }, {
    key: 'numToutil1',
    value: function numToutil1(num, hcount) {
      var result = '';
      var count = num.toString().length;

      var digPos = 1;
      var i = count - 1;

      while (i > 0) {
        digPos *= 10;
        i--;
      }

      var flagOn = false;
      while (count > 0) {
        var uDig = Math.floor(num / digPos);

        switch (count) {
          case 1:
            if (flagOn === false) {
              result += this.numbers[uDig];
            }
            break;
          case 2:
            if (uDig === 1) {
              result += this.oTens[num - 10];
              flagOn = true;
            } else if (uDig >= 2) {
              result += this.pTens[uDig - 2] + ' ';
            } else {
              result += '';
            }
            break;
          case 3:
            result += this.numbers[uDig] + ' hundred ';
            break;
        }
        num %= digPos;
        digPos /= 10;
        count--;
      }
      var suffix = '';
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
      if (result !== '') {
        return result + suffix;
      }return result;
    }
  }]);

  return N2W;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decider = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.getElementById('convert1').addEventListener('click', printNum);

var Converter = function () {
  function Converter(str) {
    _classCallCheck(this, Converter);

    this.str = str;
    this.arr = [];
  }

  _createClass(Converter, [{
    key: 'convert',
    value: function convert() {
      this.arr = this.str.split(' ');
      var that = this;

      var _loop = function _loop(i) {
        setTimeout(function () {
          (0, _decider.decider)(that.arr, i);
        }, 0);
      };

      for (var i = 0; i < this.arr.length; i++) {
        _loop(i);
      }

      setTimeout(function () {
        that.str = that.arr.join(' ');
      }, 0);
    }
  }]);

  return Converter;
}();

function printNum() {
  var text = document.getElementById('number').value;
  var numstr = new Converter(text);
  numstr.convert();
  setTimeout(function () {
    document.getElementById('toString').innerHTML = numstr.str;
  }, 0);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decider = decider;

var _phone = __webpack_require__(3);

var _isEmail = __webpack_require__(4);

var _pre_suffix = __webpack_require__(5);

var _decimal = __webpack_require__(7);

var _fraction = __webpack_require__(8);

function decider(arr, index) {
  var phone = new _phone.PhoneNum(arr, index);
  var pre_suffix = new _pre_suffix.NuminStr(arr, index);
  var decimal = new _decimal.Decimal(arr, index);
  var fraction = new _fraction.Fraction(arr, index);
  if (phone.isPhone() === true) {
    phone.convert();
  } else if ((0, _isEmail.isEmail)(arr[index]) === true) {
    //do nothing ,no change
  } else if (decimal.isDecimal() === true) {
    decimal.convert();
  } else if (fraction.isFraction() === true) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneNum = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneNum = exports.PhoneNum = function () {
  function PhoneNum(arr, repIndex) {
    _classCallCheck(this, PhoneNum);

    this.arr = arr;
    this.repIndex = repIndex;
    this.num = arr[repIndex];
  }

  _createClass(PhoneNum, [{
    key: 'isPhone',
    value: function isPhone() {
      var pattern = /(\+|0)([1-9]{1,7})(\-)([0-9]{3,10})/g;
      var pnum = [];
      pnum = this.num.match(pattern);
      if (pnum === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'convert',
    value: function convert() {
      var result = '';
      var i = void 0;
      var str = this.num;
      var n2wObj = new _n2w.N2W();
      for (i = 0; i < str.length; i++) {
        if (str[i] >= '1' && str[i] <= '9') {
          result += n2wObj.numTostring(str[i]) + ' ';
        } else if (str[i] === '0') {
          result += 'zero ';
        } else {
          result += str[i];
        }
      }
      this.arr[this.repIndex] = result;
    }
  }]);

  return PhoneNum;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = isEmail;
function isEmail(str) {
  var pattern = /\b([A-Z@!_]+)([A-Z0-9@!._]*)([A-Z@!._]+)\b/gi;
  var pmail = [];
  pmail = str.match(pattern);
  if (pmail === null) return false;else return true;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuminStr = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

var _ordinal = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NuminStr = exports.NuminStr = function () {
  function NuminStr(arr, rindex) {
    _classCallCheck(this, NuminStr);

    this.arr = arr;
    this.rindex = rindex;
  }

  _createClass(NuminStr, [{
    key: 'isNuminStr',
    value: function isNuminStr() {
      var numberPattern = /\d+/g;
      var numArr = this.arr[this.rindex].match(numberPattern);
      if (numArr === null) {
        return false;
      }
      return true;
    }
  }, {
    key: 'convert',
    value: function convert() {
      var numberPattern = /\d+/g;
      var numArr = this.arr[this.rindex].match(numberPattern);
      var numStrarr = [];
      var i = void 0;
      var n2wObj = new _n2w.N2W();
      for (i = 0; i < numArr.length; i++) {
        numStrarr[i] = n2wObj.numTostring(numArr[i]);
      }

      for (i = 0; i < numArr.length; i++) {
        this.arr[this.rindex] = this.arr[this.rindex].replace(numArr[i], numStrarr[i]);
      }
      (0, _ordinal.convertOrdinal)(this.arr, this.rindex);
    }
  }]);

  return NuminStr;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertOrdinal = convertOrdinal;
function convertOrdinal(arr, index) {
    var find = ['onest', 'twond', 'threerd', 'fiveth'];
    var turnTo = ['first', 'second', 'third', 'fifth'];
    for (var i = 0; i < find.length; i++) {
        arr[index] = arr[index].replace(find[i], turnTo[i]);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Decimal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Decimal = exports.Decimal = function () {
    function Decimal(arr, repIndex) {
        _classCallCheck(this, Decimal);

        this.arr = arr;
        this.repIndex = repIndex;
        this.str = arr[repIndex];
        this.bstr = '';
        this.astr = '';
    }

    _createClass(Decimal, [{
        key: 'isDecimal',
        value: function isDecimal() {
            var count = 0;
            for (var i = 0; i < this.str.length; i++) {
                if (this.str[i] === '.') {
                    count++;
                }
            }
            if (count === 1) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'parseDecimal',
        value: function parseDecimal() {
            var i = 0;
            for (i = 0; i < this.str.length; i++) {
                if (this.str[i] === '.') break;
                this.bstr += this.str[i];
            }
            i++;
            for (; i < this.str.length; i++) {
                this.astr += this.str[i];
            }
        }
    }, {
        key: 'convert',
        value: function convert() {
            this.parseDecimal();
            var result = '';
            var n2wObj = new _n2w.N2W();
            result += n2wObj.numTostring(this.bstr);
            result += ' point ';
            for (var i = 0; i < this.astr.length; i++) {
                if (this.astr[i] === '0') {
                    result += 'zero ';
                } else {
                    if (this.astr[i] >= '1' && this.astr[i] <= '9') {
                        result += n2wObj.numTostring(this.astr[i]) + ' ';
                    } else {
                        result += this.astr[i];
                    }
                }
            }
            this.arr[this.repIndex] = result;
        }
    }]);

    return Decimal;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Fraction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _n2w = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fraction = exports.Fraction = function () {
    function Fraction(arr, repIndex) {
        _classCallCheck(this, Fraction);

        this.arr = arr;
        this.repIndex = repIndex;
        this.str = arr[repIndex];
        this.bstr = '';
        this.astr = '';
    }

    _createClass(Fraction, [{
        key: 'isFraction',
        value: function isFraction() {
            var count = 0;
            for (var i = 0; i < this.str.length; i++) {
                if (this.str[i] === '/') {
                    count++;
                }
            }
            if (count === 1) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'parseFraction',
        value: function parseFraction() {
            var i = 0;
            for (i = 0; i < this.str.length; i++) {
                if (this.str[i] === '/') break;
                this.bstr += this.str[i];
            }
            i++;
            for (; i < this.str.length; i++) {
                this.astr += this.str[i];
            }
        }
    }, {
        key: 'convert',
        value: function convert() {
            this.parseFraction();
            var result = '';
            var n2wObj = new _n2w.N2W();
            result += n2wObj.numTostring(this.bstr);
            result += ' by ';
            result += n2wObj.numTostring(this.astr);
            this.arr[this.repIndex] = result;
        }
    }]);

    return Fraction;
}();

/***/ })
/******/ ]);