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

/**
 * 
 * 
 * @export
 * @class N2W
 */
var N2W = exports.N2W = function () {

	/**
  * Creates an instance of N2W.
  * @memberof N2W
  */
	function N2W() {
		_classCallCheck(this, N2W);

		this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		this.place = ['ones', 'tens', 'hundred'];
		this.hplace = ['thousand', 'million', 'billion'];
		this.oTens = ['ten', 'eleven', 'tweleve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'ninteen'];
		this.pTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	}

	/**
  * 
  * @param {any} num : number (ex: 12, 12.01, 2000 etc.)
  * @returns result: converts num (a number) to word form of num 
  * @memberof N2W
  */


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

		/**
   * 
   * 
   * @param {any} num : gets number of max length:3 ,it gets num from numTostring in chunk of 3
   * @param {any} hcount : position of this chunk thousand , million ,billion
   * @returns 
   * @memberof N2W
   */

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


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Converter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.printNum = printNum;
exports.clicked = clicked;

var _decider = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 
 * 
 * @export
 * @class Converter
 */
var Converter = exports.Converter = function () {

	/**
  * Creates an instance of Converter.
  * @param str 
  * @memberof Converter
  */
	function Converter(str) {
		_classCallCheck(this, Converter);

		this.str = str;
		this.arr = [];
	}

	/**
  * 
  * converts numbers present in str to equivalent str having word in place of numbers
  * arr have string of str split by space
  * @memberof Converter
  */


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

/**
 * takes 
 * 
 * @export
 */


function printNum() {
	var text = document.getElementById('number').value;
	var numstr = new Converter(text);
	numstr.convert();
	setTimeout(function () {
		document.getElementById('toString').innerHTML = numstr.str;
	}, 0);
}

function clicked() {
	document.getElementById('convert1').addEventListener('click', printNum);
}

window.onload = clicked;

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

/**
 * 
 * 
 * @export
 * @param {any} arr 
 * @param {any} index
 * decides the category of string @ arr[index] 
 */
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
		//no number at this index or ambiguous
	}
}

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

/**
 * 
 * 
 * @export
 * @class PhoneNum
 */
var PhoneNum = exports.PhoneNum = function () {
	/**
  * Creates an instance of PhoneNum.
  * @param {any} arr 
  * @param {any} index 
  * @memberof PhoneNum
  */
	function PhoneNum(arr, index) {
		_classCallCheck(this, PhoneNum);

		this.arr = arr;
		this.index = index;
		this.num = arr[index];
	}

	/**
  * 
  * 
  * @returns {true|false} if pattern matches then returns true else returns false 
  * @memberof PhoneNum
  */


	_createClass(PhoneNum, [{
		key: 'isPhone',
		value: function isPhone() {
			var pattern = /((\+|0)([0-9]{1,7})(-)([0-9]{3,10}))|(\b(0)([0-9]{10})\b)/g;
			return pattern.test(this.num) ? true : false;
		}

		/**
   * 
   * @memberof PhoneNum
   * converts phonenum at arr[index] to equivalent name 
   */

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
			this.arr[this.index] = result + ' ';
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
	if (pmail === null) {
		return false;
	} else {
		return true;
	}
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

/**
 * 
 * 
 * @export
 * @class NuminStr
 */
var NuminStr = exports.NuminStr = function () {

	/**
  * Creates an instance of NuminStr.
  * @param {any} arr 
  * @param {any} index 
  * @memberof NuminStr
  */
	function NuminStr(arr, index) {
		_classCallCheck(this, NuminStr);

		this.arr = arr;
		this.index = index;
	}

	/**
  * 
  * 
  * @returns (true|false) if string contains any number then true else false
  * @memberof NuminStr
  */


	_createClass(NuminStr, [{
		key: 'isNuminStr',
		value: function isNuminStr() {
			var numberPattern = /\d+/g;
			var numArr = this.arr[this.index].match(numberPattern);
			if (numArr === null) {
				return false;
			}
			return true;
		}

		/**
   * 
   * converts numerical string present at arr[index] to its equivalent word 
   * @memberof NuminStr
   */

	}, {
		key: 'convert',
		value: function convert() {
			var numberPattern = /\d+/g;
			var numArr = this.arr[this.index].match(numberPattern);
			var numStrarr = [];
			var i = void 0;
			var n2wObj = new _n2w.N2W();
			for (i = 0; i < numArr.length; i++) {
				numStrarr[i] = n2wObj.numTostring(numArr[i]);
			}

			for (i = 0; i < numArr.length; i++) {
				this.arr[this.index] = this.arr[this.index].replace(numArr[i], numStrarr[i]);
			}
			this.arr[this.index] += ' ';
			(0, _ordinal.convertOrdinal)(this.arr, this.index);
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

/**
 * replaces string @ arr[index] to valid ordinal string
 * 
 * @export
 * @param {any} arr 
 * @param {any} index 
 */
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
	function Decimal(arr, index) {
		_classCallCheck(this, Decimal);

		this.arr = arr;
		this.index = index;
		this.str = arr[index];
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
			this.arr[this.index] = result + ' ';
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
	function Fraction(arr, index) {
		_classCallCheck(this, Fraction);

		this.arr = arr;
		this.index = index;
		this.str = arr[index];
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
			this.arr[this.index] = result + ' ';
		}
	}]);

	return Fraction;
}();

/***/ })
/******/ ]);