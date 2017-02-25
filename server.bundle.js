/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(100);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(102);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(101);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(58);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(58);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._curry = exports.bsSizes = exports.bsStyles = exports.bsClass = undefined;

var _entries = __webpack_require__(56);

var _entries2 = _interopRequireDefault(_entries);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

exports.prefix = prefix;
exports.getClassSet = getClassSet;
exports.splitBsProps = splitBsProps;
exports.splitBsPropsAndOmit = splitBsPropsAndOmit;
exports.addStyle = addStyle;

var _invariant = __webpack_require__(196);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _StyleConfig = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];
    if (typeof last === 'function') {
      return fn.apply(undefined, args);
    }
    return function (Component) {
      return fn.apply(undefined, args.concat([Component]));
    };
  };
} // TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.

function prefix(props, variant) {
  !(props.bsClass != null) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2['default'])(false, 'A `bsClass` prop is required for this component') : (0, _invariant2['default'])(false) : void 0;
  return props.bsClass + (variant ? '-' + variant : '');
}

var bsClass = exports.bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});

  propTypes.bsClass = _react.PropTypes.string;
  defaultProps.bsClass = defaultClass;

  return Component;
});

var bsStyles = exports.bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};

  styles.forEach(function (style) {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });

  var propType = _react.PropTypes.oneOf(existing);

  // expose the values on the propType function for documentation
  Component.STYLES = propType._values = existing;

  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});

var bsSizes = exports.bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};

  sizes.forEach(function (size) {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });

  var values = [];
  existing.forEach(function (size) {
    var mappedSize = _StyleConfig.SIZE_MAP[size];
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = _react.PropTypes.oneOf(values);
  propType._values = values;

  // expose the values on the propType function for documentation
  Component.SIZES = existing;

  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }
    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});

function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = _StyleConfig.SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}

function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var elementProps = {};
  (0, _entries2['default'])(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

function splitBsPropsAndOmit(props, omittedPropNames) {
  var isOmittedProp = {};
  omittedPropNames.forEach(function (propName) {
    isOmittedProp[propName] = true;
  });

  var elementProps = {};
  (0, _entries2['default'])(props).forEach(function (_ref2) {
    var propName = _ref2[0],
        propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */
function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant, Component);
}

var _curry = exports._curry = curry;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(44)('wks')
  , uid        = __webpack_require__(28)
  , Symbol     = __webpack_require__(11).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(11)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(36)
  , hide      = __webpack_require__(18)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(61)
  , defined = __webpack_require__(37);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports['default'] = createChainedFunction;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(60)
  , toPrimitive    = __webpack_require__(47)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(15)
  , createDesc = __webpack_require__(25);
module.exports = __webpack_require__(17) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(65)
  , enumBugKeys = __webpack_require__(38);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */
function map(children, func, context) {
  var index = 0;

  return _react2['default'].Children.map(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}

/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */
// TODO: This module should be ElementChildren, and should use named exports.

function forEach(children, func, context) {
  var index = 0;

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function count(children) {
  var result = 0;

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    ++result;
  });

  return result;
}

/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */
function filter(children, func, context) {
  var index = 0;
  var result = [];

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });

  return result;
}

function find(children, func, context) {
  var index = 0;
  var result = undefined;

  _react2['default'].Children.forEach(children, function (child) {
    if (result) {
      return;
    }
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });

  return result;
}

function every(children, func, context) {
  var index = 0;
  var result = true;

  _react2['default'].Children.forEach(children, function (child) {
    if (!result) {
      return;
    }
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });

  return result;
}

function some(children, func, context) {
  var index = 0;
  var result = false;

  _react2['default'].Children.forEach(children, function (child) {
    if (result) {
      return;
    }
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });

  return result;
}

function toArray(children) {
  var result = [];

  _react2['default'].Children.forEach(children, function (child) {
    if (!_react2['default'].isValidElement(child)) {
      return;
    }

    result.push(child);
  });

  return result;
}

exports['default'] = {
  map: map,
  forEach: forEach,
  count: count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
};
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(51);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elementType = __webpack_require__(27);

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  href: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func,
  disabled: _react2['default'].PropTypes.bool,
  role: _react2['default'].PropTypes.string,
  tabIndex: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  /**
   * this is sort of silly but needed for Button
   */
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */

var SafeAnchor = function (_React$Component) {
  (0, _inherits3['default'])(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    (0, _classCallCheck3['default'])(this, SafeAnchor);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  SafeAnchor.prototype.handleClick = function handleClick(event) {
    var _props = this.props,
        disabled = _props.disabled,
        href = _props.href,
        onClick = _props.onClick;


    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  SafeAnchor.prototype.render = function render() {
    var _props2 = this.props,
        Component = _props2.componentClass,
        disabled = _props2.disabled,
        props = (0, _objectWithoutProperties3['default'])(_props2, ['componentClass', 'disabled']);


    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = (0, _extends3['default'])({ pointerEvents: 'none' }, props.style);
    }

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, props, {
      onClick: this.handleClick
    }));
  };

  return SafeAnchor;
}(_react2['default'].Component);

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

exports['default'] = SafeAnchor;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var Size = exports.Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};

var SIZE_MAP = exports.SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

var DEVICE_SIZES = exports.DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

var State = exports.State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
};

var Style = exports.Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(51);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(113);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(16)
  , dPs         = __webpack_require__(129)
  , enumBugKeys = __webpack_require__(38)
  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(59)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(119).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f
  , has = __webpack_require__(14)
  , TAG = __webpack_require__(9)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(44)('keys')
  , uid    = __webpack_require__(28);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(37);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(22);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(11)
  , core           = __webpack_require__(8)
  , LIBRARY        = __webpack_require__(39)
  , wksExt         = __webpack_require__(49)
  , defineProperty = __webpack_require__(15).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("keycode");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(33);

var schema = new mongoose.Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    avatar: String
  },
  twitter: {
    id: String,
    displayName: String,
    username: String,
    avatar: String
  },
  loginMethod: String,
  createdPolls: [String],
  savedPolls: [String]
});

module.exports = mongoose.model('User', schema);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
    return;
  }
  res.redirect('/login');
};

var apiIsLoggedIn = function apiIsLoggedIn(req, res, next) {
  if (req.user) {
    next();
    return;
  }
  res.json({ error: 'not authenticated' });
};

module.exports = {
  isLoggedIn: isLoggedIn,
  apiIsLoggedIn: apiIsLoggedIn
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(104);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(103);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22)
  , document = __webpack_require__(11).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(21)(function(){
  return Object.defineProperty(__webpack_require__(59)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(39)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(67)
  , hide           = __webpack_require__(18)
  , has            = __webpack_require__(14)
  , Iterators      = __webpack_require__(23)
  , $iterCreate    = __webpack_require__(123)
  , setToStringTag = __webpack_require__(42)
  , getPrototypeOf = __webpack_require__(131)
  , ITERATOR       = __webpack_require__(9)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(24)
  , createDesc     = __webpack_require__(25)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(47)
  , has            = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(60)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(65)
  , hiddenKeys = __webpack_require__(38).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(14)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(115)(false)
  , IE_PROTO     = __webpack_require__(43)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(19)
  , toIObject = __webpack_require__(12)
  , isEnum    = __webpack_require__(24).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(45)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(133)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(62)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === "object") {
    factory(exports);
  } else {
    factory(root.babelHelpers = {});
  }
})(this, function (global) {
  var babelHelpers = global;

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  };

  babelHelpers._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
})

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */


var camelize = __webpack_require__(154);
var msPattern = /^-ms-/;

module.exports = function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(73);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(159);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _values = __webpack_require__(57);

var _values2 = _interopRequireDefault(_values);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elementType = __webpack_require__(27);

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = __webpack_require__(7);

var _StyleConfig = __webpack_require__(30);

var _SafeAnchor = __webpack_require__(29);

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  active: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  block: _react2['default'].PropTypes.bool,
  onClick: _react2['default'].PropTypes.func,
  componentClass: _elementType2['default'],
  href: _react2['default'].PropTypes.string,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: _react2['default'].PropTypes.oneOf(['button', 'reset', 'submit'])
};

var defaultProps = {
  active: false,
  block: false,
  disabled: false
};

var Button = function (_React$Component) {
  (0, _inherits3['default'])(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3['default'])(this, Button);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Button.prototype.renderAnchor = function renderAnchor(elementProps, className) {
    return _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends4['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, elementProps.disabled && 'disabled')
    }));
  };

  Button.prototype.renderButton = function renderButton(_ref, className) {
    var componentClass = _ref.componentClass,
        elementProps = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass']);

    var Component = componentClass || 'button';

    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, elementProps, {
      type: elementProps.type || 'button',
      className: className
    }));
  };

  Button.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
        active = _props.active,
        block = _props.block,
        className = _props.className,
        props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'block', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {
      active: active
    }, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'block')] = block, _extends2));
    var fullClassName = (0, _classnames2['default'])(className, classes);

    if (elementProps.href) {
      return this.renderAnchor(elementProps, fullClassName);
    }

    return this.renderButton(elementProps, fullClassName);
  };

  return Button;
}(_react2['default'].Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('btn', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL, _StyleConfig.Size.XSMALL], (0, _bootstrapUtils.bsStyles)([].concat((0, _values2['default'])(_StyleConfig.State), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY, _StyleConfig.Style.LINK]), _StyleConfig.Style.DEFAULT, Button)));
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(31);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on() {};
if (_inDOM2.default) {
  on = function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

exports.default = on;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("uncontrollable");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(86),
    getPolls = _require.getPolls,
    createPoll = _require.createPoll,
    addOptionToPoll = _require.addOptionToPoll,
    addFavoritePoll = _require.addFavoritePoll,
    removeOptionFromPoll = _require.removeOptionFromPoll,
    deletePoll = _require.deletePoll,
    incrementOption = _require.incrementOption,
    removeFavoritePoll = _require.removeFavoritePoll,
    getFavoritePolls = _require.getFavoritePolls,
    getCreatedPolls = _require.getCreatedPolls;

var _require2 = __webpack_require__(55),
    isLoggedIn = _require2.isLoggedIn;

module.exports = function (app, passport) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/api/amiloggedin', function (req, res) {
    if (req.user) {
      res.json(req.user);
      return;
    }
    res.json({ error: 'Not logged in' });
  });

  app.get('/api/polls', function (req, res) {
    var offset = Number(req.query.offset) || 0;
    getPolls(offset, function (err, polls) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      if (polls.length < 6) {
        res.json({ polls: polls, nextPageStart: -1 });
        return;
      }
      res.json({ polls: polls, nextPageStart: offset + polls.length });
    });
  });

  app.get('/api/polls/favorites', isLoggedIn, function (req, res) {
    var offset = Math.abs(Number(req.query.offset) || 0);
    getFavoritePolls(req.user._id, offset, function (err, polls, nextPageStart) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json({ polls: polls, nextPageStart: nextPageStart });
    });
  });

  app.get('/api/polls/created', isLoggedIn, function (req, res) {
    var offset = Math.abs(Number(req.query.offset) || 0);
    getCreatedPolls(req.user._id, offset, function (err, polls, nextPageStart) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json({ polls: polls, nextPageStart: nextPageStart });
    });
  });

  app.post('/api/polls/new', function (req, res) {
    var body = req.body;
    if ('string' == typeof req.body) body = JSON.parse(req.body);
    var _body = body,
        pollName = _body.pollName,
        options = _body.options,
        canAddNewOptions = _body.canAddNewOptions;

    if (!options || !pollName || !canAddNewOptions && canAddNewOptions !== false) {
      res.json({ error: 'missing parameter' });
      return;
    }
    if ('string' == typeof option) options = JSON.parse(options);
    if (!req.user) {
      res.json({ error: 'you must be logged in to do that' });
      return;
    }
    console.log('user:', req.user);
    console.log('new poll:', req.body);
    createPoll(req.user._id, pollName, canAddNewOptions, options, function (err, poll) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/delete', isLoggedIn, function (req, res) {
    var pollId = req.params.pollId;
    var userId = req.user._id;
    deletePoll(userId, pollId, function (err, msg) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json({ success: msg });
    });
  });

  app.post('/api/polls/:pollId/:optionId', function (req, res) {
    var pollId = req.params.pollId;
    var optionId = req.params.optionId;
    if (req.isAuthenticated()) {
      incrementOption(pollId, optionId, req.user._id, function (err, poll) {
        if (err) {
          res.json({ error: err.toString() });
          return;
        }
        res.json(poll);
      });
      return;
    }
    var ip = req.ip;
    if (req.ips & req.ips.length > 0) {
      ip = req.ips[0];
    }
    incrementOption(pollId, optionId, ip, function (err, poll) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/new', function (req, res) {
    var pollId = req.params.pollId;
    var body = req.body;
    if ('string' === typeof body) body = JSON.parse(body);
    var newOption = body.option || null;
    if (newOption === null) {
      res.json({ error: 'no new option specified' });
      return;
    }
    var optionColor = body.optionColor || null;
    addOptionToPoll(pollId, newOption, optionColor, function (err, poll) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/:optionId/delete', isLoggedIn, function (req, res) {
    var pollId = req.params.pollId;
    var optionId = req.params.optionId;
    if (req.user.createdPolls.indexOf(pollId) < 0) {
      res.json({ error: 'can\'t delete an option from a poll you don\'t own' });
      return;
    }
    removeOptionFromPoll(pollId, optionId, function (err, poll) {
      if (err) {
        res.json({ error: err });
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/toggleFavorite', isLoggedIn, function (req, res) {
    var pollId = req.params.pollId;
    if (!req.user) {
      res.json({ error: 'something went wrong' });
      return;
    }
    if (req.user.savedPolls.indexOf(pollId) < 0) {
      addFavoritePoll(req.user._id, pollId, function (err, poll) {
        if (err) {
          res.json({ error: err.toString() });
          return;
        }
        res.json(poll);
      });
      return;
    }
    removeFavoritePoll(req.user._id, pollId, function (err, poll) {
      if (err) {
        res.json({ error: err.toString() });
        return;
      }
      res.json(poll);
    });
  });
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(55),
    isLoggedIn = _require.isLoggedIn;

var React = __webpack_require__(0);

var _require2 = __webpack_require__(199),
    renderToString = _require2.renderToString;

var _require3 = __webpack_require__(53),
    match = _require3.match,
    RouterContext = _require3.RouterContext;

var routes = __webpack_require__(97);

var renderPage = function renderPage(html) {
  '<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="UTF-8"> \n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> \n      <link rel="stylesheet" href="./index.css">\n      <title>mb-polling</title>\n\n    </head>\n    <body>\n      <div id=root>' + html + '</div>\n      <script src="./bundle.js"></script>\n    </body>\n  </html>';
};

module.exports = function (app, passport) {

  app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('*', function (req, res) {
    match({ routes: routes, location: req.url }, function (err, redirect, props) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (redirect) {
        res.redirect(redirect.pathname + redirect.search);
        return;
      }
      var html = renderToString(React.createElement(RouterContext, props));
      res.send(renderPage(html));
    });
  });
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GithubStrategy = __webpack_require__(197).Strategy;
var TwitterStrategy = __webpack_require__(198).Strategy;
var config = !!process.env.GITHUB_CLIENT_ID ? null : __webpack_require__(98);

var _ref = process.env.GITHUB_CLIENT_ID ? process.env : config,
    GITHUB_CLIENT_ID = _ref.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET = _ref.GITHUB_CLIENT_SECRET;

var _ref2 = process.env.TWITTER_CONSUMER_ID ? process.env : config,
    TWITTER_CONSUMER_ID = _ref2.TWITTER_CONSUMER_ID,
    TWITTER_CONSUMER_SECRET = _ref2.TWITTER_CONSUMER_SECRET,
    CALLBACK_URL = _ref2.CALLBACK_URL;

var Users = __webpack_require__(54);

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, cb) {
    Users.findById(id, function (err, user) {
      return cb(err, user);
    });
  });

  passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET
  }, function (accessToken, refreshToken, profile, cb) {
    Users.findOne({ 'github.id': profile.id }, function (err, user) {
      if (err) {
        cb(err);
        return;
      }
      if (user) {
        cb(null, user);
        return;
      }
      Users.create({
        github: {
          id: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          avatar: profile.photos ? profile.photos[0].value : null
        },
        loginMethod: 'github',
        createdPolls: [],
        savedPolls: []
      }, function (err, doc) {
        if (err) {
          cb(err);
          return;
        }
        cb(null, doc);
        return;
      });
    });
  }));

  passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_ID,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: CALLBACK_URL
  }, function (acessToken, refreshToken, profile, cb) {
    Users.findOne({ 'twitter.id': profile.id }, function (err, user) {
      if (err) {
        cb(err);
        return;
      }
      if (user) {
        cb(null, user);
        return;
      }
      Users.create({
        twitter: {
          id: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          avatar: profile.photos ? profile.photos[0].value : null
        },
        loginMethod: 'twitter',
        createdPolls: [],
        savedPolls: []
      }, function (err, userdoc) {
        if (err) {
          cb(err);
          return;
        }
        cb(null, userdoc);
        return;
      });
    });
  }));
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// mongoose schemas
var Users = __webpack_require__(54);
var Polls = __webpack_require__(87);

// callback signature (error, [list of polls]) => {}
var getPolls = function getPolls() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var cb = arguments[1];

  Polls.find({}, { __v: false }).skip(offset).limit(6).exec(function (err, docs) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, docs || []);
  });
};

var deletePoll = function deletePoll(requesterId, pollId, cb) {
  Users.findById(requesterId, function (err, user) {
    if (err) {
      cb(err);
      return;
    }
    if (!user) {
      cb('User not found');
      return;
    }
    if (user.createdPolls.indexOf(pollId) < 0) {
      cb('You don\'t own that poll');
      return;
    }
    var polls = user.createdPolls.filter(function (el) {
      return el !== pollId;
    });
    user.createdPolls = polls;
    user.save(function (err, doc) {
      if (err) {
        cb(err);
        return;
      }
      Polls.findByIdAndRemove(pollId).exec(function (err, poll) {
        if (err) {
          cb(err);
          return;
        }
        cb(null, 'Deleted successfully');
      });
    });
  });
};

// this could be done a better way, but i got it working once and don't feel like refactoring
// spaghetti!
var incrementOption = function incrementOption(pollId, optionId, userIdOrIp, cb) {
  Polls.findById(pollId, function (err, poll) {
    if (err) {
      cb(err);
      return;
    }
    if (poll.voters.indexOf(userIdOrIp) >= 0) {
      cb('You already voted on this poll');
      return;
    }
    Polls.update({ _id: pollId, 'options._id': optionId }, { $inc: { 'options.$.count': 1 } }, function (err) {
      if (err) {
        cb(err);
        return;
      }
      Polls.findById(pollId, function (err, poll) {
        if (err) {
          cb(err);
          return;
        }
        poll.voters.push(userIdOrIp);
        poll.save(function (err, doc) {
          if (err) {
            cb(err);
            return;
          }
          cb(null, doc);
        });
      });
    });
  });
};

// callback signature (error, newlyCreatedPoll) => {}
var createPoll = function createPoll(authorId, pollName, canAddNewOptions, obj, cb) {
  if (!authorId) {
    cb('You must be logged in to create a poll!');
    return;
  }
  var options = [];
  var colors = [];
  for (var prop in obj) {
    var op = obj[prop];
    if (op) {
      options.push(op.text);
      colors.push(op.color);
    }
  }

  var arr = options.map(function (option, index) {
    return { option: option, color: colors[index], count: 0 };
  });
  Polls.create({
    authorId: authorId,
    options: arr,
    name: pollName,
    canAddNewOptions: canAddNewOptions
  }, function (err, doc) {
    if (err) {
      cb(err);
      return;
    }
    Users.findById(authorId, '', {}, function (err, user) {
      if (err) {
        console.log(err);
        return;
      }
      if (user === null) {
        cb('User not found');
        return;
      }
      user.createdPolls.push(doc._id);
      user.save(function (err) {
        if (err) {
          console.log(err);
          cb(err);
        }
        cb(null, doc);
      });
    });
  });
};

// callback signature (error, updatedPollDoc) => {}
var addOptionToPoll = function addOptionToPoll(pollId, option, color, cb) {
  Polls.findById(pollId, '', {}, function (err, doc) {
    if (err) {
      cb(err);
      return;
    }
    if (doc === null) {
      cb('No docs found');
      return;
    }
    if (!doc.canAddNewOptions) {
      cb(null, doc);
      return;
    }
    var newOption = { option: option, count: 0 };
    if (color) newOption.color = color;
    doc.options.push(newOption);
    doc.save(function (err) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};
var removeOptionFromPoll = function removeOptionFromPoll(pollId, optionId, cb) {
  Polls.findById(pollId, function (err, poll) {
    if (poll.options.length < 3) {
      cb('cannot have less than 2 options');
      return;
    }
    poll.options.pull(optionId);
    poll.save(function (err, doc) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

// callback signature (error, updatedUserDoc) => {}
var addFavoritePoll = function addFavoritePoll(userId, pollId, cb) {
  Users.findById(userId, '', {}, function (err, doc) {
    if (err) {
      cb(err);
      return;
    }
    if (doc === null) {
      cb('User not found');
      return;
    }
    doc.savedPolls.push(pollId);
    doc.save(function (err, doc) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

var removeFavoritePoll = function removeFavoritePoll(userId, pollId, cb) {
  if (!userId || !pollId) {
    cb('missing parameter');
    return;
  }
  Users.findById(userId, function (err, user) {
    if (err) {
      cb(err);
      return;
    }
    if (user === null) {
      cb('user not found');
      return;
    }
    var polls = user.savedPolls.filter(function (el) {
      return !(el === pollId);
    });
    user.savedPolls = polls;
    user.save(function (err, doc) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

var getFavoritePolls = function getFavoritePolls(userId) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var cb = arguments[2];

  Users.findById(userId, function (err, user) {
    if (err) {
      cb(err);
      return;
    }
    if (user.savedPolls.length - offset < 0) {
      cb(null, [], -1);
      return;
    }
    var nextPage = offset + 6;
    if (user.savedPolls.length < nextPage) {
      nextPage = -1;
    }
    cb(null, user.savedPolls.slice(offset, offset + 6), nextPage);
  });
};

var getCreatedPolls = function getCreatedPolls(userId) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var cb = arguments[2];

  Users.findById(userId, function (err, user) {
    if (err) {
      cb(err);
      return;
    }
    if (user.createdPolls.length - offset < 0) {
      cb(null, [], -1);
      return;
    }
    var nextPage = offset + 6;
    if (user.createdPolls.length < nextPage) {
      nextPage = -1;
    }
    cb(null, user.createdPolls.slice(offset, offset + 6), nextPage);
  });
};

// used only for testing other things that require a user. actual user creation is
// done in the passport configuration
// callback signature (error, newlyCreatedUser) => {}
var createUser = function createUser(githubInfo, cb) {
  Users.create({
    github: {
      id: '12345',
      displayName: 'testUser' + githubInfo,
      username: 'testUser' + githubInfo + 'Username'
    },
    createdPolls: [],
    savedPolls: []
  }, function (err, doc) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, doc);
  });
};

module.exports = {
  getPolls: getPolls,
  createPoll: createPoll,
  addOptionToPoll: addOptionToPoll,
  createUser: createUser,
  addFavoritePoll: addFavoritePoll,
  removeOptionFromPoll: removeOptionFromPoll,
  deletePoll: deletePoll,
  incrementOption: incrementOption,
  removeFavoritePoll: removeFavoritePoll,
  getFavoritePolls: getFavoritePolls,
  getCreatedPolls: getCreatedPolls
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(33);
var shortid = __webpack_require__(201);

var defaultColor = function defaultColor() {
  var n = Math.floor(Math.random() * 256);
  var grey = '' + n + ',' + n + ',' + n;
  return 'rgb(' + grey + ')';
};

var schema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  created: { type: Date, default: Date.now },
  name: String,
  authorId: String,
  authorName: String,
  options: [{
    option: String,
    color: { type: String, default: defaultColor },
    count: { type: Number, default: 0 }
  }],
  voters: [String],
  canAddNewOptions: { type: Boolean, default: true }
});

module.exports = mongoose.model('Poll', schema);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(53);

var _reactRouterBootstrap = __webpack_require__(200);

var _Navbar = __webpack_require__(179);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = __webpack_require__(176);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(178);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavDropdown = __webpack_require__(177);

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _MenuItem = __webpack_require__(175);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return {
      loggedIn: false,
      user: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.determineLogin();
  },
  getName: function getName() {
    var user = this.state.user;
    if (!user) return 'User';
    var service = user.loginMethod;
    var names = user[service];
    if (names.username) return name.username;
    return names.displayName || 'User';
  },
  getJumbotron: function getJumbotron(element) {
    if (!element) return null;
    var title = '';
    switch (element.type.displayName) {
      case 'CreatePoll':
        title = 'New poll';
        break;
      case 'Login':
        title = 'Sign in';
        break;
      case 'PollsContainer':
        title = 'Polls';
        break;
      case 'PollInfo':
        return null;
      case 'Home':
        title = 'mb-polling.herokuapp.com';
        break;
      default:
        title = 'Not found';
    }
    return _react2.default.createElement(
      'div',
      { className: 'text-center page-title jumbotron' },
      _react2.default.createElement(
        'h1',
        null,
        title
      )
    );
  },
  logout: function logout() {
    this.setState({
      user: null,
      loggedIn: false
    });
  },
  determineLogin: function determineLogin() {
    var app = this;
    fetch('/api/amiloggedin', {
      credentials: 'same-origin'
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.error) {
        app.setState({
          loggedIn: false,
          user: null
        });
        return;
      }
      app.setState({
        loggedIn: true,
        user: json
      }, app.forceUpdate());
      return;
    }).catch(function (err) {
      return console.log(err);
    });
  },


  /********************************/
  /*              TODO            */
  /********************************/
  /*    DONT RENDER NAVBAR ITEM   */
  /*  IF THAT COMPONENT IS ACTIVE */
  /********************************/

  render: function render() {
    return _react2.default.createElement(
      'div',
      { id: 'app' },
      _react2.default.createElement(
        _Navbar2.default,
        { fixedTop: true, collapseOnSelect: true },
        _react2.default.createElement(
          _Navbar2.default.Header,
          null,
          _react2.default.createElement(
            _Navbar2.default.Brand,
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              'mb-polling'
            )
          ),
          _react2.default.createElement(_Navbar2.default.Toggle, null)
        ),
        _react2.default.createElement(
          _Navbar2.default.Collapse,
          null,
          _react2.default.createElement(
            _Nav2.default,
            { pullRight: true },
            this.state.loggedIn && this.state.user ? _react2.default.createElement(
              _NavDropdown2.default,
              { id: 'user-dropdown', eventKey: 3, title: this.getName() },
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/polls/created' },
                _react2.default.createElement(
                  _MenuItem2.default,
                  { eventKey: 5 },
                  'My created polls'
                )
              ),
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/polls/favorites' },
                _react2.default.createElement(
                  _MenuItem2.default,
                  { eventKey: 6 },
                  'My favorite polls'
                )
              ),
              _react2.default.createElement(_MenuItem2.default, { divider: true }),
              _react2.default.createElement(
                _MenuItem2.default,
                { onClick: this.logout, eventKey: 4, href: '/logout' },
                'Logout'
              )
            ) : _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/login' },
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 1 },
                'Login'
              )
            )
          ),
          _react2.default.createElement(
            _Nav2.default,
            null,
            this.state.loggedIn && _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/polls/new' },
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 2 },
                'New poll'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/polls/all' },
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 7 },
                'All polls'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/gibberish' },
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 8 },
                '404 test'
              )
            )
          )
        )
      ),
      this.getJumbotron(this.props.children),
      this.props.children
    );
  }
});

exports.default = App;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Alert = __webpack_require__(168);

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertPopup = function AlertPopup(_ref) {
  var type = _ref.type,
      message = _ref.message,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    _Alert2.default,
    { bsStyle: type, onDismiss: onClick },
    _react2.default.createElement(
      'h4',
      null,
      message
    )
  );
};

AlertPopup.propTypes = {
  type: _react.PropTypes.oneOf(['danger', 'success', 'warning', 'info']),
  message: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};

exports.default = AlertPopup;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getReadableColor = function getReadableColor(color) {
  var r = parseInt(color[1] + color[2], 16);
  var g = parseInt(color[3] + color[4], 16);
  var b = parseInt(color[5] + color[6], 16);
  var sum = r + g + b;
  return sum > 382 ? '#000' : '#FFF';
};

var AddOption = function AddOption(_ref) {
  var _onClick = _ref.onClick,
      _onChange = _ref.onChange,
      index = _ref.index,
      color = _ref.color;

  return _react2.default.createElement(
    'div',
    { id: 'option-' + index, className: 'col-lg-3 col-md-4 col-sm-6 col-xs-12' },
    _react2.default.createElement(
      'div',
      { className: 'panel panel-default', style: { borderColor: color } },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading text-center', style: { backgroundColor: color, borderColor: color, color: getReadableColor(color) } },
        _react2.default.createElement(
          'h3',
          null,
          'Option'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'option-name' + index },
            'Option name: '
          ),
          _react2.default.createElement('input', {
            id: 'option-name-' + index,
            className: 'form-control',
            type: 'text',
            style: { width: '100%' },
            placeholder: 'Option name',
            onChange: function onChange(el) {
              return _onChange(index, 'text', el.target.value);
            }
          })
        ),
        _react2.default.createElement('hr', { style: { borderColor: color } }),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'option-color' + index },
            'Option color (for chart): '
          ),
          _react2.default.createElement('input', {
            id: 'option-color-' + index,
            className: 'form-control color-input',
            style: { width: '100%' },
            type: 'color',
            value: color,
            onChange: function onChange(el) {
              return _onChange(index, 'color', el.target.value);
            }
          })
        ),
        _react2.default.createElement('hr', { style: { borderColor: color } }),
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return _onClick(index);
            },
            className: 'btn btn-danger btn-block'
          },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove' })
        )
      )
    )
  );
};
AddOption.propTypes = {
  index: _react.PropTypes.number,
  onClick: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  color: _react.PropTypes.string
};

exports.default = AddOption;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Create Poll page - /polls/new

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _throttle = __webpack_require__(166);

var _throttle2 = _interopRequireDefault(_throttle);

var _addOption = __webpack_require__(90);

var _addOption2 = _interopRequireDefault(_addOption);

var _alert = __webpack_require__(89);

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreatePoll = _react2.default.createClass({
  displayName: 'CreatePoll',

  contextTypes: {
    router: _react.PropTypes.object
  },

  defaultColor: function defaultColor() {
    var color = '#';
    while (color.length < 7) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
  },
  getInitialState: function getInitialState() {
    this.handleChange = (0, _throttle2.default)(this.handleChange, 500);
    this.handleNameChange = (0, _throttle2.default)(this.handleNameChange, 500);

    return {
      numOptions: 2,
      nextIndex: 2,
      options: {
        "0": {
          text: '',
          color: this.defaultColor()
        },
        "1": {
          text: '',
          color: this.defaultColor()
        }
      },
      canAddNewOptions: true,
      pollName: '',
      alert: null
    };
  },
  handleChange: function handleChange(index, type, setting) {
    this.setState(function (previous) {
      previous.options[index][type] = setting;
      return previous;
    });
  },
  handleNameChange: function handleNameChange(name) {
    this.setState({ pollName: name });
  },
  dismissAlert: function dismissAlert() {
    this.setState({ alert: null });
  },
  handleDelete: function handleDelete(index) {
    if (this.state.numOptions < 3) {
      this.setState({
        alert: {
          type: 'warning',
          message: 'Polls must have at least 2 options!'
        }
      });
      return;
    }
    this.setState(function (previous) {
      previous.options[index] = null;
      previous.numOptions--;
      return previous;
    });
  },
  addAnotherOption: function addAnotherOption() {
    var _this = this;

    this.setState(function (previous) {
      previous.options[previous.nextIndex] = {
        color: _this.defaultColor(),
        text: ''
      };
      previous.nextIndex++;
      previous.numOptions++;
      return previous;
    });
  },
  toggleCanAdd: function toggleCanAdd() {
    this.setState({
      canAddNewOptions: !this.state.canAddNewOptions
    });
  },

  //may need to come back to this
  handleSubmit: function handleSubmit() {
    var options = this.state;

    if (options.pollName === '') {
      this.setState({
        alert: {
          type: 'warning',
          message: 'Please specify a poll name!'
        }
      });
      return;
    }
    var self = this;
    fetch('/api/polls/new', {
      method: 'POST',
      body: JSON.stringify(options),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    }).then(function (response) {
      console.log(response);
      if ('object' === (typeof response === 'undefined' ? 'undefined' : _typeof(response))) {
        return response;
      }
      return response.json();
    }).then(function (json) {
      if (!json._id) {
        self.setState({
          alert: {
            type: 'danger',
            message: json.error || 'Something went wrong. Try again later.'
          }
        });
        return;
      }
      self.context.router.push('/polls/' + json._id);
    }).catch(function (err) {
      return console.log(err);
    });
  },
  renderOptions: function renderOptions() {
    var options = [];
    for (var index = 0; index < this.state.nextIndex; index++) {
      var option = this.state.options[index];
      if (!option) options.push(null);else options.push(_react2.default.createElement(_addOption2.default, {
        key: index,
        color: option.color,
        index: index,
        onChange: this.handleChange,
        onClick: this.handleDelete
      }));
    }
    return options;
  },
  render: function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { className: 'container' },
      !!this.state.alert && _react2.default.createElement(_alert2.default, { message: this.state.alert.message, type: this.state.alert.type, onClick: this.dismissAlert }),
      _react2.default.createElement(
        'div',
        { className: 'poll-view' },
        _react2.default.createElement(
          'h3',
          { className: 'text-center', htmlFor: 'poll-name' },
          'Poll name:'
        ),
        ' ',
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: ' col-xs-12 col-md-6 col-md-offset-3' },
            _react2.default.createElement('input', { className: 'input-lg input-block-level form-control', type: 'text', onChange: function onChange(el) {
                return _this2.handleNameChange(el.target.value);
              }, placeholder: 'Poll name' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'option-field-container' },
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.renderOptions(),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-3 col-md-4 col-sm-6 col-xs-12', onClick: this.addAnotherOption },
              _react2.default.createElement(
                'div',
                { className: 'panel panel-info add-option-btn' },
                _react2.default.createElement(
                  'div',
                  { className: 'panel-heading text-center' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'Add option'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'panel-body text-center' },
                  _react2.default.createElement(
                    'div',
                    { className: 'jumbotron', style: { backgroundColor: 'rgba(255, 255, 255, 0)' } },
                    _react2.default.createElement(
                      'h1',
                      null,
                      _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'checkbox col-sm-3 col-sm-offset-2' },
              _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('input', { defaultChecked: 'checked', onClick: this.toggleCanAdd, value: this.state.canAdd ? 'on' : 'off', type: 'checkbox' }),
                'Allow voters to add custom options'
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'submit-new-poll', onClick: this.handleSubmit, className: 'col-sm-5 form-inline text-center add-option' },
              _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' }),
                ' Submit new poll'
              )
            )
          )
        )
      )
    );
  }
});

exports.default = CreatePoll;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = _react2.default.createClass({
  displayName: 'Home',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      'Home'
    );
  }
});

exports.default = Home;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = _react2.default.createClass({
  displayName: "Login",
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "row" },
      _react2.default.createElement(
        "div",
        { className: "col-xs-4 col-xs-offset-2 text-center" },
        _react2.default.createElement(
          "h1",
          null,
          _react2.default.createElement(
            "a",
            { href: "/auth/twitter" },
            "with Twitter"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "col-xs-4 text-center" },
        _react2.default.createElement(
          "h1",
          null,
          _react2.default.createElement(
            "a",
            { href: "/auth/github" },
            "with GitHub"
          )
        )
      )
    );
  }
});

exports.default = Login;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = _react2.default.createClass({
  displayName: 'NotFound',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      '404 - not found'
    );
  }
});

exports.default = NotFound;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PollInfo = _react2.default.createClass({
  displayName: 'PollInfo',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      'Poll info for poll ',
      this.props.params.id
    );
  }
});

exports.default = PollInfo;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PollsContainer = _react2.default.createClass({
  displayName: 'PollsContainer',
  render: function render() {
    return !this.props.params.filter ? _react2.default.createElement(
      'div',
      null,
      'Polls'
    ) : _react2.default.createElement(
      'div',
      null,
      this.props.params.filter,
      ' Polls'
    );
  }
});

exports.default = PollsContainer;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(53);

var _app = __webpack_require__(88);

var _app2 = _interopRequireDefault(_app);

var _createPoll = __webpack_require__(91);

var _createPoll2 = _interopRequireDefault(_createPoll);

var _login = __webpack_require__(93);

var _login2 = _interopRequireDefault(_login);

var _pollInfo = __webpack_require__(95);

var _pollInfo2 = _interopRequireDefault(_pollInfo);

var _notFound = __webpack_require__(94);

var _notFound2 = _interopRequireDefault(_notFound);

var _home = __webpack_require__(92);

var _home2 = _interopRequireDefault(_home);

var _pollsContainer = __webpack_require__(96);

var _pollsContainer2 = _interopRequireDefault(_pollsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/polls/new', component: _createPoll2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/polls/(:filter)', component: _pollsContainer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/poll/:id', component: _pollInfo2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/*', component: _notFound2.default })
);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  GITHUB_CLIENT_ID: "71b20c1836210fea0c2b",
  GITHUB_CLIENT_SECRET: "1323cd84e96e6c8815008df964f0b986612e5fdb",

  TWITTER_CONSUMER_ID: 'xcLP52NhGf8c95V1M7S3DfOra',
  TWITTER_CONSUMER_SECRET: 'YVBznE0ofFMi3XgI5CIjg5b66fSd7fGbs8PoHB5titZwhRp4mo',
  CALLBACK_URL: 'http://mb-polling.herokuapp.com/auth/twitter/callback'
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(136);
module.exports = __webpack_require__(8).Array.from;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(8).Object.assign;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
module.exports = __webpack_require__(8).Object.entries;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(8).Object.values;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
__webpack_require__(141);
__webpack_require__(145);
__webpack_require__(146);
module.exports = __webpack_require__(8).Symbol;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(147);
module.exports = __webpack_require__(49).f('iterator');

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(68)
  , toIndex   = __webpack_require__(134);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(35)
  , TAG = __webpack_require__(9)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15)
  , createDesc      = __webpack_require__(25);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19)
  , gOPS    = __webpack_require__(41)
  , pIE     = __webpack_require__(24);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).document && document.documentElement;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(23)
  , ITERATOR   = __webpack_require__(9)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(40)
  , descriptor     = __webpack_require__(25)
  , setToStringTag = __webpack_require__(42)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(9)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(19)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(28)('meta')
  , isObject = __webpack_require__(22)
  , has      = __webpack_require__(14)
  , setDesc  = __webpack_require__(15).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(21)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(19)
  , gOPS     = __webpack_require__(41)
  , pIE      = __webpack_require__(24)
  , toObject = __webpack_require__(46)
  , IObject  = __webpack_require__(61)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(15)
  , anObject = __webpack_require__(16)
  , getKeys  = __webpack_require__(19);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(64).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(14)
  , toObject    = __webpack_require__(46)
  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(22)
  , anObject = __webpack_require__(16);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(36)(Function.call, __webpack_require__(63).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45)
  , defined   = __webpack_require__(37);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(45)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(116)
  , ITERATOR  = __webpack_require__(9)('iterator')
  , Iterators = __webpack_require__(23);
module.exports = __webpack_require__(8).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(36)
  , $export        = __webpack_require__(10)
  , toObject       = __webpack_require__(46)
  , call           = __webpack_require__(122)
  , isArrayIter    = __webpack_require__(120)
  , toLength       = __webpack_require__(68)
  , createProperty = __webpack_require__(117)
  , getIterFn      = __webpack_require__(135);

$export($export.S + $export.F * !__webpack_require__(124)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(114)
  , step             = __webpack_require__(125)
  , Iterators        = __webpack_require__(23)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(62)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(128)});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(40)});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(132).set});

/***/ }),
/* 141 */
/***/ (function(module, exports) {



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(11)
  , has            = __webpack_require__(14)
  , DESCRIPTORS    = __webpack_require__(17)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(67)
  , META           = __webpack_require__(127).KEY
  , $fails         = __webpack_require__(21)
  , shared         = __webpack_require__(44)
  , setToStringTag = __webpack_require__(42)
  , uid            = __webpack_require__(28)
  , wks            = __webpack_require__(9)
  , wksExt         = __webpack_require__(49)
  , wksDefine      = __webpack_require__(48)
  , keyOf          = __webpack_require__(126)
  , enumKeys       = __webpack_require__(118)
  , isArray        = __webpack_require__(121)
  , anObject       = __webpack_require__(16)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(47)
  , createDesc     = __webpack_require__(25)
  , _create        = __webpack_require__(40)
  , gOPNExt        = __webpack_require__(130)
  , $GOPD          = __webpack_require__(63)
  , $DP            = __webpack_require__(15)
  , $keys          = __webpack_require__(19)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f  = $propertyIsEnumerable;
  __webpack_require__(41).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(39)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__(10)
  , $entries = __webpack_require__(66)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(10)
  , $values = __webpack_require__(66)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var global        = __webpack_require__(11)
  , hide          = __webpack_require__(18)
  , Iterators     = __webpack_require__(23)
  , TO_STRING_TAG = __webpack_require__(9)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var babelHelpers = __webpack_require__(70);

exports.__esModule = true;

/**
 * document.activeElement
 */
exports['default'] = activeElement;

var _ownerDocument = __webpack_require__(149);

var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);

function activeElement() {
  var doc = arguments[0] === undefined ? document : arguments[0];

  try {
    return doc.activeElement;
  } catch (e) {}
}

module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var canUseDOM = __webpack_require__(157);

var contains = (function () {
  var root = canUseDOM && document.documentElement;

  return root && root.contains ? function (context, node) {
    return context.contains(node);
  } : root && root.compareDocumentPosition ? function (context, node) {
    return context === node || !!(context.compareDocumentPosition(node) & 16);
  } : function (context, node) {
    if (node) do {
      if (node === context) return true;
    } while (node = node.parentNode);

    return false;
  };
})();

module.exports = contains;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var babelHelpers = __webpack_require__(70);

var _utilCamelizeStyle = __webpack_require__(71);

var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

module.exports = function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _utilCamelizeStyle2['default'])(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camelize = __webpack_require__(71),
    hyphenate = __webpack_require__(156),
    _getComputedStyle = __webpack_require__(151),
    removeStyle = __webpack_require__(153);

var has = Object.prototype.hasOwnProperty;

module.exports = function style(node, property, value) {
  var css = '',
      props = property;

  if (typeof property === 'string') {

    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
  }

  for (var key in props) if (has.call(props, key)) {
    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
  }

  node.style.cssText += ';' + css;
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rHyphen = /-(.)/g;

module.exports = function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rUpper = /([A-Z])/g;

module.exports = function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */



var hyphenate = __webpack_require__(155);
var msPattern = /^ms-/;

module.exports = function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(72),
    getRawTag = __webpack_require__(160),
    objectToString = __webpack_require__(161);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(72);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50),
    now = __webpack_require__(165),
    toNumber = __webpack_require__(167);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(158),
    isObjectLike = __webpack_require__(163);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(73);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(162),
    isObject = __webpack_require__(50);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50),
    isSymbol = __webpack_require__(164);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _values = __webpack_require__(57);

var _values2 = _interopRequireDefault(_values);

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = __webpack_require__(7);

var _StyleConfig = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  onDismiss: _react2['default'].PropTypes.func,
  closeLabel: _react2['default'].PropTypes.string
};

var defaultProps = {
  closeLabel: 'Close alert'
};

var Alert = function (_React$Component) {
  (0, _inherits3['default'])(Alert, _React$Component);

  function Alert() {
    (0, _classCallCheck3['default'])(this, Alert);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Alert.prototype.renderDismissButton = function renderDismissButton(onDismiss) {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        onClick: onDismiss,
        'aria-hidden': 'true',
        tabIndex: '-1'
      },
      _react2['default'].createElement(
        'span',
        null,
        '\xD7'
      )
    );
  };

  Alert.prototype.renderSrOnlyDismissButton = function renderSrOnlyDismissButton(onDismiss, closeLabel) {
    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close sr-only',
        onClick: onDismiss
      },
      closeLabel
    );
  };

  Alert.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
        onDismiss = _props.onDismiss,
        closeLabel = _props.closeLabel,
        className = _props.className,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['onDismiss', 'closeLabel', 'className', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var dismissable = !!onDismiss;
    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'dismissable')] = dismissable, _extends2));

    return _react2['default'].createElement(
      'div',
      (0, _extends4['default'])({}, elementProps, {
        role: 'alert',
        className: (0, _classnames2['default'])(className, classes)
      }),
      dismissable && this.renderDismissButton(onDismiss),
      children,
      dismissable && this.renderSrOnlyDismissButton(onDismiss, closeLabel)
    );
  };

  return Alert;
}(_react2['default'].Component);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsStyles)((0, _values2['default'])(_StyleConfig.State), _StyleConfig.State.INFO, (0, _bootstrapUtils.bsClass)('alert', Alert));
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _all = __webpack_require__(32);

var _all2 = _interopRequireDefault(_all);

var _Button = __webpack_require__(74);

var _Button2 = _interopRequireDefault(_Button);

var _bootstrapUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  vertical: _react2['default'].PropTypes.bool,
  justified: _react2['default'].PropTypes.bool,

  /**
   * Display block buttons; only useful when used with the "vertical" prop.
   * @type {bool}
   */
  block: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
    var block = _ref.block,
        vertical = _ref.vertical;
    return block && !vertical ? new Error('`block` requires `vertical` to be set to have any effect') : null;
  })
};

var defaultProps = {
  block: false,
  justified: false,
  vertical: false
};

var ButtonGroup = function (_React$Component) {
  (0, _inherits3['default'])(ButtonGroup, _React$Component);

  function ButtonGroup() {
    (0, _classCallCheck3['default'])(this, ButtonGroup);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ButtonGroup.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
        block = _props.block,
        justified = _props.justified,
        vertical = _props.vertical,
        className = _props.className,
        props = (0, _objectWithoutProperties3['default'])(_props, ['block', 'justified', 'vertical', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps)] = !vertical, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'vertical')] = vertical, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'justified')] = justified, _extends2[(0, _bootstrapUtils.prefix)(_Button2['default'].defaultProps, 'block')] = block, _extends2));

    return _react2['default'].createElement('div', (0, _extends4['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return ButtonGroup;
}(_react2['default'].Component);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('btn-group', ButtonGroup);
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _style = __webpack_require__(152);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Transition = __webpack_require__(188);

var _Transition2 = _interopRequireDefault(_Transition);

var _capitalize = __webpack_require__(185);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem['offset' + (0, _capitalize2['default'])(dimension)];
  var margins = MARGINS[dimension];

  return value + parseInt((0, _style2['default'])(elem, margins[0]), 10) + parseInt((0, _style2['default'])(elem, margins[1]), 10);
}

var propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  'in': _react2['default'].PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: _react2['default'].PropTypes.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2['default'].PropTypes.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: _react2['default'].PropTypes.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to expand
   */
  onEntering: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has expanded
   */
  onEntered: _react2['default'].PropTypes.func,
  /**
   * Callback fired before the component collapses
   */
  onExit: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: _react2['default'].PropTypes.func,
  /**
   * Callback fired after the component has collapsed
   */
  onExited: _react2['default'].PropTypes.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['height', 'width']), _react2['default'].PropTypes.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: _react2['default'].PropTypes.func,

  /**
   * ARIA role of collapsible element
   */
  role: _react2['default'].PropTypes.string
};

var defaultProps = {
  'in': false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false,

  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse = function (_React$Component) {
  (0, _inherits3['default'])(Collapse, _React$Component);

  function Collapse(props, context) {
    (0, _classCallCheck3['default'])(this, Collapse);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleEnter = _this.handleEnter.bind(_this);
    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleEntered = _this.handleEntered.bind(_this);
    _this.handleExit = _this.handleExit.bind(_this);
    _this.handleExiting = _this.handleExiting.bind(_this);
    return _this;
  }

  /* -- Expanding -- */


  Collapse.prototype.handleEnter = function handleEnter(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = '0';
  };

  Collapse.prototype.handleEntering = function handleEntering(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
  };

  Collapse.prototype.handleEntered = function handleEntered(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = null;
  };

  /* -- Collapsing -- */


  Collapse.prototype.handleExit = function handleExit(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
    triggerBrowserReflow(elem);
  };

  Collapse.prototype.handleExiting = function handleExiting(elem) {
    var dimension = this._dimension();
    elem.style[dimension] = '0';
  };

  Collapse.prototype._dimension = function _dimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  };

  // for testing


  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    return elem['scroll' + (0, _capitalize2['default'])(dimension)] + 'px';
  };

  Collapse.prototype.render = function render() {
    var _props = this.props,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        className = _props.className,
        props = (0, _objectWithoutProperties3['default'])(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);


    delete props.dimension;
    delete props.getDimensionValue;

    var handleEnter = (0, _createChainedFunction2['default'])(this.handleEnter, onEnter);
    var handleEntering = (0, _createChainedFunction2['default'])(this.handleEntering, onEntering);
    var handleEntered = (0, _createChainedFunction2['default'])(this.handleEntered, onEntered);
    var handleExit = (0, _createChainedFunction2['default'])(this.handleExit, onExit);
    var handleExiting = (0, _createChainedFunction2['default'])(this.handleExiting, onExiting);

    var classes = {
      width: this._dimension() === 'width'
    };

    return _react2['default'].createElement(_Transition2['default'], (0, _extends3['default'])({}, props, {
      'aria-expanded': props.role ? props['in'] : null,
      className: (0, _classnames2['default'])(className, classes),
      exitedClassName: 'collapse',
      exitingClassName: 'collapsing',
      enteredClassName: 'collapse in',
      enteringClassName: 'collapsing',
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }));
  };

  return Collapse;
}(_react2['default'].Component);

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

exports['default'] = Collapse;
module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _activeElement = __webpack_require__(148);

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = __webpack_require__(150);

var _contains2 = _interopRequireDefault(_contains);

var _keycode = __webpack_require__(52);

var _keycode2 = _interopRequireDefault(_keycode);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _all = __webpack_require__(32);

var _all2 = _interopRequireDefault(_all);

var _elementType = __webpack_require__(27);

var _elementType2 = _interopRequireDefault(_elementType);

var _isRequiredForA11y = __webpack_require__(195);

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _uncontrollable = __webpack_require__(76);

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _warning = __webpack_require__(77);

var _warning2 = _interopRequireDefault(_warning);

var _ButtonGroup = __webpack_require__(169);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DropdownMenu = __webpack_require__(172);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(173);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _bootstrapUtils = __webpack_require__(7);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _PropTypes = __webpack_require__(184);

var _ValidComponentChildren = __webpack_require__(26);

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TOGGLE_ROLE = _DropdownToggle2['default'].defaultProps.bsRole;
var MENU_ROLE = _DropdownMenu2['default'].defaultProps.bsRole;

var propTypes = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: _react2['default'].PropTypes.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: (0, _isRequiredForA11y2['default'])(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),

  componentClass: _elementType2['default'],

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle>` or a `<Dropdown.Menu>`.
   * @type {node}
   */
  children: (0, _all2['default'])((0, _PropTypes.requiredRoles)(TOGGLE_ROLE, MENU_ROLE), (0, _PropTypes.exclusiveRoles)(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: _react2['default'].PropTypes.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: _react2['default'].PropTypes.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: _react2['default'].PropTypes.bool,

  /**
   * A callback fired when the Dropdown closes.
   */
  onClose: _react2['default'].PropTypes.func,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value.
   *
   * ```js
   * function(Boolean isOpen) {}
   * ```
   * @controllable open
   */
  onToggle: _react2['default'].PropTypes.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: _react2['default'].PropTypes.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: _react2['default'].PropTypes.string,

  /**
   * Which event when fired outside the component will cause it to be closed
   */
  rootCloseEvent: _react2['default'].PropTypes.oneOf(['click', 'mousedown']),

  /**
   * @private
   */
  onMouseEnter: _react2['default'].PropTypes.func,
  /**
   * @private
   */
  onMouseLeave: _react2['default'].PropTypes.func
};

var defaultProps = {
  componentClass: _ButtonGroup2['default']
};

var Dropdown = function (_React$Component) {
  (0, _inherits3['default'])(Dropdown, _React$Component);

  function Dropdown(props, context) {
    (0, _classCallCheck3['default'])(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);

    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  Dropdown.prototype.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  Dropdown.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = (0, _contains2['default'])(_reactDom2['default'].findDOMNode(this.menu), (0, _activeElement2['default'])(document));
    }
  };

  Dropdown.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var open = this.props.open;

    var prevOpen = prevProps.open;

    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }

    if (!open && prevOpen) {
      // if focus hasn't already moved from the menu lets return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  Dropdown.prototype.handleClick = function handleClick() {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen('click');
  };

  Dropdown.prototype.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case _keycode2['default'].codes.down:
        if (!this.props.open) {
          this.toggleOpen('keydown');
        } else if (this.menu.focusNext) {
          this.menu.focusNext();
        }
        event.preventDefault();
        break;
      case _keycode2['default'].codes.esc:
      case _keycode2['default'].codes.tab:
        this.handleClose(event);
        break;
      default:
    }
  };

  Dropdown.prototype.toggleOpen = function toggleOpen(eventType) {
    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventType;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open);
    }
  };

  Dropdown.prototype.handleClose = function handleClose() {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen(null);
  };

  Dropdown.prototype.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.menu;

    if (!menu.focusNext) {
      return;
    }

    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
      menu.focusNext();
    }
  };

  Dropdown.prototype.focus = function focus() {
    var toggle = _reactDom2['default'].findDOMNode(this.toggle);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  Dropdown.prototype.renderToggle = function renderToggle(child, props) {
    var _this2 = this;

    var ref = function ref(c) {
      _this2.toggle = c;
    };

    if (typeof child.ref === 'string') {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(false, 'String refs are not supported on `<Dropdown.Toggle>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = (0, _createChainedFunction2['default'])(child.ref, ref);
    }

    return (0, _react.cloneElement)(child, (0, _extends3['default'])({}, props, {
      ref: ref,
      bsClass: (0, _bootstrapUtils.prefix)(props, 'toggle'),
      onClick: (0, _createChainedFunction2['default'])(child.props.onClick, this.handleClick),
      onKeyDown: (0, _createChainedFunction2['default'])(child.props.onKeyDown, this.handleKeyDown)
    }));
  };

  Dropdown.prototype.renderMenu = function renderMenu(child, _ref) {
    var _this3 = this;

    var id = _ref.id,
        onClose = _ref.onClose,
        onSelect = _ref.onSelect,
        rootCloseEvent = _ref.rootCloseEvent,
        props = (0, _objectWithoutProperties3['default'])(_ref, ['id', 'onClose', 'onSelect', 'rootCloseEvent']);

    var ref = function ref(c) {
      _this3.menu = c;
    };

    if (typeof child.ref === 'string') {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(false, 'String refs are not supported on `<Dropdown.Menu>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = (0, _createChainedFunction2['default'])(child.ref, ref);
    }

    return (0, _react.cloneElement)(child, (0, _extends3['default'])({}, props, {
      ref: ref,
      labelledBy: id,
      bsClass: (0, _bootstrapUtils.prefix)(props, 'menu'),
      onClose: (0, _createChainedFunction2['default'])(child.props.onClose, onClose, this.handleClose),
      onSelect: (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect, this.handleClose),
      rootCloseEvent: rootCloseEvent
    }));
  };

  Dropdown.prototype.render = function render() {
    var _classes,
        _this4 = this;

    var _props = this.props,
        Component = _props.componentClass,
        id = _props.id,
        dropup = _props.dropup,
        disabled = _props.disabled,
        pullRight = _props.pullRight,
        open = _props.open,
        onClose = _props.onClose,
        onSelect = _props.onSelect,
        role = _props.role,
        bsClass = _props.bsClass,
        className = _props.className,
        rootCloseEvent = _props.rootCloseEvent,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'id', 'dropup', 'disabled', 'pullRight', 'open', 'onClose', 'onSelect', 'role', 'bsClass', 'className', 'rootCloseEvent', 'children']);


    delete props.onToggle;

    var classes = (_classes = {}, _classes[bsClass] = true, _classes.open = open, _classes.disabled = disabled, _classes);

    if (dropup) {
      classes[bsClass] = false;
      classes.dropup = true;
    }

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    return _react2['default'].createElement(
      Component,
      (0, _extends3['default'])({}, props, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        switch (child.props.bsRole) {
          case TOGGLE_ROLE:
            return _this4.renderToggle(child, {
              id: id, disabled: disabled, open: open, role: role, bsClass: bsClass
            });
          case MENU_ROLE:
            return _this4.renderMenu(child, {
              id: id, open: open, pullRight: pullRight, bsClass: bsClass, onClose: onClose, onSelect: onSelect, rootCloseEvent: rootCloseEvent
            });
          default:
            return child;
        }
      })
    );
  };

  return Dropdown;
}(_react2['default'].Component);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

(0, _bootstrapUtils.bsClass)('dropdown', Dropdown);

var UncontrolledDropdown = (0, _uncontrollable2['default'])(Dropdown, { open: 'onToggle' });

UncontrolledDropdown.Toggle = _DropdownToggle2['default'];
UncontrolledDropdown.Menu = _DropdownMenu2['default'];

exports['default'] = UncontrolledDropdown;
module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _from = __webpack_require__(99);

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = __webpack_require__(52);

var _keycode2 = _interopRequireDefault(_keycode);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _RootCloseWrapper = __webpack_require__(187);

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _bootstrapUtils = __webpack_require__(7);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = __webpack_require__(26);

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  open: _react2['default'].PropTypes.bool,
  pullRight: _react2['default'].PropTypes.bool,
  onClose: _react2['default'].PropTypes.func,
  labelledBy: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  onSelect: _react2['default'].PropTypes.func,
  rootCloseEvent: _react2['default'].PropTypes.oneOf(['click', 'mousedown'])
};

var defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

var DropdownMenu = function (_React$Component) {
  (0, _inherits3['default'])(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    (0, _classCallCheck3['default'])(this, DropdownMenu);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  DropdownMenu.prototype.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case _keycode2['default'].codes.down:
        this.focusNext();
        event.preventDefault();
        break;
      case _keycode2['default'].codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;
      case _keycode2['default'].codes.esc:
      case _keycode2['default'].codes.tab:
        this.props.onClose(event);
        break;
      default:
    }
  };

  DropdownMenu.prototype.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeIndex = items.indexOf(document.activeElement);

    return { items: items, activeIndex: activeIndex };
  };

  DropdownMenu.prototype.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = _reactDom2['default'].findDOMNode(this);
    if (!node) {
      return [];
    }

    return (0, _from2['default'])(node.querySelectorAll('[tabIndex="-1"]'));
  };

  DropdownMenu.prototype.focusNext = function focusNext() {
    var _getItemsAndActiveInd = this.getItemsAndActiveIndex(),
        items = _getItemsAndActiveInd.items,
        activeIndex = _getItemsAndActiveInd.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  DropdownMenu.prototype.focusPrevious = function focusPrevious() {
    var _getItemsAndActiveInd2 = this.getItemsAndActiveIndex(),
        items = _getItemsAndActiveInd2.items,
        activeIndex = _getItemsAndActiveInd2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  DropdownMenu.prototype.render = function render() {
    var _extends2,
        _this2 = this;

    var _props = this.props,
        open = _props.open,
        pullRight = _props.pullRight,
        onClose = _props.onClose,
        labelledBy = _props.labelledBy,
        onSelect = _props.onSelect,
        className = _props.className,
        rootCloseEvent = _props.rootCloseEvent,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['open', 'pullRight', 'onClose', 'labelledBy', 'onSelect', 'className', 'rootCloseEvent', 'children']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'right')] = pullRight, _extends2));

    return _react2['default'].createElement(
      _RootCloseWrapper2['default'],
      {
        disabled: !open,
        onRootClose: onClose,
        event: rootCloseEvent
      },
      _react2['default'].createElement(
        'ul',
        (0, _extends4['default'])({}, elementProps, {
          role: 'menu',
          className: (0, _classnames2['default'])(className, classes),
          'aria-labelledby': labelledBy
        }),
        _ValidComponentChildren2['default'].map(children, function (child) {
          return _react2['default'].cloneElement(child, {
            onKeyDown: (0, _createChainedFunction2['default'])(child.props.onKeyDown, _this2.handleKeyDown),
            onSelect: (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect)
          });
        })
      )
    );
  };

  return DropdownMenu;
}(_react2['default'].Component);

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('dropdown-menu', DropdownMenu);
module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__(74);

var _Button2 = _interopRequireDefault(_Button);

var _SafeAnchor = __webpack_require__(29);

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  noCaret: _react2['default'].PropTypes.bool,
  open: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.string,
  useAnchor: _react2['default'].PropTypes.bool
};

var defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

var DropdownToggle = function (_React$Component) {
  (0, _inherits3['default'])(DropdownToggle, _React$Component);

  function DropdownToggle() {
    (0, _classCallCheck3['default'])(this, DropdownToggle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  DropdownToggle.prototype.render = function render() {
    var _props = this.props,
        noCaret = _props.noCaret,
        open = _props.open,
        useAnchor = _props.useAnchor,
        bsClass = _props.bsClass,
        className = _props.className,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['noCaret', 'open', 'useAnchor', 'bsClass', 'className', 'children']);


    delete props.bsRole;

    var Component = useAnchor ? _SafeAnchor2['default'] : _Button2['default'];
    var useCaret = !noCaret;

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    // FIXME: Should this really fall back to `title` as children?

    return _react2['default'].createElement(
      Component,
      (0, _extends3['default'])({}, props, {
        role: 'button',
        className: (0, _classnames2['default'])(className, bsClass),
        'aria-haspopup': true,
        'aria-expanded': open
      }),
      children || props.title,
      useCaret && ' ',
      useCaret && _react2['default'].createElement('span', { className: 'caret' })
    );
  };

  return DropdownToggle;
}(_react2['default'].Component);

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('dropdown-toggle', DropdownToggle);
module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elementType = __webpack_require__(27);

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: _react2['default'].PropTypes.bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: _elementType2['default']
};

var defaultProps = {
  componentClass: 'div',
  fluid: false
};

var Grid = function (_React$Component) {
  (0, _inherits3['default'])(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck3['default'])(this, Grid);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Grid.prototype.render = function render() {
    var _props = this.props,
        fluid = _props.fluid,
        Component = _props.componentClass,
        className = _props.className,
        props = (0, _objectWithoutProperties3['default'])(_props, ['fluid', 'componentClass', 'className']);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (0, _bootstrapUtils.prefix)(bsProps, fluid && 'fluid');

    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
      className: (0, _classnames2['default'])(className, classes)
    }));
  };

  return Grid;
}(_react2['default'].Component);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('container', Grid);
module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _all = __webpack_require__(32);

var _all2 = _interopRequireDefault(_all);

var _SafeAnchor = __webpack_require__(29);

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _bootstrapUtils = __webpack_require__(7);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: _react2['default'].PropTypes.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: _react2['default'].PropTypes.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
    var divider = _ref.divider,
        children = _ref.children;
    return divider && children ? new Error('Children will not be rendered for dividers') : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: _react2['default'].PropTypes.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: _react2['default'].PropTypes.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: _react2['default'].PropTypes.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: _react2['default'].PropTypes.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: _react2['default'].PropTypes.func
};

var defaultProps = {
  divider: false,
  disabled: false,
  header: false
};

var MenuItem = function (_React$Component) {
  (0, _inherits3['default'])(MenuItem, _React$Component);

  function MenuItem(props, context) {
    (0, _classCallCheck3['default'])(this, MenuItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  MenuItem.prototype.handleClick = function handleClick(event) {
    var _props = this.props,
        href = _props.href,
        disabled = _props.disabled,
        onSelect = _props.onSelect,
        eventKey = _props.eventKey;


    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  MenuItem.prototype.render = function render() {
    var _props2 = this.props,
        active = _props2.active,
        disabled = _props2.disabled,
        divider = _props2.divider,
        header = _props2.header,
        onClick = _props2.onClick,
        className = _props2.className,
        style = _props2.style,
        props = (0, _objectWithoutProperties3['default'])(_props2, ['active', 'disabled', 'divider', 'header', 'onClick', 'className', 'style']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['eventKey', 'onSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;

      return _react2['default'].createElement('li', (0, _extends3['default'])({}, elementProps, {
        role: 'separator',
        className: (0, _classnames2['default'])(className, 'divider'),
        style: style
      }));
    }

    if (header) {
      return _react2['default'].createElement('li', (0, _extends3['default'])({}, elementProps, {
        role: 'heading',
        className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(bsProps, 'header')),
        style: style
      }));
    }

    return _react2['default'].createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
        style: style
      },
      _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, elementProps, {
        role: 'menuitem',
        tabIndex: '-1',
        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
      }))
    );
  };

  return MenuItem;
}(_react2['default'].Component);

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('dropdown', MenuItem);
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = __webpack_require__(52);

var _keycode2 = _interopRequireDefault(_keycode);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _all = __webpack_require__(32);

var _all2 = _interopRequireDefault(_all);

var _warning = __webpack_require__(77);

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = __webpack_require__(7);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ValidComponentChildren = __webpack_require__(26);

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?

// TODO: This `bsStyle` is very unlike the others. Should we rename it?

// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

var propTypes = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: _react2['default'].PropTypes.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: _react2['default'].PropTypes.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: _react2['default'].PropTypes.bool,

  justified: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
    var justified = _ref.justified,
        navbar = _ref.navbar;
    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   */
  onSelect: _react2['default'].PropTypes.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is set to "tablist" NavItem focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: _react2['default'].PropTypes.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: _react2['default'].PropTypes.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: _react2['default'].PropTypes.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: _react2['default'].PropTypes.bool
};

var defaultProps = {
  justified: false,
  pullRight: false,
  pullLeft: false,
  stacked: false
};

var contextTypes = {
  $bs_navbar: _react2['default'].PropTypes.shape({
    bsClass: _react2['default'].PropTypes.string,
    onSelect: _react2['default'].PropTypes.func
  }),

  $bs_tabContainer: _react2['default'].PropTypes.shape({
    activeKey: _react2['default'].PropTypes.any,
    onSelect: _react2['default'].PropTypes.func.isRequired,
    getTabId: _react2['default'].PropTypes.func.isRequired,
    getPaneId: _react2['default'].PropTypes.func.isRequired
  })
};

var Nav = function (_React$Component) {
  (0, _inherits3['default'])(Nav, _React$Component);

  function Nav() {
    (0, _classCallCheck3['default'])(this, Nav);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Nav.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    if (!this._needsRefocus) {
      return;
    }

    this._needsRefocus = false;

    var children = this.props.children;

    var _getActiveProps = this.getActiveProps(),
        activeKey = _getActiveProps.activeKey,
        activeHref = _getActiveProps.activeHref;

    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
      return _this2.isActive(child, activeKey, activeHref);
    });

    var childrenArray = _ValidComponentChildren2['default'].toArray(children);
    var activeChildIndex = childrenArray.indexOf(activeChild);

    var childNodes = _reactDom2['default'].findDOMNode(this).children;
    var activeNode = childNodes && childNodes[activeChildIndex];

    if (!activeNode || !activeNode.firstChild) {
      return;
    }

    activeNode.firstChild.focus();
  };

  Nav.prototype.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
    var nextActiveChild = void 0;

    switch (event.keyCode) {
      case _keycode2['default'].codes.left:
      case _keycode2['default'].codes.up:
        nextActiveChild = this.getNextActiveChild(-1);
        break;
      case _keycode2['default'].codes.right:
      case _keycode2['default'].codes.down:
        nextActiveChild = this.getNextActiveChild(1);
        break;
      default:
        // It was a different key; don't handle this keypress.
        return;
    }

    event.preventDefault();

    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey) {
      onSelect(nextActiveChild.props.eventKey);
    }

    this._needsRefocus = true;
  };

  Nav.prototype.getNextActiveChild = function getNextActiveChild(offset) {
    var _this3 = this;

    var children = this.props.children;

    var validChildren = children.filter(function (child) {
      return child.props.eventKey && !child.props.disabled;
    });

    var _getActiveProps2 = this.getActiveProps(),
        activeKey = _getActiveProps2.activeKey,
        activeHref = _getActiveProps2.activeHref;

    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
      return _this3.isActive(child, activeKey, activeHref);
    });

    // This assumes the active child is not disabled.
    var activeChildIndex = validChildren.indexOf(activeChild);
    if (activeChildIndex === -1) {
      // Something has gone wrong. Select the first valid child we can find.
      return validChildren[0];
    }

    var nextIndex = activeChildIndex + offset;
    var numValidChildren = validChildren.length;

    if (nextIndex >= numValidChildren) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = numValidChildren - 1;
    }

    return validChildren[nextIndex];
  };

  Nav.prototype.getActiveProps = function getActiveProps() {
    var tabContainer = this.context.$bs_tabContainer;

    if (tabContainer) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(this.props.activeKey == null && !this.props.activeHref, 'Specifying a `<Nav>` `activeKey` or `activeHref` in the context of ' + 'a `<TabContainer>` is not supported. Instead use `<TabContainer ' + ('activeKey={' + this.props.activeKey + '} />`.')) : void 0;

      return tabContainer;
    }

    return this.props;
  };

  Nav.prototype.isActive = function isActive(_ref2, activeKey, activeHref) {
    var props = _ref2.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    return props.active;
  };

  Nav.prototype.getTabProps = function getTabProps(child, tabContainer, navRole, active, onSelect) {
    var _this4 = this;

    if (!tabContainer && navRole !== 'tablist') {
      // No tab props here.
      return null;
    }

    var _child$props = child.props,
        id = _child$props.id,
        controls = _child$props['aria-controls'],
        eventKey = _child$props.eventKey,
        role = _child$props.role,
        onKeyDown = _child$props.onKeyDown,
        tabIndex = _child$props.tabIndex;


    if (tabContainer) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!id && !controls, 'In the context of a `<TabContainer>`, `<NavItem>`s are given ' + 'generated `id` and `aria-controls` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly, provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;

      id = tabContainer.getTabId(eventKey);
      controls = tabContainer.getPaneId(eventKey);
    }

    if (navRole === 'tablist') {
      role = role || 'tab';
      onKeyDown = (0, _createChainedFunction2['default'])(function (event) {
        return _this4.handleTabKeyDown(onSelect, event);
      }, onKeyDown);
      tabIndex = active ? tabIndex : -1;
    }

    return {
      id: id,
      role: role,
      onKeyDown: onKeyDown,
      'aria-controls': controls,
      tabIndex: tabIndex
    };
  };

  Nav.prototype.render = function render() {
    var _extends2,
        _this5 = this;

    var _props = this.props,
        stacked = _props.stacked,
        justified = _props.justified,
        onSelect = _props.onSelect,
        propsRole = _props.role,
        propsNavbar = _props.navbar,
        pullRight = _props.pullRight,
        pullLeft = _props.pullLeft,
        className = _props.className,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['stacked', 'justified', 'onSelect', 'role', 'navbar', 'pullRight', 'pullLeft', 'className', 'children']);


    var tabContainer = this.context.$bs_tabContainer;
    var role = propsRole || (tabContainer ? 'tablist' : null);

    var _getActiveProps3 = this.getActiveProps(),
        activeKey = _getActiveProps3.activeKey,
        activeHref = _getActiveProps3.activeHref;

    delete props.activeKey; // Accessed via this.getActiveProps().
    delete props.activeHref; // Accessed via this.getActiveProps().

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'stacked')] = stacked, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'justified')] = justified, _extends2));

    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
    var pullLeftClassName = void 0;
    var pullRightClassName = void 0;

    if (navbar) {
      var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

      classes[(0, _bootstrapUtils.prefix)(navbarProps, 'nav')] = true;

      pullRightClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'right');
      pullLeftClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'left');
    } else {
      pullRightClassName = 'pull-right';
      pullLeftClassName = 'pull-left';
    }

    classes[pullRightClassName] = pullRight;
    classes[pullLeftClassName] = pullLeft;

    return _react2['default'].createElement(
      'ul',
      (0, _extends4['default'])({}, elementProps, {
        role: role,
        className: (0, _classnames2['default'])(className, classes)
      }),
      _ValidComponentChildren2['default'].map(children, function (child) {
        var active = _this5.isActive(child, activeKey, activeHref);
        var childOnSelect = (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect, navbar && navbar.onSelect, tabContainer && tabContainer.onSelect);

        return (0, _react.cloneElement)(child, (0, _extends4['default'])({}, _this5.getTabProps(child, tabContainer, role, active, childOnSelect), {
          active: active,
          activeKey: activeKey,
          activeHref: activeHref,
          onSelect: childOnSelect
        }));
      })
    );
  };

  return Nav;
}(_react2['default'].Component);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.contextTypes = contextTypes;

exports['default'] = (0, _bootstrapUtils.bsClass)('nav', (0, _bootstrapUtils.bsStyles)(['tabs', 'pills'], Nav));
module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dropdown = __webpack_require__(171);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _splitComponentProps2 = __webpack_require__(186);

var _splitComponentProps3 = _interopRequireDefault(_splitComponentProps2);

var _ValidComponentChildren = __webpack_require__(26);

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _extends3['default'])({}, _Dropdown2['default'].propTypes, {

  // Toggle props.
  title: _react2['default'].PropTypes.node.isRequired,
  noCaret: _react2['default'].PropTypes.bool,
  active: _react2['default'].PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: _react2['default'].PropTypes.node
});

var NavDropdown = function (_React$Component) {
  (0, _inherits3['default'])(NavDropdown, _React$Component);

  function NavDropdown() {
    (0, _classCallCheck3['default'])(this, NavDropdown);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavDropdown.prototype.isActive = function isActive(_ref, activeKey, activeHref) {
    var props = _ref.props;

    var _this2 = this;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    if (_ValidComponentChildren2['default'].some(props.children, function (child) {
      return _this2.isActive(child, activeKey, activeHref);
    })) {
      return true;
    }

    return props.active;
  };

  NavDropdown.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        title = _props.title,
        activeKey = _props.activeKey,
        activeHref = _props.activeHref,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['title', 'activeKey', 'activeHref', 'className', 'style', 'children']);


    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().
    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = (0, _splitComponentProps3['default'])(props, _Dropdown2['default'].ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1];

    // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.

    return _react2['default'].createElement(
      _Dropdown2['default'],
      (0, _extends3['default'])({}, dropdownProps, {
        componentClass: 'li',
        className: (0, _classnames2['default'])(className, { active: active }),
        style: style
      }),
      _react2['default'].createElement(
        _Dropdown2['default'].Toggle,
        (0, _extends3['default'])({}, toggleProps, { useAnchor: true }),
        title
      ),
      _react2['default'].createElement(
        _Dropdown2['default'].Menu,
        null,
        _ValidComponentChildren2['default'].map(children, function (child) {
          return _react2['default'].cloneElement(child, {
            active: _this3.isActive(child, activeKey, activeHref)
          });
        })
      )
    );
  };

  return NavDropdown;
}(_react2['default'].Component);

NavDropdown.propTypes = propTypes;

exports['default'] = NavDropdown;
module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SafeAnchor = __webpack_require__(29);

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  active: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  role: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string,
  onClick: _react2['default'].PropTypes.func,
  onSelect: _react2['default'].PropTypes.func,
  eventKey: _react2['default'].PropTypes.any
};

var defaultProps = {
  active: false,
  disabled: false
};

var NavItem = function (_React$Component) {
  (0, _inherits3['default'])(NavItem, _React$Component);

  function NavItem(props, context) {
    (0, _classCallCheck3['default'])(this, NavItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  NavItem.prototype.handleClick = function handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, e);
      }
    }
  };

  NavItem.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        disabled = _props.disabled,
        onClick = _props.onClick,
        className = _props.className,
        style = _props.style,
        props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'disabled', 'onClick', 'className', 'style']);


    delete props.onSelect;
    delete props.eventKey;

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey;
    delete props.activeHref;

    if (!props.role) {
      if (props.href === '#') {
        props.role = 'button';
      }
    } else if (props.role === 'tab') {
      props['aria-selected'] = active;
    }

    return _react2['default'].createElement(
      'li',
      {
        role: 'presentation',
        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
        style: style
      },
      _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, props, {
        disabled: disabled,
        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
      }))
    );
  };

  return NavItem;
}(_react2['default'].Component);

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

exports['default'] = NavItem;
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends3 = __webpack_require__(1);

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elementType = __webpack_require__(27);

var _elementType2 = _interopRequireDefault(_elementType);

var _uncontrollable = __webpack_require__(76);

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _Grid = __webpack_require__(174);

var _Grid2 = _interopRequireDefault(_Grid);

var _NavbarBrand = __webpack_require__(180);

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarCollapse = __webpack_require__(181);

var _NavbarCollapse2 = _interopRequireDefault(_NavbarCollapse);

var _NavbarHeader = __webpack_require__(182);

var _NavbarHeader2 = _interopRequireDefault(_NavbarHeader);

var _NavbarToggle = __webpack_require__(183);

var _NavbarToggle2 = _interopRequireDefault(_NavbarToggle);

var _bootstrapUtils = __webpack_require__(7);

var _StyleConfig = __webpack_require__(30);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: Remove this pragma once we upgrade eslint-config-airbnb.
/* eslint-disable react/no-multi-comp */

var propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: _react2['default'].PropTypes.bool,
  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: _react2['default'].PropTypes.bool,
  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: _react2['default'].PropTypes.bool,
  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: _react2['default'].PropTypes.bool,
  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: _react2['default'].PropTypes.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: _elementType2['default'],
  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `navExpanded`
   * boolean value.
   *
   * @controllable navExpanded
   */
  onToggle: _react2['default'].PropTypes.func,
  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: _react2['default'].PropTypes.func,
  /**
   * Sets `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>`. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * The onSelect callback should be used instead for more complex operations
   * that need to be executed after the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: _react2['default'].PropTypes.bool,
  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: _react2['default'].PropTypes.bool,

  role: _react2['default'].PropTypes.string
};

var defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  collapseOnSelect: false
};

var childContextTypes = {
  $bs_navbar: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    expanded: _react.PropTypes.bool,
    onToggle: _react.PropTypes.func.isRequired,
    onSelect: _react.PropTypes.func
  })
};

var Navbar = function (_React$Component) {
  (0, _inherits3['default'])(Navbar, _React$Component);

  function Navbar(props, context) {
    (0, _classCallCheck3['default'])(this, Navbar);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleCollapse = _this.handleCollapse.bind(_this);
    return _this;
  }

  Navbar.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        bsClass = _props.bsClass,
        expanded = _props.expanded,
        onSelect = _props.onSelect,
        collapseOnSelect = _props.collapseOnSelect;


    return {
      $bs_navbar: {
        bsClass: bsClass,
        expanded: expanded,
        onToggle: this.handleToggle,
        onSelect: (0, _createChainedFunction2['default'])(onSelect, collapseOnSelect ? this.handleCollapse : null)
      }
    };
  };

  Navbar.prototype.handleCollapse = function handleCollapse() {
    var _props2 = this.props,
        onToggle = _props2.onToggle,
        expanded = _props2.expanded;


    if (expanded) {
      onToggle(false);
    }
  };

  Navbar.prototype.handleToggle = function handleToggle() {
    var _props3 = this.props,
        onToggle = _props3.onToggle,
        expanded = _props3.expanded;


    onToggle(!expanded);
  };

  Navbar.prototype.render = function render() {
    var _extends2;

    var _props4 = this.props,
        Component = _props4.componentClass,
        fixedTop = _props4.fixedTop,
        fixedBottom = _props4.fixedBottom,
        staticTop = _props4.staticTop,
        inverse = _props4.inverse,
        fluid = _props4.fluid,
        className = _props4.className,
        children = _props4.children,
        props = (0, _objectWithoutProperties3['default'])(_props4, ['componentClass', 'fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'fluid', 'className', 'children']);

    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['expanded', 'onToggle', 'onSelect', 'collapseOnSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (elementProps.role === undefined && Component !== 'nav') {
      elementProps.role = 'navigation';
    }

    if (inverse) {
      bsProps.bsStyle = _StyleConfig.Style.INVERSE;
    }

    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'fixed-top')] = fixedTop, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'fixed-bottom')] = fixedBottom, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'static-top')] = staticTop, _extends2));

    return _react2['default'].createElement(
      Component,
      (0, _extends4['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, classes)
      }),
      _react2['default'].createElement(
        _Grid2['default'],
        { fluid: fluid },
        children
      )
    );
  };

  return Navbar;
}(_react2['default'].Component);

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.childContextTypes = childContextTypes;

(0, _bootstrapUtils.bsClass)('navbar', Navbar);

var UncontrollableNavbar = (0, _uncontrollable2['default'])(Navbar, { expanded: 'onToggle' });

function createSimpleWrapper(tag, suffix, displayName) {
  var Wrapper = function Wrapper(_ref, _ref2) {
    var _ref2$$bs_navbar = _ref2.$bs_navbar,
        navbarProps = _ref2$$bs_navbar === undefined ? { bsClass: 'navbar' } : _ref2$$bs_navbar;
    var Component = _ref.componentClass,
        className = _ref.className,
        pullRight = _ref.pullRight,
        pullLeft = _ref.pullLeft,
        props = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass', 'className', 'pullRight', 'pullLeft']);
    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, props, {
      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, suffix), pullRight && (0, _bootstrapUtils.prefix)(navbarProps, 'right'), pullLeft && (0, _bootstrapUtils.prefix)(navbarProps, 'left'))
    }));
  };

  Wrapper.displayName = displayName;

  Wrapper.propTypes = {
    componentClass: _elementType2['default'],
    pullRight: _react2['default'].PropTypes.bool,
    pullLeft: _react2['default'].PropTypes.bool
  };

  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false
  };

  Wrapper.contextTypes = {
    $bs_navbar: _react.PropTypes.shape({
      bsClass: _react.PropTypes.string
    })
  };

  return Wrapper;
}

UncontrollableNavbar.Brand = _NavbarBrand2['default'];
UncontrollableNavbar.Header = _NavbarHeader2['default'];
UncontrollableNavbar.Toggle = _NavbarToggle2['default'];
UncontrollableNavbar.Collapse = _NavbarCollapse2['default'];

UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');

// Set bsStyles here so they can be overridden.
exports['default'] = (0, _bootstrapUtils.bsStyles)([_StyleConfig.Style.DEFAULT, _StyleConfig.Style.INVERSE], _StyleConfig.Style.DEFAULT, UncontrollableNavbar);
module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var contextTypes = {
  $bs_navbar: _react2['default'].PropTypes.shape({
    bsClass: _react2['default'].PropTypes.string
  })
};

var NavbarBrand = function (_React$Component) {
  (0, _inherits3['default'])(NavbarBrand, _React$Component);

  function NavbarBrand() {
    (0, _classCallCheck3['default'])(this, NavbarBrand);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarBrand.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'brand');

    if (_react2['default'].isValidElement(children)) {
      return _react2['default'].cloneElement(children, {
        className: (0, _classnames2['default'])(children.props.className, className, bsClassName)
      });
    }

    return _react2['default'].createElement(
      'span',
      (0, _extends3['default'])({}, props, { className: (0, _classnames2['default'])(className, bsClassName) }),
      children
    );
  };

  return NavbarBrand;
}(_react2['default'].Component);

NavbarBrand.contextTypes = contextTypes;

exports['default'] = NavbarBrand;
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Collapse = __webpack_require__(170);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _bootstrapUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var contextTypes = {
  $bs_navbar: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    expanded: _react.PropTypes.bool
  })
};

var NavbarCollapse = function (_React$Component) {
  (0, _inherits3['default'])(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    (0, _classCallCheck3['default'])(this, NavbarCollapse);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarCollapse.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'collapse');

    return _react2['default'].createElement(
      _Collapse2['default'],
      (0, _extends3['default'])({ 'in': navbarProps.expanded }, props),
      _react2['default'].createElement(
        'div',
        { className: bsClassName },
        children
      )
    );
  };

  return NavbarCollapse;
}(_react2['default'].Component);

NavbarCollapse.contextTypes = contextTypes;

exports['default'] = NavbarCollapse;
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var contextTypes = {
  $bs_navbar: _react2['default'].PropTypes.shape({
    bsClass: _react2['default'].PropTypes.string
  })
};

var NavbarHeader = function (_React$Component) {
  (0, _inherits3['default'])(NavbarHeader, _React$Component);

  function NavbarHeader() {
    (0, _classCallCheck3['default'])(this, NavbarHeader);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'header');

    return _react2['default'].createElement('div', (0, _extends3['default'])({}, props, { className: (0, _classnames2['default'])(className, bsClassName) }));
  };

  return NavbarHeader;
}(_react2['default'].Component);

NavbarHeader.contextTypes = contextTypes;

exports['default'] = NavbarHeader;
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(1);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = __webpack_require__(7);

var _createChainedFunction = __webpack_require__(13);

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  onClick: _react.PropTypes.func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: _react.PropTypes.node
};

var contextTypes = {
  $bs_navbar: _react.PropTypes.shape({
    bsClass: _react.PropTypes.string,
    expanded: _react.PropTypes.bool,
    onToggle: _react.PropTypes.func.isRequired
  })
};

var NavbarToggle = function (_React$Component) {
  (0, _inherits3['default'])(NavbarToggle, _React$Component);

  function NavbarToggle() {
    (0, _classCallCheck3['default'])(this, NavbarToggle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  NavbarToggle.prototype.render = function render() {
    var _props = this.props,
        onClick = _props.onClick,
        className = _props.className,
        children = _props.children,
        props = (0, _objectWithoutProperties3['default'])(_props, ['onClick', 'className', 'children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var buttonProps = (0, _extends3['default'])({
      type: 'button'
    }, props, {
      onClick: (0, _createChainedFunction2['default'])(onClick, navbarProps.onToggle),
      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, 'toggle'), !navbarProps.expanded && 'collapsed')
    });

    if (children) {
      return _react2['default'].createElement(
        'button',
        buttonProps,
        children
      );
    }

    return _react2['default'].createElement(
      'button',
      buttonProps,
      _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation'
      ),
      _react2['default'].createElement('span', { className: 'icon-bar' }),
      _react2['default'].createElement('span', { className: 'icon-bar' }),
      _react2['default'].createElement('span', { className: 'icon-bar' })
    );
  };

  return NavbarToggle;
}(_react2['default'].Component);

NavbarToggle.propTypes = propTypes;
NavbarToggle.contextTypes = contextTypes;

exports['default'] = NavbarToggle;
module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requiredRoles = requiredRoles;
exports.exclusiveRoles = exclusiveRoles;

var _createChainableTypeChecker = __webpack_require__(51);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

var _ValidComponentChildren = __webpack_require__(26);

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function requiredRoles() {
  for (var _len = arguments.length, roles = Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }

  return (0, _createChainableTypeChecker2['default'])(function (props, propName, component) {
    var missing = void 0;

    roles.every(function (role) {
      if (!_ValidComponentChildren2['default'].some(props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error('(children) ' + component + ' - Missing a required child with bsRole: ' + (missing + '. ' + component + ' must have at least one child of each of ') + ('the following bsRoles: ' + roles.join(', ')));
    }

    return null;
  });
}

function exclusiveRoles() {
  for (var _len2 = arguments.length, roles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return (0, _createChainableTypeChecker2['default'])(function (props, propName, component) {
    var duplicate = void 0;

    roles.every(function (role) {
      var childrenWithRole = _ValidComponentChildren2['default'].filter(props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error('(children) ' + component + ' - Duplicate children detected of bsRole: ' + (duplicate + '. Only one child each allowed with the following ') + ('bsRoles: ' + roles.join(', ')));
    }

    return null;
  });
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = capitalize;
function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _entries = __webpack_require__(56);

var _entries2 = _interopRequireDefault(_entries);

exports["default"] = splitComponentProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;

  var parentProps = {};
  var childProps = {};

  (0, _entries2["default"])(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}
module.exports = exports["default"];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contains = __webpack_require__(193);

var _contains2 = _interopRequireDefault(_contains);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = __webpack_require__(189);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _ownerDocument = __webpack_require__(190);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escapeKeyCode = 27;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var RootCloseWrapper = function (_React$Component) {
  _inherits(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    _classCallCheck(this, RootCloseWrapper);

    var _this = _possibleConstructorReturn(this, (RootCloseWrapper.__proto__ || Object.getPrototypeOf(RootCloseWrapper)).call(this, props, context));

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains2.default)(_reactDom2.default.findDOMNode(_this), e.target);
    };

    _this.handleMouse = function (e) {
      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  _createClass(RootCloseWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.disabled) {
        this.addEventListeners();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!this.props.disabled && prevProps.disabled) {
        this.addEventListeners();
      } else if (this.props.disabled && !prevProps.disabled) {
        this.removeEventListeners();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.props.disabled) {
        this.removeEventListeners();
      }
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var event = this.props.event;

      var doc = (0, _ownerDocument2.default)(this);

      // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.
      this.documentMouseCaptureListener = (0, _addEventListener2.default)(doc, event, this.handleMouseCapture, true);

      this.documentMouseListener = (0, _addEventListener2.default)(doc, event, this.handleMouse);

      this.documentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleKeyUp);
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      if (this.documentMouseCaptureListener) {
        this.documentMouseCaptureListener.remove();
      }

      if (this.documentMouseListener) {
        this.documentMouseListener.remove();
      }

      if (this.documentKeyupListener) {
        this.documentKeyupListener.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return RootCloseWrapper;
}(_react2.default.Component);

exports.default = RootCloseWrapper;


RootCloseWrapper.displayName = 'RootCloseWrapper';

RootCloseWrapper.propTypes = {
  onRootClose: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.element,

  /**
   * Disable the the RootCloseWrapper, preventing it from triggering
   * `onRootClose`.
   */
  disabled: _react2.default.PropTypes.bool,
  /**
   * Choose which document mouse event to bind to
   */
  event: _react2.default.PropTypes.oneOf(['click', 'mousedown'])
};

RootCloseWrapper.defaultProps = {
  event: 'click'
};
module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _properties = __webpack_require__(194);

var _properties2 = _interopRequireDefault(_properties);

var _on = __webpack_require__(75);

var _on2 = _interopRequireDefault(_on);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionEndEvent = _properties2.default.end;

var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).call(this, props, context));

    var initialStatus = void 0;
    if (props.in) {
      // Start enter transition in componentDidMount.
      initialStatus = props.transitionAppear ? EXITED : ENTERED;
    } else {
      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
    }
    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  _createClass(Transition, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.transitionAppear && this.props.in) {
        this.performEnter(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.in && this.props.unmountOnExit) {
        if (this.state.status === UNMOUNTED) {
          // Start enter transition in componentDidUpdate.
          this.setState({ status: EXITED });
        }
      } else {
        this._needsUpdate = true;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var status = this.state.status;

      if (this.props.unmountOnExit && status === EXITED) {
        // EXITED is always a transitional state to either ENTERING or UNMOUNTED
        // when using unmountOnExit.
        if (this.props.in) {
          this.performEnter(this.props);
        } else {
          this.setState({ status: UNMOUNTED });
        }

        return;
      }

      // guard ensures we are only responding to prop changes
      if (this._needsUpdate) {
        this._needsUpdate = false;

        if (this.props.in) {
          if (status === EXITING) {
            this.performEnter(this.props);
          } else if (status === EXITED) {
            this.performEnter(this.props);
          }
          // Otherwise we're already entering or entered.
        } else {
          if (status === ENTERING || status === ENTERED) {
            this.performExit(this.props);
          }
          // Otherwise we're already exited or exiting.
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancelNextCallback();
    }
  }, {
    key: 'performEnter',
    value: function performEnter(props) {
      var _this2 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      // Not this.props, because we might be about to receive new props.
      props.onEnter(node);

      this.safeSetState({ status: ENTERING }, function () {
        _this2.props.onEntering(node);

        _this2.onTransitionEnd(node, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node);
          });
        });
      });
    }
  }, {
    key: 'performExit',
    value: function performExit(props) {
      var _this3 = this;

      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      // Not this.props, because we might be about to receive new props.
      props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, function () {
          _this3.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    }
  }, {
    key: 'cancelNextCallback',
    value: function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    }
  }, {
    key: 'safeSetState',
    value: function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      this.setState(nextState, this.setNextCallback(callback));
    }
  }, {
    key: 'setNextCallback',
    value: function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd(node, handler) {
      this.setNextCallback(handler);

      if (node) {
        (0, _on2.default)(node, transitionEndEvent, this.nextCallback);
        setTimeout(this.nextCallback, this.props.timeout);
      } else {
        setTimeout(this.nextCallback, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          childProps = _objectWithoutProperties(_props, ['children', 'className']);

      Object.keys(Transition.propTypes).forEach(function (key) {
        return delete childProps[key];
      });

      var transitionClassName = void 0;
      if (status === EXITED) {
        transitionClassName = this.props.exitedClassName;
      } else if (status === ENTERING) {
        transitionClassName = this.props.enteringClassName;
      } else if (status === ENTERED) {
        transitionClassName = this.props.enteredClassName;
      } else if (status === EXITING) {
        transitionClassName = this.props.exitingClassName;
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, _extends({}, childProps, {
        className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
      }));
    }
  }]);

  return Transition;
}(_react2.default.Component);

Transition.propTypes = {
  /**
   * Show the component; triggers the enter or exit animation
   */
  in: _react2.default.PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is not shown
   */
  unmountOnExit: _react2.default.PropTypes.bool,

  /**
   * Run the enter animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: _react2.default.PropTypes.bool,

  /**
   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
   * transition indefinately if the browser transitionEnd events are
   * canceled or interrupted.
   *
   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
   * setting this to the duration of your animation (or a bit above it).
   */
  timeout: _react2.default.PropTypes.number,

  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _react2.default.PropTypes.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _react2.default.PropTypes.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  enteredClassName: _react2.default.PropTypes.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _react2.default.PropTypes.string,

  /**
   * Callback fired before the "entering" classes are applied
   */
  onEnter: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "entering" classes are applied
   */
  onEntering: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "enter" classes are applied
   */
  onEntered: _react2.default.PropTypes.func,
  /**
   * Callback fired before the "exiting" classes are applied
   */
  onExit: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "exiting" classes are applied
   */
  onExiting: _react2.default.PropTypes.func,
  /**
   * Callback fired after the "exited" classes are applied
   */
  onExited: _react2.default.PropTypes.func
};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.displayName = 'Transition';

Transition.defaultProps = {
  in: false,
  unmountOnExit: false,
  transitionAppear: false,

  timeout: 5000,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

exports.default = Transition;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);

  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};

var _on = __webpack_require__(75);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(191);

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = __webpack_require__(192);

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(31);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var off = function off() {};
if (_inDOM2.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

exports.default = off;
module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(31);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM2.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);

  return false;
}
module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(31);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("passport-github");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("passport-twitter");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(82);
var passport = __webpack_require__(84);
var mongoose = __webpack_require__(33);
var bodyParser = __webpack_require__(81);
var session = __webpack_require__(83);
var path = __webpack_require__(85);

var routes = __webpack_require__(79);
var apiRoutes = __webpack_require__(78);
__webpack_require__(80)(passport);
global.Promise = __webpack_require__(34);

var uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test-db';
mongoose.Promise = __webpack_require__(34);
mongoose.connect(uri);

var app = express();
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.use(session({
  secret: 'barbadoslim',
  resave: false,
  saveUninitialized: true
}));

// app.enable('trust proxy');
app.use(passport.initialize());
app.use(passport.session());

apiRoutes(app, passport);
routes(app, passport);

app.listen(app.get('port'), function () {
  console.log('listening on port ' + app.get('port'));
});
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })
/******/ ]);