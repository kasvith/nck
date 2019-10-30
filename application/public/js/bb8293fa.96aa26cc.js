(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bb8293fa"],{

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "061d":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "118e":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__("e265");

var objectWithoutPropertiesLoose = __webpack_require__("2f61");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2f61":
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__("a4bb");

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "3d02":
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__("774e");

var _isIterable = __webpack_require__("c8bb");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "48c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__("386b")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4db1":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("7c64");

var iterableToArray = __webpack_require__("3d02");

var nonIterableSpread = __webpack_require__("d8f0");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "59a1":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("85f2");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("a745");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e9a":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("5d73");

var _isIterable = __webpack_require__("c8bb");

function _iterableToArrayLimit(arr, i) {
  if (!(_isIterable(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8449":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__("386b")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "8993":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("5d58");

var _Symbol = __webpack_require__("67bb");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "b54a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("386b")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("386b")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8f0":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "e265":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ed33");

/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ed33":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
module.exports = __webpack_require__("584a").Object.getOwnPropertySymbols;


/***/ }),

/***/ "f1b7":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("a745");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "f3e3":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("f1b7");

var iterableToArrayLimit = __webpack_require__("7e9a");

var nonIterableRest = __webpack_require__("061d");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fc74":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "fe09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "QAjaxBar", function() { return QAjaxBar; });
__webpack_require__.d(components_namespaceObject, "QAvatar", function() { return QAvatar["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "QBadge", function() { return QBadge; });
__webpack_require__.d(components_namespaceObject, "QBanner", function() { return QBanner; });
__webpack_require__.d(components_namespaceObject, "QBar", function() { return QBar; });
__webpack_require__.d(components_namespaceObject, "QBreadcrumbs", function() { return QBreadcrumbs; });
__webpack_require__.d(components_namespaceObject, "QBreadcrumbsEl", function() { return QBreadcrumbsEl; });
__webpack_require__.d(components_namespaceObject, "QBtn", function() { return QBtn["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "QBtnGroup", function() { return QBtnGroup; });
__webpack_require__.d(components_namespaceObject, "QBtnDropdown", function() { return QBtnDropdown; });
__webpack_require__.d(components_namespaceObject, "QBtnToggle", function() { return QBtnToggle; });
__webpack_require__.d(components_namespaceObject, "QCard", function() { return QCard; });
__webpack_require__.d(components_namespaceObject, "QCardSection", function() { return QCardSection; });
__webpack_require__.d(components_namespaceObject, "QCardActions", function() { return QCardActions; });
__webpack_require__.d(components_namespaceObject, "QCarousel", function() { return QCarousel; });
__webpack_require__.d(components_namespaceObject, "QCarouselSlide", function() { return QCarouselSlide; });
__webpack_require__.d(components_namespaceObject, "QCarouselControl", function() { return QCarouselControl; });
__webpack_require__.d(components_namespaceObject, "QChatMessage", function() { return QChatMessage; });
__webpack_require__.d(components_namespaceObject, "QCheckbox", function() { return QCheckbox; });
__webpack_require__.d(components_namespaceObject, "QChip", function() { return QChip; });
__webpack_require__.d(components_namespaceObject, "QCircularProgress", function() { return QCircularProgress; });
__webpack_require__.d(components_namespaceObject, "QColor", function() { return QColor; });
__webpack_require__.d(components_namespaceObject, "QDate", function() { return QDate; });
__webpack_require__.d(components_namespaceObject, "QTime", function() { return QTime; });
__webpack_require__.d(components_namespaceObject, "QDialog", function() { return QDialog; });
__webpack_require__.d(components_namespaceObject, "QEditor", function() { return QEditor; });
__webpack_require__.d(components_namespaceObject, "QFab", function() { return QFab; });
__webpack_require__.d(components_namespaceObject, "QFabAction", function() { return QFabAction; });
__webpack_require__.d(components_namespaceObject, "QField", function() { return QField; });
__webpack_require__.d(components_namespaceObject, "QForm", function() { return QForm; });
__webpack_require__.d(components_namespaceObject, "QIcon", function() { return QIcon["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "QImg", function() { return QImg; });
__webpack_require__.d(components_namespaceObject, "QInfiniteScroll", function() { return QInfiniteScroll; });
__webpack_require__.d(components_namespaceObject, "QInnerLoading", function() { return QInnerLoading; });
__webpack_require__.d(components_namespaceObject, "QInput", function() { return QInput; });
__webpack_require__.d(components_namespaceObject, "QKnob", function() { return QKnob; });
__webpack_require__.d(components_namespaceObject, "QLayout", function() { return QLayout; });
__webpack_require__.d(components_namespaceObject, "QDrawer", function() { return QDrawer; });
__webpack_require__.d(components_namespaceObject, "QFooter", function() { return QFooter; });
__webpack_require__.d(components_namespaceObject, "QHeader", function() { return QHeader; });
__webpack_require__.d(components_namespaceObject, "QPage", function() { return QPage; });
__webpack_require__.d(components_namespaceObject, "QPageContainer", function() { return QPageContainer; });
__webpack_require__.d(components_namespaceObject, "QPageSticky", function() { return QPageSticky; });
__webpack_require__.d(components_namespaceObject, "QList", function() { return QList; });
__webpack_require__.d(components_namespaceObject, "QItem", function() { return QItem; });
__webpack_require__.d(components_namespaceObject, "QItemSection", function() { return QItemSection; });
__webpack_require__.d(components_namespaceObject, "QItemLabel", function() { return QItemLabel; });
__webpack_require__.d(components_namespaceObject, "QExpansionItem", function() { return QExpansionItem; });
__webpack_require__.d(components_namespaceObject, "QSlideItem", function() { return QSlideItem; });
__webpack_require__.d(components_namespaceObject, "QMenu", function() { return QMenu; });
__webpack_require__.d(components_namespaceObject, "QNoSsr", function() { return QNoSsr; });
__webpack_require__.d(components_namespaceObject, "QResizeObserver", function() { return QResizeObserver; });
__webpack_require__.d(components_namespaceObject, "QScrollObserver", function() { return QScrollObserver; });
__webpack_require__.d(components_namespaceObject, "QOptionGroup", function() { return QOptionGroup; });
__webpack_require__.d(components_namespaceObject, "QPageScroller", function() { return QPageScroller; });
__webpack_require__.d(components_namespaceObject, "QPagination", function() { return QPagination; });
__webpack_require__.d(components_namespaceObject, "QParallax", function() { return QParallax; });
__webpack_require__.d(components_namespaceObject, "QPopupEdit", function() { return QPopupEdit; });
__webpack_require__.d(components_namespaceObject, "QPopupProxy", function() { return QPopupProxy; });
__webpack_require__.d(components_namespaceObject, "QLinearProgress", function() { return QLinearProgress; });
__webpack_require__.d(components_namespaceObject, "QPullToRefresh", function() { return QPullToRefresh; });
__webpack_require__.d(components_namespaceObject, "QRadio", function() { return QRadio; });
__webpack_require__.d(components_namespaceObject, "QRange", function() { return QRange; });
__webpack_require__.d(components_namespaceObject, "QRating", function() { return QRating; });
__webpack_require__.d(components_namespaceObject, "QScrollArea", function() { return QScrollArea; });
__webpack_require__.d(components_namespaceObject, "QSelect", function() { return QSelect; });
__webpack_require__.d(components_namespaceObject, "QSeparator", function() { return QSeparator; });
__webpack_require__.d(components_namespaceObject, "QSlideTransition", function() { return QSlideTransition; });
__webpack_require__.d(components_namespaceObject, "QSlider", function() { return QSlider; });
__webpack_require__.d(components_namespaceObject, "QSpace", function() { return QSpace; });
__webpack_require__.d(components_namespaceObject, "QSpinner", function() { return QSpinner["a" /* default */]; });
__webpack_require__.d(components_namespaceObject, "QSpinnerAudio", function() { return QSpinnerAudio; });
__webpack_require__.d(components_namespaceObject, "QSpinnerBall", function() { return QSpinnerBall; });
__webpack_require__.d(components_namespaceObject, "QSpinnerBars", function() { return QSpinnerBars; });
__webpack_require__.d(components_namespaceObject, "QSpinnerComment", function() { return QSpinnerComment; });
__webpack_require__.d(components_namespaceObject, "QSpinnerCube", function() { return QSpinnerCube; });
__webpack_require__.d(components_namespaceObject, "QSpinnerDots", function() { return QSpinnerDots; });
__webpack_require__.d(components_namespaceObject, "QSpinnerFacebook", function() { return QSpinnerFacebook; });
__webpack_require__.d(components_namespaceObject, "QSpinnerGears", function() { return QSpinnerGears; });
__webpack_require__.d(components_namespaceObject, "QSpinnerGrid", function() { return QSpinnerGrid; });
__webpack_require__.d(components_namespaceObject, "QSpinnerHearts", function() { return QSpinnerHearts; });
__webpack_require__.d(components_namespaceObject, "QSpinnerHourglass", function() { return QSpinnerHourglass; });
__webpack_require__.d(components_namespaceObject, "QSpinnerInfinity", function() { return QSpinnerInfinity; });
__webpack_require__.d(components_namespaceObject, "QSpinnerIos", function() { return QSpinnerIos; });
__webpack_require__.d(components_namespaceObject, "QSpinnerOval", function() { return QSpinnerOval; });
__webpack_require__.d(components_namespaceObject, "QSpinnerPie", function() { return QSpinnerPie; });
__webpack_require__.d(components_namespaceObject, "QSpinnerPuff", function() { return QSpinnerPuff; });
__webpack_require__.d(components_namespaceObject, "QSpinnerRadio", function() { return QSpinnerRadio; });
__webpack_require__.d(components_namespaceObject, "QSpinnerRings", function() { return QSpinnerRings; });
__webpack_require__.d(components_namespaceObject, "QSpinnerTail", function() { return QSpinnerTail; });
__webpack_require__.d(components_namespaceObject, "QSplitter", function() { return QSplitter; });
__webpack_require__.d(components_namespaceObject, "QStep", function() { return QStep; });
__webpack_require__.d(components_namespaceObject, "QStepper", function() { return QStepper; });
__webpack_require__.d(components_namespaceObject, "QStepperNavigation", function() { return QStepperNavigation; });
__webpack_require__.d(components_namespaceObject, "QTabPanels", function() { return QTabPanels; });
__webpack_require__.d(components_namespaceObject, "QTabPanel", function() { return QTabPanel; });
__webpack_require__.d(components_namespaceObject, "QTable", function() { return QTable; });
__webpack_require__.d(components_namespaceObject, "QTh", function() { return QTh; });
__webpack_require__.d(components_namespaceObject, "QTr", function() { return QTr; });
__webpack_require__.d(components_namespaceObject, "QTd", function() { return QTd; });
__webpack_require__.d(components_namespaceObject, "QMarkupTable", function() { return QMarkupTable; });
__webpack_require__.d(components_namespaceObject, "QTabs", function() { return QTabs; });
__webpack_require__.d(components_namespaceObject, "QTab", function() { return QTab; });
__webpack_require__.d(components_namespaceObject, "QRouteTab", function() { return QRouteTab; });
__webpack_require__.d(components_namespaceObject, "QTimeline", function() { return QTimeline; });
__webpack_require__.d(components_namespaceObject, "QTimelineEntry", function() { return QTimelineEntry; });
__webpack_require__.d(components_namespaceObject, "QToggle", function() { return QToggle; });
__webpack_require__.d(components_namespaceObject, "QToolbar", function() { return QToolbar; });
__webpack_require__.d(components_namespaceObject, "QToolbarTitle", function() { return QToolbarTitle; });
__webpack_require__.d(components_namespaceObject, "QTooltip", function() { return QTooltip; });
__webpack_require__.d(components_namespaceObject, "QTree", function() { return QTree; });
__webpack_require__.d(components_namespaceObject, "QUploader", function() { return QUploader; });
__webpack_require__.d(components_namespaceObject, "QUploaderBase", function() { return QUploaderBase; });
__webpack_require__.d(components_namespaceObject, "QUploaderAddTrigger", function() { return QUploaderAddTrigger; });
__webpack_require__.d(components_namespaceObject, "QVideo", function() { return QVideo; });
__webpack_require__.d(components_namespaceObject, "QVirtualScroll", function() { return QVirtualScroll; });
var directives_namespaceObject = {};
__webpack_require__.r(directives_namespaceObject);
__webpack_require__.d(directives_namespaceObject, "ClosePopup", function() { return ClosePopup; });
__webpack_require__.d(directives_namespaceObject, "GoBack", function() { return GoBack; });
__webpack_require__.d(directives_namespaceObject, "Ripple", function() { return Ripple["a" /* default */]; });
__webpack_require__.d(directives_namespaceObject, "ScrollFire", function() { return ScrollFire; });
__webpack_require__.d(directives_namespaceObject, "Scroll", function() { return Scroll; });
__webpack_require__.d(directives_namespaceObject, "TouchHold", function() { return TouchHold; });
__webpack_require__.d(directives_namespaceObject, "TouchPan", function() { return TouchPan; });
__webpack_require__.d(directives_namespaceObject, "TouchRepeat", function() { return TouchRepeat; });
__webpack_require__.d(directives_namespaceObject, "TouchSwipe", function() { return TouchSwipe; });
var plugins_namespaceObject = {};
__webpack_require__.r(plugins_namespaceObject);
__webpack_require__.d(plugins_namespaceObject, "AddressbarColor", function() { return AddressbarColor; });
__webpack_require__.d(plugins_namespaceObject, "AppFullscreen", function() { return AppFullscreen; });
__webpack_require__.d(plugins_namespaceObject, "AppVisibility", function() { return AppVisibility; });
__webpack_require__.d(plugins_namespaceObject, "BottomSheet", function() { return plugins_BottomSheet; });
__webpack_require__.d(plugins_namespaceObject, "Cookies", function() { return Cookies; });
__webpack_require__.d(plugins_namespaceObject, "Dialog", function() { return Dialog; });
__webpack_require__.d(plugins_namespaceObject, "LoadingBar", function() { return LoadingBar; });
__webpack_require__.d(plugins_namespaceObject, "Loading", function() { return plugins_Loading; });
__webpack_require__.d(plugins_namespaceObject, "Meta", function() { return Meta; });
__webpack_require__.d(plugins_namespaceObject, "Notify", function() { return Notify["a" /* default */]; });
__webpack_require__.d(plugins_namespaceObject, "Platform", function() { return Platform["b" /* default */]; });
__webpack_require__.d(plugins_namespaceObject, "Screen", function() { return Screen["a" /* default */]; });
__webpack_require__.d(plugins_namespaceObject, "LocalStorage", function() { return LocalStorage; });
__webpack_require__.d(plugins_namespaceObject, "SessionStorage", function() { return SessionStorage; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 6 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/format.js
var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
function humanStorageSize(bytes) {
  var u = 0;

  while (parseInt(bytes, 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }

  return "".concat(bytes.toFixed(1), " ").concat(units[u]);
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function between(v, min, max) {
  return max <= min ? min : Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }

  var size = max - min + 1;
  var index = min + (v - min) % size;

  if (index < min) {
    index = size + index;
  }

  return index === 0 ? 0 : index; // fix for (-a % a) => -0
}
function pad(v) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

  if (v === void 0 || v === null) {
    return v;
  }

  var val = '' + v;
  return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
}
/* harmony default export */ var format = ({
  humanStorageSize: humanStorageSize,
  capitalize: capitalize,
  between: between,
  normalizeToInterval: normalizeToInterval,
  pad: pad
});
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Platform.js
var Platform = __webpack_require__("0967");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/ajax-bar/QAjaxBar.js





var xhr = Platform["d" /* isSSR */] ? null : XMLHttpRequest,
    send = Platform["d" /* isSSR */] ? null : xhr.prototype.send,
    stackStart = [],
    stackStop = [];
var highjackCount = 0;

function translate(_ref) {
  var p = _ref.p,
      pos = _ref.pos,
      active = _ref.active,
      horiz = _ref.horiz,
      reverse = _ref.reverse,
      dir = _ref.dir;
  var x = 1,
      y = 1;

  if (horiz) {
    if (reverse) {
      x = -1;
    }

    if (pos === 'bottom') {
      y = -1;
    }

    return {
      transform: "translate3d(".concat(x * (p - 100), "%,").concat(active ? 0 : y * -200, "%,0)")
    };
  }

  if (reverse) {
    y = -1;
  }

  if (pos === 'right') {
    x = -1;
  }

  return {
    transform: "translate3d(".concat(active ? 0 : dir * x * -200, "%,").concat(y * (p - 100), "%,0)")
  };
}

function inc(p, amount) {
  if (typeof amount !== 'number') {
    if (p < 25) {
      amount = Math.random() * 3 + 3;
    } else if (p < 65) {
      amount = Math.random() * 3;
    } else if (p < 85) {
      amount = Math.random() * 2;
    } else if (p < 99) {
      amount = 0.6;
    } else {
      amount = 0;
    }
  }

  return between(p + amount, 0, 100);
}

function highjackAjax(start, stop) {
  stackStart.push(start);
  stackStop.push(stop);
  highjackCount++;

  if (highjackCount > 1) {
    return;
  }

  function endHandler() {
    stackStop.forEach(function (fn) {
      fn();
    });
  }

  xhr.prototype.send = function ()
  /* ...args */
  {
    stackStart.forEach(function (fn) {
      fn();
    });
    this.addEventListener('loadend', endHandler, false);
    send.apply(this, arguments);
  };
}

function restoreAjax(start, stop) {
  stackStart.splice(stackStart.indexOf(start), 1);
  stackStop.splice(stackStop.indexOf(stop), 1);
  highjackCount = Math.max(0, highjackCount - 1);

  if (!highjackCount) {
    xhr.prototype.send = send;
  }
}

/* harmony default export */ var QAjaxBar = (vue_runtime_esm["a" /* default */].extend({
  name: 'QAjaxBar',
  props: {
    position: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }
    },
    size: {
      type: String,
      default: '2px'
    },
    color: {
      type: String,
      default: 'red'
    },
    skipHijack: Boolean,
    reverse: Boolean
  },
  data: function data() {
    return {
      calls: 0,
      progress: 0,
      onScreen: false,
      animate: true
    };
  },
  computed: {
    classes: function classes() {
      return "q-loading-bar q-loading-bar--".concat(this.position, " bg-").concat(this.color) + (this.animate === true ? '' : ' no-transition');
    },
    style: function style() {
      var active = this.onScreen;
      var o = translate({
        p: this.progress,
        pos: this.position,
        active: active,
        horiz: this.horizontal,
        reverse: this.$q.lang.rtl && ['top', 'bottom'].includes(this.position) ? !this.reverse : this.reverse,
        dir: this.$q.lang.rtl ? -1 : 1
      });
      o[this.sizeProp] = this.size;
      o.opacity = active ? 1 : 0;
      return o;
    },
    horizontal: function horizontal() {
      return this.position === 'top' || this.position === 'bottom';
    },
    sizeProp: function sizeProp() {
      return this.horizontal ? 'height' : 'width';
    }
  },
  methods: {
    start: function start() {
      var _this = this;

      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
      var oldSpeed = this.speed;
      this.speed = Math.max(0, speed) || 0;
      this.calls++;

      if (this.calls > 1) {
        if (oldSpeed === 0 && speed > 0) {
          this.__work();
        } else if (oldSpeed > 0 && speed <= 0) {
          clearTimeout(this.timer);
        }

        return;
      }

      clearTimeout(this.timer);
      this.$emit('start');
      this.progress = 0;

      if (this.onScreen === true) {
        return;
      }

      this.onScreen = true;
      this.animate = false;
      this.timer = setTimeout(function () {
        _this.animate = true;
        speed > 0 && _this.__work();
      }, 100);
    },
    increment: function increment(amount) {
      this.calls > 0 && (this.progress = inc(this.progress, amount));
    },
    stop: function stop() {
      var _this2 = this;

      this.calls = Math.max(0, this.calls - 1);

      if (this.calls > 0) {
        return;
      }

      clearTimeout(this.timer);
      this.$emit('stop');

      var end = function end() {
        _this2.animate = true;
        _this2.progress = 100;
        _this2.timer = setTimeout(function () {
          _this2.onScreen = false;
        }, 1000);
      };

      if (this.progress === 0) {
        this.timer = setTimeout(end, 1);
      } else {
        end();
      }
    },
    __work: function __work() {
      var _this3 = this;

      if (this.progress < 100) {
        this.timer = setTimeout(function () {
          _this3.increment();

          _this3.__work();
        }, this.speed);
      }
    }
  },
  mounted: function mounted() {
    if (this.skipHijack !== true) {
      this.hijacked = true;
      highjackAjax(this.start, this.stop);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    this.hijacked && restoreAjax(this.start, this.stop);
  },
  render: function render(h) {
    return h('div', {
      class: this.classes,
      style: this.style
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/ajax-bar/index.js


// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/avatar/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/slot.js
var utils_slot = __webpack_require__("dde5");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/badge/QBadge.js





/* harmony default export */ var QBadge = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBadge',
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: function validator(v) {
        return ['top', 'middle', 'bottom'].includes(v);
      }
    }
  },
  computed: {
    style: function style() {
      if (this.align !== void 0) {
        return {
          verticalAlign: this.align
        };
      }
    },
    classes: function classes() {
      return 'q-badge flex inline items-center no-wrap' + " q-badge--".concat(this.multiLine === true ? 'multi' : 'single', "-line") + (this.color !== void 0 ? " bg-".concat(this.color) : '') + (this.textColor !== void 0 ? " text-".concat(this.textColor) : '') + (this.floating === true ? ' q-badge--floating' : '') + (this.transparent === true ? ' q-badge--transparent' : '');
    }
  },
  render: function render(h) {
    return h('div', {
      style: this.style,
      class: this.classes,
      on: this.$listeners
    }, this.label !== void 0 ? [this.label] : Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/badge/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/banner/QBanner.js


/* harmony default export */ var QBanner = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBanner',
  props: {
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  render: function render(h) {
    var actions = Object(utils_slot["a" /* default */])(this, 'action');
    return h('div', {
      staticClass: 'q-banner row items-center',
      class: {
        'q-banner--top-padding': actions !== void 0 && !this.inlineActions,
        'q-banner--dense': this.dense,
        'rounded-borders': this.rounded
      },
      on: this.$listeners
    }, [h('div', {
      staticClass: 'q-banner__avatar col-auto row items-center'
    }, Object(utils_slot["a" /* default */])(this, 'avatar')), h('div', {
      staticClass: 'q-banner__content col text-body2'
    }, Object(utils_slot["a" /* default */])(this, 'default')), actions !== void 0 ? h('div', {
      staticClass: 'q-banner__actions row items-center justify-end',
      class: this.inlineActions ? 'col-auto' : 'col-all'
    }, actions) : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/banner/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/bar/QBar.js


/* harmony default export */ var QBar = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBar',
  props: {
    dense: Boolean,
    dark: Boolean
  },
  computed: {
    classes: function classes() {
      return "q-bar--".concat(this.dense ? 'dense' : 'standard', " q-bar--").concat(this.dark ? 'dark' : 'light');
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-bar row no-wrap items-center',
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/bar/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("aef6");

// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/align.js
var align = __webpack_require__("99b6");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbs.js






/* harmony default export */ var QBreadcrumbs = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBreadcrumbs',
  mixins: [align["a" /* default */]],
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorColor: String,
    activeColor: {
      type: String,
      default: 'primary'
    },
    gutter: {
      type: String,
      validator: function validator(v) {
        return ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(v);
      },
      default: 'sm'
    }
  },
  computed: {
    classes: function classes() {
      return "".concat(this.alignClass).concat(this.gutter === 'none' ? '' : " q-gutter-".concat(this.gutter));
    },
    sepClass: function sepClass() {
      if (this.separatorColor) {
        return "text-".concat(this.separatorColor);
      }
    },
    activeClass: function activeClass() {
      return "text-".concat(this.activeColor);
    }
  },
  render: function render(h) {
    var _this = this;

    var nodes = Object(utils_slot["a" /* default */])(this, 'default');

    if (nodes === void 0) {
      return;
    }

    var els = 1;

    var child = [],
        len = nodes.filter(function (c) {
      return c.tag !== void 0 && c.tag.endsWith('-QBreadcrumbsEl');
    }).length,
        separator = this.$scopedSlots.separator || function () {
      return _this.separator;
    };

    nodes.forEach(function (comp) {
      if (comp.tag !== void 0 && comp.tag.endsWith('-QBreadcrumbsEl')) {
        var middle = els < len;
        els++;
        child.push(h('div', {
          staticClass: 'flex items-center',
          class: middle ? _this.activeClass : 'q-breadcrumbs--last'
        }, [comp]));

        if (middle) {
          child.push(h('div', {
            staticClass: 'q-breadcrumbs__separator',
            class: _this.sepClass
          }, separator()));
        }
      } else {
        child.push(comp);
      }
    });
    return h('div', {
      staticClass: 'q-breadcrumbs',
      on: this.$listeners
    }, [h('div', {
      staticClass: 'flex items-center',
      class: this.classes
    }, child)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/router-link.js

var routerLinkProps = {
  to: [String, Object],
  exact: Boolean,
  append: Boolean,
  replace: Boolean,
  activeClass: String,
  exactActiveClass: String,
  disable: Boolean
};
var RouterLinkMixin = {
  props: routerLinkProps,
  computed: {
    hasRouterLink: function hasRouterLink() {
      return this.disable !== true && this.to !== void 0 && this.to !== null && this.to !== '';
    },
    routerLinkProps: function routerLinkProps() {
      return {
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        activeClass: this.activeClass || 'q-router-link--active',
        exactActiveClass: this.exactActiveClass || 'q-router-link--exact-active',
        event: this.disable === true ? '' : void 0
      };
    }
  }
};
// CONCATENATED MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbsEl.js





/* harmony default export */ var QBreadcrumbsEl = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBreadcrumbsEl',
  mixins: [RouterLinkMixin],
  props: {
    label: String,
    icon: String
  },
  render: function render(h) {
    return h(this.hasRouterLink === true ? 'router-link' : 'span', defineProperty_default()({
      staticClass: 'q-breadcrumbs__el q-link flex inline items-center relative-position',
      props: this.hasRouterLink === true ? this.routerLinkProps : null
    }, this.hasRouterLink === true ? 'nativeOn' : 'on', this.$listeners), [this.icon !== void 0 ? h(QIcon["a" /* default */], {
      staticClass: 'q-breadcrumbs__el-icon',
      class: this.label !== void 0 ? 'q-breadcrumbs__el-icon--with-label' : null,
      props: {
        name: this.icon
      }
    }) : null, this.label].concat(Object(utils_slot["a" /* default */])(this, 'default')));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/breadcrumbs/index.js



// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/btn/QBtnGroup.js


/* harmony default export */ var QBtnGroup = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBtnGroup',
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  computed: {
    classes: function classes() {
      var _this = this;

      return ['unelevated', 'outline', 'flat', 'rounded', 'push', 'stretch', 'glossy'].filter(function (t) {
        return _this[t] === true;
      }).map(function (t) {
        return "q-btn-group--".concat(t);
      }).join(' ');
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-btn-group row no-wrap ' + (this.spread === true ? 'q-btn-group--spread' : 'inline'),
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/btn-mixin.js
var btn_mixin = __webpack_require__("628b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.anchor.js
var es6_string_anchor = __webpack_require__("8449");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/selection.js

function clearSelection() {
  if (window.getSelection !== void 0) {
    var selection = window.getSelection();

    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform["b" /* default */].is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/event.js
var utils_event = __webpack_require__("d882");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/anchor.js


var passive = utils_event["e" /* listenOpts */].passive,
    notPassive = utils_event["e" /* listenOpts */].notPassive;
/* harmony default export */ var mixins_anchor = ({
  props: {
    target: {
      type: [Boolean, String],
      default: true
    },
    noParentEvent: Boolean,
    contextMenu: Boolean
  },
  watch: {
    contextMenu: function contextMenu(val) {
      if (this.anchorEl !== void 0) {
        this.__unconfigureAnchorEl(!val);

        this.__configureAnchorEl(val);
      }
    },
    target: function target() {
      if (this.anchorEl !== void 0) {
        this.__unconfigureAnchorEl();
      }

      this.__pickAnchorEl();
    },
    noParentEvent: function noParentEvent(val) {
      if (this.anchorEl !== void 0) {
        if (val === true) {
          this.__unconfigureAnchorEl();
        } else {
          this.__configureAnchorEl();
        }
      }
    }
  },
  methods: {
    __showCondition: function __showCondition(evt) {
      // abort with no parent configured or on multi-touch
      if (this.anchorEl === void 0) {
        return false;
      }

      if (evt === void 0) {
        return true;
      }

      return evt.touches === void 0 || evt.touches.length <= 1;
    },
    __contextClick: function __contextClick(evt) {
      var _this = this;

      this.hide(evt);
      this.$nextTick(function () {
        _this.show(evt);
      });
      Object(utils_event["g" /* prevent */])(evt);
    },
    __toggleKey: function __toggleKey(evt) {
      if (evt !== void 0 && evt.keyCode === 13 && evt.qKeyEvent !== true) {
        this.toggle(evt);
      }
    },
    __mobileTouch: function __mobileTouch(evt) {
      var _this2 = this;

      this.__mobileCleanup(evt);

      if (this.__showCondition(evt) !== true) {
        return;
      }

      this.hide(evt);
      this.anchorEl.classList.add('non-selectable');
      this.touchTimer = setTimeout(function () {
        _this2.show(evt);
      }, 300);
    },
    __mobileCleanup: function __mobileCleanup(evt) {
      this.anchorEl.classList.remove('non-selectable');
      clearTimeout(this.touchTimer);

      if (this.showing === true && evt !== void 0) {
        clearSelection();
      }
    },
    __unconfigureAnchorEl: function __unconfigureAnchorEl() {
      var _this3 = this;

      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.contextMenu;

      if (this.anchorEl === void 0) {
        return;
      }

      if (context === true) {
        if (this.$q.platform.is.mobile === true) {
          this.anchorEl.removeEventListener('touchstart', this.__mobileTouch, passive);
          ['touchcancel', 'touchmove', 'touchend'].forEach(function (evt) {
            _this3.anchorEl.removeEventListener(evt, _this3.__mobileCleanup, passive);
          });
        } else {
          this.anchorEl.removeEventListener('click', this.hide, passive);
          this.anchorEl.removeEventListener('contextmenu', this.__contextClick, notPassive);
        }
      } else {
        this.anchorEl.removeEventListener('click', this.toggle, passive);
        this.anchorEl.removeEventListener('keyup', this.__toggleKey, passive);
      }
    },
    __configureAnchorEl: function __configureAnchorEl() {
      var _this4 = this;

      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.contextMenu;

      if (this.noParentEvent === true || this.anchorEl === void 0) {
        return;
      }

      if (context === true) {
        if (this.$q.platform.is.mobile === true) {
          this.anchorEl.addEventListener('touchstart', this.__mobileTouch, passive);
          ['touchcancel', 'touchmove', 'touchend'].forEach(function (evt) {
            _this4.anchorEl.addEventListener(evt, _this4.__mobileCleanup, passive);
          });
        } else {
          this.anchorEl.addEventListener('click', this.hide, passive);
          this.anchorEl.addEventListener('contextmenu', this.__contextClick, notPassive);
        }
      } else {
        this.anchorEl.addEventListener('click', this.toggle, passive);
        this.anchorEl.addEventListener('keyup', this.__toggleKey, passive);
      }
    },
    __setAnchorEl: function __setAnchorEl(el) {
      this.anchorEl = el;

      while (this.anchorEl.classList.contains('q-anchor--skip')) {
        this.anchorEl = this.anchorEl.parentNode;
      }

      this.__configureAnchorEl();
    },
    __pickAnchorEl: function __pickAnchorEl() {
      if (this.target && typeof this.target === 'string') {
        var el = document.querySelector(this.target);

        if (el !== null) {
          this.anchorEl = el;

          this.__configureAnchorEl();
        } else {
          this.anchorEl = void 0;
          console.error("Anchor: target \"".concat(this.target, "\" not found"), this);
        }
      } else if (this.target !== false) {
        this.__setAnchorEl(this.parentEl);
      } else {
        this.anchorEl = void 0;
      }
    }
  },
  created: function created() {
    var _this5 = this;

    if (typeof this.__configureScrollTarget === 'function' && typeof this.__unconfigureScrollTarget === 'function') {
      this.noParentEventWatcher = this.$watch('noParentEvent', function () {
        if (_this5.scrollTarget !== void 0) {
          _this5.__unconfigureScrollTarget();

          _this5.__configureScrollTarget();
        }
      });
    }
  },
  mounted: function mounted() {
    this.parentEl = this.$el.parentNode;

    this.__pickAnchorEl();

    if (this.value === true && this.anchorEl === void 0) {
      this.$emit('input', false);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.touchTimer);
    this.noParentEventWatcher !== void 0 && this.noParentEventWatcher();
    this.__anchorCleanup !== void 0 && this.__anchorCleanup();

    if (this.anchorEl !== void 0) {
      this.__unconfigureAnchorEl();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/timeout.js
/* harmony default export */ var timeout = ({
  methods: {
    __nextTick: function __nextTick(fn) {
      this.__tickFn = fn;
    },
    __prepareTick: function __prepareTick() {
      var _this = this;

      if (this.__tickFn !== void 0) {
        var fn = this.__tickFn;
        this.$nextTick(function () {
          if (_this.__tickFn === fn) {
            _this.__tickFn();

            _this.__tickFn = void 0;
          }
        });
      }
    },
    __clearTick: function __clearTick() {
      this.__tickFn = void 0;
    },
    __setTimeout: function __setTimeout(fn, delay) {
      clearTimeout(this.__timer);
      this.__timer = setTimeout(fn, delay);
    },
    __clearTimeout: function __clearTimeout() {
      clearTimeout(this.__timer);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.__tickFn = void 0;
    clearTimeout(this.__timer);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/model-toggle.js


/* harmony default export */ var model_toggle = ({
  mixins: [timeout],
  props: {
    value: {
      type: Boolean,
      default: void 0
    }
  },
  data: function data() {
    return {
      showing: false
    };
  },
  watch: {
    value: function value(val) {
      this.__processModelChange(val);
    },
    $route: function $route() {
      this.hideOnRouteChange === true && this.hide();
    }
  },
  methods: {
    toggle: function toggle(evt) {
      this[this.showing === true ? 'hide' : 'show'](evt);
    },
    show: function show(evt) {
      var _this = this;

      if (this.disable === true || this.__showCondition !== void 0 && this.__showCondition(evt) !== true) {
        return;
      }

      if (this.$listeners.input !== void 0 && Platform["d" /* isSSR */] === false) {
        this.$emit('input', true);
        this.payload = evt;
        this.$nextTick(function () {
          if (_this.payload === evt) {
            _this.payload = void 0;
          }
        });
      }

      if (this.value === void 0 || this.$listeners.input === void 0 || Platform["d" /* isSSR */] === true) {
        this.__processShow(evt);
      }
    },
    __processShow: function __processShow(evt) {
      if (this.showing === true) {
        return;
      } // need to call it before setting showing to true
      // in order to not ruin the animation


      this.__preparePortal !== void 0 && this.__preparePortal();
      this.showing = true;
      this.$emit('before-show', evt);

      if (this.__show !== void 0) {
        this.__clearTick();

        this.__show(evt);

        this.__prepareTick();
      } else {
        this.$emit('show', evt);
      }
    },
    hide: function hide(evt) {
      var _this2 = this;

      if (this.disable === true) {
        return;
      }

      if (this.$listeners.input !== void 0 && Platform["d" /* isSSR */] === false) {
        this.$emit('input', false);
        this.payload = evt;
        this.$nextTick(function () {
          if (_this2.payload === evt) {
            _this2.payload = void 0;
          }
        });
      }

      if (this.value === void 0 || this.$listeners.input === void 0 || Platform["d" /* isSSR */] === true) {
        this.__processHide(evt);
      }
    },
    __processHide: function __processHide(evt) {
      if (this.showing === false) {
        return;
      }

      this.showing = false;
      this.$emit('before-hide', evt);

      if (this.__hide !== void 0) {
        this.__clearTick();

        this.__hide(evt);

        this.__prepareTick();
      } else {
        this.$emit('hide', evt);
      }
    },
    __processModelChange: function __processModelChange(val) {
      if (this.disable === true && val === true) {
        this.$listeners.input !== void 0 && this.$emit('input', false);
      } else if (val === true !== this.showing) {
        this["__process".concat(val === true ? 'Show' : 'Hide')](this.payload);
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/portal.js


function closePortalMenus(vm, evt) {
  do {
    if (vm.$options.name === 'QMenu') {
      vm.hide(evt); // is this a point of separation?

      if (vm.separateClosePopup === true) {
        return vm.$parent;
      }
    } else if (vm.__renderPortal !== void 0) {
      // treat it as point of separation if parent is QPopupProxy
      // (so mobile matches desktop behavior)
      // and hide it too
      if (vm.$parent !== void 0 && vm.$parent.$options.name === 'QPopupProxy') {
        vm.hide(evt);
        return vm.$parent;
      } else {
        return vm;
      }
    }

    vm = vm.$parent;
  } while (vm !== void 0);
}
function closePortals(vm, evt, depth) {
  while (depth !== 0 && vm !== void 0) {
    if (vm.__renderPortal !== void 0) {
      depth--;

      if (vm.$options.name === 'QMenu') {
        vm = closePortalMenus(vm, evt);
        continue;
      }

      vm.hide(evt);
    }

    vm = vm.$parent;
  }
}
/* harmony default export */ var portal = ({
  inheritAttrs: false,
  props: {
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object]
  },
  methods: {
    __showPortal: function __showPortal() {
      if (this.__portal !== void 0) {
        document.body.appendChild(this.__portal.$el);
      }
    },
    __hidePortal: function __hidePortal() {
      if (this.__portal !== void 0) {
        this.__portal.$destroy();

        this.__portal.$el.remove();

        this.__portal = void 0;
      }
    },
    __preparePortal: function __preparePortal() {
      var _this = this;

      if (this.__portal === void 0) {
        this.__portal = new vue_runtime_esm["a" /* default */]({
          name: 'QPortal',
          parent: this,
          inheritAttrs: false,
          render: function render(h) {
            return _this.__renderPortal(h);
          },
          components: this.$options.components,
          directives: this.$options.directives
        }).$mount();
      }
    }
  },
  render: function render() {
    this.__portal !== void 0 && this.__portal.$forceUpdate();
  },
  beforeDestroy: function beforeDestroy() {
    this.__hidePortal();
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/transition.js
/* harmony default export */ var transition = ({
  props: {
    transitionShow: {
      type: String,
      default: 'fade'
    },
    transitionHide: {
      type: String,
      default: 'fade'
    }
  },
  data: function data() {
    return {
      transitionState: this.showing
    };
  },
  watch: {
    showing: function showing(val) {
      var _this = this;

      this.transitionShow !== this.transitionHide && this.$nextTick(function () {
        _this.transitionState = val;
      });
    }
  },
  computed: {
    transition: function transition() {
      return 'q-transition--' + (this.transitionState === true ? this.transitionHide : this.transitionShow);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/vm.js
function getAllChildren(vm) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  vm.$children.forEach(function (child) {
    children.push(child);
    child.$children.length > 0 && getAllChildren(child, children);
  });
  return children;
}
function getVmOfNode(el) {
  for (var node = el; node !== null; node = node.parentNode) {
    // node.__vue__ can be null if the instance was destroyed
    if (node.__vue__ === null) {
      return;
    }

    if (node.__vue__ !== void 0) {
      return node.__vue__;
    }
  }
}
function isVmChildOf(childVm, parentVm) {
  for (var vm = childVm; vm !== void 0; vm = vm.$parent) {
    if (vm === parentVm) {
      return true;
    }
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/menu/ClickOutside.js



var timer;
var notPassiveCapture = utils_event["e" /* listenOpts */].notPassiveCapture,
    passiveCapture = utils_event["e" /* listenOpts */].passiveCapture,
    handlers = {
  click: [],
  focus: []
};

function execHandlers(list, evt) {
  for (var i = list.length - 1; i >= 0; i--) {
    if (list[i](evt) === void 0) {
      return;
    }
  }
}

function globalHandler(evt) {
  clearTimeout(timer);

  if (evt.type === 'focusin') {
    timer = setTimeout(function () {
      execHandlers(handlers.focus, evt);
    }, 200);
  } else {
    execHandlers(handlers.click, evt);
  }
}

/* harmony default export */ var ClickOutside = ({
  name: 'click-outside',
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value,
        arg = _ref.arg;
    var vmEl = vnode.componentInstance || vnode.context;
    var ctx = {
      trigger: value,
      toggleEl: arg,
      handler: function handler(evt) {
        var target = evt.target;

        if (target !== void 0 && target.nodeType !== 8 && // directives that prevent click by using pointer-events none generate click on html element
        target !== document.documentElement && (ctx.toggleEl === void 0 || ctx.toggleEl.contains(target) === false) && (target === document.body || isVmChildOf(getVmOfNode(target), vmEl) === false)) {
          // mark the event as beeing processed by clickOutside
          // used to prevent refocus after menu close
          evt.qClickOutside = true;
          return ctx.trigger(evt);
        }
      }
    };

    if (el.__qclickoutside) {
      el.__qclickoutside_old = el.__qclickoutside;
    }

    el.__qclickoutside = ctx;

    if (handlers.click.length === 0) {
      // use click to be able to prevent click in handler
      document.addEventListener('click', globalHandler, notPassiveCapture);
      document.addEventListener('touchstart', globalHandler, notPassiveCapture);
      document.addEventListener('focusin', globalHandler, passiveCapture);
    }

    handlers.click.push(ctx.handler);
    ctx.timerFocusin = setTimeout(function () {
      handlers.focus.push(ctx.handler);
    }, 500);
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        arg = _ref2.arg;
    var ctx = el.__qclickoutside;

    if (value !== oldValue) {
      ctx.trigger = value;
    }

    if (arg !== ctx.arg) {
      ctx.toggleEl = arg;
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qclickoutside_old || el.__qclickoutside;

    if (ctx !== void 0) {
      clearTimeout(ctx.timerFocusin);
      var indexClick = handlers.click.findIndex(function (h) {
        return h === ctx.handler;
      }),
          indexFocus = handlers.focus.findIndex(function (h) {
        return h === ctx.handler;
      });
      indexClick > -1 && handlers.click.splice(indexClick, 1);
      indexFocus > -1 && handlers.focus.splice(indexFocus, 1);

      if (handlers.click.length === 0) {
        clearTimeout(timer);
        document.removeEventListener('click', globalHandler, notPassiveCapture);
        document.removeEventListener('touchstart', globalHandler, notPassiveCapture);
        document.removeEventListener('focusin', globalHandler, passiveCapture);
      }

      delete el[el.__qclickoutside_old ? '__qclickoutside_old' : '__qclickoutside'];
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/dom.js
var dom = __webpack_require__("f303");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/scroll.js



function getScrollTarget(el) {
  return el.closest('.scroll,.scroll-y,.overflow-auto') || window;
}
function getScrollHeight(el) {
  return (el === window ? document.body : el).scrollHeight;
}
function getScrollWidth(el) {
  return (el === window ? document.body : el).scrollWidth;
}
function getScrollPosition(scrollTarget) {
  if (scrollTarget === window) {
    return window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
  }

  return scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  if (scrollTarget === window) {
    return window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
  }

  return scrollTarget.scrollLeft;
}
function animScrollTo(el, to, duration) {
  var pos = getScrollPosition(el);

  if (duration <= 0) {
    if (pos !== to) {
      setScroll(el, to);
    }

    return;
  }

  requestAnimationFrame(function () {
    var newPos = pos + (to - pos) / Math.max(16, duration) * 16;
    setScroll(el, newPos);

    if (newPos !== to) {
      animScrollTo(el, to, duration - 16);
    }
  });
}
function animHorizontalScrollTo(el, to, duration) {
  var pos = getHorizontalScrollPosition(el);

  if (duration <= 0) {
    if (pos !== to) {
      setHorizontalScroll(el, to);
    }

    return;
  }

  requestAnimationFrame(function () {
    var newPos = pos + (to - pos) / Math.max(16, duration) * 16;
    setHorizontalScroll(el, newPos);

    if (newPos !== to) {
      animHorizontalScrollTo(el, to, duration - 16);
    }
  });
}

function setScroll(scrollTarget, offset) {
  if (scrollTarget === window) {
    window.scrollTo(0, offset);
    return;
  }

  scrollTarget.scrollTop = offset;
}

function setHorizontalScroll(scrollTarget, offset) {
  if (scrollTarget === window) {
    window.scrollTo(offset, 0);
    return;
  }

  scrollTarget.scrollLeft = offset;
}

function scroll_setScrollPosition(scrollTarget, offset, duration) {
  if (duration) {
    animScrollTo(scrollTarget, offset, duration);
    return;
  }

  setScroll(scrollTarget, offset);
}
function setHorizontalScrollPosition(scrollTarget, offset, duration) {
  if (duration) {
    animHorizontalScrollTo(scrollTarget, offset, duration);
    return;
  }

  setHorizontalScroll(scrollTarget, offset);
}
var size;
function getScrollbarWidth() {
  if (size !== undefined) {
    return size;
  }

  var inner = document.createElement('p'),
      outer = document.createElement('div');
  Object(dom["b" /* css */])(inner, {
    width: '100%',
    height: '200px'
  });
  Object(dom["b" /* css */])(outer, {
    position: 'absolute',
    top: '0px',
    left: '0px',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  outer.remove();
  size = w1 - w2;
  return size;
}
function hasScrollbar(el) {
  var onY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }

  return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains('scroll') || el.classList.contains('overflow-auto') || ['auto', 'scroll'].includes(window.getComputedStyle(el)['overflow-y'])) : el.scrollWidth > el.clientWidth && (el.classList.contains('scroll') || el.classList.contains('overflow-auto') || ['auto', 'scroll'].includes(window.getComputedStyle(el)['overflow-x']));
}
/* harmony default export */ var utils_scroll = ({
  getScrollTarget: getScrollTarget,
  getScrollHeight: getScrollHeight,
  getScrollWidth: getScrollWidth,
  getScrollPosition: getScrollPosition,
  getHorizontalScrollPosition: getHorizontalScrollPosition,
  animScrollTo: animScrollTo,
  animHorizontalScrollTo: animHorizontalScrollTo,
  setScrollPosition: scroll_setScrollPosition,
  setHorizontalScrollPosition: setHorizontalScrollPosition,
  getScrollbarWidth: getScrollbarWidth,
  hasScrollbar: hasScrollbar
});
// CONCATENATED MODULE: ./node_modules/quasar/src/utils/escape-key.js


var escape_key_handlers = [];
/* harmony default export */ var escape_key = ({
  __install: function __install() {
    this.__installed = true;
    window.addEventListener('keyup', function (evt) {
      if (escape_key_handlers.length !== 0 && (evt.which === 27 || evt.keyCode === 27)) {
        escape_key_handlers[escape_key_handlers.length - 1].fn(evt);
      }
    });
  },
  register: function register(comp, fn) {
    if (Platform["b" /* default */].is.desktop === true) {
      this.__installed !== true && this.__install();
      escape_key_handlers.push({
        comp: comp,
        fn: fn
      });
    }
  },
  pop: function pop(comp) {
    if (Platform["b" /* default */].is.desktop === true) {
      var index = escape_key_handlers.findIndex(function (h) {
        return h.comp === comp;
      });

      if (index > -1) {
        escape_key_handlers.splice(index, 1);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/utils/position-engine.js




function validatePosition(pos) {
  var parts = pos.split(' ');

  if (parts.length !== 2) {
    return false;
  }

  if (!['top', 'center', 'bottom'].includes(parts[0])) {
    console.error('Anchor/Self position must start with one of top/center/bottom');
    return false;
  }

  if (!['left', 'middle', 'right'].includes(parts[1])) {
    console.error('Anchor/Self position must end with one of left/middle/right');
    return false;
  }

  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }

  if (val.length !== 2) {
    return false;
  }

  if (typeof val[0] !== 'number' || typeof val[1] !== 'number') {
    return false;
  }

  return true;
}
function parsePosition(pos) {
  var parts = pos.split(' ');
  return {
    vertical: parts[0],
    horizontal: parts[1]
  };
}
function validateCover(val) {
  if (val === true || val === false) {
    return true;
  }

  return validatePosition(val);
}
function getAnchorProps(el, offset) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left,
      right = _el$getBoundingClient.right,
      bottom = _el$getBoundingClient.bottom,
      width = _el$getBoundingClient.width,
      height = _el$getBoundingClient.height;

  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width += offset[0];
    height += offset[1];
  }

  return {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    width: width,
    height: height,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getTargetProps(el) {
  return {
    top: 0,
    center: el.offsetHeight / 2,
    bottom: el.offsetHeight,
    left: 0,
    middle: el.offsetWidth / 2,
    right: el.offsetWidth
  };
} // cfg: { el, anchorEl, anchorOrigin, selfOrigin, offset, absoluteOffset, cover, fit, maxHeight, maxWidth }

function setPosition(cfg) {
  var anchorProps; // scroll position might change
  // if max-height changes, so we
  // need to restore it after we calculate
  // the new positioning

  var scrollTop = cfg.el.scrollTop;
  cfg.el.style.maxHeight = cfg.maxHeight;
  cfg.el.style.maxWidth = cfg.maxWidth;

  if (cfg.absoluteOffset === void 0) {
    anchorProps = getAnchorProps(cfg.anchorEl, cfg.cover === true ? [0, 0] : cfg.offset);
  } else {
    var _cfg$anchorEl$getBoun = cfg.anchorEl.getBoundingClientRect(),
        anchorTop = _cfg$anchorEl$getBoun.top,
        anchorLeft = _cfg$anchorEl$getBoun.left,
        top = anchorTop + cfg.absoluteOffset.top,
        left = anchorLeft + cfg.absoluteOffset.left;

    anchorProps = {
      top: top,
      left: left,
      width: 1,
      height: 1,
      right: left + 1,
      center: top,
      middle: left,
      bottom: top + 1
    };
  }

  if (cfg.fit === true || cfg.cover === true) {
    cfg.el.style.minWidth = anchorProps.width + 'px';

    if (cfg.cover === true) {
      cfg.el.style.minHeight = anchorProps.height + 'px';
    }
  }

  var targetProps = getTargetProps(cfg.el),
      props = {
    top: anchorProps[cfg.anchorOrigin.vertical] - targetProps[cfg.selfOrigin.vertical],
    left: anchorProps[cfg.anchorOrigin.horizontal] - targetProps[cfg.selfOrigin.horizontal]
  };
  applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
  cfg.el.style.top = Math.max(0, Math.floor(props.top)) + 'px';
  cfg.el.style.left = Math.max(0, Math.floor(props.left)) + 'px';

  if (props.maxHeight !== void 0) {
    cfg.el.style.maxHeight = Math.floor(props.maxHeight) + 'px';
  }

  if (props.maxWidth !== void 0) {
    cfg.el.style.maxWidth = Math.floor(props.maxWidth) + 'px';
  } // restore scroll position


  if (cfg.el.scrollTop !== scrollTop) {
    cfg.el.scrollTop = scrollTop;
  }
}

function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  var margin = getScrollbarWidth();
  var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth; // don't go bellow scrollbars

  innerHeight -= margin;
  innerWidth -= margin;

  if (props.top < 0 || props.top + targetProps.bottom > innerHeight) {
    if (selfOrigin.vertical === 'center') {
      props.top = anchorProps[selfOrigin.vertical] > innerHeight / 2 ? innerHeight - targetProps.bottom : 0;
      props.maxHeight = Math.min(targetProps.bottom, innerHeight);
    } else if (anchorProps[selfOrigin.vertical] > innerHeight / 2) {
      var anchorY = Math.min(innerHeight, anchorOrigin.vertical === 'center' ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top);
      props.maxHeight = Math.min(targetProps.bottom, anchorY);
      props.top = Math.max(0, anchorY - props.maxHeight);
    } else {
      props.top = anchorOrigin.vertical === 'center' ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom;
      props.maxHeight = Math.min(targetProps.bottom, innerHeight - props.top);
    }
  }

  if (props.left < 0 || props.left + targetProps.right > innerWidth) {
    props.maxWidth = Math.min(targetProps.right, innerWidth);

    if (selfOrigin.horizontal === 'middle') {
      props.left = anchorProps[selfOrigin.horizontal] > innerWidth / 2 ? innerWidth - targetProps.right : 0;
    } else if (anchorProps[selfOrigin.horizontal] > innerWidth / 2) {
      var anchorX = Math.min(innerWidth, anchorOrigin.horizontal === 'middle' ? anchorProps.center : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left);
      props.maxWidth = Math.min(targetProps.right, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = anchorOrigin.horizontal === 'middle' ? anchorProps.center : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right;
      props.maxWidth = Math.min(targetProps.right, innerWidth - props.left);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/menu/QMenu.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












/* harmony default export */ var QMenu = (vue_runtime_esm["a" /* default */].extend({
  name: 'QMenu',
  mixins: [mixins_anchor, model_toggle, portal, transition],
  directives: {
    ClickOutside: ClickOutside
  },
  props: {
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  computed: {
    horizSide: function horizSide() {
      return this.$q.lang.rtl ? 'right' : 'left';
    },
    anchorOrigin: function anchorOrigin() {
      return parsePosition(this.anchor || (this.cover === true ? "center middle" : "bottom ".concat(this.horizSide)));
    },
    selfOrigin: function selfOrigin() {
      return this.cover === true ? this.anchorOrigin : parsePosition(this.self || "top ".concat(this.horizSide));
    },
    menuClass: function menuClass() {
      return this.square === true ? ' q-menu--square' : '';
    },
    hideOnRouteChange: function hideOnRouteChange() {
      return this.persistent !== true;
    }
  },
  methods: {
    focus: function focus() {
      var node = this.__portal !== void 0 && this.__portal.$refs !== void 0 ? this.__portal.$refs.inner : void 0;

      if (node !== void 0 && node.contains(document.activeElement) !== true) {
        node = node.querySelector('[autofocus]') || node;
        node.focus();
      }
    },
    __show: function __show(evt) {
      var _this = this;

      // IE can have null document.activeElement
      this.__refocusTarget = this.noRefocus === false && document.activeElement !== null ? document.activeElement : void 0;
      escape_key.register(this, function () {
        if (_this.persistent !== true) {
          _this.$emit('escape-key');

          _this.hide();
        }
      });

      this.__showPortal();

      this.__configureScrollTarget();

      this.absoluteOffset = void 0;

      if (evt !== void 0 && (this.touchPosition || this.contextMenu)) {
        var pos = Object(utils_event["f" /* position */])(evt);

        if (pos.left !== void 0) {
          var _this$anchorEl$getBou = this.anchorEl.getBoundingClientRect(),
              top = _this$anchorEl$getBou.top,
              left = _this$anchorEl$getBou.left;

          this.absoluteOffset = {
            left: pos.left - left,
            top: pos.top - top
          };
        }
      }

      if (this.unwatch === void 0) {
        this.unwatch = this.$watch('$q.screen.width', this.updatePosition);
      }

      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-show', {
        bubbles: true
      })); // IE can have null document.activeElement

      if (this.noFocus !== true && document.activeElement !== null) {
        document.activeElement.blur();
      }

      this.__nextTick(function () {
        _this.updatePosition();

        _this.noFocus !== true && _this.focus();
      });

      this.__setTimeout(function () {
        _this.$emit('show', evt);
      }, 300);
    },
    __hide: function __hide(evt) {
      var _this2 = this;

      this.__anchorCleanup(true); // check null for IE


      if (this.__refocusTarget !== void 0 && this.__refocusTarget !== null && ( // menu was hidden from code or ESC plugin
      evt === void 0 || // menu was not closed from a mouse or touch clickOutside
      evt.qClickOutside !== true)) {
        this.__refocusTarget.focus();
      }

      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-hide', {
        bubbles: true
      }));

      this.__setTimeout(function () {
        _this2.__hidePortal();

        _this2.$emit('hide', evt);
      }, 300);
    },
    __anchorCleanup: function __anchorCleanup(hiding) {
      this.absoluteOffset = void 0;

      if (this.unwatch !== void 0) {
        this.unwatch();
        this.unwatch = void 0;
      }

      if (hiding === true || this.showing === true) {
        escape_key.pop(this);

        this.__unconfigureScrollTarget();
      }
    },
    __unconfigureScrollTarget: function __unconfigureScrollTarget() {
      if (this.scrollTarget !== void 0) {
        this.scrollTarget.removeEventListener('scroll', this.updatePosition, utils_event["e" /* listenOpts */].passive);
      }

      window.removeEventListener('scroll', this.updatePosition, utils_event["e" /* listenOpts */].passive);
    },
    __configureScrollTarget: function __configureScrollTarget() {
      if (this.anchorEl !== void 0) {
        this.scrollTarget = getScrollTarget(this.anchorEl);
        this.scrollTarget.addEventListener('scroll', this.updatePosition, utils_event["e" /* listenOpts */].passive);

        if (this.scrollTarget !== window) {
          window.addEventListener('scroll', this.updatePosition, utils_event["e" /* listenOpts */].passive);
        }
      }
    },
    __onAutoClose: function __onAutoClose(e) {
      closePortalMenus(this, e);
      this.$listeners.click !== void 0 && this.$emit('click', e);
    },
    updatePosition: function updatePosition() {
      if (this.__portal === void 0) {
        return;
      }

      var el = this.__portal.$el;

      if (el.nodeType === 8) {
        // IE replaces the comment with delay
        setTimeout(this.updatePosition, 25);
        return;
      }

      setPosition({
        el: el,
        offset: this.offset,
        anchorEl: this.anchorEl,
        anchorOrigin: this.anchorOrigin,
        selfOrigin: this.selfOrigin,
        absoluteOffset: this.absoluteOffset,
        fit: this.fit,
        cover: this.cover,
        maxHeight: this.maxHeight,
        maxWidth: this.maxWidth
      });
    },
    __onClickOutside: function __onClickOutside(e) {
      if (this.persistent !== true && this.showing === true) {
        var targetClassList = e.target.classList;
        this.hide(e);

        if ( // always prevent touch event
        e.type === 'touchstart' || // prevent click if it's on a dialog backdrop
        targetClassList.contains('q-dialog__backdrop')) {
          Object(utils_event["j" /* stopAndPrevent */])(e);
        }

        return true;
      }
    },
    __renderPortal: function __renderPortal(h) {
      var on = _objectSpread({}, this.$listeners, {
        // stop propagating these events from children
        input: utils_event["i" /* stop */],
        'popup-show': utils_event["i" /* stop */],
        'popup-hide': utils_event["i" /* stop */]
      });

      if (this.autoClose === true) {
        on.click = this.__onAutoClose;
      }

      return h('transition', {
        props: {
          name: this.transition
        }
      }, [this.showing === true ? h('div', {
        ref: 'inner',
        staticClass: 'q-menu scroll' + this.menuClass,
        class: this.contentClass,
        style: this.contentStyle,
        attrs: _objectSpread({
          tabindex: -1
        }, this.$attrs),
        on: on,
        directives: [{
          name: 'click-outside',
          value: this.__onClickOutside,
          arg: this.anchorEl
        }]
      }, Object(utils_slot["a" /* default */])(this, 'default')) : null]);
    }
  },
  mounted: function mounted() {
    this.__processModelChange(this.value);
  },
  beforeDestroy: function beforeDestroy() {
    // When the menu is destroyed while open we can only emit the event on anchorEl
    if (this.showing === true && this.anchorEl !== void 0) {
      this.anchorEl.dispatchEvent(Object(utils_event["a" /* create */])('popup-hide', {
        bubbles: true
      }));
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/btn/QBtnDropdown.js









function QBtnDropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QBtnDropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QBtnDropdown_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QBtnDropdown_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* harmony default export */ var QBtnDropdown = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBtnDropdown',
  mixins: [btn_mixin["a" /* default */]],
  props: {
    value: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: 'bottom right'
    },
    menuSelf: {
      type: String,
      default: 'top right'
    },
    disableMainBtn: Boolean,
    disableDropdown: Boolean
  },
  data: function data() {
    return {
      showing: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.$refs.menu !== void 0 && this.$refs.menu[val ? 'show' : 'hide']();
    }
  },
  render: function render(h) {
    var _this = this;

    var label = this.$scopedSlots.label !== void 0 ? this.$scopedSlots.label() : [];
    var Arrow = [h(QIcon["a" /* default */], {
      props: {
        name: this.dropdownIcon || this.$q.iconSet.arrow.dropdown
      },
      staticClass: 'q-btn-dropdown__arrow',
      class: {
        'rotate-180': this.showing,
        'q-btn-dropdown__arrow-container': this.split === false
      }
    })];
    this.disableDropdown !== true && Arrow.push(h(QMenu, {
      ref: 'menu',
      props: {
        cover: this.cover,
        fit: true,
        persistent: this.persistent,
        autoClose: this.autoClose,
        anchor: this.menuAnchor,
        self: this.menuSelf,
        contentClass: this.contentClass,
        contentStyle: this.contentStyle,
        separateClosePopup: true
      },
      on: {
        'before-show': function beforeShow(e) {
          _this.showing = true;

          _this.$emit('before-show', e);
        },
        show: function show(e) {
          _this.$emit('show', e);

          _this.$emit('input', true);
        },
        'before-hide': function beforeHide(e) {
          _this.showing = false;

          _this.$emit('before-hide', e);
        },
        hide: function hide(e) {
          _this.$emit('hide', e);

          _this.$emit('input', false);
        }
      }
    }, Object(utils_slot["a" /* default */])(this, 'default')));

    if (this.split === false) {
      return h(QBtn["a" /* default */], {
        class: 'q-btn-dropdown q-btn-dropdown--simple',
        props: QBtnDropdown_objectSpread({}, this.$props, {
          disable: this.disable === true || this.disableMainBtn === true,
          noWrap: true,
          round: false
        }),
        on: {
          click: function click(e) {
            _this.$emit('click', e);
          }
        }
      }, label.concat(Arrow));
    }

    var Btn = h(QBtn["a" /* default */], {
      class: 'q-btn-dropdown--current',
      props: QBtnDropdown_objectSpread({}, this.$props, {
        disable: this.disable === true || this.disableMainBtn === true,
        noWrap: true,
        iconRight: this.iconRight,
        round: false
      }),
      on: {
        click: function click(e) {
          _this.hide();

          _this.$emit('click', e);
        }
      }
    }, label);
    return h(QBtnGroup, {
      props: {
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push,
        unelevated: this.unelevated,
        glossy: this.glossy,
        stretch: this.stretch
      },
      staticClass: 'q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item'
    }, [Btn, h(QBtn["a" /* default */], {
      staticClass: 'q-btn-dropdown__arrow-container',
      props: {
        disable: this.disable === true || this.disableDropdown === true,
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push,
        size: this.size,
        color: this.color,
        stretch: this.stretch,
        textColor: this.textColor,
        dense: this.dense,
        ripple: this.ripple
      }
    }, Arrow)]);
  },
  methods: {
    toggle: function toggle(evt) {
      this.$refs.menu && this.$refs.menu.toggle(evt);
    },
    show: function show(evt) {
      this.$refs.menu && this.$refs.menu.show(evt);
    },
    hide: function hide(evt) {
      this.$refs.menu && this.$refs.menu.hide(evt);
    }
  },
  mounted: function mounted() {
    this.value === true && this.show();
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/ripple.js
var ripple = __webpack_require__("3d69");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/btn/QBtnToggle.js





/* harmony default export */ var QBtnToggle = (vue_runtime_esm["a" /* default */].extend({
  name: 'QBtnToggle',
  mixins: [ripple["a" /* default */]],
  props: {
    value: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: function validator(v) {
        return v.every(function (opt) {
          return ('label' in opt || 'icon' in opt || 'slot' in opt) && 'value' in opt;
        });
      }
    },
    // To avoid seeing the active raise shadow through the transparent button, give it a color (even white).
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: 'primary'
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean
  },
  computed: {
    val: function val() {
      var _this = this;

      return this.options.map(function (opt) {
        return opt.value === _this.value;
      });
    }
  },
  methods: {
    __set: function __set(value, opt) {
      if (this.readonly !== true && value !== this.value) {
        this.$emit('input', value, opt);
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h(QBtnGroup, {
      staticClass: 'q-btn-toggle',
      props: {
        outline: this.outline,
        flat: this.flat,
        rounded: this.rounded,
        push: this.push,
        stretch: this.stretch,
        unelevated: this.unelevated,
        glossy: this.glossy,
        spread: this.spread
      },
      on: this.$listeners
    }, this.options.map(function (opt, i) {
      return h(QBtn["a" /* default */], {
        key: i,
        on: {
          click: function click() {
            return _this2.__set(opt.value, opt);
          }
        },
        props: {
          disable: _this2.disable || opt.disable,
          label: opt.label,
          // Colors come from the button specific options first, then from general props
          color: _this2.val[i] === true ? opt.toggleColor || _this2.toggleColor : opt.color || _this2.color,
          textColor: _this2.val[i] === true ? opt.toggleTextColor || _this2.toggleTextColor : opt.textColor || _this2.textColor,
          icon: opt.icon,
          iconRight: opt.iconRight,
          noCaps: _this2.noCaps === true || opt.noCaps === true,
          noWrap: _this2.noWrap === true || opt.noWrap === true,
          outline: _this2.outline,
          flat: _this2.flat,
          rounded: _this2.rounded,
          push: _this2.push,
          unelevated: _this2.unelevated,
          size: _this2.size,
          dense: _this2.dense,
          ripple: _this2.ripple !== void 0 ? _this2.ripple : opt.ripple,
          stack: _this2.stack === true || opt.stack === true,
          tabindex: opt.tabindex,
          stretch: _this2.stretch
        }
      }, opt.slot !== void 0 ? Object(utils_slot["a" /* default */])(_this2, opt.slot) : void 0);
    }));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/btn/index.js





// CONCATENATED MODULE: ./node_modules/quasar/src/components/card/QCard.js


/* harmony default export */ var QCard = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCard',
  props: {
    dark: Boolean,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-card',
      class: {
        'q-card--dark': this.dark,
        'q-card--bordered': this.bordered,
        'q-card--square no-border-radius': this.square,
        'q-card--flat no-shadow': this.flat
      },
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/card/QCardSection.js


/* harmony default export */ var QCardSection = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCardSection',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-card__section',
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/card/QCardActions.js



/* harmony default export */ var QCardActions = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCardActions',
  mixins: [align["a" /* default */]],
  props: {
    vertical: Boolean
  },
  computed: {
    classes: function classes() {
      return "q-card__actions--".concat(this.vertical === true ? 'vert column' : 'horiz row', " ").concat(this.alignClass);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-card__actions',
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/card/index.js




// CONCATENATED MODULE: ./node_modules/quasar/src/utils/touch.js





var directions = ['left', 'right', 'up', 'down', 'horizontal', 'vertical'];
var modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true,
  all: true
};
function getModifierDirections(mod) {
  var dir = {};
  directions.forEach(function (direction) {
    if (mod[direction]) {
      dir[direction] = true;
    }
  });

  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }

  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  }

  if (dir.vertical === true) {
    dir.up = dir.down = true;
  }

  if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }

  if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }

  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }

  return dir;
}
function updateModifiers(ctx, _ref) {
  var oldValue = _ref.oldValue,
      value = _ref.value,
      modifiers = _ref.modifiers;

  if (oldValue !== value) {
    ctx.handler = value;
  }

  if (directions.some(function (direction) {
    return modifiers[direction] !== ctx.modifiers[direction];
  })) {
    ctx.modifiers = modifiers;
    ctx.direction = getModifierDirections(modifiers);
  }
}
function addEvt(ctx, target, events) {
  target += 'Evt';

  if (ctx[target] !== void 0) {
    ctx[target] = ctx[target].concat(events);
  } else {
    ctx[target] = events;
  }

  events.forEach(function (evt) {
    evt[0].addEventListener(evt[1], ctx[evt[2]], utils_event["e" /* listenOpts */][evt[3]]);
  });
}
function cleanEvt(ctx, target) {
  target += 'Evt';

  if (ctx[target] !== void 0) {
    ctx[target].forEach(function (evt) {
      evt[0].removeEventListener(evt[1], ctx[evt[2]], utils_event["e" /* listenOpts */][evt[3]]);
    });
    ctx[target] = void 0;
  }
}
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/TouchSwipe.js





var TouchSwipe_notPassiveCapture = utils_event["e" /* listenOpts */].notPassiveCapture;

function parseArg(arg) {
  // delta (min velocity -- dist / time)
  // mobile min distance on first move
  // desktop min distance until deciding if it's a swipe or not
  var data = [0.06, 6, 50];

  if (typeof arg === 'string' && arg.length) {
    arg.split(':').forEach(function (val, index) {
      var v = parseFloat(val);
      v && (data[index] = v);
    });
  }

  return data;
}

/* harmony default export */ var TouchSwipe = ({
  name: 'touch-swipe',
  bind: function bind(el, _ref) {
    var value = _ref.value,
        arg = _ref.arg,
        modifiers = _ref.modifiers;

    // early return, we don't need to do anything
    if (modifiers.mouse !== true && Platform["a" /* client */].has.touch !== true) {
      return;
    }

    var mouseCapture = modifiers.mouseCapture === true ? 'Capture' : '';
    var ctx = {
      handler: value,
      sensitivity: parseArg(arg),
      modifiers: modifiers,
      direction: getModifierDirections(modifiers),
      mouseStart: function mouseStart(evt) {
        if (ctx.event === void 0 && Object(utils_event["d" /* leftClick */])(evt)) {
          addEvt(ctx, 'temp', [[document, 'mousemove', 'move', "notPassive".concat(mouseCapture)], [document, 'mouseup', 'end', 'notPassiveCapture']]);
          ctx.start(evt, true);
        }
      },
      touchStart: function touchStart(evt) {
        if (ctx.event === void 0 && evt.target !== void 0) {
          addEvt(ctx, 'temp', [[evt.target, 'touchcancel', 'end', 'notPassiveCapture'], [evt.target, 'touchend', 'end', 'notPassiveCapture']]);
          ctx.start(evt);
        }
      },
      start: function start(evt, mouseEvent) {
        Platform["a" /* client */].is.firefox === true && Object(utils_event["h" /* preventDraggable */])(el, true);
        var pos = Object(utils_event["f" /* position */])(evt);
        ctx.event = {
          x: pos.left,
          y: pos.top,
          time: new Date().getTime(),
          mouse: mouseEvent === true,
          dir: false
        };
      },
      move: function move(evt) {
        if (ctx.event === void 0) {
          return;
        }

        if (ctx.event.dir !== false) {
          Object(utils_event["j" /* stopAndPrevent */])(evt);
          return;
        }

        var time = new Date().getTime() - ctx.event.time;

        if (time === 0) {
          return;
        }

        var pos = Object(utils_event["f" /* position */])(evt),
            distX = pos.left - ctx.event.x,
            absX = Math.abs(distX),
            distY = pos.top - ctx.event.y,
            absY = Math.abs(distY);

        if (ctx.event.mouse !== true) {
          if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
            ctx.end(evt);
            return;
          }
        } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
          return;
        }

        var velX = absX / time,
            velY = absY / time;

        if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
          ctx.event.dir = distY < 0 ? 'up' : 'down';
        }

        if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
          ctx.event.dir = distX < 0 ? 'left' : 'right';
        }

        if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
          ctx.event.dir = 'up';
        }

        if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
          ctx.event.dir = 'down';
        }

        if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
          ctx.event.dir = 'left';
        }

        if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
          ctx.event.dir = 'right';
        }

        if (ctx.event.dir !== false) {
          Object(utils_event["j" /* stopAndPrevent */])(evt);
          document.addEventListener('click', utils_event["j" /* stopAndPrevent */], TouchSwipe_notPassiveCapture);

          if (ctx.event.mouse === true) {
            document.body.classList.add('non-selectable');
            clearSelection();
          }

          ctx.handler({
            evt: evt,
            touch: ctx.event.mouse !== true,
            mouse: ctx.event.mouse,
            direction: ctx.event.dir,
            duration: time,
            distance: {
              x: absX,
              y: absY
            }
          });
        } else {
          ctx.end(evt);
        }
      },
      end: function end(evt) {
        if (ctx.event === void 0) {
          return;
        }

        cleanEvt(ctx, 'temp');
        Platform["a" /* client */].is.firefox === true && Object(utils_event["h" /* preventDraggable */])(el, false);

        if (ctx.event.dir !== false) {
          Object(utils_event["j" /* stopAndPrevent */])(evt);
          setTimeout(function () {
            document.removeEventListener('click', utils_event["j" /* stopAndPrevent */], TouchSwipe_notPassiveCapture);
          }, 50);
          ctx.event.mouse === true && document.body.classList.remove('non-selectable');
        }

        ctx.event = void 0;
      }
    };

    if (el.__qtouchswipe) {
      el.__qtouchswipe_old = el.__qtouchswipe;
    }

    el.__qtouchswipe = ctx;
    modifiers.mouse === true && addEvt(ctx, 'main', [[el, 'mousedown', 'mouseStart', "passive".concat(mouseCapture)]]);

    if (Platform["a" /* client */].has.touch === true) {
      var capture = modifiers.capture === true ? 'Capture' : '';
      addEvt(ctx, 'main', [[el, 'touchstart', 'touchStart', "passive".concat(capture)], [el, 'touchmove', 'move', "notPassive".concat(capture)]]);
    }
  },
  update: function update(el, binding) {
    var ctx = el.__qtouchswipe;
    ctx !== void 0 && updateModifiers(ctx, binding);
  },
  unbind: function unbind(el) {
    var ctx = el.__qtouchswipe_old || el.__qtouchswipe;

    if (ctx !== void 0) {
      Platform["a" /* client */].is.firefox === true && Object(utils_event["h" /* preventDraggable */])(el, false);
      cleanEvt(ctx, 'main');
      cleanEvt(ctx, 'temp');

      if (ctx.event !== void 0 && ctx.event.dir !== false) {
        document.removeEventListener('click', utils_event["j" /* stopAndPrevent */], TouchSwipe_notPassiveCapture);
        ctx.event.mouse === true && document.body.classList.remove('non-selectable');
      }

      delete el[el.__qtouchswipe_old ? '__qtouchswipe_old' : '__qtouchswipe'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/panel.js






var PanelWrapper = vue_runtime_esm["a" /* default */].extend({
  name: 'QTabPanelWrapper',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-panel scroll',
      attrs: {
        role: 'tabpanel'
      },
      // stop propagation of content emitted @input
      // which would tamper with Panel's model
      on: {
        input: utils_event["i" /* stop */]
      }
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
});
var PanelParentMixin = {
  directives: {
    TouchSwipe: TouchSwipe
  },
  props: {
    value: {
      required: true
    },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    transitionPrev: {
      type: String,
      default: 'slide-right'
    },
    transitionNext: {
      type: String,
      default: 'slide-left'
    },
    keepAlive: Boolean
  },
  data: function data() {
    return {
      panelIndex: null,
      panelTransition: null
    };
  },
  computed: {
    panelDirectives: function panelDirectives() {
      if (this.swipeable) {
        return [{
          name: 'touch-swipe',
          value: this.__swipe,
          modifiers: {
            horizontal: true,
            mouse: true
          }
        }];
      }
    },
    contentKey: function contentKey() {
      return typeof this.value === 'string' || typeof this.value === 'number' ? this.value : String(this.value);
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      var _this = this;

      var index = this.__isValidPanelName(newVal) === true ? this.__getPanelIndex(newVal) : -1;

      if (this.__forcedPanelTransition !== true) {
        this.__updatePanelTransition(index === -1 ? 0 : index < this.__getPanelIndex(oldVal) ? -1 : 1);
      }

      if (this.panelIndex !== index) {
        this.panelIndex = index;
        this.$emit('before-transition', newVal, oldVal);
        this.$nextTick(function () {
          _this.$emit('transition', newVal, oldVal);
        });
      }
    }
  },
  methods: {
    next: function next() {
      this.__go(1);
    },
    previous: function previous() {
      this.__go(-1);
    },
    goTo: function goTo(name) {
      this.$emit('input', name);
    },
    __isValidPanelName: function __isValidPanelName(name) {
      return name !== void 0 && name !== null && name !== '';
    },
    __getPanelIndex: function __getPanelIndex(name) {
      return this.panels.findIndex(function (panel) {
        var opt = panel.componentOptions;
        return opt && opt.propsData.name === name && opt.propsData.disable !== '' && opt.propsData.disable !== true;
      });
    },
    __getAllPanels: function __getAllPanels() {
      var _this2 = this;

      return this.panels.filter(function (panel) {
        return panel.componentOptions !== void 0 && _this2.__isValidPanelName(panel.componentOptions.propsData.name);
      });
    },
    __getAvailablePanels: function __getAvailablePanels() {
      return this.panels.filter(function (panel) {
        var opt = panel.componentOptions;
        return opt && opt.propsData.name !== void 0 && opt.propsData.disable !== '' && opt.propsData.disable !== true;
      });
    },
    __updatePanelTransition: function __updatePanelTransition(direction) {
      var val = direction !== 0 && this.animated === true && this.panelIndex !== -1 ? 'q-transition--' + (direction === -1 ? this.transitionPrev : this.transitionNext) : null;

      if (this.panelTransition !== val) {
        this.panelTransition = val;
      }
    },
    __go: function __go(direction) {
      var _this3 = this;

      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.panelIndex;
      var index = startIndex + direction;
      var slots = this.panels;

      while (index > -1 && index < slots.length) {
        var opt = slots[index].componentOptions;

        if (opt !== void 0 && opt.propsData.disable !== '' && opt.propsData.disable !== true) {
          this.__updatePanelTransition(direction);

          this.__forcedPanelTransition = true;
          this.$emit('input', slots[index].componentOptions.propsData.name);
          setTimeout(function () {
            _this3.__forcedPanelTransition = false;
          });
          return;
        }

        index += direction;
      }

      if (this.infinite === true && slots.length > 0 && startIndex !== -1 && startIndex !== slots.length) {
        this.__go(direction, direction === -1 ? slots.length : -1);
      }
    },
    __swipe: function __swipe(evt) {
      this.__go((this.$q.lang.rtl === true ? -1 : 1) * (evt.direction === 'left' ? 1 : -1));
    },
    __updatePanelIndex: function __updatePanelIndex() {
      var index = this.__getPanelIndex(this.value);

      if (this.panelIndex !== index) {
        this.panelIndex = index;
      }

      return true;
    },
    __getPanelContent: function __getPanelContent(h) {
      if (this.panels.length === 0) {
        return;
      }

      var panel = this.__isValidPanelName(this.value) && this.__updatePanelIndex() && this.panels[this.panelIndex];
      var content = this.keepAlive === true ? [h('keep-alive', [h(PanelWrapper, {
        key: this.contentKey
      }, [panel])])] : [h('div', {
        staticClass: 'q-panel scroll',
        key: this.contentKey,
        attrs: {
          role: 'tabpanel'
        },
        // stop propagation of content emitted @input
        // which would tamper with Panel's model
        on: {
          input: utils_event["i" /* stop */]
        }
      }, [panel])];
      return this.animated === true ? [h('transition', {
        props: {
          name: this.panelTransition
        }
      }, content)] : content;
    }
  },
  render: function render(h) {
    this.panels = this.$scopedSlots.default !== void 0 ? this.$scopedSlots.default() : [];
    return this.__renderPanels(h);
  }
};
var PanelChildMixin = {
  props: {
    name: {
      required: true
    },
    disable: Boolean
  }
};
// EXTERNAL MODULE: ./node_modules/quasar/src/history.js
var src_history = __webpack_require__("582c");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/fullscreen.js

/* harmony default export */ var fullscreen = ({
  props: {
    fullscreen: Boolean,
    noRouteFullscreenExit: Boolean
  },
  data: function data() {
    return {
      inFullscreen: false
    };
  },
  watch: {
    $route: function $route() {
      this.noRouteFullscreenExit !== true && this.exitFullscreen();
    },
    fullscreen: function fullscreen(v) {
      if (this.inFullscreen !== v) {
        this.toggleFullscreen();
      }
    },
    inFullscreen: function inFullscreen(v) {
      this.$emit('update:fullscreen', v);
      this.$emit('fullscreen', v);
    }
  },
  methods: {
    toggleFullscreen: function toggleFullscreen() {
      if (this.inFullscreen === true) {
        this.exitFullscreen();
      } else {
        this.setFullscreen();
      }
    },
    setFullscreen: function setFullscreen() {
      if (this.inFullscreen === true) {
        return;
      }

      this.inFullscreen = true;
      this.container = this.$el.parentNode;
      this.container.replaceChild(this.fullscreenFillerNode, this.$el);
      document.body.appendChild(this.$el);
      document.body.classList.add('q-body--fullscreen-mixin');
      this.__historyFullscreen = {
        handler: this.exitFullscreen
      };
      src_history["a" /* default */].add(this.__historyFullscreen);
    },
    exitFullscreen: function exitFullscreen() {
      var _this = this;

      if (this.inFullscreen !== true) {
        return;
      }

      if (this.__historyFullscreen !== void 0) {
        src_history["a" /* default */].remove(this.__historyFullscreen);
        this.__historyFullscreen = void 0;
      }

      this.container.replaceChild(this.$el, this.fullscreenFillerNode);
      document.body.classList.remove('q-body--fullscreen-mixin');
      this.inFullscreen = false;

      if (this.$el.scrollIntoView !== void 0) {
        setTimeout(function () {
          _this.$el.scrollIntoView();
        });
      }
    }
  },
  beforeMount: function beforeMount() {
    this.fullscreenFillerNode = document.createElement('span');
  },
  mounted: function mounted() {
    this.fullscreen === true && this.setFullscreen();
  },
  beforeDestroy: function beforeDestroy() {
    this.exitFullscreen();
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/is.js





function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a !== Object(a) || b !== Object(b)) {
    return false;
  }

  var props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    return false;
  }

  return props.every(function (prop) {
    return isDeepEqual(a[prop], b[prop]);
  });
}
function isPrintableChar(v) {
  return v > 47 && v < 58 || // number keys
  v === 32 || v === 13 || // spacebar & return key(s) (if you want to allow carriage returns)
  v > 64 && v < 91 || // letter keys
  v > 95 && v < 112 || // numpad keys
  v > 185 && v < 193 || // ;=,-./` (in order)
  v > 218 && v < 223;
}
function isObject(v) {
  return Object(v) === v;
}
function isDate(v) {
  return Object.prototype.toString.call(v) === '[object Date]';
}
function isRegexp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]';
}
function isNumber(v) {
  return typeof v === 'number' && isFinite(v);
}
function isString(v) {
  return typeof v === 'string';
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js








/* harmony default export */ var QCarousel = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCarousel',
  mixins: [PanelParentMixin, fullscreen],
  props: {
    height: String,
    padding: Boolean,
    transitionPrev: {
      default: 'fade'
    },
    transitionNext: {
      default: 'fade'
    },
    controlColor: String,
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationIcon: String,
    thumbnails: Boolean
  },
  computed: {
    style: function style() {
      if (this.inFullscreen !== true && this.height !== void 0) {
        return {
          height: this.height
        };
      }
    },
    classes: function classes() {
      return {
        fullscreen: this.inFullscreen,
        'q-carousel--arrows': this.padding === true && this.arrows === true,
        'q-carousel--navigation': this.padding === true && this.navigation === true
      };
    },
    arrowIcons: function arrowIcons() {
      var ico = [this.prevIcon || this.$q.iconSet.carousel.left, this.nextIcon || this.$q.iconSet.carousel.right];
      return this.$q.lang.rtl ? ico.reverse() : ico;
    },
    navIcon: function navIcon() {
      return this.navigationIcon || this.$q.iconSet.carousel.navigationIcon;
    }
  },
  watch: {
    value: function value() {
      if (this.autoplay) {
        clearInterval(this.timer);

        this.__startTimer();
      }
    },
    autoplay: function autoplay(val) {
      if (val) {
        this.__startTimer();
      } else {
        clearInterval(this.timer);
      }
    }
  },
  methods: {
    __startTimer: function __startTimer() {
      this.timer = setTimeout(this.next, isNumber(this.autoplay) ? this.autoplay : 5000);
    },
    __getNavigationContainer: function __getNavigationContainer(h, type, mapping) {
      return h('div', {
        staticClass: 'q-carousel__control q-carousel__navigation no-wrap absolute flex scroll-x q-carousel__navigation--' + type,
        class: this.controlColor ? "text-".concat(this.controlColor) : null
      }, [h('div', {
        staticClass: 'q-carousel__navigation-inner flex no-wrap justify-center'
      }, this.__getAvailablePanels().map(mapping))]);
    },
    __getContent: function __getContent(h) {
      var _this = this;

      var node = [];

      if (this.arrows === true) {
        node.push(h(QBtn["a" /* default */], {
          staticClass: 'q-carousel__control q-carousel__prev-arrow absolute',
          props: {
            size: 'lg',
            color: this.controlColor,
            icon: this.arrowIcons[0],
            round: true,
            flat: true,
            dense: true
          },
          on: {
            click: this.previous
          }
        }), h(QBtn["a" /* default */], {
          staticClass: 'q-carousel__control q-carousel__next-arrow absolute',
          props: {
            size: 'lg',
            color: this.controlColor,
            icon: this.arrowIcons[1],
            round: true,
            flat: true,
            dense: true
          },
          on: {
            click: this.next
          }
        }));
      }

      if (this.navigation === true) {
        node.push(this.__getNavigationContainer(h, 'buttons', function (panel) {
          var name = panel.componentOptions.propsData.name;
          return h(QBtn["a" /* default */], {
            key: name,
            staticClass: 'q-carousel__navigation-icon',
            class: {
              'q-carousel__navigation-icon--active': name === _this.value
            },
            props: {
              icon: _this.navIcon,
              round: true,
              flat: true,
              size: 'sm'
            },
            on: {
              click: function click() {
                _this.goTo(name);
              }
            }
          });
        }));
      } else if (this.thumbnails) {
        node.push(this.__getNavigationContainer(h, 'thumbnails', function (panel) {
          var slide = panel.componentOptions.propsData;
          return h('img', {
            class: {
              'q-carousel__thumbnail--active': slide.name === _this.value
            },
            attrs: {
              src: slide.imgSrc
            },
            on: {
              click: function click() {
                _this.goTo(slide.name);
              }
            }
          });
        }));
      }

      return node.concat(Object(utils_slot["a" /* default */])(this, 'control'));
    },
    __renderPanels: function __renderPanels(h) {
      return h('div', {
        staticClass: 'q-carousel q-panel-parent',
        style: this.style,
        class: this.classes
      }, [h('div', {
        staticClass: 'q-carousel__slides-container',
        directives: this.panelDirectives
      }, [this.__getPanelContent(h)])].concat(this.__getContent(h)));
    }
  },
  mounted: function mounted() {
    this.autoplay && this.__startTimer();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js



/* harmony default export */ var QCarouselSlide = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCarouselSlide',
  mixins: [PanelChildMixin],
  props: {
    imgSrc: String
  },
  computed: {
    style: function style() {
      if (this.imgSrc) {
        return {
          backgroundImage: "url(".concat(this.imgSrc, ")")
        };
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-carousel__slide',
      style: this.style,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/carousel/QCarouselControl.js


/* harmony default export */ var QCarouselControl = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCarouselControl',
  props: {
    position: {
      type: String,
      default: 'bottom-right'
    },
    offset: {
      type: Array,
      default: function _default() {
        return [18, 18];
      }
    }
  },
  computed: {
    classes: function classes() {
      return "absolute-".concat(this.position);
    },
    style: function style() {
      return {
        margin: "".concat(this.offset[1], "px ").concat(this.offset[0], "px")
      };
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-carousel__control absolute',
      style: this.style,
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/carousel/index.js




// CONCATENATED MODULE: ./node_modules/quasar/src/components/chat/QChatMessage.js



/* harmony default export */ var QChatMessage = (vue_runtime_esm["a" /* default */].extend({
  name: 'QChatMessage',
  props: {
    sent: Boolean,
    label: String,
    bgColor: String,
    textColor: String,
    name: String,
    avatar: String,
    text: Array,
    stamp: String,
    size: String,
    labelSanitize: Boolean,
    nameSanitize: Boolean,
    textSanitize: Boolean,
    stampSanitize: Boolean
  },
  computed: {
    textClass: function textClass() {
      if (this.textColor) {
        return "text-".concat(this.textColor);
      }
    },
    messageClass: function messageClass() {
      if (this.bgColor) {
        return "text-".concat(this.bgColor);
      }
    },
    sizeClass: function sizeClass() {
      if (this.size) {
        return "col-".concat(this.size);
      }
    },
    classes: function classes() {
      return {
        'q-message-sent': this.sent,
        'q-message-received': !this.sent
      };
    }
  },
  methods: {
    __getText: function __getText(h) {
      var _this = this;

      var domPropText = this.textSanitize === true ? 'textContent' : 'innerHTML',
          domPropStamp = this.stampSanitize === true ? 'textContent' : 'innerHTML';
      return this.text.map(function (msg, index) {
        return h('div', {
          key: index,
          staticClass: 'q-message-text',
          class: _this.messageClass
        }, [h('span', {
          staticClass: 'q-message-text-content',
          class: _this.textClass
        }, [h('div', {
          domProps: defineProperty_default()({}, domPropText, msg)
        }), _this.stamp ? h('div', {
          staticClass: 'q-message-stamp',
          domProps: defineProperty_default()({}, domPropStamp, _this.stamp)
        }) : null])]);
      });
    },
    __getMessage: function __getMessage(h) {
      return h('div', {
        staticClass: 'q-message-text',
        class: this.messageClass
      }, [h('span', {
        staticClass: 'q-message-text-content',
        class: this.textClass
      }, this.$scopedSlots.default().concat([this.stamp !== void 0 ? h('div', {
        staticClass: 'q-message-stamp',
        domProps: defineProperty_default()({}, this.stampSanitize === true ? 'textContent' : 'innerHTML', this.stamp)
      }) : null]))]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-message',
      class: this.classes
    }, [this.label ? h('div', {
      staticClass: 'q-message-label text-center',
      domProps: defineProperty_default()({}, this.labelSanitize === true ? 'textContent' : 'innerHTML', this.label)
    }) : null, h('div', {
      staticClass: 'q-message-container row items-end no-wrap'
    }, [this.$scopedSlots.avatar !== void 0 ? this.$scopedSlots.avatar() : this.avatar !== void 0 ? h('img', {
      staticClass: 'q-message-avatar',
      attrs: {
        src: this.avatar
      }
    }) : null, h('div', {
      class: this.sizeClass
    }, [this.name !== void 0 ? h('div', {
      staticClass: 'q-message-name',
      domProps: defineProperty_default()({}, this.nameSanitize === true ? 'textContent' : 'innerHTML', this.name)
    }) : null, this.text !== void 0 ? this.__getText(h) : null, this.$scopedSlots.default !== void 0 ? this.__getMessage(h) : null])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/chat/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/checkbox.js


/* harmony default export */ var mixins_checkbox = ({
  props: {
    value: {
      required: true
    },
    val: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dark: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  computed: {
    isTrue: function isTrue() {
      return this.modelIsArray ? this.index > -1 : this.value === this.trueValue;
    },
    isFalse: function isFalse() {
      return this.modelIsArray ? this.index === -1 : this.value === this.falseValue;
    },
    index: function index() {
      if (this.modelIsArray === true) {
        return this.value.indexOf(this.val);
      }
    },
    modelIsArray: function modelIsArray() {
      return this.val !== void 0 && Array.isArray(this.value);
    },
    computedTabindex: function computedTabindex() {
      return this.disable === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    toggle: function toggle(e) {
      e !== void 0 && Object(utils_event["j" /* stopAndPrevent */])(e);

      if (this.disable === true) {
        return;
      }

      var val;

      if (this.modelIsArray === true) {
        if (this.isTrue === true) {
          val = this.value.slice();
          val.splice(this.index, 1);
        } else {
          val = this.value.concat([this.val]);
        }
      } else if (this.isTrue === true) {
        val = this.toggleIndeterminate ? this.indeterminateValue : this.falseValue;
      } else if (this.isFalse === true) {
        val = this.trueValue;
      } else {
        val = this.falseValue;
      }

      this.$emit('input', val);
    },
    __keyDown: function __keyDown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.toggle(e);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js



/* harmony default export */ var QCheckbox = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCheckbox',
  mixins: [mixins_checkbox],
  props: {
    toggleIndeterminate: Boolean,
    indeterminateValue: {
      default: null
    }
  },
  computed: {
    isIndeterminate: function isIndeterminate() {
      return this.value === void 0 || this.value === this.indeterminateValue;
    },
    classes: function classes() {
      return {
        'disabled': this.disable,
        'q-checkbox--dark': this.dark,
        'q-checkbox--dense': this.dense,
        'reverse': this.leftLabel
      };
    },
    innerClass: function innerClass() {
      if (this.isTrue === true) {
        return 'q-checkbox__inner--active' + (this.color !== void 0 ? ' text-' + this.color : '');
      } else if (this.isIndeterminate === true) {
        return 'q-checkbox__inner--indeterminate' + (this.color !== void 0 ? ' text-' + this.color : '');
      } else if (this.keepColor === true && this.color !== void 0) {
        return 'text-' + this.color;
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-checkbox cursor-pointer no-outline row inline no-wrap items-center',
      class: this.classes,
      attrs: {
        tabindex: this.computedTabindex
      },
      on: {
        click: this.toggle,
        keydown: this.__keyDown
      }
    }, [h('div', {
      staticClass: 'q-checkbox__inner relative-position',
      class: this.innerClass
    }, [this.disable !== true ? h('input', {
      staticClass: 'q-checkbox__native q-ma-none q-pa-none invisible',
      attrs: {
        type: 'checkbox'
      },
      on: {
        change: this.toggle
      }
    }) : null, h('div', {
      staticClass: 'q-checkbox__bg absolute'
    }, [h('svg', {
      staticClass: 'q-checkbox__check fit absolute-full',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        fill: 'none',
        d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
      }
    })]), h('div', {
      staticClass: 'q-checkbox__check-indet absolute'
    })])]), this.label !== void 0 || this.$scopedSlots.default !== void 0 ? h('div', {
      staticClass: 'q-checkbox__label q-anchor--skip'
    }, (this.label !== void 0 ? [this.label] : []).concat(Object(utils_slot["a" /* default */])(this, 'default'))) : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/checkbox/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/quasar/src/mixins/size.js
var mixins_size = __webpack_require__("6642");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/chip/QChip.js









var sizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
/* harmony default export */ var QChip = (vue_runtime_esm["a" /* default */].extend({
  name: 'QChip',
  mixins: [ripple["a" /* default */], mixins_size["a" /* default */]],
  model: {
    event: 'remove'
  },
  props: {
    dense: Boolean,
    icon: String,
    iconRight: String,
    label: [String, Number],
    color: String,
    textColor: String,
    value: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    size: String,
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    tabindex: [String, Number],
    disable: Boolean
  },
  computed: {
    classes: function classes() {
      var _ref;

      var text = this.outline ? this.color || this.textColor : this.textColor;
      return _ref = {}, defineProperty_default()(_ref, "bg-".concat(this.color), this.outline === false && this.color !== void 0), defineProperty_default()(_ref, "text-".concat(text, " q-chip--colored"), text), defineProperty_default()(_ref, "disabled", this.disable), defineProperty_default()(_ref, 'q-chip--dense', this.dense), defineProperty_default()(_ref, 'q-chip--outline', this.outline), defineProperty_default()(_ref, 'q-chip--selected', this.selected), defineProperty_default()(_ref, 'q-chip--clickable cursor-pointer non-selectable q-hoverable', this.isClickable), defineProperty_default()(_ref, 'q-chip--square', this.square), _ref;
    },
    style: function style() {
      if (this.size !== void 0) {
        return {
          fontSize: this.size in sizes ? "".concat(sizes[this.size], "px") : this.size
        };
      }
    },
    hasLeftIcon: function hasLeftIcon() {
      return this.selected === true || this.icon !== void 0;
    },
    isClickable: function isClickable() {
      return this.disable === false && (this.clickable === true || this.selected !== null);
    },
    computedTabindex: function computedTabindex() {
      return this.disable === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    __onKeyup: function __onKeyup(e) {
      e.keyCode === 13
      /* ENTER */
      && this.__onClick(e);
    },
    __onClick: function __onClick(e) {
      if (!this.disable) {
        this.$emit('update:selected', !this.selected);
        this.$emit('click', e);
      }
    },
    __onRemove: function __onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        Object(utils_event["j" /* stopAndPrevent */])(e);
        !this.disable && this.$emit('remove', false);
      }
    },
    __getContent: function __getContent(h) {
      var child = [];
      this.isClickable && child.push(h('div', {
        staticClass: 'q-focus-helper'
      }));
      this.hasLeftIcon === true && child.push(h(QIcon["a" /* default */], {
        staticClass: 'q-chip__icon q-chip__icon--left',
        props: {
          name: this.selected === true ? this.$q.iconSet.chip.selected : this.icon
        }
      }));
      child.push(h('div', {
        staticClass: 'q-chip__content row no-wrap items-center q-anchor--skip'
      }, this.label !== void 0 ? [this.label] : Object(utils_slot["a" /* default */])(this, 'default')));
      this.iconRight && child.push(h(QIcon["a" /* default */], {
        staticClass: 'q-chip__icon q-chip__icon--right',
        props: {
          name: this.iconRight
        }
      }));
      this.removable && child.push(h(QIcon["a" /* default */], {
        staticClass: 'q-chip__icon q-chip__icon--remove cursor-pointer',
        props: {
          name: this.$q.iconSet.chip.remove
        },
        attrs: {
          tabindex: this.computedTabindex
        },
        nativeOn: {
          click: this.__onRemove,
          keyup: this.__onRemove
        }
      }));
      return child;
    }
  },
  render: function render(h) {
    if (this.value === false) {
      return;
    }

    var data = this.isClickable ? {
      attrs: {
        tabindex: this.computedTabindex
      },
      on: {
        click: this.__onClick,
        keyup: this.__onKeyup
      },
      directives: [{
        name: 'ripple',
        value: this.ripple
      }]
    } : {};
    Object.assign(data, {
      staticClass: 'q-chip row inline no-wrap items-center',
      class: this.classes,
      style: this.style
    });
    return h('div', data, this.__getContent(h));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/chip/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/circular-progress/QCircularProgress.js



var radius = 50,
    diameter = 2 * radius,
    circumference = diameter * Math.PI,
    strokeDashArray = Math.round(circumference * 1000) / 1000;
/* harmony default export */ var QCircularProgress = (vue_runtime_esm["a" /* default */].extend({
  name: 'QCircularProgress',
  mixins: [mixins_size["a" /* default */]],
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    color: String,
    centerColor: String,
    trackColor: String,
    fontSize: String,
    // ratio
    thickness: {
      type: Number,
      default: 0.2,
      validator: function validator(v) {
        return v >= 0 && v <= 1;
      }
    },
    angle: {
      type: Number,
      default: 0
    },
    indeterminate: Boolean,
    showValue: Boolean,
    reverse: Boolean,
    instantFeedback: Boolean // used by QKnob, private

  },
  computed: {
    svgStyle: function svgStyle() {
      return {
        transform: "rotate3d(0, 0, 1, ".concat(this.angle - 90, "deg)")
      };
    },
    circleStyle: function circleStyle() {
      if (this.instantFeedback !== true && this.indeterminate !== true) {
        return {
          transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
      }
    },
    dir: function dir() {
      return (this.$q.lang.rtl ? -1 : 1) * (this.reverse ? -1 : 1);
    },
    viewBox: function viewBox() {
      return diameter / (1 - this.thickness / 2);
    },
    viewBoxAttr: function viewBoxAttr() {
      return "".concat(this.viewBox / 2, " ").concat(this.viewBox / 2, " ").concat(this.viewBox, " ").concat(this.viewBox);
    },
    strokeDashOffset: function strokeDashOffset() {
      var progress = 1 - (this.value - this.min) / (this.max - this.min);
      return this.dir * progress * circumference;
    },
    strokeWidth: function strokeWidth() {
      return this.thickness / 2 * this.viewBox;
    }
  },
  methods: {
    __getCircle: function __getCircle(h, _ref) {
      var thickness = _ref.thickness,
          offset = _ref.offset,
          color = _ref.color,
          cls = _ref.cls;
      return h('circle', {
        staticClass: 'q-circular-progress__' + cls,
        class: color !== void 0 ? "text-".concat(color) : null,
        style: this.circleStyle,
        attrs: {
          fill: 'transparent',
          stroke: 'currentColor',
          'stroke-width': thickness,
          'stroke-dasharray': strokeDashArray,
          'stroke-dashoffset': offset,
          cx: this.viewBox,
          cy: this.viewBox,
          r: radius
        }
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-circular-progress',
      'class': "q-circular-progress--".concat(this.indeterminate === true ? 'in' : '', "determinate"),
      style: this.sizeStyle,
      on: this.$listeners,
      attrs: {
        'role': 'progressbar',
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
        'aria-valuenow': this.indeterminate !== true ? this.value : null
      }
    }, [h('svg', {
      staticClass: 'q-circular-progress__svg',
      style: this.svgStyle,
      attrs: {
        viewBox: this.viewBoxAttr
      }
    }, [this.centerColor !== void 0 && this.centerColor !== 'transparent' ? h('circle', {
      staticClass: 'q-circular-progress__center',
      class: "text-".concat(this.centerColor),
      attrs: {
        fill: 'currentColor',
        r: radius - this.strokeWidth / 2,
        cx: this.viewBox,
        cy: this.viewBox
      }
    }) : null, this.trackColor !== void 0 && this.trackColor !== 'transparent' ? this.__getCircle(h, {
      cls: 'track',
      thickness: this.strokeWidth,
      offset: 0,
      color: this.trackColor
    }) : null, this.__getCircle(h, {
      cls: 'circle',
      thickness: this.strokeWidth,
      offset: this.strokeDashOffset,
      color: this.color
    })]), this.showValue === true ? h('div', {
      staticClass: 'q-circular-progress__text absolute-full row flex-center content-center',
      style: {
        fontSize: this.fontSize
      }
    }, this.$scopedSlots.default !== void 0 ? this.$scopedSlots.default() : [h('div', [this.value])]) : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/circular-progress/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/patterns.js
// file referenced from docs
var hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
    hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
    hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    patterns_rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
    rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var testPattern = {
  date: function date(v) {
    return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v);
  },
  time: function time(v) {
    return /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v);
  },
  fulltime: function fulltime(v) {
    return /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v);
  },
  timeOrFulltime: function timeOrFulltime(v) {
    return /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v);
  },
  hexColor: function hexColor(v) {
    return hex.test(v);
  },
  hexaColor: function hexaColor(v) {
    return hexa.test(v);
  },
  hexOrHexaColor: function hexOrHexaColor(v) {
    return hexOrHexa.test(v);
  },
  rgbColor: function rgbColor(v) {
    return patterns_rgb.test(v);
  },
  rgbaColor: function rgbaColor(v) {
    return rgba.test(v);
  },
  rgbOrRgbaColor: function rgbOrRgbaColor(v) {
    return patterns_rgb.test(v) || rgba.test(v);
  },
  hexOrRgbColor: function hexOrRgbColor(v) {
    return hex.test(v) || patterns_rgb.test(v);
  },
  hexaOrRgbaColor: function hexaOrRgbaColor(v) {
    return hexa.test(v) || rgba.test(v);
  },
  anyColor: function anyColor(v) {
    return hexOrHexa.test(v) || patterns_rgb.test(v) || rgba.test(v);
  }
};
/* harmony default export */ var patterns = ({
  testPattern: testPattern
});
// CONCATENATED MODULE: ./node_modules/quasar/src/utils/throttle.js
/* harmony default export */ var throttle = (function (fn) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var wait = false,
      result;
  return function ()
  /* ...args */
  {
    if (wait === false) {
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }

    return result;
  };
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__("bc78");

// CONCATENATED MODULE: ./node_modules/quasar/src/directives/TouchPan.js




var TouchPan_notPassiveCapture = utils_event["e" /* listenOpts */].notPassiveCapture;

function getChanges(evt, ctx, isFinal) {
  var pos = Object(utils_event["f" /* position */])(evt),
      dir,
      distX = pos.left - ctx.event.x,
      distY = pos.top - ctx.event.y,
      absX = Math.abs(distX),
      absY = Math.abs(distY);
  var direction = ctx.direction;

  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? 'left' : 'right';
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? 'up' : 'down';
  } else if (direction.up === true && distY < 0) {
    dir = 'up';

    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = 'left';
      } else if (direction.right === true && distX > 0) {
        dir = 'right';
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = 'down';

    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = 'left';
      } else if (direction.right === true && distX > 0) {
        dir = 'right';
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = 'left';

    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = 'up';
      } else if (direction.down === true && distY > 0) {
        dir = 'down';
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = 'right';

    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = 'up';
      } else if (direction.down === true && distY > 0) {
        dir = 'down';
      }
    }
  }

  if (dir === void 0 && isFinal !== true) {
    return;
  }

  return {
    evt: evt,
    touch: ctx.event.mouse !== true,
    mouse: ctx.event.mouse === true,
    position: pos,
    direction: dir,
    isFirst: ctx.event.isFirst,
    isFinal: isFinal === true,
    duration: new Date().getTime() - ctx.event.time,
    distance: {
      x: absX,
      y: absY
    },
    offset: {
      x: distX,
      y: distY
    },
    delta: {
      x: pos.left - ctx.event.lastX,
      y: pos.top - ctx.event.lastY
    }
  };
}

/* harmony default export */ var TouchPan = ({
  name: 'touch-pan',
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;

    // early return, we don't need to do anything
    if (modifiers.mouse !== true && Platform["a" /* client */].has.touch !== true) {
      return;
    }

    function handleEvent(evt, mouseEvent) {
      if (modifiers.mouse === true && mouseEvent === true) {
        Object(utils_event["j" /* stopAndPrevent */])(evt);
      } else {
        modifiers.stop === true && Object(utils_event["i" /* stop */])(evt);
        modifiers.prevent === true && Object(utils_event["g" /* prevent */])(evt);
      }
    }

    var ctx = {
      handler: value,
      modifiers: modifiers,
      direction: getModifierDirections(modifiers),
      mouseStart: function mouseStart(evt) {
        if (ctx.event === void 0 && Object(utils_event["d" /* leftClick */])(evt) === true) {
          addEvt(ctx, 'temp', [[document, 'mousemove', 'move', 'notPassiveCapture'], [document, 'mouseup', 'end', 'passiveCapture']]);
          ctx.start(evt, true);
        }
      },
      touchMove: function touchMove(evt) {
        if (ctx.event === void 0) {
          return;
        }

        ctx.move(evt);

        if (ctx.event !== void 0 && ctx.event.detected === true) {
          el.removeEventListener('touchmove', ctx.touchMove, TouchPan_notPassiveCapture);
          var target = evt.target;
          addEvt(ctx, 'temp', [[target, 'touchmove', 'move', 'notPassiveCapture'], [target, 'touchend', 'end', 'passiveCapture'], [target, 'touchcancel', 'end', 'passiveCapture']]);
        }
      },
      start: function start(evt, mouseEvent) {
        Platform["a" /* client */].is.firefox === true && Object(utils_event["h" /* preventDraggable */])(el, true);
        var pos = Object(utils_event["f" /* position */])(evt); // stop propagation so possible upper v-touch-pan don't catch this as well

        if (mouseEvent === true && modifiers.mouseAllDir === true || mouseEvent !== true && modifiers.stop === true) {
          Object(utils_event["i" /* stop */])(evt);
        }

        ctx.event = {
          x: pos.left,
          y: pos.top,
          time: new Date().getTime(),
          mouse: mouseEvent === true,
          detected: false,
          isFirst: true,
          isFinal: false,
          lastX: pos.left,
          lastY: pos.top
        };
      },
      move: function move(evt) {
        if (ctx.event === void 0) {
          return;
        }

        if (ctx.event.detected === true) {
          ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
          var changes = getChanges(evt, ctx, false);

          if (changes !== void 0) {
            if (ctx.handler(changes) === false) {
              ctx.end(evt);
            } else {
              if (ctx.event.isFirst === true) {
                handleEvent(evt, ctx.event.mouse);
                document.documentElement.style.cursor = 'grabbing';
                document.body.classList.add('no-pointer-events');
                document.body.classList.add('non-selectable');
                clearSelection();
              }

              ctx.event.lastX = changes.position.left;
              ctx.event.lastY = changes.position.top;
              ctx.event.isFirst = false;
            }
          }

          return;
        }

        if (ctx.direction.all === true || ctx.event.mouse === true && modifiers.mouseAllDir === true) {
          ctx.event.detected = true;
          ctx.move(evt);
          return;
        }

        var pos = Object(utils_event["f" /* position */])(evt),
            distX = pos.left - ctx.event.x,
            distY = pos.top - ctx.event.y,
            absX = Math.abs(distX),
            absY = Math.abs(distY);

        if (absX === absY) {
          return;
        }

        if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
          ctx.event.detected = true;
          ctx.move(evt);
        } else {
          ctx.end(evt, true);
        }
      },
      end: function end(evt, abort) {
        if (ctx.event === void 0) {
          return;
        }

        cleanEvt(ctx, 'temp');
        Platform["a" /* client */].is.firefox === true && Object(utils_event["h" /* preventDraggable */])(el, false);

        if (ctx.event.mouse !== true && ctx.event.detected === true) {
          el.addEventListener('touchmove', ctx.touchMove, TouchPan_notPassiveCapture);
        }

        document.documentElement.style.cursor = '';
        document.body.classList.remove('no-pointer-events');
        document.body.classList.remove('non-selectable');

        if (abort !== true && ctx.event.detected === true && ctx.event.isFirst !== true) {
          ctx.handler(getChanges(evt, ctx, true));
        }

        ctx.event = void 0;
      }
    };

    if (el.__qtouchpan) {
      el.__qtouchpan_old = el.__qtouchpan;
    }

    el.__qtouchpan = ctx;
    modifiers.mouse === true && addEvt(ctx, 'main', [[el, 'mousedown', 'mouseStart', "passive".concat(modifiers.mouseCapture === true ? 'Capture' : '')]]);
    Platform["a" /* client */].has.touch === true && addEvt(ctx, 'main', [[el, 'touchstart', 'start', "passive".concat(modifiers.capture === true ? 'Capture' : '')], [el, 'touchmove', 'touchMove', 'notPassiveCapture']]);
  },
  update: function update(el, binding) {
    var ctx = el.__qtouchpan;
    ctx !== void 0 && updateModifiers(ctx, binding);
  },
  unbind: function unbind(el) {
    var ctx = el.__qtouchpan_old || el.__qtouchpan;

    if (ctx !== void 0) {
      cleanEvt(ctx, 'main');
      cleanEvt(ctx, 'temp');
      Platform["a" /* client */].is.firefox === true && Object(utils_event["h" /* preventDraggable */])(el, false);
      document.documentElement.style.cursor = '';
      document.body.classList.remove('no-pointer-events');
      document.body.classList.remove('non-selectable');
      delete el[el.__qtouchpan_old ? '__qtouchpan_old' : '__qtouchpan'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/slider/slider-utils.js





 // PGDOWN, LEFT, DOWN, PGUP, RIGHT, UP

var keyCodes = [34, 37, 40, 33, 39, 38];
function getRatio(evt, dragging, rtl) {
  var pos = Object(utils_event["f" /* position */])(evt),
      val = between((pos.left - dragging.left) / dragging.width, 0, 1);
  return rtl ? 1.0 - val : val;
}
function getModel(ratio, min, max, step, decimals) {
  var model = min + ratio * (max - min);

  if (step > 0) {
    var modulo = (model - min) % step;
    model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;
  }

  if (decimals > 0) {
    model = parseFloat(model.toFixed(decimals));
  }

  return between(model, min, max);
}
var SliderMixin = {
  directives: {
    TouchPan: TouchPan
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1,
      validator: function validator(v) {
        return v >= 0;
      }
    },
    color: String,
    labelColor: String,
    labelTextColor: String,
    dark: Boolean,
    dense: Boolean,
    label: Boolean,
    labelAlways: Boolean,
    markers: Boolean,
    snap: Boolean,
    disable: Boolean,
    readonly: Boolean,
    tabindex: [String, Number]
  },
  data: function data() {
    return {
      active: false,
      preventFocus: false,
      focus: false
    };
  },
  computed: {
    classes: function classes() {
      return "q-slider q-slider--".concat(this.active === true ? '' : 'in', "active") + (this.color !== void 0 ? " text-".concat(this.color) : '') + (this.disable === true ? ' disabled' : '') + (this.editable === true ? ' q-slider--editable' : '') + (this.focus === 'both' ? ' q-slider--focus' : '') + (this.label || this.labelAlways === true ? ' q-slider--label' : '') + (this.labelAlways === true ? ' q-slider--label-always' : '') + (this.dark === true ? ' q-slider--dark' : '') + (this.dense === true ? ' q-slider--dense' : '');
    },
    editable: function editable() {
      return !this.disable && !this.readonly;
    },
    decimals: function decimals() {
      return (String(this.step).trim('0').split('.')[1] || '').length;
    },
    computedStep: function computedStep() {
      return this.step === 0 ? 1 : this.step;
    },
    markerStyle: function markerStyle() {
      return {
        backgroundSize: 100 * this.computedStep / (this.max - this.min) + '% 2px'
      };
    },
    computedTabindex: function computedTabindex() {
      return this.editable === true ? this.tabindex || 0 : -1;
    },
    horizProp: function horizProp() {
      return this.$q.lang.rtl === true ? 'right' : 'left';
    }
  },
  methods: {
    __pan: function __pan(event) {
      if (event.isFinal) {
        if (this.dragging) {
          this.__updatePosition(event.evt); // only if touch, because we also have mousedown/up:


          event.touch === true && this.__updateValue(true);
          this.dragging = false;
        }

        this.active = false;
      } else if (event.isFirst) {
        this.dragging = this.__getDragging(event.evt);

        this.__updatePosition(event.evt);

        this.active = true;
      } else {
        this.__updatePosition(event.evt);

        this.__updateValue();
      }
    },
    __blur: function __blur() {
      this.focus = false;
    },
    __activate: function __activate(evt) {
      this.__updatePosition(evt, this.__getDragging(evt));

      this.preventFocus = true;
      this.active = true;
      document.addEventListener('mouseup', this.__deactivate, true);
    },
    __deactivate: function __deactivate() {
      this.preventFocus = false;
      this.active = false;

      this.__updateValue(true);

      this.__blur();

      document.removeEventListener('mouseup', this.__deactivate, true);
    },
    __mobileClick: function __mobileClick(evt) {
      this.__updatePosition(evt, this.__getDragging(evt));

      this.__updateValue(true);
    },
    __keyup: function __keyup(evt) {
      if (keyCodes.includes(evt.keyCode)) {
        this.__updateValue(true);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('mouseup', this.__deactivate, true);
  }
};
// CONCATENATED MODULE: ./node_modules/quasar/src/components/slider/QSlider.js








/* harmony default export */ var QSlider = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSlider',
  mixins: [SliderMixin],
  props: {
    value: {
      required: true,
      default: null,
      validator: function validator(v) {
        return typeof v === 'number' || v === null;
      }
    },
    labelValue: [String, Number]
  },
  data: function data() {
    return {
      model: this.value === null ? this.min : this.value,
      curRatio: 0
    };
  },
  watch: {
    value: function value(v) {
      this.model = v === null ? 0 : between(v, this.min, this.max);
    },
    min: function min(v) {
      this.model = between(this.model, v, this.max);
    },
    max: function max(v) {
      this.model = between(this.model, this.min, v);
    }
  },
  computed: {
    ratio: function ratio() {
      return this.active === true ? this.curRatio : this.modelRatio;
    },
    modelRatio: function modelRatio() {
      return (this.model - this.min) / (this.max - this.min);
    },
    trackStyle: function trackStyle() {
      return {
        width: 100 * this.ratio + '%'
      };
    },
    thumbStyle: function thumbStyle() {
      return defineProperty_default()({}, this.horizProp, 100 * this.ratio + '%');
    },
    thumbClass: function thumbClass() {
      return this.preventFocus === false && this.focus === true ? 'q-slider--focus' : null;
    },
    pinClass: function pinClass() {
      return 'q-slider__pin absolute flex flex-center' + (this.labelColor !== void 0 ? " text-".concat(this.labelColor) : '');
    },
    pinTextClass: function pinTextClass() {
      return 'q-slider__pin-value-marker-text' + (this.labelTextColor !== void 0 ? " text-".concat(this.labelTextColor) : '');
    },
    events: function events() {
      if (this.editable === true) {
        return this.$q.platform.is.mobile === true ? {
          click: this.__mobileClick
        } : {
          mousedown: this.__activate,
          focus: this.__focus,
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        };
      }
    },
    computedLabel: function computedLabel() {
      return this.labelValue !== void 0 ? this.labelValue : this.model;
    }
  },
  methods: {
    __updateValue: function __updateValue(change) {
      if (this.model !== this.value) {
        this.$emit('input', this.model);
      }

      change === true && this.$emit('change', this.model);
    },
    __getDragging: function __getDragging() {
      return this.$el.getBoundingClientRect();
    },
    __updatePosition: function __updatePosition(event) {
      var dragging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dragging;
      var ratio = getRatio(event, dragging, this.$q.lang.rtl);
      this.model = getModel(ratio, this.min, this.max, this.step, this.decimals);
      this.curRatio = this.snap !== true || this.step === 0 ? ratio : (this.model - this.min) / (this.max - this.min);
    },
    __focus: function __focus() {
      this.focus = true;
    },
    __keydown: function __keydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }

      Object(utils_event["j" /* stopAndPrevent */])(evt);
      var step = ([34, 33].includes(evt.keyCode) ? 10 : 1) * this.computedStep,
          offset = [34, 37, 40].includes(evt.keyCode) ? -step : step;
      this.model = between(parseFloat((this.model + offset).toFixed(this.decimals)), this.min, this.max);

      this.__updateValue();
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.value === null ? ' q-slider--no-value' : '',
      attrs: {
        role: 'slider',
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
        'aria-valuenow': this.value,
        'data-step': this.step,
        'aria-disabled': this.disable,
        tabindex: this.computedTabindex
      },
      class: this.classes,
      on: this.events,
      directives: this.editable ? [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          horizontal: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      }] : null
    }, [h('div', {
      staticClass: 'q-slider__track-container absolute overflow-hidden'
    }, [h('div', {
      staticClass: 'q-slider__track absolute-full',
      style: this.trackStyle
    }), this.markers === true ? h('div', {
      staticClass: 'q-slider__track-markers absolute-full fit',
      style: this.markerStyle
    }) : null]), h('div', {
      staticClass: 'q-slider__thumb-container absolute non-selectable',
      class: this.thumbClass,
      style: this.thumbStyle
    }, [h('svg', {
      staticClass: 'q-slider__thumb absolute',
      attrs: {
        width: '21',
        height: '21'
      }
    }, [h('circle', {
      attrs: {
        cx: '10.5',
        cy: '10.5',
        r: '7.875'
      }
    })]), this.label === true || this.labelAlways === true ? h('div', {
      class: this.pinClass
    }, [h('div', {
      staticClass: 'q-slider__pin-value-marker'
    }, [h('div', {
      staticClass: 'q-slider__pin-value-marker-bg'
    }), h('div', {
      class: this.pinTextClass
    }, [this.computedLabel])])]) : null, h('div', {
      staticClass: 'q-slider__focus-ring'
    })])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/can-render.js
// using it to manage SSR rendering with best performance

/* harmony default export */ var can_render = ({
  data: function data() {
    return {
      canRender: !Platform["e" /* onSSR */]
    };
  },
  mounted: function mounted() {
    this.canRender === false && (this.canRender = true);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/observer/QResizeObserver.js





/* harmony default export */ var QResizeObserver = (vue_runtime_esm["a" /* default */].extend({
  name: 'QResizeObserver',
  mixins: [can_render],
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  data: function data() {
    return this.hasObserver ? {} : {
      url: this.$q.platform.is.ie ? null : 'about:blank'
    };
  },
  methods: {
    trigger: function trigger(immediately) {
      if (immediately === true || this.debounce === 0 || this.debounce === '0') {
        this.__onResize();
      } else if (!this.timer) {
        this.timer = setTimeout(this.__onResize, this.debounce);
      }
    },
    __onResize: function __onResize() {
      this.timer = null;

      if (!this.$el || !this.$el.parentNode) {
        return;
      }

      var parent = this.$el.parentNode,
          size = {
        width: parent.offsetWidth,
        height: parent.offsetHeight
      };

      if (size.width === this.size.width && size.height === this.size.height) {
        return;
      }

      this.size = size;
      this.$emit('resize', this.size);
    },
    __cleanup: function __cleanup() {
      if (this.curDocView !== void 0) {
        // iOS is fuzzy, need to check it first
        if (this.curDocView.removeEventListener !== void 0) {
          this.curDocView.removeEventListener('resize', this.trigger, utils_event["e" /* listenOpts */].passive);
        }

        this.curDocView = void 0;
      }
    },
    __onObjLoad: function __onObjLoad() {
      this.__cleanup();

      if (this.$el.contentDocument) {
        this.curDocView = this.$el.contentDocument.defaultView;
        this.curDocView.addEventListener('resize', this.trigger, utils_event["e" /* listenOpts */].passive);
      }

      this.trigger(true);
    }
  },
  render: function render(h) {
    if (this.canRender === false || this.hasObserver === true) {
      return;
    }

    return h('object', {
      style: this.style,
      attrs: {
        tabindex: -1,
        // fix for Firefox
        type: 'text/html',
        data: this.url,
        'aria-hidden': true
      },
      on: {
        load: this.__onObjLoad
      }
    });
  },
  beforeCreate: function beforeCreate() {
    this.size = {
      width: -1,
      height: -1
    };

    if (Platform["d" /* isSSR */] === true) {
      return;
    }

    this.hasObserver = typeof ResizeObserver !== 'undefined';

    if (this.hasObserver !== true) {
      this.style = "".concat(this.$q.platform.is.ie ? 'visibility:hidden;' : '', "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;");
    }
  },
  mounted: function mounted() {
    if (this.hasObserver === true) {
      this.observer = new ResizeObserver(this.trigger);
      this.observer.observe(this.$el.parentNode);
      return;
    }

    if (this.$q.platform.is.ie) {
      this.url = 'about:blank';
      this.trigger(true);
    } else {
      this.__onObjLoad();
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);

    if (this.hasObserver === true) {
      this.$el.parentNode && this.observer.unobserve(this.$el.parentNode);
      return;
    }

    this.__cleanup();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js














function QTabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QTabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QTabs_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QTabs_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function getIndicatorClass(color, top, vertical) {
  var pos = vertical === true ? ['left', 'right'] : ['top', 'bottom'];
  return "absolute-".concat(top === true ? pos[0] : pos[1]).concat(color ? " text-".concat(color) : '');
}

function bufferPrioritySort(t1, t2) {
  if (t1.priorityMatched === t2.priorityMatched) {
    return t2.priorityHref - t1.priorityHref;
  }

  return t2.priorityMatched - t1.priorityMatched;
}

function bufferCleanSelected(t) {
  t.selected = false;
  return t;
}

var bufferFilters = [function (t) {
  return t.selected === true && t.exact === true && t.redirected !== true;
}, function (t) {
  return t.selected === true && t.exact === true;
}, function (t) {
  return t.selected === true && t.redirected !== true;
}, function (t) {
  return t.selected === true;
}, function (t) {
  return t.exact === true && t.redirected !== true;
}, function (t) {
  return t.redirected !== true;
}, function (t) {
  return t.exact === true;
}, function (t) {
  return true;
}],
    bufferFiltersLen = bufferFilters.length;
/* harmony default export */ var QTabs = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTabs',
  provide: function provide() {
    return {
      tabs: this.tabs,
      __activateTab: this.__activateTab,
      __activateRoute: this.__activateRoute
    };
  },
  props: {
    value: [Number, String],
    align: {
      type: String,
      default: 'center',
      validator: function validator(v) {
        return ['left', 'center', 'right', 'justify'].includes(v);
      }
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean
  },
  data: function data() {
    return {
      tabs: {
        current: this.value,
        activeColor: this.activeColor,
        activeBgColor: this.activeBgColor,
        indicatorClass: getIndicatorClass(this.indicatorColor, this.switchIndicator, this.vertical),
        narrowIndicator: this.narrowIndicator,
        inlineLabel: this.inlineLabel,
        noCaps: this.noCaps
      },
      scrollable: false,
      leftArrow: true,
      rightArrow: false,
      justify: false
    };
  },
  watch: {
    value: function value(name) {
      this.__activateTab(name, true, true);
    },
    activeColor: function activeColor(v) {
      this.tabs.activeColor = v;
    },
    activeBgColor: function activeBgColor(v) {
      this.tabs.activeBgColor = v;
    },
    vertical: function vertical(v) {
      this.tabs.indicatorClass = getIndicatorClass(this.indicatorColor, this.switchIndicator, v);
    },
    indicatorColor: function indicatorColor(v) {
      this.tabs.indicatorClass = getIndicatorClass(v, this.switchIndicator, this.vertical);
    },
    switchIndicator: function switchIndicator(v) {
      this.tabs.indicatorClass = getIndicatorClass(this.indicatorColor, v, this.vertical);
    },
    narrowIndicator: function narrowIndicator(v) {
      this.tabs.narrowIndicator = v;
    },
    inlineLabel: function inlineLabel(v) {
      this.tabs.inlineLabel = v;
    },
    noCaps: function noCaps(v) {
      this.tabs.noCaps = v;
    }
  },
  computed: {
    alignClass: function alignClass() {
      var align = this.scrollable === true ? 'left' : this.justify === true ? 'justify' : this.align;
      return "q-tabs__content--align-".concat(align);
    },
    classes: function classes() {
      return "q-tabs--".concat(this.scrollable === true ? '' : 'not-', "scrollable") + (this.dense === true ? ' q-tabs--dense' : '') + (this.shrink === true ? ' col-shrink' : '') + (this.stretch === true ? ' self-stretch' : '') + (this.vertical === true ? ' q-tabs--vertical' : '');
    }
  },
  methods: {
    __activateTab: function __activateTab(name, setCurrent, skipEmit) {
      if (this.tabs.current !== name) {
        skipEmit !== true && this.$emit('input', name);

        if (setCurrent === true || this.$listeners.input === void 0) {
          this.__animate(this.tabs.current, name);

          this.tabs.current = name;
        }
      }
    },
    __activateRoute: function __activateRoute(params) {
      var _this = this;

      if (this.bufferRoute !== this.$route && this.buffer.length > 0) {
        clearTimeout(this.bufferTimer);
        this.bufferTimer = void 0;
        this.buffer.length = 0;
      }

      this.bufferRoute = this.$route;

      if (params !== void 0) {
        if (params.remove === true) {
          this.buffer = this.buffer.filter(function (t) {
            return t.name !== params.name;
          });
        } else {
          this.buffer.push(params);
        }
      }

      if (this.bufferTimer === void 0) {
        this.bufferTimer = setTimeout(function () {
          var tabs = [];

          for (var i = 0; i < bufferFiltersLen && tabs.length === 0; i++) {
            tabs = _this.buffer.filter(bufferFilters[i]);
          }

          tabs.sort(bufferPrioritySort);

          _this.__activateTab(tabs.length === 0 ? null : tabs[0].name, true);

          _this.buffer = _this.buffer.map(bufferCleanSelected);
          _this.bufferTimer = void 0;
        }, 1);
      }
    },
    __updateContainer: function __updateContainer(_ref) {
      var _this2 = this;

      var width = _ref.width,
          height = _ref.height;
      var scroll = this.vertical === true ? this.$refs.content.scrollHeight > height + 1 : this.$refs.content.scrollWidth > width + 1;

      if (this.scrollable !== scroll) {
        this.scrollable = scroll;
      }

      scroll === true && this.$nextTick(function () {
        return _this2.__updateArrows();
      });
      var justify = (this.vertical === true ? height : width) < parseInt(this.breakpoint, 10);

      if (this.justify !== justify) {
        this.justify = justify;
      }
    },
    __animate: function __animate(oldName, newName) {
      var _this3 = this;

      var oldTab = oldName !== void 0 && oldName !== null && oldName !== '' ? this.$children.find(function (tab) {
        return tab.name === oldName;
      }) : null,
          newTab = newName !== void 0 && newName !== null && newName !== '' ? this.$children.find(function (tab) {
        return tab.name === newName;
      }) : null;

      if (oldTab && newTab) {
        var oldEl = oldTab.$el.getElementsByClassName('q-tab__indicator')[0],
            newEl = newTab.$el.getElementsByClassName('q-tab__indicator')[0];
        clearTimeout(this.animateTimer);
        oldEl.style.transition = 'none';
        oldEl.style.transform = 'none';
        newEl.style.transition = 'none';
        newEl.style.transform = 'none';
        var oldPos = oldEl.getBoundingClientRect(),
            newPos = newEl.getBoundingClientRect();
        newEl.style.transform = this.vertical === true ? "translate3d(0,".concat(oldPos.top - newPos.top, "px,0) scale3d(1,").concat(newPos.height ? oldPos.height / newPos.height : 1, ",1)") : "translate3d(".concat(oldPos.left - newPos.left, "px,0,0) scale3d(").concat(newPos.width ? oldPos.width / newPos.width : 1, ",1,1)"); // allow scope updates to kick in

        this.$nextTick(function () {
          _this3.animateTimer = setTimeout(function () {
            newEl.style.transition = 'transform .25s cubic-bezier(.4, 0, .2, 1)';
            newEl.style.transform = 'none';
          }, 30);
        });
      }

      if (newTab && this.scrollable) {
        var _this$$refs$content$g = this.$refs.content.getBoundingClientRect(),
            left = _this$$refs$content$g.left,
            width = _this$$refs$content$g.width,
            top = _this$$refs$content$g.top,
            height = _this$$refs$content$g.height,
            _newPos = newTab.$el.getBoundingClientRect();

        var offset = this.vertical === true ? _newPos.top - top : _newPos.left - left;

        if (offset < 0) {
          this.$refs.content[this.vertical === true ? 'scrollTop' : 'scrollLeft'] += offset;

          this.__updateArrows();

          return;
        }

        offset += this.vertical === true ? _newPos.height - height : _newPos.width - width;

        if (offset > 0) {
          this.$refs.content[this.vertical === true ? 'scrollTop' : 'scrollLeft'] += offset;

          this.__updateArrows();
        }
      }
    },
    __updateArrows: function __updateArrows() {
      var content = this.$refs.content,
          rect = content.getBoundingClientRect(),
          left = this.vertical === true ? content.scrollTop : content.scrollLeft;
      this.leftArrow = left > 0;
      this.rightArrow = this.vertical === true ? left + rect.height + 5 < content.scrollHeight : left + rect.width + 5 < content.scrollWidth;
    },
    __animScrollTo: function __animScrollTo(value) {
      var _this4 = this;

      this.__stopAnimScroll();

      this.__scrollTowards(value);

      this.scrollTimer = setInterval(function () {
        if (_this4.__scrollTowards(value)) {
          _this4.__stopAnimScroll();
        }
      }, 5);
    },
    __scrollToStart: function __scrollToStart() {
      this.__animScrollTo(0);
    },
    __scrollToEnd: function __scrollToEnd() {
      this.__animScrollTo(9999);
    },
    __stopAnimScroll: function __stopAnimScroll() {
      clearInterval(this.scrollTimer);
    },
    __scrollTowards: function __scrollTowards(value) {
      var content = this.$refs.content,
          left = this.vertical === true ? content.scrollTop : content.scrollLeft,
          direction = value < left ? -1 : 1,
          done = false;
      left += direction * 5;

      if (left < 0) {
        done = true;
        left = 0;
      } else if (direction === -1 && left <= value || direction === 1 && left >= value) {
        done = true;
        left = value;
      }

      content[this.vertical === true ? 'scrollTop' : 'scrollLeft'] = left;

      this.__updateArrows();

      return done;
    }
  },
  created: function created() {
    this.buffer = [];
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.bufferTimer);
    clearTimeout(this.animateTimer);
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-tabs row no-wrap items-center',
      class: this.classes,
      on: QTabs_objectSpread({
        input: utils_event["i" /* stop */]
      }, this.$listeners),
      attrs: {
        role: 'tablist'
      }
    }, [h(QResizeObserver, {
      on: {
        resize: this.__updateContainer
      }
    }), h(QIcon["a" /* default */], {
      staticClass: 'q-tabs__arrow q-tabs__arrow--left q-tab__icon',
      class: this.leftArrow === true ? '' : 'q-tabs__arrow--faded',
      props: {
        name: this.leftIcon || (this.vertical === true ? this.$q.iconSet.tabs.up : this.$q.iconSet.tabs.left)
      },
      nativeOn: {
        mousedown: this.__scrollToStart,
        touchstart: this.__scrollToStart,
        mouseup: this.__stopAnimScroll,
        mouseleave: this.__stopAnimScroll,
        touchend: this.__stopAnimScroll
      }
    }), h('div', {
      ref: 'content',
      staticClass: 'q-tabs__content row no-wrap items-center self-stretch',
      class: this.alignClass
    }, Object(utils_slot["a" /* default */])(this, 'default')), h(QIcon["a" /* default */], {
      staticClass: 'q-tabs__arrow q-tabs__arrow--right q-tab__icon',
      class: this.rightArrow === true ? '' : 'q-tabs__arrow--faded',
      props: {
        name: this.rightIcon || (this.vertical === true ? this.$q.iconSet.tabs.down : this.$q.iconSet.tabs.right)
      },
      nativeOn: {
        mousedown: this.__scrollToEnd,
        touchstart: this.__scrollToEnd,
        mouseup: this.__stopAnimScroll,
        mouseleave: this.__stopAnimScroll,
        touchend: this.__stopAnimScroll
      }
    })]);
  }
}));
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/uid.js
var uid = __webpack_require__("1732");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/tabs/QTab.js










function QTab_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QTab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QTab_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QTab_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* harmony default export */ var QTab = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTab',
  mixins: [ripple["a" /* default */]],
  inject: {
    tabs: {
      default: function _default() {
        console.error('QTab/QRouteTab components need to be child of QTabsBar');
      }
    },
    __activateTab: {}
  },
  props: {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    name: {
      type: [Number, String],
      default: function _default() {
        return Object(uid["a" /* default */])();
      }
    },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean
  },
  computed: {
    isActive: function isActive() {
      return this.tabs.current === this.name;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, "q-tab--".concat(this.isActive ? '' : 'in', "active"), true), defineProperty_default()(_ref, "text-".concat(this.tabs.activeColor), this.isActive && this.tabs.activeColor), defineProperty_default()(_ref, "bg-".concat(this.tabs.activeBgColor), this.isActive && this.tabs.activeBgColor), defineProperty_default()(_ref, 'q-tab--full', this.icon && this.label && !this.tabs.inlineLabel), defineProperty_default()(_ref, 'q-tab--no-caps', this.noCaps === true || this.tabs.noCaps === true), defineProperty_default()(_ref, 'q-focusable q-hoverable cursor-pointer', !this.disable), defineProperty_default()(_ref, "disabled", this.disable), _ref;
    },
    computedTabIndex: function computedTabIndex() {
      return this.disable === true || this.isActive === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    __activate: function __activate(e, keyboard) {
      keyboard !== true && this.$refs.blurTarget !== void 0 && this.$refs.blurTarget.focus();

      if (this.disable !== true) {
        this.$listeners.click !== void 0 && this.$emit('click', e);

        this.__activateTab(this.name);
      }
    },
    __onKeyup: function __onKeyup(e) {
      e.keyCode === 13 && this.__activate(e, true);
    },
    __getContent: function __getContent(h) {
      var narrow = this.tabs.narrowIndicator,
          content = [],
          indicator = h('div', {
        staticClass: 'q-tab__indicator',
        class: this.tabs.indicatorClass
      });
      this.icon !== void 0 && content.push(h(QIcon["a" /* default */], {
        staticClass: 'q-tab__icon',
        props: {
          name: this.icon
        }
      }));
      this.label !== void 0 && content.push(h('div', {
        staticClass: 'q-tab__label'
      }, [this.label]));
      this.alert !== false && content.push(h('div', {
        staticClass: 'q-tab__alert',
        class: this.alert !== true ? "text-".concat(this.alert) : null
      }));
      narrow && content.push(indicator);
      var node = [h('div', {
        staticClass: 'q-focus-helper',
        attrs: {
          tabindex: -1
        },
        ref: 'blurTarget'
      }), h('div', {
        staticClass: 'q-tab__content self-stretch flex-center relative-position no-pointer-events q-anchor--skip non-selectable',
        class: this.tabs.inlineLabel === true ? 'row no-wrap q-tab__content--inline' : 'column'
      }, content.concat(Object(utils_slot["a" /* default */])(this, 'default')))];
      !narrow && node.push(indicator);
      return node;
    },
    __renderTab: function __renderTab(h, tag, props) {
      var data = defineProperty_default()({
        staticClass: 'q-tab relative-position self-stretch flex flex-center text-center',
        class: this.classes,
        attrs: {
          tabindex: this.computedTabIndex,
          role: 'tab',
          'aria-selected': this.isActive
        },
        directives: this.ripple !== false && this.disable === true ? null : [{
          name: 'ripple',
          value: this.ripple
        }]
      }, tag === 'div' ? 'on' : 'nativeOn', QTab_objectSpread({
        input: utils_event["i" /* stop */]
      }, this.$listeners, {
        click: this.__activate,
        keyup: this.__onKeyup
      }));

      if (props !== void 0) {
        data.props = props;
      }

      return h(tag, data, this.__getContent(h));
    }
  },
  render: function render(h) {
    return this.__renderTab(h, 'div');
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js


/* harmony default export */ var QTabPanels = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTabPanels',
  mixins: [PanelParentMixin],
  methods: {
    __renderPanels: function __renderPanels(h) {
      return h('div', {
        staticClass: 'q-tab-panels q-panel-parent',
        directives: this.panelDirectives,
        on: this.$listeners
      }, this.__getPanelContent(h));
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js



/* harmony default export */ var QTabPanel = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTabPanel',
  mixins: [PanelChildMixin],
  render: function render(h) {
    return h('div', {
      staticClass: 'q-tab-panel',
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/color/QColor.js



















var palette = ['rgb(255,204,204)', 'rgb(255,230,204)', 'rgb(255,255,204)', 'rgb(204,255,204)', 'rgb(204,255,230)', 'rgb(204,255,255)', 'rgb(204,230,255)', 'rgb(204,204,255)', 'rgb(230,204,255)', 'rgb(255,204,255)', 'rgb(255,153,153)', 'rgb(255,204,153)', 'rgb(255,255,153)', 'rgb(153,255,153)', 'rgb(153,255,204)', 'rgb(153,255,255)', 'rgb(153,204,255)', 'rgb(153,153,255)', 'rgb(204,153,255)', 'rgb(255,153,255)', 'rgb(255,102,102)', 'rgb(255,179,102)', 'rgb(255,255,102)', 'rgb(102,255,102)', 'rgb(102,255,179)', 'rgb(102,255,255)', 'rgb(102,179,255)', 'rgb(102,102,255)', 'rgb(179,102,255)', 'rgb(255,102,255)', 'rgb(255,51,51)', 'rgb(255,153,51)', 'rgb(255,255,51)', 'rgb(51,255,51)', 'rgb(51,255,153)', 'rgb(51,255,255)', 'rgb(51,153,255)', 'rgb(51,51,255)', 'rgb(153,51,255)', 'rgb(255,51,255)', 'rgb(255,0,0)', 'rgb(255,128,0)', 'rgb(255,255,0)', 'rgb(0,255,0)', 'rgb(0,255,128)', 'rgb(0,255,255)', 'rgb(0,128,255)', 'rgb(0,0,255)', 'rgb(128,0,255)', 'rgb(255,0,255)', 'rgb(245,0,0)', 'rgb(245,123,0)', 'rgb(245,245,0)', 'rgb(0,245,0)', 'rgb(0,245,123)', 'rgb(0,245,245)', 'rgb(0,123,245)', 'rgb(0,0,245)', 'rgb(123,0,245)', 'rgb(245,0,245)', 'rgb(214,0,0)', 'rgb(214,108,0)', 'rgb(214,214,0)', 'rgb(0,214,0)', 'rgb(0,214,108)', 'rgb(0,214,214)', 'rgb(0,108,214)', 'rgb(0,0,214)', 'rgb(108,0,214)', 'rgb(214,0,214)', 'rgb(163,0,0)', 'rgb(163,82,0)', 'rgb(163,163,0)', 'rgb(0,163,0)', 'rgb(0,163,82)', 'rgb(0,163,163)', 'rgb(0,82,163)', 'rgb(0,0,163)', 'rgb(82,0,163)', 'rgb(163,0,163)', 'rgb(92,0,0)', 'rgb(92,46,0)', 'rgb(92,92,0)', 'rgb(0,92,0)', 'rgb(0,92,46)', 'rgb(0,92,92)', 'rgb(0,46,92)', 'rgb(0,0,92)', 'rgb(46,0,92)', 'rgb(92,0,92)', 'rgb(255,255,255)', 'rgb(205,205,205)', 'rgb(178,178,178)', 'rgb(153,153,153)', 'rgb(127,127,127)', 'rgb(102,102,102)', 'rgb(76,76,76)', 'rgb(51,51,51)', 'rgb(25,25,25)', 'rgb(0,0,0)'];
/* harmony default export */ var QColor = (vue_runtime_esm["a" /* default */].extend({
  name: 'QColor',
  directives: {
    TouchPan: TouchPan
  },
  props: {
    value: String,
    defaultValue: String,
    defaultView: {
      type: String,
      default: 'spectrum',
      validator: function validator(v) {
        return ['spectrum', 'tune', 'palette'].includes(v);
      }
    },
    formatModel: {
      type: String,
      default: 'auto',
      validator: function validator(v) {
        return ['auto', 'hex', 'rgb', 'hexa', 'rgba'].includes(v);
      }
    },
    palette: Array,
    noHeader: Boolean,
    noFooter: Boolean,
    disable: Boolean,
    readonly: Boolean,
    dark: Boolean
  },
  data: function data() {
    return {
      topView: this.formatModel === 'auto' ? this.value === void 0 || this.value === null || this.value === '' || this.value.startsWith('#') ? 'hex' : 'rgb' : this.formatModel.startsWith('hex') ? 'hex' : 'rgb',
      view: this.defaultView,
      model: this.__parseModel(this.value || this.defaultValue)
    };
  },
  watch: {
    value: function value(v) {
      var model = this.__parseModel(v || this.defaultValue);

      if (model.hex !== this.model.hex) {
        this.model = model;
      }
    },
    defaultValue: function defaultValue(v) {
      if (!this.value && v) {
        var model = this.__parseModel(v);

        if (model.hex !== this.model.hex) {
          this.model = model;
        }
      }
    }
  },
  computed: {
    editable: function editable() {
      return this.disable !== true && this.readonly !== true;
    },
    forceHex: function forceHex() {
      return this.formatModel === 'auto' ? null : this.formatModel.indexOf('hex') > -1;
    },
    forceAlpha: function forceAlpha() {
      return this.formatModel === 'auto' ? null : this.formatModel.indexOf('a') > -1;
    },
    isHex: function isHex() {
      return this.value === void 0 || this.value === null || this.value === '' || this.value.startsWith('#');
    },
    isOutputHex: function isOutputHex() {
      return this.forceHex !== null ? this.forceHex : this.isHex;
    },
    hasAlpha: function hasAlpha() {
      if (this.forceAlpha !== null) {
        return this.forceAlpha;
      }

      return this.model.a !== void 0;
    },
    currentBgColor: function currentBgColor() {
      return {
        backgroundColor: this.model.rgb || '#000'
      };
    },
    headerClass: function headerClass() {
      var light = this.model.a !== void 0 && this.model.a < 65 ? true : Object(colors["d" /* luminosity */])(this.model) > 0.4;
      return "q-color-picker__header-content--".concat(light ? 'light' : 'dark');
    },
    spectrumStyle: function spectrumStyle() {
      return {
        background: "hsl(".concat(this.model.h, ",100%,50%)")
      };
    },
    spectrumPointerStyle: function spectrumPointerStyle() {
      return defineProperty_default()({
        top: "".concat(100 - this.model.v, "%")
      }, this.$q.lang.rtl ? 'right' : 'left', "".concat(this.model.s, "%"));
    },
    inputsArray: function inputsArray() {
      var inp = ['r', 'g', 'b'];

      if (this.hasAlpha === true) {
        inp.push('a');
      }

      return inp;
    },
    computedPalette: function computedPalette() {
      return this.palette !== void 0 && this.palette.length > 0 ? this.palette : palette;
    }
  },
  created: function created() {
    this.__spectrumChange = throttle(this.__spectrumChange, 20);
  },
  render: function render(h) {
    var child = [this.__getContent(h)];
    this.noHeader !== true && child.unshift(this.__getHeader(h));
    this.noFooter !== true && child.push(this.__getFooter(h));
    return h('div', {
      staticClass: 'q-color-picker',
      class: {
        disabled: this.disable,
        'q-color-picker--dark': this.dark
      }
    }, child);
  },
  methods: {
    __getHeader: function __getHeader(h) {
      var _this = this;

      return h('div', {
        staticClass: 'q-color-picker__header relative-position overflow-hidden'
      }, [h('div', {
        staticClass: 'q-color-picker__header-bg absolute-full'
      }), h('div', {
        staticClass: 'q-color-picker__header-content absolute-full',
        class: this.headerClass,
        style: this.currentBgColor
      }, [h(QTabs, {
        props: {
          value: this.topView,
          dense: true,
          align: 'justify'
        },
        on: {
          input: function input(val) {
            _this.topView = val;
          }
        }
      }, [h(QTab, {
        props: {
          label: 'HEX' + (this.hasAlpha === true ? 'A' : ''),
          name: 'hex',
          ripple: false
        }
      }), h(QTab, {
        props: {
          label: 'RGB' + (this.hasAlpha === true ? 'A' : ''),
          name: 'rgb',
          ripple: false
        }
      })]), h('div', {
        staticClass: 'q-color-picker__header-banner row flex-center no-wrap'
      }, [h('input', {
        staticClass: 'fit',
        domProps: {
          value: this.model[this.topView]
        },
        attrs: !this.editable ? {
          readonly: true
        } : null,
        on: {
          input: function input(evt) {
            _this.__updateErrorIcon(_this.__onEditorChange(evt) === true);
          },
          blur: function blur(evt) {
            _this.__onEditorChange(evt, true) === true && _this.$forceUpdate();

            _this.__updateErrorIcon(false);
          }
        }
      }), h(QIcon["a" /* default */], {
        ref: 'errorIcon',
        staticClass: 'q-color-picker__error-icon absolute no-pointer-events',
        props: {
          name: this.$q.iconSet.type.negative
        }
      })])])]);
    },
    __getContent: function __getContent(h) {
      return h(QTabPanels, {
        props: {
          value: this.view,
          animated: true
        }
      }, [h(QTabPanel, {
        staticClass: 'q-color-picker__spectrum-tab',
        props: {
          name: 'spectrum'
        }
      }, this.__getSpectrumTab(h)), h(QTabPanel, {
        staticClass: 'q-pa-md q-color-picker__tune-tab',
        props: {
          name: 'tune'
        }
      }, this.__getTuneTab(h)), h(QTabPanel, {
        staticClass: 'q-pa-sm q-color-picker__palette-tab',
        props: {
          name: 'palette'
        }
      }, this.__getPaletteTab(h))]);
    },
    __getFooter: function __getFooter(h) {
      var _this2 = this;

      return h(QTabs, {
        staticClass: 'q-color-picker__footer',
        props: {
          value: this.view,
          dense: true,
          align: 'justify'
        },
        on: {
          input: function input(val) {
            _this2.view = val;
          }
        }
      }, [h(QTab, {
        props: {
          icon: this.$q.iconSet.colorPicker.spectrum,
          name: 'spectrum',
          ripple: false
        }
      }), h(QTab, {
        props: {
          icon: this.$q.iconSet.colorPicker.tune,
          name: 'tune',
          ripple: false
        }
      }), h(QTab, {
        props: {
          icon: this.$q.iconSet.colorPicker.palette,
          name: 'palette',
          ripple: false
        }
      })]);
    },
    __getSpectrumTab: function __getSpectrumTab(h) {
      var _this3 = this;

      return [h('div', {
        ref: 'spectrum',
        staticClass: 'q-color-picker__spectrum non-selectable relative-position cursor-pointer',
        style: this.spectrumStyle,
        class: {
          readonly: !this.editable
        },
        on: this.editable ? {
          click: this.__spectrumClick
        } : null,
        directives: this.editable ? [{
          name: 'touch-pan',
          modifiers: {
            prevent: true,
            stop: true,
            mouse: true
          },
          value: this.__spectrumPan
        }] : null
      }, [h('div', {
        style: {
          paddingBottom: '100%'
        }
      }), h('div', {
        staticClass: 'q-color-picker__spectrum-white absolute-full'
      }), h('div', {
        staticClass: 'q-color-picker__spectrum-black absolute-full'
      }), h('div', {
        staticClass: 'absolute',
        style: this.spectrumPointerStyle
      }, [this.model.hex !== void 0 ? h('div', {
        staticClass: 'q-color-picker__spectrum-circle'
      }) : null])]), h('div', {
        staticClass: 'q-color-picker__sliders'
      }, [h('div', {
        staticClass: 'q-color-picker__hue q-mx-sm non-selectable'
      }, [h(QSlider, {
        props: {
          value: this.model.h,
          min: 0,
          max: 360,
          fillHandleAlways: true,
          readonly: !this.editable
        },
        on: {
          input: this.__onHueChange,
          change: function change(val) {
            return _this3.__onHueChange(val, true);
          }
        }
      })]), this.hasAlpha === true ? h('div', {
        staticClass: 'q-mx-sm q-color-picker__alpha non-selectable'
      }, [h(QSlider, {
        props: {
          value: this.model.a,
          min: 0,
          max: 100,
          fillHandleAlways: true,
          readonly: !this.editable
        },
        on: {
          input: function input(value) {
            return _this3.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100);
          },
          change: function change(value) {
            return _this3.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100, true);
          }
        }
      })]) : null])];
    },
    __getTuneTab: function __getTuneTab(h) {
      var _this4 = this;

      return [h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['R']), h(QSlider, {
        props: {
          value: this.model.r,
          min: 0,
          max: 255,
          color: 'red',
          dark: this.dark,
          readonly: !this.editable
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'r', 255);
          },
          change: function change(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'r', 255, true);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.r
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'r', 255);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'r', 255, true);
          }
        }
      })]), h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['G']), h(QSlider, {
        props: {
          value: this.model.g,
          min: 0,
          max: 255,
          color: 'green',
          dark: this.dark,
          readonly: !this.editable
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'g', 255);
          },
          change: function change(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'g', 255, true);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.g
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'g', 255);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'g', 255, true);
          }
        }
      })]), h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['B']), h(QSlider, {
        props: {
          value: this.model.b,
          min: 0,
          max: 255,
          color: 'blue',
          readonly: !this.editable,
          dark: this.dark
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'b', 255);
          },
          change: function change(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'b', 255, true);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.b
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'b', 255);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'b', 255, true);
          }
        }
      })]), this.hasAlpha === true ? h('div', {
        staticClass: 'row items-center no-wrap'
      }, [h('div', ['A']), h(QSlider, {
        props: {
          value: this.model.a,
          color: 'grey',
          readonly: !this.editable,
          dark: this.dark
        },
        on: {
          input: function input(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100);
          },
          change: function change(value) {
            return _this4.__onNumericChange({
              target: {
                value: value
              }
            }, 'a', 100, true);
          }
        }
      }), h('input', {
        domProps: {
          value: this.model.a
        },
        attrs: {
          maxlength: 3,
          readonly: !this.editable
        },
        on: {
          input: function input(evt) {
            return _this4.__onNumericChange(evt, 'a', 100);
          },
          blur: function blur(evt) {
            return _this4.__onNumericChange(evt, 'a', 100, true);
          }
        }
      })]) : null];
    },
    __getPaletteTab: function __getPaletteTab(h) {
      var _this5 = this;

      return [h('div', {
        staticClass: 'row items-center q-color-picker__palette-rows',
        class: this.editable === true ? 'q-color-picker__palette-rows--editable' : null
      }, this.computedPalette.map(function (color) {
        return h('div', {
          staticClass: 'q-color-picker__cube col-auto',
          style: {
            backgroundColor: color
          },
          on: _this5.editable ? {
            click: function click() {
              _this5.__onPalettePick(color);
            }
          } : null
        });
      }))];
    },
    __onSpectrumChange: function __onSpectrumChange(left, top, change) {
      var panel = this.$refs.spectrum;

      if (panel === void 0) {
        return;
      }

      var width = panel.clientWidth,
          height = panel.clientHeight,
          rect = panel.getBoundingClientRect();
      var x = Math.min(width, Math.max(0, left - rect.left));

      if (this.$q.lang.rtl) {
        x = width - x;
      }

      var y = Math.min(height, Math.max(0, top - rect.top)),
          s = Math.round(100 * x / width),
          v = Math.round(100 * Math.max(0, Math.min(1, -(y / height) + 1))),
          rgb = Object(colors["c" /* hsvToRgb */])({
        h: this.model.h,
        s: s,
        v: v,
        a: this.hasAlpha === true ? this.model.a : void 0
      });
      this.model.s = s;
      this.model.v = v;

      this.__update(rgb, change);
    },
    __onHueChange: function __onHueChange(h, change) {
      h = Math.round(h);
      var rgb = Object(colors["c" /* hsvToRgb */])({
        h: h,
        s: this.model.s,
        v: this.model.v,
        a: this.hasAlpha === true ? this.model.a : void 0
      });
      this.model.h = h;

      this.__update(rgb, change);
    },
    __onNumericChange: function __onNumericChange(evt, formatModel, max, change) {
      if (!/^[0-9]+$/.test(evt.target.value)) {
        change && this.$forceUpdate();
        return;
      }

      var val = Math.floor(Number(evt.target.value));

      if (val < 0 || val > max) {
        change && this.$forceUpdate();
        return;
      }

      var rgb = {
        r: formatModel === 'r' ? val : this.model.r,
        g: formatModel === 'g' ? val : this.model.g,
        b: formatModel === 'b' ? val : this.model.b,
        a: this.hasAlpha === true ? formatModel === 'a' ? val : this.model.a : void 0
      };

      if (formatModel !== 'a') {
        var hsv = Object(colors["f" /* rgbToHsv */])(rgb);
        this.model.h = hsv.h;
        this.model.s = hsv.s;
        this.model.v = hsv.v;
      }

      this.__update(rgb, change);

      if (change !== true && evt.target.selectionEnd !== void 0) {
        var index = evt.target.selectionEnd;
        this.$nextTick(function () {
          evt.target.setSelectionRange(index, index);
        });
      }
    },
    __onEditorChange: function __onEditorChange(evt, change) {
      var rgb;
      var inp = evt.target.value;

      if (this.topView === 'hex') {
        if (inp.length !== (this.hasAlpha === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(inp)) {
          return true;
        }

        rgb = Object(colors["b" /* hexToRgb */])(inp);
      } else {
        var model;

        if (!inp.endsWith(')')) {
          return true;
        } else if (this.hasAlpha !== true && inp.startsWith('rgb(')) {
          model = inp.substring(4, inp.length - 1).split(',').map(function (n) {
            return parseInt(n, 10);
          });

          if (model.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(inp)) {
            return true;
          }
        } else if (this.hasAlpha === true && inp.startsWith('rgba(')) {
          model = inp.substring(5, inp.length - 1).split(',');

          if (model.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(inp)) {
            return true;
          }

          for (var i = 0; i < 3; i++) {
            var _v = parseInt(model[i], 10);

            if (_v < 0 || _v > 255) {
              return true;
            }

            model[i] = _v;
          }

          var v = parseFloat(model[3]);

          if (v < 0 || v > 1) {
            return true;
          }

          model[3] = v;
        } else {
          return true;
        }

        if (model[0] < 0 || model[0] > 255 || model[1] < 0 || model[1] > 255 || model[2] < 0 || model[2] > 255 || this.hasAlpha === true && (model[3] < 0 || model[3] > 1)) {
          return true;
        }

        rgb = {
          r: model[0],
          g: model[1],
          b: model[2],
          a: this.hasAlpha === true ? model[3] * 100 : void 0
        };
      }

      var hsv = Object(colors["f" /* rgbToHsv */])(rgb);
      this.model.h = hsv.h;
      this.model.s = hsv.s;
      this.model.v = hsv.v;

      this.__update(rgb, change);

      if (change !== true) {
        var index = evt.target.selectionEnd;
        this.$nextTick(function () {
          evt.target.setSelectionRange(index, index);
        });
      }
    },
    __onPalettePick: function __onPalettePick(color) {
      var def = this.__parseModel(color);

      var rgb = {
        r: def.r,
        g: def.g,
        b: def.b,
        a: def.a
      };

      if (rgb.a === void 0) {
        rgb.a = this.model.a;
      }

      this.model.h = def.h;
      this.model.s = def.s;
      this.model.v = def.v;

      this.__update(rgb, true);
    },
    __update: function __update(rgb, change) {
      // update internally
      this.model.hex = Object(colors["e" /* rgbToHex */])(rgb);
      this.model.rgb = Object(colors["g" /* rgbToString */])(rgb);
      this.model.r = rgb.r;
      this.model.g = rgb.g;
      this.model.b = rgb.b;
      this.model.a = rgb.a;
      var value = this.model[this.isOutputHex === true ? 'hex' : 'rgb']; // emit new value

      this.$emit('input', value);
      change === true && this.$emit('change', value);
    },
    __updateErrorIcon: function __updateErrorIcon(val) {
      // we MUST avoid vue triggering a render,
      // so manually changing this
      this.$refs.errorIcon.$el.style.opacity = val ? 1 : 0;
    },
    __parseModel: function __parseModel(v) {
      var forceAlpha = this.forceAlpha !== void 0 ? this.forceAlpha : this.formatModel === 'auto' ? null : this.formatModel.indexOf('a') > -1;

      if (v === null || v === void 0 || v === '' || testPattern.anyColor(v) !== true) {
        return {
          h: 0,
          s: 0,
          v: 0,
          r: 0,
          g: 0,
          b: 0,
          a: forceAlpha === true ? 100 : void 0,
          hex: void 0,
          rgb: void 0
        };
      }

      var model = Object(colors["i" /* stringToRgb */])(v);

      if (forceAlpha === true && model.a === void 0) {
        model.a = 100;
      }

      model.hex = Object(colors["e" /* rgbToHex */])(model);
      model.rgb = Object(colors["g" /* rgbToString */])(model);
      return Object.assign(model, Object(colors["f" /* rgbToHsv */])(model));
    },
    __spectrumPan: function __spectrumPan(evt) {
      if (evt.isFinal) {
        this.__onSpectrumChange(evt.position.left, evt.position.top, true);
      } else {
        this.__spectrumChange(evt);
      }
    },
    // throttled in created()
    __spectrumChange: function __spectrumChange(evt) {
      this.__onSpectrumChange(evt.position.left, evt.position.top);
    },
    __spectrumClick: function __spectrumClick(evt) {
      this.__onSpectrumChange(evt.pageX - window.pageXOffset, evt.pageY - window.pageYOffset, true);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/color/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/date-persian.js


// taken from https://github.com/jalaali/jalaali-js

/*
  Jalaali years starting the 33-year rule.
*/
var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
/*
  Converts a Gregorian date to Jalaali.
*/

function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === '[object Date]') {
    gd = gy.getDate();
    gm = gy.getMonth() + 1;
    gy = gy.getFullYear();
  }

  return d2j(g2d(gy, gm, gd));
}
/*
  Converts a Jalaali date to Gregorian.
*/

function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
/*
  Checks whether a Jalaali date is valid or not.
*/

function isValidJalaaliDate(jy, jm, jd) {
  return jy >= -61 && jy <= 3177 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= jalaaliMonthLength(jy, jm);
}
/*
  Is this a leap year or not?
*/

function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
/*
  Number of days in a given month in a Jalaali year.
*/


function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  if (isLeapJalaaliYear(jy)) return 30;
  return 29;
}
/*
    This function determines if the Jalaali (Persian) year is
    leap (366-day long) or is the common year (365 days)

    @param jy Jalaali calendar year (-61 to 3177)
    @returns number of years since the last leap year (0 to 4)
 */

function jalCalLeap(jy) {
  var bl = breaks.length,
      jp = breaks[0],
      jm,
      jump,
      leap,
      n,
      i;

  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error('Invalid Jalaali year ' + jy);
  }

  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;

    if (jy < jm) {
      break;
    }

    jp = jm;
  }

  n = jy - jp;

  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }

  leap = date_persian_mod(date_persian_mod(n + 1, 33) - 1, 4);

  if (leap === -1) {
    leap = 4;
  }

  return leap;
}
/*
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param jy Jalaali calendar year (-61 to 3177)
  @param withoutLeap when don't need leap (true or false) default is false
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
*/


function jalCal(jy, withoutLeap) {
  var bl = breaks.length,
      gy = jy + 621,
      leapJ = -14,
      jp = breaks[0],
      jm,
      jump,
      leap,
      leapG,
      march,
      n,
      i;

  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error('Invalid Jalaali year ' + jy);
  } // Find the limiting years for the Jalaali year jy.


  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;

    if (jy < jm) {
      break;
    }

    leapJ = leapJ + div(jump, 33) * 8 + div(date_persian_mod(jump, 33), 4);
    jp = jm;
  }

  n = jy - jp; // Find the number of leap years from AD 621 to the beginning
  // of the current Jalaali year in the Persian calendar.

  leapJ = leapJ + div(n, 33) * 8 + div(date_persian_mod(n, 33) + 3, 4);

  if (date_persian_mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  } // And the same in the Gregorian calendar (until the year gy).


  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150; // Determine the Gregorian date of Farvardin the 1st.

  march = 20 + leapJ - leapG; // Find how many years have passed since the last leap year.

  if (!withoutLeap) {
    if (jump - n < 6) {
      n = n - jump + div(jump + 4, 33) * 33;
    }

    leap = date_persian_mod(date_persian_mod(n + 1, 33) - 1, 4);

    if (leap === -1) {
      leap = 4;
    }
  }

  return {
    leap: leap,
    gy: gy,
    march: march
  };
}
/*
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param jy Jalaali year (1 to 3100)
  @param jm Jalaali month (1 to 12)
  @param jd Jalaali day (1 to 29/31)
  @return Julian Day number
*/


function j2d(jy, jm, jd) {
  var r = jalCal(jy, true);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
/*
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jdn Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
*/


function d2j(jdn) {
  var gy = d2g(jdn).gy,
      // Calculate Gregorian year (gy).
  jy = gy - 621,
      r = jalCal(jy, false),
      jdn1f = g2d(gy, 3, r.march),
      jd,
      jm,
      k; // Find number of days that passed since 1 Farvardin.

  k = jdn - jdn1f;

  if (k >= 0) {
    if (k <= 185) {
      // The first 6 months.
      jm = 1 + div(k, 31);
      jd = date_persian_mod(k, 31) + 1;
      return {
        jy: jy,
        jm: jm,
        jd: jd
      };
    } else {
      // The remaining months.
      k -= 186;
    }
  } else {
    // Previous Jalaali year.
    jy -= 1;
    k += 179;

    if (r.leap === 1) {
      k += 1;
    }
  }

  jm = 7 + div(k, 30);
  jd = date_persian_mod(k, 30) + 1;
  return {
    jy: jy,
    jm: jm,
    jd: jd
  };
}
/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/


function g2d(gy, gm, gd) {
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * date_persian_mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/


function d2g(jdn) {
  var j, i, gd, gm, gy;
  j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  i = div(date_persian_mod(j, 1461), 4) * 5 + 308;
  gd = div(date_persian_mod(i, 153), 5) + 1;
  gm = date_persian_mod(div(i, 153), 12) + 1;
  gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return {
    gy: gy,
    gm: gm,
    gd: gd
  };
}
/*
  Utility helper functions.
*/


function div(a, b) {
  return ~~(a / b);
}

function date_persian_mod(a, b) {
  return a - ~~(a / b) * b;
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/datetime/datetime-mixin.js



/* harmony default export */ var datetime_mixin = ({
  props: {
    value: {
      required: true
    },
    mask: {
      type: String
    },
    locale: Object,
    calendar: {
      type: String,
      validator: function validator(v) {
        return ['gregorian', 'persian'].includes(v);
      },
      default: 'gregorian'
    },
    landscape: Boolean,
    color: String,
    textColor: String,
    dark: Boolean,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    readonly: Boolean,
    disable: Boolean
  },
  watch: {
    mask: function mask() {
      var _this = this;

      this.$nextTick(function () {
        _this.__updateValue({},
        /* reason for QDate only */
        'mask');
      });
    },
    computedLocale: function computedLocale() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.__updateValue({},
        /* reason for QDate only */
        'locale');
      });
    }
  },
  computed: {
    editable: function editable() {
      return this.disable !== true && this.readonly !== true;
    },
    computedColor: function computedColor() {
      return this.color || 'primary';
    },
    computedTextColor: function computedTextColor() {
      return this.textColor || 'white';
    },
    computedTabindex: function computedTabindex() {
      return this.editable === true ? 0 : -1;
    },
    headerClass: function headerClass() {
      var cls = [];
      this.color !== void 0 && cls.push("bg-".concat(this.color));
      this.textColor !== void 0 && cls.push("text-".concat(this.textColor));
      return cls.join(' ');
    },
    computedLocale: function computedLocale() {
      return this.__getComputedLocale();
    }
  },
  methods: {
    __getComputedLocale: function __getComputedLocale() {
      return this.locale || this.$q.lang.date;
    },
    __getCurrentDate: function __getCurrentDate() {
      var d = new Date();

      if (this.calendar === 'persian') {
        var jDate = toJalaali(d);
        return {
          year: jDate.jy,
          month: jDate.jm,
          day: jDate.jd
        };
      }

      return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate()
      };
    },
    __getCurrentTime: function __getCurrentTime() {
      var d = new Date();
      return {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds(),
        millisecond: d.getMilliseconds()
      };
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/quasar/src/lang.js + 1 modules
var lang = __webpack_require__("ec5d");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/date.js









/* eslint no-fallthrough: 0 */




var MILLISECONDS_IN_DAY = 86400000,
    MILLISECONDS_IN_HOUR = 3600000,
    MILLISECONDS_IN_MINUTE = 60000,
    defaultMask = 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    token = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,
    reverseToken = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,
    regexStore = {};

function getRegexData(mask, dateLocale) {
  var days = '(' + dateLocale.days.join('|') + ')',
      key = mask + days;

  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }

  var daysShort = '(' + dateLocale.daysShort.join('|') + ')',
      months = '(' + dateLocale.months.join('|') + ')',
      monthsShort = '(' + dateLocale.monthsShort.join('|') + ')';
  var map = {};
  var index = 0;
  var regexText = mask.replace(reverseToken, function (match) {
    index++;

    switch (match) {
      case 'YY':
        map.YY = index;
        return '(-?\\d{1,2})';

      case 'YYYY':
        map.YYYY = index;
        return '(-?\\d{1,4})';

      case 'M':
        map.M = index;
        return '(\\d{1,2})';

      case 'MM':
        map.M = index; // bumping to M

        return '(\\d{2})';

      case 'MMM':
        map.MMM = index;
        return monthsShort;

      case 'MMMM':
        map.MMMM = index;
        return months;

      case 'D':
        map.D = index;
        return '(\\d{1,2})';

      case 'Do':
        map.D = index++; // bumping to D

        return '(\\d{1,2}(st|nd|rd|th))';

      case 'DD':
        map.D = index; // bumping to D

        return '(\\d{2})';

      case 'H':
        map.H = index;
        return '(\\d{1,2})';

      case 'HH':
        map.H = index; // bumping to H

        return '(\\d{2})';

      case 'h':
        map.h = index;
        return '(\\d{1,2})';

      case 'hh':
        map.h = index; // bumping to h

        return '(\\d{2})';

      case 'm':
        map.m = index;
        return '(\\d{1,2})';

      case 'mm':
        map.m = index; // bumping to m

        return '(\\d{2})';

      case 's':
        map.s = index;
        return '(\\d{1,2})';

      case 'ss':
        map.s = index; // bumping to s

        return '(\\d{2})';

      case 'S':
        map.S = index;
        return '(\\d{1})';

      case 'SS':
        map.S = index; // bump to S

        return '(\\d{2})';

      case 'SSS':
        map.S = index; // bump to S

        return '(\\d{3})';

      case 'A':
        map.A = index;
        return '(AM|PM)';

      case 'a':
        map.a = index;
        return '(am|pm)';

      case 'aa':
        map.aa = index;
        return '(a\\.m\\.|p\\.m\\.)';

      case 'ddd':
        return daysShort;

      case 'dddd':
        return days;

      case 'Q':
      case 'd':
      case 'E':
        return '(\\d{1})';

      case 'Qo':
        return '(1st|2nd|3rd|4th)';

      case 'DDD':
      case 'DDDD':
        return '(\\d{1,3})';

      case 'w':
        return '(\\d{1,2})';

      case 'ww':
        return '(\\d{2})';

      case 'Z':
        // to split: (?:(Z)()()|([+-])?(\\d{2}):?(\\d{2}))
        return '(Z|[+-]\\d{2}:\\d{2})';

      case 'ZZ':
        return '(Z|[+-]\\d{2}\\d{2})';

      case 'X':
        map.X = index;
        return '(-?\\d+)';

      case 'x':
        map.x = index;
        return '(-?\\d{4,})';

      default:
        index--;

        if (match[0] === '[') {
          match = match.substring(1, match.length - 1);
        }

        return match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  });
  var res = {
    map: map,
    regex: new RegExp('^' + regexText)
  };
  regexStore[key] = res;
  return res;
}

function extractDate(str, mask, dateLocale) {
  var d = __splitDate(str, mask, dateLocale);

  return new Date(d.year, d.month === null ? null : d.month - 1, d.day, d.hour, d.minute, d.second, d.millisecond);
}
function __splitDate(str, mask, dateLocale, calendar) {
  var date = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    dateHash: null,
    timeHash: null
  };

  if (str === void 0 || str === null || str === '' || typeof str !== 'string') {
    return date;
  }

  if (mask === void 0) {
    mask = defaultMask;
  }

  var langOpts = dateLocale !== void 0 ? dateLocale : lang["a" /* default */].props.date,
      months = langOpts.months,
      monthsShort = langOpts.monthsShort;

  var _getRegexData = getRegexData(mask, langOpts),
      regex = _getRegexData.regex,
      map = _getRegexData.map;

  var match = str.match(regex);

  if (match === null) {
    return date;
  }

  if (map.X !== void 0 || map.x !== void 0) {
    var stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);

    if (isNaN(stamp) === true || stamp < 0) {
      return date;
    }

    var d = new Date(stamp * (map.X !== void 0 ? 1000 : 1));
    date.year = d.getFullYear();
    date.month = d.getMonth() + 1;
    date.day = d.getDate();
    date.hour = d.getHours();
    date.minute = d.getMinutes();
    date.second = d.getSeconds();
    date.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      var y = parseInt(match[map.YY], 10);
      date.year = y < 0 ? y : 2000 + y;
    }

    if (map.M !== void 0) {
      date.month = parseInt(match[map.M], 10);

      if (date.month < 1 || date.month > 12) {
        return date;
      }
    } else if (map.MMM !== void 0) {
      date.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date.month = months.indexOf(match[map.MMMM]) + 1;
    }

    if (map.D !== void 0) {
      date.day = parseInt(match[map.D], 10);

      if (date.year === null || date.month === null || date.day < 1) {
        return date;
      }

      var maxDay = calendar !== 'persian' ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);

      if (date.day > maxDay) {
        return date;
      }
    }

    if (map.H !== void 0) {
      date.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date.hour = parseInt(match[map.h], 10) % 12;

      if (map.A && match[map.A] === 'PM' || map.a && match[map.a] === 'pm' || map.aa && match[map.aa] === 'p.m.') {
        date.hour += 12;
      }

      date.hour = date.hour % 24;
    }

    if (map.m !== void 0) {
      date.minute = parseInt(match[map.m], 10) % 60;
    }

    if (map.s !== void 0) {
      date.second = parseInt(match[map.s], 10) % 60;
    }

    if (map.S !== void 0) {
      date.millisecond = parseInt(match[map.S], 10) * Math.pow(10, 3 - match[map.S].length);
    }
  }

  date.dateHash = date.year + '/' + pad(date.month) + '/' + pad(date.day);
  date.timeHash = pad(date.hour) + ':' + pad(date.minute) + ':' + pad(date.second);
  return date;
}

function formatTimezone(offset) {
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sign = offset > 0 ? '-' : '+',
      absOffset = Math.abs(offset),
      hours = Math.floor(absOffset / 60),
      minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}

function setMonth(date, newMonth
/* 1-based */
) {
  var test = new Date(date.getFullYear(), newMonth, 0, 0, 0, 0, 0),
      days = test.getDate();
  date.setMonth(newMonth - 1, Math.min(days, date.getDate()));
}

function getChange(date, mod, add) {
  var t = new Date(date),
      sign = add ? 1 : -1;
  Object.keys(mod).forEach(function (key) {
    if (key === 'month') {
      setMonth(t, t.getMonth() + 1 + sign * mod.month);
      return;
    }

    var op = key === 'year' ? 'FullYear' : capitalize(key === 'days' ? 'date' : key);
    t["set".concat(op)](t["get".concat(op)]() + sign * mod[key]);
  });
  return t;
}

function isValid(date) {
  return typeof date === 'number' ? true : isNaN(Date.parse(date)) === false;
}
function buildDate(mod, utc) {
  return adjustDate(new Date(), mod, utc);
}
function getDayOfWeek(date) {
  var dow = new Date(date).getDay();
  return dow === 0 ? 7 : dow;
}
function getWeekOfYear(date) {
  // Remove time components of date
  var thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Change date to Thursday same week

  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3); // Take January 4th as it is always in week 1 (see ISO 8601)

  var firstThursday = new Date(thursday.getFullYear(), 0, 4); // Change date to Thursday same week

  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3); // Check if daylight-saving-time-switch occurred and correct for it

  var ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds); // Number of weeks between target Thursday and first Thursday

  var weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function isBetweenDates(date, from, to) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var d1 = new Date(from).getTime(),
      d2 = new Date(to).getTime(),
      cur = new Date(date).getTime();
  opts.inclusiveFrom && d1--;
  opts.inclusiveTo && d2++;
  return cur > d1 && cur < d2;
}
function addToDate(date, mod) {
  return getChange(date, mod, true);
}
function subtractFromDate(date, mod) {
  return getChange(date, mod, false);
}
function adjustDate(date, mod, utc) {
  var t = new Date(date),
      prefix = "set".concat(utc ? 'UTC' : '');
  Object.keys(mod).forEach(function (key) {
    if (key === 'month') {
      setMonth(t, mod.month);
      return;
    }

    var op = key === 'year' ? 'FullYear' : key.charAt(0).toUpperCase() + key.slice(1);
    t["".concat(prefix).concat(op)](mod[key]);
  });
  return t;
}
function startOfDate(date, unit) {
  var t = new Date(date);

  switch (unit) {
    case 'year':
      t.setMonth(0);

    case 'month':
      t.setDate(1);

    case 'day':
      t.setHours(0);

    case 'hour':
      t.setMinutes(0);

    case 'minute':
      t.setSeconds(0);

    case 'second':
      t.setMilliseconds(0);
  }

  return t;
}
function endOfDate(date, unit) {
  var t = new Date(date);

  switch (unit) {
    case 'year':
      t.setMonth(11);

    case 'month':
      t.setDate(daysInMonth(date));

    case 'day':
      t.setHours(23);

    case 'hour':
      t.setMinutes(59);

    case 'minute':
      t.setSeconds(59);

    case 'second':
      t.setMilliseconds(59);
  }

  return t;
}
function getMaxDate()
/* date, ...args */
{
  var t = 0;
  Array.prototype.slice.call(arguments).forEach(function (d) {
    t = Math.max(t, new Date(d));
  });
  return t;
}
function getMinDate(date
/*, ...args */
) {
  var t = new Date(date);
  Array.prototype.slice.call(arguments, 1).forEach(function (d) {
    t = Math.min(t, new Date(d));
  });
  return t;
}

function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}

function getDateDiff(date, subtract) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'days';
  var t = new Date(date),
      sub = new Date(subtract);

  switch (unit) {
    case 'years':
      return t.getFullYear() - sub.getFullYear();

    case 'months':
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();

    case 'days':
      return getDiff(startOfDate(t, 'day'), startOfDate(sub, 'day'), MILLISECONDS_IN_DAY);

    case 'hours':
      return getDiff(startOfDate(t, 'hour'), startOfDate(sub, 'hour'), MILLISECONDS_IN_HOUR);

    case 'minutes':
      return getDiff(startOfDate(t, 'minute'), startOfDate(sub, 'minute'), MILLISECONDS_IN_MINUTE);

    case 'seconds':
      return getDiff(startOfDate(t, 'second'), startOfDate(sub, 'second'), 1000);
  }
}
function getDayOfYear(date) {
  return getDateDiff(date, startOfDate(date, 'year'), 'days') + 1;
}
function inferDateFormat(date) {
  return isDate(date) === true ? 'date' : typeof date === 'number' ? 'number' : 'string';
}
function getDateBetween(date, min, max) {
  var t = new Date(date);

  if (min) {
    var low = new Date(min);

    if (t < low) {
      return low;
    }
  }

  if (max) {
    var high = new Date(max);

    if (t > high) {
      return high;
    }
  }

  return t;
}
function isSameDate(date, date2, unit) {
  var t = new Date(date),
      d = new Date(date2);

  if (unit === void 0) {
    return t.getTime() === d.getTime();
  }

  switch (unit) {
    case 'second':
      if (t.getSeconds() !== d.getSeconds()) {
        return false;
      }

    case 'minute':
      // intentional fall-through
      if (t.getMinutes() !== d.getMinutes()) {
        return false;
      }

    case 'hour':
      // intentional fall-through
      if (t.getHours() !== d.getHours()) {
        return false;
      }

    case 'day':
      // intentional fall-through
      if (t.getDate() !== d.getDate()) {
        return false;
      }

    case 'month':
      // intentional fall-through
      if (t.getMonth() !== d.getMonth()) {
        return false;
      }

    case 'year':
      // intentional fall-through
      if (t.getFullYear() !== d.getFullYear()) {
        return false;
      }

      break;

    default:
      throw new Error("date isSameDate unknown unit ".concat(unit));
  }

  return true;
}
function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return "".concat(n, "th");
  }

  switch (n % 10) {
    case 1:
      return "".concat(n, "st");

    case 2:
      return "".concat(n, "nd");

    case 3:
      return "".concat(n, "rd");
  }

  return "".concat(n, "th");
}

var formatter = {
  // Year: 00, 01, ..., 99
  YY: function YY(date, _, forcedYear) {
    // workaround for < 1900 with new Date()
    var y = this.YYYY(date, _, forcedYear) % 100;
    return y > 0 ? pad(y) : '-' + pad(Math.abs(y));
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function YYYY(date, _, forcedYear) {
    // workaround for < 1900 with new Date()
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date.getFullYear();
  },
  // Month: 1, 2, ..., 12
  M: function M(date) {
    return date.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function MM(date) {
    return pad(date.getMonth() + 1);
  },
  // Month Short Name: Jan, Feb, ...
  MMM: function MMM(date, dateLocale) {
    return dateLocale.monthsShort[date.getMonth()];
  },
  // Month Name: January, February, ...
  MMMM: function MMMM(date, dateLocale) {
    return dateLocale.months[date.getMonth()];
  },
  // Quarter: 1, 2, 3, 4
  Q: function Q(date) {
    return Math.ceil((date.getMonth() + 1) / 3);
  },
  // Quarter: 1st, 2nd, 3rd, 4th
  Qo: function Qo(date) {
    return getOrdinal(this.Q(date));
  },
  // Day of month: 1, 2, ..., 31
  D: function D(date) {
    return date.getDate();
  },
  // Day of month: 1st, 2nd, ..., 31st
  Do: function Do(date) {
    return getOrdinal(date.getDate());
  },
  // Day of month: 01, 02, ..., 31
  DD: function DD(date) {
    return pad(date.getDate());
  },
  // Day of year: 1, 2, ..., 366
  DDD: function DDD(date) {
    return getDayOfYear(date);
  },
  // Day of year: 001, 002, ..., 366
  DDDD: function DDDD(date) {
    return pad(getDayOfYear(date), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function d(date) {
    return date.getDay();
  },
  // Day of week: Su, Mo, ...
  dd: function dd(date, dateLocale) {
    return this.dddd(date, dateLocale).slice(0, 2);
  },
  // Day of week: Sun, Mon, ...
  ddd: function ddd(date, dateLocale) {
    return dateLocale.daysShort[date.getDay()];
  },
  // Day of week: Sunday, Monday, ...
  dddd: function dddd(date, dateLocale) {
    return dateLocale.days[date.getDay()];
  },
  // Day of ISO week: 1, 2, ..., 7
  E: function E(date) {
    return date.getDay() || 7;
  },
  // Week of Year: 1 2 ... 52 53
  w: function w(date) {
    return getWeekOfYear(date);
  },
  // Week of Year: 01 02 ... 52 53
  ww: function ww(date) {
    return pad(getWeekOfYear(date));
  },
  // Hour: 0, 1, ... 23
  H: function H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function HH(date) {
    return pad(date.getHours());
  },
  // Hour: 1, 2, ..., 12
  h: function h(date) {
    var hours = date.getHours();

    if (hours === 0) {
      return 12;
    }

    if (hours > 12) {
      return hours % 12;
    }

    return hours;
  },
  // Hour: 01, 02, ..., 12
  hh: function hh(date) {
    return pad(this.h(date));
  },
  // Minute: 0, 1, ..., 59
  m: function m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function mm(date) {
    return pad(date.getMinutes());
  },
  // Second: 0, 1, ..., 59
  s: function s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function ss(date) {
    return pad(date.getSeconds());
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10));
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Meridiem: AM, PM
  A: function A(date) {
    return this.H(date) < 12 ? 'AM' : 'PM';
  },
  // Meridiem: am, pm
  a: function a(date) {
    return this.H(date) < 12 ? 'am' : 'pm';
  },
  // Meridiem: a.m., p.m.
  aa: function aa(date) {
    return this.H(date) < 12 ? 'a.m.' : 'p.m.';
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function Z(date) {
    return formatTimezone(date.getTimezoneOffset(), ':');
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function ZZ(date) {
    return formatTimezone(date.getTimezoneOffset());
  },
  // Seconds timestamp: 512969520
  X: function X(date) {
    return Math.floor(date.getTime() / 1000);
  },
  // Milliseconds timestamp: 512969520900
  x: function x(date) {
    return date.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity) {
    return;
  }

  var date = new Date(val);

  if (isNaN(date)) {
    return;
  }

  if (mask === void 0) {
    mask = defaultMask;
  }

  var locale = dateLocale !== void 0 ? dateLocale : lang["a" /* default */].props.date;
  return mask.replace(token, function (match, text) {
    return match in formatter ? formatter[match](date, locale, __forcedYear) : text === void 0 ? match : text.split('\\]').join(']');
  });
}
function clone(date) {
  return isDate(date) === true ? new Date(date.getTime()) : date;
}
/* harmony default export */ var utils_date = ({
  isValid: isValid,
  extractDate: extractDate,
  buildDate: buildDate,
  getDayOfWeek: getDayOfWeek,
  getWeekOfYear: getWeekOfYear,
  isBetweenDates: isBetweenDates,
  addToDate: addToDate,
  subtractFromDate: subtractFromDate,
  adjustDate: adjustDate,
  startOfDate: startOfDate,
  endOfDate: endOfDate,
  getMaxDate: getMaxDate,
  getMinDate: getMinDate,
  getDateDiff: getDateDiff,
  getDayOfYear: getDayOfYear,
  inferDateFormat: inferDateFormat,
  getDateBetween: getDateBetween,
  isSameDate: isSameDate,
  daysInMonth: daysInMonth,
  formatDate: formatDate,
  clone: clone
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/datetime/QDate.js














function QDate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QDate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QDate_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QDate_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var yearsInterval = 20;

var viewIsValid = function viewIsValid(v) {
  return ['Calendar', 'Years', 'Months'].includes(v);
};

/* harmony default export */ var QDate = (vue_runtime_esm["a" /* default */].extend({
  name: 'QDate',
  mixins: [datetime_mixin],
  props: {
    title: String,
    subtitle: String,
    emitImmediately: Boolean,
    mask: {
      // this mask is forced
      // when using persian calendar
      default: 'YYYY/MM/DD'
    },
    defaultYearMonth: {
      type: String,
      validator: function validator(v) {
        return /^-?[\d]+\/[0-1]\d$/.test(v);
      }
    },
    events: [Array, Function],
    eventColor: [String, Function],
    options: [Array, Function],
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: 'Calendar',
      validator: viewIsValid
    }
  },
  data: function data() {
    var _this$__getModels = this.__getModels(this.value, this.mask, this.__getComputedLocale()),
        inner = _this$__getModels.inner,
        external = _this$__getModels.external;

    return {
      view: this.defaultView,
      monthDirection: 'left',
      yearDirection: 'left',
      startYear: inner.year - inner.year % yearsInterval,
      innerModel: inner,
      extModel: external
    };
  },
  watch: {
    value: function value(v) {
      var _this = this;

      var _this$__getModels2 = this.__getModels(v, this.mask, this.__getComputedLocale()),
          inner = _this$__getModels2.inner,
          external = _this$__getModels2.external;

      if (this.extModel.dateHash !== external.dateHash || this.extModel.timeHash !== external.timeHash) {
        this.extModel = external;
      }

      if (inner.dateHash !== this.innerModel.dateHash) {
        this.monthDirection = this.innerModel.dateHash < inner.dateHash ? 'left' : 'right';

        if (inner.year !== this.innerModel.year) {
          this.yearDirection = this.monthDirection;
        }

        this.$nextTick(function () {
          _this.startYear = inner.year - inner.year % yearsInterval;
          _this.innerModel = inner;
        });
      }
    },
    view: function view() {
      this.$refs.blurTarget !== void 0 && this.$refs.blurTarget.focus();
    }
  },
  computed: {
    classes: function classes() {
      var type = this.landscape === true ? 'landscape' : 'portrait';
      return "q-date--".concat(type, " q-date--").concat(type, "-").concat(this.minimal === true ? 'minimal' : 'standard') + (this.dark === true ? ' q-date--dark' : '') + (this.bordered === true ? " q-date--bordered" : '') + (this.square === true ? " q-date--square no-border-radius" : '') + (this.flat === true ? " q-date--flat no-shadow" : '') + (this.readonly === true && this.disable !== true ? ' q-date--readonly' : '') + (this.disable === true ? ' disabled' : '');
    },
    headerTitle: function headerTitle() {
      if (this.title !== void 0 && this.title !== null && this.title.length > 0) {
        return this.title;
      }

      var model = this.extModel;

      if (model.dateHash === null) {
        return ' --- ';
      }

      var date;

      if (this.calendar !== 'persian') {
        date = new Date(model.year, model.month - 1, model.day);
      } else {
        var gDate = toGregorian(model.year, model.month, model.day);
        date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
      }

      if (isNaN(date.valueOf()) === true) {
        return ' --- ';
      }

      if (this.computedLocale.headerTitle !== void 0) {
        return this.computedLocale.headerTitle(date, model);
      }

      return this.computedLocale.daysShort[date.getDay()] + ', ' + this.computedLocale.monthsShort[model.month - 1] + ' ' + model.day;
    },
    headerSubtitle: function headerSubtitle() {
      return this.subtitle !== void 0 && this.subtitle !== null && this.subtitle.length > 0 ? this.subtitle : this.extModel.year !== null ? this.extModel.year : ' --- ';
    },
    dateArrow: function dateArrow() {
      var val = [this.$q.iconSet.datetime.arrowLeft, this.$q.iconSet.datetime.arrowRight];
      return this.$q.lang.rtl ? val.reverse() : val;
    },
    computedFirstDayOfWeek: function computedFirstDayOfWeek() {
      return this.firstDayOfWeek !== void 0 ? Number(this.firstDayOfWeek) : this.computedLocale.firstDayOfWeek;
    },
    daysOfWeek: function daysOfWeek() {
      var days = this.computedLocale.daysShort,
          first = this.computedFirstDayOfWeek;
      return first > 0 ? days.slice(first, 7).concat(days.slice(0, first)) : days;
    },
    daysInMonth: function daysInMonth() {
      return this.__getDaysInMonth(this.innerModel);
    },
    today: function today() {
      return this.__getCurrentDate();
    },
    evtFn: function evtFn() {
      var _this2 = this;

      return typeof this.events === 'function' ? this.events : function (date) {
        return _this2.events.includes(date);
      };
    },
    evtColor: function evtColor() {
      var _this3 = this;

      return typeof this.eventColor === 'function' ? this.eventColor : function (date) {
        return _this3.eventColor;
      };
    },
    isInSelection: function isInSelection() {
      var _this4 = this;

      return typeof this.options === 'function' ? this.options : function (date) {
        return _this4.options.includes(date);
      };
    },
    days: function days() {
      var date, endDay;
      var res = [];

      if (this.calendar !== 'persian') {
        date = new Date(this.innerModel.year, this.innerModel.month - 1, 1);
        endDay = new Date(this.innerModel.year, this.innerModel.month - 1, 0).getDate();
      } else {
        var gDate = toGregorian(this.innerModel.year, this.innerModel.month, 1);
        date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        var prevJM = this.innerModel.month - 1;
        var prevJY = this.innerModel.year;

        if (prevJM === 0) {
          prevJM = 12;
          prevJY--;
        }

        endDay = jalaaliMonthLength(prevJY, prevJM);
      }

      var days = date.getDay() - this.computedFirstDayOfWeek - 1;
      var len = days < 0 ? days + 7 : days;

      if (len < 6) {
        for (var i = endDay - len; i <= endDay; i++) {
          res.push({
            i: i,
            fill: true
          });
        }
      }

      var index = res.length,
          prefix = this.innerModel.year + '/' + pad(this.innerModel.month) + '/';

      for (var _i = 1; _i <= this.daysInMonth; _i++) {
        var day = prefix + pad(_i);

        if (this.options !== void 0 && this.isInSelection(day) !== true) {
          res.push({
            i: _i
          });
        } else {
          var event = this.events !== void 0 && this.evtFn(day) === true ? this.evtColor(day) : false;
          res.push({
            i: _i,
            in: true,
            flat: true,
            event: event
          });
        }
      }

      if (this.innerModel.year === this.extModel.year && this.innerModel.month === this.extModel.month) {
        var _i2 = index + this.innerModel.day - 1;

        res[_i2] !== void 0 && Object.assign(res[_i2], {
          unelevated: true,
          flat: false,
          color: this.computedColor,
          textColor: this.computedTextColor
        });
      }

      if (this.innerModel.year === this.today.year && this.innerModel.month === this.today.month) {
        res[index + this.today.day - 1].today = true;
      }

      var left = res.length % 7;

      if (left > 0) {
        var afterDays = 7 - left;

        for (var _i3 = 1; _i3 <= afterDays; _i3++) {
          res.push({
            i: _i3,
            fill: true
          });
        }
      }

      return res;
    }
  },
  methods: {
    setToday: function setToday() {
      this.__updateValue(QDate_objectSpread({}, this.today), 'today');

      this.view = 'Calendar';
    },
    setView: function setView(view) {
      if (viewIsValid(view) === true) {
        this.view = view;
      }
    },
    offsetCalendar: function offsetCalendar(type, descending) {
      if (['month', 'year'].includes(type)) {
        this["__goTo".concat(type === 'month' ? 'Month' : 'Year')](descending === true ? -1 : 1);
      }
    },
    __getModels: function __getModels(val, mask, locale) {
      var external = __splitDate(val, this.calendar === 'persian' ? 'YYYY/MM/DD' : mask, locale, this.calendar);

      return {
        external: external,
        inner: external.dateHash === null ? this.__getDefaultModel() : QDate_objectSpread({}, external)
      };
    },
    __getDefaultModel: function __getDefaultModel() {
      var year, month;

      if (this.defaultYearMonth !== void 0) {
        var d = this.defaultYearMonth.split('/');
        year = parseInt(d[0], 10);
        month = parseInt(d[1], 10);
      } else {
        // may come from data() where computed
        // props are not yet available
        var _d = this.today !== void 0 ? this.today : this.__getCurrentDate();

        year = _d.year;
        month = _d.month;
      }

      return {
        year: year,
        month: month,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: year + '/' + pad(month) + '/01'
      };
    },
    __getHeader: function __getHeader(h) {
      var _this5 = this;

      if (this.minimal === true) {
        return;
      }

      return h('div', {
        staticClass: 'q-date__header',
        class: this.headerClass
      }, [h('div', {
        staticClass: 'relative-position'
      }, [h('transition', {
        props: {
          name: 'q-transition--fade'
        }
      }, [h('div', {
        key: 'h-yr-' + this.headerSubtitle,
        staticClass: 'q-date__header-subtitle q-date__header-link',
        class: this.view === 'Years' ? 'q-date__header-link--active' : 'cursor-pointer',
        attrs: {
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this5.view = 'Years';
          },
          keyup: function keyup(e) {
            e.keyCode === 13 && (_this5.view = 'Years');
          }
        }
      }, [this.headerSubtitle])])]), h('div', {
        staticClass: 'q-date__header-title relative-position flex no-wrap'
      }, [h('div', {
        staticClass: 'relative-position col'
      }, [h('transition', {
        props: {
          name: 'q-transition--fade'
        }
      }, [h('div', {
        key: 'h-sub' + this.headerTitle,
        staticClass: 'q-date__header-title-label q-date__header-link',
        class: this.view === 'Calendar' ? 'q-date__header-link--active' : 'cursor-pointer',
        attrs: {
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this5.view = 'Calendar';
          },
          keyup: function keyup(e) {
            e.keyCode === 13 && (_this5.view = 'Calendar');
          }
        }
      }, [this.headerTitle])])]), this.todayBtn === true ? h(QBtn["a" /* default */], {
        staticClass: 'q-date__header-today',
        props: {
          icon: this.$q.iconSet.datetime.today,
          flat: true,
          size: 'sm',
          round: true,
          tabindex: this.computedTabindex
        },
        on: {
          click: this.setToday
        }
      }) : null])]);
    },
    __getNavigation: function __getNavigation(h, _ref) {
      var _this6 = this;

      var label = _ref.label,
          view = _ref.view,
          key = _ref.key,
          dir = _ref.dir,
          goTo = _ref.goTo,
          cls = _ref.cls;
      return [h('div', {
        staticClass: 'row items-center q-date__arrow'
      }, [h(QBtn["a" /* default */], {
        props: {
          round: true,
          dense: true,
          size: 'sm',
          flat: true,
          icon: this.dateArrow[0],
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            goTo(-1);
          }
        }
      })]), h('div', {
        staticClass: 'relative-position overflow-hidden flex flex-center' + cls
      }, [h('transition', {
        props: {
          name: 'q-transition--jump-' + dir
        }
      }, [h('div', {
        key: key
      }, [h(QBtn["a" /* default */], {
        props: {
          flat: true,
          dense: true,
          noCaps: true,
          label: label,
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this6.view = view;
          }
        }
      })])])]), h('div', {
        staticClass: 'row items-center q-date__arrow'
      }, [h(QBtn["a" /* default */], {
        props: {
          round: true,
          dense: true,
          size: 'sm',
          flat: true,
          icon: this.dateArrow[1],
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            goTo(1);
          }
        }
      })])];
    },
    __getCalendarView: function __getCalendarView(h) {
      var _this7 = this;

      return [h('div', {
        key: 'calendar-view',
        staticClass: 'q-date__view q-date__calendar'
      }, [h('div', {
        staticClass: 'q-date__navigation row items-center no-wrap'
      }, this.__getNavigation(h, {
        label: this.computedLocale.months[this.innerModel.month - 1],
        view: 'Months',
        key: this.innerModel.month,
        dir: this.monthDirection,
        goTo: this.__goToMonth,
        cls: ' col'
      }).concat(this.__getNavigation(h, {
        label: this.innerModel.year,
        view: 'Years',
        key: this.innerModel.year,
        dir: this.yearDirection,
        goTo: this.__goToYear,
        cls: ''
      }))), h('div', {
        staticClass: 'q-date__calendar-weekdays row items-center no-wrap'
      }, this.daysOfWeek.map(function (day) {
        return h('div', {
          staticClass: 'q-date__calendar-item'
        }, [h('div', [day])]);
      })), h('div', {
        staticClass: 'q-date__calendar-days-container relative-position overflow-hidden'
      }, [h('transition', {
        props: {
          name: 'q-transition--slide-' + this.monthDirection
        }
      }, [h('div', {
        key: this.innerModel.year + '/' + this.innerModel.month,
        staticClass: 'q-date__calendar-days fit'
      }, this.days.map(function (day) {
        return h('div', {
          staticClass: "q-date__calendar-item q-date__calendar-item--".concat(day.fill === true ? 'fill' : day.in === true ? 'in' : 'out')
        }, [day.in === true ? h(QBtn["a" /* default */], {
          staticClass: day.today === true ? 'q-date__today' : null,
          props: {
            dense: true,
            flat: day.flat,
            unelevated: day.unelevated,
            color: day.color,
            textColor: day.textColor,
            label: day.i,
            tabindex: _this7.computedTabindex
          },
          on: {
            click: function click() {
              _this7.__setDay(day.i);
            }
          }
        }, day.event !== false ? [h('div', {
          staticClass: 'q-date__event bg-' + day.event
        })] : null) : h('div', [day.i])]);
      }))])])])];
    },
    __getMonthsView: function __getMonthsView(h) {
      var _this8 = this;

      var currentYear = this.innerModel.year === this.today.year;
      var content = this.computedLocale.monthsShort.map(function (month, i) {
        var active = _this8.innerModel.month === i + 1;
        return h('div', {
          staticClass: 'q-date__months-item flex flex-center'
        }, [h(QBtn["a" /* default */], {
          staticClass: currentYear === true && _this8.today.month === i + 1 ? 'q-date__today' : null,
          props: {
            flat: !active,
            label: month,
            unelevated: active,
            color: active ? _this8.computedColor : null,
            textColor: active ? _this8.computedTextColor : null,
            tabindex: _this8.computedTabindex
          },
          on: {
            click: function click() {
              _this8.__setMonth(i + 1);
            }
          }
        })]);
      });
      return h('div', {
        key: 'months-view',
        staticClass: 'q-date__view q-date__months column flex-center'
      }, [h('div', {
        staticClass: 'q-date__months-content row'
      }, content)]);
    },
    __getYearsView: function __getYearsView(h) {
      var _this9 = this;

      var start = this.startYear,
          stop = start + yearsInterval,
          years = [];

      var _loop = function _loop(i) {
        var active = _this9.innerModel.year === i;
        years.push(h('div', {
          staticClass: 'q-date__years-item flex flex-center'
        }, [h(QBtn["a" /* default */], {
          staticClass: _this9.today.year === i ? 'q-date__today' : null,
          props: {
            flat: !active,
            label: i,
            dense: true,
            unelevated: active,
            color: active ? _this9.computedColor : null,
            textColor: active ? _this9.computedTextColor : null,
            tabindex: _this9.computedTabindex
          },
          on: {
            click: function click() {
              _this9.__setYear(i);
            }
          }
        })]));
      };

      for (var i = start; i <= stop; i++) {
        _loop(i);
      }

      return h('div', {
        staticClass: 'q-date__view q-date__years flex flex-center full-height'
      }, [h('div', {
        staticClass: 'col-auto'
      }, [h(QBtn["a" /* default */], {
        props: {
          round: true,
          dense: true,
          flat: true,
          icon: this.dateArrow[0],
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this9.startYear -= yearsInterval;
          }
        }
      })]), h('div', {
        staticClass: 'q-date__years-content col full-height row items-center'
      }, years), h('div', {
        staticClass: 'col-auto'
      }, [h(QBtn["a" /* default */], {
        props: {
          round: true,
          dense: true,
          flat: true,
          icon: this.dateArrow[1],
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this9.startYear += yearsInterval;
          }
        }
      })])]);
    },
    __getDaysInMonth: function __getDaysInMonth(obj) {
      return this.calendar !== 'persian' ? new Date(obj.year, obj.month, 0).getDate() : jalaaliMonthLength(obj.year, obj.month);
    },
    __goToMonth: function __goToMonth(offset) {
      var month = Number(this.innerModel.month) + offset,
          yearDir = this.yearDirection;

      if (month === 13) {
        month = 1;
        this.innerModel.year++;
        yearDir = 'left';
      } else if (month === 0) {
        month = 12;
        this.innerModel.year--;
        yearDir = 'right';
      }

      this.monthDirection = offset > 0 ? 'left' : 'right';
      this.yearDirection = yearDir;
      this.innerModel.month = month;
      this.emitImmediately === true && this.__updateValue({}, 'month');
    },
    __goToYear: function __goToYear(offset) {
      this.monthDirection = this.yearDirection = offset > 0 ? 'left' : 'right';
      this.innerModel.year = Number(this.innerModel.year) + offset;
      this.emitImmediately === true && this.__updateValue({}, 'year');
    },
    __setYear: function __setYear(year) {
      this.innerModel.year = year;
      this.emitImmediately === true && this.__updateValue({
        year: year
      }, 'year');
      this.view = this.extModel.month === null || this.defaultView === 'Years' ? 'Months' : 'Calendar';
    },
    __setMonth: function __setMonth(month) {
      this.innerModel.month = month;
      this.emitImmediately === true && this.__updateValue({
        month: month
      }, 'month');
      this.view = 'Calendar';
    },
    __setDay: function __setDay(day) {
      this.__updateValue({
        day: day
      }, 'day');
    },
    __updateValue: function __updateValue(date, reason) {
      var _this10 = this;

      if (date.year === void 0) {
        date.year = this.innerModel.year;
      }

      if (date.month === void 0) {
        date.month = this.innerModel.month;
      }

      if (date.day === void 0 || this.emitImmediately === true && (reason === 'year' || reason === 'month')) {
        date.day = this.innerModel.day;
        var maxDay = this.emitImmediately === true ? this.__getDaysInMonth(date) : this.daysInMonth;
        date.day = Math.min(date.day, maxDay);
      }

      var val = this.calendar === 'persian' ? date.year + '/' + pad(date.month) + '/' + pad(date.day) : formatDate(new Date(date.year, date.month - 1, date.day, this.extModel.hour, this.extModel.minute, this.extModel.second, this.extModel.millisecond), this.mask, this.computedLocale, date.year);
      date.changed = val !== this.value;
      this.$emit('input', val, reason, date);

      if (val === this.value && reason === 'today') {
        var newHash = date.year + '/' + pad(date.month) + '/' + pad(date.day);
        var curHash = this.innerModel.year + '/' + pad(this.innerModel.month) + '/' + pad(this.innerModel.day);

        if (newHash !== curHash) {
          this.monthDirection = curHash < newHash ? 'left' : 'right';

          if (date.year !== this.innerModel.year) {
            this.yearDirection = this.monthDirection;
          }

          this.$nextTick(function () {
            _this10.startYear = date.year - date.year % yearsInterval;
            Object.assign(_this10.innerModel, {
              year: date.year,
              month: date.month,
              day: date.day,
              dateHash: newHash
            });
          });
        }
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-date',
      class: this.classes,
      on: this.$listeners
    }, [this.__getHeader(h), h('div', {
      staticClass: 'q-date__content relative-position overflow-auto',
      attrs: {
        tabindex: -1
      },
      ref: 'blurTarget'
    }, [h('transition', {
      props: {
        name: 'q-transition--fade'
      }
    }, [this["__get".concat(this.view, "View")](h)])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/datetime/QTime.js










function QTime_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QTime_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QTime_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QTime_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* harmony default export */ var QTime = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTime',
  mixins: [datetime_mixin],
  directives: {
    TouchPan: TouchPan
  },
  props: {
    mask: {
      default: null
    },
    format24h: {
      type: Boolean,
      default: null
    },
    options: Function,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    withSeconds: Boolean,
    nowBtn: Boolean
  },
  data: function data() {
    var model = __splitDate(this.value, this.__getComputedMask(), this.__getComputedLocale(), this.calendar);

    var view = 'Hour';

    if (model.hour !== null) {
      if (model.minute === null) {
        view = 'Minute';
      } else if (this.withSeconds === true && model.second === null) {
        view = 'Second';
      }
    }

    return {
      view: view,
      isAM: model.hour === null || model.hour < 12,
      innerModel: model
    };
  },
  watch: {
    value: function value(v) {
      var model = __splitDate(v, this.computedMask, this.computedLocale, this.calendar);

      if (model.dateHash !== this.innerModel.dateHash || model.timeHash !== this.innerModel.timeHash) {
        this.innerModel = model;

        if (model.hour === null) {
          this.view = 'Hour';
        } else {
          this.isAM = model.hour < 12;
        }
      }
    }
  },
  computed: {
    classes: function classes() {
      return "q-time--".concat(this.landscape === true ? 'landscape' : 'portrait') + (this.dark === true ? ' q-time--dark' : '') + (this.readonly === true && this.disable !== true ? ' q-time--readonly' : '') + (this.disable === true ? ' disable' : '') + (this.bordered === true ? " q-time--bordered" : '') + (this.square === true ? " q-time--square no-border-radius" : '') + (this.flat === true ? " q-time--flat no-shadow" : '');
    },
    computedMask: function computedMask() {
      return this.__getComputedMask();
    },
    stringModel: function stringModel() {
      var time = this.innerModel;
      return {
        hour: time.hour === null ? '--' : this.computedFormat24h === true ? pad(time.hour) : String(this.isAM === true ? time.hour === 0 ? 12 : time.hour : time.hour > 12 ? time.hour - 12 : time.hour),
        minute: time.minute === null ? '--' : pad(time.minute),
        second: time.second === null ? '--' : pad(time.second)
      };
    },
    computedFormat24h: function computedFormat24h() {
      return this.format24h !== null ? this.format24h : this.$q.lang.date.format24h;
    },
    pointerStyle: function pointerStyle() {
      var forHour = this.view === 'Hour',
          divider = forHour === true ? 12 : 60,
          amount = this.innerModel[this.view.toLowerCase()],
          degrees = Math.round(amount * (360 / divider)) - 180;
      var transform = "rotate3d(0,0,1,".concat(degrees, "deg) translate3d(-50%,0,0)");

      if (forHour === true && this.computedFormat24h === true && this.innerModel.hour >= 12) {
        transform += ' scale3d(.7,.7,.7)';
      }

      return {
        transform: transform
      };
    },
    minLink: function minLink() {
      return this.innerModel.hour !== null;
    },
    secLink: function secLink() {
      return this.minLink === true && this.innerModel.minute !== null;
    },
    hourInSelection: function hourInSelection() {
      var _this = this;

      return this.hourOptions !== void 0 ? function (val) {
        return _this.hourOptions.includes(val);
      } : this.options !== void 0 ? function (val) {
        return _this.options(val, null, null);
      } : void 0;
    },
    minuteInSelection: function minuteInSelection() {
      var _this2 = this;

      return this.minuteOptions !== void 0 ? function (val) {
        return _this2.minuteOptions.includes(val);
      } : this.options !== void 0 ? function (val) {
        return _this2.options(_this2.innerModel.hour, val, null);
      } : void 0;
    },
    secondInSelection: function secondInSelection() {
      var _this3 = this;

      return this.secondOptions !== void 0 ? function (val) {
        return _this3.secondOptions.includes(val);
      } : this.options !== void 0 ? function (val) {
        return _this3.options(_this3.innerModel.hour, _this3.innerModel.minute, val);
      } : void 0;
    },
    positions: function positions() {
      var start,
          end,
          offset = 0,
          step = 1,
          inSel;

      if (this.view === 'Hour') {
        inSel = this.hourInSelection;

        if (this.computedFormat24h === true) {
          start = 0;
          end = 23;
        } else {
          start = 0;
          end = 11;

          if (this.isAM === false) {
            offset = 12;
          }
        }
      } else {
        start = 0;
        end = 55;
        step = 5;

        if (this.view === 'Minute') {
          inSel = this.minuteInSelection;
        } else {
          inSel = this.secondInSelection;
        }
      }

      var pos = [];

      for (var val = start, index = start; val <= end; val += step, index++) {
        var actualVal = val + offset,
            disable = inSel !== void 0 && inSel(actualVal) === false,
            label = this.view === 'Hour' && val === 0 ? this.format24h === true ? '00' : '12' : val;
        pos.push({
          val: actualVal,
          index: index,
          disable: disable,
          label: label
        });
      }

      return pos;
    }
  },
  methods: {
    setNow: function setNow() {
      this.__updateValue(QTime_objectSpread({}, this.__getCurrentDate(), {}, this.__getCurrentTime()));

      this.view = 'Hour';
    },
    __click: function __click(evt) {
      this.__drag({
        isFirst: true,
        evt: evt
      });

      this.__drag({
        isFinal: true,
        evt: evt
      });
    },
    __drag: function __drag(event) {
      // cases when on a popup getting closed
      // on previously emitted value
      if (this._isBeingDestroyed === true || this._isDestroyed === true) {
        return;
      }

      if (event.isFirst) {
        var clock = this.$refs.clock,
            _clock$getBoundingCli = clock.getBoundingClientRect(),
            top = _clock$getBoundingCli.top,
            left = _clock$getBoundingCli.left,
            width = _clock$getBoundingCli.width,
            dist = width / 2;

        this.dragging = {
          top: top + dist,
          left: left + dist,
          dist: dist * 0.7
        };
        this.dragCache = null;

        this.__updateClock(event.evt);

        return;
      }

      this.__updateClock(event.evt);

      if (event.isFinal) {
        this.dragging = false;

        if (this.view === 'Hour') {
          this.view = 'Minute';
        } else if (this.withSeconds && this.view === 'Minute') {
          this.view = 'Second';
        }
      }
    },
    __updateClock: function __updateClock(evt) {
      var val,
          pos = Object(utils_event["f" /* position */])(evt),
          height = Math.abs(pos.top - this.dragging.top),
          distance = Math.sqrt(Math.pow(Math.abs(pos.top - this.dragging.top), 2) + Math.pow(Math.abs(pos.left - this.dragging.left), 2)),
          angle = Math.asin(height / distance) * (180 / Math.PI);

      if (pos.top < this.dragging.top) {
        angle = this.dragging.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = this.dragging.left < pos.left ? angle + 90 : 270 - angle;
      }

      if (this.view === 'Hour') {
        val = Math.round(angle / 30);

        if (this.computedFormat24h === true) {
          if (distance < this.dragging.dist) {
            if (val < 12) {
              val += 12;
            }
          } else if (val === 12) {
            val = 0;
          }

          this.isAM = val < 12;
        } else if (this.isAM === true && val === 12) {
          val = 0;
        } else if (this.isAM === false && val !== 12) {
          val += 12;
        }
      } else {
        val = Math.round(angle / 6);

        if (val === 60) {
          val = 0;
        }
      }

      if (this.dragCache === val) {
        return;
      }

      var opt = this["".concat(this.view.toLowerCase(), "InSelection")];

      if (opt !== void 0 && opt(val) !== true) {
        return;
      }

      this.dragCache = val;
      this["__set".concat(this.view)](val);
    },
    __onKeyupHour: function __onKeyupHour(e) {
      if (e.keyCode === 13) {
        // ENTER
        this.view = 'Hour';
      } else {
        var wrap = this.computedFormat24h === true ? 24 : 12,
            offset = this.computedFormat24h !== true && this.isAM === false ? 12 : 0;

        if (e.keyCode === 37) {
          // ARROW LEFT
          this.__setHour(offset + (24 + this.innerModel.hour - 1) % wrap);
        } else if (e.keyCode === 39) {
          // ARROW RIGHT
          this.__setHour(offset + (24 + this.innerModel.hour + 1) % wrap);
        }
      }
    },
    __onKeyupMinute: function __onKeyupMinute(e) {
      if (e.keyCode === 13) {
        // ENTER
        this.view = 'Minute';
      } else if (e.keyCode === 37) {
        // ARROW LEFT
        this.__setMinute((60 + this.innerModel.minute - 1) % 60);
      } else if (e.keyCode === 39) {
        // ARROW RIGHT
        this.__setMinute((60 + this.innerModel.minute + 1) % 60);
      }
    },
    __onKeyupSecond: function __onKeyupSecond(e) {
      if (e.keyCode === 13) {
        // ENTER
        this.view = 'Second';
      } else if (e.keyCode === 37) {
        // ARROW LEFT
        this.__setSecond((60 + this.innerModel.second - 1) % 60);
      } else if (e.keyCode === 39) {
        // ARROW RIGHT
        this.__setSecond((60 + this.innerModel.second + 1) % 60);
      }
    },
    __getHeader: function __getHeader(h) {
      var _this4 = this;

      var label = [h('div', {
        staticClass: 'q-time__link',
        class: this.view === 'Hour' ? 'q-time__link--active' : 'cursor-pointer',
        attrs: {
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this4.view = 'Hour';
          },
          keyup: this.__onKeyupHour
        }
      }, [this.stringModel.hour]), h('div', [':']), h('div', this.minLink === true ? {
        staticClass: 'q-time__link',
        class: this.view === 'Minute' ? 'q-time__link--active' : 'cursor-pointer',
        attrs: {
          tabindex: this.computedTabindex
        },
        on: {
          click: function click() {
            _this4.view = 'Minute';
          },
          keyup: this.__onKeyupMinute
        }
      } : {
        staticClass: 'q-time__link'
      }, [this.stringModel.minute])];

      if (this.withSeconds === true) {
        label.push(h('div', [':']), h('div', this.secLink === true ? {
          staticClass: 'q-time__link',
          class: this.view === 'Second' ? 'q-time__link--active' : 'cursor-pointer',
          attrs: {
            tabindex: this.computedTabindex
          },
          on: {
            click: function click() {
              _this4.view = 'Second';
            },
            keyup: this.__onKeyupSecond
          }
        } : {
          staticClass: 'q-time__link'
        }, [this.stringModel.second]));
      }

      return h('div', {
        staticClass: 'q-time__header flex flex-center no-wrap',
        class: this.headerClass
      }, [h('div', {
        staticClass: 'q-time__header-label row items-center no-wrap',
        attrs: {
          dir: 'ltr'
        }
      }, label), this.computedFormat24h === false ? h('div', {
        staticClass: 'q-time__header-ampm column items-between no-wrap'
      }, [h('div', {
        staticClass: 'q-time__link',
        class: this.isAM === true ? 'q-time__link--active' : 'cursor-pointer',
        attrs: {
          tabindex: this.computedTabindex
        },
        on: {
          click: this.__setAm,
          keyup: function keyup(e) {
            e.keyCode === 13 && _this4.__setAm();
          }
        }
      }, ['AM']), h('div', {
        staticClass: 'q-time__link',
        class: this.isAM !== true ? 'q-time__link--active' : 'cursor-pointer',
        attrs: {
          tabindex: this.computedTabindex
        },
        on: {
          click: this.__setPm,
          keyup: function keyup(e) {
            e.keyCode === 13 && _this4.__setPm();
          }
        }
      }, ['PM'])]) : null]);
    },
    __getClock: function __getClock(h) {
      var _this5 = this;

      var view = this.view.toLowerCase(),
          current = this.innerModel[view];
      return h('div', {
        staticClass: 'q-time__content col relative-position'
      }, [h('transition', {
        props: {
          name: 'q-transition--scale'
        }
      }, [h('div', {
        key: 'clock' + this.view,
        staticClass: 'q-time__container-parent absolute-full'
      }, [h('div', {
        ref: 'clock',
        staticClass: 'q-time__container-child fit overflow-hidden'
      }, [h('div', {
        staticClass: 'q-time__clock cursor-pointer non-selectable',
        on: {
          click: this.__click
        },
        directives: [{
          name: 'touch-pan',
          value: this.__drag,
          modifiers: {
            stop: true,
            prevent: true,
            mouse: true
          }
        }]
      }, [h('div', {
        staticClass: 'q-time__clock-circle fit'
      }, [this.innerModel[view] !== null ? h('div', {
        staticClass: 'q-time__clock-pointer',
        style: this.pointerStyle,
        class: this.color !== void 0 ? "text-".concat(this.color) : null
      }) : null, this.positions.map(function (pos) {
        return h('div', {
          staticClass: "q-time__clock-position row flex-center q-time__clock-pos-".concat(pos.index),
          class: pos.val === current ? _this5.headerClass.concat(' q-time__clock-position--active') : pos.disable ? 'q-time__clock-position--disable' : null
        }, [h('span', [pos.label])]);
      })])])])])]), this.nowBtn === true ? h(QBtn["a" /* default */], {
        staticClass: 'q-time__now-button absolute',
        props: {
          icon: this.$q.iconSet.datetime.now,
          unelevated: true,
          size: 'sm',
          round: true,
          color: this.color,
          textColor: this.textColor,
          tabindex: this.computedTabindex
        },
        on: {
          click: this.setNow
        }
      }) : null]);
    },
    __setHour: function __setHour(hour) {
      if (this.innerModel.hour !== hour) {
        this.innerModel.hour = hour;
        this.innerModel.minute = null;
        this.innerModel.second = null;
      }
    },
    __setMinute: function __setMinute(minute) {
      if (this.innerModel.minute !== minute) {
        this.innerModel.minute = minute;
        this.innerModel.second = null;
        this.withSeconds !== true && this.__updateValue({
          minute: minute
        });
      }
    },
    __setSecond: function __setSecond(second) {
      this.innerModel.second !== second && this.__updateValue({
        second: second
      });
    },
    __setAm: function __setAm() {
      if (this.isAM) {
        return;
      }

      this.isAM = true;

      if (this.innerModel.hour === null) {
        return;
      }

      this.innerModel.hour -= 12;

      this.__verifyAndUpdate();
    },
    __setPm: function __setPm() {
      if (!this.isAM) {
        return;
      }

      this.isAM = false;

      if (this.innerModel.hour === null) {
        return;
      }

      this.innerModel.hour += 12;

      this.__verifyAndUpdate();
    },
    __verifyAndUpdate: function __verifyAndUpdate() {
      if (this.hourInSelection !== void 0 && this.hourInSelection(this.innerModel.hour) !== true) {
        this.innerModel = __splitDate();
        this.isAM = true;
        this.view = 'Hour';
        return;
      }

      if (this.minuteInSelection !== void 0 && this.minuteInSelection(this.innerModel.minute) !== true) {
        this.innerModel.minute = null;
        this.innerModel.second = null;
        this.view = 'Minute';
        return;
      }

      if (this.withSeconds === true && this.secondInSelection !== void 0 && this.secondInSelection(this.innerModel.second) !== true) {
        this.innerModel.second = null;
        this.view = 'Second';
        return;
      }

      if (this.innerModel.hour === null || this.innerModel.minute === null || this.withSeconds === true && this.innerModel.second === null) {
        return;
      }

      this.__updateValue({});
    },
    __getComputedMask: function __getComputedMask() {
      return this.calendar !== 'persian' && this.mask !== null ? this.mask : "HH:mm".concat(this.withSeconds === true ? ':ss' : '');
    },
    __updateValue: function __updateValue(obj) {
      var date = QTime_objectSpread({}, this.innerModel, {}, obj);

      var val = this.calendar === 'persian' ? pad(date.hour) + ':' + pad(date.minute) + (this.withSeconds === true ? ':' + pad(date.second) : '') : formatDate(new Date(date.year, date.month === null ? null : date.month - 1, date.day, date.hour, date.minute, date.second, date.millisecond), this.computedMask, this.computedLocale, date.year);
      date.changed = val !== this.value;
      this.$emit('input', val, date);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-time',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        tabindex: -1
      }
    }, [this.__getHeader(h), this.__getClock(h)]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/datetime/index.js



// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/history.js

/* harmony default export */ var mixins_history = ({
  methods: {
    __addHistory: function __addHistory() {
      var _this = this;

      this.__historyEntry = {
        condition: function condition() {
          return _this.hideOnRouteChange === true;
        },
        handler: this.hide
      };
      src_history["a" /* default */].add(this.__historyEntry);
    },
    __removeHistory: function __removeHistory() {
      if (this.__historyEntry !== void 0) {
        src_history["a" /* default */].remove(this.__historyEntry);
        this.__historyEntry = void 0;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.showing === true && this.__removeHistory();
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/prevent-scroll.js



var registered = 0,
    scrollPositionX,
    scrollPositionY,
    bodyLeft,
    bodyTop,
    closeTimer;

function onWheel(e) {
  if (shouldPreventScroll(e)) {
    Object(utils_event["j" /* stopAndPrevent */])(e);
  }
}

function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) {
    return true;
  }

  var path = Object(utils_event["b" /* getEventPath */])(e),
      shift = e.shiftKey && !e.deltaX,
      scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
      delta = shift || scrollY ? e.deltaY : e.deltaX;

  for (var index = 0; index < path.length; index++) {
    var el = path[index];

    if (hasScrollbar(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }

  return true;
}

function onAppleScroll(e) {
  if (e.target === document) {
    // required, otherwise iOS blocks further scrolling
    // until the mobile scrollbar dissapears
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop; // eslint-disable-line
  }
}

function apply(action) {
  var body = document.body;

  if (action === 'add') {
    var overflowY = window.getComputedStyle(body).overflowY;
    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;
    body.style.left = "-".concat(scrollPositionX, "px");
    body.style.top = "-".concat(scrollPositionY, "px");

    if (overflowY !== 'hidden' && (overflowY === 'scroll' || body.scrollHeight > window.innerHeight)) {
      body.classList.add('q-body--force-scrollbar');
    }

    body.classList.add('q-body--prevent-scroll');
    Platform["b" /* default */].is.ios === true && window.addEventListener('scroll', onAppleScroll, utils_event["e" /* listenOpts */].passiveCapture);
  } else {
    Platform["b" /* default */].is.ios === true && window.removeEventListener('scroll', onAppleScroll, utils_event["e" /* listenOpts */].passiveCapture);
    body.classList.remove('q-body--prevent-scroll');
  }

  if (Platform["b" /* default */].is.desktop === true && Platform["b" /* default */].is.mac === true) {
    // ref. https://developers.google.com/web/updates/2017/01/scrolling-intervention
    window["".concat(action, "EventListener")]('wheel', onWheel, utils_event["e" /* listenOpts */].notPassive);
  }

  if (action === 'remove') {
    Platform["b" /* default */].is.ios === true && window.removeEventListener('scroll', onAppleScroll, utils_event["e" /* listenOpts */].passiveCapture);
    body.classList.remove('q-body--force-scrollbar');
    body.style.left = bodyLeft;
    body.style.top = bodyTop;
    window.scrollTo(scrollPositionX, scrollPositionY);
  }
}

function prevent(state) {
  var action = 'add';

  if (state === true) {
    registered++;

    if (closeTimer !== void 0) {
      clearTimeout(closeTimer);
      closeTimer = void 0;
      return;
    }

    if (registered > 1) {
      return;
    }
  } else {
    if (registered === 0) {
      return;
    }

    registered--;

    if (registered > 0) {
      return;
    }

    action = 'remove';

    if (Platform["b" /* default */].is.ios === true && Platform["b" /* default */].is.nativeMobile === true) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        apply(action);
        closeTimer = void 0;
      }, 100);
      return;
    }
  }

  apply(action);
}

/* harmony default export */ var prevent_scroll = ({
  methods: {
    __preventScroll: function __preventScroll(state) {
      if (state !== this.preventedScroll && (this.preventedScroll !== void 0 || state === true)) {
        this.preventedScroll = state;
        prevent(state);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js










function QDialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QDialog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QDialog_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QDialog_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var maximizedModals = 0;
var positionClass = {
  standard: 'fixed-full flex-center',
  top: 'fixed-top justify-center',
  bottom: 'fixed-bottom justify-center',
  right: 'fixed-right items-center',
  left: 'fixed-left items-center'
};
var transitions = {
  standard: ['scale', 'scale'],
  top: ['slide-down', 'slide-up'],
  bottom: ['slide-up', 'slide-down'],
  right: ['slide-left', 'slide-right'],
  left: ['slide-right', 'slide-left']
};
/* harmony default export */ var QDialog = (vue_runtime_esm["a" /* default */].extend({
  name: 'QDialog',
  mixins: [mixins_history, model_toggle, portal, prevent_scroll],
  props: {
    persistent: Boolean,
    autoClose: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: 'standard',
      validator: function validator(val) {
        return val === 'standard' || ['top', 'bottom', 'left', 'right'].includes(val);
      }
    },
    transitionShow: String,
    transitionHide: String
  },
  data: function data() {
    return {
      transitionState: this.showing
    };
  },
  watch: {
    showing: function showing(val) {
      var _this = this;

      if (this.transitionShowComputed !== this.transitionHideComputed) {
        this.$nextTick(function () {
          _this.transitionState = val;
        });
      }
    },
    maximized: function maximized(newV, oldV) {
      if (this.showing === true) {
        this.__updateState(false, oldV);

        this.__updateState(true, newV);
      }
    },
    useBackdrop: function useBackdrop(v) {
      this.__preventScroll(v);

      this.__preventFocusout(v);
    }
  },
  computed: {
    classes: function classes() {
      return "q-dialog__inner--".concat(this.maximized === true ? 'maximized' : 'minimized', " ") + "q-dialog__inner--".concat(this.position, " ").concat(positionClass[this.position]) + (this.fullWidth === true ? ' q-dialog__inner--fullwidth' : '') + (this.fullHeight === true ? ' q-dialog__inner--fullheight' : '') + (this.square === true ? ' q-dialog__inner--square' : '');
    },
    transitionShowComputed: function transitionShowComputed() {
      return 'q-transition--' + (this.transitionShow === void 0 ? transitions[this.position][0] : this.transitionShow);
    },
    transitionHideComputed: function transitionHideComputed() {
      return 'q-transition--' + (this.transitionHide === void 0 ? transitions[this.position][1] : this.transitionHide);
    },
    transition: function transition() {
      return this.transitionState === true ? this.transitionHideComputed : this.transitionShowComputed;
    },
    useBackdrop: function useBackdrop() {
      return this.showing === true && this.seamless !== true;
    },
    hideOnRouteChange: function hideOnRouteChange() {
      return this.persistent !== true && this.noRouteDismiss !== true && this.seamless !== true;
    }
  },
  methods: {
    focus: function focus() {
      var node = this.__getInnerNode();

      if (node === void 0 || node.contains(document.activeElement) === true) {
        return;
      }

      node = node.querySelector('[autofocus]') || node;
      node.focus();
    },
    shake: function shake() {
      this.focus();

      var node = this.__getInnerNode();

      if (node !== void 0) {
        node.classList.remove('q-animate--scale');
        node.classList.add('q-animate--scale');
        clearTimeout(this.shakeTimeout);
        this.shakeTimeout = setTimeout(function () {
          node.classList.remove('q-animate--scale');
        }, 170);
      }
    },
    __getInnerNode: function __getInnerNode() {
      return this.__portal !== void 0 && this.__portal.$refs !== void 0 ? this.__portal.$refs.inner : void 0;
    },
    __show: function __show(evt) {
      var _this2 = this;

      this.__addHistory(); // IE can have null document.activeElement


      this.__refocusTarget = this.noRefocus === false && document.activeElement !== null ? document.activeElement : void 0;
      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-show', {
        bubbles: true
      }));

      this.__updateState(true, this.maximized);

      escape_key.register(this, function () {
        if (_this2.seamless !== true) {
          if (_this2.persistent === true || _this2.noEscDismiss === true) {
            _this2.maximized !== true && _this2.shake();
          } else {
            _this2.$emit('escape-key');

            _this2.hide();
          }
        }
      });

      this.__showPortal();

      if (this.noFocus !== true) {
        // IE can have null document.activeElement
        document.activeElement !== null && document.activeElement.blur();

        this.__nextTick(this.focus);
      }

      this.__setTimeout(function () {
        if (_this2.$q.platform.is.ios === true && document.activeElement) {
          var _document$activeEleme = document.activeElement.getBoundingClientRect(),
              top = _document$activeEleme.top;

          if (top < 0) {
            document.scrollingElement.scrollTop += top - window.innerHeight / 2;
          }

          document.activeElement.scrollIntoView();
        }

        _this2.$emit('show', evt);
      }, 300);
    },
    __hide: function __hide(evt) {
      var _this3 = this;

      this.__removeHistory();

      this.__cleanup(true); // check null for IE


      if (this.__refocusTarget !== void 0 && this.__refocusTarget !== null) {
        this.__refocusTarget.focus();
      }

      this.$el.dispatchEvent(Object(utils_event["a" /* create */])('popup-hide', {
        bubbles: true
      }));

      this.__setTimeout(function () {
        _this3.__hidePortal();

        _this3.$emit('hide', evt);
      }, 300);
    },
    __cleanup: function __cleanup(hiding) {
      clearTimeout(this.shakeTimeout);

      if (hiding === true || this.showing === true) {
        escape_key.pop(this);

        this.__updateState(false, this.maximized);

        if (this.useBackdrop === true) {
          this.__preventScroll(false);

          this.__preventFocusout(false);
        }
      }
    },
    __updateState: function __updateState(opening, maximized) {
      if (maximized === true) {
        if (opening === true) {
          maximizedModals < 1 && document.body.classList.add('q-body--dialog');
        } else if (maximizedModals < 2) {
          document.body.classList.remove('q-body--dialog');
        }

        maximizedModals += opening === true ? 1 : -1;
      }
    },
    __preventFocusout: function __preventFocusout(state) {
      if (this.$q.platform.is.desktop === true) {
        var action = "".concat(state === true ? 'add' : 'remove', "EventListener");
        document.body[action]('focusin', this.__onFocusChange);
      }
    },
    __onAutoClose: function __onAutoClose(e) {
      this.hide(e);
      this.$listeners.click !== void 0 && this.$emit('click', e);
    },
    __onBackdropClick: function __onBackdropClick(e) {
      if (this.persistent !== true && this.noBackdropDismiss !== true) {
        this.hide(e);
      } else {
        this.shake();
      }
    },
    __onFocusChange: function __onFocusChange(e) {
      // the focus is not in a vue child component
      if (this.showing === true && this.__portal !== void 0 && Object(dom["a" /* childHasFocus */])(this.__portal.$el, e.target) !== true) {
        this.focus();
      }
    },
    __renderPortal: function __renderPortal(h) {
      var on = QDialog_objectSpread({}, this.$listeners, {
        // stop propagating this events from children
        input: utils_event["i" /* stop */],
        'popup-show': utils_event["i" /* stop */],
        'popup-hide': utils_event["i" /* stop */]
      });

      if (this.autoClose === true) {
        on.click = this.__onAutoClose;
      }

      return h('div', {
        staticClass: 'q-dialog fullscreen no-pointer-events',
        class: this.contentClass,
        style: this.contentStyle,
        attrs: this.$attrs
      }, [h('transition', {
        props: {
          name: 'q-transition--fade'
        }
      }, this.useBackdrop === true ? [h('div', {
        staticClass: 'q-dialog__backdrop fixed-full',
        on: {
          click: this.__onBackdropClick
        }
      })] : null), h('transition', {
        props: {
          name: this.transition
        }
      }, [this.showing === true ? h('div', {
        ref: 'inner',
        staticClass: 'q-dialog__inner flex no-pointer-events',
        class: this.classes,
        attrs: {
          tabindex: -1
        },
        on: on
      }, Object(utils_slot["a" /* default */])(this, 'default')) : null])]);
    }
  },
  mounted: function mounted() {
    this.__processModelChange(this.value);
  },
  beforeDestroy: function beforeDestroy() {
    this.__cleanup();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/dialog/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.bold.js
var es6_string_bold = __webpack_require__("48c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/validate.js







/* harmony default export */ var mixins_validate = ({
  props: {
    value: {},
    error: {
      type: Boolean,
      default: null
    },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    lazyRules: Boolean
  },
  data: function data() {
    return {
      isDirty: false,
      innerError: false,
      innerErrorMessage: void 0
    };
  },
  watch: {
    value: function value(v) {
      if (this.rules === void 0) {
        return;
      }

      if (this.lazyRules === true && this.isDirty === false) {
        return;
      }

      this.validate(v);
    },
    focused: function focused(_focused) {
      _focused === false && this.__triggerValidation();
    }
  },
  computed: {
    hasError: function hasError() {
      return this.error === true || this.innerError === true;
    },
    computedErrorMessage: function computedErrorMessage() {
      return typeof this.errorMessage === 'string' && this.errorMessage.length > 0 ? this.errorMessage : this.innerErrorMessage;
    }
  },
  mounted: function mounted() {
    this.validateIndex = 0;
    this.focused === void 0 && this.$el.addEventListener('focusout', this.__triggerValidation);
  },
  beforeDestroy: function beforeDestroy() {
    this.focused === void 0 && this.$el.removeEventListener('focusout', this.__triggerValidation);
  },
  methods: {
    resetValidation: function resetValidation() {
      this.validateIndex++;
      this.innerLoading = false;
      this.isDirty = false;
      this.innerError = false;
      this.innerErrorMessage = void 0;
    },

    /*
     * Return value
     *   - true (validation succeeded)
     *   - false (validation failed)
     *   - Promise (pending async validation)
     */
    validate: function validate() {
      var _this = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      if (!this.rules || this.rules.length === 0) {
        return true;
      }

      this.validateIndex++;

      if (this.innerLoading !== true && this.lazyRules !== true) {
        this.isDirty = true;
      }

      var update = function update(err, msg) {
        if (_this.innerError !== err) {
          _this.innerError = err;
        }

        var m = msg || void 0;

        if (_this.innerErrorMessage !== m) {
          _this.innerErrorMessage = m;
        }

        if (_this.innerLoading !== false) {
          _this.innerLoading = false;
        }
      };

      var promises = [];

      for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];
        var res = void 0;

        if (typeof rule === 'function') {
          res = rule(val);
        } else if (typeof rule === 'string' && testPattern[rule] !== void 0) {
          res = testPattern[rule](val);
        }

        if (res === false || typeof res === 'string') {
          update(true, res);
          return false;
        } else if (res !== true && res !== void 0) {
          promises.push(res);
        }
      }

      if (promises.length === 0) {
        update(false);
        return true;
      }

      if (this.innerLoading !== true) {
        this.innerLoading = true;
      }

      var index = this.validateIndex;
      return Promise.all(promises).then(function (res) {
        if (index === _this.validateIndex) {
          if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
            update(false);
            return true;
          } else {
            var msg = res.find(function (r) {
              return r === false || typeof r === 'string';
            });
            update(msg !== void 0, msg);
            return msg === void 0;
          }
        }

        return true;
      }, function (e) {
        if (index === _this.validateIndex) {
          console.error(e);
          update(true);
          return false;
        }
      });
    },
    __triggerValidation: function __triggerValidation() {
      if (this.isDirty === false && this.rules !== void 0) {
        this.isDirty = true;
        this.validate(this.value);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/field/QField.js









function QField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QField_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QField_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* harmony default export */ var QField = (vue_runtime_esm["a" /* default */].extend({
  name: 'QField',
  inheritAttrs: false,
  mixins: [mixins_validate],
  props: {
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    color: String,
    bgColor: String,
    dark: Boolean,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    maxlength: [Number, String],
    maxValues: [Number, String] // private, do not add to JSON; internally needed by QSelect

  },
  data: function data() {
    return {
      focused: false,
      // used internally by validation for QInput
      // or menu handling for QSelect
      innerLoading: false,
      targetUid: this.$attrs.for === void 0 ? 'qf_' + Object(uid["a" /* default */])() : this.$attrs.for
    };
  },
  computed: {
    editable: function editable() {
      return this.disable !== true && this.readonly !== true;
    },
    hasValue: function hasValue() {
      var value = this.__getControl === void 0 ? this.value : this.innerValue;
      return value !== void 0 && value !== null && ('' + value).length > 0;
    },
    computedCounter: function computedCounter() {
      if (this.counter !== false) {
        var len = typeof this.value === 'string' || typeof this.value === 'number' ? ('' + this.value).length : Array.isArray(this.value) === true ? this.value.length : 0;
        var max = this.maxlength !== void 0 ? this.maxlength : this.maxValues;
        return len + (max !== void 0 ? ' / ' + max : '');
      }
    },
    floatingLabel: function floatingLabel() {
      return this.hasError === true || this.stackLabel === true || this.focused === true || (this.inputValue !== void 0 && this.hideSelected === true ? this.inputValue.length > 0 : this.hasValue === true) || this.displayValue !== void 0 && this.displayValue !== null && ('' + this.displayValue).length > 0;
    },
    shouldRenderBottom: function shouldRenderBottom() {
      return this.bottomSlots === true || this.hint !== void 0 || this.rules !== void 0 || this.counter === true || this.error !== null;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, this.fieldClass, this.fieldClass !== void 0), defineProperty_default()(_ref, "q-field--".concat(this.styleType), true), defineProperty_default()(_ref, 'q-field--rounded', this.rounded), defineProperty_default()(_ref, 'q-field--square', this.square), defineProperty_default()(_ref, 'q-field--focused', this.focused === true || this.hasError === true), defineProperty_default()(_ref, 'q-field--float', this.floatingLabel), defineProperty_default()(_ref, 'q-field--labeled', this.label !== void 0), defineProperty_default()(_ref, 'q-field--dense', this.dense), defineProperty_default()(_ref, 'q-field--item-aligned q-item-type', this.itemAligned), defineProperty_default()(_ref, 'q-field--dark', this.dark), defineProperty_default()(_ref, 'q-field--auto-height', this.__getControl === void 0), defineProperty_default()(_ref, 'q-field--with-bottom', this.hideBottomSpace !== true && this.shouldRenderBottom === true), defineProperty_default()(_ref, 'q-field--error', this.hasError), defineProperty_default()(_ref, 'q-field--readonly', this.readonly === true && this.disable !== true), defineProperty_default()(_ref, 'q-field--disabled', this.disable), _ref;
    },
    styleType: function styleType() {
      if (this.filled === true) {
        return 'filled';
      }

      if (this.outlined === true) {
        return 'outlined';
      }

      if (this.borderless === true) {
        return 'borderless';
      }

      if (this.standout) {
        return 'standout';
      }

      return 'standard';
    },
    contentClass: function contentClass() {
      var cls = [];

      if (this.hasError === true) {
        cls.push('text-negative');
      } else if (typeof this.standout === 'string' && this.standout.length > 0 && this.focused === true) {
        return this.standout;
      } else if (this.color !== void 0) {
        cls.push('text-' + this.color);
      }

      if (this.bgColor !== void 0) {
        cls.push("bg-".concat(this.bgColor));
      }

      return cls;
    },
    controlSlotScope: function controlSlotScope() {
      return {
        id: this.targetUid,
        field: this.$el,
        editable: this.editable,
        focused: this.focused,
        floatingLabel: this.floatingLabel,
        value: this.value,
        emitValue: this.__emitValue
      };
    }
  },
  methods: {
    focus: function focus() {
      if (this.showPopup !== void 0 && this.hasDialog === true) {
        this.showPopup();
        return;
      }

      this.__focus();
    },
    blur: function blur() {
      var el = document.activeElement; // IE can have null document.activeElement

      if (el !== null && this.$el.contains(el)) {
        el.blur();
      }
    },
    __focus: function __focus() {
      var el = document.activeElement;
      var target = this.$refs.target; // IE can have null document.activeElement

      if (target !== void 0 && (el === null || el.id !== this.targetUid)) {
        target.matches('[tabindex]') || (target = target.querySelector('[tabindex]'));
        target !== null && target !== el && target.focus();
      }
    },
    __getContent: function __getContent(h) {
      var node = [];
      this.$scopedSlots.prepend !== void 0 && node.push(h('div', {
        staticClass: 'q-field__prepend q-field__marginal row no-wrap items-center',
        key: 'prepend',
        on: this.slotsEvents
      }, this.$scopedSlots.prepend()));
      node.push(h('div', {
        staticClass: 'q-field__control-container col relative-position row no-wrap q-anchor--skip'
      }, this.__getControlContainer(h)));
      this.$scopedSlots.append !== void 0 && node.push(h('div', {
        staticClass: 'q-field__append q-field__marginal row no-wrap items-center',
        key: 'append',
        on: this.slotsEvents
      }, this.$scopedSlots.append()));
      this.hasError === true && this.noErrorIcon === false && node.push(this.__getInnerAppendNode(h, 'error', [h(QIcon["a" /* default */], {
        props: {
          name: this.$q.iconSet.field.error,
          color: 'negative'
        }
      })]));

      if (this.loading === true || this.innerLoading === true) {
        node.push(this.__getInnerAppendNode(h, 'inner-loading-append', this.$scopedSlots.loading !== void 0 ? this.$scopedSlots.loading() : [h(QSpinner["a" /* default */], {
          props: {
            color: this.color
          }
        })]));
      } else if (this.clearable === true && this.hasValue === true && this.editable === true) {
        node.push(this.__getInnerAppendNode(h, 'inner-clearable-append', [h(QIcon["a" /* default */], {
          staticClass: 'cursor-pointer',
          props: {
            name: this.clearIcon || this.$q.iconSet.field.clear
          },
          on: {
            click: this.__clearValue
          }
        })]));
      }

      this.__getInnerAppend !== void 0 && node.push(this.__getInnerAppendNode(h, 'inner-append', this.__getInnerAppend(h)));
      this.__getPopup !== void 0 && node.push(this.__getPopup(h));
      return node;
    },
    __getControlContainer: function __getControlContainer(h) {
      var node = [];
      this.prefix !== void 0 && this.prefix !== null && node.push(h('div', {
        staticClass: 'q-field__prefix no-pointer-events row items-center'
      }, [this.prefix]));

      if (this.__getControl !== void 0) {
        node.push(this.__getControl(h));
      } // internal usage only:
      else if (this.$scopedSlots.rawControl !== void 0) {
          node.push(this.$scopedSlots.rawControl());
        } else if (this.$scopedSlots.control !== void 0) {
          node.push(h('div', {
            ref: 'target',
            staticClass: 'q-field__native row',
            attrs: QField_objectSpread({}, this.$attrs, {
              autofocus: this.autofocus
            })
          }, this.$scopedSlots.control(this.controlSlotScope)));
        }

      this.label !== void 0 && node.push(h('div', {
        staticClass: 'q-field__label no-pointer-events absolute ellipsis'
      }, [this.label]));
      this.suffix !== void 0 && this.suffix !== null && node.push(h('div', {
        staticClass: 'q-field__suffix no-pointer-events row items-center'
      }, [this.suffix]));
      return node.concat(this.__getDefaultSlot !== void 0 ? this.__getDefaultSlot(h) : Object(utils_slot["a" /* default */])(this, 'default'));
    },
    __getBottom: function __getBottom(h) {
      var msg, key;

      if (this.hasError === true) {
        if (this.computedErrorMessage !== void 0) {
          msg = [h('div', [this.computedErrorMessage])];
          key = this.computedErrorMessage;
        } else {
          msg = Object(utils_slot["a" /* default */])(this, 'error');
          key = 'q--slot-error';
        }
      } else if (this.hideHint !== true || this.focused === true) {
        if (this.hint !== void 0) {
          msg = [h('div', [this.hint])];
          key = this.hint;
        } else {
          msg = Object(utils_slot["a" /* default */])(this, 'hint');
          key = 'q--slot-hint';
        }
      }

      var hasCounter = this.counter === true || this.$scopedSlots.counter !== void 0;

      if (this.hideBottomSpace === true && hasCounter === false && msg === void 0) {
        return;
      }

      var main = h('div', {
        key: key,
        staticClass: 'q-field__messages col'
      }, msg);
      return h('div', {
        staticClass: 'q-field__bottom row items-start q-field__bottom--' + (this.hideBottomSpace !== true ? 'animated' : 'stale')
      }, [this.hideBottomSpace === true ? main : h('transition', {
        props: {
          name: 'q-transition--field-message'
        }
      }, [main]), hasCounter === true ? h('div', {
        staticClass: 'q-field__counter'
      }, this.$scopedSlots.counter !== void 0 ? this.$scopedSlots.counter() : [this.computedCounter]) : null]);
    },
    __getInnerAppendNode: function __getInnerAppendNode(h, key, content) {
      return content === null ? null : h('div', {
        staticClass: 'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',
        key: key
      }, content);
    },
    __onControlPopupShow: function __onControlPopupShow(e) {
      e !== void 0 && Object(utils_event["i" /* stop */])(e);
      this.$emit('popup-show', e);
      this.hasPopupOpen = true;

      this.__onControlFocusin(e);
    },
    __onControlPopupHide: function __onControlPopupHide(e) {
      e !== void 0 && Object(utils_event["i" /* stop */])(e);
      this.$emit('popup-hide', e);
      this.hasPopupOpen = false;

      this.__onControlFocusout(e);
    },
    __onControlFocusin: function __onControlFocusin(e) {
      if (this.editable === true && this.focused === false) {
        this.focused = true;
        this.$emit('focus', e);
      }
    },
    __onControlFocusout: function __onControlFocusout(e, then) {
      var _this = this;

      clearTimeout(this.focusoutTimer);
      this.focusoutTimer = setTimeout(function () {
        if (document.hasFocus() === true && (_this.hasPopupOpen === true || _this.$refs === void 0 || _this.$refs.control === void 0 || _this.$refs.control.contains(document.activeElement) !== false)) {
          return;
        }

        if (_this.focused === true) {
          _this.focused = false;

          _this.$emit('blur', e);
        }

        then !== void 0 && then();
      });
    },
    __clearValue: function __clearValue(e) {
      Object(utils_event["i" /* stop */])(e);

      if (this.type === 'file') {
        // do not let focus be triggered
        // as it will make the native file dialog
        // appear for another selection
        Object(utils_event["g" /* prevent */])(e);
        this.$refs.input.value = null;
      }

      this.$emit('input', null);
      this.$emit('clear', this.value);
    },
    __emitValue: function __emitValue(value) {
      this.$emit('input', value);
    }
  },
  render: function render(h) {
    this.__onPreRender !== void 0 && this.__onPreRender();
    this.__onPostRender !== void 0 && this.$nextTick(this.__onPostRender);
    return h('label', {
      staticClass: 'q-field row no-wrap items-start',
      class: this.classes,
      attrs: {
        for: this.targetUid
      }
    }, [this.$scopedSlots.before !== void 0 ? h('div', {
      staticClass: 'q-field__before q-field__marginal row no-wrap items-center',
      on: this.slotsEvents
    }, this.$scopedSlots.before()) : null, h('div', {
      staticClass: 'q-field__inner relative-position col self-stretch column justify-center'
    }, [h('div', {
      ref: 'control',
      staticClass: 'q-field__control relative-position row no-wrap',
      class: this.contentClass,
      attrs: {
        tabindex: -1
      },
      on: this.controlEvents
    }, this.__getContent(h)), this.shouldRenderBottom === true ? this.__getBottom(h) : null]), this.$scopedSlots.after !== void 0 ? h('div', {
      staticClass: 'q-field__after q-field__marginal row no-wrap items-center',
      on: this.slotsEvents
    }, this.$scopedSlots.after()) : null]);
  },
  created: function created() {
    this.__onPreRender !== void 0 && this.__onPreRender();
    this.slotsEvents = {
      click: utils_event["g" /* prevent */]
    };
    this.controlEvents = this.__getControlEvents !== void 0 ? this.__getControlEvents() : {
      focusin: this.__onControlFocusin,
      focusout: this.__onControlFocusout,
      'popup-show': this.__onControlPopupShow,
      'popup-hide': this.__onControlPopupHide
    };
  },
  mounted: function mounted() {
    this.autofocus === true && this.focus();
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.focusoutTimer);
  }
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("4db1");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/mask.js










// leave NAMED_MASKS at top of file (code referenced from docs)
var NAMED_MASKS = {
  date: '####/##/##',
  datetime: '####/##/## ##:##',
  time: '##:##',
  fulltime: '##:##:##',
  phone: '(###) ### - ####',
  card: '#### #### #### ####'
};
var TOKENS = {
  '#': {
    pattern: '[\\d]',
    negate: '[^\\d]'
  },
  S: {
    pattern: '[a-zA-Z]',
    negate: '[^a-zA-Z]'
  },
  N: {
    pattern: '[0-9a-zA-Z]',
    negate: '[^0-9a-zA-Z]'
  },
  A: {
    pattern: '[a-zA-Z]',
    negate: '[^a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleUpperCase();
    }
  },
  a: {
    pattern: '[a-zA-Z]',
    negate: '[^a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleLowerCase();
    }
  },
  X: {
    pattern: '[0-9a-zA-Z]',
    negate: '[^0-9a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleUpperCase();
    }
  },
  x: {
    pattern: '[0-9a-zA-Z]',
    negate: '[^0-9a-zA-Z]',
    transform: function transform(v) {
      return v.toLocaleLowerCase();
    }
  }
};
var KEYS = Object.keys(TOKENS);
KEYS.forEach(function (key) {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
var tokenRegexMask = new RegExp('\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + KEYS.join('') + '])|(.)', 'g'),
    escRegex = /[.*+?^${}()|[\]\\]/g;
var MARKER = String.fromCharCode(1);
/* harmony default export */ var mixins_mask = ({
  props: {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean
  },
  watch: {
    type: function type() {
      this.__updateMaskInternals();
    },
    mask: function mask(v) {
      if (v !== void 0) {
        this.__updateMaskValue(this.innerValue, true);
      } else {
        var val = this.__unmask(this.innerValue);

        this.__updateMaskInternals();

        this.value !== val && this.$emit('input', val);
      }
    },
    fillMask: function fillMask() {
      this.hasMask === true && this.__updateMaskValue(this.innerValue, true);
    },
    reverseFillMask: function reverseFillMask() {
      this.hasMask === true && this.__updateMaskValue(this.innerValue, true);
    },
    unmaskedValue: function unmaskedValue() {
      this.hasMask === true && this.__updateMaskValue(this.innerValue);
    }
  },
  methods: {
    __getInitialMaskedValue: function __getInitialMaskedValue() {
      this.__updateMaskInternals();

      if (this.hasMask === true) {
        var masked = this.__mask(this.__unmask(this.value));

        return this.fillMask !== false ? this.__fillWithMask(masked) : masked;
      }

      return this.value;
    },
    __getPaddedMaskMarked: function __getPaddedMaskMarked(size) {
      if (size < this.maskMarked.length) {
        return this.maskMarked.slice(-size);
      }

      var maskMarked = this.maskMarked,
          padPos = maskMarked.indexOf(MARKER),
          pad = '';

      if (padPos > -1) {
        for (var i = size - maskMarked.length; i > 0; i--) {
          pad += MARKER;
        }

        maskMarked = maskMarked.slice(0, padPos) + pad + maskMarked.slice(padPos);
      }

      return maskMarked;
    },
    __updateMaskInternals: function __updateMaskInternals() {
      var _this = this;

      this.hasMask = this.mask !== void 0 && this.mask.length > 0 && ['text', 'search', 'url', 'tel', 'password'].includes(this.type);

      if (this.hasMask === false) {
        this.computedUnmask = void 0;
        this.maskMarked = '';
        this.maskReplaced = '';
        return;
      }

      var computedMask = NAMED_MASKS[this.mask] === void 0 ? this.mask : NAMED_MASKS[this.mask],
          fillChar = typeof this.fillMask === 'string' && this.fillMask.length > 0 ? this.fillMask.slice(0, 1) : '_',
          fillCharEscaped = fillChar.replace(escRegex, '\\$&'),
          unmask = [],
          extract = [],
          mask = [];
      var firstMatch = this.reverseFillMask === true,
          unmaskChar = '',
          negateChar = '';
      computedMask.replace(tokenRegexMask, function (_, char1, esc, token, char2) {
        if (token !== void 0) {
          var c = TOKENS[token];
          mask.push(c);
          negateChar = c.negate;

          if (firstMatch === true) {
            extract.push('(?:' + negateChar + '+?)?(' + c.pattern + '+)?(?:' + negateChar + '+?)?(' + c.pattern + '+)?');
            firstMatch = false;
          }

          extract.push('(?:' + negateChar + '+?)?(' + c.pattern + ')?');
        } else if (esc !== void 0) {
          unmaskChar = '\\' + (esc === '\\' ? '' : esc);
          mask.push(esc);
          unmask.push('([^' + unmaskChar + ']+)?' + unmaskChar + '?');
        } else {
          var _c = char1 !== void 0 ? char1 : char2;

          unmaskChar = _c === '\\' ? '\\\\\\\\' : _c.replace(escRegex, '\\\\$&');
          mask.push(_c);
          unmask.push('([^' + unmaskChar + ']+)?' + unmaskChar + '?');
        }
      });
      var unmaskMatcher = new RegExp('^' + unmask.join('') + '(' + (unmaskChar === '' ? '.' : '[^' + unmaskChar + ']') + '+)?' + '$'),
          extractLast = extract.length - 1,
          extractMatcher = extract.map(function (re, index) {
        if (index === 0 && _this.reverseFillMask === true) {
          return new RegExp('^' + fillCharEscaped + '*' + re);
        } else if (index === extractLast) {
          return new RegExp('^' + re + '(' + (negateChar === '' ? '.' : negateChar) + '+)?' + (_this.reverseFillMask === true ? '$' : fillCharEscaped + '*'));
        }

        return new RegExp('^' + re);
      });
      this.computedMask = mask;

      this.computedUnmask = function (val) {
        var unmaskMatch = unmaskMatcher.exec(val);

        if (unmaskMatch !== null) {
          val = unmaskMatch.slice(1).join('');
        }

        var extractMatch = [],
            extractMatcherLength = extractMatcher.length;

        for (var i = 0, str = val; i < extractMatcherLength; i++) {
          var m = extractMatcher[i].exec(str);

          if (m === null) {
            break;
          }

          str = str.slice(m.shift().length);
          extractMatch.push.apply(extractMatch, toConsumableArray_default()(m));
        }

        if (extractMatch.length > 0) {
          return extractMatch.join('');
        }

        return val;
      };

      this.maskMarked = mask.map(function (v) {
        return typeof v === 'string' ? v : MARKER;
      }).join('');
      this.maskReplaced = this.maskMarked.split(MARKER).join(fillChar);
    },
    __updateMaskValue: function __updateMaskValue(rawVal, updateMaskInternals) {
      var _this2 = this;

      var inp = this.$refs.input,
          oldCursor = this.reverseFillMask === true ? inp.value.length - inp.selectionEnd : inp.selectionEnd,
          unmasked = this.__unmask(rawVal); // Update here so unmask uses the original fillChar


      updateMaskInternals === true && this.__updateMaskInternals();

      var preMasked = this.__mask(unmasked),
          masked = this.fillMask !== false ? this.__fillWithMask(preMasked) : preMasked,
          changed = this.innerValue !== masked; // We want to avoid "flickering" so we set value immediately


      inp.value !== masked && (inp.value = masked);
      changed === true && (this.innerValue = masked);
      this.$nextTick(function () {
        if (_this2.reverseFillMask === true) {
          if (changed === true) {
            var cursor = Math.max(0, masked.length - (masked === _this2.maskReplaced ? 0 : Math.min(preMasked.length, oldCursor + 1)));

            _this2.__moveCursorRightReverse(inp, cursor, cursor);
          } else {
            var _cursor = masked.length - oldCursor;

            inp.setSelectionRange(_cursor, _cursor);
          }
        } else if (changed === true) {
          if (masked === _this2.maskReplaced) {
            _this2.__moveCursorLeft(inp, 0, 0);
          } else {
            var _cursor2 = Math.max(0, _this2.maskMarked.indexOf(MARKER), Math.min(preMasked.length, oldCursor) - 1);

            _this2.__moveCursorRight(inp, _cursor2, _cursor2);
          }
        } else {
          _this2.__moveCursorLeft(inp, oldCursor, oldCursor);
        }
      });
      var val = this.unmaskedValue === true ? this.__unmask(masked) : masked;
      this.value !== val && this.__emitValue(val, true);
    },
    __moveCursorLeft: function __moveCursorLeft(inp, start, end, selection) {
      var noMarkBefore = this.maskMarked.slice(start - 1).indexOf(MARKER) === -1;
      var i = Math.max(0, start - 1);

      for (; i >= 0; i--) {
        if (this.maskMarked[i] === MARKER) {
          start = i;
          noMarkBefore === true && start++;
          break;
        }
      }

      if (i < 0 && this.maskMarked[start] !== void 0 && this.maskMarked[start] !== MARKER) {
        return this.__moveCursorRight(inp, 0, 0);
      }

      start >= 0 && inp.setSelectionRange(start, selection === true ? end : start, 'backward');
    },
    __moveCursorRight: function __moveCursorRight(inp, start, end, selection) {
      var limit = inp.value.length;
      var i = Math.min(limit, end + 1);

      for (; i <= limit; i++) {
        if (this.maskMarked[i] === MARKER) {
          end = i;
          break;
        } else if (this.maskMarked[i - 1] === MARKER) {
          end = i;
        }
      }

      if (i > limit && this.maskMarked[end - 1] !== void 0 && this.maskMarked[end - 1] !== MARKER) {
        return this.__moveCursorLeft(inp, limit, limit);
      }

      inp.setSelectionRange(selection ? start : end, end, 'forward');
    },
    __moveCursorLeftReverse: function __moveCursorLeftReverse(inp, start, end, selection) {
      var maskMarked = this.__getPaddedMaskMarked(inp.value.length);

      var i = Math.max(0, start - 1);

      for (; i >= 0; i--) {
        if (maskMarked[i - 1] === MARKER) {
          start = i;
          break;
        } else if (maskMarked[i] === MARKER) {
          start = i;

          if (i === 0) {
            break;
          }
        }
      }

      if (i < 0 && maskMarked[start] !== void 0 && maskMarked[start] !== MARKER) {
        return this.__moveCursorRightReverse(inp, 0, 0);
      }

      start >= 0 && inp.setSelectionRange(start, selection === true ? end : start, 'backward');
    },
    __moveCursorRightReverse: function __moveCursorRightReverse(inp, start, end, selection) {
      var limit = inp.value.length,
          maskMarked = this.__getPaddedMaskMarked(limit),
          noMarkBefore = maskMarked.slice(0, end + 1).indexOf(MARKER) === -1;

      var i = Math.min(limit, end + 1);

      for (; i <= limit; i++) {
        if (maskMarked[i - 1] === MARKER) {
          end = i;
          end > 0 && noMarkBefore === true && end--;
          break;
        }
      }

      if (i > limit && maskMarked[end - 1] !== void 0 && maskMarked[end - 1] !== MARKER) {
        return this.__moveCursorLeftReverse(inp, limit, limit);
      }

      inp.setSelectionRange(selection === true ? start : end, end, 'forward');
    },
    __onMaskedKeydown: function __onMaskedKeydown(e) {
      var inp = this.$refs.input,
          start = inp.selectionStart,
          end = inp.selectionEnd;

      if (e.keyCode === 37 || e.keyCode === 39) {
        // Left / Right
        var fn = this['__moveCursor' + (e.keyCode === 39 ? 'Right' : 'Left') + (this.reverseFillMask === true ? 'Reverse' : '')];
        e.preventDefault();
        fn(inp, start, end, e.shiftKey);
      } else if (e.keyCode === 8 && // Backspace
      this.reverseFillMask !== true && start === end) {
        this.__moveCursorLeft(inp, start, end, true);
      } else if (e.keyCode === 46 && // Delete
      this.reverseFillMask === true && start === end) {
        this.__moveCursorRightReverse(inp, start, end, true);
      }

      this.$emit('keydown', e);
    },
    __mask: function __mask(val) {
      if (val === void 0 || val === null || val === '') {
        return '';
      }

      if (this.reverseFillMask === true) {
        return this.__maskReverse(val);
      }

      var mask = this.computedMask;
      var valIndex = 0,
          output = '';

      for (var maskIndex = 0; maskIndex < mask.length; maskIndex++) {
        var valChar = val[valIndex],
            maskDef = mask[maskIndex];

        if (typeof maskDef === 'string') {
          output += maskDef;
          valChar === maskDef && valIndex++;
        } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
          output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
          valIndex++;
        } else {
          return output;
        }
      }

      return output;
    },
    __maskReverse: function __maskReverse(val) {
      var mask = this.computedMask,
          firstTokenIndex = this.maskMarked.indexOf(MARKER);
      var valIndex = val.length - 1,
          output = '';

      for (var maskIndex = mask.length - 1; maskIndex >= 0; maskIndex--) {
        var maskDef = mask[maskIndex];
        var valChar = val[valIndex];

        if (typeof maskDef === 'string') {
          output = maskDef + output;
          valChar === maskDef && valIndex--;
        } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
          do {
            output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
            valIndex--;
            valChar = val[valIndex]; // eslint-disable-next-line no-unmodified-loop-condition
          } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
        } else {
          return output;
        }
      }

      return output;
    },
    __unmask: function __unmask(val) {
      return typeof val !== 'string' || this.computedUnmask === void 0 ? typeof val === 'number' ? this.computedUnmask('' + val) : val : this.computedUnmask(val);
    },
    __fillWithMask: function __fillWithMask(val) {
      if (this.maskReplaced.length - val.length <= 0) {
        return val;
      }

      return this.reverseFillMask === true && val.length > 0 ? this.maskReplaced.slice(0, -val.length) + val : val + this.maskReplaced.slice(val.length);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/composition.js
var isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
var isChinese = /(?:[\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F]|[\uD840-\uD868\uD86A-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD873[\uDC00-\uDEAF]|\uD87E[\uDC00-\uDE1F])/;
/* harmony default export */ var composition = ({
  methods: {
    __onComposition: function __onComposition(e) {
      if (e.type === 'compositionend' || e.type === 'change') {
        if (e.target.composing !== true) {
          return;
        }

        e.target.composing = false;

        this.__onInput(e);
      } else if (e.type === 'compositionupdate') {
        if (typeof e.data === 'string' && isJapanese.test(e.data) === false && isChinese.test(e.data) === false) {
          e.target.composing = false;
        }
      } else {
        e.target.composing = true;
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/debounce.js
var debounce = __webpack_require__("1c16");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/input/QInput.js









function QInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QInput_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QInput_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* harmony default export */ var QInput = (vue_runtime_esm["a" /* default */].extend({
  name: 'QInput',
  mixins: [QField, mixins_mask, composition],
  props: {
    value: {
      required: false
    },
    type: {
      type: String,
      default: 'text'
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  watch: {
    value: function value(v) {
      if (this.hasMask === true) {
        if (this.stopValueWatcher === true) {
          this.stopValueWatcher = false;
          return;
        }

        this.__updateMaskValue(v);
      } else if (this.innerValue !== v) {
        this.innerValue = v;

        if (this.type === 'number' && this.hasOwnProperty('tempValue') === true) {
          if (this.typedNumber === true) {
            this.typedNumber = false;
          } else {
            delete this.tempValue;
          }
        }
      } // textarea only


      this.autogrow === true && this.$nextTick(this.__adjustHeightDebounce);
    },
    autogrow: function autogrow(_autogrow) {
      // textarea only
      if (_autogrow === true) {
        this.$nextTick(this.__adjustHeightDebounce);
      } // if it has a number of rows set respect it
      else if (this.$attrs.rows > 0 && this.$refs.input !== void 0) {
          var inp = this.$refs.input;
          inp.style.height = 'auto';
        }
    },
    dense: function dense() {
      this.autogrow === true && this.$nextTick(this.__adjustHeight);
    }
  },
  data: function data() {
    return {
      innerValue: this.__getInitialMaskedValue()
    };
  },
  computed: {
    isTextarea: function isTextarea() {
      return this.type === 'textarea' || this.autogrow === true;
    },
    fieldClass: function fieldClass() {
      return "q-".concat(this.isTextarea === true ? 'textarea' : 'input') + (this.autogrow === true ? ' q-textarea--autogrow' : '');
    }
  },
  methods: {
    focus: function focus() {
      var el = document.activeElement;

      if (this.$refs.input !== void 0 && this.$refs.input !== el && ( // IE can have null document.activeElement
      el === null || el.id !== this.targetUid)) {
        this.$refs.input.focus();
      }
    },
    select: function select() {
      this.$refs.input !== void 0 && this.$refs.input.select();
    },
    __onInput: function __onInput(e) {
      if (e && e.target && e.target.composing === true) {
        return;
      }

      if (this.type === 'file') {
        this.$emit('input', e.target.files);
        return;
      }

      var val = e.target.value;

      if (this.hasMask === true) {
        this.__updateMaskValue(val);
      } else {
        this.__emitValue(val);
      } // we need to trigger it immediately too,
      // to avoid "flickering"


      this.autogrow === true && this.__adjustHeight();
    },
    __emitValue: function __emitValue(val, stopWatcher) {
      var _this = this;

      this.emitValueFn = function () {
        if (_this.type !== 'number' && _this.hasOwnProperty('tempValue') === true) {
          delete _this.tempValue;
        }

        if (_this.value !== val) {
          stopWatcher === true && (_this.stopValueWatcher = true);

          _this.$emit('input', val);
        }

        _this.emitValueFn = void 0;
      };

      if (this.type === 'number') {
        this.typedNumber = true;
        this.tempValue = val;
      }

      if (this.debounce !== void 0) {
        clearTimeout(this.emitTimer);
        this.tempValue = val;
        this.emitTimer = setTimeout(this.emitValueFn, this.debounce);
      } else {
        this.emitValueFn();
      }
    },
    // textarea only
    __adjustHeight: function __adjustHeight() {
      var inp = this.$refs.input;

      if (inp !== void 0) {
        var parentStyle = inp.parentNode.style; // reset height of textarea to a small size to detect the real height
        // but keep the total control size the same

        parentStyle.marginBottom = inp.scrollHeight - 1 + 'px';
        inp.style.height = '1px';
        inp.style.height = inp.scrollHeight + 'px';
        parentStyle.marginBottom = '';
      }
    },
    __onChange: function __onChange(e) {
      this.__onComposition(e);

      clearTimeout(this.emitTimer);
      this.emitValueFn !== void 0 && this.emitValueFn();
      this.$emit('change', e);
    },
    __onFinishEditing: function __onFinishEditing(e) {
      var _this2 = this;

      e !== void 0 && Object(utils_event["i" /* stop */])(e);
      clearTimeout(this.emitTimer);
      this.emitValueFn !== void 0 && this.emitValueFn();
      this.typedNumber = false;
      this.stopValueWatcher = false;
      delete this.tempValue;
      this.type !== 'file' && this.$nextTick(function () {
        if (_this2.$refs.input !== void 0) {
          _this2.$refs.input.value = _this2.innerValue;
        }
      });
    },
    __getControl: function __getControl(h) {
      var on = QInput_objectSpread({}, this.$listeners, {
        input: this.__onInput,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        change: this.__onChange,
        blur: this.__onFinishEditing,
        focus: utils_event["i" /* stop */]
      });

      on.compositionstart = on.compositionupdate = on.compositionend = this.__onComposition;

      if (this.hasMask === true) {
        on.keydown = this.__onMaskedKeydown;
      }

      var attrs = QInput_objectSpread({
        tabindex: 0,
        autofocus: this.autofocus,
        rows: this.type === 'textarea' ? 6 : void 0,
        'aria-label': this.label
      }, this.$attrs, {
        id: this.targetUid,
        type: this.type,
        maxlength: this.maxlength,
        disabled: this.disable === true,
        readonly: this.readonly === true
      });

      if (this.autogrow === true) {
        attrs.rows = 1;
      }

      return h(this.isTextarea === true ? 'textarea' : 'input', {
        ref: 'input',
        staticClass: 'q-field__native q-placeholder',
        style: this.inputStyle,
        class: this.inputClass,
        attrs: attrs,
        on: on,
        domProps: this.type !== 'file' ? {
          value: this.hasOwnProperty('tempValue') === true ? this.tempValue : this.innerValue
        } : null
      });
    }
  },
  created: function created() {
    // textarea only
    this.__adjustHeightDebounce = Object(debounce["a" /* default */])(this.__adjustHeight, 100);
  },
  mounted: function mounted() {
    // textarea only
    this.autogrow === true && this.__adjustHeight();
  },
  beforeDestroy: function beforeDestroy() {
    this.__onFinishEditing();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js











var QTooltip_passive = utils_event["e" /* listenOpts */].passive;
/* harmony default export */ var QTooltip = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTooltip',
  mixins: [mixins_anchor, model_toggle, portal, transition],
  props: {
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      default: 'jump-down'
    },
    transitionHide: {
      default: 'jump-up'
    },
    anchor: {
      type: String,
      default: 'bottom middle',
      validator: validatePosition
    },
    self: {
      type: String,
      default: 'top middle',
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: function _default() {
        return [14, 14];
      },
      validator: validateOffset
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  computed: {
    anchorOrigin: function anchorOrigin() {
      return parsePosition(this.anchor);
    },
    selfOrigin: function selfOrigin() {
      return parsePosition(this.self);
    },
    hideOnRouteChange: function hideOnRouteChange() {
      return this.persistent !== true;
    }
  },
  methods: {
    __show: function __show(evt) {
      var _this = this;

      this.__showPortal();

      this.__nextTick(function () {
        _this.updatePosition();

        _this.__configureScrollTarget();
      });

      this.__setTimeout(function () {
        _this.$emit('show', evt);
      }, 300);
    },
    __hide: function __hide(evt) {
      var _this2 = this;

      this.__anchorCleanup();

      this.__setTimeout(function () {
        _this2.__hidePortal();

        _this2.$emit('hide', evt);
      }, 300);
    },
    __anchorCleanup: function __anchorCleanup() {
      this.__unconfigureScrollTarget();
    },
    updatePosition: function updatePosition() {
      if (this.anchorEl === void 0 || this.__portal === void 0) {
        return;
      }

      var el = this.__portal.$el;

      if (el.nodeType === 8) {
        // IE replaces the comment with delay
        setTimeout(this.updatePosition, 25);
        return;
      }

      setPosition({
        el: el,
        offset: this.offset,
        anchorEl: this.anchorEl,
        anchorOrigin: this.anchorOrigin,
        selfOrigin: this.selfOrigin,
        maxHeight: this.maxHeight,
        maxWidth: this.maxWidth
      });
    },
    __delayShow: function __delayShow(evt) {
      var _this3 = this;

      this.$q.platform.is.mobile === true && document.body.classList.add('non-selectable');

      this.__setTimeout(function () {
        _this3.show(evt);
      }, this.delay);
    },
    __delayHide: function __delayHide(evt) {
      this.__clearTimeout();

      this.$q.platform.is.mobile === true && document.body.classList.remove('non-selectable');
      this.hide(evt);
    },
    __unconfigureAnchorEl: function __unconfigureAnchorEl() {
      var _this4 = this;

      if (this.anchorEl === void 0) {
        return;
      } // mobile hover ref https://stackoverflow.com/a/22444532


      if (this.$q.platform.is.mobile === true) {
        this.anchorEl.removeEventListener('touchstart', this.__delayShow, QTooltip_passive);
        ['touchcancel', 'touchmove', 'click'].forEach(function (evt) {
          _this4.anchorEl.removeEventListener(evt, _this4.__delayHide, QTooltip_passive);
        });
      } else {
        this.anchorEl.removeEventListener('mouseenter', this.__delayShow, QTooltip_passive);
      }

      if (this.$q.platform.is.ios !== true) {
        this.anchorEl.removeEventListener('mouseleave', this.__delayHide, QTooltip_passive);
      }
    },
    __configureAnchorEl: function __configureAnchorEl() {
      var _this5 = this;

      if (this.noParentEvent === true || this.anchorEl === void 0) {
        return;
      } // mobile hover ref https://stackoverflow.com/a/22444532


      if (this.$q.platform.is.mobile) {
        this.anchorEl.addEventListener('touchstart', this.__delayShow, QTooltip_passive);
        ['touchcancel', 'touchmove', 'click'].forEach(function (evt) {
          _this5.anchorEl.addEventListener(evt, _this5.__delayHide, QTooltip_passive);
        });
      } else {
        this.anchorEl.addEventListener('mouseenter', this.__delayShow, QTooltip_passive);
      }

      if (this.$q.platform.is.ios !== true) {
        this.anchorEl.addEventListener('mouseleave', this.__delayHide, QTooltip_passive);
      }
    },
    __unconfigureScrollTarget: function __unconfigureScrollTarget() {
      if (this.scrollTarget !== void 0) {
        this.scrollTarget.removeEventListener('scroll', this.hide, QTooltip_passive);
        this.scrollTarget = void 0;
      }

      window.removeEventListener('scroll', this.updatePosition, QTooltip_passive);
    },
    __configureScrollTarget: function __configureScrollTarget() {
      if (this.anchorEl !== void 0) {
        this.scrollTarget = getScrollTarget(this.anchorEl);

        if (this.noParentEvent !== true) {
          this.scrollTarget.addEventListener('scroll', this.hide, QTooltip_passive);
        }

        if (this.noParentEvent === true || this.scrollTarget !== window) {
          window.addEventListener('scroll', this.updatePosition, QTooltip_passive);
        }
      }
    },
    __renderPortal: function __renderPortal(h) {
      return h('transition', {
        props: {
          name: this.transition
        }
      }, [this.showing === true ? h('div', {
        staticClass: 'q-tooltip no-pointer-events',
        class: this.contentClass,
        style: this.contentStyle,
        attrs: {
          role: 'complementary'
        }
      }, Object(utils_slot["a" /* default */])(this, 'default')) : null]);
    }
  },
  mounted: function mounted() {
    this.__processModelChange(this.value);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QList.js


/* harmony default export */ var QList = (vue_runtime_esm["a" /* default */].extend({
  name: 'QList',
  props: {
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    dark: Boolean,
    padding: Boolean
  },
  computed: {
    classes: function classes() {
      return 'q-list' + (this.bordered === true ? ' q-list--bordered' : '') + (this.dense === true ? ' q-list--dense' : '') + (this.separator === true ? ' q-list--separator' : '') + (this.dark === true ? ' q-list--dark' : '') + (this.padding === true ? ' q-list--padding' : '');
    }
  },
  render: function render(h) {
    return h('div', {
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QItem.js









function QItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QItem_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QItem_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var QItem = (vue_runtime_esm["a" /* default */].extend({
  name: 'QItem',
  mixins: [RouterLinkMixin],
  props: {
    active: Boolean,
    dark: Boolean,
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    tag: {
      type: String,
      default: 'div'
    },
    focused: Boolean,
    manualFocus: Boolean
  },
  computed: {
    isClickable: function isClickable() {
      return this.disable !== true && (this.clickable === true || this.hasRouterLink === true || this.tag === 'a' || this.tag === 'label');
    },
    classes: function classes() {
      var _ref;

      return _ref = {
        'q-item--clickable q-link cursor-pointer': this.isClickable,
        'q-focusable q-hoverable': this.isClickable === true && this.manualFocus === false,
        'q-manual-focusable': this.isClickable === true && this.manualFocus === true,
        'q-manual-focusable--focused': this.isClickable === true && this.focused === true,
        'q-item--dense': this.dense,
        'q-item--dark': this.dark,
        'q-item--active': this.active
      }, defineProperty_default()(_ref, this.activeClass, this.active === true && this.hasRouterLink !== true && this.activeClass !== void 0), defineProperty_default()(_ref, 'disabled', this.disable), _ref;
    },
    style: function style() {
      if (this.insetLevel !== void 0) {
        var dir = this.$q.lang.rtl === true ? 'Right' : 'Left';
        return defineProperty_default()({}, 'padding' + dir, 16 + this.insetLevel * 56 + 'px');
      }
    }
  },
  methods: {
    __getContent: function __getContent(h) {
      var child = [].concat(Object(utils_slot["a" /* default */])(this, 'default'));
      this.isClickable === true && child.unshift(h('div', {
        staticClass: 'q-focus-helper',
        attrs: {
          tabindex: -1
        },
        ref: 'blurTarget'
      }));
      return child;
    },
    __onClick: function __onClick(e) {
      if (this.isClickable === true) {
        if (e.qKeyEvent !== true && this.$refs.blurTarget !== void 0) {
          this.$refs.blurTarget.focus();
        }

        this.$emit('click', e);
      }
    },
    __onKeyup: function __onKeyup(e) {
      if (e.keyCode === 13 && this.isClickable === true) {
        Object(utils_event["j" /* stopAndPrevent */])(e); // for ripple

        e.qKeyEvent = true; // for click trigger

        var evt = new MouseEvent('click', e);
        evt.qKeyEvent = true;
        this.$el.dispatchEvent(evt);
      }

      this.$emit('keyup', e);
    }
  },
  render: function render(h) {
    var data = {
      staticClass: 'q-item q-item-type row no-wrap',
      class: this.classes,
      style: this.style
    };
    var evtProp = this.hasRouterLink === true ? 'nativeOn' : 'on';
    data[evtProp] = QItem_objectSpread({}, this.$listeners, {
      click: this.__onClick,
      keyup: this.__onKeyup
    });

    if (this.isClickable === true) {
      data.attrs = {
        tabindex: this.tabindex || '0'
      };
    }

    if (this.hasRouterLink === true) {
      data.tag = 'a';
      data.props = this.routerLinkProps;
      return h('router-link', data, this.__getContent(h));
    }

    return h(this.tag, data, this.__getContent(h));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QItemSection.js



/* harmony default export */ var QItemSection = (vue_runtime_esm["a" /* default */].extend({
  name: 'QItemSection',
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  computed: {
    classes: function classes() {
      var side = this.avatar || this.side || this.thumbnail;
      return defineProperty_default()({
        'q-item__section--top': this.top,
        'q-item__section--avatar': this.avatar,
        'q-item__section--thumbnail': this.thumbnail,
        'q-item__section--side': side,
        'q-item__section--nowrap': this.noWrap,
        'q-item__section--main': !side
      }, "justify-".concat(this.top ? 'start' : 'center'), true);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-item__section column',
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/editor/editor-utils.js









function editor_utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function editor_utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { editor_utils_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { editor_utils_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function run(e, btn, vm) {
  if (btn.handler) {
    btn.handler(e, vm, vm.caret);
  } else {
    vm.runCmd(btn.cmd, btn.param);
  }
}

function __getGroup(h, children) {
  return h('div', {
    staticClass: 'q-editor__toolbar-group'
  }, children);
}

function getBtn(h, vm, btn, clickHandler) {
  var active = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var toggled = active || (btn.type === 'toggle' ? btn.toggled ? btn.toggled(vm) : btn.cmd && vm.caret.is(btn.cmd, btn.param) : false),
      child = [],
      events = {
    click: function click(e) {
      clickHandler && clickHandler();
      run(e, btn, vm);
    }
  };

  if (btn.tip && vm.$q.platform.is.desktop) {
    var Key = btn.key ? h('div', [h('small', "(CTRL + ".concat(String.fromCharCode(btn.key), ")"))]) : null;
    child.push(h(QTooltip, {
      props: {
        delay: 1000
      }
    }, [h('div', {
      domProps: {
        innerHTML: btn.tip
      }
    }), Key]));
  }

  return h(QBtn["a" /* default */], {
    props: editor_utils_objectSpread({}, vm.buttonProps, {
      icon: btn.icon,
      color: toggled ? btn.toggleColor || vm.toolbarToggleColor : btn.color || vm.toolbarColor,
      textColor: toggled && !vm.toolbarPush ? null : btn.textColor || vm.toolbarTextColor,
      label: btn.label,
      disable: btn.disable ? typeof btn.disable === 'function' ? btn.disable(vm) : true : false,
      size: 'sm'
    }),
    on: events
  }, child);
}

function getDropdown(h, vm, btn) {
  var label = btn.label,
      icon = btn.icon,
      onlyIcons = btn.list === 'only-icons',
      contentClass,
      Items;

  function closeDropdown() {
    Dropdown.componentInstance.hide();
  }

  if (onlyIcons) {
    Items = btn.options.map(function (btn) {
      var active = btn.type === void 0 ? vm.caret.is(btn.cmd, btn.param) : false;

      if (active) {
        label = btn.tip;
        icon = btn.icon;
      }

      return getBtn(h, vm, btn, closeDropdown, active);
    });
    contentClass = vm.toolbarBackgroundClass;
    Items = [__getGroup(h, Items)];
  } else {
    var activeClass = vm.toolbarToggleColor !== void 0 ? "text-".concat(vm.toolbarToggleColor) : null;
    var inactiveClass = vm.toolbarTextColor !== void 0 ? "text-".concat(vm.toolbarTextColor) : null;
    Items = btn.options.map(function (btn) {
      var disable = btn.disable ? btn.disable(vm) : false;
      var active = btn.type === void 0 ? vm.caret.is(btn.cmd, btn.param) : false;

      if (active) {
        label = btn.tip;
        icon = btn.icon;
      }

      var htmlTip = btn.htmlTip;
      return h(QItem, {
        props: {
          active: active,
          activeClass: activeClass,
          clickable: true,
          disable: disable,
          dense: true
        },
        on: {
          click: function click(e) {
            closeDropdown();
            vm.$refs.content && vm.$refs.content.focus();
            vm.caret.restore();
            run(e, btn, vm);
          }
        }
      }, [btn.list === 'no-icons' ? null : h(QItemSection, {
        class: active ? activeClass : inactiveClass,
        props: {
          side: true
        }
      }, [h(QIcon["a" /* default */], {
        props: {
          name: btn.icon
        }
      })]), h(QItemSection, [htmlTip ? h('div', {
        domProps: {
          innerHTML: btn.htmlTip
        }
      }) : btn.tip ? h('div', [btn.tip]) : null])]);
    });
    contentClass = [vm.toolbarBackgroundClass, inactiveClass];
    Items = [h(QList, [Items])];
  }

  var highlight = btn.highlight && label !== btn.label;
  var Dropdown = h(QBtnDropdown, {
    props: editor_utils_objectSpread({}, vm.buttonProps, {
      noCaps: true,
      noWrap: true,
      color: highlight ? vm.toolbarToggleColor : vm.toolbarColor,
      textColor: highlight && !vm.toolbarPush ? null : vm.toolbarTextColor,
      label: btn.fixedLabel ? btn.label : label,
      icon: btn.fixedIcon ? btn.icon : icon,
      contentClass: contentClass
    })
  }, Items);
  return Dropdown;
}

function getToolbar(h, vm) {
  if (vm.caret) {
    return vm.buttons.filter(function (f) {
      return !vm.isViewingSource || f.find(function (fb) {
        return fb.cmd === 'viewsource';
      });
    }).map(function (group) {
      return __getGroup(h, group.map(function (btn) {
        if (vm.isViewingSource && btn.cmd !== 'viewsource') {
          return false;
        }

        if (btn.type === 'slot') {
          return Object(utils_slot["a" /* default */])(vm, btn.slot);
        }

        if (btn.type === 'dropdown') {
          return getDropdown(h, vm, btn);
        }

        return getBtn(h, vm, btn);
      }));
    });
  }
}
function getFonts(defaultFont, defaultFontLabel, defaultFontIcon) {
  var fonts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var aliases = Object.keys(fonts);

  if (aliases.length === 0) {
    return {};
  }

  var def = {
    default_font: {
      cmd: 'fontName',
      param: defaultFont,
      icon: defaultFontIcon,
      tip: defaultFontLabel
    }
  };
  aliases.forEach(function (alias) {
    var name = fonts[alias];
    def[alias] = {
      cmd: 'fontName',
      param: name,
      icon: defaultFontIcon,
      tip: name,
      htmlTip: "<font face=\"".concat(name, "\">").concat(name, "</font>")
    };
  });
  return def;
}
function getLinkEditor(h, vm) {
  if (vm.caret) {
    var color = vm.toolbarColor || vm.toolbarTextColor;
    var link = vm.editLinkUrl;

    var updateLink = function updateLink() {
      vm.caret.restore();

      if (link !== vm.editLinkUrl) {
        document.execCommand('createLink', false, link === '' ? ' ' : link);
      }

      vm.editLinkUrl = null;
    };

    return [h('div', {
      staticClass: 'q-mx-xs',
      'class': "text-".concat(color)
    }, ["".concat(vm.$q.lang.editor.url, ": ")]), h(QInput, {
      key: 'qedt_btm_input',
      staticClass: 'q-ma-none q-pa-none col q-editor-input',
      props: {
        value: link,
        color: color,
        autofocus: true,
        borderless: true,
        dense: true
      },
      on: {
        input: function input(val) {
          link = val;
        },
        keydown: function keydown(event) {
          switch (event.keyCode) {
            case 13:
              // ENTER key
              Object(utils_event["g" /* prevent */])(event);
              return updateLink();

            case 27:
              // ESCAPE key
              Object(utils_event["g" /* prevent */])(event);
              vm.caret.restore();

              if (!vm.editLinkUrl || vm.editLinkUrl === 'https://') {
                document.execCommand('unlink');
              }

              vm.editLinkUrl = null;
              break;
          }
        }
      }
    }), __getGroup(h, [h(QBtn["a" /* default */], {
      key: 'qedt_btm_rem',
      attrs: {
        tabindex: -1
      },
      props: editor_utils_objectSpread({}, vm.buttonProps, {
        label: vm.$q.lang.label.remove,
        noCaps: true
      }),
      on: {
        click: function click() {
          vm.caret.restore();
          document.execCommand('unlink');
          vm.editLinkUrl = null;
        }
      }
    }), h(QBtn["a" /* default */], {
      key: 'qedt_btm_upd',
      props: editor_utils_objectSpread({}, vm.buttonProps, {
        label: vm.$q.lang.label.update,
        noCaps: true
      }),
      on: {
        click: updateLink
      }
    })])];
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("fc74");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("59a1");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./node_modules/quasar/src/components/editor/editor-caret.js







function getBlockElement(el, parent) {
  if (parent && el === parent) {
    return null;
  }

  var style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle,
      display = style.display;

  if (display === 'block' || display === 'table') {
    return el;
  }

  return getBlockElement(el.parentNode);
}

function isChildOf(el, parent) {
  if (!el) {
    return false;
  }

  while (el = el.parentNode) {
    if (el === document.body) {
      return false;
    }

    if (el === parent) {
      return true;
    }
  }

  return false;
}

var urlRegex = /^https?:\/\//;
var editor_caret_Caret =
/*#__PURE__*/
function () {
  function Caret(el, vm) {
    classCallCheck_default()(this, Caret);

    this.el = el;
    this.vm = vm;
  }

  createClass_default()(Caret, [{
    key: "save",
    value: function save() {
      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.range;
      this._range = range;
    }
  }, {
    key: "restore",
    value: function restore() {
      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._range;
      var r = document.createRange(),
          sel = document.getSelection();

      if (range) {
        r.setStart(range.startContainer, range.startOffset);
        r.setEnd(range.endContainer, range.endOffset);
        sel.removeAllRanges();
        sel.addRange(r);
      } else {
        sel.selectAllChildren(this.el);
        sel.collapseToEnd();
      }
    }
  }, {
    key: "hasParent",
    value: function hasParent(name, spanLevel) {
      var el = spanLevel ? this.parent : this.blockParent;
      return el ? el.nodeName.toLowerCase() === name.toLowerCase() : false;
    }
  }, {
    key: "hasParents",
    value: function hasParents(list) {
      var el = this.parent;
      return el ? list.includes(el.nodeName.toLowerCase()) : false;
    }
  }, {
    key: "is",
    value: function is(cmd, param) {
      switch (cmd) {
        case 'formatBlock':
          if (param === 'DIV' && this.parent === this.el) {
            return true;
          }

          return this.hasParent(param, param === 'PRE');

        case 'link':
          return this.hasParent('A', true);

        case 'fontSize':
          return document.queryCommandValue(cmd) === param;

        case 'fontName':
          var res = document.queryCommandValue(cmd);
          return res === "\"".concat(param, "\"") || res === param;

        case 'fullscreen':
          return this.vm.inFullscreen;

        case 'viewsource':
          return this.vm.isViewingSource;

        case void 0:
          return false;

        default:
          var state = document.queryCommandState(cmd);
          return param ? state === param : state;
      }
    }
  }, {
    key: "getParentAttribute",
    value: function getParentAttribute(attrib) {
      if (this.parent) {
        return this.parent.getAttribute(attrib);
      }
    }
  }, {
    key: "can",
    value: function can(name) {
      if (name === 'outdent') {
        return this.hasParents(['blockquote', 'li']);
      }

      if (name === 'indent') {
        var parentName = this.parent ? this.parent.nodeName.toLowerCase() : false;

        if (parentName === 'blockquote') {
          return false;
        }

        if (parentName === 'li') {
          var previousEl = this.parent.previousSibling;
          return previousEl && previousEl.nodeName.toLowerCase() === 'li';
        }

        return false;
      }

      if (name === 'link') {
        return this.selection || this.is('link');
      }
    }
  }, {
    key: "apply",
    value: function apply(cmd, param) {
      var _this = this;

      var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      if (cmd === 'formatBlock') {
        if (['BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(param) && this.is(cmd, param)) {
          cmd = 'outdent';
          param = null;
        }

        if (param === 'PRE' && this.is(cmd, 'PRE')) {
          param = 'P';
        }
      } else if (cmd === 'print') {
        done();
        var win = window.open();
        win.document.write("\n        <!doctype html>\n        <html>\n          <head>\n            <title>Print - ".concat(document.title, "</title>\n          </head>\n          <body>\n            <div>").concat(this.el.innerHTML, "</div>\n          </body>\n        </html>\n      "));
        win.print();
        win.close();
        return;
      } else if (cmd === 'link') {
        var link = this.getParentAttribute('href');

        if (!link) {
          var selection = this.selectWord(this.selection);
          var url = selection ? selection.toString() : '';

          if (!url.length) {
            return;
          }

          this.vm.editLinkUrl = urlRegex.test(url) ? url : 'https://';
          document.execCommand('createLink', false, this.vm.editLinkUrl);
        } else {
          this.vm.editLinkUrl = link;
        }

        this.vm.$nextTick(function () {
          _this.range.selectNodeContents(_this.parent);

          _this.save();
        });
        return;
      } else if (cmd === 'fullscreen') {
        this.vm.toggleFullscreen();
        done();
        return;
      } else if (cmd === 'viewsource') {
        this.vm.isViewingSource = !this.vm.isViewingSource;

        this.vm.__setContent(this.vm.value);

        done();
        return;
      }

      if (this.vm.$q.platform.is.ie === true || this.vm.$q.platform.is.edge === true) {
        // workaround for IE/Edge, otherwise it messes up
        // the DOM of toolbar
        var dummyDiv = document.createElement('div');
        this.vm.$refs.content.appendChild(dummyDiv);
        document.execCommand(cmd, false, param);
        dummyDiv.remove();
      } else {
        document.execCommand(cmd, false, param);
      }

      done();
    }
  }, {
    key: "selectWord",
    value: function selectWord(sel) {
      if (!sel || !sel.isCollapsed) {
        return sel;
      } // Detect if selection is backwards


      var range = document.createRange();
      range.setStart(sel.anchorNode, sel.anchorOffset);
      range.setEnd(sel.focusNode, sel.focusOffset);
      var direction = range.collapsed ? ['backward', 'forward'] : ['forward', 'backward'];
      range.detach(); // modify() works on the focus of the selection

      var endNode = sel.focusNode,
          endOffset = sel.focusOffset;
      sel.collapse(sel.anchorNode, sel.anchorOffset);
      sel.modify('move', direction[0], 'character');
      sel.modify('move', direction[1], 'word');
      sel.extend(endNode, endOffset);
      sel.modify('extend', direction[1], 'character');
      sel.modify('extend', direction[0], 'word');
      return sel;
    }
  }, {
    key: "selection",
    get: function get() {
      if (!this.el) {
        return;
      }

      var sel = document.getSelection(); // only when the selection in element

      if (isChildOf(sel.anchorNode, this.el) && isChildOf(sel.focusNode, this.el)) {
        return sel;
      }
    }
  }, {
    key: "hasSelection",
    get: function get() {
      return this.selection ? this.selection.toString().length > 0 : null;
    }
  }, {
    key: "range",
    get: function get() {
      var sel = this.selection;

      if (!sel) {
        return;
      }

      return sel.rangeCount ? sel.getRangeAt(0) : null;
    }
  }, {
    key: "parent",
    get: function get() {
      var range = this.range;

      if (!range) {
        return;
      }

      var node = range.startContainer;
      return node.nodeType === document.ELEMENT_NODE ? node : node.parentNode;
    }
  }, {
    key: "blockParent",
    get: function get() {
      var parent = this.parent;

      if (!parent) {
        return;
      }

      return getBlockElement(parent, this.el);
    }
  }]);

  return Caret;
}();
// CONCATENATED MODULE: ./node_modules/quasar/src/utils/extend.js



var extend_toString = Object.prototype.toString,
    hasOwn = Object.prototype.hasOwnProperty,
    class2type = {};
'Boolean Number String Function Array Date RegExp Object'.split(' ').forEach(function (name) {
  class2type['[object ' + name + ']'] = name.toLowerCase();
});

function extend_type(obj) {
  return obj === null ? String(obj) : class2type[extend_toString.call(obj)] || 'object';
}

function isPlainObject(obj) {
  if (!obj || extend_type(obj) !== 'object') {
    return false;
  }

  if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
    return false;
  }

  var key;

  for (key in obj) {}

  return key === undefined || hasOwn.call(obj, key);
}

function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }

  if (Object(target) !== target && extend_type(target) !== 'function') {
    target = {};
  }

  if (length === i) {
    target = this;
    i--;
  }

  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      for (name in options) {
        src = target[name];
        copy = options[name];

        if (target === copy) {
          continue;
        }

        if (deep && copy && (isPlainObject(copy) || (copyIsArray = extend_type(copy) === 'array'))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && extend_type(src) === 'array' ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          target[name] = extend(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/editor/QEditor.js










function QEditor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QEditor_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QEditor_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








/* harmony default export */ var QEditor = (vue_runtime_esm["a" /* default */].extend({
  name: 'QEditor',
  mixins: [fullscreen],
  props: {
    value: {
      type: String,
      required: true
    },
    readonly: Boolean,
    disable: Boolean,
    minHeight: {
      type: String,
      default: '10rem'
    },
    maxHeight: String,
    height: String,
    definitions: Object,
    fonts: Object,
    toolbar: {
      type: Array,
      validator: function validator(v) {
        return v.length === 0 || v.every(function (group) {
          return group.length;
        });
      },
      default: function _default() {
        return [['left', 'center', 'right', 'justify'], ['bold', 'italic', 'underline', 'strike'], ['undo', 'redo']];
      }
    },
    toolbarColor: String,
    toolbarBg: String,
    toolbarTextColor: String,
    toolbarToggleColor: {
      type: String,
      default: 'primary'
    },
    toolbarOutline: Boolean,
    toolbarPush: Boolean,
    toolbarRounded: Boolean,
    contentStyle: Object,
    contentClass: [Object, Array, String],
    square: Boolean,
    flat: Boolean,
    dense: Boolean
  },
  computed: {
    editable: function editable() {
      return !this.readonly && !this.disable;
    },
    hasToolbar: function hasToolbar() {
      return this.toolbar && this.toolbar.length > 0;
    },
    toolbarBackgroundClass: function toolbarBackgroundClass() {
      if (this.toolbarBg) {
        return "bg-".concat(this.toolbarBg);
      }
    },
    buttonProps: function buttonProps() {
      var flat = this.toolbarOutline !== true && this.toolbarPush !== true;
      return {
        type: 'a',
        flat: flat,
        noWrap: true,
        outline: this.toolbarOutline,
        push: this.toolbarPush,
        rounded: this.toolbarRounded,
        dense: true,
        color: this.toolbarColor,
        disable: !this.editable,
        size: 'sm'
      };
    },
    buttonDef: function buttonDef() {
      var e = this.$q.lang.editor,
          i = this.$q.iconSet.editor;
      return {
        bold: {
          cmd: 'bold',
          icon: i.bold,
          tip: e.bold,
          key: 66
        },
        italic: {
          cmd: 'italic',
          icon: i.italic,
          tip: e.italic,
          key: 73
        },
        strike: {
          cmd: 'strikeThrough',
          icon: i.strikethrough,
          tip: e.strikethrough,
          key: 83
        },
        underline: {
          cmd: 'underline',
          icon: i.underline,
          tip: e.underline,
          key: 85
        },
        unordered: {
          cmd: 'insertUnorderedList',
          icon: i.unorderedList,
          tip: e.unorderedList
        },
        ordered: {
          cmd: 'insertOrderedList',
          icon: i.orderedList,
          tip: e.orderedList
        },
        subscript: {
          cmd: 'subscript',
          icon: i.subscript,
          tip: e.subscript,
          htmlTip: 'x<subscript>2</subscript>'
        },
        superscript: {
          cmd: 'superscript',
          icon: i.superscript,
          tip: e.superscript,
          htmlTip: 'x<superscript>2</superscript>'
        },
        link: {
          cmd: 'link',
          disable: function disable(vm) {
            return vm.caret && !vm.caret.can('link');
          },
          icon: i.hyperlink,
          tip: e.hyperlink,
          key: 76
        },
        fullscreen: {
          cmd: 'fullscreen',
          icon: i.toggleFullscreen,
          tip: e.toggleFullscreen,
          key: 70
        },
        viewsource: {
          cmd: 'viewsource',
          icon: i.viewSource,
          tip: e.viewSource
        },
        quote: {
          cmd: 'formatBlock',
          param: 'BLOCKQUOTE',
          icon: i.quote,
          tip: e.quote,
          key: 81
        },
        left: {
          cmd: 'justifyLeft',
          icon: i.left,
          tip: e.left
        },
        center: {
          cmd: 'justifyCenter',
          icon: i.center,
          tip: e.center
        },
        right: {
          cmd: 'justifyRight',
          icon: i.right,
          tip: e.right
        },
        justify: {
          cmd: 'justifyFull',
          icon: i.justify,
          tip: e.justify
        },
        print: {
          type: 'no-state',
          cmd: 'print',
          icon: i.print,
          tip: e.print,
          key: 80
        },
        outdent: {
          type: 'no-state',
          disable: function disable(vm) {
            return vm.caret && !vm.caret.can('outdent');
          },
          cmd: 'outdent',
          icon: i.outdent,
          tip: e.outdent
        },
        indent: {
          type: 'no-state',
          disable: function disable(vm) {
            return vm.caret && !vm.caret.can('indent');
          },
          cmd: 'indent',
          icon: i.indent,
          tip: e.indent
        },
        removeFormat: {
          type: 'no-state',
          cmd: 'removeFormat',
          icon: i.removeFormat,
          tip: e.removeFormat
        },
        hr: {
          type: 'no-state',
          cmd: 'insertHorizontalRule',
          icon: i.hr,
          tip: e.hr
        },
        undo: {
          type: 'no-state',
          cmd: 'undo',
          icon: i.undo,
          tip: e.undo,
          key: 90
        },
        redo: {
          type: 'no-state',
          cmd: 'redo',
          icon: i.redo,
          tip: e.redo,
          key: 89
        },
        h1: {
          cmd: 'formatBlock',
          param: 'H1',
          icon: i.header1 || i.header,
          tip: e.header1,
          htmlTip: "<h1 class=\"q-ma-none\">".concat(e.header1, "</h1>")
        },
        h2: {
          cmd: 'formatBlock',
          param: 'H2',
          icon: i.header2 || i.header,
          tip: e.header2,
          htmlTip: "<h2 class=\"q-ma-none\">".concat(e.header2, "</h2>")
        },
        h3: {
          cmd: 'formatBlock',
          param: 'H3',
          icon: i.header3 || i.header,
          tip: e.header3,
          htmlTip: "<h3 class=\"q-ma-none\">".concat(e.header3, "</h3>")
        },
        h4: {
          cmd: 'formatBlock',
          param: 'H4',
          icon: i.header4 || i.header,
          tip: e.header4,
          htmlTip: "<h4 class=\"q-ma-none\">".concat(e.header4, "</h4>")
        },
        h5: {
          cmd: 'formatBlock',
          param: 'H5',
          icon: i.header5 || i.header,
          tip: e.header5,
          htmlTip: "<h5 class=\"q-ma-none\">".concat(e.header5, "</h5>")
        },
        h6: {
          cmd: 'formatBlock',
          param: 'H6',
          icon: i.header6 || i.header,
          tip: e.header6,
          htmlTip: "<h6 class=\"q-ma-none\">".concat(e.header6, "</h6>")
        },
        p: {
          cmd: 'formatBlock',
          param: 'DIV',
          icon: i.header,
          tip: e.paragraph
        },
        code: {
          cmd: 'formatBlock',
          param: 'PRE',
          icon: i.code,
          htmlTip: "<code>".concat(e.code, "</code>")
        },
        'size-1': {
          cmd: 'fontSize',
          param: '1',
          icon: i.size1 || i.size,
          tip: e.size1,
          htmlTip: "<font size=\"1\">".concat(e.size1, "</font>")
        },
        'size-2': {
          cmd: 'fontSize',
          param: '2',
          icon: i.size2 || i.size,
          tip: e.size2,
          htmlTip: "<font size=\"2\">".concat(e.size2, "</font>")
        },
        'size-3': {
          cmd: 'fontSize',
          param: '3',
          icon: i.size3 || i.size,
          tip: e.size3,
          htmlTip: "<font size=\"3\">".concat(e.size3, "</font>")
        },
        'size-4': {
          cmd: 'fontSize',
          param: '4',
          icon: i.size4 || i.size,
          tip: e.size4,
          htmlTip: "<font size=\"4\">".concat(e.size4, "</font>")
        },
        'size-5': {
          cmd: 'fontSize',
          param: '5',
          icon: i.size5 || i.size,
          tip: e.size5,
          htmlTip: "<font size=\"5\">".concat(e.size5, "</font>")
        },
        'size-6': {
          cmd: 'fontSize',
          param: '6',
          icon: i.size6 || i.size,
          tip: e.size6,
          htmlTip: "<font size=\"6\">".concat(e.size6, "</font>")
        },
        'size-7': {
          cmd: 'fontSize',
          param: '7',
          icon: i.size7 || i.size,
          tip: e.size7,
          htmlTip: "<font size=\"7\">".concat(e.size7, "</font>")
        }
      };
    },
    buttons: function buttons() {
      var _this = this;

      var userDef = this.definitions || {};
      var def = this.definitions || this.fonts ? extend(true, {}, this.buttonDef, userDef, getFonts(this.defaultFont, this.$q.lang.editor.defaultFont, this.$q.iconSet.editor.font, this.fonts)) : this.buttonDef;
      return this.toolbar.map(function (group) {
        return group.map(function (token) {
          if (token.options) {
            return {
              type: 'dropdown',
              icon: token.icon,
              label: token.label,
              size: 'sm',
              dense: true,
              fixedLabel: token.fixedLabel,
              fixedIcon: token.fixedIcon,
              highlight: token.highlight,
              list: token.list,
              options: token.options.map(function (item) {
                return def[item];
              })
            };
          }

          var obj = def[token];

          if (obj) {
            return obj.type === 'no-state' || userDef[token] && (obj.cmd === void 0 || _this.buttonDef[obj.cmd] && _this.buttonDef[obj.cmd].type === 'no-state') ? obj : Object.assign({
              type: 'toggle'
            }, obj);
          } else {
            return {
              type: 'slot',
              slot: token
            };
          }
        });
      });
    },
    keys: function keys() {
      var k = {},
          add = function add(btn) {
        if (btn.key) {
          k[btn.key] = {
            cmd: btn.cmd,
            param: btn.param
          };
        }
      };

      this.buttons.forEach(function (group) {
        group.forEach(function (token) {
          if (token.options) {
            token.options.forEach(add);
          } else {
            add(token);
          }
        });
      });
      return k;
    },
    innerStyle: function innerStyle() {
      return this.inFullscreen ? this.contentStyle : [{
        minHeight: this.minHeight,
        height: this.height,
        maxHeight: this.maxHeight
      }, this.contentStyle];
    },
    innerClass: function innerClass() {
      return [this.contentClass, {
        col: this.inFullscreen,
        'overflow-auto': this.inFullscreen || this.maxHeight
      }];
    }
  },
  data: function data() {
    return {
      editWatcher: true,
      editLinkUrl: null,
      isViewingSource: false
    };
  },
  watch: {
    value: function value(v) {
      if (this.editWatcher) {
        this.__setContent(v);
      } else {
        this.editWatcher = true;
      }
    }
  },
  methods: {
    __onInput: function __onInput() {
      if (this.editWatcher) {
        var val = this.isViewingSource ? this.$refs.content.innerText : this.$refs.content.innerHTML;

        if (val !== this.value) {
          this.editWatcher = false;
          this.$emit('input', val);
        }
      }
    },
    __onKeydown: function __onKeydown(e) {
      this.$emit('keydown', e);

      if (!e.ctrlKey) {
        this.refreshToolbar();
        this.$q.platform.is.ie && this.$nextTick(this.__onInput);
        return;
      }

      var key = e.keyCode;
      var target = this.keys[key];

      if (target !== void 0) {
        var cmd = target.cmd,
            param = target.param;
        Object(utils_event["j" /* stopAndPrevent */])(e);
        this.runCmd(cmd, param, false);
      }
    },
    __onClick: function __onClick(e) {
      this.refreshToolbar();
      this.$emit('click', e);
    },
    __onBlur: function __onBlur() {
      this.caret.save();
      this.$emit('blur');
    },
    runCmd: function runCmd(cmd, param) {
      var _this2 = this;

      var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.focus();
      this.caret.apply(cmd, param, function () {
        _this2.focus();

        if (_this2.$q.platform.is.ie === true || _this2.$q.platform.is.edge === true) {
          _this2.$nextTick(_this2.__onInput);
        }

        if (update) {
          _this2.refreshToolbar();
        }
      });
    },
    refreshToolbar: function refreshToolbar() {
      var _this3 = this;

      setTimeout(function () {
        _this3.editLinkUrl = null;

        _this3.$forceUpdate();
      }, 1);
    },
    focus: function focus() {
      this.$refs.content.focus();
    },
    getContentEl: function getContentEl() {
      return this.$refs.content;
    },
    __setContent: function __setContent(v) {
      if (this.isViewingSource) {
        this.$refs.content.innerText = v;
      } else {
        this.$refs.content.innerHTML = v;
      }
    }
  },
  created: function created() {
    if (Platform["d" /* isSSR */] === false) {
      document.execCommand('defaultParagraphSeparator', false, 'div');
      this.defaultFont = window.getComputedStyle(document.body).fontFamily;
    }
  },
  mounted: function mounted() {
    this.caret = new editor_caret_Caret(this.$refs.content, this);

    this.__setContent(this.value);

    this.refreshToolbar();
  },
  render: function render(h) {
    var toolbars;

    if (this.hasToolbar) {
      var bars = [];
      bars.push(h('div', {
        key: 'qedt_top',
        staticClass: 'q-editor__toolbar row no-wrap scroll-x',
        class: this.toolbarBackgroundClass
      }, getToolbar(h, this)));
      this.editLinkUrl !== null && bars.push(h('div', {
        key: 'qedt_btm',
        staticClass: 'q-editor__toolbar row no-wrap items-center scroll-x',
        class: this.toolbarBackgroundClass
      }, getLinkEditor(h, this)));
      toolbars = h('div', {
        key: 'toolbar_ctainer',
        staticClass: 'q-editor__toolbars-container'
      }, bars);
    }

    return h('div', {
      staticClass: 'q-editor',
      style: {
        height: this.inFullscreen ? '100vh' : null
      },
      'class': {
        disabled: this.disable,
        'fullscreen column': this.inFullscreen,
        'q-editor--square no-border-radius': this.square,
        'q-editor--flat': this.flat,
        'q-editor--dense': this.dense
      }
    }, [toolbars, h('div', {
      ref: 'content',
      staticClass: "q-editor__content",
      style: this.innerStyle,
      class: this.innerClass,
      attrs: {
        contenteditable: this.editable
      },
      domProps: Platform["d" /* isSSR */] ? {
        innerHTML: this.value
      } : undefined,
      on: QEditor_objectSpread({}, this.$listeners, {
        input: this.__onInput,
        keydown: this.__onKeydown,
        click: this.__onClick,
        blur: this.__onBlur
      })
    })]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/editor/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/fab/fab-mixin.js
/* harmony default export */ var fab_mixin = ({
  props: {
    type: {
      type: String,
      default: 'a'
    },
    outline: Boolean,
    push: Boolean,
    flat: Boolean,
    color: String,
    textColor: String,
    glossy: Boolean,
    disable: Boolean
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/fab/QFab.js










function QFab_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QFab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QFab_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QFab_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* harmony default export */ var QFab = (vue_runtime_esm["a" /* default */].extend({
  name: 'QFab',
  mixins: [fab_mixin, model_toggle],
  provide: function provide() {
    var _this = this;

    return {
      __qFabClose: function __qFabClose(evt) {
        _this.hide(evt);

        _this.$refs.trigger && _this.$refs.trigger.$el && _this.$refs.trigger.$el.focus();
      }
    };
  },
  props: {
    icon: String,
    activeIcon: String,
    direction: {
      type: String,
      default: 'right',
      validator: function validator(v) {
        return ['up', 'right', 'down', 'left'].includes(v);
      }
    },
    persistent: Boolean
  },
  data: function data() {
    return {
      showing: this.value === true
    };
  },
  computed: {
    hideOnRouteChange: function hideOnRouteChange() {
      return this.persistent !== true;
    }
  },
  render: function render(h) {
    var tooltip = this.$scopedSlots.tooltip !== void 0 ? this.$scopedSlots.tooltip() : [];
    return h('div', {
      staticClass: 'q-fab z-fab row inline justify-center',
      class: this.showing === true ? 'q-fab--opened' : null,
      on: this.$listeners
    }, [h(QBtn["a" /* default */], {
      ref: 'trigger',
      props: QFab_objectSpread({}, this.$props, {
        icon: void 0,
        fab: true
      }),
      on: {
        click: this.toggle
      }
    }, tooltip.concat([h(QIcon["a" /* default */], {
      staticClass: 'q-fab__icon absolute-full',
      props: {
        name: this.icon || this.$q.iconSet.fab.icon
      }
    }), h(QIcon["a" /* default */], {
      staticClass: 'q-fab__active-icon absolute-full',
      props: {
        name: this.activeIcon || this.$q.iconSet.fab.activeIcon
      }
    })])), h('div', {
      staticClass: 'q-fab__actions flex no-wrap inline items-center',
      class: "q-fab__actions--".concat(this.direction)
    }, Object(utils_slot["a" /* default */])(this, 'default'))]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js








function QFabAction_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QFabAction_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QFabAction_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QFabAction_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var QFabAction = (vue_runtime_esm["a" /* default */].extend({
  name: 'QFabAction',
  mixins: [fab_mixin],
  props: {
    icon: {
      type: String,
      required: true
    },
    to: [String, Object],
    replace: Boolean
  },
  inject: {
    __qFabClose: {
      default: function _default() {
        console.error('QFabAction needs to be child of QFab');
      }
    }
  },
  methods: {
    click: function click(e) {
      this.__qFabClose();

      this.$emit('click', e);
    }
  },
  render: function render(h) {
    return h(QBtn["a" /* default */], {
      props: QFabAction_objectSpread({}, this.$props, {
        fabMini: true
      }),
      on: QFabAction_objectSpread({}, this.$listeners, {
        click: this.click
      })
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/fab/index.js



// CONCATENATED MODULE: ./node_modules/quasar/src/components/field/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/typeof.js
var helpers_typeof = __webpack_require__("8993");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/quasar/src/components/form/QForm.js











function QForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QForm_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QForm_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var QForm = (vue_runtime_esm["a" /* default */].extend({
  name: 'QForm',
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean
  },
  mounted: function mounted() {
    this.validateIndex = 0;
    this.autofocus === true && this.focus();
  },
  methods: {
    validate: function validate(shouldFocus) {
      var _this = this;

      var promises = [];
      var focus = typeof shouldFocus === 'boolean' ? shouldFocus : this.noErrorFocus !== true;
      this.validateIndex++;
      var components = getAllChildren(this);

      var emit = function emit(res) {
        _this.$emit('validation-' + (res === true ? 'success' : 'error'));
      };

      var _loop = function _loop(i) {
        var comp = components[i];

        if (typeof comp.validate === 'function') {
          var valid = comp.validate();

          if (typeof valid.then === 'function') {
            promises.push(valid.then(function (v) {
              return {
                valid: v,
                comp: comp
              };
            }, function (error) {
              return {
                valid: false,
                comp: comp,
                error: error
              };
            }));
          } else if (valid !== true) {
            if (_this.greedy === false) {
              emit(false);

              if (focus === true && typeof comp.focus === 'function') {
                comp.focus();
              }

              return {
                v: Promise.resolve(false)
              };
            }

            promises.push({
              valid: false,
              comp: comp
            });
          }
        }
      };

      for (var i = 0; i < components.length; i++) {
        var _ret = _loop(i);

        if (typeof_default()(_ret) === "object") return _ret.v;
      }

      if (promises.length === 0) {
        emit(true);
        return Promise.resolve(true);
      }

      var index = this.validateIndex;
      return Promise.all(promises).then(function (res) {
        if (index === _this.validateIndex) {
          var _res$ = res[0],
              valid = _res$.valid,
              comp = _res$.comp;
          emit(valid);

          if (focus === true && valid !== true && typeof comp.focus === 'function') {
            comp.focus();
          }

          return valid;
        }
      });
    },
    resetValidation: function resetValidation() {
      this.validateIndex++;
      getAllChildren(this).forEach(function (comp) {
        if (typeof comp.resetValidation === 'function') {
          comp.resetValidation();
        }
      });
    },
    submit: function submit(evt) {
      var _this2 = this;

      evt !== void 0 && Object(utils_event["j" /* stopAndPrevent */])(evt);
      this.validate().then(function (val) {
        val === true && _this2.$emit('submit', evt);
      });
    },
    reset: function reset(evt) {
      var _this3 = this;

      evt !== void 0 && Object(utils_event["j" /* stopAndPrevent */])(evt);
      this.$emit('reset');
      this.$nextTick(function () {
        // allow userland to reset values before
        _this3.resetValidation();

        if (_this3.autofocus === true && _this3.noResetFocus !== true) {
          _this3.focus();
        }
      });
    },
    focus: function focus() {
      var target = this.$el.querySelector('[autofocus]') || this.$el.querySelector('[tabindex]');
      target !== null && target.focus();
    }
  },
  render: function render(h) {
    return h('form', {
      staticClass: 'q-form',
      on: QForm_objectSpread({}, this.$listeners, {
        submit: this.submit,
        reset: this.reset
      })
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/form/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/icon/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/img/QImg.js




/* harmony default export */ var QImg = (vue_runtime_esm["a" /* default */].extend({
  name: 'QImg',
  props: {
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    placeholderSrc: String,
    basic: Boolean,
    contain: Boolean,
    position: {
      type: String,
      default: '50% 50%'
    },
    ratio: [String, Number],
    transition: {
      type: String,
      default: 'fade'
    },
    noDefaultSpinner: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  data: function data() {
    return {
      currentSrc: '',
      image: null,
      isLoading: !!this.src,
      hasError: false,
      naturalRatio: void 0
    };
  },
  watch: {
    src: function src() {
      this.__load();
    },
    srcset: function srcset(val) {
      this.__updateWatcher(val);
    }
  },
  computed: {
    aspectRatio: function aspectRatio() {
      return this.ratio || this.naturalRatio;
    },
    padding: function padding() {
      return this.aspectRatio !== void 0 ? 1 / this.aspectRatio * 100 + '%' : void 0;
    },
    url: function url() {
      return this.currentSrc || this.placeholderSrc || void 0;
    },
    attrs: function attrs() {
      var att = {
        role: 'img'
      };

      if (this.alt !== void 0) {
        att['aria-label'] = this.alt;
      }

      return att;
    }
  },
  methods: {
    __onLoad: function __onLoad(img) {
      this.isLoading = false;
      this.hasError = false;

      this.__computeRatio(img);

      this.__updateSrc();

      this.__updateWatcher(this.srcset);

      this.$emit('load', this.currentSrc);
    },
    __onError: function __onError(err) {
      clearTimeout(this.ratioTimer);
      this.isLoading = false;
      this.hasError = true;
      this.currentSrc = '';
      this.$emit('error', err);
    },
    __updateSrc: function __updateSrc() {
      if (this.image !== void 0 && this.isLoading === false) {
        var src = this.image.currentSrc || this.image.src;

        if (this.currentSrc !== src) {
          this.currentSrc = src;
        }
      }
    },
    __updateWatcher: function __updateWatcher(srcset) {
      if (srcset) {
        if (this.unwatch === void 0) {
          this.unwatch = this.$watch('$q.screen.width', this.__updateSrc);
        }
      } else if (this.unwatch !== void 0) {
        this.unwatch();
        this.unwatch = void 0;
      }
    },
    __load: function __load() {
      var _this = this;

      clearTimeout(this.ratioTimer);
      this.hasError = false;

      if (!this.src) {
        this.isLoading = false;
        this.image = void 0;
        this.currentSrc = '';
        return;
      }

      this.isLoading = true;
      var img = new Image();
      this.image = img;

      img.onerror = function (err) {
        // if we are still rendering same image
        if (_this.image === img && _this.destroyed !== true) {
          _this.__onError(err);
        }
      };

      img.onload = function () {
        if (_this.destroyed === true) {
          return;
        } // if we are still rendering same image


        if (_this.image === img) {
          if (img.decode !== void 0) {
            img.decode().catch(function (err) {
              if (_this.image === img && _this.destroyed !== true) {
                _this.__onError(err);
              }
            }).then(function () {
              if (_this.image === img && _this.destroyed !== true) {
                _this.__onLoad(img);
              }
            });
          } else {
            _this.__onLoad(img);
          }
        }
      };

      img.src = this.src;

      if (this.srcset) {
        img.srcset = this.srcset;
      }

      if (this.sizes) {
        img.sizes = this.sizes;
      }
    },
    __computeRatio: function __computeRatio(img) {
      var _this2 = this;

      var naturalHeight = img.naturalHeight,
          naturalWidth = img.naturalWidth;

      if (naturalHeight || naturalWidth) {
        this.naturalRatio = naturalHeight === 0 ? 1 : naturalWidth / naturalHeight;
      } else {
        this.ratioTimer = setTimeout(function () {
          if (_this2.image === img && _this2.destroyed !== true) {
            _this2.__computeRatio(img);
          }
        }, 100);
      }
    },
    __getImage: function __getImage(h) {
      var content = this.url !== void 0 ? h('div', {
        key: this.url,
        staticClass: 'q-img__image absolute-full',
        style: {
          backgroundImage: "url(\"".concat(this.url, "\")"),
          backgroundSize: this.contain ? 'contain' : 'cover',
          backgroundPosition: this.position
        }
      }) : null;
      return this.basic === true ? content : h('transition', {
        props: {
          name: 'q-transition--' + this.transition
        }
      }, [content]);
    },
    __getContent: function __getContent(h) {
      var slotVm = Object(utils_slot["a" /* default */])(this, this.hasError === true ? 'error' : 'default');

      if (this.basic === true) {
        return h('div', {
          key: 'content',
          staticClass: 'q-img__content absolute-full'
        }, slotVm);
      }

      var content = this.isLoading === true ? h('div', {
        key: 'placeholder',
        staticClass: 'q-img__loading absolute-full flex flex-center'
      }, this.$scopedSlots.loading !== void 0 ? this.$scopedSlots.loading() : this.noDefaultSpinner === false ? [h(QSpinner["a" /* default */], {
        props: {
          color: this.spinnerColor,
          size: this.spinnerSize
        }
      })] : null) : h('div', {
        key: 'content',
        staticClass: 'q-img__content absolute-full'
      }, slotVm);
      return h('transition', {
        props: {
          name: 'q-transition--fade'
        }
      }, [content]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-img overflow-hidden',
      attrs: this.attrs,
      on: this.$listeners
    }, [h('div', {
      style: {
        paddingBottom: this.padding
      }
    }), this.__getImage(h), this.__getContent(h)]);
  },
  beforeMount: function beforeMount() {
    if (this.placeholderSrc !== void 0 && this.ratio === void 0) {
      var img = new Image();
      img.src = this.placeholderSrc;

      this.__computeRatio(img);
    }

    this.isLoading === true && this.__load();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyed = true;
    clearTimeout(this.ratioTimer);
    this.unwatch !== void 0 && this.unwatch();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/img/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/infinite-scroll/QInfiniteScroll.js







/* harmony default export */ var QInfiniteScroll = (vue_runtime_esm["a" /* default */].extend({
  name: 'QInfiniteScroll',
  props: {
    offset: {
      type: Number,
      default: 500
    },
    debounce: {
      type: [String, Number],
      default: 100
    },
    scrollTarget: {},
    disable: Boolean,
    reverse: Boolean
  },
  data: function data() {
    return {
      index: 0,
      fetching: false,
      working: true
    };
  },
  watch: {
    disable: function disable(val) {
      if (val === true) {
        this.stop();
      } else {
        this.resume();
      }
    },
    scrollTarget: function scrollTarget() {
      this.updateScrollTarget();
    },
    debounce: function debounce(val) {
      this.__setDebounce(val);
    }
  },
  methods: {
    poll: function poll() {
      if (this.disable === true || this.fetching === true || this.working === false) {
        return;
      }

      var scrollHeight = getScrollHeight(this.scrollContainer),
          scrollPosition = getScrollPosition(this.scrollContainer),
          containerHeight = Object(dom["c" /* height */])(this.scrollContainer);

      if (this.reverse === false) {
        if (scrollPosition + containerHeight + this.offset >= scrollHeight) {
          this.trigger();
        }
      } else {
        if (scrollPosition < this.offset) {
          this.trigger();
        }
      }
    },
    trigger: function trigger() {
      var _this = this;

      if (this.disable === true || this.fetching === true || this.working === false) {
        return;
      }

      this.index++;
      this.fetching = true;
      var heightBefore = getScrollHeight(this.scrollContainer);
      this.$emit('load', this.index, function (stop) {
        if (_this.working === true) {
          _this.fetching = false;

          _this.$nextTick(function () {
            if (_this.reverse === true) {
              var heightAfter = getScrollHeight(_this.scrollContainer),
                  scrollPosition = getScrollPosition(_this.scrollContainer),
                  heightDifference = heightAfter - heightBefore;
              _this.scrollContainer.scrollTop = scrollPosition + heightDifference;
            }

            if (stop === true) {
              _this.stop();
            } else {
              _this.$el.closest('body') && _this.poll();
            }
          });
        }
      });
    },
    reset: function reset() {
      this.index = 0;
    },
    resume: function resume() {
      if (this.working === false) {
        this.working = true;
        this.scrollContainer.addEventListener('scroll', this.poll, utils_event["e" /* listenOpts */].passive);
      }

      this.immediatePoll();
    },
    stop: function stop() {
      if (this.working === true) {
        this.working = false;
        this.fetching = false;
        this.scrollContainer.removeEventListener('scroll', this.poll, utils_event["e" /* listenOpts */].passive);
      }
    },
    updateScrollTarget: function updateScrollTarget() {
      if (this.scrollContainer && this.working === true) {
        this.scrollContainer.removeEventListener('scroll', this.poll, utils_event["e" /* listenOpts */].passive);
      }

      if (typeof this.scrollTarget === 'string') {
        this.scrollContainer = document.querySelector(this.scrollTarget);

        if (this.scrollContainer === null) {
          console.error("InfiniteScroll: scroll target container \"".concat(this.scrollTarget, "\" not found"), this);
          return;
        }
      } else {
        this.scrollContainer = this.scrollTarget === document.defaultView || this.scrollTarget instanceof Element ? this.scrollTarget : getScrollTarget(this.$el);
      }

      if (this.working === true) {
        this.scrollContainer.addEventListener('scroll', this.poll, utils_event["e" /* listenOpts */].passive);
      }
    },
    __setDebounce: function __setDebounce(val) {
      val = parseInt(val, 10);

      if (val <= 0) {
        this.poll = this.immediatePoll;
      } else {
        this.poll = Object(debounce["a" /* default */])(this.immediatePoll, isNaN(val) === true ? 100 : val);
      }
    }
  },
  mounted: function mounted() {
    this.immediatePoll = this.poll;

    this.__setDebounce(this.debounce);

    this.updateScrollTarget();
    this.immediatePoll();

    if (this.reverse === true) {
      var scrollHeight = getScrollHeight(this.scrollContainer),
          containerHeight = Object(dom["c" /* height */])(this.scrollContainer);
      this.scrollContainer.scrollTop = scrollHeight - containerHeight;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.working === true) {
      this.scrollContainer.removeEventListener('scroll', this.poll, utils_event["e" /* listenOpts */].passive);
    }
  },
  render: function render(h) {
    var content = this.$scopedSlots.default !== void 0 ? this.$scopedSlots.default() : [];
    var body = this.fetching === true ? [h('div', {
      staticClass: 'q-infinite-scroll__loading'
    }, Object(utils_slot["a" /* default */])(this, 'loading'))] : [];
    return h('div', {
      staticClass: 'q-infinite-scroll'
    }, this.reverse === false ? content.concat(body) : body.concat(content));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/infinite-scroll/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js




/* harmony default export */ var QInnerLoading = (vue_runtime_esm["a" /* default */].extend({
  name: 'QInnerLoading',
  mixins: [transition],
  props: {
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: 42
    },
    dark: Boolean
  },
  render: function render(h) {
    var content = this.$scopedSlots.default !== void 0 ? this.$scopedSlots.default() : [h(QSpinner["a" /* default */], {
      props: {
        size: this.size,
        color: this.color
      }
    })];
    return h('transition', {
      props: {
        name: this.transition
      }
    }, [this.showing === true ? h('div', {
      staticClass: 'q-inner-loading absolute-full column flex-center',
      class: this.dark ? 'q-inner-loading--dark' : null,
      on: this.$listeners
    }, content) : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/inner-loading/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/input/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/knob/QKnob.js












function QKnob_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QKnob_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QKnob_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QKnob_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // PGDOWN, LEFT, DOWN, PGUP, RIGHT, UP

var QKnob_keyCodes = [34, 37, 40, 33, 39, 38];
/* harmony default export */ var QKnob = (vue_runtime_esm["a" /* default */].extend({
  name: 'QKnob',
  mixins: [{
    props: QCircularProgress.options.props
  }],
  directives: {
    TouchPan: TouchPan
  },
  props: {
    step: {
      type: Number,
      default: 1,
      validator: function validator(v) {
        return v >= 0;
      }
    },
    tabindex: {
      type: [Number, String],
      default: 0
    },
    disable: Boolean,
    readonly: Boolean
  },
  data: function data() {
    return {
      model: this.value,
      dragging: false
    };
  },
  watch: {
    value: function value(_value) {
      if (_value < this.min) {
        this.model = this.min;
      } else if (_value > this.max) {
        this.model = this.max;
      } else {
        if (_value !== this.model) {
          this.model = _value;
        }

        return;
      }

      if (this.model !== this.value) {
        this.$emit('input', this.model);
        this.$emit('change', this.model);
      }
    }
  },
  computed: {
    classes: function classes() {
      return {
        disabled: this.disable,
        'q-knob--editable': this.editable
      };
    },
    editable: function editable() {
      return !this.disable && !this.readonly;
    },
    decimals: function decimals() {
      return (String(this.step).trim('0').split('.')[1] || '').length;
    },
    computedStep: function computedStep() {
      return this.step === 0 ? 1 : this.step;
    }
  },
  methods: {
    __pan: function __pan(event) {
      if (event.isFinal) {
        this.__updatePosition(event.evt, true);

        this.dragging = false;
      } else if (event.isFirst) {
        var _this$$el$getBounding = this.$el.getBoundingClientRect(),
            top = _this$$el$getBounding.top,
            left = _this$$el$getBounding.left,
            width = _this$$el$getBounding.width,
            height = _this$$el$getBounding.height;

        this.centerPosition = {
          top: top + height / 2,
          left: left + width / 2
        };
        this.dragging = true;

        this.__updatePosition(event.evt);
      } else {
        this.__updatePosition(event.evt);
      }
    },
    __click: function __click(evt) {
      var _this$$el$getBounding2 = this.$el.getBoundingClientRect(),
          top = _this$$el$getBounding2.top,
          left = _this$$el$getBounding2.left,
          width = _this$$el$getBounding2.width,
          height = _this$$el$getBounding2.height;

      this.centerPosition = {
        top: top + height / 2,
        left: left + width / 2
      };

      this.__updatePosition(evt, true);
    },
    __keydown: function __keydown(evt) {
      if (!QKnob_keyCodes.includes(evt.keyCode)) {
        return;
      }

      Object(utils_event["j" /* stopAndPrevent */])(evt);
      var step = ([34, 33].includes(evt.keyCode) ? 10 : 1) * this.computedStep,
          offset = [34, 37, 40].includes(evt.keyCode) ? -step : step;
      this.model = between(parseFloat((this.model + offset).toFixed(this.decimals)), this.min, this.max);

      this.__updateValue();
    },
    __keyup: function __keyup(evt) {
      if (QKnob_keyCodes.includes(evt.keyCode)) {
        this.__updateValue(true);
      }
    },
    __updatePosition: function __updatePosition(evt, change) {
      var center = this.centerPosition,
          pos = Object(utils_event["f" /* position */])(evt),
          height = Math.abs(pos.top - center.top),
          distance = Math.sqrt(Math.pow(height, 2) + Math.pow(Math.abs(pos.left - center.left), 2));
      var angle = Math.asin(height / distance) * (180 / Math.PI);

      if (pos.top < center.top) {
        angle = center.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = center.left < pos.left ? angle + 90 : 270 - angle;
      }

      if (this.angle) {
        angle = normalizeToInterval(angle - this.angle, 0, 360);
      }

      if (this.$q.lang.rtl) {
        angle = 360 - angle;
      }

      var model = this.min + angle / 360 * (this.max - this.min);

      if (this.step !== 0) {
        var step = this.computedStep,
            modulo = model % step;
        model = model - modulo + (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0);
        model = parseFloat(model.toFixed(this.decimals));
      }

      model = between(model, this.min, this.max);
      this.$emit('drag-value', model);

      if (this.model !== model) {
        this.model = model;
      }

      this.__updateValue(change);
    },
    __updateValue: function __updateValue(change) {
      this.value !== this.model && this.$emit('input', this.model);
      change === true && this.$emit('change', this.model);
    }
  },
  render: function render(h) {
    var data = {
      staticClass: 'q-knob non-selectable',
      class: this.classes,
      props: QKnob_objectSpread({}, this.$props, {
        value: this.model,
        instantFeedback: this.dragging
      })
    };

    if (this.editable === true) {
      data.attrs = {
        tabindex: this.tabindex
      };
      data.on = {
        click: this.__click,
        keydown: this.__keydown,
        keyup: this.__keyup
      };
      data.directives = [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          prevent: true,
          stop: true,
          mouse: true
        }
      }];
    }

    return h(QCircularProgress, data, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/knob/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/observer/QScrollObserver.js




/* harmony default export */ var QScrollObserver = (vue_runtime_esm["a" /* default */].extend({
  name: 'QScrollObserver',
  props: {
    debounce: [String, Number],
    horizontal: Boolean
  },
  render: function render() {},
  // eslint-disable-line
  data: function data() {
    return {
      pos: 0,
      dir: this.horizontal === true ? 'right' : 'down',
      dirChanged: false,
      dirChangePos: 0
    };
  },
  methods: {
    getPosition: function getPosition() {
      return {
        position: this.pos,
        direction: this.dir,
        directionChanged: this.dirChanged,
        inflexionPosition: this.dirChangePos
      };
    },
    trigger: function trigger(immediately) {
      if (immediately === true || this.debounce === 0 || this.debounce === '0') {
        this.__emit();
      } else if (!this.timer) {
        this.timer = this.debounce ? setTimeout(this.__emit, this.debounce) : requestAnimationFrame(this.__emit);
      }
    },
    __emit: function __emit() {
      var pos = Math.max(0, this.horizontal === true ? getHorizontalScrollPosition(this.target) : getScrollPosition(this.target)),
          delta = pos - this.pos,
          dir = this.horizontal ? delta < 0 ? 'left' : 'right' : delta < 0 ? 'up' : 'down';
      this.dirChanged = this.dir !== dir;

      if (this.dirChanged) {
        this.dir = dir;
        this.dirChangePos = this.pos;
      }

      this.timer = null;
      this.pos = pos;
      this.$emit('scroll', this.getPosition());
    }
  },
  mounted: function mounted() {
    this.target = getScrollTarget(this.$el.parentNode);
    this.target.addEventListener('scroll', this.trigger, utils_event["e" /* listenOpts */].passive);
    this.trigger(true);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.timer);
    this.target !== void 0 && this.target.removeEventListener('scroll', this.trigger, utils_event["e" /* listenOpts */].passive);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QLayout.js








/* harmony default export */ var QLayout = (vue_runtime_esm["a" /* default */].extend({
  name: 'QLayout',
  provide: function provide() {
    return {
      layout: this
    };
  },
  props: {
    container: Boolean,
    view: {
      type: String,
      default: 'hhh lpr fff',
      validator: function validator(v) {
        return /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase());
      }
    }
  },
  data: function data() {
    return {
      // page related
      height: this.$q.screen.height,
      width: this.container === true ? 0 : this.$q.screen.width,
      // container only prop
      containerHeight: 0,
      scrollbarWidth: Platform["e" /* onSSR */] === true ? 0 : getScrollbarWidth(),
      header: {
        size: 0,
        offset: 0,
        space: false
      },
      right: {
        size: 300,
        offset: 0,
        space: false
      },
      footer: {
        size: 0,
        offset: 0,
        space: false
      },
      left: {
        size: 300,
        offset: 0,
        space: false
      },
      scroll: {
        position: 0,
        direction: 'down'
      }
    };
  },
  computed: {
    rows: function rows() {
      var rows = this.view.toLowerCase().split(' ');
      return {
        top: rows[0].split(''),
        middle: rows[1].split(''),
        bottom: rows[2].split('')
      };
    },
    style: function style() {
      return this.container === true ? null : {
        minHeight: this.$q.screen.height + 'px'
      };
    },
    // used by container only
    targetStyle: function targetStyle() {
      if (this.scrollbarWidth !== 0) {
        return defineProperty_default()({}, this.$q.lang.rtl === true ? 'left' : 'right', "".concat(this.scrollbarWidth, "px"));
      }
    },
    targetChildStyle: function targetChildStyle() {
      if (this.scrollbarWidth !== 0) {
        var _ref2;

        return _ref2 = {}, defineProperty_default()(_ref2, this.$q.lang.rtl === true ? 'right' : 'left', 0), defineProperty_default()(_ref2, this.$q.lang.rtl === true ? 'left' : 'right', "-".concat(this.scrollbarWidth, "px")), defineProperty_default()(_ref2, "width", "calc(100% + ".concat(this.scrollbarWidth, "px)")), _ref2;
      }
    }
  },
  created: function created() {
    this.instances = {};
  },
  render: function render(h) {
    var layout = h('div', {
      staticClass: 'q-layout q-layout--' + (this.container === true ? 'containerized' : 'standard'),
      style: this.style
    }, [h(QScrollObserver, {
      on: {
        scroll: this.__onPageScroll
      }
    }), h(QResizeObserver, {
      on: {
        resize: this.__onPageResize
      }
    })].concat(Object(utils_slot["a" /* default */])(this, 'default')));
    return this.container === true ? h('div', {
      staticClass: 'q-layout-container overflow-hidden'
    }, [h(QResizeObserver, {
      on: {
        resize: this.__onContainerResize
      }
    }), h('div', {
      staticClass: 'absolute-full',
      style: this.targetStyle
    }, [h('div', {
      staticClass: 'scroll',
      style: this.targetChildStyle
    }, [layout])])]) : layout;
  },
  methods: {
    __animate: function __animate() {
      var _this = this;

      if (this.timer !== void 0) {
        clearTimeout(this.timer);
      } else {
        document.body.classList.add('q-body--layout-animate');
      }

      this.timer = setTimeout(function () {
        document.body.classList.remove('q-body--layout-animate');
        _this.timer = void 0;
      }, 150);
    },
    __onPageScroll: function __onPageScroll(data) {
      this.scroll = data;
      this.$listeners.scroll !== void 0 && this.$emit('scroll', data);
    },
    __onPageResize: function __onPageResize(_ref3) {
      var height = _ref3.height,
          width = _ref3.width;
      var resized = false;

      if (this.height !== height) {
        resized = true;
        this.height = height;

        if (this.$listeners['scroll-height'] !== void 0) {
          this.$emit('scroll-height', height);
        }

        this.__updateScrollbarWidth();
      }

      if (this.width !== width) {
        resized = true;
        this.width = width;
      }

      if (resized === true && this.$listeners.resize !== void 0) {
        this.$emit('resize', {
          height: height,
          width: width
        });
      }
    },
    __onContainerResize: function __onContainerResize(_ref4) {
      var height = _ref4.height;

      if (this.containerHeight !== height) {
        this.containerHeight = height;

        this.__updateScrollbarWidth();
      }
    },
    __updateScrollbarWidth: function __updateScrollbarWidth() {
      if (this.container === true) {
        var width = this.height > this.containerHeight ? getScrollbarWidth() : 0;

        if (this.scrollbarWidth !== width) {
          this.scrollbarWidth = width;
        }
      }
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QDrawer.js













function QDrawer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QDrawer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QDrawer_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QDrawer_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var QDrawer_duration = 150;
var directiveTemplate = {
  name: 'touch-pan',
  modifiers: {
    horizontal: true,
    mouse: true,
    mouseAllDir: true
  }
};
/* harmony default export */ var QDrawer = (vue_runtime_esm["a" /* default */].extend({
  name: 'QDrawer',
  inject: {
    layout: {
      default: function _default() {
        console.error('QDrawer needs to be child of QLayout');
      }
    }
  },
  mixins: [mixins_history, model_toggle, prevent_scroll],
  directives: {
    TouchPan: TouchPan
  },
  props: {
    side: {
      type: String,
      default: 'left',
      validator: function validator(v) {
        return ['left', 'right'].includes(v);
      }
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: function validator(v) {
        return ['default', 'desktop', 'mobile'].includes(v);
      },
      default: 'default'
    },
    bordered: Boolean,
    elevated: Boolean,
    contentStyle: [String, Object, Array],
    contentClass: [String, Object, Array],
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  data: function data() {
    var belowBreakpoint = this.behavior === 'mobile' || this.behavior !== 'desktop' && this.layout.width <= this.breakpoint;
    return {
      belowBreakpoint: belowBreakpoint,
      showing: this.showIfAbove === true && belowBreakpoint === false ? true : this.value === true
    };
  },
  watch: {
    belowBreakpoint: function belowBreakpoint(val) {
      if (val === true) {
        // from lg to xs
        this.lastDesktopState = this.showing;
        this.showing === true && this.hide(false);
      } else if (this.overlay === false && this.behavior !== 'mobile' && this.lastDesktopState !== false) {
        // from xs to lg
        if (this.showing === true) {
          this.__applyBackdrop(0);

          this.__cleanup();
        } else {
          this.show(false);
        }
      }
    },
    'layout.width': function layoutWidth(val) {
      this.__updateLocal('belowBreakpoint', this.behavior === 'mobile' || this.behavior !== 'desktop' && val <= this.breakpoint);
    },
    side: function side(_, oldSide) {
      this.layout[oldSide].space = false;
      this.layout[oldSide].offset = 0;
    },
    behavior: function behavior(val) {
      this.__updateLocal('belowBreakpoint', val === 'mobile' || val !== 'desktop' && this.layout.width <= this.breakpoint);
    },
    breakpoint: function breakpoint(val) {
      this.__updateLocal('belowBreakpoint', this.behavior === 'mobile' || this.behavior !== 'desktop' && this.layout.width <= val);
    },
    'layout.container': function layoutContainer(val) {
      this.showing === true && this.__preventScroll(val !== true);
    },
    'layout.scrollbarWidth': function layoutScrollbarWidth() {
      this.__applyPosition(this.showing === true ? 0 : void 0);
    },
    offset: function offset(val) {
      this.__update('offset', val);
    },
    onLayout: function onLayout(val) {
      this.$emit('on-layout', val);

      this.__update('space', val);
    },
    rightSide: function rightSide() {
      this.__applyPosition();
    },
    size: function size(val) {
      this.__applyPosition();

      this.__updateSizeOnLayout(this.miniToOverlay, val);
    },
    miniToOverlay: function miniToOverlay(val) {
      this.__updateSizeOnLayout(val, this.size);
    },
    '$q.lang.rtl': function $qLangRtl() {
      this.__applyPosition();
    },
    mini: function mini() {
      if (this.value === true) {
        this.__animateMini();

        this.layout.__animate();
      }
    },
    isMini: function isMini(val) {
      this.$emit('mini-state', val);
    }
  },
  computed: {
    rightSide: function rightSide() {
      return this.side === 'right';
    },
    offset: function offset() {
      return this.showing === true && this.belowBreakpoint === false && this.overlay === false ? this.miniToOverlay === true ? this.miniWidth : this.size : 0;
    },
    size: function size() {
      return this.isMini === true ? this.miniWidth : this.width;
    },
    fixed: function fixed() {
      return this.overlay === true || this.miniToOverlay === true || this.layout.view.indexOf(this.rightSide ? 'R' : 'L') > -1 || this.$q.platform.is.ios && this.layout.container === true;
    },
    onLayout: function onLayout() {
      return this.showing === true && this.belowBreakpoint === false && this.overlay === false;
    },
    onScreenOverlay: function onScreenOverlay() {
      return this.showing === true && this.belowBreakpoint === false && this.overlay === true;
    },
    backdropClass: function backdropClass() {
      return this.showing === false ? 'no-pointer-events' : null;
    },
    headerSlot: function headerSlot() {
      return this.rightSide === true ? this.layout.rows.top[2] === 'r' : this.layout.rows.top[0] === 'l';
    },
    footerSlot: function footerSlot() {
      return this.rightSide === true ? this.layout.rows.bottom[2] === 'r' : this.layout.rows.bottom[0] === 'l';
    },
    aboveStyle: function aboveStyle() {
      var css = {};

      if (this.layout.header.space === true && this.headerSlot === false) {
        if (this.fixed === true) {
          css.top = "".concat(this.layout.header.offset, "px");
        } else if (this.layout.header.space === true) {
          css.top = "".concat(this.layout.header.size, "px");
        }
      }

      if (this.layout.footer.space === true && this.footerSlot === false) {
        if (this.fixed === true) {
          css.bottom = "".concat(this.layout.footer.offset, "px");
        } else if (this.layout.footer.space === true) {
          css.bottom = "".concat(this.layout.footer.size, "px");
        }
      }

      return css;
    },
    style: function style() {
      var style = {
        width: "".concat(this.size, "px")
      };
      return this.belowBreakpoint === true ? style : Object.assign(style, this.aboveStyle);
    },
    classes: function classes() {
      return "q-drawer--".concat(this.side) + (this.bordered === true ? ' q-drawer--bordered' : '') + (this.belowBreakpoint === true ? ' fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding' : " q-drawer--".concat(this.isMini === true ? 'mini' : 'standard') + (this.fixed === true || this.onLayout !== true ? ' fixed' : '') + (this.overlay === true || this.miniToOverlay === true ? ' q-drawer--on-top' : '') + (this.headerSlot === true ? ' q-drawer--top-padding' : ''));
    },
    stateDirection: function stateDirection() {
      return (this.$q.lang.rtl === true ? -1 : 1) * (this.rightSide === true ? 1 : -1);
    },
    isMini: function isMini() {
      return this.mini === true && this.belowBreakpoint !== true;
    },
    onNativeEvents: function onNativeEvents() {
      var _this = this;

      if (this.belowBreakpoint !== true) {
        return {
          '!click': function click(e) {
            _this.$emit('click', e);
          },
          mouseover: function mouseover(e) {
            _this.$emit('mouseover', e);
          },
          mouseout: function mouseout(e) {
            _this.$emit('mouseout', e);
          },
          mouseenter: function mouseenter(e) {
            _this.$emit('mouseenter', e);
          },
          mouseleave: function mouseleave(e) {
            _this.$emit('mouseleave', e);
          }
        };
      }
    },
    hideOnRouteChange: function hideOnRouteChange() {
      return this.persistent !== true && (this.belowBreakpoint === true || this.onScreenOverlay === true);
    },
    openDirective: function openDirective() {
      if (this.belowBreakpoint === true) {
        return [QDrawer_objectSpread({}, directiveTemplate, {
          value: this.__openByTouch
        })];
      }
    },
    closeDirective: function closeDirective() {
      if (this.belowBreakpoint === true) {
        return [QDrawer_objectSpread({}, directiveTemplate, {
          value: this.__closeByTouch
        })];
      }
    }
  },
  methods: {
    __applyPosition: function __applyPosition(position) {
      var _this2 = this;

      if (position === void 0) {
        this.$nextTick(function () {
          position = _this2.showing === true ? 0 : _this2.size;

          _this2.__applyPosition(_this2.stateDirection * position);
        });
      } else if (this.$refs.content !== void 0) {
        if (this.layout.container === true && this.rightSide === true && (this.belowBreakpoint === true || Math.abs(position) === this.size)) {
          position += this.stateDirection * this.layout.scrollbarWidth;
        }

        this.$refs.content.style.transform = "translateX(".concat(position, "px)");
      }
    },
    __applyBackdrop: function __applyBackdrop(x) {
      if (this.$refs.backdrop !== void 0) {
        this.$refs.backdrop.style.backgroundColor = this.lastBackdropBg = "rgba(0,0,0,".concat(x * 0.4, ")");
      }
    },
    __setScrollable: function __setScrollable(v) {
      var action = v === true ? 'remove' : this.layout.container !== true ? 'add' : '';
      action !== '' && document.body.classList[action]('q-body--drawer-toggle');
    },
    __animateMini: function __animateMini() {
      var _this3 = this;

      if (this.timerMini !== void 0) {
        clearTimeout(this.timerMini);
      } else if (this.$el !== void 0) {
        this.$el.classList.add('q-drawer--mini-animate');
      }

      this.timerMini = setTimeout(function () {
        _this3.$el !== void 0 && _this3.$el.classList.remove('q-drawer--mini-animate');
        _this3.timerMini = void 0;
      }, 150);
    },
    __openByTouch: function __openByTouch(evt) {
      if (this.showing !== false) {
        // some browsers might capture and trigger this
        // even if Drawer has just been opened (but animation is still pending)
        return;
      }

      var width = this.size,
          position = between(evt.distance.x, 0, width);

      if (evt.isFinal === true) {
        var el = this.$refs.content,
            opened = position >= Math.min(75, width);
        el.classList.remove('no-transition');

        if (opened === true) {
          this.show();
        } else {
          this.layout.__animate();

          this.__applyBackdrop(0);

          this.__applyPosition(this.stateDirection * width);

          el.classList.remove('q-drawer--delimiter');
        }

        return;
      }

      this.__applyPosition((this.$q.lang.rtl === true ? !this.rightSide : this.rightSide) ? Math.max(width - position, 0) : Math.min(0, position - width));

      this.__applyBackdrop(between(position / width, 0, 1));

      if (evt.isFirst === true) {
        var _el = this.$refs.content;

        _el.classList.add('no-transition');

        _el.classList.add('q-drawer--delimiter');
      }
    },
    __closeByTouch: function __closeByTouch(evt) {
      if (this.showing !== true) {
        // some browsers might capture and trigger this
        // even if Drawer has just been closed (but animation is still pending)
        return;
      }

      var width = this.size,
          dir = evt.direction === this.side,
          position = (this.$q.lang.rtl === true ? !dir : dir) ? between(evt.distance.x, 0, width) : 0;

      if (evt.isFinal === true) {
        var opened = Math.abs(position) < Math.min(75, width);
        this.$refs.content.classList.remove('no-transition');

        if (opened === true) {
          this.layout.__animate();

          this.__applyBackdrop(1);

          this.__applyPosition(0);
        } else {
          this.hide();
        }

        return;
      }

      this.__applyPosition(this.stateDirection * position);

      this.__applyBackdrop(between(1 - position / width, 0, 1));

      if (evt.isFirst === true) {
        this.$refs.content.classList.add('no-transition');
      }
    },
    __show: function __show(evt, noEvent) {
      var _this4 = this;

      this.__addHistory();

      evt !== false && this.layout.__animate();

      this.__applyPosition(0);

      if (this.belowBreakpoint === true) {
        var otherSide = this.layout.instances[this.rightSide === true ? 'left' : 'right'];

        if (otherSide !== void 0 && otherSide.belowBreakpoint === true) {
          otherSide.hide(false);
        }

        this.__applyBackdrop(1);

        this.layout.container !== true && this.__preventScroll(true);
      } else {
        this.__applyBackdrop(0);

        evt !== false && this.__setScrollable(false);
      }

      this.__setTimeout(function () {
        evt !== false && _this4.__setScrollable(true);
        noEvent !== true && _this4.$emit('show', evt);
      }, QDrawer_duration);
    },
    __hide: function __hide(evt, noEvent) {
      var _this5 = this;

      this.__removeHistory();

      evt !== false && this.layout.__animate();

      this.__applyBackdrop(0);

      this.__applyPosition(this.stateDirection * this.size);

      this.__cleanup();

      noEvent !== true && this.__setTimeout(function () {
        _this5.$emit('hide', evt);
      }, QDrawer_duration);
    },
    __cleanup: function __cleanup() {
      this.__preventScroll(false);

      this.__setScrollable(true);
    },
    __update: function __update(prop, val) {
      if (this.layout[this.side][prop] !== val) {
        this.layout[this.side][prop] = val;
      }
    },
    __updateLocal: function __updateLocal(prop, val) {
      if (this[prop] !== val) {
        this[prop] = val;
      }
    },
    __updateSizeOnLayout: function __updateSizeOnLayout(miniToOverlay, size) {
      this.__update('size', miniToOverlay === true ? this.miniWidth : size);
    }
  },
  created: function created() {
    this.layout.instances[this.side] = this;

    this.__updateSizeOnLayout(this.miniToOverlay, this.size);

    this.__update('space', this.onLayout);

    this.__update('offset', this.offset);

    if (this.showIfAbove === true && this.value !== true && this.showing === true && this.$listeners.input !== void 0) {
      this.$emit('input', true);
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.$emit('on-layout', this.onLayout);
    this.$emit('mini-state', this.isMini);

    var fn = function fn() {
      var action = _this6.showing === true ? 'show' : 'hide';

      _this6["__".concat(action)](false, true);
    };

    if (this.layout.width !== 0) {
      fn();
      return;
    }

    this.watcher = this.$watch('layout.width', function () {
      _this6.watcher();

      _this6.watcher = void 0;

      if (_this6.showing === false && _this6.showIfAbove === true && _this6.belowBreakpoint === false) {
        _this6.show(false);
      } else {
        fn();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.watcher !== void 0 && this.watcher();
    clearTimeout(this.timerMini);
    this.showing === true && this.__cleanup();

    if (this.layout.instances[this.side] === this) {
      this.layout.instances[this.side] = void 0;

      this.__update('size', 0);

      this.__update('offset', 0);

      this.__update('space', false);
    }
  },
  render: function render(h) {
    var child = [this.noSwipeOpen !== true && this.belowBreakpoint === true ? h('div', {
      staticClass: "q-drawer__opener fixed-".concat(this.side),
      directives: this.openDirective
    }) : null, this.belowBreakpoint === true ? h('div', {
      ref: 'backdrop',
      staticClass: 'fullscreen q-drawer__backdrop',
      class: this.backdropClass,
      style: this.lastBackdropBg !== void 0 ? {
        backgroundColor: this.lastBackdropBg
      } : null,
      on: {
        click: this.hide
      },
      directives: this.noSwipeBackdrop !== true ? this.closeDirective : void 0
    }) : null];
    var content = [h('div', {
      staticClass: 'q-drawer__content fit ' + (this.layout.container === true ? 'overflow-auto' : 'scroll'),
      class: this.contentClass,
      style: this.contentStyle
    }, this.isMini === true && this.$scopedSlots.mini !== void 0 ? this.$scopedSlots.mini() : Object(utils_slot["a" /* default */])(this, 'default'))];

    if (this.elevated === true && this.showing === true) {
      content.push(h('div', {
        staticClass: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
      }));
    }

    return h('div', {
      staticClass: 'q-drawer-container'
    }, child.concat([h('aside', {
      ref: 'content',
      staticClass: "q-drawer",
      class: this.classes,
      style: this.style,
      on: this.onNativeEvents,
      directives: this.noSwipeClose !== true ? this.closeDirective : void 0
    }, content)]));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QFooter.js










function QFooter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QFooter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QFooter_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QFooter_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var QFooter = (vue_runtime_esm["a" /* default */].extend({
  name: 'QFooter',
  inject: {
    layout: {
      default: function _default() {
        console.error('QFooter needs to be child of QLayout');
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  data: function data() {
    return {
      size: parseInt(this.heightHint, 10),
      revealed: true,
      windowHeight: Platform["e" /* onSSR */] || this.layout.container ? 0 : window.innerHeight
    };
  },
  watch: {
    value: function value(val) {
      this.__update('space', val);

      this.__updateLocal('revealed', true);

      this.layout.__animate();
    },
    offset: function offset(val) {
      this.__update('offset', val);
    },
    reveal: function reveal(val) {
      val === false && this.__updateLocal('revealed', this.value);
    },
    revealed: function revealed(val) {
      this.layout.__animate();

      this.$emit('reveal', val);
    },
    'layout.scroll': function layoutScroll() {
      this.__updateRevealed();
    },
    'layout.height': function layoutHeight() {
      this.__updateRevealed();
    },
    size: function size() {
      this.__updateRevealed();
    },
    '$q.screen.height': function $qScreenHeight(val) {
      this.layout.container !== true && this.__updateLocal('windowHeight', val);
    }
  },
  computed: {
    fixed: function fixed() {
      return this.reveal === true || this.layout.view.indexOf('F') > -1 || this.layout.container === true;
    },
    containerHeight: function containerHeight() {
      return this.layout.container === true ? this.layout.containerHeight : this.windowHeight;
    },
    offset: function offset() {
      if (this.value !== true) {
        return 0;
      }

      if (this.fixed === true) {
        return this.revealed === true ? this.size : 0;
      }

      var offset = this.layout.scroll.position + this.containerHeight + this.size - this.layout.height;
      return offset > 0 ? offset : 0;
    },
    classes: function classes() {
      return (this.fixed === true ? 'fixed' : 'absolute') + '-bottom' + (this.value === true || this.fixed === true ? '' : ' hidden') + (this.bordered === true ? ' q-footer--bordered' : '') + (this.value !== true || this.fixed === true && this.revealed !== true ? ' q-footer--hidden' : '');
    },
    style: function style() {
      var view = this.layout.rows.bottom,
          css = {};

      if (view[0] === 'l' && this.layout.left.space === true) {
        css[this.$q.lang.rtl ? 'right' : 'left'] = "".concat(this.layout.left.size, "px");
      }

      if (view[2] === 'r' && this.layout.right.space === true) {
        css[this.$q.lang.rtl ? 'left' : 'right'] = "".concat(this.layout.right.size, "px");
      }

      return css;
    }
  },
  render: function render(h) {
    var child = [h(QResizeObserver, {
      props: {
        debounce: 0
      },
      on: {
        resize: this.__onResize
      }
    })];
    this.elevated === true && child.push(h('div', {
      staticClass: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
    }));
    return h('footer', {
      staticClass: 'q-footer q-layout__section--marginal',
      class: this.classes,
      style: this.style,
      on: QFooter_objectSpread({}, this.$listeners, {
        input: utils_event["i" /* stop */]
      })
    }, child.concat(Object(utils_slot["a" /* default */])(this, 'default')));
  },
  created: function created() {
    this.layout.instances.footer = this;
    this.value === true && this.__update('size', this.size);

    this.__update('space', this.value);

    this.__update('offset', this.offset);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.layout.instances.footer === this) {
      this.layout.instances.footer = void 0;

      this.__update('size', 0);

      this.__update('offset', 0);

      this.__update('space', false);
    }
  },
  methods: {
    __onResize: function __onResize(_ref) {
      var height = _ref.height;

      this.__updateLocal('size', height);

      this.__update('size', height);
    },
    __update: function __update(prop, val) {
      if (this.layout.footer[prop] !== val) {
        this.layout.footer[prop] = val;
      }
    },
    __updateLocal: function __updateLocal(prop, val) {
      if (this[prop] !== val) {
        this[prop] = val;
      }
    },
    __updateRevealed: function __updateRevealed() {
      if (this.reveal !== true) {
        return;
      }

      var _this$layout$scroll = this.layout.scroll,
          direction = _this$layout$scroll.direction,
          position = _this$layout$scroll.position,
          inflexionPosition = _this$layout$scroll.inflexionPosition;

      this.__updateLocal('revealed', direction === 'up' || position - inflexionPosition < 100 || this.layout.height - this.containerHeight - position - this.size < 300);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QHeader.js










function QHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QHeader_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QHeader_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var QHeader = (vue_runtime_esm["a" /* default */].extend({
  name: 'QHeader',
  inject: {
    layout: {
      default: function _default() {
        console.error('QHeader needs to be child of QLayout');
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  data: function data() {
    return {
      size: parseInt(this.heightHint, 10),
      revealed: true
    };
  },
  watch: {
    value: function value(val) {
      this.__update('space', val);

      this.__updateLocal('revealed', true);

      this.layout.__animate();
    },
    offset: function offset(val) {
      this.__update('offset', val);
    },
    reveal: function reveal(val) {
      val === false && this.__updateLocal('revealed', this.value);
    },
    revealed: function revealed(val) {
      this.layout.__animate();

      this.$emit('reveal', val);
    },
    'layout.scroll': function layoutScroll(scroll) {
      this.reveal === true && this.__updateLocal('revealed', scroll.direction === 'up' || scroll.position <= this.revealOffset || scroll.position - scroll.inflexionPosition < 100);
    }
  },
  computed: {
    fixed: function fixed() {
      return this.reveal === true || this.layout.view.indexOf('H') > -1 || this.layout.container === true;
    },
    offset: function offset() {
      if (this.value !== true) {
        return 0;
      }

      if (this.fixed === true) {
        return this.revealed === true ? this.size : 0;
      }

      var offset = this.size - this.layout.scroll.position;
      return offset > 0 ? offset : 0;
    },
    classes: function classes() {
      return (this.fixed === true ? 'fixed' : 'absolute') + '-top' + (this.bordered === true ? ' q-header--bordered' : '') + (this.value !== true || this.fixed === true && this.revealed !== true ? ' q-header--hidden' : '');
    },
    style: function style() {
      var view = this.layout.rows.top,
          css = {};

      if (view[0] === 'l' && this.layout.left.space === true) {
        css[this.$q.lang.rtl ? 'right' : 'left'] = "".concat(this.layout.left.size, "px");
      }

      if (view[2] === 'r' && this.layout.right.space === true) {
        css[this.$q.lang.rtl ? 'left' : 'right'] = "".concat(this.layout.right.size, "px");
      }

      return css;
    }
  },
  render: function render(h) {
    var child = [h(QResizeObserver, {
      props: {
        debounce: 0
      },
      on: {
        resize: this.__onResize
      }
    })].concat(Object(utils_slot["a" /* default */])(this, 'default'));
    this.elevated === true && child.push(h('div', {
      staticClass: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
    }));
    return h('header', {
      staticClass: 'q-header q-layout__section--marginal',
      class: this.classes,
      style: this.style,
      on: QHeader_objectSpread({}, this.$listeners, {
        input: utils_event["i" /* stop */]
      })
    }, child);
  },
  created: function created() {
    this.layout.instances.header = this;
    this.value === true && this.__update('size', this.size);

    this.__update('space', this.value);

    this.__update('offset', this.offset);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.layout.instances.header === this) {
      this.layout.instances.header = void 0;

      this.__update('size', 0);

      this.__update('offset', 0);

      this.__update('space', false);
    }
  },
  methods: {
    __onResize: function __onResize(_ref) {
      var height = _ref.height;

      this.__updateLocal('size', height);

      this.__update('size', height);
    },
    __update: function __update(prop, val) {
      if (this.layout.header[prop] !== val) {
        this.layout.header[prop] = val;
      }
    },
    __updateLocal: function __updateLocal(prop, val) {
      if (this[prop] !== val) {
        this[prop] = val;
      }
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QPage.js


/* harmony default export */ var QPage = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPage',
  inject: {
    pageContainer: {
      default: function _default() {
        console.error('QPage needs to be child of QPageContainer');
      }
    },
    layout: {}
  },
  props: {
    padding: Boolean,
    styleFn: Function
  },
  computed: {
    style: function style() {
      var offset = (this.layout.header.space === true ? this.layout.header.size : 0) + (this.layout.footer.space === true ? this.layout.footer.size : 0);

      if (typeof this.styleFn === 'function') {
        return this.styleFn(offset);
      }

      return {
        minHeight: this.layout.container === true ? this.layout.containerHeight - offset + 'px' : this.$q.screen.height === 0 ? "calc(100vh - ".concat(offset, "px)") : this.$q.screen.height - offset + 'px'
      };
    },
    classes: function classes() {
      if (this.padding === true) {
        return 'q-layout-padding';
      }
    }
  },
  render: function render(h) {
    return h('main', {
      staticClass: 'q-page',
      style: this.style,
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QPageContainer.js


/* harmony default export */ var QPageContainer = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPageContainer',
  inject: {
    layout: {
      default: function _default() {
        console.error('QPageContainer needs to be child of QLayout');
      }
    }
  },
  provide: {
    pageContainer: true
  },
  computed: {
    style: function style() {
      var css = {};

      if (this.layout.header.space === true) {
        css.paddingTop = "".concat(this.layout.header.size, "px");
      }

      if (this.layout.right.space === true) {
        css["padding".concat(this.$q.lang.rtl === true ? 'Left' : 'Right')] = "".concat(this.layout.right.size, "px");
      }

      if (this.layout.footer.space === true) {
        css.paddingBottom = "".concat(this.layout.footer.size, "px");
      }

      if (this.layout.left.space === true) {
        css["padding".concat(this.$q.lang.rtl === true ? 'Right' : 'Left')] = "".concat(this.layout.left.size, "px");
      }

      return css;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-page-container',
      style: this.style,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/QPageSticky.js




/* harmony default export */ var QPageSticky = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPageSticky',
  inject: {
    layout: {
      default: function _default() {
        console.error('QPageSticky needs to be child of QLayout');
      }
    }
  },
  props: {
    position: {
      type: String,
      default: 'bottom-right',
      validator: function validator(v) {
        return ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v);
      }
    },
    offset: {
      type: Array,
      validator: function validator(v) {
        return v.length === 2;
      }
    },
    expand: Boolean
  },
  computed: {
    attach: function attach() {
      var pos = this.position;
      return {
        top: pos.indexOf('top') > -1,
        right: pos.indexOf('right') > -1,
        bottom: pos.indexOf('bottom') > -1,
        left: pos.indexOf('left') > -1,
        vertical: pos === 'top' || pos === 'bottom',
        horizontal: pos === 'left' || pos === 'right'
      };
    },
    top: function top() {
      return this.layout.header.offset;
    },
    right: function right() {
      return this.layout.right.offset;
    },
    bottom: function bottom() {
      return this.layout.footer.offset;
    },
    left: function left() {
      return this.layout.left.offset;
    },
    style: function style() {
      var posX = 0,
          posY = 0;
      var attach = this.attach,
          dir = this.$q.lang.rtl === true ? -1 : 1;

      if (attach.top === true && this.top !== 0) {
        posY = "".concat(this.top, "px");
      } else if (attach.bottom === true && this.bottom !== 0) {
        posY = "".concat(-this.bottom, "px");
      }

      if (attach.left === true && this.left !== 0) {
        posX = "".concat(dir * this.left, "px");
      } else if (attach.right === true && this.right !== 0) {
        posX = "".concat(-dir * this.right, "px");
      }

      var css = {
        transform: "translate(".concat(posX, ", ").concat(posY, ")")
      };

      if (this.offset) {
        css.margin = "".concat(this.offset[1], "px ").concat(this.offset[0], "px");
      }

      if (attach.vertical === true) {
        if (this.left !== 0) {
          css[this.$q.lang.rtl === true ? 'right' : 'left'] = "".concat(this.left, "px");
        }

        if (this.right !== 0) {
          css[this.$q.lang.rtl === true ? 'left' : 'right'] = "".concat(this.right, "px");
        }
      } else if (attach.horizontal === true) {
        if (this.top !== 0) {
          css.top = "".concat(this.top, "px");
        }

        if (this.bottom !== 0) {
          css.bottom = "".concat(this.bottom, "px");
        }
      }

      return css;
    },
    classes: function classes() {
      return "fixed-".concat(this.position, " q-page-sticky--").concat(this.expand === true ? 'expand' : 'shrink');
    }
  },
  render: function render(h) {
    var content = Object(utils_slot["a" /* default */])(this, 'default');
    return h('div', {
      staticClass: 'q-page-sticky row flex-center',
      class: this.classes,
      style: this.style
    }, this.expand === true ? content : [h('div', content)]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/layout/index.js








// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QItemLabel.js



/* harmony default export */ var QItemLabel = (vue_runtime_esm["a" /* default */].extend({
  name: 'QItemLabel',
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  computed: {
    classes: function classes() {
      return {
        'q-item__label--overline text-overline': this.overline,
        'q-item__label--caption text-caption': this.caption,
        'q-item__label--header': this.header,
        'ellipsis': parseInt(this.lines, 10) === 1
      };
    },
    style: function style() {
      if (this.lines !== void 0 && parseInt(this.lines, 10) > 1) {
        return {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': this.lines
        };
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-item__label',
      style: this.style,
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js



/* harmony default export */ var QSlideTransition = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSlideTransition',
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  methods: {
    __begin: function __begin(el, height, done) {
      el.style.overflowY = 'hidden';

      if (height !== void 0) {
        el.style.height = "".concat(height, "px");
      }

      el.style.transition = "height ".concat(this.duration, "ms cubic-bezier(.25, .8, .50, 1)");
      this.animating = true;
      this.done = done;
    },
    __end: function __end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;

      this.__cleanup();

      event !== this.lastEvent && this.$emit(event);
    },
    __cleanup: function __cleanup() {
      this.done && this.done();
      this.done = null;
      this.animating = false;
      clearTimeout(this.timer);
      clearTimeout(this.timerFallback);
      this.el !== void 0 && this.el.removeEventListener('transitionend', this.animListener);
      this.animListener = null;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.animating && this.__cleanup();
  },
  render: function render(h) {
    var _this = this;

    return h('transition', {
      props: {
        css: false,
        appear: this.appear
      },
      on: {
        enter: function enter(el, done) {
          var pos = 0;
          _this.el = el;

          if (_this.animating === true) {
            _this.__cleanup();

            pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
          } else {
            _this.lastEvent = 'hide';
          }

          _this.__begin(el, pos, done);

          _this.timer = setTimeout(function () {
            el.style.height = "".concat(el.scrollHeight, "px");

            _this.animListener = function (ev) {
              if (Object(ev) !== ev || ev.target === el) {
                _this.__end(el, 'show');
              }
            };

            el.addEventListener('transitionend', _this.animListener);
            _this.timerFallback = setTimeout(_this.animListener, _this.duration * 1.1);
          }, 100);
        },
        leave: function leave(el, done) {
          var pos;
          _this.el = el;

          if (_this.animating === true) {
            _this.__cleanup();
          } else {
            _this.lastEvent = 'show';
            pos = el.scrollHeight;
          }

          _this.__begin(el, pos, done);

          _this.timer = setTimeout(function () {
            el.style.height = 0;

            _this.animListener = function (ev) {
              if (Object(ev) !== ev || ev.target === el) {
                _this.__end(el, 'hide');
              }
            };

            el.addEventListener('transitionend', _this.animListener);
            _this.timerFallback = setTimeout(_this.animListener, _this.duration * 1.1);
          }, 100);
        }
      }
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js


/* harmony default export */ var QSeparator = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSeparator',
  props: {
    dark: Boolean,
    spaced: Boolean,
    inset: [Boolean, String],
    vertical: Boolean,
    color: String
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, "bg-".concat(this.color), this.color), defineProperty_default()(_ref, 'q-separator--dark', this.dark), defineProperty_default()(_ref, 'q-separator--spaced', this.spaced), defineProperty_default()(_ref, 'q-separator--inset', this.inset === true), defineProperty_default()(_ref, 'q-separator--item-inset', this.inset === 'item'), defineProperty_default()(_ref, 'q-separator--item-thumbnail-inset', this.inset === 'item-thumbnail'), defineProperty_default()(_ref, "q-separator--".concat(this.vertical ? 'vertical self-stretch' : 'horizontal col-grow'), true), _ref;
    }
  },
  render: function render(h) {
    return h('hr', {
      staticClass: 'q-separator',
      class: this.classes
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QExpansionItem.js










function QExpansionItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QExpansionItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QExpansionItem_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QExpansionItem_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var eventName = 'q:expansion-item:close';
/* harmony default export */ var QExpansionItem = (vue_runtime_esm["a" /* default */].extend({
  name: 'QExpansionItem',
  mixins: [RouterLinkMixin, model_toggle],
  props: {
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dark: Boolean,
    dense: Boolean,
    expandIcon: String,
    expandIconClass: String,
    duration: Number,
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  data: function data() {
    return {
      showing: this.value !== void 0 ? this.value : this.defaultOpened
    };
  },
  watch: {
    showing: function showing(val) {
      val === true && this.group !== void 0 && this.$root.$emit(eventName, this);
    },
    group: function group(newVal, oldVal) {
      if (newVal !== void 0 && oldVal === void 0) {
        this.$root.$on(eventName, this.__eventHandler);
      } else if (newVal === void 0 && oldVal !== void 0) {
        this.$root.$off(eventName, this.__eventHandler);
      }
    }
  },
  computed: {
    classes: function classes() {
      return "q-expansion-item--".concat(this.showing === true ? 'expanded' : 'collapsed') + " q-expansion-item--".concat(this.popup === true ? 'popup' : 'standard');
    },
    contentStyle: function contentStyle() {
      if (this.contentInsetLevel !== void 0) {
        var dir = this.$q.lang.rtl === true ? 'Right' : 'Left';
        return defineProperty_default()({}, 'padding' + dir, this.contentInsetLevel * 56 + 'px');
      }
    },
    isClickable: function isClickable() {
      return this.hasRouterLink === true || this.expandIconToggle !== true;
    },
    expansionIcon: function expansionIcon() {
      return this.expandIcon || (this.denseToggle ? this.$q.iconSet.expansionItem.denseIcon : this.$q.iconSet.expansionItem.icon);
    },
    activeToggleIcon: function activeToggleIcon() {
      return this.disable !== true && (this.hasRouterLink === true || this.expandIconToggle === true);
    }
  },
  methods: {
    __onHeaderClick: function __onHeaderClick(e) {
      this.hasRouterLink !== true && this.toggle(e);
      this.$emit('click', e);
    },
    __toggleIconKeyboard: function __toggleIconKeyboard(e) {
      e.keyCode === 13 && this.__toggleIcon(e, true);
    },
    __toggleIcon: function __toggleIcon(e, keyboard) {
      keyboard !== true && this.$refs.blurTarget !== void 0 && this.$refs.blurTarget.focus();
      this.toggle(e);
      Object(utils_event["j" /* stopAndPrevent */])(e);
    },
    __eventHandler: function __eventHandler(comp) {
      this !== comp && this.group === comp.group && this.hide();
    },
    __getToggleIcon: function __getToggleIcon(h) {
      return h(QItemSection, {
        staticClass: "cursor-pointer".concat(this.denseToggle === true && this.switchToggleSide === true ? ' items-end' : ''),
        class: this.expandIconClass,
        props: {
          side: this.switchToggleSide !== true,
          avatar: this.switchToggleSide
        },
        on: this.activeToggleIcon === true ? {
          click: this.__toggleIcon,
          keyup: this.__toggleIconKeyboard
        } : void 0
      }, [h(QIcon["a" /* default */], {
        staticClass: 'q-expansion-item__toggle-icon q-focusable',
        class: {
          'rotate-180': this.showing,
          invisible: this.disable
        },
        props: {
          name: this.expansionIcon
        },
        attrs: this.activeToggleIcon === true ? {
          tabindex: 0
        } : void 0
      }, [h('div', {
        staticClass: 'q-focus-helper q-focus-helper--round',
        attrs: {
          tabindex: -1
        },
        ref: 'blurTarget'
      })])]);
    },
    __getHeader: function __getHeader(h) {
      var child;

      if (this.$scopedSlots.header !== void 0) {
        child = [].concat(this.$scopedSlots.header());
      } else {
        child = [h(QItemSection, [h(QItemLabel, {
          props: {
            lines: this.labelLines
          }
        }, [this.label || '']), this.caption ? h(QItemLabel, {
          props: {
            lines: this.captionLines,
            caption: true
          }
        }, [this.caption]) : null])];
        this.icon && child[this.switchToggleSide === true ? 'push' : 'unshift'](h(QItemSection, {
          props: {
            side: this.switchToggleSide === true,
            avatar: this.switchToggleSide !== true
          }
        }, [h(QIcon["a" /* default */], {
          props: {
            name: this.icon
          }
        })]));
      }

      child[this.switchToggleSide === true ? 'unshift' : 'push'](this.__getToggleIcon(h));
      var data = {
        ref: 'item',
        style: this.headerStyle,
        class: this.headerClass,
        props: {
          dark: this.dark,
          disable: this.disable,
          dense: this.dense,
          insetLevel: this.headerInsetLevel
        }
      };

      if (this.isClickable === true) {
        var evtProp = this.hasRouterLink === true ? 'nativeOn' : 'on';
        data.props.clickable = true;
        data[evtProp] = QExpansionItem_objectSpread({}, this.$listeners, {
          click: this.__onHeaderClick
        });
        this.hasRouterLink === true && Object.assign(data.props, this.routerLinkProps);
      }

      return h(QItem, data, child);
    },
    __getContent: function __getContent(h) {
      var node = [this.__getHeader(h), h(QSlideTransition, {
        props: {
          duration: this.duration
        }
      }, [h('div', {
        staticClass: 'q-expansion-item__content relative-position',
        style: this.contentStyle,
        directives: [{
          name: 'show',
          value: this.showing
        }]
      }, Object(utils_slot["a" /* default */])(this, 'default'))])];

      if (this.expandSeparator) {
        node.push(h(QSeparator, {
          staticClass: 'q-expansion-item__border q-expansion-item__border--top absolute-top',
          props: {
            dark: this.dark
          }
        }), h(QSeparator, {
          staticClass: 'q-expansion-item__border q-expansion-item__border--bottom absolute-bottom',
          props: {
            dark: this.dark
          }
        }));
      }

      return node;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-expansion-item q-item-type',
      class: this.classes
    }, [h('div', {
      staticClass: 'q-expansion-item__container relative-position'
    }, this.__getContent(h))]);
  },
  created: function created() {
    this.group !== void 0 && this.$root.$on(eventName, this.__eventHandler);
  },
  beforeDestroy: function beforeDestroy() {
    this.group !== void 0 && this.$root.$off(eventName, this.__eventHandler);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/QSlideItem.js



var slotsDef = [['left', 'center', 'start', 'width'], ['right', 'center', 'end', 'width'], ['top', 'start', 'center', 'height'], ['bottom', 'end', 'center', 'height']];
/* harmony default export */ var QSlideItem = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSlideItem',
  props: {
    leftColor: String,
    rightColor: String,
    topColor: String,
    bottomColor: String
  },
  directives: {
    TouchPan: TouchPan
  },
  methods: {
    reset: function reset() {
      this.$refs.content.style.transform = "translate(0,0)";
    },
    __pan: function __pan(evt) {
      var _this = this;

      var node = this.$refs.content;

      if (evt.isFirst) {
        this.__dir = null;
        this.__size = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };
        this.__scale = 0;
        node.classList.add('no-transition');
        slotsDef.forEach(function (slot) {
          if (_this.$scopedSlots[slot[0]] !== void 0) {
            var _node = _this.$refs[slot[0] + 'Content'];
            _node.style.transform = "scale(1)";
            _this.__size[slot[0]] = _node.getBoundingClientRect()[slot[3]];
          }
        });
        this.__axis = evt.direction === 'up' || evt.direction === 'down' ? 'Y' : 'X';
      } else if (evt.isFinal) {
        node.classList.remove('no-transition');

        if (this.__scale === 1) {
          node.style.transform = "translate".concat(this.__axis, "(").concat(this.__dir * 100, "%)");
          this.timer = setTimeout(function () {
            _this.$emit(_this.__showing, {
              reset: _this.reset
            });

            _this.$emit('action', {
              side: _this.__showing,
              reset: _this.reset
            });
          }, 230);
        } else {
          node.style.transform = "translate(0,0)";
        }

        return;
      } else {
        evt.direction = this.__axis === 'X' ? evt.offset.x < 0 ? 'left' : 'right' : evt.offset.y < 0 ? 'up' : 'down';
      }

      if (this.$scopedSlots.left === void 0 && evt.direction === 'right' || this.$scopedSlots.right === void 0 && evt.direction === 'left' || this.$scopedSlots.top === void 0 && evt.direction === 'down' || this.$scopedSlots.bottom === void 0 && evt.direction === 'up') {
        node.style.transform = "translate(0,0)";
        return;
      }

      var showing, dir, dist;

      if (this.__axis === 'X') {
        dir = evt.direction === 'left' ? -1 : 1;
        showing = dir * (this.$q.lang.rtl === true ? -1 : 1) === 1 ? 'left' : 'right';
        dist = evt.distance.x;
      } else {
        dir = evt.direction === 'up' ? -2 : 2;
        showing = dir === 2 ? 'top' : 'bottom';
        dist = evt.distance.y;
      }

      if (this.__dir !== null && Math.abs(dir) !== Math.abs(this.__dir)) {
        return;
      }

      if (this.__dir !== dir) {
        ['left', 'right', 'top', 'bottom'].forEach(function (d) {
          if (_this.$refs[d] !== void 0) {
            _this.$refs[d].style.visibility = showing === d ? 'visible' : 'hidden';
          }
        });
        this.__showing = showing;
        this.__dir = dir;
      }

      this.__scale = Math.max(0, Math.min(1, (dist - 40) / this.__size[showing]));
      node.style.transform = "translate".concat(this.__axis, "(").concat(dist * dir / Math.abs(dir), "px)");
      this.$refs["".concat(showing, "Content")].style.transform = "scale(".concat(this.__scale, ")");
    }
  },
  render: function render(h) {
    var _this2 = this;

    var content = [],
        horizontal = this.$scopedSlots.left !== void 0 || this.$scopedSlots.right !== void 0,
        vertical = this.$scopedSlots.top !== void 0 || this.$scopedSlots.bottom !== void 0;
    slotsDef.forEach(function (slot) {
      var dir = slot[0];

      if (_this2.$scopedSlots[dir] !== void 0) {
        content.push(h('div', {
          ref: dir,
          class: "q-slide-item__".concat(dir, " absolute-full row no-wrap items-").concat(slot[1], " justify-").concat(slot[2]) + (_this2[dir + 'Color'] !== void 0 ? " bg-".concat(_this2[dir + 'Color']) : '')
        }, [h('div', {
          ref: dir + 'Content'
        }, _this2.$scopedSlots[dir]())]));
      }
    });
    content.push(h('div', {
      ref: 'content',
      staticClass: 'q-slide-item__content',
      directives: horizontal === true || vertical === true ? [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          horizontal: horizontal,
          vertical: vertical,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      }] : null
    }, Object(utils_slot["a" /* default */])(this, 'default')));
    return h('div', {
      staticClass: 'q-slide-item q-item-type overflow-hidden'
    }, content);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/list/index.js







// CONCATENATED MODULE: ./node_modules/quasar/src/components/menu/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/no-ssr/QNoSsr.js



/* harmony default export */ var QNoSsr = (vue_runtime_esm["a" /* default */].extend({
  name: 'QNoSsr',
  mixins: [can_render],
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    placeholder: String
  },
  render: function render(h) {
    if (this.canRender === true) {
      var node = Object(utils_slot["a" /* default */])(this, 'default');
      return node === void 0 ? node : node.length > 1 ? h(this.tag, node) : node[0];
    }

    if (this.$scopedSlots.placeholder !== void 0) {
      var _node = Object(utils_slot["a" /* default */])(this, 'placeholder');

      return _node === void 0 ? _node : _node.length > 1 ? h(this.tag, {
        staticClass: 'q-no-ssr-placeholder'
      }, _node) : _node[0];
    }

    if (this.placeholder !== void 0) {
      return h(this.tag, {
        staticClass: 'q-no-ssr-placeholder'
      }, [this.placeholder]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/no-ssr/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/observer/index.js



// CONCATENATED MODULE: ./node_modules/quasar/src/components/radio/QRadio.js




/* harmony default export */ var QRadio = (vue_runtime_esm["a" /* default */].extend({
  name: 'QRadio',
  props: {
    value: {
      required: true
    },
    val: {
      required: true
    },
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dark: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  computed: {
    isTrue: function isTrue() {
      return this.value === this.val;
    },
    classes: function classes() {
      return {
        'disabled': this.disable,
        'q-radio--dark': this.dark,
        'q-radio--dense': this.dense,
        'reverse': this.leftLabel
      };
    },
    innerClass: function innerClass() {
      if (this.isTrue === true) {
        return 'q-radio__inner--active' + (this.color !== void 0 ? ' text-' + this.color : '');
      } else if (this.keepColor === true && this.color !== void 0) {
        return 'text-' + this.color;
      }
    },
    computedTabindex: function computedTabindex() {
      return this.disable === true ? -1 : this.tabindex || 0;
    }
  },
  methods: {
    set: function set(e) {
      e !== void 0 && Object(utils_event["j" /* stopAndPrevent */])(e);

      if (this.disable !== true && this.isTrue !== true) {
        this.$emit('input', this.val);
      }
    },
    __keyDown: function __keyDown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.set(e);
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-radio cursor-pointer no-outline row inline no-wrap items-center',
      class: this.classes,
      attrs: {
        tabindex: this.computedTabindex
      },
      on: {
        click: this.set,
        keydown: this.__keyDown
      }
    }, [h('div', {
      staticClass: 'q-radio__inner relative-position',
      class: this.innerClass
    }, [this.disable !== true ? h('input', {
      staticClass: 'q-radio__native q-ma-none q-pa-none invisible',
      attrs: {
        type: 'checkbox'
      },
      on: {
        change: this.set
      }
    }) : null, h('div', {
      staticClass: 'q-radio__bg absolute'
    }, [h('div', {
      staticClass: 'q-radio__outer-circle absolute-full'
    }), h('div', {
      staticClass: 'q-radio__inner-circle absolute-full'
    })])]), this.label !== void 0 || this.$scopedSlots.default !== void 0 ? h('div', {
      staticClass: 'q-radio__label q-anchor--skip'
    }, (this.label !== void 0 ? [this.label] : []).concat(Object(utils_slot["a" /* default */])(this, 'default'))) : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js




/* harmony default export */ var QToggle = (vue_runtime_esm["a" /* default */].extend({
  name: 'QToggle',
  mixins: [mixins_checkbox],
  props: {
    icon: String,
    checkedIcon: String,
    uncheckedIcon: String
  },
  computed: {
    classes: function classes() {
      return {
        'disabled': this.disable,
        'q-toggle--dark': this.dark,
        'q-toggle--dense': this.dense,
        'reverse': this.leftLabel
      };
    },
    innerClass: function innerClass() {
      if (this.isTrue === true) {
        return 'q-toggle__inner--active' + (this.color !== void 0 ? ' text-' + this.color : '');
      } else if (this.keepColor === true && this.color !== void 0) {
        return 'text-' + this.color;
      }
    },
    computedIcon: function computedIcon() {
      return (this.isTrue === true ? this.checkedIcon : this.uncheckedIcon) || this.icon;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toggle cursor-pointer no-outline row inline no-wrap items-center',
      class: this.classes,
      attrs: {
        tabindex: this.computedTabindex
      },
      on: {
        click: this.toggle,
        keydown: this.__keyDown
      }
    }, [h('div', {
      staticClass: 'q-toggle__inner relative-position',
      class: this.innerClass
    }, [this.disable !== true ? h('input', {
      staticClass: 'q-toggle__native absolute q-ma-none q-pa-none invisible',
      attrs: {
        type: 'toggle'
      },
      on: {
        change: this.toggle
      }
    }) : null, h('div', {
      staticClass: 'q-toggle__track'
    }), h('div', {
      staticClass: 'q-toggle__thumb-container absolute'
    }, [h('div', {
      staticClass: 'q-toggle__thumb row flex-center'
    }, this.computedIcon !== void 0 ? [h(QIcon["a" /* default */], {
      props: {
        name: this.computedIcon
      }
    })] : null)])]), h('div', {
      staticClass: 'q-toggle__label q-anchor--skip'
    }, (this.label !== void 0 ? [this.label] : []).concat(Object(utils_slot["a" /* default */])(this, 'default')))]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js






var QOptionGroup_components = {
  radio: QRadio,
  checkbox: QCheckbox,
  toggle: QToggle
};
/* harmony default export */ var QOptionGroup = (vue_runtime_esm["a" /* default */].extend({
  name: 'QOptionGroup',
  props: {
    value: {
      required: true
    },
    options: {
      type: Array,
      validator: function validator(opts) {
        return opts.every(function (opt) {
          return 'value' in opt && 'label' in opt;
        });
      }
    },
    type: {
      default: 'radio',
      validator: function validator(v) {
        return ['radio', 'checkbox', 'toggle'].includes(v);
      }
    },
    color: String,
    keepColor: Boolean,
    dark: Boolean,
    dense: Boolean,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean
  },
  computed: {
    component: function component() {
      return QOptionGroup_components[this.type];
    },
    model: function model() {
      return Array.isArray(this.value) ? this.value.slice() : this.value;
    }
  },
  methods: {
    __update: function __update(value) {
      this.$emit('input', value);
    }
  },
  created: function created() {
    var isArray = Array.isArray(this.value);

    if (this.type === 'radio') {
      if (isArray) {
        console.error('q-option-group: model should not be array');
      }
    } else if (!isArray) {
      console.error('q-option-group: model should be array in your case');
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'q-option-group q-gutter-x-sm',
      class: this.inline ? 'q-option-group--inline' : null
    }, this.options.map(function (opt) {
      return h('div', [h(_this.component, {
        props: {
          value: _this.value,
          val: opt.value,
          disable: _this.disable || opt.disable,
          label: opt.label,
          leftLabel: _this.leftLabel || opt.leftLabel,
          color: opt.color || _this.color,
          checkedIcon: opt.checkedIcon,
          uncheckedIcon: opt.uncheckedIcon,
          dark: opt.dark || _this.dark,
          dense: _this.dense,
          keepColor: opt.keepColor || _this.keepColor
        },
        on: {
          input: _this.__update
        }
      })]);
    }));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/option-group/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/page-scroller/QPageScroller.js









function QPageScroller_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QPageScroller_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QPageScroller_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QPageScroller_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var QPageScroller = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPageScroller',
  mixins: [QPageSticky],
  props: {
    scrollOffset: {
      type: Number,
      default: 1000
    },
    duration: {
      type: Number,
      default: 300
    },
    offset: {
      default: function _default() {
        return [18, 18];
      }
    }
  },
  inject: {
    layout: {
      default: function _default() {
        console.error('QPageScroller needs to be used within a QLayout');
      }
    }
  },
  data: function data() {
    return {
      showing: this.__isVisible(this.layout.scroll.position)
    };
  },
  watch: {
    'layout.scroll.position': function layoutScrollPosition(val) {
      var newVal = this.__isVisible(val);

      if (this.showing !== newVal) {
        this.showing = newVal;
      }
    }
  },
  methods: {
    __isVisible: function __isVisible(val) {
      return val > this.scrollOffset;
    },
    __onClick: function __onClick(e) {
      var target = this.layout.container === true ? getScrollTarget(this.$el) : getScrollTarget(this.layout.$el);
      scroll_setScrollPosition(target, 0, this.duration);
      this.$listeners.click !== void 0 && this.$emit('click', e);
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'q-transition--fade'
      }
    }, this.showing === true ? [h('div', {
      staticClass: 'q-page-scroller',
      on: QPageScroller_objectSpread({}, this.$listeners, {
        click: this.__onClick
      })
    }, [QPageSticky.options.render.call(this, h)])] : null);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/page-scroller/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/pagination/QPagination.js











function QPagination_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QPagination_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QPagination_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QPagination_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var QPagination = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPagination',
  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: String,
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    maxPages: {
      type: Number,
      default: 0,
      validator: function validator(v) {
        return v >= 0;
      }
    }
  },
  data: function data() {
    return {
      newPage: null
    };
  },
  watch: {
    min: function min(value) {
      this.model = this.value;
    },
    max: function max(value) {
      this.model = this.value;
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        val = parseInt(val, 10);

        if (this.disable || isNaN(val) || val === 0) {
          return;
        }

        var value = between(val, this.min, this.max);
        this.$emit('input', value);
      }
    },
    inputPlaceholder: function inputPlaceholder() {
      return this.model + ' / ' + this.max;
    },
    __boundaryLinks: function __boundaryLinks() {
      return this.__getBool(this.boundaryLinks, this.input);
    },
    __boundaryNumbers: function __boundaryNumbers() {
      return this.__getBool(this.boundaryNumbers, !this.input);
    },
    __directionLinks: function __directionLinks() {
      return this.__getBool(this.directionLinks, this.input);
    },
    __ellipses: function __ellipses() {
      return this.__getBool(this.ellipses, !this.input);
    },
    icons: function icons() {
      var ico = [this.$q.iconSet.pagination.first, this.$q.iconSet.pagination.prev, this.$q.iconSet.pagination.next, this.$q.iconSet.pagination.last];
      return this.$q.lang.rtl ? ico.reverse() : ico;
    }
  },
  methods: {
    set: function set(value) {
      this.model = value;
    },
    setByOffset: function setByOffset(offset) {
      this.model = this.model + offset;
    },
    __update: function __update() {
      this.model = this.newPage;
      this.newPage = null;
    },
    __getBool: function __getBool(val, otherwise) {
      return [true, false].includes(val) ? val : otherwise;
    },
    __getBtn: function __getBtn(h, data, props) {
      data.props = QPagination_objectSpread({
        color: this.color,
        flat: true,
        size: this.size
      }, props);
      return h(QBtn["a" /* default */], data);
    }
  },
  render: function render(h) {
    var _this = this;

    var contentStart = [],
        contentEnd = [],
        contentMiddle = [];

    if (this.__boundaryLinks) {
      contentStart.push(this.__getBtn(h, {
        key: 'bls',
        on: {
          click: function click() {
            return _this.set(_this.min);
          }
        }
      }, {
        disable: this.disable || this.value <= this.min,
        icon: this.icons[0]
      }));
      contentEnd.unshift(this.__getBtn(h, {
        key: 'ble',
        on: {
          click: function click() {
            return _this.set(_this.max);
          }
        }
      }, {
        disable: this.disable || this.value >= this.max,
        icon: this.icons[3]
      }));
    }

    if (this.__directionLinks) {
      contentStart.push(this.__getBtn(h, {
        key: 'bdp',
        on: {
          click: function click() {
            return _this.setByOffset(-1);
          }
        }
      }, {
        disable: this.disable || this.value <= this.min,
        icon: this.icons[1]
      }));
      contentEnd.unshift(this.__getBtn(h, {
        key: 'bdn',
        on: {
          click: function click() {
            return _this.setByOffset(1);
          }
        }
      }, {
        disable: this.disable || this.value >= this.max,
        icon: this.icons[2]
      }));
    }

    if (this.input === true) {
      contentMiddle.push(h(QInput, {
        staticClass: 'inline',
        style: {
          width: "".concat(this.inputPlaceholder.length / 2, "em")
        },
        props: {
          type: 'number',
          dense: true,
          value: this.newPage,
          disable: this.disable,
          borderless: true,
          inputClass: this.inputClass,
          inputStyle: this.inputStyle
        },
        attrs: {
          placeholder: this.inputPlaceholder,
          min: this.min,
          max: this.max
        },
        on: {
          input: function input(value) {
            return _this.newPage = value;
          },
          keyup: function keyup(e) {
            return e.keyCode === 13 && _this.__update();
          },
          blur: function blur() {
            return _this.__update();
          }
        }
      }));
    } else {
      // is type select
      var maxPages = Math.max(this.maxPages, 1 + (this.__ellipses ? 2 : 0) + (this.__boundaryNumbers ? 2 : 0)),
          pgFrom = this.min,
          pgTo = this.max,
          ellipsesStart = false,
          ellipsesEnd = false,
          boundaryStart = false,
          boundaryEnd = false;

      if (this.maxPages && maxPages < this.max - this.min + 1) {
        maxPages = 1 + Math.floor(maxPages / 2) * 2;
        pgFrom = Math.max(this.min, Math.min(this.max - maxPages + 1, this.value - Math.floor(maxPages / 2)));
        pgTo = Math.min(this.max, pgFrom + maxPages - 1);

        if (this.__boundaryNumbers) {
          boundaryStart = true;
          pgFrom += 1;
        }

        if (this.__ellipses && pgFrom > this.min + (this.__boundaryNumbers ? 1 : 0)) {
          ellipsesStart = true;
          pgFrom += 1;
        }

        if (this.__boundaryNumbers) {
          boundaryEnd = true;
          pgTo -= 1;
        }

        if (this.__ellipses && pgTo < this.max - (this.__boundaryNumbers ? 1 : 0)) {
          ellipsesEnd = true;
          pgTo -= 1;
        }
      }

      var style = {
        minWidth: "".concat(Math.max(2, String(this.max).length), "em")
      };

      if (boundaryStart) {
        var active = this.min === this.value;
        contentStart.push(this.__getBtn(h, {
          key: 'bns',
          style: style,
          on: {
            click: function click() {
              return _this.set(_this.min);
            }
          }
        }, {
          disable: this.disable,
          flat: !active,
          textColor: active ? this.textColor : null,
          label: this.min,
          ripple: false
        }));
      }

      if (boundaryEnd) {
        var _active = this.max === this.value;

        contentEnd.unshift(this.__getBtn(h, {
          key: 'bne',
          style: style,
          on: {
            click: function click() {
              return _this.set(_this.max);
            }
          }
        }, {
          disable: this.disable,
          flat: !_active,
          textColor: _active ? this.textColor : null,
          label: this.max,
          ripple: false
        }));
      }

      if (ellipsesStart) {
        contentStart.push(this.__getBtn(h, {
          key: 'bes',
          style: style,
          on: {
            click: function click() {
              return _this.set(pgFrom - 1);
            }
          }
        }, {
          disable: this.disable,
          label: '…'
        }));
      }

      if (ellipsesEnd) {
        contentEnd.unshift(this.__getBtn(h, {
          key: 'bee',
          style: style,
          on: {
            click: function click() {
              return _this.set(pgTo + 1);
            }
          }
        }, {
          disable: this.disable,
          label: '…'
        }));
      }

      var _loop = function _loop(i) {
        var active = i === _this.value;
        contentMiddle.push(_this.__getBtn(h, {
          key: "bpg".concat(i),
          style: style,
          on: {
            click: function click() {
              return _this.set(i);
            }
          }
        }, {
          disable: _this.disable,
          flat: !active,
          textColor: active ? _this.textColor : null,
          label: i,
          ripple: false
        }));
      };

      for (var i = pgFrom; i <= pgTo; i++) {
        _loop(i);
      }
    }

    return h('div', {
      staticClass: 'q-pagination row no-wrap items-center',
      class: {
        disabled: this.disable
      },
      on: this.$listeners
    }, [contentStart, h('div', {
      staticClass: 'row justify-center',
      on: this.input === true ? {
        input: utils_event["i" /* stop */]
      } : {}
    }, [contentMiddle]), contentEnd]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/pagination/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/utils/frame-debounce.js
/* harmony default export */ var frame_debounce = (function (fn) {
  var wait = false,
      frame,
      callArgs;

  function debounced()
  /* ...args */
  {
    var _this = this;

    callArgs = arguments;

    if (wait === true) {
      return;
    }

    wait = true;
    frame = requestAnimationFrame(function () {
      fn.apply(_this, callArgs);
      callArgs = void 0;
      wait = false;
    });
  }

  debounced.cancel = function () {
    window.cancelAnimationFrame(frame);
    wait = false;
  };

  return debounced;
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/parallax/QParallax.js







/* harmony default export */ var QParallax = (vue_runtime_esm["a" /* default */].extend({
  name: 'QParallax',
  props: {
    src: String,
    height: {
      type: Number,
      default: 500
    },
    speed: {
      type: Number,
      default: 1,
      validator: function validator(v) {
        return v >= 0 && v <= 1;
      }
    }
  },
  data: function data() {
    return {
      scrolling: false,
      percentScrolled: 0
    };
  },
  watch: {
    height: function height() {
      this.__updatePos();
    }
  },
  methods: {
    __update: function __update(percentage) {
      this.percentScrolled = percentage;
      this.$listeners.scroll !== void 0 && this.$emit('scroll', percentage);
    },
    __onResize: function __onResize() {
      if (this.scrollTarget) {
        this.mediaHeight = this.media.naturalHeight || this.media.videoHeight || Object(dom["c" /* height */])(this.media);

        this.__updatePos();
      }
    },
    __updatePos: function __updatePos() {
      var containerTop, containerHeight, containerBottom, top, bottom;

      if (this.scrollTarget === window) {
        containerTop = 0;
        containerHeight = window.innerHeight;
        containerBottom = containerHeight;
      } else {
        containerTop = Object(dom["d" /* offset */])(this.scrollTarget).top;
        containerHeight = Object(dom["c" /* height */])(this.scrollTarget);
        containerBottom = containerTop + containerHeight;
      }

      top = Object(dom["d" /* offset */])(this.$el).top;
      bottom = top + this.height;

      if (bottom > containerTop && top < containerBottom) {
        var percent = (containerBottom - top) / (this.height + containerHeight);

        this.__setPos((this.mediaHeight - this.height) * percent * this.speed);

        this.__update(percent);
      }
    },
    __setPos: function __setPos(offset) {
      // apply it immediately without any delay
      this.media.style.transform = "translate3D(-50%,".concat(Math.round(offset), "px, 0)");
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-parallax',
      style: {
        height: "".concat(this.height, "px")
      },
      on: this.$listeners
    }, [h('div', {
      ref: 'mediaParent',
      staticClass: 'q-parallax__media absolute-full'
    }, this.$scopedSlots.media !== void 0 ? this.$scopedSlots.media() : [h('img', {
      ref: 'media',
      attrs: {
        src: this.src
      }
    })]), h('div', {
      staticClass: 'q-parallax__content absolute-full column flex-center'
    }, this.$scopedSlots.content !== void 0 ? this.$scopedSlots.content({
      percentScrolled: this.percentScrolled
    }) : Object(utils_slot["a" /* default */])(this, 'default'))]);
  },
  beforeMount: function beforeMount() {
    this.__setPos = frame_debounce(this.__setPos);
  },
  mounted: function mounted() {
    this.__update = frame_debounce(this.__update);
    this.resizeHandler = frame_debounce(this.__onResize);
    this.media = this.$scopedSlots.media !== void 0 ? this.$refs.mediaParent.children[0] : this.$refs.media;
    this.media.onload = this.media.onloadstart = this.media.loadedmetadata = this.__onResize;
    this.scrollTarget = getScrollTarget(this.$el);
    window.addEventListener('resize', this.resizeHandler, utils_event["e" /* listenOpts */].passive);
    this.scrollTarget.addEventListener('scroll', this.__updatePos, utils_event["e" /* listenOpts */].passive);

    this.__onResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler, utils_event["e" /* listenOpts */].passive);
    this.scrollTarget !== void 0 && this.scrollTarget.removeEventListener('scroll', this.__updatePos, utils_event["e" /* listenOpts */].passive);
    this.media.onload = this.media.onloadstart = this.media.loadedmetadata = null;
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/parallax/index.js


// EXTERNAL MODULE: ./node_modules/quasar/src/utils/clone.js
var utils_clone = __webpack_require__("8b39");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/popup-edit/QPopupEdit.js








function QPopupEdit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QPopupEdit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QPopupEdit_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QPopupEdit_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var QPopupEdit = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPopupEdit',
  props: {
    value: {
      required: true
    },
    title: String,
    buttons: Boolean,
    labelSet: String,
    labelCancel: String,
    color: {
      type: String,
      default: 'primary'
    },
    validate: {
      type: Function,
      default: function _default() {
        return true;
      }
    },

    /* menu props overrides */
    cover: {
      type: Boolean,
      default: true
    },
    contentClass: String,

    /* end of menu props */
    disable: Boolean
  },
  data: function data() {
    return {
      initialValue: ''
    };
  },
  computed: {
    classes: function classes() {
      return 'q-popup-edit' + (this.contentClass ? ' ' + this.contentClass : '');
    },
    defaultSlotScope: function defaultSlotScope() {
      return {
        initialValue: this.initialValue,
        value: this.value,
        emitValue: this.__emitValue,
        validate: this.validate,
        set: this.set,
        cancel: this.cancel
      };
    }
  },
  methods: {
    set: function set() {
      if (this.__hasChanged()) {
        if (this.validate(this.value) === false) {
          return;
        }

        this.$emit('save', this.value, this.initialValue);
      }

      this.__close();
    },
    cancel: function cancel() {
      if (this.__hasChanged()) {
        this.$emit('cancel', this.value, this.initialValue);
        this.$emit('input', this.initialValue);
      }

      this.__close();
    },
    __hasChanged: function __hasChanged() {
      return !isDeepEqual(this.value, this.initialValue);
    },
    __emitValue: function __emitValue(val) {
      if (this.disable === true) {
        return;
      }

      this.$emit('input', val);
    },
    __close: function __close() {
      this.validated = true;
      this.$refs.menu.hide();
    },
    __reposition: function __reposition() {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.menu.updatePosition();
      });
    },
    __getContent: function __getContent(h) {
      var child = this.$scopedSlots.default === void 0 ? [] : [this.$scopedSlots.default(this.defaultSlotScope)],
          title = this.$scopedSlots.title !== void 0 ? this.$scopedSlots.title() : this.title;
      title && child.unshift(h('div', {
        staticClass: 'q-dialog__title q-mt-sm q-mb-sm'
      }, [title]));
      this.buttons === true && child.push(h('div', {
        staticClass: 'q-popup-edit__buttons row justify-center no-wrap'
      }, [h(QBtn["a" /* default */], {
        props: {
          flat: true,
          color: this.color,
          label: this.labelCancel || this.$q.lang.label.cancel
        },
        on: {
          click: this.cancel
        }
      }), h(QBtn["a" /* default */], {
        props: {
          flat: true,
          color: this.color,
          label: this.labelSet || this.$q.lang.label.set
        },
        on: {
          click: this.set
        }
      })]));
      return child;
    }
  },
  render: function render(h) {
    var _this2 = this;

    if (this.disable === true) {
      return;
    }

    return h(QMenu, {
      ref: 'menu',
      props: QPopupEdit_objectSpread({}, this.$attrs, {
        cover: this.cover,
        contentClass: this.classes
      }),
      on: {
        'before-show': function beforeShow() {
          _this2.validated = false;
          _this2.initialValue = Object(utils_clone["a" /* default */])(_this2.value);
          _this2.watcher = _this2.$watch('value', _this2.__reposition);

          _this2.$emit('before-show');
        },
        show: function show() {
          _this2.$emit('show');
        },
        'before-hide': function beforeHide() {
          _this2.watcher();

          if (_this2.validated === false && _this2.__hasChanged()) {
            _this2.$emit('cancel', _this2.value, _this2.initialValue);

            _this2.$emit('input', _this2.initialValue);
          }

          _this2.$emit('before-hide');
        },
        hide: function hide() {
          _this2.$emit('hide');
        },
        keyup: function keyup(e) {
          e.keyCode === 13 && _this2.set();
        }
      }
    }, this.__getContent(h));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/popup-edit/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js













function QPopupProxy_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QPopupProxy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QPopupProxy_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QPopupProxy_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ var QPopupProxy = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPopupProxy',
  mixins: [mixins_anchor],
  props: {
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  data: function data() {
    var breakpoint = parseInt(this.breakpoint, 10);
    return {
      type: this.$q.screen.width < breakpoint || this.$q.screen.height < breakpoint ? 'dialog' : 'menu'
    };
  },
  computed: {
    parsedBreakpoint: function parsedBreakpoint() {
      return parseInt(this.breakpoint, 10);
    }
  },
  watch: {
    '$q.screen.width': function $qScreenWidth(width) {
      if (this.$refs.popup.showing !== true) {
        this.__updateType(width, this.$q.screen.height, this.parsedBreakpoint);
      }
    },
    '$q.screen.height': function $qScreenHeight(height) {
      if (this.$refs.popup.showing !== true) {
        this.__updateType(this.$q.screen.width, height, this.parsedBreakpoint);
      }
    },
    breakpoint: function breakpoint(_breakpoint) {
      if (this.$refs.popup.showing !== true) {
        this.__updateType(this.$q.screen.width, this.$q.screen.height, parseInt(_breakpoint, 10));
      }
    }
  },
  methods: {
    toggle: function toggle(evt) {
      this.$refs.popup.toggle(evt);
    },
    show: function show(evt) {
      this.$refs.popup.show(evt);
    },
    hide: function hide(evt) {
      this.$refs.popup.hide(evt);
    },
    __onHide: function __onHide(evt) {
      this.__updateType(this.$q.screen.width, this.$q.screen.height, this.parsedBreakpoint);

      this.$emit('hide', evt);
    },
    __updateType: function __updateType(width, height, breakpoint) {
      var type = width < breakpoint || height < breakpoint ? 'dialog' : 'menu';

      if (this.type !== type) {
        this.type = type;
      }
    }
  },
  render: function render(h) {
    var child = Object(utils_slot["a" /* default */])(this, 'default');
    var props = this.type === 'menu' && child !== void 0 && child[0] !== void 0 && child[0].componentOptions !== void 0 && child[0].componentOptions.Ctor !== void 0 && child[0].componentOptions.Ctor.sealedOptions !== void 0 && ['QDate', 'QTime', 'QCarousel', 'QColor'].includes(child[0].componentOptions.Ctor.sealedOptions.name) ? {
      cover: true,
      maxHeight: '99vh'
    } : {};
    var data = {
      ref: 'popup',
      props: Object.assign(props, this.$attrs),
      on: QPopupProxy_objectSpread({}, this.$listeners, {
        hide: this.__onHide
      })
    };
    var component;

    if (this.type === 'dialog') {
      component = QDialog;
    } else {
      component = QMenu;
      data.props.contextMenu = this.contextMenu;
      data.props.noParentEvent = true;
      data.props.separateClosePopup = true;
    }

    return h(component, data, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/popup-proxy/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js





function QLinearProgress_width(val) {
  return {
    transform: "scale3d(".concat(val, ",1,1)")
  };
}

var QLinearProgress_sizes = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
/* harmony default export */ var QLinearProgress = (vue_runtime_esm["a" /* default */].extend({
  name: 'QLinearProgress',
  props: {
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    size: String,
    color: String,
    trackColor: String,
    dark: Boolean,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean
  },
  computed: {
    sizeStyle: function sizeStyle() {
      if (this.size !== void 0) {
        return {
          height: this.size in QLinearProgress_sizes ? "".concat(QLinearProgress_sizes[this.size], "px") : this.size
        };
      }
    },
    motion: function motion() {
      return this.indeterminate || this.query;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, "text-".concat(this.color), this.color !== void 0), defineProperty_default()(_ref, 'q-linear-progress--reverse', this.reverse === true || this.query === true), defineProperty_default()(_ref, 'rounded-borders', this.rounded === true), _ref;
    },
    trackStyle: function trackStyle() {
      return QLinearProgress_width(this.buffer !== void 0 ? this.buffer : 1);
    },
    trackClass: function trackClass() {
      return 'q-linear-progress__track--' + (this.dark === true ? 'dark' : 'light') + (this.trackColor !== void 0 ? " bg-".concat(this.trackColor) : '');
    },
    modelStyle: function modelStyle() {
      return QLinearProgress_width(this.motion ? 1 : this.value);
    },
    modelClasses: function modelClasses() {
      return "q-linear-progress__model--".concat(this.motion ? 'in' : '', "determinate");
    },
    stripeStyle: function stripeStyle() {
      return {
        width: this.value * 100 + '%'
      };
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-linear-progress',
      style: this.sizeStyle,
      class: this.classes,
      on: this.$listeners
    }, [h('div', {
      staticClass: 'q-linear-progress__track absolute-full',
      style: this.trackStyle,
      class: this.trackClass
    }), h('div', {
      staticClass: 'q-linear-progress__model absolute-full',
      style: this.modelStyle,
      class: this.modelClasses
    }), this.stripe === true && this.motion === false ? h('div', {
      staticClass: 'q-linear-progress__stripe absolute-full',
      style: this.stripeStyle
    }) : null].concat(Object(utils_slot["a" /* default */])(this, 'default')));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/linear-progress/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/pull-to-refresh/QPullToRefresh.js








var PULLER_HEIGHT = 40,
    OFFSET_TOP = 20;
/* harmony default export */ var QPullToRefresh = (vue_runtime_esm["a" /* default */].extend({
  name: 'QPullToRefresh',
  directives: {
    TouchPan: TouchPan
  },
  props: {
    color: String,
    icon: String,
    noMouse: Boolean,
    disable: Boolean
  },
  data: function data() {
    return {
      state: 'pull',
      pullRatio: 0,
      pulling: false,
      pullPosition: -PULLER_HEIGHT,
      animating: false,
      positionCSS: {}
    };
  },
  computed: {
    style: function style() {
      return {
        opacity: this.pullRatio,
        transform: "translateY(".concat(this.pullPosition, "px) rotate(").concat(this.pullRatio * 360, "deg)")
      };
    }
  },
  methods: {
    trigger: function trigger() {
      var _this = this;

      this.$emit('refresh', function () {
        _this.__animateTo({
          pos: -PULLER_HEIGHT,
          ratio: 0
        }, function () {
          _this.state = 'pull';
        });
      });
    },
    updateScrollTarget: function updateScrollTarget() {
      this.scrollContainer = getScrollTarget(this.$el);
    },
    __pull: function __pull(event) {
      if (event.isFinal) {
        if (this.pulling) {
          this.pulling = false;

          if (this.state === 'pulled') {
            this.state = 'refreshing';

            this.__animateTo({
              pos: OFFSET_TOP
            });

            this.trigger();
          } else if (this.state === 'pull') {
            this.__animateTo({
              pos: -PULLER_HEIGHT,
              ratio: 0
            });
          }
        }

        return;
      }

      if (this.animating || this.state === 'refreshing') {
        return false;
      }

      if (event.isFirst) {
        if (getScrollPosition(this.scrollContainer) !== 0) {
          if (this.pulling) {
            this.pulling = false;
            this.state = 'pull';

            this.__animateTo({
              pos: -PULLER_HEIGHT,
              ratio: 0
            });
          }

          return false;
        }

        this.pulling = true;

        var _this$$el$getBounding = this.$el.getBoundingClientRect(),
            top = _this$$el$getBounding.top,
            left = _this$$el$getBounding.left;

        this.positionCSS = {
          top: top + 'px',
          left: left + 'px',
          width: window.getComputedStyle(this.$el).getPropertyValue('width')
        };
      }

      Object(utils_event["g" /* prevent */])(event.evt);
      var distance = Math.min(140, Math.max(0, event.distance.y));
      this.pullPosition = distance - PULLER_HEIGHT;
      this.pullRatio = between(distance / (OFFSET_TOP + PULLER_HEIGHT), 0, 1);
      var state = this.pullPosition > OFFSET_TOP ? 'pulled' : 'pull';

      if (this.state !== state) {
        this.state = state;
      }
    },
    __animateTo: function __animateTo(_ref, done) {
      var _this2 = this;

      var pos = _ref.pos,
          ratio = _ref.ratio;
      this.animating = true;
      this.pullPosition = pos;

      if (ratio !== void 0) {
        this.pullRatio = ratio;
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.animating = false;
        done && done();
      }, 300);
    }
  },
  mounted: function mounted() {
    this.updateScrollTarget();
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-pull-to-refresh overflow-hidden',
      directives: this.disable === true ? null : [{
        name: 'touch-pan',
        modifiers: {
          down: true,
          mightPrevent: true,
          mouse: !this.noMouse
        },
        value: this.__pull
      }]
    }, [h('div', {
      staticClass: 'q-pull-to-refresh__content',
      class: this.pulling ? 'no-pointer-events' : null
    }, Object(utils_slot["a" /* default */])(this, 'default')), h('div', {
      staticClass: 'q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top',
      style: this.positionCSS
    }, [h('div', {
      staticClass: 'q-pull-to-refresh__puller row flex-center',
      style: this.style,
      class: this.animating ? 'q-pull-to-refresh__puller--animating' : null
    }, [this.state !== 'refreshing' ? h(QIcon["a" /* default */], {
      props: {
        name: this.icon || this.$q.iconSet.pullToRefresh.icon,
        color: this.color,
        size: '32px'
      }
    }) : h(QSpinner["a" /* default */], {
      props: {
        size: '24px',
        color: this.color
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/pull-to-refresh/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/radio/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/range/QRange.js












function QRange_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QRange_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QRange_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QRange_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var dragType = {
  MIN: 0,
  RANGE: 1,
  MAX: 2
};
/* harmony default export */ var QRange = (vue_runtime_esm["a" /* default */].extend({
  name: 'QRange',
  mixins: [SliderMixin],
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {
          min: null,
          max: null
        };
      },
      validator: function validator(val) {
        return 'min' in val && 'max' in val;
      }
    },
    dragRange: Boolean,
    dragOnlyRange: Boolean,
    leftLabelColor: String,
    leftLabelTextColor: String,
    rightLabelColor: String,
    rightLabelTextColor: String,
    leftLabelValue: [String, Number],
    rightLabelValue: [String, Number]
  },
  data: function data() {
    return {
      model: {
        min: this.value.min === null ? this.min : this.value.min,
        max: this.value.max === null ? this.max : this.value.max
      },
      curMinRatio: 0,
      curMaxRatio: 0
    };
  },
  watch: {
    'value.min': function valueMin(val) {
      this.model.min = val === null ? this.min : val;
    },
    'value.max': function valueMax(val) {
      this.model.max = val === null ? this.max : val;
    },
    min: function min(value) {
      if (this.model.min < value) {
        this.model.min = value;
      }

      if (this.model.max < value) {
        this.model.max = value;
      }
    },
    max: function max(value) {
      if (this.model.min > value) {
        this.model.min = value;
      }

      if (this.model.max > value) {
        this.model.max = value;
      }
    }
  },
  computed: {
    ratioMin: function ratioMin() {
      return this.active === true ? this.curMinRatio : this.modelMinRatio;
    },
    ratioMax: function ratioMax() {
      return this.active === true ? this.curMaxRatio : this.modelMaxRatio;
    },
    modelMinRatio: function modelMinRatio() {
      return (this.model.min - this.min) / (this.max - this.min);
    },
    modelMaxRatio: function modelMaxRatio() {
      return (this.model.max - this.min) / (this.max - this.min);
    },
    trackStyle: function trackStyle() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, this.horizProp, 100 * this.ratioMin + '%'), defineProperty_default()(_ref, "width", 100 * (this.ratioMax - this.ratioMin) + '%'), _ref;
    },
    minThumbStyle: function minThumbStyle() {
      var _ref2;

      return _ref2 = {}, defineProperty_default()(_ref2, this.horizProp, 100 * this.ratioMin + '%'), defineProperty_default()(_ref2, 'z-index', this.__nextFocus === 'min' ? 2 : void 0), _ref2;
    },
    maxThumbStyle: function maxThumbStyle() {
      return defineProperty_default()({}, this.horizProp, 100 * this.ratioMax + '%');
    },
    minThumbClass: function minThumbClass() {
      return this.preventFocus === false && this.focus === 'min' ? 'q-slider--focus' : null;
    },
    maxThumbClass: function maxThumbClass() {
      return this.preventFocus === false && this.focus === 'max' ? 'q-slider--focus' : null;
    },
    events: function events() {
      var _this = this;

      if (this.editable === true) {
        if (this.$q.platform.is.mobile === true) {
          return {
            click: this.__mobileClick
          };
        }

        var evt = {
          mousedown: this.__activate
        };
        this.dragOnlyRange === true && Object.assign(evt, {
          focus: function focus() {
            _this.__focus('both');
          },
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        });
        return evt;
      }
    },
    minEvents: function minEvents() {
      var _this2 = this;

      if (this.editable && !this.$q.platform.is.mobile && this.dragOnlyRange !== true) {
        return {
          focus: function focus() {
            _this2.__focus('min');
          },
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        };
      }
    },
    maxEvents: function maxEvents() {
      var _this3 = this;

      if (this.editable && !this.$q.platform.is.mobile && this.dragOnlyRange !== true) {
        return {
          focus: function focus() {
            _this3.__focus('max');
          },
          blur: this.__blur,
          keydown: this.__keydown,
          keyup: this.__keyup
        };
      }
    },
    minPinClass: function minPinClass() {
      var color = this.leftLabelColor || this.labelColor;

      if (color) {
        return "text-".concat(color);
      }
    },
    minPinTextClass: function minPinTextClass() {
      var color = this.leftLabelTextColor || this.labelTextColor;

      if (color) {
        return "text-".concat(color);
      }
    },
    maxPinClass: function maxPinClass() {
      var color = this.rightLabelColor || this.labelColor;

      if (color) {
        return "text-".concat(color);
      }
    },
    maxPinTextClass: function maxPinTextClass() {
      var color = this.rightLabelTextColor || this.labelTextColor;

      if (color) {
        return "text-".concat(color);
      }
    },
    minLabel: function minLabel() {
      return this.leftLabelValue !== void 0 ? this.leftLabelValue : this.model.min;
    },
    maxLabel: function maxLabel() {
      return this.rightLabelValue !== void 0 ? this.rightLabelValue : this.model.max;
    }
  },
  methods: {
    __updateValue: function __updateValue(change) {
      if (this.model.min !== this.value.min || this.model.max !== this.value.max) {
        this.$emit('input', this.model);
      }

      change === true && this.$emit('change', this.model);
    },
    __getDragging: function __getDragging(event) {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          left = _this$$el$getBounding.left,
          width = _this$$el$getBounding.width,
          sensitivity = this.dragOnlyRange ? 0 : this.$refs.minThumb.offsetWidth / (2 * width),
          diff = this.max - this.min;

      var dragging = {
        left: left,
        width: width,
        valueMin: this.model.min,
        valueMax: this.model.max,
        ratioMin: (this.model.min - this.min) / diff,
        ratioMax: (this.model.max - this.min) / diff
      };
      var ratio = getRatio(event, dragging, this.$q.lang.rtl),
          type;

      if (this.dragOnlyRange !== true && ratio < dragging.ratioMin + sensitivity) {
        type = dragType.MIN;
      } else if (this.dragOnlyRange === true || ratio < dragging.ratioMax - sensitivity) {
        if (this.dragRange || this.dragOnlyRange) {
          type = dragType.RANGE;
          Object.assign(dragging, {
            offsetRatio: ratio,
            offsetModel: getModel(ratio, this.min, this.max, this.step, this.decimals),
            rangeValue: dragging.valueMax - dragging.valueMin,
            rangeRatio: dragging.ratioMax - dragging.ratioMin
          });
        } else {
          type = dragging.ratioMax - ratio < ratio - dragging.ratioMin ? dragType.MAX : dragType.MIN;
        }
      } else {
        type = dragType.MAX;
      }

      dragging.type = type;
      this.__nextFocus = void 0;
      return dragging;
    },
    __updatePosition: function __updatePosition(event) {
      var dragging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dragging;
      var ratio = getRatio(event, dragging, this.$q.lang.rtl),
          model = getModel(ratio, this.min, this.max, this.step, this.decimals),
          pos;

      switch (dragging.type) {
        case dragType.MIN:
          if (ratio <= dragging.ratioMax) {
            pos = {
              minR: ratio,
              maxR: dragging.ratioMax,
              min: model,
              max: dragging.valueMax
            };
            this.__nextFocus = 'min';
          } else {
            pos = {
              minR: dragging.ratioMax,
              maxR: ratio,
              min: dragging.valueMax,
              max: model
            };
            this.__nextFocus = 'max';
          }

          break;

        case dragType.MAX:
          if (ratio >= dragging.ratioMin) {
            pos = {
              minR: dragging.ratioMin,
              maxR: ratio,
              min: dragging.valueMin,
              max: model
            };
            this.__nextFocus = 'max';
          } else {
            pos = {
              minR: ratio,
              maxR: dragging.ratioMin,
              min: model,
              max: dragging.valueMin
            };
            this.__nextFocus = 'min';
          }

          break;

        case dragType.RANGE:
          var ratioDelta = ratio - dragging.offsetRatio,
              minR = between(dragging.ratioMin + ratioDelta, 0, 1 - dragging.rangeRatio),
              modelDelta = model - dragging.offsetModel,
              min = between(dragging.valueMin + modelDelta, this.min, this.max - dragging.rangeValue);
          pos = {
            minR: minR,
            maxR: minR + dragging.rangeRatio,
            min: parseFloat(min.toFixed(this.decimals)),
            max: parseFloat((min + dragging.rangeValue).toFixed(this.decimals))
          };
          break;
      }

      this.model = {
        min: pos.min,
        max: pos.max
      }; // If either of the values to be emitted are null, set them to the defaults the user has entered.

      if (this.model.min === null || this.model.max === null) {
        this.model.min = pos.min || this.min;
        this.model.max = pos.max || this.max;
      }

      if (this.snap !== true || this.step === 0) {
        this.curMinRatio = pos.minR;
        this.curMaxRatio = pos.maxR;
      } else {
        var diff = this.max - this.min;
        this.curMinRatio = (this.model.min - this.min) / diff;
        this.curMaxRatio = (this.model.max - this.min) / diff;
      }
    },
    __focus: function __focus(which) {
      this.focus = which;
    },
    __keydown: function __keydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }

      Object(utils_event["j" /* stopAndPrevent */])(evt);
      var step = ([34, 33].includes(evt.keyCode) ? 10 : 1) * this.computedStep,
          offset = [34, 37, 40].includes(evt.keyCode) ? -step : step;

      if (this.dragOnlyRange) {
        var interval = this.dragOnlyRange ? this.model.max - this.model.min : 0;
        var min = between(parseFloat((this.model.min + offset).toFixed(this.decimals)), this.min, this.max - interval);
        this.model = {
          min: min,
          max: parseFloat((min + interval).toFixed(this.decimals))
        };
      } else if (this.focus === false) {
        return;
      } else {
        var which = this.focus;
        this.model = QRange_objectSpread({}, this.model, defineProperty_default()({}, which, between(parseFloat((this.model[which] + offset).toFixed(this.decimals)), which === 'min' ? this.min : this.model.min, which === 'max' ? this.max : this.model.max)));
      }

      this.__updateValue();
    },
    __getThumb: function __getThumb(h, which) {
      return h('div', {
        ref: which + 'Thumb',
        staticClass: 'q-slider__thumb-container absolute non-selectable',
        style: this[which + 'ThumbStyle'],
        class: this[which + 'ThumbClass'],
        on: this[which + 'Events'],
        attrs: {
          tabindex: this.dragOnlyRange !== true ? this.computedTabindex : null
        }
      }, [h('svg', {
        staticClass: 'q-slider__thumb absolute',
        attrs: {
          width: '21',
          height: '21'
        }
      }, [h('circle', {
        attrs: {
          cx: '10.5',
          cy: '10.5',
          r: '7.875'
        }
      })]), this.label === true || this.labelAlways === true ? h('div', {
        staticClass: 'q-slider__pin absolute flex flex-center',
        class: this[which + 'PinClass']
      }, [h('div', {
        staticClass: 'q-slider__pin-value-marker'
      }, [h('div', {
        staticClass: 'q-slider__pin-value-marker-bg'
      }), h('div', {
        staticClass: 'q-slider__pin-value-marker-text',
        class: this[which + 'PinTextClass']
      }, [this[which + 'Label']])])]) : null, h('div', {
        staticClass: 'q-slider__focus-ring'
      })]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: this.value.min === null || this.value.max === null ? 'q-slider--no-value' : void 0,
      attrs: {
        role: 'slider',
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
        'data-step': this.step,
        'aria-disabled': this.disable,
        tabindex: this.dragOnlyRange && !this.$q.platform.is.mobile ? this.computedTabindex : null
      },
      class: this.classes,
      on: this.events,
      directives: this.editable ? [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          horizontal: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      }] : null
    }, [h('div', {
      staticClass: 'q-slider__track-container absolute overflow-hidden'
    }, [h('div', {
      staticClass: 'q-slider__track absolute-full',
      style: this.trackStyle
    }), this.markers === true ? h('div', {
      staticClass: 'q-slider__track-markers absolute-full fit',
      style: this.markerStyle
    }) : null]), this.__getThumb(h, 'min'), this.__getThumb(h, 'max')]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/range/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/rating/QRating.js






/* harmony default export */ var QRating = (vue_runtime_esm["a" /* default */].extend({
  name: 'QRating',
  mixins: [mixins_size["a" /* default */]],
  props: {
    value: {
      type: Number,
      required: true
    },
    max: {
      type: [String, Number],
      default: 5
    },
    icon: [String, Array],
    iconSelected: [String, Array],
    color: String,
    noReset: Boolean,
    readonly: Boolean,
    disable: Boolean
  },
  data: function data() {
    return {
      mouseModel: 0
    };
  },
  computed: {
    editable: function editable() {
      return !this.readonly && !this.disable;
    },
    classes: function classes() {
      return "q-rating--".concat(this.editable === true ? '' : 'non-', "editable") + (this.disable === true ? ' disabled' : '') + (this.color !== void 0 ? " text-".concat(this.color) : '');
    },
    iconData: function iconData() {
      var len = Array.isArray(this.icon) ? this.icon.length : 0,
          selectedLen = Array.isArray(this.iconSelected) ? this.iconSelected.length : 0;
      return {
        len: len,
        selectedLen: selectedLen,
        icon: len > 0 ? this.icon[len - 1] : this.icon,
        selected: selectedLen > 0 ? this.iconSelected[selectedLen - 1] : this.iconSelected
      };
    }
  },
  methods: {
    __set: function __set(value) {
      if (this.editable === true) {
        var model = between(parseInt(value, 10), 1, parseInt(this.max, 10)),
            newVal = this.noReset !== true && this.value === model ? 0 : model;
        newVal !== this.value && this.$emit('input', newVal);
        this.mouseModel = 0;
      }
    },
    __setHoverValue: function __setHoverValue(value) {
      if (this.editable === true) {
        this.mouseModel = value;
      }
    },
    __keyup: function __keyup(e, i) {
      switch (e.keyCode) {
        case 13:
        case 32:
          this.__set(i);

          return Object(utils_event["j" /* stopAndPrevent */])(e);

        case 37: // LEFT ARROW

        case 40:
          // DOWN ARROW
          if (this.$refs["rt".concat(i - 1)]) {
            this.$refs["rt".concat(i - 1)].focus();
          }

          return Object(utils_event["j" /* stopAndPrevent */])(e);

        case 39: // RIGHT ARROW

        case 38:
          // UP ARROW
          if (this.$refs["rt".concat(i + 1)]) {
            this.$refs["rt".concat(i + 1)].focus();
          }

          return Object(utils_event["j" /* stopAndPrevent */])(e);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var child = [],
        tabindex = this.editable === true ? 0 : null,
        icons = this.iconData;

    var _loop = function _loop(i) {
      var active = !_this.mouseModel && _this.value >= i || _this.mouseModel && _this.mouseModel >= i,
          exSelected = _this.mouseModel && _this.value >= i && _this.mouseModel < i,
          name = icons.selected !== void 0 && (active === true || exSelected === true) ? i <= icons.selectedLen ? _this.iconSelected[i - 1] : icons.selected : i <= icons.len ? _this.icon[i - 1] : icons.icon;
      child.push(h(QIcon["a" /* default */], {
        key: i,
        ref: "rt".concat(i),
        staticClass: 'q-rating__icon',
        class: {
          'q-rating__icon--active': active,
          'q-rating__icon--exselected': exSelected,
          'q-rating__icon--hovered': _this.mouseModel === i
        },
        props: {
          name: name || _this.$q.iconSet.rating.icon
        },
        attrs: {
          tabindex: tabindex
        },
        on: {
          click: function click() {
            return _this.__set(i);
          },
          mouseover: function mouseover() {
            return _this.__setHoverValue(i);
          },
          mouseout: function mouseout() {
            _this.mouseModel = 0;
          },
          focus: function focus() {
            return _this.__setHoverValue(i);
          },
          blur: function blur() {
            _this.mouseModel = 0;
          },
          keyup: function keyup(e) {
            _this.__keyup(e, i);
          }
        }
      }));
    };

    for (var i = 1; i <= this.max; i++) {
      _loop(i);
    }

    return h('div', {
      staticClass: 'q-rating row inline items-center',
      class: this.classes,
      style: this.sizeStyle,
      on: this.$listeners
    }, child);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/rating/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js










/* harmony default export */ var QScrollArea = (vue_runtime_esm["a" /* default */].extend({
  name: 'QScrollArea',
  directives: {
    TouchPan: TouchPan
  },
  props: {
    thumbStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    contentStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    contentActiveStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    delay: {
      type: [String, Number],
      default: 1000
    },
    horizontal: Boolean
  },
  data: function data() {
    return {
      active: false,
      hover: false,
      containerWidth: 0,
      containerHeight: 0,
      scrollPosition: 0,
      scrollSize: 0
    };
  },
  computed: {
    thumbHidden: function thumbHidden() {
      return this.scrollSize <= this.containerSize || this.active === false && this.hover === false;
    },
    thumbSize: function thumbSize() {
      return Math.round(between(this.containerSize * this.containerSize / this.scrollSize, 50, this.containerSize));
    },
    style: function style() {
      var pos = this.scrollPercentage * (this.containerSize - this.thumbSize);
      return Object.assign({}, this.thumbStyle, this.horizontal === true ? {
        left: "".concat(pos, "px"),
        width: "".concat(this.thumbSize, "px")
      } : {
        top: "".concat(pos, "px"),
        height: "".concat(this.thumbSize, "px")
      });
    },
    mainStyle: function mainStyle() {
      return this.thumbHidden === true ? this.contentStyle : this.contentActiveStyle;
    },
    scrollPercentage: function scrollPercentage() {
      var p = between(this.scrollPosition / (this.scrollSize - this.containerSize), 0, 1);
      return Math.round(p * 10000) / 10000;
    },
    direction: function direction() {
      return this.horizontal === true ? 'right' : 'down';
    },
    containerSize: function containerSize() {
      return this.horizontal === true ? this.containerWidth : this.containerHeight;
    },
    dirProps: function dirProps() {
      return this.horizontal === true ? {
        el: 'scrollLeft',
        wheel: 'x'
      } : {
        el: 'scrollTop',
        wheel: 'y'
      };
    },
    thumbClass: function thumbClass() {
      return "q-scrollarea__thumb--".concat(this.horizontal === true ? 'h absolute-bottom' : 'v absolute-right') + (this.thumbHidden === true ? ' q-scrollarea__thumb--invisible' : '');
    }
  },
  methods: {
    getScrollTarget: function getScrollTarget() {
      return this.$refs.target;
    },
    getScrollPosition: function getScrollPosition() {
      return this.$q.platform.is.desktop === true ? this.scrollPosition : this.$refs.target[this.dirProps.el];
    },
    setScrollPosition: function setScrollPosition(offset, duration) {
      var fn = this.horizontal === true ? setHorizontalScrollPosition : scroll_setScrollPosition;
      fn(this.$refs.target, offset, duration);
    },
    __updateContainer: function __updateContainer(_ref) {
      var height = _ref.height,
          width = _ref.width;

      if (this.containerWidth !== width) {
        this.containerWidth = width;

        this.__setActive(true, true);
      }

      if (this.containerHeight !== height) {
        this.containerHeight = height;

        this.__setActive(true, true);
      }
    },
    __updateScroll: function __updateScroll(_ref2) {
      var position = _ref2.position;

      if (this.scrollPosition !== position) {
        this.scrollPosition = position;

        this.__setActive(true, true);
      }
    },
    __updateScrollSize: function __updateScrollSize(_ref3) {
      var height = _ref3.height,
          width = _ref3.width;

      if (this.horizontal) {
        if (this.scrollSize !== width) {
          this.scrollSize = width;

          this.__setActive(true, true);
        }
      } else {
        if (this.scrollSize !== height) {
          this.scrollSize = height;

          this.__setActive(true, true);
        }
      }
    },
    __panThumb: function __panThumb(e) {
      if (e.isFirst === true) {
        this.refPos = this.scrollPosition;

        this.__setActive(true, true);
      }

      if (e.isFinal === true) {
        this.__setActive(false);
      }

      var multiplier = (this.scrollSize - this.containerSize) / (this.containerSize - this.thumbSize);
      var distance = this.horizontal ? e.distance.x : e.distance.y;
      var pos = this.refPos + (e.direction === this.direction ? 1 : -1) * distance * multiplier;

      this.__setScroll(pos);
    },
    __panContainer: function __panContainer(e) {
      if (e.isFirst === true) {
        this.refPos = this.scrollPosition;

        this.__setActive(true, true);
      }

      if (e.isFinal === true) {
        this.__setActive(false);
      }

      var distance = e.distance[this.horizontal === true ? 'x' : 'y'];
      var pos = this.refPos + (e.direction === this.direction ? -1 : 1) * distance;

      this.__setScroll(pos);

      if (pos > 0 && pos + this.containerSize < this.scrollSize) {
        Object(utils_event["g" /* prevent */])(e.evt);
      }
    },
    __mouseWheel: function __mouseWheel(e) {
      var el = this.$refs.target;
      el[this.dirProps.el] += Object(utils_event["c" /* getMouseWheelDistance */])(e)[this.dirProps.wheel];

      if (el[this.dirProps.el] > 0 && el[this.dirProps.el] + this.containerSize < this.scrollSize) {
        Object(utils_event["g" /* prevent */])(e);
      }
    },
    __setActive: function __setActive(active, timer) {
      clearTimeout(this.timer);

      if (active === this.active) {
        if (active && this.timer) {
          this.__startTimer();
        }

        return;
      }

      if (active) {
        this.active = true;

        if (timer) {
          this.__startTimer();
        }
      } else {
        this.active = false;
      }
    },
    __startTimer: function __startTimer() {
      var _this = this;

      this.timer = setTimeout(function () {
        _this.active = false;
        _this.timer = null;
      }, this.delay);
    },
    __setScroll: function __setScroll(offset) {
      this.$refs.target[this.dirProps.el] = offset;
    }
  },
  render: function render(h) {
    var _this2 = this;

    if (this.$q.platform.is.desktop !== true) {
      return h('div', {
        staticClass: 'q-scrollarea',
        style: this.contentStyle
      }, [h('div', {
        ref: 'target',
        staticClass: 'scroll relative-position fit'
      }, Object(utils_slot["a" /* default */])(this, 'default'))]);
    }

    return h('div', {
      staticClass: 'q-scrollarea',
      on: {
        mouseenter: function mouseenter() {
          _this2.hover = true;
        },
        mouseleave: function mouseleave() {
          _this2.hover = false;
        }
      }
    }, [h('div', {
      ref: 'target',
      staticClass: 'scroll relative-position overflow-hidden fit',
      on: {
        wheel: this.__mouseWheel
      },
      directives: [{
        name: 'touch-pan',
        modifiers: {
          vertical: !this.horizontal,
          horizontal: this.horizontal,
          mightPrevent: true
        },
        value: this.__panContainer
      }]
    }, [h('div', {
      staticClass: 'absolute',
      style: this.mainStyle,
      class: "full-".concat(this.horizontal === true ? 'height' : 'width')
    }, [h(QResizeObserver, {
      on: {
        resize: this.__updateScrollSize
      }
    }), Object(utils_slot["a" /* default */])(this, 'default')]), h(QScrollObserver, {
      props: {
        horizontal: this.horizontal
      },
      on: {
        scroll: this.__updateScroll
      }
    })]), h(QResizeObserver, {
      on: {
        resize: this.__updateContainer
      }
    }), h('div', {
      staticClass: 'q-scrollarea__thumb',
      style: this.style,
      class: this.thumbClass,
      directives: this.thumbHidden === true ? null : [{
        name: 'touch-pan',
        modifiers: {
          vertical: !this.horizontal,
          horizontal: this.horizontal,
          prevent: true,
          mouse: true,
          mouseAllDir: true
        },
        value: this.__panThumb
      }]
    })]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/scroll-area/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/mixins/virtual-scroll.js









function virtual_scroll_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function virtual_scroll_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { virtual_scroll_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { virtual_scroll_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var aggBucketSize = 1000;

function sumFn(acc, h) {
  return acc + h;
}

function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, stickyStart, stickyEnd) {
  var parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent,
      propElSize = horizontal === true ? 'offsetWidth' : 'offsetHeight',
      details = {
    scrollStart: 0,
    scrollViewSize: -stickyStart - stickyEnd,
    scrollMaxSize: 0,
    offsetStart: -stickyStart,
    offsetEnd: -stickyEnd
  };

  if (horizontal === true) {
    if (parent === window) {
      details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
      details.scrollViewSize += window.innerWidth;
    } else {
      details.scrollStart = parentCalc.scrollLeft;
      details.scrollViewSize += parentCalc.clientWidth;
    }

    details.scrollMaxSize = parentCalc.scrollWidth;
  } else {
    if (parent === window) {
      details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
      details.scrollViewSize += window.innerHeight;
    } else {
      details.scrollStart = parentCalc.scrollTop;
      details.scrollViewSize += parentCalc.clientHeight;
    }

    details.scrollMaxSize = parentCalc.scrollHeight;
  }

  if (beforeRef !== void 0) {
    for (var el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
      details.offsetStart += el[propElSize];
    }
  }

  if (afterRef !== void 0) {
    for (var _el = afterRef.nextElementSibling; _el !== null; _el = _el.nextElementSibling) {
      details.offsetEnd += _el[propElSize];
    }
  }

  if (child !== parent) {
    var parentRect = parentCalc.getBoundingClientRect(),
        childRect = child.getBoundingClientRect();

    if (horizontal === true) {
      details.offsetStart += childRect.left - parentRect.left;
      details.offsetEnd -= childRect.width;
    } else {
      details.offsetStart += childRect.top - parentRect.top;
      details.offsetEnd -= childRect.height;
    }

    if (parent !== window) {
      details.offsetStart += details.scrollStart;
    }

    details.offsetEnd += details.scrollMaxSize - details.offsetStart;
  }

  return details;
}

function virtual_scroll_setScroll(parent, scroll, horizontal) {
  if (parent === window) {
    if (horizontal === true) {
      window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    } else {
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
    }
  } else {
    parent[horizontal === true ? 'scrollLeft' : 'scrollTop'] = scroll;
  }
}

function sumSize(sizeAgg, size, from, to) {
  if (from >= to) {
    return 0;
  }

  var lastTo = size.length,
      fromAgg = Math.floor(from / aggBucketSize),
      toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
  var total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);

  if (from % aggBucketSize !== 0) {
    total -= size.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
  }

  if (to % aggBucketSize !== 0 && to !== lastTo) {
    total -= size.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
  }

  return total;
}

var commonVirtScrollProps = {
  virtualScrollSliceSize: {
    type: Number,
    default: 30
  },
  virtualScrollItemSize: {
    type: Number,
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: Number,
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: Number,
    default: 0
  }
};
var commonVirtPropsList = Object.keys(commonVirtScrollProps);
/* harmony default export */ var virtual_scroll = ({
  props: virtual_scroll_objectSpread({
    virtualScrollHorizontal: Boolean
  }, commonVirtScrollProps),
  data: function data() {
    return {
      virtualScrollSliceRange: {
        from: 0,
        to: 0
      }
    };
  },
  watch: {
    virtualScrollHorizontal: function virtualScrollHorizontal() {
      this.__setVirtualScrollSize();
    },
    needsReset: function needsReset() {
      this.reset();
    }
  },
  computed: {
    needsReset: function needsReset() {
      var _this = this;

      return ['virtualScrollItemSize', 'virtualScrollHorizontal'].map(function (p) {
        return _this[p];
      }).join(';');
    }
  },
  methods: {
    reset: function reset() {
      this.__resetVirtualScroll(this.prevToIndex, true);
    },
    scrollTo: function scrollTo(toIndex) {
      var scrollEl = this.__getVirtualScrollTarget();

      if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
        return;
      }

      this.__setVirtualScrollSliceRange(scrollEl, getScrollDetails(scrollEl, this.__getVirtualScrollEl(), this.$refs.before, this.$refs.after, this.virtualScrollHorizontal, this.virtualScrollStickySizeStart, this.virtualScrollStickySizeEnd), Math.min(this.virtualScrollLength - 1, Math.max(0, parseInt(toIndex, 10) || 0)), 0, this.prevToIndex > -1 && toIndex > this.prevToIndex ? 'end' : 'start');
    },
    __onVirtualScrollEvt: function __onVirtualScrollEvt() {
      var scrollEl = this.__getVirtualScrollTarget();

      if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
        return;
      }

      var scrollDetails = getScrollDetails(scrollEl, this.__getVirtualScrollEl(), this.$refs.before, this.$refs.after, this.virtualScrollHorizontal, this.virtualScrollStickySizeStart, this.virtualScrollStickySizeEnd),
          scrollMaxStart = scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd),
          listLastIndex = this.virtualScrollLength - 1;

      if (this.prevScrollStart === scrollDetails.scrollStart) {
        return;
      }

      this.prevScrollStart = void 0;

      if (scrollMaxStart > 0 && scrollDetails.scrollStart >= scrollMaxStart) {
        this.__setVirtualScrollSliceRange(scrollEl, scrollDetails, this.virtualScrollLength - 1, scrollMaxStart - this.virtualScrollSizesAgg.reduce(sumFn, 0));

        return;
      }

      var toIndex = 0,
          listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart;

      for (var j = 0; listOffset >= this.virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
        listOffset -= this.virtualScrollSizesAgg[j];
        toIndex += aggBucketSize;
      }

      while (listOffset > 0 && toIndex < listLastIndex) {
        listOffset -= this.virtualScrollSizes[toIndex];

        if (listOffset > -scrollDetails.scrollViewSize) {
          toIndex++;
        }
      }

      this.__setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, listOffset);
    },
    __setVirtualScrollSliceRange: function __setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
      var _this2 = this;

      var from = Math.max(0, Math.ceil(toIndex - (align === void 0 ? 3 : 2) * this.virtualScrollSliceSizeComputed / 6)),
          to = from + this.virtualScrollSliceSizeComputed;

      if (to > this.virtualScrollLength) {
        to = this.virtualScrollLength;
        from = Math.max(0, to - this.virtualScrollSliceSizeComputed);
      }

      this.__emitScroll(toIndex);

      var rangeChanged = from !== this.virtualScrollSliceRange.from || to !== this.virtualScrollSliceRange.to;

      if (rangeChanged === false && align === void 0) {
        return;
      }

      if (rangeChanged === true) {
        this.virtualScrollSliceRange = {
          from: from,
          to: to
        };
        this.virtualScrollPaddingBefore = sumSize(this.virtualScrollSizesAgg, this.virtualScrollSizes, 0, from);
        this.virtualScrollPaddingAfter = sumSize(this.virtualScrollSizesAgg, this.virtualScrollSizes, to, this.virtualScrollLength);
      }

      this.$nextTick(function () {
        if (rangeChanged === true) {
          var contentEl = _this2.$refs.content;

          if (contentEl !== void 0) {
            var children = contentEl.children;

            for (var i = children.length - 1; i >= 0; i--) {
              var index = from + i,
                  diff = children[i][_this2.virtualScrollHorizontal === true ? 'offsetWidth' : 'offsetHeight'] - _this2.virtualScrollSizes[index];

              if (diff !== 0) {
                _this2.virtualScrollSizes[index] += diff;
                _this2.virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
              }
            }
          }
        }

        var posStart = _this2.virtualScrollSizes.slice(from, toIndex).reduce(sumFn, scrollDetails.offsetStart + _this2.virtualScrollPaddingBefore),
            posEnd = posStart + _this2.virtualScrollSizes[toIndex];

        var scrollPosition = posStart + offset;

        if (align !== void 0) {
          scrollPosition = scrollDetails.scrollStart < posStart && posEnd < scrollDetails.scrollStart + scrollDetails.scrollViewSize ? scrollDetails.scrollStart : align === 'end' ? posEnd - scrollDetails.scrollViewSize : posStart;
        }

        _this2.prevScrollStart = scrollPosition;

        _this2.__setScroll(scrollEl, scrollPosition, _this2.virtualScrollHorizontal);
      });
    },
    __resetVirtualScroll: function __resetVirtualScroll(toIndex, fullReset) {
      var _this3 = this;

      var defaultSize = this.virtualScrollItemSize;

      if (fullReset === true || Array.isArray(this.virtualScrollSizes) === false) {
        this.virtualScrollSizes = [];
      }

      var oldVirtualScrollSizesLength = this.virtualScrollSizes.length;
      this.virtualScrollSizes.length = this.virtualScrollLength;

      for (var i = this.virtualScrollLength - 1; i >= oldVirtualScrollSizesLength; i--) {
        this.virtualScrollSizes[i] = defaultSize;
      }

      var jMax = Math.floor((this.virtualScrollLength - 1) / aggBucketSize);
      this.virtualScrollSizesAgg = [];

      for (var j = 0; j <= jMax; j++) {
        var size = 0;
        var iMax = Math.min((j + 1) * aggBucketSize, this.virtualScrollLength);

        for (var _i = j * aggBucketSize; _i < iMax; _i++) {
          size += this.virtualScrollSizes[_i];
        }

        this.virtualScrollSizesAgg.push(size);
      }

      this.prevToIndex = -1;
      this.prevScrollStart = void 0;

      if (toIndex >= 0) {
        this.$nextTick(function () {
          _this3.scrollTo(toIndex);
        });
      } else {
        this.virtualScrollPaddingBefore = sumSize(this.virtualScrollSizesAgg, this.virtualScrollSizes, 0, this.virtualScrollSliceRange.from);
        this.virtualScrollPaddingAfter = sumSize(this.virtualScrollSizesAgg, this.virtualScrollSizes, this.virtualScrollSliceRange.to, this.virtualScrollLength);

        this.__onVirtualScrollEvt();
      }
    },
    __setVirtualScrollSize: function __setVirtualScrollSize() {
      if (this.virtualScrollHorizontal === true) {
        this.virtualScrollSliceSizeComputed = typeof window === 'undefined' ? this.virtualScrollSliceSize : Math.max(this.virtualScrollSliceSize, Math.ceil(window.innerWidth / this.virtualScrollItemSize * 2));
      } else {
        this.virtualScrollSliceSizeComputed = typeof window === 'undefined' ? this.virtualScrollSliceSize : Math.max(this.virtualScrollSliceSize, Math.ceil(window.innerHeight / this.virtualScrollItemSize * 2));
      }
    },
    __padVirtualScroll: function __padVirtualScroll(h, tag, content) {
      var paddingSize = this.virtualScrollHorizontal === true ? 'width' : 'height';
      return [tag === 'tbody' ? h(tag, {
        staticClass: 'q-virtual-scroll__padding',
        key: 'before',
        ref: 'before'
      }, [h('tr', [h('td', {
        style: defineProperty_default()({}, paddingSize, "".concat(this.virtualScrollPaddingBefore, "px")),
        attrs: {
          colspan: '100%'
        }
      })])]) : h(tag, {
        staticClass: 'q-virtual-scroll__padding',
        key: 'before',
        ref: 'before',
        style: defineProperty_default()({}, paddingSize, "".concat(this.virtualScrollPaddingBefore, "px"))
      }), h(tag, {
        staticClass: 'q-virtual-scroll__content',
        key: 'content',
        ref: 'content'
      }, content), tag === 'tbody' ? h(tag, {
        staticClass: 'q-virtual-scroll__padding',
        key: 'after',
        ref: 'after'
      }, [h('tr', [h('td', {
        style: defineProperty_default()({}, paddingSize, "".concat(this.virtualScrollPaddingAfter, "px")),
        attrs: {
          colspan: '100%'
        }
      })])]) : h(tag, {
        staticClass: 'q-virtual-scroll__padding',
        key: 'after',
        ref: 'after',
        style: defineProperty_default()({}, paddingSize, "".concat(this.virtualScrollPaddingAfter, "px"))
      })];
    },
    __emitScroll: function __emitScroll(index) {
      if (this.prevToIndex !== index) {
        this.$listeners['virtual-scroll'] !== void 0 && this.$emit('virtual-scroll', {
          index: index,
          from: this.virtualScrollSliceRange.from,
          to: this.virtualScrollSliceRange.to - 1,
          direction: index < this.prevToIndex ? 'decrease' : 'increase'
        });
        this.prevToIndex = index;
      }
    }
  },
  created: function created() {
    this.__setVirtualScrollSize();
  },
  beforeMount: function beforeMount() {
    this.__onVirtualScrollEvt = Object(debounce["a" /* default */])(this.__onVirtualScrollEvt, 70);
    this.__setScroll = frame_debounce(virtual_scroll_setScroll);

    this.__setVirtualScrollSize();
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/select/QSelect.js















function QSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QSelect_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QSelect_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var validateNewValueMode = function validateNewValueMode(v) {
  return ['add', 'add-unique', 'toggle'].includes(v);
};

/* harmony default export */ var QSelect = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSelect',
  mixins: [QField, virtual_scroll, composition],
  props: {
    value: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueSanitize: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: Boolean,
    optionsSelectedClass: String,
    optionsCover: Boolean,
    optionsSanitize: Boolean,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    transitionShow: String,
    transitionHide: String,
    behavior: {
      type: String,
      validator: function validator(v) {
        return ['default', 'menu', 'dialog'].includes(v);
      },
      default: 'default'
    }
  },
  data: function data() {
    return {
      menu: false,
      dialog: false,
      optionIndex: -1,
      inputValue: '',
      dialogFieldFocused: false
    };
  },
  watch: {
    innerValue: {
      handler: function handler() {
        if (this.useInput === true && this.fillInput === true && this.multiple !== true && // Prevent re-entering in filter while filtering
        // Also prevent clearing inputValue while filtering
        this.innerLoading !== true && (this.dialog !== true && this.menu !== true || this.hasValue !== true)) {
          this.__resetInputValue();

          if (this.dialog === true || this.menu === true) {
            this.filter('');
          }
        }
      },
      immediate: true
    },
    menu: function menu(show) {
      this.__updateMenu(show);
    }
  },
  computed: {
    virtualScrollLength: function virtualScrollLength() {
      return Array.isArray(this.options) ? this.options.length : 0;
    },
    fieldClass: function fieldClass() {
      return "q-select q-field--auto-height q-select--with".concat(this.useInput !== true ? 'out' : '', "-input");
    },
    computedInputClass: function computedInputClass() {
      if (this.hideSelected === true || this.innerValue.length === 0) {
        return this.inputClass;
      }

      return this.inputClass === void 0 ? 'q-select__input--padding' : [this.inputClass, 'q-select__input--padding'];
    },
    menuContentClass: function menuContentClass() {
      return (this.virtualScrollHorizontal === true ? 'q-virtual-scroll--horizontal' : '') + (this.popupContentClass ? ' ' + this.popupContentClass : '');
    },
    menuClass: function menuClass() {
      return this.menuContentClass + (this.optionsDark === true ? ' q-select__menu--dark' : '');
    },
    innerValue: function innerValue() {
      var _this = this;

      var mapNull = this.mapOptions === true && this.multiple !== true,
          val = this.value !== void 0 && (this.value !== null || mapNull === true) ? this.multiple === true && Array.isArray(this.value) ? this.value : [this.value] : [];
      return this.mapOptions === true && Array.isArray(this.options) === true ? this.value === null && mapNull === true ? val.map(function (v) {
        return _this.__getOption(v);
      }).filter(function (v) {
        return v !== null;
      }) : val.map(function (v) {
        return _this.__getOption(v);
      }) : val;
    },
    noOptions: function noOptions() {
      return this.virtualScrollLength === 0;
    },
    selectedString: function selectedString() {
      var _this2 = this;

      return this.innerValue.map(function (opt) {
        return _this2.__getOptionLabel(opt);
      }).join(', ');
    },
    displayAsText: function displayAsText() {
      return this.displayValueSanitize === true || this.displayValue === void 0 && (this.optionsSanitize === true || this.innerValue.some(function (opt) {
        return opt !== null && opt.sanitize === true;
      }));
    },
    selectedScope: function selectedScope() {
      var _this3 = this;

      var tabindex = this.focused === true ? 0 : -1;
      return this.innerValue.map(function (opt, i) {
        return {
          index: i,
          opt: opt,
          sanitize: _this3.optionsSanitize === true || opt.sanitize === true,
          selected: true,
          removeAtIndex: _this3.__removeAtIndexAndFocus,
          toggleOption: _this3.toggleOption,
          tabindex: tabindex
        };
      });
    },
    optionScope: function optionScope() {
      var _this4 = this;

      if (this.virtualScrollLength === 0) {
        return [];
      }

      var _this$virtualScrollSl = this.virtualScrollSliceRange,
          from = _this$virtualScrollSl.from,
          to = _this$virtualScrollSl.to;
      return this.options.slice(from, to).map(function (opt, i) {
        var disable = _this4.__isDisabled(opt);

        var index = from + i;
        var itemProps = {
          clickable: true,
          active: false,
          activeClass: _this4.optionsSelectedClass,
          manualFocus: true,
          focused: false,
          disable: disable,
          tabindex: -1,
          dense: _this4.optionsDense,
          dark: _this4.optionsDark
        };

        if (disable !== true) {
          _this4.__isSelected(opt) === true && (itemProps.active = true);
          _this4.optionIndex === index && (itemProps.focused = true);
        }

        var itemEvents = {
          click: function click() {
            _this4.toggleOption(opt);
          }
        };

        if (_this4.$q.platform.is.desktop === true) {
          itemEvents.mousemove = function () {
            _this4.setOptionIndex(index);
          };
        }

        return {
          index: index,
          opt: opt,
          sanitize: _this4.optionsSanitize === true || opt.sanitize === true,
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption: _this4.toggleOption,
          setOptionIndex: _this4.setOptionIndex,
          itemProps: itemProps,
          itemEvents: itemEvents
        };
      });
    },
    dropdownArrowIcon: function dropdownArrowIcon() {
      return this.dropdownIcon !== void 0 ? this.dropdownIcon : this.$q.iconSet.arrow.dropdown;
    },
    squaredMenu: function squaredMenu() {
      return this.optionsCover === false && this.outlined !== true && this.standout !== true && this.borderless !== true && this.rounded !== true;
    }
  },
  methods: {
    removeAtIndex: function removeAtIndex(index) {
      if (index > -1 && index < this.innerValue.length) {
        if (this.multiple === true) {
          var model = [].concat(this.value);
          this.$emit('remove', {
            index: index,
            value: model.splice(index, 1)
          });
          this.$emit('input', model);
        } else {
          this.$emit('input', null);
        }
      }
    },
    __removeAtIndexAndFocus: function __removeAtIndexAndFocus(index) {
      this.removeAtIndex(index);

      this.__focus();
    },
    add: function add(opt, unique) {
      var val = this.emitValue === true ? this.__getOptionValue(opt) : opt;

      if (this.multiple !== true) {
        this.$emit('input', val);
        return;
      }

      if (this.innerValue.length === 0) {
        this.$emit('add', {
          index: 0,
          value: val
        });
        this.$emit('input', this.multiple === true ? [val] : val);
        return;
      }

      if (unique === true && this.__isSelected(opt) === true) {
        return;
      }

      var model = [].concat(this.value);

      if (this.maxValues !== void 0 && model.length >= this.maxValues) {
        return;
      }

      this.$emit('add', {
        index: model.length,
        value: val
      });
      model.push(val);
      this.$emit('input', model);
    },
    toggleOption: function toggleOption(opt) {
      var _this5 = this;

      if (this.editable !== true || opt === void 0 || this.__isDisabled(opt) === true) {
        return;
      }

      var optValue = this.__getOptionValue(opt);

      if (this.multiple !== true) {
        this.updateInputValue(this.fillInput === true ? this.__getOptionLabel(opt) : '', true, true);
        this.hidePopup();

        if (isDeepEqual(this.__getOptionValue(this.value), optValue) !== true) {
          this.$emit('input', this.emitValue === true ? optValue : opt);
        }

        return;
      }

      (this.hasDialog !== true || this.dialogFieldFocused === true) && this.__focus();

      if (this.innerValue.length === 0) {
        var val = this.emitValue === true ? optValue : opt;
        this.$emit('add', {
          index: 0,
          value: val
        });
        this.$emit('input', this.multiple === true ? [val] : val);
        return;
      }

      var model = [].concat(this.value),
          index = this.value.findIndex(function (v) {
        return isDeepEqual(_this5.__getOptionValue(v), optValue);
      });

      if (index > -1) {
        this.$emit('remove', {
          index: index,
          value: model.splice(index, 1)
        });
      } else {
        if (this.maxValues !== void 0 && model.length >= this.maxValues) {
          return;
        }

        var _val = this.emitValue === true ? optValue : opt;

        this.$emit('add', {
          index: model.length,
          value: _val
        });
        model.push(_val);
      }

      this.$emit('input', model);
    },
    setOptionIndex: function setOptionIndex(index) {
      if (this.$q.platform.is.desktop !== true) {
        return;
      }

      var val = index > -1 && index < this.virtualScrollLength ? index : -1;

      if (this.optionIndex !== val) {
        this.optionIndex = val;
      }
    },
    __getOption: function __getOption(value) {
      var _this6 = this;

      return this.options.find(function (opt) {
        return isDeepEqual(_this6.__getOptionValue(opt), value);
      }) || value;
    },
    __getOptionValue: function __getOptionValue(opt) {
      if (typeof this.optionValue === 'function') {
        return this.optionValue(opt);
      }

      if (Object(opt) === opt) {
        return typeof this.optionValue === 'string' ? opt[this.optionValue] : opt.value;
      }

      return opt;
    },
    __getOptionLabel: function __getOptionLabel(opt) {
      if (typeof this.optionLabel === 'function') {
        return this.optionLabel(opt);
      }

      if (Object(opt) === opt) {
        return typeof this.optionLabel === 'string' ? opt[this.optionLabel] : opt.label;
      }

      return opt;
    },
    __isDisabled: function __isDisabled(opt) {
      if (typeof this.optionDisable === 'function') {
        return this.optionDisable(opt) === true;
      }

      if (Object(opt) === opt) {
        return typeof this.optionDisable === 'string' ? opt[this.optionDisable] === true : opt.disable === true;
      }

      return false;
    },
    __isSelected: function __isSelected(opt) {
      var _this7 = this;

      var val = this.__getOptionValue(opt);

      return this.innerValue.find(function (v) {
        return isDeepEqual(_this7.__getOptionValue(v), val);
      }) !== void 0;
    },
    __onTargetKeyup: function __onTargetKeyup(e) {
      // if ESC and we have an opened menu
      // then stop propagation (might be caught by a QDialog
      // and so it will also close the QDialog, which is wrong)
      if (e.keyCode === 27 && this.menu === true) {
        Object(utils_event["i" /* stop */])(e); // on ESC we need to close the dialog also

        this.hidePopup();
      }

      this.$emit('keyup', e);
    },
    __onTargetKeypress: function __onTargetKeypress(e) {
      this.$emit('keypress', e);
    },
    __onTargetKeydown: function __onTargetKeydown(e) {
      var _this8 = this;

      this.$emit('keydown', e);
      var tabShouldSelect = e.shiftKey !== true && this.multiple !== true && this.optionIndex > -1; // escape

      if (e.keyCode === 27) {
        return;
      } // tab


      if (e.keyCode === 9 && tabShouldSelect === false) {
        this.__closeMenu();

        return;
      }

      if (e.target !== this.$refs.target) {
        return;
      } // down


      if (e.keyCode === 40 && this.innerLoading !== true && this.menu === false) {
        Object(utils_event["j" /* stopAndPrevent */])(e);
        this.showPopup();
        return;
      } // backspace


      if (e.keyCode === 8 && this.multiple === true && this.inputValue.length === 0 && Array.isArray(this.value)) {
        this.removeAtIndex(this.value.length - 1);
        return;
      } // up, down


      var optionsLength = this.virtualScrollLength;

      if (e.keyCode === 38 || e.keyCode === 40) {
        Object(utils_event["j" /* stopAndPrevent */])(e);

        if (this.menu === true) {
          var index = this.optionIndex;

          do {
            index = normalizeToInterval(index + (e.keyCode === 38 ? -1 : 1), -1, optionsLength - 1);
          } while (index !== -1 && index !== this.optionIndex && this.__isDisabled(this.options[index]) === true);

          if (this.optionIndex !== index) {
            this.setOptionIndex(index);
            this.scrollTo(index);

            if (index >= 0 && this.useInput === true && this.fillInput === true) {
              var inputValue = this.__getOptionLabel(this.options[index]);

              if (this.inputValue !== inputValue) {
                this.inputValue = inputValue;
              }
            }
          }
        }
      } // keyboard search when not having use-input


      if (optionsLength > 0 && this.useInput !== true && e.keyCode >= 48 && e.keyCode <= 90) {
        this.menu !== true && this.showPopup(e); // clear search buffer if expired

        if (this.searchBuffer === void 0 || this.searchBufferExp < Date.now()) {
          this.searchBuffer = '';
        }

        var char = String.fromCharCode(e.keyCode).toLocaleLowerCase(),
            keyRepeat = this.searchBuffer.length === 1 && this.searchBuffer[0] === char;
        this.searchBufferExp = Date.now() + 1500;

        if (keyRepeat === false) {
          this.searchBuffer += char;
        }

        var searchRe = new RegExp('^' + this.searchBuffer.split('').join('.*'), 'i');
        var _index = this.optionIndex;

        if (keyRepeat === true || searchRe.test(this.__getOptionLabel(this.options[_index])) !== true) {
          do {
            _index = normalizeToInterval(_index + 1, -1, optionsLength - 1);
          } while (_index !== this.optionIndex && (this.__isDisabled(this.options[_index]) === true || searchRe.test(this.__getOptionLabel(this.options[_index])) !== true));
        }

        if (this.optionIndex !== _index) {
          this.$nextTick(function () {
            _this8.setOptionIndex(_index);

            _this8.scrollTo(_index);

            if (_index >= 0 && _this8.useInput === true && _this8.fillInput === true) {
              var _inputValue = _this8.__getOptionLabel(_this8.options[_index]);

              if (_this8.inputValue !== _inputValue) {
                _this8.inputValue = _inputValue;
              }
            }
          });
        }

        return;
      } // enter, space (when not using use-input), or tab (when not using multiple and option selected)


      if (e.target !== this.$refs.target || e.keyCode !== 13 && (this.useInput === true || e.keyCode !== 32) && (tabShouldSelect === false || e.keyCode !== 9)) {
        return;
      }

      e.keyCode !== 9 && Object(utils_event["j" /* stopAndPrevent */])(e);

      if (this.optionIndex > -1 && this.optionIndex < optionsLength) {
        this.toggleOption(this.options[this.optionIndex]);
        return;
      }

      if (this.inputValue.length > 0 && (this.newValueMode !== void 0 || this.$listeners['new-value'] !== void 0)) {
        var done = function done(val, mode) {
          if (mode) {
            if (validateNewValueMode(mode) !== true) {
              console.error('QSelect: invalid new value mode - ' + mode);
              return;
            }
          } else {
            mode = _this8.newValueMode;
          }

          if (val !== void 0 && val !== null) {
            _this8[mode === 'toggle' ? 'toggleOption' : 'add'](val, mode === 'add-unique');
          }

          _this8.updateInputValue('', _this8.multiple !== true, true);
        };

        if (this.$listeners['new-value'] !== void 0) {
          this.$emit('new-value', this.inputValue, done);

          if (this.multiple !== true) {
            return;
          }
        } else {
          done(this.inputValue);
        }
      }

      if (this.menu === true) {
        this.__closeMenu();
      } else if (this.innerLoading !== true) {
        this.showPopup();
      }
    },
    __getVirtualScrollEl: function __getVirtualScrollEl() {
      return this.hasDialog === true ? this.$refs.menuContent : this.$refs.menu !== void 0 && this.$refs.menu.__portal !== void 0 ? this.$refs.menu.__portal.$el : void 0;
    },
    __getVirtualScrollTarget: function __getVirtualScrollTarget() {
      return this.__getVirtualScrollEl();
    },
    __getSelection: function __getSelection(h, fromDialog) {
      var _this9 = this;

      if (this.hideSelected === true) {
        return fromDialog !== true && this.hasDialog === true ? [h('span', {
          domProps: {
            'textContent': this.inputValue
          }
        })] : [];
      }

      if (this.$scopedSlots['selected-item'] !== void 0) {
        return this.selectedScope.map(function (scope) {
          return _this9.$scopedSlots['selected-item'](scope);
        });
      }

      if (this.$scopedSlots.selected !== void 0) {
        return this.$scopedSlots.selected();
      }

      if (this.useChips === true) {
        var tabindex = this.focused === true ? 0 : -1;
        return this.selectedScope.map(function (scope, i) {
          return h(QChip, {
            key: 'option-' + i,
            props: {
              removable: _this9.__isDisabled(scope.opt) !== true,
              dense: true,
              textColor: _this9.color,
              tabindex: tabindex
            },
            on: {
              remove: function remove() {
                scope.removeAtIndex(i);
              }
            }
          }, [h('span', {
            domProps: defineProperty_default()({}, scope.sanitize === true ? 'textContent' : 'innerHTML', _this9.__getOptionLabel(scope.opt))
          })]);
        });
      }

      return [h('span', {
        domProps: defineProperty_default()({}, this.displayAsText ? 'textContent' : 'innerHTML', this.displayValue !== void 0 ? this.displayValue : this.selectedString)
      })];
    },
    __getControl: function __getControl(h, fromDialog) {
      var child = this.__getSelection(h, fromDialog);

      if (this.useInput === true && (fromDialog === true || this.hasDialog === false)) {
        child.push(this.__getInput(h, fromDialog));
      } else if (this.editable === true) {
        var isShadowField = this.hasDialog === true && fromDialog !== true && this.menu === true;
        child.push(h('div', {
          // there can be only one (when dialog is opened the control in dialog should be target)
          ref: isShadowField === true ? void 0 : 'target',
          staticClass: 'no-outline',
          attrs: {
            tabindex: 0,
            id: isShadowField === true ? void 0 : this.targetUid
          },
          on: {
            keydown: this.__onTargetKeydown,
            keyup: this.__onTargetKeyup,
            keypress: this.__onTargetKeypress
          }
        }));
      }

      return h('div', {
        staticClass: 'q-field__native row items-center',
        attrs: this.$attrs
      }, child);
    },
    __getOptions: function __getOptions(h) {
      var _this10 = this;

      if (this.menu !== true) {
        return void 0;
      }

      var fn = this.$scopedSlots.option !== void 0 ? this.$scopedSlots.option : function (scope) {
        return h(QItem, {
          key: scope.index,
          props: scope.itemProps,
          on: scope.itemEvents
        }, [h(QItemSection, [h(QItemLabel, {
          domProps: defineProperty_default()({}, scope.sanitize === true ? 'textContent' : 'innerHTML', _this10.__getOptionLabel(scope.opt))
        })])]);
      };

      var options = this.__padVirtualScroll(h, 'div', this.optionScope.map(fn));

      if (this.$scopedSlots['before-options'] !== void 0) {
        options = this.$scopedSlots['before-options']().concat(options);
      }

      if (this.$scopedSlots['after-options'] !== void 0) {
        options = options.concat(this.$scopedSlots['after-options']());
      }

      return options;
    },
    __getInnerAppend: function __getInnerAppend(h) {
      return this.loading !== true && this.innerLoading !== true && this.hideDropdownIcon !== true ? [h(QIcon["a" /* default */], {
        staticClass: 'q-select__dropdown-icon',
        props: {
          name: this.dropdownArrowIcon
        }
      })] : null;
    },
    __getInput: function __getInput(h, fromDialog) {
      var on = {
        input: this.__onInput,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        change: this.__onChange,
        keydown: this.__onTargetKeydown,
        keyup: this.__onTargetKeyup,
        keypress: this.__onTargetKeypress
      };
      on.compositionstart = on.compositionupdate = on.compositionend = this.__onComposition;

      if (this.hasDialog === true) {
        on.click = utils_event["i" /* stop */];
      }

      return h('input', {
        ref: 'target',
        staticClass: 'q-select__input q-placeholder col',
        style: this.inputStyle,
        class: this.computedInputClass,
        domProps: {
          value: this.inputValue
        },
        attrs: QSelect_objectSpread({
          // required for Android in order to show ENTER key when in form
          type: 'search'
        }, this.$attrs, {
          tabindex: 0,
          autofocus: fromDialog === true ? false : this.autofocus,
          id: this.targetUid,
          disabled: this.disable === true,
          readonly: this.readonly === true
        }),
        on: on
      });
    },
    __onChange: function __onChange(e) {
      this.__onComposition(e);
    },
    __onInput: function __onInput(e) {
      var _this11 = this;

      clearTimeout(this.inputTimer);

      if (e && e.target && e.target.composing === true) {
        return;
      }

      this.inputValue = e.target.value || ''; // mark it here as user input so that if updateInputValue is called
      // before filter is called the indicator is reset

      this.userInputValue = true;

      if (this.$listeners.filter !== void 0) {
        this.inputTimer = setTimeout(function () {
          _this11.filter(_this11.inputValue);
        }, this.inputDebounce);
      }
    },
    updateInputValue: function updateInputValue(val, noFiltering, internal) {
      this.userInputValue = internal !== true;

      if (this.useInput === true) {
        if (this.inputValue !== val) {
          this.inputValue = val;
        }

        noFiltering !== true && this.filter(val);
      }
    },
    filter: function filter(val) {
      var _this12 = this;

      if (this.$listeners.filter === void 0 || this.focused !== true) {
        return;
      }

      if (this.innerLoading === true) {
        this.$emit('filter-abort');
      } else {
        this.innerLoading = true;
      }

      if (val !== '' && this.multiple !== true && this.innerValue.length > 0 && this.userInputValue !== true && val === this.__getOptionLabel(this.innerValue[0])) {
        val = '';
      }

      var filterId = setTimeout(function () {
        _this12.menu === true && (_this12.menu = false);
      }, 10);
      clearTimeout(this.filterId);
      this.filterId = filterId;
      this.$emit('filter', val, function (fn) {
        if (_this12.focused === true && _this12.filterId === filterId) {
          clearTimeout(_this12.filterId);
          typeof fn === 'function' && fn();

          _this12.$nextTick(function () {
            _this12.innerLoading = false;

            if (_this12.menu === true) {
              _this12.__updateMenu(true);
            } else {
              _this12.menu = true;
            }
          });
        }
      }, function () {
        if (_this12.focused === true && _this12.filterId === filterId) {
          clearTimeout(_this12.filterId);
          _this12.innerLoading = false;
        }

        _this12.menu === true && (_this12.menu = false);
      });
    },
    __getControlEvents: function __getControlEvents() {
      var _this13 = this;

      var focusout = function focusout(e) {
        _this13.__onControlFocusout(e, function () {
          _this13.__resetInputValue();

          _this13.__closeMenu();
        });
      };

      return {
        focusin: this.__onControlFocusin,
        focusout: focusout,
        'popup-show': this.__onControlPopupShow,
        'popup-hide': function popupHide(e) {
          e !== void 0 && Object(utils_event["i" /* stop */])(e);

          _this13.$emit('popup-hide', e);

          _this13.hasPopupOpen = false;
          focusout(e);
        },
        click: function click(e) {
          // label from QField will propagate click on the input (except IE)
          if (_this13.hasDialog !== true && _this13.useInput === true && e.target.classList.contains('q-select__input') !== true) {
            return;
          }

          if (_this13.hasDialog !== true && _this13.menu === true) {
            _this13.__closeMenu();

            _this13.$refs.target !== void 0 && _this13.$refs.target.focus();
          } else {
            _this13.showPopup(e);
          }
        }
      };
    },
    __getPopup: function __getPopup(h) {
      if (this.editable !== false && (this.dialog === true || // dialog always has menu displayed, so need to render it
      this.noOptions !== true || this.$scopedSlots['no-option'] !== void 0)) {
        return this["__get".concat(this.hasDialog === true ? 'Dialog' : 'Menu')](h);
      }
    },
    __getMenu: function __getMenu(h) {
      var child = this.noOptions === true ? this.$scopedSlots['no-option'] !== void 0 ? this.$scopedSlots['no-option']({
        inputValue: this.inputValue
      }) : null : this.__getOptions(h);
      return h(QMenu, {
        ref: 'menu',
        props: {
          value: this.menu,
          fit: true,
          cover: this.optionsCover === true && this.noOptions !== true && this.useInput !== true,
          contentClass: this.menuClass,
          contentStyle: this.popupContentStyle,
          noParentEvent: true,
          noRefocus: true,
          noFocus: true,
          square: this.squaredMenu,
          transitionShow: this.transitionShow,
          transitionHide: this.transitionHide,
          separateClosePopup: true
        },
        on: {
          '&scroll': this.__onVirtualScrollEvt,
          'before-hide': this.__closeMenu
        }
      }, child);
    },
    __onDialogFieldFocus: function __onDialogFieldFocus(e) {
      Object(utils_event["i" /* stop */])(e);
      this.$refs.target !== void 0 && this.$refs.target.focus();
      this.dialogFieldFocused = true;
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    },
    __onDialogFieldBlur: function __onDialogFieldBlur(e) {
      var _this14 = this;

      Object(utils_event["i" /* stop */])(e);
      this.$nextTick(function () {
        _this14.dialogFieldFocused = false;
      });
    },
    __getDialog: function __getDialog(h) {
      var _this15 = this;

      var content = [h(QField, {
        staticClass: "col-auto ".concat(this.fieldClass),
        attrs: {
          for: this.targetUid
        },
        props: QSelect_objectSpread({}, this.$props, {
          dark: this.optionsDark,
          square: true,
          loading: this.innerLoading,
          filled: true,
          stackLabel: this.inputValue.length > 0
        }),
        on: QSelect_objectSpread({}, this.$listeners, {
          focus: this.__onDialogFieldFocus,
          blur: this.__onDialogFieldBlur
        }),
        scopedSlots: QSelect_objectSpread({}, this.$scopedSlots, {
          rawControl: function rawControl() {
            return _this15.__getControl(h, true);
          },
          before: void 0,
          after: void 0
        })
      })];
      this.menu === true && content.push(h('div', {
        ref: 'menuContent',
        staticClass: 'scroll',
        class: this.menuContentClass,
        style: this.popupContentStyle,
        on: {
          click: utils_event["g" /* prevent */],
          '&scroll': this.__onVirtualScrollEvt
        }
      }, this.noOptions === true ? this.$scopedSlots['no-option'] !== void 0 ? this.$scopedSlots['no-option']({
        inputValue: this.inputValue
      }) : null : this.__getOptions(h)));
      return h(QDialog, {
        props: {
          value: this.dialog,
          noRefocus: true,
          position: this.useInput === true ? 'top' : void 0,
          transitionShow: this.transitionShowComputed,
          transitionHide: this.transitionHide
        },
        on: {
          'before-hide': this.__onDialogBeforeHide,
          hide: this.__onDialogHide,
          show: this.__onDialogShow
        }
      }, [h('div', {
        staticClass: 'q-select__dialog' + (this.optionsDark === true ? ' q-select__menu--dark' : '') + (this.dialogFieldFocused === true ? ' q-select__dialog--focused' : '')
      }, content)]);
    },
    __onDialogBeforeHide: function __onDialogBeforeHide() {
      this.focused = false;
    },
    __onDialogHide: function __onDialogHide(e) {
      this.hidePopup();
      this.$emit('blur', e);

      this.__resetInputValue();
    },
    __onDialogShow: function __onDialogShow() {
      var el = document.activeElement; // IE can have null document.activeElement

      if ((el === null || el.id !== this.targetUid) && this.$refs.target !== el) {
        this.$refs.target.focus();
      }
    },
    __closeMenu: function __closeMenu() {
      var _this16 = this;

      if (this.dialog === true) {
        return;
      }

      if (this.menu === true) {
        this.menu = false; // allow $refs.target to move to the field (when dialog)

        this.$nextTick(function () {
          _this16.$refs.target !== void 0 && _this16.$refs.target.focus();
        });
      }

      if (this.focused === false) {
        clearTimeout(this.filterId);
        this.filterId = void 0;

        if (this.innerLoading === true) {
          this.$emit('filter-abort');
          this.innerLoading = false;
        }
      }
    },
    showPopup: function showPopup(e) {
      if (this.hasDialog === true) {
        this.__onControlFocusin(e);

        this.dialog = true;
      } else {
        this.__focus();
      }

      if (this.$listeners.filter !== void 0) {
        this.filter(this.inputValue);
      } else if (this.noOptions !== true || this.$scopedSlots['no-option'] !== void 0) {
        this.menu = true;
      }
    },
    hidePopup: function hidePopup() {
      this.dialog = false;

      this.__closeMenu();
    },
    __resetInputValue: function __resetInputValue() {
      this.useInput === true && this.updateInputValue(this.multiple !== true && this.fillInput === true && this.innerValue.length > 0 ? this.__getOptionLabel(this.innerValue[0]) || '' : '', true, true);
    },
    __updateMenu: function __updateMenu(show) {
      var _this17 = this;

      var optionIndex = -1;

      if (show === true) {
        if (this.innerValue.length > 0) {
          var val = this.__getOptionValue(this.innerValue[0]);

          optionIndex = this.options.findIndex(function (v) {
            return isDeepEqual(_this17.__getOptionValue(v), val);
          });
        }

        this.__resetVirtualScroll(optionIndex);
      }

      this.setOptionIndex(optionIndex);
    },
    __onPreRender: function __onPreRender() {
      this.hasDialog = this.$q.platform.is.mobile !== true && this.behavior !== 'dialog' ? false : this.behavior !== 'menu' && (this.useInput === true ? this.$scopedSlots['no-option'] !== void 0 || this.$listeners.filter !== void 0 || this.noOptions === false : true);
      this.transitionShowComputed = this.hasDialog === true && this.useInput === true && this.$q.platform.is.ios === true ? 'fade' : this.transitionShow;
    },
    __onPostRender: function __onPostRender() {
      if (this.dialog === false && this.$refs.menu !== void 0) {
        this.$refs.menu.updatePosition();
      }
    },
    updateMenuPosition: function updateMenuPosition() {
      this.__onPostRender();
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.inputTimer);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/select/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/separator/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/slide-transition/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/slider/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/space/QSpace.js

/* harmony default export */ var QSpace = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpace',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-space'
    });
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/space/index.js


// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/spinner-mixin.js
var spinner_mixin = __webpack_require__("594d");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerAudio.js


/* harmony default export */ var QSpinnerAudio = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerAudio',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'fill': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 55 80',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'transform': 'matrix(1 0 0 -1 0 80)'
      }
    }, [h('rect', {
      attrs: {
        'width': '10',
        'height': '20',
        'rx': '3'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0s',
        'dur': '4.3s',
        'values': '20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '15',
        'width': '10',
        'height': '80',
        'rx': '3'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0s',
        'dur': '2s',
        'values': '80;55;33;5;75;23;73;33;12;14;60;80',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '30',
        'width': '10',
        'height': '50',
        'rx': '3'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0s',
        'dur': '1.4s',
        'values': '50;34;78;23;56;23;34;76;80;54;21;50',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '45',
        'width': '10',
        'height': '30',
        'rx': '3'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0s',
        'dur': '2s',
        'values': '30;45;13;80;56;72;45;76;34;23;67;30',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerBall.js


/* harmony default export */ var QSpinnerBall = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerBall',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'stroke': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 57 57',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'transform': 'translate(1 1)',
        'stroke-width': '2',
        'fill': 'none',
        'fill-rule': 'evenodd'
      }
    }, [h('circle', {
      attrs: {
        'cx': '5',
        'cy': '50',
        'r': '5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'cy',
        'begin': '0s',
        'dur': '2.2s',
        'values': '50;5;50;50',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'cx',
        'begin': '0s',
        'dur': '2.2s',
        'values': '5;27;49;5',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '27',
        'cy': '5',
        'r': '5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'cy',
        'begin': '0s',
        'dur': '2.2s',
        'from': '5',
        'to': '5',
        'values': '5;50;50;5',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'cx',
        'begin': '0s',
        'dur': '2.2s',
        'from': '27',
        'to': '27',
        'values': '27;49;5;27',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '49',
        'cy': '50',
        'r': '5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'cy',
        'begin': '0s',
        'dur': '2.2s',
        'values': '50;50;5;50',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'cx',
        'from': '49',
        'to': '49',
        'begin': '0s',
        'dur': '2.2s',
        'values': '49;5;27;49',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerBars.js


/* harmony default export */ var QSpinnerBars = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerBars',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'fill': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 135 140',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('rect', {
      attrs: {
        'y': '10',
        'width': '15',
        'height': '120',
        'rx': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0.5s',
        'dur': '1s',
        'values': '120;110;100;90;80;70;60;50;40;140;120',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'begin': '0.5s',
        'dur': '1s',
        'values': '10;15;20;25;30;35;40;45;50;0;10',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '30',
        'y': '10',
        'width': '15',
        'height': '120',
        'rx': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0.25s',
        'dur': '1s',
        'values': '120;110;100;90;80;70;60;50;40;140;120',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'begin': '0.25s',
        'dur': '1s',
        'values': '10;15;20;25;30;35;40;45;50;0;10',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '60',
        'width': '15',
        'height': '140',
        'rx': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0s',
        'dur': '1s',
        'values': '120;110;100;90;80;70;60;50;40;140;120',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'begin': '0s',
        'dur': '1s',
        'values': '10;15;20;25;30;35;40;45;50;0;10',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '90',
        'y': '10',
        'width': '15',
        'height': '120',
        'rx': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0.25s',
        'dur': '1s',
        'values': '120;110;100;90;80;70;60;50;40;140;120',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'begin': '0.25s',
        'dur': '1s',
        'values': '10;15;20;25;30;35;40;45;50;0;10',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('rect', {
      attrs: {
        'x': '120',
        'y': '10',
        'width': '15',
        'height': '120',
        'rx': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'begin': '0.5s',
        'dur': '1s',
        'values': '120;110;100;90;80;70;60;50;40;140;120',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'begin': '0.5s',
        'dur': '1s',
        'values': '10;15;20;25;30;35;40;45;50;0;10',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerComment.js


/* harmony default export */ var QSpinnerComment = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerComment',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid'
      }
    }, [h('rect', {
      attrs: {
        'x': '0',
        'y': '0',
        'width': '100',
        'height': '100',
        'fill': 'none'
      }
    }), h('path', {
      attrs: {
        'd': 'M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z',
        'fill': 'currentColor'
      }
    }), h('circle', {
      attrs: {
        'cx': '30',
        'cy': '47',
        'r': '5',
        'fill': '#fff'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'opacity',
        'from': '0',
        'to': '1',
        'values': '0;1;1',
        'keyTimes': '0;0.2;1',
        'dur': '1s',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '50',
        'cy': '47',
        'r': '5',
        'fill': '#fff'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'opacity',
        'from': '0',
        'to': '1',
        'values': '0;0;1;1',
        'keyTimes': '0;0.2;0.4;1',
        'dur': '1s',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '70',
        'cy': '47',
        'r': '5',
        'fill': '#fff'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'opacity',
        'from': '0',
        'to': '1',
        'values': '0;0;1;1',
        'keyTimes': '0;0.4;0.6;1',
        'dur': '1s',
        'repeatCount': 'indefinite'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerCube.js


/* harmony default export */ var QSpinnerCube = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerCube',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid'
      }
    }, [h('rect', {
      attrs: {
        'x': '0',
        'y': '0',
        'width': '100',
        'height': '100',
        'fill': 'none'
      }
    }), h('g', {
      attrs: {
        'transform': 'translate(25 25)'
      }
    }, [h('rect', {
      attrs: {
        'x': '-20',
        'y': '-20',
        'width': '40',
        'height': '40',
        'fill': 'currentColor',
        'opacity': '0.9'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '1.5',
        'to': '1',
        'repeatCount': 'indefinite',
        'begin': '0s',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.2 0.8 0.2 0.8',
        'keyTimes': '0;1'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(75 25)'
      }
    }, [h('rect', {
      attrs: {
        'x': '-20',
        'y': '-20',
        'width': '40',
        'height': '40',
        'fill': 'currentColor',
        'opacity': '0.8'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '1.5',
        'to': '1',
        'repeatCount': 'indefinite',
        'begin': '0.1s',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.2 0.8 0.2 0.8',
        'keyTimes': '0;1'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(25 75)'
      }
    }, [h('rect', {
      staticClass: 'cube',
      attrs: {
        'x': '-20',
        'y': '-20',
        'width': '40',
        'height': '40',
        'fill': 'currentColor',
        'opacity': '0.7'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '1.5',
        'to': '1',
        'repeatCount': 'indefinite',
        'begin': '0.3s',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.2 0.8 0.2 0.8',
        'keyTimes': '0;1'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(75 75)'
      }
    }, [h('rect', {
      staticClass: 'cube',
      attrs: {
        'x': '-20',
        'y': '-20',
        'width': '40',
        'height': '40',
        'fill': 'currentColor',
        'opacity': '0.6'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '1.5',
        'to': '1',
        'repeatCount': 'indefinite',
        'begin': '0.2s',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.2 0.8 0.2 0.8',
        'keyTimes': '0;1'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerDots.js


/* harmony default export */ var QSpinnerDots = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerDots',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'fill': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 120 30',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('circle', {
      attrs: {
        'cx': '15',
        'cy': '15',
        'r': '15'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'from': '15',
        'to': '15',
        'begin': '0s',
        'dur': '0.8s',
        'values': '15;9;15',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'from': '1',
        'to': '1',
        'begin': '0s',
        'dur': '0.8s',
        'values': '1;.5;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '60',
        'cy': '15',
        'r': '9',
        'fill-opacity': '.3'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'from': '9',
        'to': '9',
        'begin': '0s',
        'dur': '0.8s',
        'values': '9;15;9',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'from': '.5',
        'to': '.5',
        'begin': '0s',
        'dur': '0.8s',
        'values': '.5;1;.5',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '105',
        'cy': '15',
        'r': '15'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'from': '15',
        'to': '15',
        'begin': '0s',
        'dur': '0.8s',
        'values': '15;9;15',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'from': '1',
        'to': '1',
        'begin': '0s',
        'dur': '0.8s',
        'values': '1;.5;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerFacebook.js


/* harmony default export */ var QSpinnerFacebook = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerFacebook',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 100 100',
        'xmlns': 'http://www.w3.org/2000/svg',
        'preserveAspectRatio': 'xMidYMid'
      }
    }, [h('g', {
      attrs: {
        'transform': 'translate(20 50)'
      }
    }, [h('rect', {
      attrs: {
        'x': '-10',
        'y': '-30',
        'width': '20',
        'height': '60',
        'fill': 'currentColor',
        'opacity': '0.6'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '2',
        'to': '1',
        'begin': '0s',
        'repeatCount': 'indefinite',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.1 0.9 0.4 1',
        'keyTimes': '0;1',
        'values': '2;1'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(50 50)'
      }
    }, [h('rect', {
      attrs: {
        'x': '-10',
        'y': '-30',
        'width': '20',
        'height': '60',
        'fill': 'currentColor',
        'opacity': '0.8'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '2',
        'to': '1',
        'begin': '0.1s',
        'repeatCount': 'indefinite',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.1 0.9 0.4 1',
        'keyTimes': '0;1',
        'values': '2;1'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(80 50)'
      }
    }, [h('rect', {
      attrs: {
        'x': '-10',
        'y': '-30',
        'width': '20',
        'height': '60',
        'fill': 'currentColor',
        'opacity': '0.9'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'scale',
        'from': '2',
        'to': '1',
        'begin': '0.2s',
        'repeatCount': 'indefinite',
        'dur': '1s',
        'calcMode': 'spline',
        'keySplines': '0.1 0.9 0.4 1',
        'keyTimes': '0;1',
        'values': '2;1'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js


/* harmony default export */ var QSpinnerGears = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerGears',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'transform': 'translate(-20,-20)'
      }
    }, [h('path', {
      attrs: {
        'd': 'M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z',
        'fill': 'currentColor'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '90 50 50',
        'to': '0 50 50',
        'dur': '1s',
        'repeatCount': 'indefinite'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(20,20) rotate(15 50 50)'
      }
    }, [h('path', {
      attrs: {
        'd': 'M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z',
        'fill': 'currentColor'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 50 50',
        'to': '90 50 50',
        'dur': '1s',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGrid.js


/* harmony default export */ var QSpinnerGrid = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerGrid',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'fill': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 105 105',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('circle', {
      attrs: {
        'cx': '12.5',
        'cy': '12.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '0s',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '12.5',
        'cy': '52.5',
        'r': '12.5',
        'fill-opacity': '.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '100ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '52.5',
        'cy': '12.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '300ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '52.5',
        'cy': '52.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '600ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '92.5',
        'cy': '12.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '800ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '92.5',
        'cy': '52.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '400ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '12.5',
        'cy': '92.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '700ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '52.5',
        'cy': '92.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '500ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '92.5',
        'cy': '92.5',
        'r': '12.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '200ms',
        'dur': '1s',
        'values': '1;.2;1',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerHearts.js


/* harmony default export */ var QSpinnerHearts = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerHearts',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'fill': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 140 64',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('path', {
      attrs: {
        'd': 'M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z',
        'fill-opacity': '.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '0s',
        'dur': '1.4s',
        'values': '0.5;1;0.5',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('path', {
      attrs: {
        'd': 'M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z',
        'fill-opacity': '.5'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'fill-opacity',
        'begin': '0.7s',
        'dur': '1.4s',
        'values': '0.5;1;0.5',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('path', {
      attrs: {
        'd': 'M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z'
      }
    })]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerHourglass.js


/* harmony default export */ var QSpinnerHourglass = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerHourglass',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', [h('path', {
      staticClass: 'glass',
      attrs: {
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-width': '5',
        'stroke-miterlimit': '10',
        'd': 'M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z'
      }
    }), h('clipPath', {
      attrs: {
        'id': 'uil-hourglass-clip1'
      }
    }, [h('rect', {
      staticClass: 'clip',
      attrs: {
        'x': '15',
        'y': '20',
        'width': '70',
        'height': '25'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'from': '25',
        'to': '0',
        'dur': '1s',
        'repeatCount': 'indefinite',
        'vlaues': '25;0;0',
        'keyTimes': '0;0.5;1'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'from': '20',
        'to': '45',
        'dur': '1s',
        'repeatCount': 'indefinite',
        'vlaues': '20;45;45',
        'keyTimes': '0;0.5;1'
      }
    })])]), h('clipPath', {
      attrs: {
        'id': 'uil-hourglass-clip2'
      }
    }, [h('rect', {
      staticClass: 'clip',
      attrs: {
        'x': '15',
        'y': '55',
        'width': '70',
        'height': '25'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'height',
        'from': '0',
        'to': '25',
        'dur': '1s',
        'repeatCount': 'indefinite',
        'vlaues': '0;25;25',
        'keyTimes': '0;0.5;1'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'y',
        'from': '80',
        'to': '55',
        'dur': '1s',
        'repeatCount': 'indefinite',
        'vlaues': '80;55;55',
        'keyTimes': '0;0.5;1'
      }
    })])]), h('path', {
      staticClass: 'sand',
      attrs: {
        'd': 'M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z',
        'clip-path': 'url(#uil-hourglass-clip1)',
        'fill': 'currentColor'
      }
    }), h('path', {
      staticClass: 'sand',
      attrs: {
        'd': 'M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z',
        'clip-path': 'url(#uil-hourglass-clip2)',
        'fill': 'currentColor'
      }
    }), h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 50 50',
        'to': '180 50 50',
        'repeatCount': 'indefinite',
        'dur': '1s',
        'values': '0 50 50;0 50 50;180 50 50',
        'keyTimes': '0;0.7;1'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerInfinity.js


/* harmony default export */ var QSpinnerInfinity = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerInfinity',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid'
      }
    }, [h('path', {
      attrs: {
        'd': 'M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z',
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-width': '8',
        'stroke-dasharray': '10.691205342610678 10.691205342610678',
        'stroke-dashoffset': '0'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-dashoffset',
        'from': '0',
        'to': '21.382410685221355',
        'begin': '0',
        'dur': '2s',
        'repeatCount': 'indefinite',
        'fill': 'freeze'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerIos.js


/* harmony default export */ var QSpinnerIos = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerIos',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'stroke': 'currentColor',
        'fill': 'currentColor',
        'viewBox': '0 0 64 64'
      }
    }, [h('g', {
      attrs: {
        'stroke-width': '4',
        'stroke-linecap': 'round'
      }
    }, [h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(180)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(210)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(240)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(270)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(300)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(330)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(0)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(30)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(60)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(90)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(120)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85',
        'repeatCount': 'indefinite'
      }
    })]), h('line', {
      attrs: {
        'y1': '17',
        'y2': '29',
        'transform': 'translate(32,32) rotate(150)'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'dur': '750ms',
        'values': '1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerOval.js


/* harmony default export */ var QSpinnerOval = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerOval',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'stroke': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 38 38',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'transform': 'translate(1 1)',
        'stroke-width': '2',
        'fill': 'none',
        'fill-rule': 'evenodd'
      }
    }, [h('circle', {
      attrs: {
        'stroke-opacity': '.5',
        'cx': '18',
        'cy': '18',
        'r': '18'
      }
    }), h('path', {
      attrs: {
        'd': 'M36 18c0-9.94-8.06-18-18-18'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 18 18',
        'to': '360 18 18',
        'dur': '1s',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerPie.js


/* harmony default export */ var QSpinnerPie = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerPie',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('path', {
      attrs: {
        'd': 'M0 50A50 50 0 0 1 50 0L50 50L0 50',
        'fill': 'currentColor',
        'opacity': '0.5'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 50 50',
        'to': '360 50 50',
        'dur': '0.8s',
        'repeatCount': 'indefinite'
      }
    })]), h('path', {
      attrs: {
        'd': 'M50 0A50 50 0 0 1 100 50L50 50L50 0',
        'fill': 'currentColor',
        'opacity': '0.5'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 50 50',
        'to': '360 50 50',
        'dur': '1.6s',
        'repeatCount': 'indefinite'
      }
    })]), h('path', {
      attrs: {
        'd': 'M100 50A50 50 0 0 1 50 100L50 50L100 50',
        'fill': 'currentColor',
        'opacity': '0.5'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 50 50',
        'to': '360 50 50',
        'dur': '2.4s',
        'repeatCount': 'indefinite'
      }
    })]), h('path', {
      attrs: {
        'd': 'M50 100A50 50 0 0 1 0 50L50 50L50 100',
        'fill': 'currentColor',
        'opacity': '0.5'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 50 50',
        'to': '360 50 50',
        'dur': '3.2s',
        'repeatCount': 'indefinite'
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerPuff.js


/* harmony default export */ var QSpinnerPuff = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerPuff',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'stroke': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 44 44',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'fill': 'none',
        'fill-rule': 'evenodd',
        'stroke-width': '2'
      }
    }, [h('circle', {
      attrs: {
        'cx': '22',
        'cy': '22',
        'r': '1'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'begin': '0s',
        'dur': '1.8s',
        'values': '1; 20',
        'calcMode': 'spline',
        'keyTimes': '0; 1',
        'keySplines': '0.165, 0.84, 0.44, 1',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'begin': '0s',
        'dur': '1.8s',
        'values': '1; 0',
        'calcMode': 'spline',
        'keyTimes': '0; 1',
        'keySplines': '0.3, 0.61, 0.355, 1',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '22',
        'cy': '22',
        'r': '1'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'begin': '-0.9s',
        'dur': '1.8s',
        'values': '1; 20',
        'calcMode': 'spline',
        'keyTimes': '0; 1',
        'keySplines': '0.165, 0.84, 0.44, 1',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'begin': '-0.9s',
        'dur': '1.8s',
        'values': '1; 0',
        'calcMode': 'spline',
        'keyTimes': '0; 1',
        'keySplines': '0.3, 0.61, 0.355, 1',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerRadio.js


/* harmony default export */ var QSpinnerRadio = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerRadio',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 100 100',
        'preserveAspectRatio': 'xMidYMid',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'transform': 'scale(0.55)'
      }
    }, [h('circle', {
      attrs: {
        'cx': '30',
        'cy': '150',
        'r': '30',
        'fill': 'currentColor'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'opacity',
        'from': '0',
        'to': '1',
        'dur': '1s',
        'begin': '0',
        'repeatCount': 'indefinite',
        'keyTimes': '0;0.5;1',
        'values': '0;1;1'
      }
    })]), h('path', {
      attrs: {
        'd': 'M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z',
        'fill': 'currentColor'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'opacity',
        'from': '0',
        'to': '1',
        'dur': '1s',
        'begin': '0.1',
        'repeatCount': 'indefinite',
        'keyTimes': '0;0.5;1',
        'values': '0;1;1'
      }
    })]), h('path', {
      attrs: {
        'd': 'M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z',
        'fill': 'currentColor'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'opacity',
        'from': '0',
        'to': '1',
        'dur': '1s',
        'begin': '0.2',
        'repeatCount': 'indefinite',
        'keyTimes': '0;0.5;1',
        'values': '0;1;1'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerRings.js


/* harmony default export */ var QSpinnerRings = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerRings',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'stroke': 'currentColor',
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 45 45',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('g', {
      attrs: {
        'fill': 'none',
        'fill-rule': 'evenodd',
        'transform': 'translate(1 1)',
        'stroke-width': '2'
      }
    }, [h('circle', {
      attrs: {
        'cx': '22',
        'cy': '22',
        'r': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'begin': '1.5s',
        'dur': '3s',
        'values': '6;22',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'begin': '1.5s',
        'dur': '3s',
        'values': '1;0',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'stroke-width',
        'begin': '1.5s',
        'dur': '3s',
        'values': '2;0',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '22',
        'cy': '22',
        'r': '6'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'begin': '3s',
        'dur': '3s',
        'values': '6;22',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'stroke-opacity',
        'begin': '3s',
        'dur': '3s',
        'values': '1;0',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    }), h('animate', {
      attrs: {
        'attributeName': 'stroke-width',
        'begin': '3s',
        'dur': '3s',
        'values': '2;0',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'cx': '22',
        'cy': '22',
        'r': '8'
      }
    }, [h('animate', {
      attrs: {
        'attributeName': 'r',
        'begin': '0s',
        'dur': '1.5s',
        'values': '6;1;2;3;4;5;6',
        'calcMode': 'linear',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerTail.js


/* harmony default export */ var QSpinnerTail = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSpinnerTail',
  mixins: [spinner_mixin["a" /* default */]],
  render: function render(h) {
    return h('svg', {
      staticClass: 'q-spinner',
      class: this.classes,
      on: this.$listeners,
      attrs: {
        'width': this.cSize,
        'height': this.cSize,
        'viewBox': '0 0 38 38',
        'xmlns': 'http://www.w3.org/2000/svg'
      }
    }, [h('defs', [h('linearGradient', {
      attrs: {
        'x1': '8.042%',
        'y1': '0%',
        'x2': '65.682%',
        'y2': '23.865%',
        'id': 'a'
      }
    }, [h('stop', {
      attrs: {
        'stop-color': 'currentColor',
        'stop-opacity': '0',
        'offset': '0%'
      }
    }), h('stop', {
      attrs: {
        'stop-color': 'currentColor',
        'stop-opacity': '.631',
        'offset': '63.146%'
      }
    }), h('stop', {
      attrs: {
        'stop-color': 'currentColor',
        'offset': '100%'
      }
    })])]), h('g', {
      attrs: {
        'transform': 'translate(1 1)',
        'fill': 'none',
        'fill-rule': 'evenodd'
      }
    }, [h('path', {
      attrs: {
        'd': 'M36 18c0-9.94-8.06-18-18-18',
        'stroke': 'url(#a)',
        'stroke-width': '2'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 18 18',
        'to': '360 18 18',
        'dur': '0.9s',
        'repeatCount': 'indefinite'
      }
    })]), h('circle', {
      attrs: {
        'fill': 'currentColor',
        'cx': '36',
        'cy': '18',
        'r': '1'
      }
    }, [h('animateTransform', {
      attrs: {
        'attributeName': 'transform',
        'type': 'rotate',
        'from': '0 18 18',
        'to': '360 18 18',
        'dur': '0.9s',
        'repeatCount': 'indefinite'
      }
    })])])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/spinner/index.js





















// CONCATENATED MODULE: ./node_modules/quasar/src/components/splitter/QSplitter.js






/* harmony default export */ var QSplitter = (vue_runtime_esm["a" /* default */].extend({
  name: 'QSplitter',
  directives: {
    TouchPan: TouchPan
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    horizontal: Boolean,
    limits: {
      type: Array,
      default: function _default() {
        return [10, 90];
      },
      validator: function validator(v) {
        if (v.length !== 2) return false;
        if (typeof v[0] !== 'number' || typeof v[1] !== 'number') return false;
        return v[0] >= 0 && v[0] <= v[1] && v[1] <= 100;
      }
    },
    disable: Boolean,
    dark: Boolean,
    beforeClass: [Array, String, Object],
    afterClass: [Array, String, Object],
    separatorClass: [Array, String, Object],
    separatorStyle: [Array, String, Object]
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(v) {
        this.__normalize(v, this.limits);
      }
    },
    limits: {
      deep: true,
      handler: function handler(v) {
        this.__normalize(this.value, v);
      }
    }
  },
  computed: {
    classes: function classes() {
      return (this.horizontal ? 'column' : 'row') + " q-splitter--".concat(this.horizontal ? 'horizontal' : 'vertical') + " q-splitter--".concat(this.disable === true ? 'disabled' : 'workable') + (this.dark === true ? ' q-splitter--dark' : '');
    },
    prop: function prop() {
      return this.horizontal ? 'height' : 'width';
    },
    beforeStyle: function beforeStyle() {
      return defineProperty_default()({}, this.prop, this.value + '%');
    },
    afterStyle: function afterStyle() {
      return defineProperty_default()({}, this.prop, 100 - this.value + '%');
    }
  },
  methods: {
    __pan: function __pan(evt) {
      if (evt.isFirst) {
        this.__size = this.$el.getBoundingClientRect()[this.prop];
        this.__value = this.value;
        this.__dir = this.horizontal ? 'up' : 'left';
        this.__rtlDir = this.horizontal ? 1 : this.$q.lang.rtl === true ? -1 : 1;
        this.$el.classList.add('q-splitter--active');
        return;
      }

      if (evt.isFinal) {
        if (this.__normalized !== this.value) {
          this.$emit('input', this.__normalized);
        }

        this.$el.classList.remove('q-splitter--active');
        return;
      }

      var val = this.__value + this.__rtlDir * (evt.direction === this.__dir ? -100 : 100) * evt.distance[this.horizontal ? 'y' : 'x'] / this.__size;
      this.__normalized = Math.min(this.limits[1], Math.max(this.limits[0], val));
      this.$refs.before.style[this.prop] = this.__normalized + '%';
      this.$refs.after.style[this.prop] = 100 - this.__normalized + '%';
    },
    __normalize: function __normalize(val, limits) {
      if (val < limits[0]) {
        this.$emit('input', limits[0]);
      } else if (val > limits[1]) {
        this.$emit('input', limits[1]);
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-splitter no-wrap',
      class: this.classes,
      on: this.$listeners
    }, [h('div', {
      ref: 'before',
      staticClass: 'q-splitter__panel q-splitter__before',
      style: this.beforeStyle,
      class: this.beforeClass,
      on: {
        input: utils_event["i" /* stop */]
      }
    }, Object(utils_slot["a" /* default */])(this, 'before')), h('div', {
      staticClass: 'q-splitter__separator',
      style: this.separatorStyle,
      class: this.separatorClass
    }, [h('div', {
      staticClass: 'absolute-full q-splitter__separator-area',
      directives: this.disable === true ? void 0 : [{
        name: 'touch-pan',
        value: this.__pan,
        modifiers: {
          horizontal: !this.horizontal,
          vertical: this.horizontal,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      }]
    }, Object(utils_slot["a" /* default */])(this, 'separator'))]), h('div', {
      ref: 'after',
      staticClass: 'q-splitter__panel q-splitter__after',
      style: this.afterStyle,
      class: this.afterClass,
      on: {
        input: utils_event["i" /* stop */]
      }
    }, Object(utils_slot["a" /* default */])(this, 'after'))].concat(Object(utils_slot["a" /* default */])(this, 'default')));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/splitter/index.js


// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__("714f");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/stepper/StepHeader.js





/* harmony default export */ var StepHeader = (vue_runtime_esm["a" /* default */].extend({
  name: 'StepHeader',
  directives: {
    Ripple: Ripple["a" /* default */]
  },
  props: {
    stepper: {},
    step: {}
  },
  computed: {
    isActive: function isActive() {
      return this.stepper.value === this.step.name;
    },
    isDisable: function isDisable() {
      var opt = this.step.disable;
      return opt === true || opt === '';
    },
    isError: function isError() {
      var opt = this.step.error;
      return opt === true || opt === '';
    },
    isDone: function isDone() {
      var opt = this.step.done;
      return !this.isDisable && (opt === true || opt === '');
    },
    headerNav: function headerNav() {
      var opt = this.step.headerNav,
          nav = opt === true || opt === '' || opt === void 0;
      return !this.isDisable && this.stepper.headerNav && (this.isActive || nav);
    },
    hasPrefix: function hasPrefix() {
      return this.step.prefix && !this.isActive && !this.isError && !this.isDone;
    },
    icon: function icon() {
      if (this.isActive) {
        return this.step.activeIcon || this.stepper.activeIcon || this.$q.iconSet.stepper.active;
      }

      if (this.isError) {
        return this.step.errorIcon || this.stepper.errorIcon || this.$q.iconSet.stepper.error;
      }

      if (!this.isDisable && this.isDone) {
        return this.step.doneIcon || this.stepper.doneIcon || this.$q.iconSet.stepper.done;
      }

      return this.step.icon || this.stepper.inactiveIcon;
    },
    color: function color() {
      if (this.isActive) {
        return this.step.activeColor || this.stepper.activeColor || this.step.color;
      }

      if (this.isError) {
        return this.step.errorColor || this.stepper.errorColor;
      }

      if (!this.disable && this.isDone) {
        return this.step.doneColor || this.stepper.doneColor || this.step.color || this.stepper.inactiveColor;
      }

      return this.step.color || this.stepper.inactiveColor;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, "text-".concat(this.color), this.color), defineProperty_default()(_ref, 'q-stepper__tab--error', this.isError), defineProperty_default()(_ref, 'q-stepper__tab--active', this.isActive), defineProperty_default()(_ref, 'q-stepper__tab--done', this.isDone), defineProperty_default()(_ref, 'q-stepper__tab--navigation q-focusable q-hoverable', this.headerNav), defineProperty_default()(_ref, 'q-stepper__tab--disabled', this.isDisable), _ref;
    }
  },
  methods: {
    activate: function activate() {
      this.$refs.blurTarget !== void 0 && this.$refs.blurTarget.focus();
      !this.isActive && this.stepper.goTo(this.step.name);
    },
    keyup: function keyup(e) {
      e.keyCode === 13 && !this.isActive && this.stepper.goTo(this.step.name);
    }
  },
  render: function render(h) {
    var data = {
      staticClass: 'q-stepper__tab col-grow flex items-center no-wrap relative-position',
      class: this.classes,
      directives: this.stepper.headerNav ? [{
        name: 'ripple',
        value: this.headerNav
      }] : null
    };

    if (this.headerNav) {
      data.on = {
        click: this.activate,
        keyup: this.keyup
      };
      data.attrs = {
        tabindex: this.isDisable === true ? -1 : this.$attrs.tabindex || 0
      };
    }

    return h('div', data, [h('div', {
      staticClass: 'q-focus-helper',
      attrs: {
        tabindex: -1
      },
      ref: 'blurTarget'
    }), h('div', {
      staticClass: 'q-stepper__dot row flex-center q-stepper__line relative-position'
    }, [h('span', {
      staticClass: 'row flex-center'
    }, [this.hasPrefix === true ? this.step.prefix : h(QIcon["a" /* default */], {
      props: {
        name: this.icon
      }
    })])]), this.step.title ? h('div', {
      staticClass: 'q-stepper__label q-stepper__line relative-position'
    }, [h('div', {
      staticClass: 'q-stepper__title'
    }, [this.step.title]), this.step.caption ? h('div', {
      staticClass: 'q-stepper__caption'
    }, [this.step.caption]) : null]) : null]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/stepper/QStep.js







var StepWrapper = vue_runtime_esm["a" /* default */].extend({
  name: 'QStepWrapper',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-stepper__step-content'
    }, [h('div', {
      staticClass: 'q-stepper__step-inner'
    }, Object(utils_slot["a" /* default */])(this, 'default'))]);
  }
});
/* harmony default export */ var QStep = (vue_runtime_esm["a" /* default */].extend({
  name: 'QStep',
  inject: {
    stepper: {
      default: function _default() {
        console.error('QStep needs to be child of QStepper');
      }
    }
  },
  mixins: [PanelChildMixin],
  props: {
    icon: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    caption: String,
    prefix: [String, Number],
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,
    headerNav: {
      type: Boolean,
      default: true
    },
    done: Boolean,
    error: Boolean
  },
  computed: {
    isActive: function isActive() {
      return this.stepper.value === this.name;
    }
  },
  watch: {
    isActive: function isActive(active) {
      var _this = this;

      if (active === true && this.stepper.vertical === true) {
        this.$nextTick(function () {
          if (_this.$el !== void 0) {
            _this.$el.scrollTop = 0;
          }
        });
      }
    }
  },
  render: function render(h) {
    var vertical = this.stepper.vertical;
    var content = vertical === true && this.stepper.keepAlive === true ? h('keep-alive', this.isActive === true ? [h(StepWrapper, {
      key: this.name
    }, Object(utils_slot["a" /* default */])(this, 'default'))] : void 0) : vertical !== true || this.isActive === true ? StepWrapper.options.render.call(this, h) : void 0;
    return h('div', {
      staticClass: 'q-stepper__step',
      on: this.$listeners
    }, vertical === true ? [h(StepHeader, {
      props: {
        stepper: this.stepper,
        step: this
      }
    }), this.stepper.animated === true ? h(QSlideTransition, [content]) : content] : [content]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js







/* harmony default export */ var QStepper = (vue_runtime_esm["a" /* default */].extend({
  name: 'QStepper',
  provide: function provide() {
    return {
      stepper: this
    };
  },
  mixins: [PanelParentMixin],
  props: {
    dark: Boolean,
    flat: Boolean,
    bordered: Boolean,
    vertical: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },
  computed: {
    classes: function classes() {
      return "q-stepper--".concat(this.vertical ? 'vertical' : 'horizontal') + (this.flat || this.dark ? ' q-stepper--flat no-shadow' : '') + (this.bordered || this.dark && !this.flat ? ' q-stepper--bordered' : '') + (this.contracted === true ? ' q-stepper--contracted' : '') + (this.dark === true ? ' q-stepper--dark' : '');
    }
  },
  methods: {
    __getContent: function __getContent(h) {
      var _class,
          _this = this;

      var top = Object(utils_slot["a" /* default */])(this, 'message');

      if (this.vertical === true) {
        this.__isValidPanelName(this.value) && this.__updatePanelIndex();
        return (top !== void 0 ? top : []).concat([h('div', {
          staticClass: 'q-stepper__content',
          // stop propagation of content emitted @input
          // which would tamper with Panel's model
          on: {
            input: utils_event["i" /* stop */]
          }
        }, Object(utils_slot["a" /* default */])(this, 'default'))]);
      }

      return [h('div', {
        staticClass: 'q-stepper__header row items-stretch justify-between',
        class: (_class = {}, defineProperty_default()(_class, "q-stepper__header--".concat(this.alternativeLabels ? 'alternative' : 'standard', "-labels"), true), defineProperty_default()(_class, 'q-stepper__header--border', !this.flat || this.bordered), _class)
      }, this.__getAllPanels().map(function (panel) {
        var step = panel.componentOptions.propsData;
        return h(StepHeader, {
          key: step.name,
          props: {
            stepper: _this,
            step: step
          }
        });
      }))].concat(top !== void 0 ? top : []).concat([h('div', {
        staticClass: 'q-stepper__content q-panel-parent',
        directives: this.panelDirectives
      }, [this.__getPanelContent(h)])]);
    },
    __renderPanels: function __renderPanels(h) {
      return h('div', {
        staticClass: 'q-stepper',
        class: this.classes,
        on: this.$listeners
      }, this.__getContent(h).concat(Object(utils_slot["a" /* default */])(this, 'navigation')));
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/stepper/QStepperNavigation.js


/* harmony default export */ var QStepperNavigation = (vue_runtime_esm["a" /* default */].extend({
  name: 'QStepperNavigation',
  render: function render(h) {
    return h('div', {
      staticClass: 'q-stepper__nav',
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/stepper/index.js




// CONCATENATED MODULE: ./node_modules/quasar/src/components/tab-panels/index.js



// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-top.js
/* harmony default export */ var table_top = ({
  computed: {
    marginalsProps: function marginalsProps() {
      return {
        pagination: this.computedPagination,
        pagesNumber: this.pagesNumber,
        isFirstPage: this.isFirstPage,
        isLastPage: this.isLastPage,
        prevPage: this.prevPage,
        nextPage: this.nextPage,
        inFullscreen: this.inFullscreen,
        toggleFullscreen: this.toggleFullscreen
      };
    }
  },
  methods: {
    getTop: function getTop(h) {
      var top = this.$scopedSlots.top,
          topLeft = this.$scopedSlots['top-left'],
          topRight = this.$scopedSlots['top-right'],
          topSelection = this.$scopedSlots['top-selection'],
          hasSelection = this.hasSelectionMode === true && topSelection !== void 0 && this.rowsSelectedNumber > 0,
          staticClass = 'q-table__top relative-position row items-center',
          child = [];

      if (top !== void 0) {
        return h('div', {
          staticClass: staticClass
        }, [top(this.marginalsProps)]);
      }

      if (hasSelection === true) {
        child.push(topSelection(this.marginalsProps));
      } else {
        if (topLeft !== void 0) {
          child.push(h('div', {
            staticClass: 'q-table-control'
          }, [topLeft(this.marginalsProps)]));
        } else if (this.title) {
          child.push(h('div', {
            staticClass: 'q-table__control'
          }, [h('div', {
            staticClass: 'q-table__title'
          }, this.title)]));
        }
      }

      if (topRight !== void 0) {
        child.push(h('div', {
          staticClass: 'q-table__separator col'
        }));
        child.push(h('div', {
          staticClass: 'q-table__control'
        }, [topRight(this.marginalsProps)]));
      }

      if (child.length === 0) {
        return;
      }

      return h('div', {
        staticClass: staticClass
      }, child);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/QTh.js




/* harmony default export */ var QTh = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTh',
  props: {
    props: Object,
    autoWidth: Boolean
  },
  render: function render(h) {
    var _this = this;

    if (this.props === void 0) {
      return h('th', {
        class: this.autoWidth === true ? 'q-table--col-auto-width' : null
      }, Object(utils_slot["a" /* default */])(this, 'default'));
    }

    var col;
    var name = this.$vnode.key,
        child = [].concat(Object(utils_slot["a" /* default */])(this, 'default'));

    if (name) {
      col = this.props.colsMap[name];

      if (col === void 0) {
        return;
      }
    } else {
      col = this.props.col;
    }

    if (col.sortable === true) {
      var action = col.align === 'right' ? 'unshift' : 'push';
      child[action](h(QIcon["a" /* default */], {
        props: {
          name: this.$q.iconSet.table.arrowUp
        },
        staticClass: col.__iconClass
      }));
    }

    return h('th', {
      class: col.__thClass + (this.autoWidth === true ? ' q-table--col-auto-width' : ''),
      on: col.sortable === true ? {
        click: function click() {
          _this.props.sort(col);
        }
      } : null
    }, child);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-header.js





/* harmony default export */ var table_header = ({
  methods: {
    getTableHeader: function getTableHeader(h) {
      var child = [this.getTableHeaderRow(h)];
      this.loading === true && child.push(h('tr', {
        staticClass: 'q-table__progress'
      }, [h('th', {
        staticClass: 'relative-position',
        attrs: {
          colspan: '100%'
        }
      }, [h(QLinearProgress, {
        staticClass: 'q-table__linear-progress',
        props: {
          color: this.color,
          dark: this.dark,
          indeterminate: true
        }
      })])]));
      return h('thead', child);
    },
    getTableHeaderRow: function getTableHeaderRow(h) {
      var _this = this;

      var header = this.$scopedSlots.header,
          headerCell = this.$scopedSlots['header-cell'];

      if (header !== void 0) {
        return header(this.addTableHeaderRowMeta({
          header: true,
          cols: this.computedCols,
          sort: this.sort,
          colsMap: this.computedColsMap
        }));
      }

      var mapFn;

      if (headerCell !== void 0) {
        mapFn = function mapFn(col) {
          return headerCell({
            col: col,
            cols: _this.computedCols,
            sort: _this.sort,
            colsMap: _this.computedColsMap
          });
        };
      } else {
        mapFn = function mapFn(col) {
          var props = {
            col: col,
            cols: _this.computedCols,
            sort: _this.sort,
            colsMap: _this.computedColsMap
          };

          var slot = _this.$scopedSlots["header-cell-".concat(col.name)];

          return slot !== void 0 ? slot(props) : h(QTh, {
            key: col.name,
            props: {
              props: props
            },
            style: col.style,
            class: col.classes
          }, col.label);
        };
      }

      var child = this.computedCols.map(mapFn);

      if (this.singleSelection === true && this.grid !== true) {
        child.unshift(h('th', {
          staticClass: 'q-table--col-auto-width'
        }, [' ']));
      } else if (this.multipleSelection === true) {
        child.unshift(h('th', {
          staticClass: 'q-table--col-auto-width'
        }, [h(QCheckbox, {
          props: {
            color: this.color,
            value: this.someRowsSelected ? null : this.allRowsSelected,
            dark: this.dark,
            dense: this.dense
          },
          on: {
            input: function input(val) {
              if (_this.someRowsSelected) {
                val = false;
              }

              _this.__updateSelection(_this.computedRows.map(function (row) {
                return row[_this.rowKey];
              }), _this.computedRows, val);
            }
          }
        })]));
      }

      return h('tr', {
        style: this.tableHeaderStyle,
        class: this.tableHeaderClass
      }, child);
    },
    addTableHeaderRowMeta: function addTableHeaderRowMeta(data) {
      var _this2 = this;

      if (this.multipleSelection === true) {
        Object.defineProperty(data, 'selected', {
          get: function get() {
            return _this2.someRowsSelected ? 'some' : _this2.allRowsSelected;
          },
          set: function set(val) {
            if (_this2.someRowsSelected) {
              val = false;
            }

            _this2.__updateSelection(_this2.computedRows.map(function (row) {
              return row[_this2.rowKey];
            }), _this2.computedRows, val);
          },
          configurable: true,
          enumerable: true
        });
        data.partialSelected = this.someRowsSelected;
        data.multipleSelect = true;
      }

      return data;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-body.js









function table_body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function table_body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_body_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_body_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var table_body = ({
  methods: {
    getTableRowBody: function getTableRowBody(h, row, body) {
      var key = row[this.rowKey],
          selected = this.isRowSelected(key);
      return body(this.addBodyRowMeta({
        key: key,
        row: row,
        cols: this.computedCols,
        colsMap: this.computedColsMap,
        __trClass: selected ? 'selected' : ''
      }));
    },
    getTableRow: function getTableRow(h, row) {
      var _this = this;

      var bodyCell = this.$scopedSlots['body-cell'],
          key = row[this.rowKey],
          selected = this.isRowSelected(key),
          child = bodyCell ? this.computedCols.map(function (col) {
        return bodyCell(_this.addBodyCellMetaData({
          row: row,
          col: col
        }));
      }) : this.computedCols.map(function (col) {
        var slot = _this.$scopedSlots["body-cell-".concat(col.name)];

        return slot !== void 0 ? slot(_this.addBodyCellMetaData({
          row: row,
          col: col
        })) : h('td', {
          staticClass: col.__tdClass,
          style: col.style,
          class: col.classes
        }, _this.getCellValue(col, row));
      });
      this.hasSelectionMode === true && child.unshift(h('td', {
        staticClass: 'q-table--col-auto-width'
      }, [h(QCheckbox, {
        props: {
          value: selected,
          color: this.color,
          dark: this.dark,
          dense: this.dense
        },
        on: {
          input: function input(adding) {
            _this.__updateSelection([key], [row], adding);
          }
        }
      })]));
      return h('tr', {
        key: key,
        class: {
          selected: selected
        }
      }, child);
    },
    getTableBody: function getTableBody(h) {
      var _this2 = this;

      var body = this.$scopedSlots.body,
          topRow = this.$scopedSlots['top-row'],
          bottomRow = this.$scopedSlots['bottom-row'],
          mapFn = body !== void 0 ? function (row) {
        return _this2.getTableRowBody(h, row, body);
      } : function (row) {
        return _this2.getTableRow(h, row);
      },
          child = this.computedRows.map(mapFn);

      if (topRow !== void 0) {
        child.unshift(topRow({
          cols: this.computedCols
        }));
      }

      if (bottomRow !== void 0) {
        child.push(bottomRow({
          cols: this.computedCols
        }));
      }

      return h('tbody', child);
    },
    getTableRowVirtual: function getTableRowVirtual(h) {
      var _this3 = this;

      var body = this.$scopedSlots.body;
      return body !== void 0 ? function (props) {
        return _this3.getTableRowBody(h, props.item, body);
      } : function (props) {
        return _this3.getTableRow(h, props.item);
      };
    },
    addBodyRowMeta: function addBodyRowMeta(data) {
      var _this4 = this;

      this.hasSelectionMode === true && Object.defineProperty(data, 'selected', {
        get: function get() {
          return _this4.isRowSelected(data.key);
        },
        set: function set(adding) {
          _this4.__updateSelection([data.key], [data.row], adding);
        },
        configurable: true,
        enumerable: true
      });
      Object.defineProperty(data, 'expand', {
        get: function get() {
          return _this4.rowsExpanded[data.key] === true;
        },
        set: function set(val) {
          _this4.$set(_this4.rowsExpanded, data.key, val);
        },
        configurable: true,
        enumerable: true
      });
      data.cols = data.cols.map(function (col) {
        var c = table_body_objectSpread({}, col);

        Object.defineProperty(c, 'value', {
          get: function get() {
            return _this4.getCellValue(col, data.row);
          },
          configurable: true,
          enumerable: true
        });
        return c;
      });
      return data;
    },
    addBodyCellMetaData: function addBodyCellMetaData(data) {
      var _this5 = this;

      Object.defineProperty(data, 'value', {
        get: function get() {
          return _this5.getCellValue(data.col, data.row);
        },
        configurable: true,
        enumerable: true
      });
      return data;
    },
    getCellValue: function getCellValue(col, row) {
      var val = typeof col.field === 'function' ? col.field(row) : row[col.field];
      return col.format !== void 0 ? col.format(val, row) : val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-bottom.js



/* harmony default export */ var table_bottom = ({
  computed: {
    navIcon: function navIcon() {
      var ico = [this.$q.iconSet.table.prevPage, this.$q.iconSet.table.nextPage];
      return this.$q.lang.rtl === true ? ico.reverse() : ico;
    }
  },
  methods: {
    getBottom: function getBottom(h) {
      if (this.hideBottom === true) {
        return;
      }

      if (this.nothingToDisplay === true) {
        var message = this.filter ? this.noResultsLabel || this.$q.lang.table.noResults : this.loading === true ? this.loadingLabel || this.$q.lang.table.loading : this.noDataLabel || this.$q.lang.table.noData;
        var noData = this.$scopedSlots['no-data'];
        var children = noData !== void 0 ? [noData({
          message: message,
          icon: this.$q.iconSet.table.warning,
          filter: this.filter
        })] : [h(QIcon["a" /* default */], {
          staticClass: 'q-table__bottom-nodata-icon',
          props: {
            name: this.$q.iconSet.table.warning
          }
        }), message];
        return h('div', {
          staticClass: 'q-table__bottom row items-center q-table__bottom--nodata'
        }, children);
      }

      var bottom = this.$scopedSlots.bottom;
      return h('div', {
        staticClass: 'q-table__bottom row items-center',
        class: bottom !== void 0 ? null : 'justify-end'
      }, bottom !== void 0 ? [bottom(this.marginalsProps)] : this.getPaginationRow(h));
    },
    getPaginationRow: function getPaginationRow(h) {
      var _this = this;

      var control;
      var rowsPerPage = this.computedPagination.rowsPerPage,
          paginationLabel = this.paginationLabel || this.$q.lang.table.pagination,
          paginationSlot = this.$scopedSlots.pagination,
          hasOpts = this.rowsPerPageOptions.length > 1;
      var child = [h('div', {
        staticClass: 'q-table__control'
      }, [h('div', [this.hasSelectionMode === true && this.rowsSelectedNumber > 0 ? (this.selectedRowsLabel || this.$q.lang.table.selectedRecords)(this.rowsSelectedNumber) : ''])]), h('div', {
        staticClass: 'q-table__separator col'
      })];

      if (hasOpts === true) {
        child.push(h('div', {
          staticClass: 'q-table__control'
        }, [h('span', {
          staticClass: 'q-table__bottom-item'
        }, [this.rowsPerPageLabel || this.$q.lang.table.recordsPerPage]), h(QSelect, {
          staticClass: 'inline q-table__bottom-item',
          props: {
            color: this.color,
            value: rowsPerPage,
            options: this.computedRowsPerPageOptions,
            displayValue: rowsPerPage === 0 ? this.$q.lang.table.allRows : rowsPerPage,
            dark: this.dark,
            borderless: true,
            dense: true,
            optionsDense: true
          },
          on: {
            input: function input(pag) {
              _this.setPagination({
                page: 1,
                rowsPerPage: pag.value
              });
            }
          }
        })]));
      }

      if (paginationSlot !== void 0) {
        control = paginationSlot(this.marginalsProps);
      } else {
        control = [h('span', rowsPerPage !== 0 ? {
          staticClass: 'q-table__bottom-item'
        } : {}, [rowsPerPage ? paginationLabel(this.firstRowIndex + 1, Math.min(this.lastRowIndex, this.computedRowsNumber), this.computedRowsNumber) : paginationLabel(1, this.computedRowsNumber, this.computedRowsNumber)])];

        if (rowsPerPage !== 0) {
          control.push(h(QBtn["a" /* default */], {
            props: {
              color: this.color,
              round: true,
              icon: this.navIcon[0],
              dense: true,
              flat: true,
              disable: this.isFirstPage
            },
            on: {
              click: this.prevPage
            }
          }), h(QBtn["a" /* default */], {
            props: {
              color: this.color,
              round: true,
              icon: this.navIcon[1],
              dense: true,
              flat: true,
              disable: this.isLastPage
            },
            on: {
              click: this.nextPage
            }
          }));
        }
      }

      child.push(h('div', {
        staticClass: 'q-table__control'
      }, control));
      return child;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-grid.js



/* harmony default export */ var table_grid = ({
  methods: {
    getGridBody: function getGridBody(h) {
      var _this = this;

      var item = this.$scopedSlots.item !== void 0 ? this.$scopedSlots.item : function (scope) {
        var child = scope.cols.map(function (col) {
          return h('div', {
            staticClass: 'q-table__grid-item-row'
          }, [h('div', {
            staticClass: 'q-table__grid-item-title'
          }, [col.label]), h('div', {
            staticClass: 'q-table__grid-item-value'
          }, [col.value])]);
        });
        _this.hasSelectionMode === true && child.unshift(h('div', {
          staticClass: 'q-table__grid-item-row'
        }, [h(QCheckbox, {
          props: {
            value: scope.selected,
            color: _this.color,
            dark: _this.dark,
            dense: true
          },
          on: {
            input: function input(val) {
              scope.selected = val;
            }
          }
        })]), h(QSeparator, {
          props: {
            dark: _this.dark
          }
        }));
        return h('div', {
          staticClass: 'q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3',
          class: scope.selected === true ? 'q-table__grid-item--selected' : null
        }, [h('div', {
          staticClass: 'q-table__grid-item-card' + _this.cardDefaultClass,
          class: _this.cardClass,
          style: _this.cardStyle
        }, child)]);
      };
      return h('div', {
        staticClass: 'row'
      }, this.computedRows.map(function (row) {
        var key = row[_this.rowKey],
            selected = _this.isRowSelected(key);

        return item(_this.addBodyRowMeta({
          key: key,
          row: row,
          cols: _this.computedCols,
          colsMap: _this.computedColsMap,
          __trClass: selected ? 'selected' : ''
        }));
      }));
    },
    getGridHeader: function getGridHeader(h) {
      return h('div', {
        staticClass: 'q-table__middle'
      }, [this.gridHeader === true ? h('table', {
        staticClass: 'q-table'
      }, [this.getTableHeader(h)]) : this.loading === true ? h(QLinearProgress, {
        staticClass: 'q-table__linear-progress',
        props: {
          color: this.color,
          dark: this.dark,
          indeterminate: true
        }
      }) : null]);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/QMarkupTable.js




/* harmony default export */ var QMarkupTable = (vue_runtime_esm["a" /* default */].extend({
  name: 'QMarkupTable',
  props: {
    dense: Boolean,
    dark: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: 'horizontal',
      validator: function validator(v) {
        return ['horizontal', 'vertical', 'cell', 'none'].includes(v);
      }
    },
    wrapCells: Boolean
  },
  computed: {
    classes: function classes() {
      return "q-table--".concat(this.separator, "-separator") + (this.dark === true ? " q-table--dark q-table__card--dark" : '') + (this.dense === true ? " q-table--dense" : '') + (this.flat === true ? " q-table--flat" : '') + (this.bordered === true ? " q-table--bordered" : '') + (this.square === true ? " q-table--square" : '') + (this.wrapCells === false ? " q-table--no-wrap" : '');
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-markup-table q-table__container q-table__card',
      class: this.classes,
      on: this.$listeners
    }, [h('table', {
      staticClass: 'q-table'
    }, Object(utils_slot["a" /* default */])(this, 'default'))]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/get-table-middle.js








function get_table_middle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function get_table_middle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { get_table_middle_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { get_table_middle_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ var get_table_middle = (function (h, conf, content) {
  return h('div', get_table_middle_objectSpread({}, conf, {
    staticClass: 'q-table__middle' + (conf.staticClass !== void 0 ? ' ' + conf.staticClass : '')
  }), [h('table', {
    staticClass: 'q-table'
  }, content)]);
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/virtual-scroll/QVirtualScroll.js









var comps = {
  list: QList,
  table: QMarkupTable
};
/* harmony default export */ var QVirtualScroll = (vue_runtime_esm["a" /* default */].extend({
  name: 'QVirtualScroll',
  mixins: [virtual_scroll],
  props: {
    type: {
      type: String,
      default: 'list',
      validator: function validator(v) {
        return ['list', 'table', '__qtable'].includes(v);
      }
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    itemsFn: {
      type: Function
    },
    itemsSize: {
      type: Number
    },
    scrollTarget: {
      default: void 0
    }
  },
  computed: {
    virtualScrollLength: function virtualScrollLength() {
      return this.itemsSize >= 0 && this.itemsFn !== void 0 ? parseInt(this.itemsSize, 10) : Array.isArray(this.items) ? this.items.length : 0;
    },
    virtualScrollScope: function virtualScrollScope() {
      var _this = this;

      if (this.virtualScrollLength === 0) {
        return [];
      }

      var mapFn = function mapFn(item, i) {
        return {
          index: _this.virtualScrollSliceRange.from + i,
          item: item
        };
      };

      if (this.itemsFn === void 0) {
        return this.items.slice(this.virtualScrollSliceRange.from, this.virtualScrollSliceRange.to).map(mapFn);
      }

      return this.itemsFn(this.virtualScrollSliceRange.from, this.virtualScrollSliceRange.to - this.virtualScrollSliceRange.from).map(mapFn);
    },
    classes: function classes() {
      return 'q-virtual-scroll q-virtual-scroll' + (this.virtualScrollHorizontal === true ? '--horizontal' : '--vertical') + (this.scrollTarget !== void 0 ? '' : ' scroll');
    },
    attrs: function attrs() {
      return this.scrollTarget !== void 0 ? void 0 : {
        tabindex: 0
      };
    }
  },
  watch: {
    virtualScrollLength: function virtualScrollLength() {
      this.__resetVirtualScroll();
    },
    scrollTarget: function scrollTarget() {
      this.__unconfigureScrollTarget();

      this.__configureScrollTarget();
    }
  },
  methods: {
    __getVirtualScrollEl: function __getVirtualScrollEl() {
      return this.$el;
    },
    __getVirtualScrollTarget: function __getVirtualScrollTarget() {
      return this.__scrollTarget;
    },
    __configureScrollTarget: function __configureScrollTarget() {
      var __scrollTarget = typeof this.scrollTarget === 'string' ? document.querySelector(this.scrollTarget) : this.scrollTarget;

      if (__scrollTarget === void 0) {
        __scrollTarget = this.$el;
      } else if (__scrollTarget === document || __scrollTarget === document.body || __scrollTarget === document.scrollingElement || __scrollTarget === document.documentElement) {
        __scrollTarget = window;
      }

      this.__scrollTarget = __scrollTarget;

      __scrollTarget.addEventListener('scroll', this.__onVirtualScrollEvt, utils_event["e" /* listenOpts */].passive);
    },
    __unconfigureScrollTarget: function __unconfigureScrollTarget() {
      if (this.__scrollTarget !== void 0) {
        this.__scrollTarget.removeEventListener('scroll', this.__onVirtualScrollEvt, utils_event["e" /* listenOpts */].passive);

        this.__scrollTarget = void 0;
      }
    }
  },
  beforeMount: function beforeMount() {
    this.__resetVirtualScroll();
  },
  mounted: function mounted() {
    this.__configureScrollTarget();
  },
  beforeDestroy: function beforeDestroy() {
    this.__unconfigureScrollTarget();
  },
  render: function render(h) {
    if (this.$scopedSlots.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering", this);
      return;
    }

    var child = this.__padVirtualScroll(h, this.type === 'list' ? 'div' : 'tbody', this.virtualScrollScope.map(this.$scopedSlots.default));

    if (this.$scopedSlots.before !== void 0) {
      child = this.$scopedSlots.before().concat(child);
    }

    if (this.$scopedSlots.after !== void 0) {
      child = child.concat(this.$scopedSlots.after());
    }

    return this.type === '__qtable' ? get_table_middle(h, {
      staticClass: this.classes
    }, child) : h(comps[this.type], {
      class: this.classes,
      attrs: this.attrs,
      props: this.$attrs,
      on: this.$listeners
    }, child);
  }
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("f3e3");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/sort.js
function sortString(a, b) {
  if (typeof a !== 'string') {
    throw new TypeError('The value for sorting must be a String');
  }

  return a.localeCompare(b);
}
function sortNumber(a, b) {
  return a - b;
}
function sortDate(a, b) {
  return new Date(a) - new Date(b);
}
function sortBoolean(a, b) {
  return a && !b ? -1 : !a && b ? 1 : 0;
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-sort.js






/* harmony default export */ var table_sort = ({
  props: {
    sortMethod: {
      type: Function,
      default: function _default(data, sortBy, descending) {
        var col = this.columns.find(function (def) {
          return def.name === sortBy;
        });

        if (col === null || col.field === void 0) {
          return data;
        }

        var dir = descending === true ? -1 : 1,
            val = typeof col.field === 'function' ? function (v) {
          return col.field(v);
        } : function (v) {
          return v[col.field];
        };
        return data.sort(function (a, b) {
          var A = val(a),
              B = val(b);

          if (A === null || A === void 0) {
            return -1 * dir;
          }

          if (B === null || B === void 0) {
            return 1 * dir;
          }

          if (col.sort !== void 0) {
            return col.sort(A, B, a, b) * dir;
          }

          if (isNumber(A) === true && isNumber(B) === true) {
            return (A - B) * dir;
          }

          if (isDate(A) === true && isDate(B) === true) {
            return sortDate(A, B) * dir;
          }

          if (typeof A === 'boolean' && typeof B === 'boolean') {
            return (A - B) * dir;
          }

          var _map = [A, B].map(function (s) {
            return (s + '').toLocaleString().toLowerCase();
          });

          var _map2 = slicedToArray_default()(_map, 2);

          A = _map2[0];
          B = _map2[1];
          return A < B ? -1 * dir : A === B ? 0 : dir;
        });
      }
    }
  },
  computed: {
    columnToSort: function columnToSort() {
      var sortBy = this.computedPagination.sortBy;

      if (sortBy) {
        return this.columns.find(function (def) {
          return def.name === sortBy;
        }) || null;
      }
    }
  },
  methods: {
    sort: function sort(col
    /* String(col name) or Object(col definition) */
    ) {
      if (col === Object(col)) {
        col = col.name;
      }

      var _this$computedPaginat = this.computedPagination,
          sortBy = _this$computedPaginat.sortBy,
          descending = _this$computedPaginat.descending;

      if (sortBy !== col) {
        sortBy = col;
        descending = false;
      } else {
        if (this.binaryStateSort === true) {
          descending = !descending;
        } else {
          if (descending === true) {
            sortBy = null;
          } else {
            descending = true;
          }
        }
      }

      this.setPagination({
        sortBy: sortBy,
        descending: descending,
        page: 1
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-filter.js
/* harmony default export */ var table_filter = ({
  props: {
    filter: [String, Object],
    filterMethod: {
      type: Function,
      default: function _default(rows, terms) {
        var cols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.computedCols;
        var cellValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.getCellValue;
        var lowerTerms = terms ? terms.toLowerCase() : '';
        return rows.filter(function (row) {
          return cols.some(function (col) {
            return (cellValue(col, row) + '').toLowerCase().indexOf(lowerTerms) !== -1;
          });
        });
      }
    }
  },
  watch: {
    filter: {
      handler: function handler(val) {
        var _this = this;

        this.$nextTick(function () {
          _this.setPagination({
            page: 1
          }, true);
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-pagination.js








function table_pagination_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function table_pagination_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_pagination_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_pagination_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function samePagination(oldPag, newPag) {
  for (var prop in newPag) {
    if (newPag[prop] !== oldPag[prop]) {
      return false;
    }
  }

  return true;
}

function fixPagination(p) {
  if (p.page < 1) {
    p.page = 1;
  }

  if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
    p.rowsPerPage = 0;
  }

  return p;
}

/* harmony default export */ var table_pagination = ({
  props: {
    pagination: Object,
    rowsPerPageOptions: {
      type: Array,
      default: function _default() {
        return [3, 5, 7, 10, 15, 20, 25, 50, 0];
      }
    }
  },
  computed: {
    computedPagination: function computedPagination() {
      return fixPagination(table_pagination_objectSpread({}, this.innerPagination, {}, this.pagination));
    },
    firstRowIndex: function firstRowIndex() {
      var _this$computedPaginat = this.computedPagination,
          page = _this$computedPaginat.page,
          rowsPerPage = _this$computedPaginat.rowsPerPage;
      return (page - 1) * rowsPerPage;
    },
    lastRowIndex: function lastRowIndex() {
      var _this$computedPaginat2 = this.computedPagination,
          page = _this$computedPaginat2.page,
          rowsPerPage = _this$computedPaginat2.rowsPerPage;
      return page * rowsPerPage;
    },
    isFirstPage: function isFirstPage() {
      return this.computedPagination.page === 1;
    },
    pagesNumber: function pagesNumber() {
      return this.computedPagination.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(this.computedRowsNumber / this.computedPagination.rowsPerPage));
    },
    isLastPage: function isLastPage() {
      return this.lastRowIndex === 0 ? true : this.computedPagination.page >= this.pagesNumber;
    },
    computedRowsPerPageOptions: function computedRowsPerPageOptions() {
      var _this = this;

      return this.rowsPerPageOptions.map(function (count) {
        return {
          label: count === 0 ? _this.$q.lang.table.allRows : '' + count,
          value: count
        };
      });
    }
  },
  watch: {
    pagesNumber: function pagesNumber(lastPage, oldLastPage) {
      if (lastPage === oldLastPage) {
        return;
      }

      var currentPage = this.computedPagination.page;

      if (lastPage && !currentPage) {
        this.setPagination({
          page: 1
        });
      } else if (lastPage < currentPage) {
        this.setPagination({
          page: lastPage
        });
      }
    }
  },
  methods: {
    __sendServerRequest: function __sendServerRequest(pagination) {
      this.requestServerInteraction({
        pagination: pagination,
        filter: this.filter
      });
    },
    setPagination: function setPagination(val, forceServerRequest) {
      var newPagination = fixPagination(table_pagination_objectSpread({}, this.computedPagination, {}, val));

      if (samePagination(this.computedPagination, newPagination)) {
        if (this.isServerSide && forceServerRequest) {
          this.__sendServerRequest(newPagination);
        }

        return;
      }

      if (this.isServerSide) {
        this.__sendServerRequest(newPagination);

        return;
      }

      if (this.pagination) {
        this.$emit('update:pagination', newPagination);
      } else {
        this.innerPagination = newPagination;
      }
    },
    prevPage: function prevPage() {
      var page = this.computedPagination.page;

      if (page > 1) {
        this.setPagination({
          page: page - 1
        });
      }
    },
    nextPage: function nextPage() {
      var _this$computedPaginat3 = this.computedPagination,
          page = _this$computedPaginat3.page,
          rowsPerPage = _this$computedPaginat3.rowsPerPage;

      if (this.lastRowIndex > 0 && page * rowsPerPage < this.computedRowsNumber) {
        this.setPagination({
          page: page + 1
        });
      }
    }
  },
  created: function created() {
    this.$emit('update:pagination', table_pagination_objectSpread({}, this.computedPagination));
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-row-selection.js


/* harmony default export */ var table_row_selection = ({
  props: {
    selection: {
      type: String,
      default: 'none',
      validator: function validator(v) {
        return ['single', 'multiple', 'none'].includes(v);
      }
    },
    selected: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    selectedKeys: function selectedKeys() {
      var _this = this;

      var keys = {};
      this.selected.map(function (row) {
        return row[_this.rowKey];
      }).forEach(function (key) {
        keys[key] = true;
      });
      return keys;
    },
    hasSelectionMode: function hasSelectionMode() {
      return this.selection !== 'none';
    },
    singleSelection: function singleSelection() {
      return this.selection === 'single';
    },
    multipleSelection: function multipleSelection() {
      return this.selection === 'multiple';
    },
    allRowsSelected: function allRowsSelected() {
      var _this2 = this;

      if (this.multipleSelection === true) {
        return this.computedRows.length > 0 && this.computedRows.every(function (row) {
          return _this2.selectedKeys[row[_this2.rowKey]] === true;
        });
      }
    },
    someRowsSelected: function someRowsSelected() {
      var _this3 = this;

      if (this.multipleSelection === true) {
        return !this.allRowsSelected && this.computedRows.some(function (row) {
          return _this3.selectedKeys[row[_this3.rowKey]] === true;
        });
      }
    },
    rowsSelectedNumber: function rowsSelectedNumber() {
      return this.selected.length;
    }
  },
  methods: {
    isRowSelected: function isRowSelected(key) {
      return this.selectedKeys[key] === true;
    },
    clearSelection: function clearSelection() {
      this.$emit('update:selected', []);
    },
    __updateSelection: function __updateSelection(keys, rows, added) {
      var _this4 = this;

      this.$emit('selection', {
        rows: rows,
        added: added,
        keys: keys
      });
      var payload = this.singleSelection === true ? added === true ? rows : [] : added === true ? this.selected.concat(rows) : this.selected.filter(function (row) {
        return keys.includes(row[_this4.rowKey]) === false;
      });
      this.$emit('update:selected', payload);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/table-column-selection.js



/* harmony default export */ var table_column_selection = ({
  props: {
    visibleColumns: Array
  },
  computed: {
    computedCols: function computedCols() {
      var _this = this;

      var _this$computedPaginat = this.computedPagination,
          sortBy = _this$computedPaginat.sortBy,
          descending = _this$computedPaginat.descending;
      var cols = this.visibleColumns !== void 0 ? this.columns.filter(function (col) {
        return col.required === true || _this.visibleColumns.includes(col.name) === true;
      }) : this.columns;
      return cols.map(function (col) {
        col.align = col.align || 'right';
        col.__iconClass = "q-table__sort-icon q-table__sort-icon--".concat(col.align);
        col.__thClass = "text-".concat(col.align).concat(col.sortable ? ' sortable' : '').concat(col.name === sortBy ? " sorted ".concat(descending ? 'sort-desc' : '') : '');
        col.__tdClass = "text-".concat(col.align);
        return col;
      });
    },
    computedColsMap: function computedColsMap() {
      var names = {};
      this.computedCols.forEach(function (col) {
        names[col.name] = col;
      });
      return names;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/QTable.js










function QTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QTable_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QTable_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var commonVirtPropsObj = {};
commonVirtPropsList.forEach(function (p) {
  commonVirtPropsObj[p] = {};
});
/* harmony default export */ var QTable = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTable',
  mixins: [fullscreen, table_top, table_header, table_body, table_bottom, table_grid, table_sort, table_filter, table_pagination, table_row_selection, table_column_selection],
  props: QTable_objectSpread({
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    columns: Array,
    loading: Boolean,
    binaryStateSort: Boolean,
    title: String,
    hideHeader: Boolean,
    hideBottom: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: 'horizontal',
      validator: function validator(v) {
        return ['horizontal', 'vertical', 'cell', 'none'].includes(v);
      }
    },
    wrapCells: Boolean,
    virtualScroll: Boolean
  }, commonVirtPropsObj, {
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: 'grey-8'
    },
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    dark: Boolean
  }),
  data: function data() {
    return {
      rowsExpanded: {},
      innerPagination: {
        sortBy: null,
        descending: false,
        page: 1,
        rowsPerPage: 5
      }
    };
  },
  watch: {
    needsReset: function needsReset() {
      this.hasVirtScroll === true && this.$refs.virtScroll.reset();
    }
  },
  computed: {
    hasVirtScroll: function hasVirtScroll() {
      return this.grid !== true && this.virtualScroll === true;
    },
    needsReset: function needsReset() {
      var _this = this;

      return ['tableStyle', 'tableClass', 'tableHeaderStyle', 'tableHeaderClass', 'containerClass'].map(function (p) {
        return _this[p];
      }).join(';');
    },
    computedData: function computedData() {
      var rows = this.data.slice().map(function (row, i) {
        row.__index = i;
        return row;
      });

      if (rows.length === 0) {
        return {
          rowsNumber: 0,
          rows: []
        };
      }

      if (this.isServerSide === true) {
        return {
          rows: rows
        };
      }

      var _this$computedPaginat = this.computedPagination,
          sortBy = _this$computedPaginat.sortBy,
          descending = _this$computedPaginat.descending,
          rowsPerPage = _this$computedPaginat.rowsPerPage;

      if (this.filter) {
        rows = this.filterMethod(rows, this.filter, this.computedCols, this.getCellValue);
      }

      if (this.columnToSort) {
        rows = this.sortMethod(rows, sortBy, descending);
      }

      var rowsNumber = rows.length;

      if (rowsPerPage) {
        rows = rows.slice(this.firstRowIndex, this.lastRowIndex);
      }

      return {
        rowsNumber: rowsNumber,
        rows: rows
      };
    },
    computedRows: function computedRows() {
      return this.computedData.rows;
    },
    computedRowsNumber: function computedRowsNumber() {
      return this.isServerSide === true ? this.computedPagination.rowsNumber || 0 : this.computedData.rowsNumber;
    },
    nothingToDisplay: function nothingToDisplay() {
      return this.computedRows.length === 0;
    },
    isServerSide: function isServerSide() {
      return this.computedPagination.rowsNumber !== void 0;
    },
    cardDefaultClass: function cardDefaultClass() {
      return " q-table__card" + (this.dark === true ? ' q-table__card--dark' : '') + (this.square === true ? " q-table--square" : '') + (this.flat === true ? " q-table--flat" : '') + (this.bordered === true ? " q-table--bordered" : '');
    },
    containerClass: function containerClass() {
      return "q-table__container q-table--".concat(this.separator, "-separator") + (this.grid === true ? ' q-table--grid' : this.cardDefaultClass) + (this.dark === true ? " q-table--dark" : '') + (this.dense === true ? " q-table--dense" : '') + (this.wrapCells === false ? " q-table--no-wrap" : '') + (this.inFullscreen === true ? " fullscreen scroll" : '');
    },
    virtProps: function virtProps() {
      var _this2 = this;

      var props = {};
      commonVirtPropsList.forEach(function (p) {
        props[p] = _this2[p];
      });

      if (props.virtualScrollItemSize === void 0) {
        props.virtualScrollItemSize = this.dense === true ? 28 : 48;
      }

      return props;
    }
  },
  render: function render(h) {
    var data = {
      staticClass: this.containerClass
    };

    if (this.grid === false) {
      data.class = this.cardClass;
      data.style = this.cardStyle;
    }

    return h('div', data, [this.getTop(h), this.grid === true ? this.getGridHeader(h) : null, this.getBody(h), this.getBottom(h)]);
  },
  methods: {
    requestServerInteraction: function requestServerInteraction() {
      var _this3 = this;

      var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$nextTick(function () {
        _this3.$emit('request', {
          pagination: prop.pagination || _this3.computedPagination,
          filter: prop.filter || _this3.filter,
          getCellValue: _this3.getCellValue
        });
      });
    },
    resetVirtualScroll: function resetVirtualScroll() {
      this.hasVirtScroll === true && this.$refs.virtScroll.reset();
    },
    getBody: function getBody(h) {
      if (this.grid === true) {
        return this.getGridBody(h);
      }

      var header = this.hideHeader !== true ? this.getTableHeader(h) : null;
      return this.hasVirtScroll === true ? h(QVirtualScroll, {
        ref: 'virtScroll',
        props: QTable_objectSpread({}, this.virtProps, {
          items: this.computedRows,
          type: '__qtable'
        }),
        class: this.tableClass,
        style: this.tableStyle,
        scopedSlots: {
          before: function before() {
            return header;
          },
          default: this.getTableRowVirtual(h)
        }
      }) : get_table_middle(h, {
        staticClass: 'scroll',
        class: this.tableClass,
        style: this.tableStyle
      }, [header, this.getTableBody(h)]);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/QTr.js


/* harmony default export */ var QTr = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTr',
  props: {
    props: Object
  },
  render: function render(h) {
    return h('tr', this.props === void 0 || this.props.header === true ? {} : {
      class: this.props.__trClass
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/QTd.js


/* harmony default export */ var QTd = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTd',
  props: {
    props: Object,
    autoWidth: Boolean
  },
  render: function render(h) {
    if (this.props === void 0) {
      return h('td', {
        class: {
          'q-table--col-auto-width': this.autoWidth
        }
      }, Object(utils_slot["a" /* default */])(this, 'default'));
    }

    var name = this.$vnode.key;
    var col = this.props.colsMap !== void 0 && name ? this.props.colsMap[name] : this.props.col;

    if (col === void 0) {
      return;
    }

    return h('td', {
      class: col.__tdClass + (this.autoWidth === true ? ' q-table--col-auto-width' : '')
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/table/index.js






// CONCATENATED MODULE: ./node_modules/quasar/src/utils/router.js



var trailingSlashRE = /\/?$/;

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }

  return true;
}

function isSameRoute(current, target) {
  if (!target) {
    return false;
  }

  if (current.path && target.path) {
    return current.path.replace(trailingSlashRE, '') === target.path.replace(trailingSlashRE, '') && current.hash === target.hash && isDeepEqual(current.query, target.query);
  }

  if (current.name && target.name) {
    return current.name === target.name && current.hash === target.hash && isDeepEqual(current.query, target.query) && isDeepEqual(current.params, target.params);
  }

  return false;
}
function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tabs/QRouteTab.js









function QRouteTab_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QRouteTab_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QRouteTab_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QRouteTab_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var QRouteTab = (vue_runtime_esm["a" /* default */].extend({
  name: 'QRouteTab',
  mixins: [QTab, RouterLinkMixin],
  props: {
    to: {
      required: true
    }
  },
  inject: {
    __activateRoute: {}
  },
  watch: {
    $route: function $route() {
      this.__checkActivation();
    }
  },
  methods: {
    __activate: function __activate(e, keyboard) {
      if (this.disable !== true) {
        this.__checkActivation(true);
      }

      if (keyboard === true) {
        this.$el.focus(e);
      } else {
        this.$refs.blurTarget !== void 0 && this.$refs.blurTarget.focus(e);
      }
    },
    __checkActivation: function __checkActivation() {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var current = this.$route,
          _this$$router$resolve = this.$router.resolve(this.to, current, this.append),
          href = _this$$router$resolve.href,
          location = _this$$router$resolve.location,
          route = _this$$router$resolve.route,
          redirected = route.redirectedFrom !== void 0,
          checkFunction = this.exact === true ? isSameRoute : isIncludedRoute,
          params = {
        name: this.name,
        selected: selected,
        exact: this.exact,
        priorityMatched: route.matched.length,
        priorityHref: href.length
      };

      checkFunction(current, route) && this.__activateRoute(QRouteTab_objectSpread({}, params, {
        redirected: redirected
      }));
      redirected === true && checkFunction(current, QRouteTab_objectSpread({
        path: route.redirectedFrom
      }, location)) && this.__activateRoute(params);
      this.isActive && this.__activateRoute();
    }
  },
  mounted: function mounted() {
    this.$router !== void 0 && this.__checkActivation();
  },
  beforeDestroy: function beforeDestroy() {
    this.__activateRoute({
      remove: true,
      name: this.name
    });
  },
  render: function render(h) {
    return this.__renderTab(h, 'router-link', this.routerLinkProps);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tabs/index.js




// CONCATENATED MODULE: ./node_modules/quasar/src/components/timeline/QTimeline.js





/* harmony default export */ var QTimeline = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTimeline',
  provide: function provide() {
    return {
      __timeline: this
    };
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    side: {
      type: String,
      default: 'right',
      validator: function validator(v) {
        return ['left', 'right'].includes(v);
      }
    },
    layout: {
      type: String,
      default: 'dense',
      validator: function validator(v) {
        return ['dense', 'comfortable', 'loose'].includes(v);
      }
    },
    dark: Boolean
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {
        'q-timeline--dark': this.dark
      }, defineProperty_default()(_ref, "q-timeline--".concat(this.layout), true), defineProperty_default()(_ref, "q-timeline--".concat(this.layout, "--").concat(this.side), true), _ref;
    }
  },
  render: function render(h) {
    return h('ul', {
      staticClass: 'q-timeline',
      class: this.classes,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/timeline/QTimelineEntry.js




/* harmony default export */ var QTimelineEntry = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTimelineEntry',
  inject: {
    __timeline: {
      default: function _default() {
        console.error('QTimelineEntry needs to be child of QTimeline');
      }
    }
  },
  props: {
    heading: Boolean,
    tag: {
      type: String,
      default: 'h3'
    },
    side: {
      type: String,
      default: 'right',
      validator: function validator(v) {
        return ['left', 'right'].includes(v);
      }
    },
    icon: String,
    avatar: String,
    color: String,
    title: String,
    subtitle: String,
    body: String
  },
  computed: {
    colorClass: function colorClass() {
      return "text-".concat(this.color || this.__timeline.color);
    },
    classes: function classes() {
      return "q-timeline__entry--".concat(this.side) + (this.icon !== void 0 || this.avatar !== void 0 ? ' q-timeline__entry--icon' : '');
    },
    reverse: function reverse() {
      return this.__timeline.layout === 'comfortable' && this.__timeline.side === 'left';
    }
  },
  render: function render(h) {
    var defSlot = this.$scopedSlots.default !== void 0 ? this.$scopedSlots.default() : [];

    if (this.body !== void 0) {
      defSlot.unshift(this.body);
    }

    if (this.heading === true) {
      var _content = [h('div'), h('div'), h(this.tag, {
        staticClass: 'q-timeline__heading-title'
      }, defSlot)];
      return h('div', {
        staticClass: 'q-timeline__heading',
        on: this.$listeners
      }, this.reverse === true ? _content.reverse() : _content);
    }

    var dot;

    if (this.icon !== void 0) {
      dot = [h(QIcon["a" /* default */], {
        staticClass: 'row items-center justify-center',
        props: {
          name: this.icon
        }
      })];
    } else if (this.avatar !== void 0) {
      dot = [h('img', {
        staticClass: 'q-timeline__dot-img',
        domProps: {
          src: this.avatar
        }
      })];
    }

    var content = [h('div', {
      staticClass: 'q-timeline__subtitle'
    }, [h('span', this.$scopedSlots.subtitle !== void 0 ? this.$scopedSlots.subtitle() : [this.subtitle])]), h('div', {
      staticClass: 'q-timeline__dot',
      class: this.colorClass
    }, dot), h('div', {
      staticClass: 'q-timeline__content'
    }, [h('h6', {
      staticClass: 'q-timeline__title'
    }, this.$scopedSlots.title !== void 0 ? this.$scopedSlots.title() : [this.title])].concat(defSlot))];
    return h('li', {
      staticClass: 'q-timeline__entry',
      class: this.classes,
      on: this.$listeners
    }, this.reverse === true ? content.reverse() : content);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/timeline/index.js



// CONCATENATED MODULE: ./node_modules/quasar/src/components/toggle/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js


/* harmony default export */ var QToolbar = (vue_runtime_esm["a" /* default */].extend({
  name: 'QToolbar',
  props: {
    inset: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toolbar row no-wrap items-center',
      class: this.inset ? 'q-toolbar--inset' : null,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js


/* harmony default export */ var QToolbarTitle = (vue_runtime_esm["a" /* default */].extend({
  name: 'QToolbarTitle',
  props: {
    shrink: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-toolbar__title ellipsis',
      class: this.shrink === true ? 'col-shrink' : null,
      on: this.$listeners
    }, Object(utils_slot["a" /* default */])(this, 'default'));
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/toolbar/index.js



// CONCATENATED MODULE: ./node_modules/quasar/src/components/tooltip/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("b54a");

// CONCATENATED MODULE: ./node_modules/quasar/src/components/tree/QTree.js











/* harmony default export */ var QTree = (vue_runtime_esm["a" /* default */].extend({
  name: 'QTree',
  props: {
    nodes: {
      type: Array,
      required: true
    },
    nodeKey: {
      type: String,
      required: true
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    color: String,
    controlColor: String,
    textColor: String,
    selectedColor: String,
    dark: Boolean,
    icon: String,
    tickStrategy: {
      type: String,
      default: 'none',
      validator: function validator(v) {
        return ['none', 'strict', 'leaf', 'leaf-filtered'].includes(v);
      }
    },
    ticked: Array,
    // sync
    expanded: Array,
    // sync
    selected: {},
    // sync
    defaultExpandAll: Boolean,
    accordion: Boolean,
    filter: String,
    filterMethod: {
      type: Function,
      default: function _default(node, filter) {
        var filt = filter.toLowerCase();
        return node[this.labelKey] && node[this.labelKey].toLowerCase().indexOf(filt) > -1;
      }
    },
    duration: Number,
    noNodesLabel: String,
    noResultsLabel: String
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, defineProperty_default()(_ref, "text-".concat(this.color), this.color), defineProperty_default()(_ref, 'q-tree--dark', this.dark), _ref;
    },
    hasSelection: function hasSelection() {
      return this.selected !== void 0;
    },
    computedIcon: function computedIcon() {
      return this.icon || this.$q.iconSet.tree.icon;
    },
    computedControlColor: function computedControlColor() {
      return this.controlColor || this.color;
    },
    textColorClass: function textColorClass() {
      if (this.textColor !== void 0) {
        return "text-".concat(this.textColor);
      }
    },
    selectedColorClass: function selectedColorClass() {
      var color = this.selectedColor || this.color;

      if (color) {
        return "text-".concat(color);
      }
    },
    meta: function meta() {
      var _this = this;

      var meta = {};

      var travel = function travel(node, parent) {
        var tickStrategy = node.tickStrategy || (parent ? parent.tickStrategy : _this.tickStrategy);
        var key = node[_this.nodeKey],
            isParent = node.children && node.children.length > 0,
            isLeaf = !isParent,
            selectable = !node.disabled && _this.hasSelection && node.selectable !== false,
            expandable = !node.disabled && node.expandable !== false,
            hasTicking = tickStrategy !== 'none',
            strictTicking = tickStrategy === 'strict',
            leafFilteredTicking = tickStrategy === 'leaf-filtered',
            leafTicking = tickStrategy === 'leaf' || tickStrategy === 'leaf-filtered';
        var tickable = !node.disabled && node.tickable !== false;

        if (leafTicking && tickable && parent && !parent.tickable) {
          tickable = false;
        }

        var lazy = node.lazy;

        if (lazy && _this.lazy[key]) {
          lazy = _this.lazy[key];
        }

        var m = {
          key: key,
          parent: parent,
          isParent: isParent,
          isLeaf: isLeaf,
          lazy: lazy,
          disabled: node.disabled,
          link: !node.disabled && (selectable || expandable && (isParent || lazy === true)),
          children: [],
          matchesFilter: _this.filter ? _this.filterMethod(node, _this.filter) : true,
          selected: key === _this.selected && selectable,
          selectable: selectable,
          expanded: isParent ? _this.innerExpanded.includes(key) : false,
          expandable: expandable,
          noTick: node.noTick || !strictTicking && lazy && lazy !== 'loaded',
          tickable: tickable,
          tickStrategy: tickStrategy,
          hasTicking: hasTicking,
          strictTicking: strictTicking,
          leafFilteredTicking: leafFilteredTicking,
          leafTicking: leafTicking,
          ticked: strictTicking ? _this.innerTicked.includes(key) : isLeaf ? _this.innerTicked.includes(key) : false
        };
        meta[key] = m;

        if (isParent) {
          m.children = node.children.map(function (n) {
            return travel(n, m);
          });

          if (_this.filter) {
            if (!m.matchesFilter) {
              m.matchesFilter = m.children.some(function (n) {
                return n.matchesFilter;
              });
            }

            if (m.matchesFilter && !m.noTick && !m.disabled && m.tickable && leafFilteredTicking && m.children.every(function (n) {
              return !n.matchesFilter || n.noTick || !n.tickable;
            })) {
              m.tickable = false;
            }
          }

          if (m.matchesFilter) {
            if (!m.noTick && !strictTicking && m.children.every(function (n) {
              return n.noTick;
            })) {
              m.noTick = true;
            }

            if (leafTicking) {
              m.ticked = false;
              m.indeterminate = m.children.some(function (node) {
                return node.indeterminate;
              });

              if (!m.indeterminate) {
                var sel = m.children.reduce(function (acc, meta) {
                  return meta.ticked ? acc + 1 : acc;
                }, 0);

                if (sel === m.children.length) {
                  m.ticked = true;
                } else if (sel > 0) {
                  m.indeterminate = true;
                }
              }
            }
          }
        }

        return m;
      };

      this.nodes.forEach(function (node) {
        return travel(node, null);
      });
      return meta;
    }
  },
  data: function data() {
    return {
      lazy: {},
      innerTicked: this.ticked || [],
      innerExpanded: this.expanded || []
    };
  },
  watch: {
    ticked: function ticked(val) {
      this.innerTicked = val;
    },
    expanded: function expanded(val) {
      this.innerExpanded = val;
    }
  },
  methods: {
    getNodeByKey: function getNodeByKey(key) {
      var _this2 = this;

      var reduce = [].reduce;

      var find = function find(result, node) {
        if (result || !node) {
          return result;
        }

        if (Array.isArray(node)) {
          return reduce.call(Object(node), find, result);
        }

        if (node[_this2.nodeKey] === key) {
          return node;
        }

        if (node.children) {
          return find(null, node.children);
        }
      };

      return find(null, this.nodes);
    },
    getTickedNodes: function getTickedNodes() {
      var _this3 = this;

      return this.innerTicked.map(function (key) {
        return _this3.getNodeByKey(key);
      });
    },
    getExpandedNodes: function getExpandedNodes() {
      var _this4 = this;

      return this.innerExpanded.map(function (key) {
        return _this4.getNodeByKey(key);
      });
    },
    isExpanded: function isExpanded(key) {
      return key && this.meta[key] ? this.meta[key].expanded : false;
    },
    collapseAll: function collapseAll() {
      if (this.expanded !== void 0) {
        this.$emit('update:expanded', []);
      } else {
        this.innerExpanded = [];
      }
    },
    expandAll: function expandAll() {
      var _this5 = this;

      var expanded = this.innerExpanded,
          travel = function travel(node) {
        if (node.children && node.children.length > 0) {
          if (node.expandable !== false && node.disabled !== true) {
            expanded.push(node[_this5.nodeKey]);
            node.children.forEach(travel);
          }
        }
      };

      this.nodes.forEach(travel);

      if (this.expanded !== void 0) {
        this.$emit('update:expanded', expanded);
      } else {
        this.innerExpanded = expanded;
      }
    },
    setExpanded: function setExpanded(key, state) {
      var _this6 = this;

      var node = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getNodeByKey(key);
      var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.meta[key];

      if (meta.lazy && meta.lazy !== 'loaded') {
        if (meta.lazy === 'loading') {
          return;
        }

        this.$set(this.lazy, key, 'loading');
        this.$emit('lazy-load', {
          node: node,
          key: key,
          done: function done(children) {
            _this6.lazy[key] = 'loaded';

            if (children) {
              _this6.$set(node, 'children', children);
            }

            _this6.$nextTick(function () {
              var m = _this6.meta[key];

              if (m && m.isParent) {
                _this6.__setExpanded(key, true);
              }
            });
          },
          fail: function fail() {
            _this6.$delete(_this6.lazy, key);
          }
        });
      } else if (meta.isParent && meta.expandable) {
        this.__setExpanded(key, state);
      }
    },
    __setExpanded: function __setExpanded(key, state) {
      var _this7 = this;

      var target = this.innerExpanded;
      var emit = this.expanded !== void 0;

      if (emit === true) {
        target = target.slice();
      }

      if (state) {
        if (this.accordion) {
          if (this.meta[key]) {
            var collapse = [];

            if (this.meta[key].parent) {
              this.meta[key].parent.children.forEach(function (m) {
                if (m.key !== key && m.expandable) {
                  collapse.push(m.key);
                }
              });
            } else {
              this.nodes.forEach(function (node) {
                var k = node[_this7.nodeKey];

                if (k !== key) {
                  collapse.push(k);
                }
              });
            }

            if (collapse.length > 0) {
              target = target.filter(function (k) {
                return !collapse.includes(k);
              });
            }
          }
        }

        target = target.concat([key]).filter(function (key, index, self) {
          return self.indexOf(key) === index;
        });
      } else {
        target = target.filter(function (k) {
          return k !== key;
        });
      }

      if (emit === true) {
        this.$emit("update:expanded", target);
      } else {
        this.innerExpanded = target;
      }
    },
    isTicked: function isTicked(key) {
      return key && this.meta[key] ? this.meta[key].ticked : false;
    },
    setTicked: function setTicked(keys, state) {
      var target = this.innerTicked;
      var emit = this.ticked !== void 0;

      if (emit === true) {
        target = target.slice();
      }

      if (state) {
        target = target.concat(keys).filter(function (key, index, self) {
          return self.indexOf(key) === index;
        });
      } else {
        target = target.filter(function (k) {
          return !keys.includes(k);
        });
      }

      if (emit === true) {
        this.$emit("update:ticked", target);
      }
    },
    __getSlotScope: function __getSlotScope(node, meta, key) {
      var _this8 = this;

      var scope = {
        tree: this,
        node: node,
        key: key,
        color: this.color,
        dark: this.dark
      };
      Object.defineProperty(scope, 'expanded', {
        get: function get() {
          return meta.expanded;
        },
        set: function set(val) {
          val !== meta.expanded && _this8.setExpanded(key, val);
        },
        configurable: true,
        enumerable: true
      });
      Object.defineProperty(scope, 'ticked', {
        get: function get() {
          return meta.ticked;
        },
        set: function set(val) {
          val !== meta.ticked && _this8.setTicked([key], val);
        },
        configurable: true,
        enumerable: true
      });
      return scope;
    },
    __getChildren: function __getChildren(h, nodes) {
      var _this9 = this;

      return (this.filter ? nodes.filter(function (n) {
        return _this9.meta[n[_this9.nodeKey]].matchesFilter;
      }) : nodes).map(function (child) {
        return _this9.__getNode(h, child);
      });
    },
    __getNodeMedia: function __getNodeMedia(h, node) {
      if (node.icon !== void 0) {
        return h(QIcon["a" /* default */], {
          staticClass: "q-tree__icon q-mr-sm",
          props: {
            name: node.icon,
            color: node.iconColor
          }
        });
      }

      var src = node.img || node.avatar;

      if (src) {
        return h('img', {
          staticClass: "q-tree__".concat(node.img ? 'img' : 'avatar', " q-mr-sm"),
          attrs: {
            src: src
          }
        });
      }
    },
    __getNode: function __getNode(h, node) {
      var _this10 = this;

      var key = node[this.nodeKey],
          meta = this.meta[key],
          header = node.header ? this.$scopedSlots["header-".concat(node.header)] || this.$scopedSlots['default-header'] : this.$scopedSlots['default-header'];
      var children = meta.isParent ? this.__getChildren(h, node.children) : [];
      var isParent = children.length > 0 || meta.lazy && meta.lazy !== 'loaded';
      var body = node.body ? this.$scopedSlots["body-".concat(node.body)] || this.$scopedSlots['default-body'] : this.$scopedSlots['default-body'],
          slotScope = header || body ? this.__getSlotScope(node, meta, key) : null;

      if (body !== void 0) {
        body = h('div', {
          staticClass: 'q-tree__node-body relative-position'
        }, [h('div', {
          class: this.textColorClass
        }, [body(slotScope)])]);
      }

      return h('div', {
        key: key,
        staticClass: 'q-tree__node relative-position',
        class: {
          'q-tree__node--parent': isParent,
          'q-tree__node--child': !isParent
        }
      }, [h('div', {
        staticClass: 'q-tree__node-header relative-position row no-wrap items-center',
        class: {
          'q-tree__node--link q-hoverable q-focusable': meta.link,
          'q-tree__node--selected': meta.selected,
          disabled: meta.disabled
        },
        attrs: {
          tabindex: meta.link ? 0 : -1
        },
        on: {
          click: function click(e) {
            _this10.__onClick(node, meta, e);
          },
          keypress: function keypress(e) {
            if (e.keyCode === 13) {
              _this10.__onClick(node, meta, e, true);
            } else if (e.keyCode === 32) {
              _this10.__onExpandClick(node, meta, e, true);
            }
          }
        }
      }, [h('div', {
        staticClass: 'q-focus-helper',
        attrs: {
          tabindex: -1
        },
        ref: "blurTarget_".concat(meta.key)
      }), meta.lazy === 'loading' ? h(QSpinner["a" /* default */], {
        staticClass: 'q-tree__spinner q-mr-xs',
        props: {
          color: this.computedControlColor
        }
      }) : isParent === true ? h(QIcon["a" /* default */], {
        staticClass: 'q-tree__arrow q-mr-xs',
        class: {
          'q-tree__arrow--rotate': meta.expanded
        },
        props: {
          name: this.computedIcon
        },
        nativeOn: {
          click: function click(e) {
            _this10.__onExpandClick(node, meta, e);
          }
        }
      }) : null, meta.hasTicking && !meta.noTick ? h(QCheckbox, {
        staticClass: 'q-mr-xs',
        props: {
          value: meta.indeterminate ? null : meta.ticked,
          color: this.computedControlColor,
          dark: this.dark,
          dense: true,
          keepColor: true,
          disable: !meta.tickable
        },
        on: {
          keydown: utils_event["j" /* stopAndPrevent */],
          input: function input(v) {
            _this10.__onTickedClick(meta, v);
          }
        }
      }) : null, h('div', {
        'staticClass': 'q-tree__node-header-content col row no-wrap items-center',
        class: meta.selected ? this.selectedColorClass : this.textColorClass
      }, [header ? header(slotScope) : [this.__getNodeMedia(h, node), h('div', node[this.labelKey])]])]), isParent === true ? h(QSlideTransition, {
        props: {
          duration: this.duration
        }
      }, [h('div', {
        staticClass: 'q-tree__node-collapsible',
        class: this.textColorClass,
        directives: [{
          name: 'show',
          value: meta.expanded
        }]
      }, [body, h('div', {
        staticClass: 'q-tree__children',
        class: {
          disabled: meta.disabled
        }
      }, children)])]) : body]);
    },
    __blur: function __blur(key) {
      var blurTarget = this.$refs["blurTarget_".concat(key)];
      blurTarget !== void 0 && blurTarget.focus();
    },
    __onClick: function __onClick(node, meta, e, keyboard) {
      keyboard !== true && this.__blur(meta.key);

      if (this.hasSelection) {
        if (meta.selectable) {
          this.$emit('update:selected', meta.key !== this.selected ? meta.key : null);
        }
      } else {
        this.__onExpandClick(node, meta, e, keyboard);
      }

      if (typeof node.handler === 'function') {
        node.handler(node);
      }
    },
    __onExpandClick: function __onExpandClick(node, meta, e, keyboard) {
      if (e !== void 0) {
        Object(utils_event["j" /* stopAndPrevent */])(e);
      }

      keyboard !== true && this.__blur(meta.key);
      this.setExpanded(meta.key, !meta.expanded, node, meta);
    },
    __onTickedClick: function __onTickedClick(meta, state) {
      if (meta.indeterminate && state) {
        state = false;
      }

      if (meta.strictTicking) {
        this.setTicked([meta.key], state);
      } else if (meta.leafTicking) {
        var keys = [];

        var travel = function travel(meta) {
          if (meta.isParent) {
            if (!state && !meta.noTick && meta.tickable) {
              keys.push(meta.key);
            }

            if (meta.leafTicking) {
              meta.children.forEach(travel);
            }
          } else if (!meta.noTick && meta.tickable && (!meta.leafFilteredTicking || meta.matchesFilter)) {
            keys.push(meta.key);
          }
        };

        travel(meta);
        this.setTicked(keys, state);
      }
    }
  },
  render: function render(h) {
    var children = this.__getChildren(h, this.nodes);

    return h('div', {
      staticClass: 'q-tree',
      class: this.classes
    }, children.length === 0 ? this.filter ? this.noResultsLabel || this.$q.lang.tree.noResults : this.noNodesLabel || this.$q.lang.tree.noNodes : children);
  },
  created: function created() {
    this.defaultExpandAll === true && this.expandAll();
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/tree/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/uploader/QUploaderBase.js















function QUploaderBase_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function QUploaderBase_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QUploaderBase_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QUploaderBase_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







/* harmony default export */ var QUploaderBase = ({
  props: {
    label: String,
    color: String,
    textColor: String,
    dark: Boolean,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    multiple: Boolean,
    accept: String,
    maxFileSize: Number,
    maxTotalSize: Number,
    filter: Function,
    noThumbnails: Boolean,
    autoUpload: Boolean,
    hideUploadBtn: Boolean,
    disable: Boolean,
    readonly: Boolean
  },
  provide: function provide() {
    return {
      __qUploaderGetInput: this.__getInputControl
    };
  },
  data: function data() {
    return {
      files: [],
      queuedFiles: [],
      uploadedFiles: [],
      dnd: false,
      expanded: false,
      uploadSize: 0,
      uploadedSize: 0
    };
  },
  watch: {
    isUploading: function isUploading(newVal, oldVal) {
      if (oldVal === false && newVal === true) {
        this.$emit('start');
      } else if (oldVal === true && newVal === false) {
        this.$emit('finish');
      }
    }
  },
  computed: {
    /*
     * When extending:
     *   Required : isUploading
     *   Optional: isBusy
     */
    canUpload: function canUpload() {
      return this.editable === true && this.isBusy !== true && this.isUploading !== true && this.queuedFiles.length > 0;
    },
    canAddFiles: function canAddFiles() {
      return this.editable && this.isUploading !== true && (this.multiple === true || this.queuedFiles.length === 0);
    },
    extensions: function extensions() {
      if (this.accept !== void 0) {
        return this.accept.split(',').map(function (ext) {
          ext = ext.trim(); // support "image/*"

          if (ext.endsWith('/*')) {
            ext = ext.slice(0, ext.length - 1);
          }

          return ext;
        });
      }
    },
    uploadProgress: function uploadProgress() {
      return this.uploadSize === 0 ? 0 : this.uploadedSize / this.uploadSize;
    },
    uploadProgressLabel: function uploadProgressLabel() {
      return this.__getProgressLabel(this.uploadProgress);
    },
    uploadedSizeLabel: function uploadedSizeLabel() {
      return humanStorageSize(this.uploadedSize);
    },
    uploadSizeLabel: function uploadSizeLabel() {
      return humanStorageSize(this.uploadSize);
    },
    colorClass: function colorClass() {
      var cls = [];
      this.color !== void 0 && cls.push("bg-".concat(this.color));
      this.textColor !== void 0 && cls.push("text-".concat(this.textColor));
      return cls.join(' ');
    },
    editable: function editable() {
      return this.disable !== true && this.readonly !== true;
    }
  },
  methods: {
    pickFiles: function pickFiles(e) {
      if (this.editable) {
        var input = this.__getFileInput();

        input && input.click(e);
      }
    },
    addFiles: function addFiles(files) {
      if (this.editable && files) {
        this.__addFiles(null, files);
      }
    },
    reset: function reset() {
      if (!this.disable) {
        this.abort();
        this.uploadedSize = 0;
        this.uploadSize = 0;
        this.files = [];
        this.queuedFiles = [];
        this.uploadedFiles = [];
      }
    },
    removeUploadedFiles: function removeUploadedFiles() {
      if (!this.disable) {
        this.files = this.files.filter(function (f) {
          return f.__status !== 'uploaded';
        });
        this.uploadedFiles = [];
      }
    },
    removeQueuedFiles: function removeQueuedFiles() {
      var _this = this;

      if (!this.disable) {
        var removedFiles = [];
        this.files.forEach(function (file) {
          if (file.__status === 'idle' || file.__status === 'failed') {
            _this.uploadSize -= file.size;
            removedFiles.push(file);
          }
        });

        if (removedFiles.length > 0) {
          this.files = this.files.filter(function (f) {
            return f.__status !== 'idle' && f.__status !== 'failed';
          });
          this.queuedFiles = [];
          this.$emit('removed', removedFiles);
        }
      }
    },
    removeFile: function removeFile(file) {
      if (this.disable) {
        return;
      }

      if (file.__status === 'uploaded') {
        this.uploadedFiles = this.uploadedFiles.filter(function (f) {
          return f.name !== file.name;
        });
      } else if (file.__status === 'uploading') {
        file.__abort();
      } else {
        this.uploadSize -= file.size;
      }

      this.files = this.files.filter(function (f) {
        return f.name !== file.name;
      });
      this.queuedFiles = this.queuedFiles.filter(function (f) {
        return f.name !== file.name;
      });
      this.$emit('removed', [file]);
    },
    __getFileInput: function __getFileInput() {
      return this.$refs.input || this.$el.getElementsByClassName('q-uploader__input')[0];
    },
    __getProgressLabel: function __getProgressLabel(p) {
      return (p * 100).toFixed(2) + '%';
    },
    __updateFile: function __updateFile(file, status, uploadedSize) {
      file.__status = status;

      if (status === 'idle') {
        file.__uploaded = 0;
        file.__progress = 0;
        file.__sizeLabel = humanStorageSize(file.size);
        file.__progressLabel = '0.00%';
        return;
      }

      if (status === 'failed') {
        this.$forceUpdate();
        return;
      }

      file.__uploaded = status === 'uploaded' ? file.size : uploadedSize;
      file.__progress = status === 'uploaded' ? 1 : Math.min(0.9999, file.__uploaded / file.size);
      file.__progressLabel = this.__getProgressLabel(file.__progress);
      this.$forceUpdate();
    },
    __addFiles: function __addFiles(e, files) {
      var _this2 = this;

      files = Array.prototype.slice.call(files || e.target.files);
      this.__getFileInput().value = ''; // make sure we don't duplicate files

      files = files.filter(function (file) {
        return !_this2.files.some(function (f) {
          return file.name === f.name;
        });
      });

      if (files.length === 0) {
        return;
      } // filter file types


      if (this.accept !== void 0) {
        files = Array.prototype.filter.call(files, function (file) {
          return _this2.extensions.some(function (ext) {
            return file.type.toUpperCase().startsWith(ext.toUpperCase()) || file.name.toUpperCase().endsWith(ext.toUpperCase());
          });
        });

        if (files.length === 0) {
          return;
        }
      } // filter max file size


      if (this.maxFileSize !== void 0) {
        files = Array.prototype.filter.call(files, function (file) {
          return file.size <= _this2.maxFileSize;
        });

        if (files.length === 0) {
          return;
        }
      } // Cordova/iOS allows selecting multiple files even when the
      // multiple attribute is not specified. We also normalize drag'n'dropped
      // files here:


      if (this.multiple !== true) {
        files = [files[0]];
      }

      if (this.maxTotalSize !== void 0) {
        var size = 0;

        for (var i = 0; i < files.length; i++) {
          size += files[i].size;

          if (size > this.maxTotalSize) {
            if (i > 0) {
              files = files.slice(0, i - 1);
              break;
            } else {
              return;
            }
          }
        }

        if (files.length === 0) {
          return;
        }
      } // do we have custom filter function?


      if (typeof this.filter === 'function') {
        files = this.filter(files);
      }

      if (files.length === 0) {
        return;
      }

      var filesReady = []; // List of image load promises

      files.forEach(function (file) {
        _this2.__updateFile(file, 'idle');

        _this2.uploadSize += file.size;

        if (_this2.noThumbnails !== true && file.type.toUpperCase().startsWith('IMAGE')) {
          var reader = new FileReader();
          var p = new Promise(function (resolve, reject) {
            reader.onload = function (e) {
              var img = new Image();
              img.src = e.target.result;
              file.__img = img;
              resolve(true);
            };

            reader.onerror = function (e) {
              reject(e);
            };
          });
          reader.readAsDataURL(file);
          filesReady.push(p);
        }
      });
      Promise.all(filesReady).then(function () {
        _this2.files = _this2.files.concat(files);
        _this2.queuedFiles = _this2.queuedFiles.concat(files);

        _this2.$emit('added', files);

        _this2.autoUpload === true && _this2.upload();
      });
    },
    __onDragOver: function __onDragOver(e) {
      Object(utils_event["j" /* stopAndPrevent */])(e);
      this.dnd = true;
    },
    __onDragLeave: function __onDragLeave(e) {
      Object(utils_event["j" /* stopAndPrevent */])(e);
      this.dnd = false;
    },
    __onDrop: function __onDrop(e) {
      Object(utils_event["j" /* stopAndPrevent */])(e);
      var files = e.dataTransfer.files;

      if (files.length > 0) {
        this.__addFiles(null, files);
      }

      this.dnd = false;
    },
    __getBtn: function __getBtn(h, show, icon, fn) {
      if (show === true) {
        return h(QBtn["a" /* default */], {
          props: {
            type: 'a',
            icon: this.$q.iconSet.uploader[icon],
            flat: true,
            dense: true
          },
          on: icon === 'add' ? null : {
            click: fn
          }
        }, icon === 'add' ? this.__getInputControl(h) : null);
      }
    },
    __getInputControl: function __getInputControl(h) {
      return [h('input', {
        ref: 'input',
        staticClass: 'q-uploader__input overflow-hidden absolute-full',
        attrs: QUploaderBase_objectSpread({
          type: 'file',
          title: '',
          // try to remove default tooltip
          accept: this.accept
        }, this.multiple === true ? {
          multiple: true
        } : {}),
        on: {
          change: this.__addFiles
        }
      })];
    },
    __getHeader: function __getHeader(h) {
      if (this.$scopedSlots.header !== void 0) {
        return this.$scopedSlots.header(this);
      }

      return h('div', {
        staticClass: 'q-uploader__header-content flex flex-center no-wrap q-gutter-xs'
      }, [this.__getBtn(h, this.queuedFiles.length > 0, 'removeQueue', this.removeQueuedFiles), this.__getBtn(h, this.uploadedFiles.length > 0, 'removeUploaded', this.removeUploadedFiles), this.isUploading === true ? h(QSpinner["a" /* default */], {
        staticClass: 'q-uploader__spinner'
      }) : null, h('div', {
        staticClass: 'col column justify-center'
      }, [this.label !== void 0 ? h('div', {
        staticClass: 'q-uploader__title'
      }, [this.label]) : null, h('div', {
        staticClass: 'q-uploader__subtitle'
      }, [this.uploadSizeLabel + ' / ' + this.uploadProgressLabel])]), this.__getBtn(h, this.canAddFiles, 'add', this.pickFiles), this.__getBtn(h, this.hideUploadBtn === false && this.canUpload === true, 'upload', this.upload), this.__getBtn(h, this.isUploading, 'clear', this.abort)]);
    },
    __getList: function __getList(h) {
      var _this3 = this;

      if (this.$scopedSlots.list !== void 0) {
        return this.$scopedSlots.list(this);
      }

      return this.files.map(function (file) {
        return h('div', {
          key: file.name,
          staticClass: 'q-uploader__file relative-position',
          class: {
            'q-uploader__file--img': file.__img !== void 0,
            'q-uploader__file--failed': file.__status === 'failed',
            'q-uploader__file--uploaded': file.__status === 'uploaded'
          },
          style: file.__img !== void 0 ? {
            backgroundImage: 'url(' + file.__img.src + ')'
          } : null
        }, [h('div', {
          staticClass: 'q-uploader__file-header row flex-center no-wrap'
        }, [file.__status === 'failed' ? h(QIcon["a" /* default */], {
          staticClass: 'q-uploader__file-status',
          props: {
            name: _this3.$q.iconSet.type.negative,
            color: 'negative'
          }
        }) : null, h('div', {
          staticClass: 'q-uploader__file-header-content col'
        }, [h('div', {
          staticClass: 'q-uploader__title'
        }, [file.name]), h('div', {
          staticClass: 'q-uploader__subtitle row items-center no-wrap'
        }, [file.__sizeLabel + ' / ' + file.__progressLabel])]), file.__status === 'uploading' ? h(QCircularProgress, {
          props: {
            value: file.__progress,
            min: 0,
            max: 1,
            indeterminate: file.__progress === 0
          }
        }) : h(QBtn["a" /* default */], {
          props: {
            round: true,
            dense: true,
            flat: true,
            icon: _this3.$q.iconSet.uploader[file.__status === 'uploaded' ? 'done' : 'clear']
          },
          on: {
            click: function click() {
              _this3.removeFile(file);
            }
          }
        })])]);
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.isUploading === true && this.abort();
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-uploader column no-wrap',
      class: {
        'q-uploader--dark': this.dark,
        'q-uploader--bordered': this.bordered,
        'q-uploader--square no-border-radius': this.square,
        'q-uploader--flat no-shadow': this.flat,
        'disabled q-uploader--disable': this.disable
      },
      on: this.canAddFiles === true ? {
        dragover: this.__onDragOver
      } : null
    }, [h('div', {
      staticClass: 'q-uploader__header',
      class: this.colorClass
    }, [this.__getHeader(h)]), h('div', {
      staticClass: 'q-uploader__list scroll'
    }, this.__getList(h)), this.dnd === true ? h('div', {
      staticClass: 'q-uploader__dnd absolute-full',
      on: {
        dragenter: utils_event["j" /* stopAndPrevent */],
        dragover: utils_event["j" /* stopAndPrevent */],
        dragleave: this.__onDragLeave,
        drop: this.__onDrop
      }
    }) : null, this.isBusy === true ? h('div', {
      staticClass: 'q-uploader__overlay absolute-full flex flex-center'
    }, [h(QSpinner["a" /* default */])]) : null]);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/uploader/uploader-xhr-mixin.js


function getFn(prop) {
  return typeof prop === 'function' ? prop : function () {
    return prop;
  };
}

/* harmony default export */ var uploader_xhr_mixin = ({
  props: {
    url: [Function, String],
    method: {
      type: [Function, String],
      default: 'POST'
    },
    fieldName: {
      type: [Function, String],
      default: function _default(file) {
        return file.name;
      }
    },
    headers: [Function, Array],
    formFields: [Function, Array],
    withCredentials: [Function, Boolean],
    sendRaw: [Function, Boolean],
    batch: [Function, Boolean],
    factory: Function
  },
  data: function data() {
    return {
      xhrs: [],
      promises: [],
      workingThreads: 0
    };
  },
  computed: {
    xhrProps: function xhrProps() {
      return {
        url: getFn(this.url),
        method: getFn(this.method),
        headers: getFn(this.headers),
        formFields: getFn(this.formFields),
        fieldName: getFn(this.fieldName),
        withCredentials: getFn(this.withCredentials),
        sendRaw: getFn(this.sendRaw),
        batch: getFn(this.batch)
      };
    },
    isUploading: function isUploading() {
      return this.workingThreads > 0;
    },
    isBusy: function isBusy() {
      return this.promises.length > 0;
    }
  },
  methods: {
    abort: function abort() {
      this.xhrs.forEach(function (x) {
        x.abort();
      });

      if (this.promises.length > 0) {
        this.abortPromises = true;
      }
    },
    upload: function upload() {
      var _this = this;

      if (this.canUpload === false) {
        return;
      }

      var queue = this.queuedFiles.slice(0);
      this.queuedFiles = [];

      if (this.xhrProps.batch(queue)) {
        this.__runFactory(queue);
      } else {
        queue.forEach(function (file) {
          _this.__runFactory([file]);
        });
      }
    },
    __runFactory: function __runFactory(files) {
      var _this2 = this;

      this.workingThreads++;

      if (typeof this.factory !== 'function') {
        this.__uploadFiles(files, {});

        return;
      }

      var res = this.factory(files);

      if (!res) {
        this.$emit('factory-failed', new Error('QUploader: factory() does not return properly'), files);
        this.workingThreads--;
      } else if (typeof res.catch === 'function' && typeof res.then === 'function') {
        this.promises.push(res);

        var failed = function failed(err) {
          if (_this2._isBeingDestroyed !== true && _this2._isDestroyed !== true) {
            _this2.promises = _this2.promises.filter(function (p) {
              return p !== res;
            });

            if (_this2.promises.length === 0) {
              _this2.abortPromises = false;
            }

            _this2.queuedFiles = _this2.queuedFiles.concat(files);
            files.forEach(function (f) {
              _this2.__updateFile(f, 'failed');
            });

            _this2.$emit('factory-failed', err, files);

            _this2.workingThreads--;
          }
        };

        res.then(function (factory) {
          if (_this2.abortPromises === true) {
            failed(new Error('Aborted'));
          } else if (_this2._isBeingDestroyed !== true && _this2._isDestroyed !== true) {
            _this2.promises = _this2.promises.filter(function (p) {
              return p !== res;
            });

            _this2.__uploadFiles(files, factory);
          }
        }).catch(failed);
      } else {
        this.__uploadFiles(files, res || {});
      }
    },
    __uploadFiles: function __uploadFiles(files, factory) {
      var _this3 = this;

      var form = new FormData(),
          xhr = new XMLHttpRequest();

      var getProp = function getProp(name, arg) {
        return factory[name] !== void 0 ? getFn(factory[name])(arg) : _this3.xhrProps[name](arg);
      };

      var url = getProp('url', files);

      if (!url) {
        console.error('q-uploader: invalid or no URL specified');
        this.workingThreads--;
        return;
      }

      var fields = getProp('formFields', files);
      fields !== void 0 && fields.forEach(function (field) {
        form.append(field.name, field.value);
      });
      var uploadIndex = 0,
          uploadIndexSize = 0,
          uploadedSize = 0,
          maxUploadSize = 0,
          aborted;
      xhr.upload.addEventListener('progress', function (e) {
        if (aborted === true) {
          return;
        }

        var loaded = Math.min(maxUploadSize, e.loaded);
        _this3.uploadedSize += loaded - uploadedSize;
        uploadedSize = loaded;
        var size = uploadedSize - uploadIndexSize;

        for (var i = uploadIndex; size > 0 && i < files.length; i++) {
          var file = files[i],
              uploaded = size > file.size;

          if (uploaded) {
            size -= file.size;
            uploadIndex++;
            uploadIndexSize += file.size;

            _this3.__updateFile(file, 'uploading', file.size);
          } else {
            _this3.__updateFile(file, 'uploading', size);

            return;
          }
        }
      }, false);

      xhr.onreadystatechange = function () {
        if (xhr.readyState < 4) {
          return;
        }

        if (xhr.status && xhr.status < 400) {
          _this3.uploadedFiles = _this3.uploadedFiles.concat(files);
          files.forEach(function (f) {
            _this3.__updateFile(f, 'uploaded');
          });

          _this3.$emit('uploaded', {
            files: files,
            xhr: xhr
          });
        } else {
          aborted = true;
          _this3.uploadedSize -= uploadedSize;
          _this3.queuedFiles = _this3.queuedFiles.concat(files);
          files.forEach(function (f) {
            _this3.__updateFile(f, 'failed');
          });

          _this3.$emit('failed', {
            files: files,
            xhr: xhr
          });
        }

        _this3.workingThreads--;
        _this3.xhrs = _this3.xhrs.filter(function (x) {
          return x !== xhr;
        });
      };

      xhr.open(getProp('method', files), url);

      if (getProp('withCredentials', files) === true) {
        xhr.withCredentials = true;
      }

      var headers = getProp('headers', files);
      headers !== void 0 && headers.forEach(function (head) {
        xhr.setRequestHeader(head.name, head.value);
      });
      var sendRaw = getProp('sendRaw', files);
      files.forEach(function (file) {
        _this3.__updateFile(file, 'uploading', 0);

        if (sendRaw !== true) {
          form.append(getProp('fieldName', file), file);
        }

        file.xhr = xhr;
        file.__abort = xhr.abort;
        maxUploadSize += file.size;
      });
      this.$emit('uploading', {
        files: files,
        xhr: xhr
      });
      this.xhrs.push(xhr);

      if (sendRaw === true) {
        xhr.send(new Blob(files));
      } else {
        xhr.send(form);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js



/* harmony default export */ var QUploader = (vue_runtime_esm["a" /* default */].extend({
  name: 'QUploader',
  mixins: [QUploaderBase, uploader_xhr_mixin]
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/uploader/QUploaderAddTrigger.js

/* harmony default export */ var QUploaderAddTrigger = (vue_runtime_esm["a" /* default */].extend({
  name: 'QUploaderAddTrigger',
  inject: {
    __qUploaderGetInput: {
      default: function _default() {
        console.error('QUploaderAddTrigger needs to be child of QUploader');
      }
    }
  },
  render: function render(h) {
    return this.__qUploaderGetInput(h);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/uploader/index.js




// CONCATENATED MODULE: ./node_modules/quasar/src/components/video/QVideo.js

/* harmony default export */ var QVideo = (vue_runtime_esm["a" /* default */].extend({
  name: 'QVideo',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    iframeData: function iframeData() {
      return {
        attrs: {
          src: this.src,
          frameborder: '0',
          allowfullscreen: true
        }
      };
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'q-video',
      on: this.$listeners
    }, [h('iframe', this.iframeData)]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/components/video/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components/virtual-scroll/index.js


// CONCATENATED MODULE: ./node_modules/quasar/src/components.js






























































// CONCATENATED MODULE: ./node_modules/quasar/src/directives/ClosePopup.js

/*
 * depth
 *   < 0  --> close all chain
 *   0    --> disabled
 *   > 0  --> close chain up to N parent
 */

function getDepth(value) {
  if (value === false) {
    return 0;
  }

  if (value === true || value === void 0) {
    return 1;
  }

  var depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}

/* harmony default export */ var ClosePopup = ({
  name: 'close-popup',
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value;
    var ctx = {
      depth: getDepth(value),
      handler: function handler(evt) {
        // allow @click to be emitted
        ctx.depth !== 0 && setTimeout(function () {
          closePortals(vnode.componentInstance || vnode.context, evt, ctx.depth);
        });
      },
      handlerKey: function handlerKey(evt) {
        evt.keyCode === 13 && ctx.handler(evt);
      }
    };

    if (el.__qclosepopup !== void 0) {
      el.__qclosepopup_old = el.__qclosepopup;
    }

    el.__qclosepopup = ctx;
    el.addEventListener('click', ctx.handler);
    el.addEventListener('keyup', ctx.handlerKey);
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value !== oldValue) {
      el.__qclosepopup.depth = getDepth(value);
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qclosepopup_old || el.__qclosepopup;

    if (ctx !== void 0) {
      el.removeEventListener('click', ctx.handler);
      el.removeEventListener('keyup', ctx.handlerKey);
      delete el[el.__qclosepopup_old ? '__qclosepopup_old' : '__qclosepopup'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/GoBack.js


/* harmony default export */ var GoBack = ({
  name: 'go-back',
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value,
        modifiers = _ref.modifiers;
    var ctx = {
      value: value,
      position: window.history.length - 1,
      single: modifiers.single,
      goBack: function goBack() {
        var router = vnode.context.$router;

        if (ctx.single) {
          router.go(-1);
        } else if (Platform["a" /* client */].is.nativeMobile === true) {
          router.go(ctx.position - window.history.length);
        } else {
          router.replace(ctx.value);
        }
      },
      goBackKey: function goBackKey(e) {
        // ENTER
        e.keyCode === 13 && ctx.goBack();
      }
    };

    if (el.__qgoback) {
      el.__qgoback_old = el.__qgoback;
    }

    el.__qgoback = ctx;
    el.addEventListener('click', ctx.goBack);
    el.addEventListener('keyup', ctx.goBackKey);
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value !== oldValue) {
      el.__qgoback.value = value;
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qgoback_old || el.__qgoback;

    if (ctx !== void 0) {
      el.removeEventListener('click', ctx.goBack);
      el.removeEventListener('keyup', ctx.goBackKey);
      delete el[el.__qgoback_old ? '__qgoback_old' : '__qgoback'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/ScrollFire.js





function updateBinding(el, _ref) {
  var value = _ref.value,
      oldValue = _ref.oldValue;
  var ctx = el.__qscrollfire;

  if (typeof value !== 'function') {
    ctx.scrollTarget.removeEventListener('scroll', ctx.scroll);
    console.error('v-scroll-fire requires a function as parameter', el);
    return;
  }

  ctx.handler = value;

  if (typeof oldValue !== 'function') {
    ctx.scrollTarget.addEventListener('scroll', ctx.scroll, utils_event["e" /* listenOpts */].passive);
    ctx.scroll();
  }
}

/* harmony default export */ var ScrollFire = ({
  name: 'scroll-fire',
  bind: function bind(el) {
    var ctx = {
      scroll: Object(debounce["a" /* default */])(function () {
        var containerBottom, elBottom;

        if (ctx.scrollTarget === window) {
          elBottom = el.getBoundingClientRect().bottom;
          containerBottom = window.innerHeight;
        } else {
          elBottom = Object(dom["d" /* offset */])(el).top + Object(dom["c" /* height */])(el);
          containerBottom = Object(dom["d" /* offset */])(ctx.scrollTarget).top + Object(dom["c" /* height */])(ctx.scrollTarget);
        }

        if (elBottom > 0 && elBottom < containerBottom) {
          ctx.scrollTarget.removeEventListener('scroll', ctx.scroll, utils_event["e" /* listenOpts */].passive);
          ctx.handler(el);
        }
      }, 25)
    };

    if (el.__qscrollfire) {
      el.__qscrollfire_old = el.__qscrollfire;
    }

    el.__qscrollfire = ctx;
  },
  inserted: function inserted(el, binding) {
    var ctx = el.__qscrollfire;
    ctx.scrollTarget = getScrollTarget(el);
    updateBinding(el, binding);
  },
  update: function update(el, binding) {
    if (binding.value !== binding.oldValue) {
      updateBinding(el, binding);
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qscrollfire_old || el.__qscrollfire;

    if (ctx !== void 0) {
      ctx.scrollTarget.removeEventListener('scroll', ctx.scroll, utils_event["e" /* listenOpts */].passive);
      delete el[el.__qscrollfire_old ? '__qscrollfire_old' : '__qscrollfire'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/Scroll.js



function Scroll_updateBinding(el, _ref) {
  var value = _ref.value,
      oldValue = _ref.oldValue;
  var ctx = el.__qscroll;

  if (typeof value !== 'function') {
    ctx.scrollTarget.removeEventListener('scroll', ctx.scroll, utils_event["e" /* listenOpts */].passive);
    console.error('v-scroll requires a function as parameter', el);
    return;
  }

  ctx.handler = value;

  if (typeof oldValue !== 'function') {
    ctx.scrollTarget.addEventListener('scroll', ctx.scroll, utils_event["e" /* listenOpts */].passive);
  }
}

/* harmony default export */ var Scroll = ({
  name: 'scroll',
  bind: function bind(el) {
    var ctx = {
      scroll: function scroll() {
        ctx.handler(getScrollPosition(ctx.scrollTarget), getHorizontalScrollPosition(ctx.scrollTarget));
      }
    };

    if (el.__qscroll) {
      el.__qscroll_old = el.__qscroll;
    }

    el.__qscroll = ctx;
  },
  inserted: function inserted(el, binding) {
    var ctx = el.__qscroll;
    ctx.scrollTarget = getScrollTarget(el);
    Scroll_updateBinding(el, binding);
  },
  update: function update(el, binding) {
    if (binding.oldValue !== binding.value) {
      Scroll_updateBinding(el, binding);
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qscroll_old || el.__qscroll;

    if (ctx !== void 0) {
      ctx.scrollTarget.removeEventListener('scroll', ctx.scroll, utils_event["e" /* listenOpts */].passive);
      delete el[el.__qscroll_old ? '__qscroll_old' : '__qscroll'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/TouchHold.js






function TouchHold_update(el, binding) {
  var ctx = el.__qtouchhold;

  if (ctx !== void 0) {
    if (binding.oldValue !== binding.value) {
      ctx.handler = binding.value;
    } // duration in ms, touch in pixels, mouse in pixels


    var data = [600, 5, 7];

    if (typeof binding.arg === 'string' && binding.arg.length) {
      binding.arg.split(':').forEach(function (val, index) {
        var v = parseInt(val, 10);
        v && (data[index] = v);
      });
    }

    ctx.duration = data[0];
    ctx.touchSensitivity = data[1];
    ctx.mouseSensitivity = data[2];
  }
}

/* harmony default export */ var TouchHold = ({
  name: 'touch-hold',
  bind: function bind(el, binding) {
    var modifiers = binding.modifiers; // early return, we don't need to do anything

    if (modifiers.mouse !== true && Platform["a" /* client */].has.touch !== true) {
      return;
    }

    var ctx = {
      mouseStart: function mouseStart(evt) {
        if (Object(utils_event["d" /* leftClick */])(evt) === true) {
          addEvt(ctx, 'temp', [[document, 'mousemove', 'mouseMove', 'notPassiveCapture'], [document, 'click', 'end', 'notPassiveCapture']]);
          ctx.start(evt, true);
        }
      },
      mouseMove: function mouseMove(evt) {
        var _position = Object(utils_event["f" /* position */])(evt),
            top = _position.top,
            left = _position.left;

        if (Math.abs(left - ctx.origin.left) >= ctx.mouseSensitivity || Math.abs(top - ctx.origin.top) >= ctx.mouseSensitivity) {
          ctx.end(evt);
        }
      },
      start: function start(evt, mouseEvent) {
        ctx.origin = Object(utils_event["f" /* position */])(evt);
        var startTime = new Date().getTime();

        if (Platform["a" /* client */].is.mobile === true) {
          document.body.classList.add('non-selectable');
          clearSelection();
        }

        ctx.triggered = false;
        ctx.timer = setTimeout(function () {
          if (Platform["a" /* client */].is.mobile !== true) {
            document.body.classList.add('non-selectable');
            clearSelection();
          }

          ctx.triggered = true;
          ctx.handler({
            evt: evt,
            touch: mouseEvent !== true,
            mouse: mouseEvent === true,
            position: ctx.origin,
            duration: new Date().getTime() - startTime
          });
        }, ctx.duration);
      },
      end: function end(evt) {
        cleanEvt(ctx, 'temp');
        document.body.classList.remove('non-selectable');

        if (ctx.triggered === true) {
          Object(utils_event["j" /* stopAndPrevent */])(evt);
        } else {
          clearTimeout(ctx.timer);
        }
      },
      touchStart: function touchStart(evt) {
        var target = evt.target;

        if (target !== void 0) {
          addEvt(ctx, 'temp', [[target, 'touchmove', 'touchMove', 'notPassiveCapture'], [target, 'touchcancel', 'end', 'notPassiveCapture'], [target, 'touchend', 'end', 'notPassiveCapture']]);
          ctx.start(evt);
        }
      },
      touchMove: function touchMove(evt) {
        var _position2 = Object(utils_event["f" /* position */])(evt),
            top = _position2.top,
            left = _position2.left;

        if (Math.abs(left - ctx.origin.left) >= ctx.touchSensitivity || Math.abs(top - ctx.origin.top) >= ctx.touchSensitivity) {
          ctx.end(evt);
        }
      }
    };

    if (el.__qtouchhold) {
      el.__qtouchhold_old = el.__qtouchhold;
    }

    el.__qtouchhold = ctx;
    TouchHold_update(el, binding);
    modifiers.mouse === true && addEvt(ctx, 'main', [[el, 'mousedown', 'mouseStart', "passive".concat(modifiers.mouseCapture === true ? 'Capture' : '')]]);
    Platform["a" /* client */].has.touch === true && addEvt(ctx, 'main', [[el, 'touchstart', 'touchStart', "passive".concat(modifiers.capture === true ? 'Capture' : '')]]);
  },
  update: TouchHold_update,
  unbind: function unbind(el) {
    var ctx = el.__qtouchhold_old || el.__qtouchhold;

    if (ctx !== void 0) {
      cleanEvt(ctx, 'main');
      cleanEvt(ctx, 'temp');
      clearTimeout(ctx.timer);
      document.body.classList.remove('non-selectable');
      delete el[el.__qtouchhold_old ? '__qtouchhold_old' : '__qtouchhold'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/directives/TouchRepeat.js












var TouchRepeat_keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
},
    keyRegex = new RegExp("^([\\d+]+|".concat(Object.keys(TouchRepeat_keyCodes).join('|'), ")$"), 'i');

function shouldEnd(evt, origin) {
  var _position = Object(utils_event["f" /* position */])(evt),
      top = _position.top,
      left = _position.left;

  return Math.abs(left - origin.left) >= 7 || Math.abs(top - origin.top) >= 7;
}

/* harmony default export */ var TouchRepeat = ({
  name: 'touch-repeat',
  bind: function bind(el, _ref) {
    var modifiers = _ref.modifiers,
        value = _ref.value,
        arg = _ref.arg;
    var keyboard = Object.keys(modifiers).reduce(function (acc, key) {
      if (keyRegex.test(key) === true) {
        var keyCode = isNaN(parseInt(key, 10)) ? TouchRepeat_keyCodes[key.toLowerCase()] : parseInt(key, 10);
        keyCode >= 0 && acc.push(keyCode);
      }

      return acc;
    }, []); // early return, we don't need to do anything

    if (modifiers.mouse !== true && Platform["a" /* client */].has.touch !== true && keyboard.length === 0) {
      return;
    }

    var durations = typeof arg === 'string' && arg.length ? arg.split(':').map(function (val) {
      return parseInt(val, 10);
    }) : [0, 600, 300];
    var durationsLast = durations.length - 1;
    var ctx = {
      keyboard: keyboard,
      handler: value,
      // needed by addEvt / cleanEvt
      stopAndPrevent: utils_event["j" /* stopAndPrevent */],
      mouseStart: function mouseStart(evt) {
        if (ctx.skipMouse === true) {
          // touch actions finally generate this event
          // so we need to avoid it
          ctx.skipMouse = false;
        } else if (ctx.event === void 0 && Object(utils_event["d" /* leftClick */])(evt) === true) {
          addEvt(ctx, 'temp', [[document, 'mousemove', 'move', 'passiveCapture'], [document, 'mouseup', 'end', 'passiveCapture']]);
          ctx.start(evt, true);
        }
      },
      keyboardStart: function keyboardStart(evt) {
        if (keyboard.includes(evt.keyCode)) {
          if (durations[0] === 0 || ctx.event !== void 0) {
            Object(utils_event["j" /* stopAndPrevent */])(evt);
            el.focus();

            if (ctx.event !== void 0) {
              return;
            }
          }

          addEvt(ctx, 'temp', [[document, 'keyup', 'end', 'passiveCapture']]);
          ctx.start(evt, false, true);
        }
      },
      touchStart: function touchStart(evt) {
        var target = evt.target;

        if (target !== void 0) {
          addEvt(ctx, 'temp', [[target, 'touchmove', 'move', 'passiveCapture'], [target, 'touchcancel', 'touchEnd', 'passiveCapture'], [target, 'touchend', 'touchEnd', 'passiveCapture'], [document, 'contextmenu', 'stopAndPrevent', 'notPassiveCapture']]);
          ctx.start(evt);
        }
      },
      touchEnd: function touchEnd(evt) {
        if (ctx.event !== void 0) {
          ctx.skipMouse = true;
          ctx.end(evt);
        }
      },
      start: function start(evt, mouseEvent, keyboardEvent) {
        if (keyboardEvent !== true) {
          ctx.origin = Object(utils_event["f" /* position */])(evt);
        }

        if (Platform["a" /* client */].is.mobile === true) {
          document.body.classList.add('non-selectable');
          clearSelection();
        }

        ctx.event = {
          touch: mouseEvent !== true && keyboardEvent !== true,
          mouse: mouseEvent === true,
          keyboard: keyboardEvent === true,
          startTime: new Date().getTime(),
          repeatCount: 0
        };

        var fn = function fn() {
          if (ctx.event === void 0) {
            return;
          }

          if (ctx.event.repeatCount === 0) {
            ctx.event.evt = evt;

            if (keyboardEvent === true) {
              ctx.event.keyCode = evt.keyCode;
            } else {
              ctx.event.position = Object(utils_event["f" /* position */])(evt);
            }

            if (Platform["a" /* client */].is.mobile !== true) {
              document.documentElement.style.cursor = 'pointer';
              document.body.classList.add('non-selectable');
              clearSelection();
            }
          }

          ctx.event.duration = new Date().getTime() - ctx.event.startTime;
          ctx.event.repeatCount += 1;
          ctx.handler(ctx.event);
          var index = durationsLast < ctx.event.repeatCount ? durationsLast : ctx.event.repeatCount;
          ctx.timer = setTimeout(fn, durations[index]);
        };

        if (durations[0] === 0) {
          fn();
        } else {
          ctx.timer = setTimeout(fn, durations[0]);
        }
      },
      move: function move(evt) {
        if (ctx.event !== void 0 && shouldEnd(evt, ctx.origin) === true) {
          if (ctx.event.touch === true) {
            ctx.touchEnd(evt);
          } else {
            ctx.end(evt);
          }
        }
      },
      end: function end() {
        if (ctx.event === void 0) {
          return;
        }

        var triggered = ctx.event.repeatCount > 0;

        if (Platform["a" /* client */].is.mobile === true || triggered === true) {
          document.documentElement.style.cursor = '';
          document.body.classList.remove('non-selectable');
        }

        cleanEvt(ctx, 'temp');
        clearTimeout(ctx.timer);
        ctx.timer = void 0;
        ctx.event = void 0;
      }
    };

    if (el.__qtouchrepeat) {
      el.__qtouchrepeat_old = el.__qtouchrepeat;
    }

    el.__qtouchrepeat = ctx;
    modifiers.mouse === true && addEvt(ctx, 'main', [[el, 'mousedown', 'mouseStart', "passive".concat(modifiers.mouseCapture === true ? 'Capture' : '')]]);
    Platform["a" /* client */].has.touch === true && addEvt(ctx, 'main', [[el, 'touchstart', 'touchStart', "passive".concat(modifiers.capture === true ? 'Capture' : '')]]);
    keyboard.length > 0 && addEvt(ctx, 'main', [[el, 'keydown', 'keyboardStart', "notPassive".concat(modifiers.keyCapture === true ? 'Capture' : '')]]);
  },
  update: function update(el, binding) {
    var ctx = el.__qtouchrepeat;

    if (ctx !== void 0 && binding.oldValue !== binding.value) {
      ctx.handler = binding.value;
    }
  },
  unbind: function unbind(el) {
    var ctx = el.__qtouchrepeat_old || el.__qtouchrepeat;

    if (ctx !== void 0) {
      clearTimeout(ctx.timer);
      cleanEvt(ctx, 'main');
      cleanEvt(ctx, 'temp');

      if (Platform["a" /* client */].is.mobile === true || ctx.event !== void 0 && ctx.event.repeatCount > 0) {
        document.documentElement.style.cursor = '';
        document.body.classList.remove('non-selectable');
      }

      delete el[el.__qtouchrepeat_old ? '__qtouchrepeat_old' : '__qtouchrepeat'];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/directives.js










// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/AddressbarColor.js



var metaValue;

function getProp() {
  if (Platform["b" /* default */].is.winphone) {
    return 'msapplication-navbutton-color';
  }

  if (Platform["b" /* default */].is.safari) {
    return 'apple-mobile-web-app-status-bar-style';
  } // Chrome, Firefox OS, Opera, Vivaldi


  return 'theme-color';
}

function getMetaTag(v) {
  var els = document.getElementsByTagName('META');

  for (var i in els) {
    if (els[i].name === v) {
      return els[i];
    }
  }
}

function setColor(hexColor) {
  if (metaValue === void 0) {
    // cache it
    metaValue = getProp();
  }

  var metaTag = getMetaTag(metaValue);
  var newTag = metaTag === void 0;

  if (newTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('name', metaValue);
  }

  metaTag.setAttribute('content', hexColor);

  if (newTag) {
    document.head.appendChild(metaTag);
  }
}

/* harmony default export */ var AddressbarColor = ({
  install: function install(_ref) {
    var $q = _ref.$q,
        cfg = _ref.cfg;
    this.set = Platform["d" /* isSSR */] === false && Platform["b" /* default */].is.mobile === true && (Platform["b" /* default */].is.nativeMobile === true || Platform["b" /* default */].is.winphone === true || Platform["b" /* default */].is.safari === true || Platform["b" /* default */].is.webkit === true || Platform["b" /* default */].is.vivaldi === true) ? function (hexColor) {
      var val = hexColor || Object(colors["a" /* getBrand */])('primary');

      if (Platform["b" /* default */].is.nativeMobile === true && window.StatusBar) {
        window.StatusBar.backgroundColorByHexString(val);
      } else {
        setColor(val);
      }
    } : function () {};
    $q.addressbarColor = this;
    cfg.addressbarColor && this.set(cfg.addressbarColor);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/AppFullscreen.js



var prefixes = {};
/* harmony default export */ var AppFullscreen = ({
  isCapable: false,
  isActive: false,
  request: function request(target) {
    if (this.isCapable && !this.isActive) {
      target = target || document.documentElement;
      target[prefixes.request]();
    }
  },
  exit: function exit() {
    if (this.isCapable && this.isActive) {
      document[prefixes.exit]();
    }
  },
  toggle: function toggle(target) {
    if (this.isActive) {
      this.exit();
    } else {
      this.request(target);
    }
  },
  install: function install(_ref) {
    var _this = this;

    var $q = _ref.$q;
    $q.fullscreen = this;

    if (Platform["d" /* isSSR */] === true) {
      return;
    }

    prefixes.request = ['requestFullscreen', 'msRequestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen'].find(function (request) {
      return document.documentElement[request];
    });
    this.isCapable = prefixes.request !== undefined;

    if (!this.isCapable) {
      // it means the browser does NOT support it
      return;
    }

    prefixes.exit = ['exitFullscreen', 'msExitFullscreen', 'mozCancelFullScreen', 'webkitExitFullscreen'].find(function (exit) {
      return document[exit];
    });
    this.isActive = !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    ['onfullscreenchange', 'onmsfullscreenchange', 'onwebkitfullscreenchange'].forEach(function (evt) {
      document[evt] = function () {
        _this.isActive = !_this.isActive;
      };
    });
    vue_runtime_esm["a" /* default */].util.defineReactive(this, 'isActive', this.isActive);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/AppVisibility.js


/* harmony default export */ var AppVisibility = ({
  appVisible: false,
  install: function install(_ref) {
    var _this = this;

    var $q = _ref.$q;

    if (Platform["d" /* isSSR */] === true) {
      this.appVisible = $q.appVisible = true;
      return;
    }

    var prop, evt;

    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      prop = 'hidden';
      evt = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      prop = 'msHidden';
      evt = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      prop = 'webkitHidden';
      evt = 'webkitvisibilitychange';
    }

    var update = function update() {
      _this.appVisible = $q.appVisible = !document[prop];
    };

    update();

    if (evt && typeof document[prop] !== 'undefined') {
      vue_runtime_esm["a" /* default */].util.defineReactive($q, 'appVisible', this.appVisible);
      document.addEventListener(evt, update, false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/dialog-bottom-sheet/BottomSheet.js








function BottomSheet_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BottomSheet_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BottomSheet_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BottomSheet_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ var BottomSheet = (vue_runtime_esm["a" /* default */].extend({
  name: 'BottomSheetPlugin',
  inheritAttrs: false,
  props: {
    title: String,
    message: String,
    actions: Array,
    grid: Boolean,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object],
    dark: Boolean
  },
  methods: {
    show: function show() {
      this.$refs.dialog.show();
    },
    hide: function hide() {
      this.$refs.dialog.hide();
    },
    onOk: function onOk(action) {
      this.$emit('ok', action);
      this.hide();
    },
    __getGrid: function __getGrid(h) {
      var _this = this;

      return this.actions.map(function (action) {
        var img = action.avatar || action.img;
        return action.label === void 0 ? h(QSeparator, {
          staticClass: 'col-all',
          props: {
            dark: _this.dark
          }
        }) : h('div', {
          staticClass: 'q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position',
          class: action.classes,
          attrs: {
            tabindex: 0
          },
          on: {
            click: function click() {
              return _this.onOk(action);
            },
            keyup: function keyup(e) {
              e.keyCode === 13 && _this.onOk(action);
            }
          }
        }, [h('div', {
          staticClass: 'q-focus-helper'
        }), action.icon ? h(QIcon["a" /* default */], {
          props: {
            name: action.icon,
            color: action.color
          }
        }) : img ? h('img', {
          attrs: {
            src: img
          },
          staticClass: action.avatar ? 'q-bottom-sheet__avatar' : null
        }) : h('div', {
          staticClass: 'q-bottom-sheet__empty-icon'
        }), h('div', [action.label])]);
      });
    },
    __getList: function __getList(h) {
      var _this2 = this;

      return this.actions.map(function (action) {
        var img = action.avatar || action.img;
        return action.label === void 0 ? h(QSeparator, {
          props: {
            spaced: true,
            dark: _this2.dark
          }
        }) : h(QItem, {
          staticClass: 'q-bottom-sheet__item',
          class: action.classes,
          props: {
            tabindex: 0,
            clickable: true,
            dark: _this2.dark
          },
          on: {
            click: function click() {
              return _this2.onOk(action);
            },
            keyup: function keyup(e) {
              e.keyCode === 13 && _this2.onOk(action);
            }
          }
        }, [h(QItemSection, {
          props: {
            avatar: true
          }
        }, [action.icon ? h(QIcon["a" /* default */], {
          props: {
            name: action.icon,
            color: action.color
          }
        }) : img ? h('img', {
          attrs: {
            src: img
          },
          staticClass: action.avatar ? 'q-bottom-sheet__avatar' : null
        }) : null]), h(QItemSection, [action.label])]);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var child = [];

    if (this.title) {
      child.push(h(QCardSection, {
        staticClass: 'q-dialog__title'
      }, [this.title]));
    }

    if (this.message) {
      child.push(h(QCardSection, {
        staticClass: 'q-dialog__message scroll'
      }, [this.message]));
    }

    child.push(this.grid === true ? h('div', {
      staticClass: 'scroll row items-stretch justify-start'
    }, this.__getGrid(h)) : h('div', {
      staticClass: 'scroll'
    }, this.__getList(h)));
    return h(QDialog, {
      ref: 'dialog',
      props: BottomSheet_objectSpread({}, this.$attrs, {
        position: 'bottom'
      }),
      on: {
        hide: function hide() {
          _this3.$emit('hide');
        }
      }
    }, [h(QCard, {
      staticClass: "q-bottom-sheet q-bottom-sheet--".concat(this.grid === true ? 'grid' : 'list') + (this.dark === true ? ' q-bottom-sheet--dark' : ''),
      style: this.cardStyle,
      class: this.cardClass
    }, child)]);
  }
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("118e");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/global-dialog.js



var ssrAPI = {
  onOk: function onOk() {
    return ssrAPI;
  },
  okCancel: function okCancel() {
    return ssrAPI;
  },
  hide: function hide() {
    return ssrAPI;
  }
};
/* harmony default export */ var global_dialog = (function (DefaultComponent) {
  return function (_ref) {
    var className = _ref.className,
        klass = _ref.class,
        style = _ref.style,
        component = _ref.component,
        root = _ref.root,
        parent = _ref.parent,
        props = objectWithoutProperties_default()(_ref, ["className", "class", "style", "component", "root", "parent"]);

    if (Platform["d" /* isSSR */] === true) {
      return ssrAPI;
    }

    klass !== void 0 && (props.cardClass = klass);
    style !== void 0 && (props.cardStyle = style);
    var okFns = [],
        cancelFns = [],
        API = {
      onOk: function onOk(fn) {
        okFns.push(fn);
        return API;
      },
      onCancel: function onCancel(fn) {
        cancelFns.push(fn);
        return API;
      },
      onDismiss: function onDismiss(fn) {
        okFns.push(fn);
        cancelFns.push(fn);
        return API;
      },
      hide: function hide() {
        vm.$refs.dialog.hide();
        return API;
      }
    };
    var node = document.createElement('div');
    document.body.appendChild(node);
    var emittedOK = false;
    var on = {
      ok: function ok(data) {
        emittedOK = true;
        okFns.forEach(function (fn) {
          fn(data);
        });
      },
      hide: function hide() {
        vm.$destroy();
        vm.$el.remove();
        vm = null;

        if (emittedOK !== true) {
          cancelFns.forEach(function (fn) {
            fn();
          });
        }
      }
    };
    vue_runtime_esm["a" /* default */].observable(props);
    var DialogComponent = component !== void 0 ? component : DefaultComponent;
    var attrs = component === void 0 ? props : void 0;
    var vm = new vue_runtime_esm["a" /* default */]({
      name: 'QGlobalDialog',
      el: node,
      parent: parent === void 0 ? root : parent,
      render: function render(h) {
        return h(DialogComponent, {
          ref: 'dialog',
          props: props,
          attrs: attrs,
          on: on
        });
      },
      mounted: function mounted() {
        this.$refs.dialog.show();
      }
    });
    return API;
  };
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/BottomSheet.js


/* harmony default export */ var plugins_BottomSheet = ({
  install: function install(_ref) {
    var $q = _ref.$q;
    this.create = $q.bottomSheet = global_dialog(BottomSheet);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/Cookies.js











function Cookies_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Cookies_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Cookies_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Cookies_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function encode(string) {
  return encodeURIComponent(string);
}

function decode(string) {
  return decodeURIComponent(string);
}

function stringifyCookieValue(value) {
  return encode(value === Object(value) ? JSON.stringify(value) : '' + value);
}

function read(string) {
  if (string === '') {
    return string;
  }

  if (string.indexOf('"') === 0) {
    // This is a quoted cookie as according to RFC2068, unescape...
    string = string.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  } // Replace server-side written pluses with spaces.
  // If we can't decode the cookie, ignore it, it's unusable.
  // If we can't parse the cookie, ignore it, it's unusable.


  string = decode(string.replace(/\+/g, ' '));

  try {
    string = JSON.parse(string);
  } catch (e) {}

  return string;
}

function _set(key, val) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var ssr = arguments.length > 3 ? arguments[3] : undefined;
  var expire, expireValue;

  if (opts.expires !== void 0) {
    expireValue = parseFloat(opts.expires);

    if (isNaN(expireValue)) {
      expire = opts.expires;
    } else {
      expire = new Date();
      expire.setMilliseconds(expire.getMilliseconds() + expireValue * 864e+5);
      expire = expire.toUTCString();
    }
  }

  var keyValue = "".concat(encode(key), "=").concat(stringifyCookieValue(val));
  var cookie = [keyValue, expire !== void 0 ? '; Expires=' + expire : '', // use expires attribute, max-age is not supported by IE
  opts.path ? '; Path=' + opts.path : '', opts.domain ? '; Domain=' + opts.domain : '', opts.sameSite ? '; SameSite=' + opts.sameSite : '', opts.httpOnly ? '; HttpOnly' : '', opts.secure ? '; Secure' : '', opts.other ? '; ' + opts.other : ''].join('');

  if (ssr) {
    if (ssr.req.qCookies) {
      ssr.req.qCookies.push(cookie);
    } else {
      ssr.req.qCookies = [cookie];
    }

    ssr.res.setHeader('Set-Cookie', ssr.req.qCookies); // make temporary update so future get()
    // within same SSR timeframe would return the set value

    var all = ssr.req.headers.cookie || '';

    if (expire !== void 0 && expireValue < 0) {
      var _val = _get(key, ssr);

      if (_val !== undefined) {
        all = all.replace("".concat(key, "=").concat(_val, "; "), '').replace("; ".concat(key, "=").concat(_val), '').replace("".concat(key, "=").concat(_val), '');
      }
    } else {
      all = all ? "".concat(keyValue, "; ").concat(all) : cookie;
    }

    ssr.req.headers.cookie = all;
  } else {
    document.cookie = cookie;
  }
}

function _get(key, ssr) {
  var result = key ? undefined : {},
      cookieSource = ssr ? ssr.req.headers : document,
      cookies = cookieSource.cookie ? cookieSource.cookie.split('; ') : [],
      i = 0,
      l = cookies.length,
      parts,
      name,
      cookie;

  for (; i < l; i++) {
    parts = cookies[i].split('=');
    name = decode(parts.shift());
    cookie = parts.join('=');

    if (!key) {
      result[name] = cookie;
    } else if (key === name) {
      result = read(cookie);
      break;
    }
  }

  return result;
}

function _remove(key, options, ssr) {
  _set(key, '', Cookies_objectSpread({
    expires: -1
  }, options), ssr);
}

function _has(key, ssr) {
  return _get(key, ssr) !== undefined;
}

function getObject() {
  var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ssr = ctx.ssr;
  return {
    get: function get(key) {
      return _get(key, ssr);
    },
    set: function set(key, val, opts) {
      return _set(key, val, opts, ssr);
    },
    has: function has(key) {
      return _has(key, ssr);
    },
    remove: function remove(key, options) {
      return _remove(key, options, ssr);
    },
    getAll: function getAll() {
      return _get(null, ssr);
    }
  };
}
/* harmony default export */ var Cookies = ({
  parseSSR: function parseSSR(
  /* ssrContext */
  ssr) {
    return ssr ? getObject({
      ssr: ssr
    }) : this;
  },
  install: function install(_ref) {
    var $q = _ref.$q,
        queues = _ref.queues;

    if (Platform["d" /* isSSR */] === true) {
      queues.server.push(function (q, ctx) {
        q.cookies = getObject(ctx);
      });
    } else {
      Object.assign(this, getObject());
      $q.cookies = this;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/components/dialog-plugin/DialogPlugin.js








function DialogPlugin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DialogPlugin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DialogPlugin_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DialogPlugin_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/* harmony default export */ var DialogPlugin = (vue_runtime_esm["a" /* default */].extend({
  name: 'DialogPlugin',
  inheritAttrs: false,
  props: {
    title: String,
    message: String,
    prompt: Object,
    options: Object,
    html: Boolean,
    ok: {
      type: [String, Object, Boolean],
      default: true
    },
    cancel: [String, Object, Boolean],
    stackButtons: Boolean,
    color: String,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object],
    dark: Boolean
  },
  computed: {
    hasForm: function hasForm() {
      return this.prompt || this.options;
    },
    okLabel: function okLabel() {
      return this.ok === true ? this.$q.lang.label.ok : this.ok;
    },
    cancelLabel: function cancelLabel() {
      return this.cancel === true ? this.$q.lang.label.cancel : this.cancel;
    },
    vmColor: function vmColor() {
      return this.color || (this.dark === true ? 'amber' : 'primary');
    },
    okProps: function okProps() {
      return Object(this.ok) === this.ok ? DialogPlugin_objectSpread({
        color: this.vmColor,
        label: this.$q.lang.label.ok,
        ripple: false
      }, this.ok) : {
        color: this.vmColor,
        flat: true,
        label: this.okLabel,
        ripple: false
      };
    },
    cancelProps: function cancelProps() {
      return Object(this.cancel) === this.cancel ? DialogPlugin_objectSpread({
        color: this.vmColor,
        label: this.$q.lang.label.cancel,
        ripple: false
      }, this.cancel) : {
        color: this.vmColor,
        flat: true,
        label: this.cancelLabel,
        ripple: false
      };
    }
  },
  methods: {
    show: function show() {
      this.$refs.dialog.show();
    },
    hide: function hide() {
      this.$refs.dialog.hide();
    },
    getPrompt: function getPrompt(h) {
      var _this = this;

      return [h(QInput, {
        props: {
          value: this.prompt.model,
          type: this.prompt.type || 'text',
          color: this.vmColor,
          dense: true,
          autofocus: true,
          dark: this.dark
        },
        on: {
          input: function input(v) {
            _this.prompt.model = v;
          },
          keyup: function keyup(evt) {
            // if ENTER key
            if (_this.prompt.type !== 'textarea' && evt.keyCode === 13) {
              _this.onOk();
            }
          }
        }
      })];
    },
    getOptions: function getOptions(h) {
      var _this2 = this;

      return [h(QOptionGroup, {
        props: {
          value: this.options.model,
          type: this.options.type,
          color: this.vmColor,
          inline: this.options.inline,
          options: this.options.items,
          dark: this.dark
        },
        on: {
          input: function input(v) {
            _this2.options.model = v;
          }
        }
      })];
    },
    getButtons: function getButtons(h) {
      var child = [];

      if (this.cancel) {
        child.push(h(QBtn["a" /* default */], {
          props: this.cancelProps,
          attrs: {
            autofocus: !this.prompt && !this.ok
          },
          on: {
            click: this.onCancel
          }
        }));
      }

      if (this.ok) {
        child.push(h(QBtn["a" /* default */], {
          props: this.okProps,
          attrs: {
            autofocus: !this.prompt
          },
          on: {
            click: this.onOk
          }
        }));
      }

      if (child.length > 0) {
        return h(QCardActions, {
          staticClass: this.stackButtons === true ? 'items-end' : null,
          props: {
            vertical: this.stackButtons,
            align: 'right'
          }
        }, child);
      }
    },
    onOk: function onOk() {
      this.$emit('ok', Object(utils_clone["a" /* default */])(this.getData()));
      this.hide();
    },
    onCancel: function onCancel() {
      this.hide();
    },
    getData: function getData() {
      if (this.prompt) {
        return this.prompt.model;
      }

      if (this.options) {
        return this.options.model;
      }
    },
    getSection: function getSection(h, staticClass, text) {
      return this.html === true ? h(QCardSection, {
        staticClass: staticClass,
        domProps: {
          innerHTML: text
        }
      }) : h(QCardSection, {
        staticClass: staticClass
      }, [text]);
    }
  },
  render: function render(h) {
    var _this3 = this;

    var child = [];

    if (this.title) {
      child.push(this.getSection(h, 'q-dialog__title', this.title));
    }

    if (this.message) {
      child.push(this.getSection(h, 'q-dialog__message scroll', this.message));
    }

    if (this.hasForm) {
      child.push(h(QCardSection, {
        staticClass: 'scroll'
      }, this.prompt ? this.getPrompt(h) : this.getOptions(h)));
    }

    if (this.ok || this.cancel) {
      child.push(this.getButtons(h));
    }

    return h(QDialog, {
      ref: 'dialog',
      props: DialogPlugin_objectSpread({}, this.$attrs, {
        value: this.value
      }),
      on: {
        hide: function hide() {
          _this3.$emit('hide');
        }
      }
    }, [h(QCard, {
      staticClass: 'q-dialog-plugin' + (this.dark === true ? ' q-dialog-plugin--dark' : ''),
      style: this.cardStyle,
      class: this.cardClass,
      props: {
        dark: this.dark
      }
    }, child)]);
  }
}));
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/Dialog.js


/* harmony default export */ var Dialog = ({
  install: function install(_ref) {
    var $q = _ref.$q;
    this.create = $q.dialog = global_dialog(DialogPlugin);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js









function LoadingBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LoadingBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LoadingBar_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LoadingBar_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var LoadingBar = ({
  isActive: false,
  start: function start() {},
  stop: function stop() {},
  increment: function increment() {},
  setDefaults: function setDefaults() {},
  install: function install(_ref) {
    var _this = this;

    var $q = _ref.$q,
        cfg = _ref.cfg;

    if (Platform["d" /* isSSR */] === true) {
      $q.loadingBar = this;
      return;
    }

    var props = cfg.loadingBar !== void 0 ? LoadingBar_objectSpread({}, cfg.loadingBar) : {};
    var bar = $q.loadingBar = new vue_runtime_esm["a" /* default */]({
      name: 'LoadingBar',
      render: function render(h) {
        return h(QAjaxBar, {
          ref: 'bar',
          props: props
        });
      }
    }).$mount().$refs.bar;
    Object.assign(this, {
      start: function start(speed) {
        bar.start(speed);
        _this.isActive = bar.isActive = bar.calls > 0;
      },
      stop: function stop() {
        bar.stop();
        _this.isActive = bar.isActive = bar.calls > 0;
      },
      increment: bar.increment,
      setDefaults: function setDefaults(opts) {
        opts === Object(opts) && Object.assign(props, opts);
        bar.$parent.$forceUpdate();
      }
    });
    vue_runtime_esm["a" /* default */].util.defineReactive(this, 'isActive', this.isActive);
    vue_runtime_esm["a" /* default */].util.defineReactive(bar, 'isActive', this.isActive);
    bar.setDefaults = this.setDefaults;
    document.body.appendChild(bar.$parent.$el);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/Loading.js









function Loading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Loading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Loading_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Loading_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Loading_vm,
    Loading_timeout,
    Loading_props = {},
    originalDefaults = {
  delay: 0,
  message: false,
  spinnerSize: 80,
  spinnerColor: 'white',
  messageColor: 'white',
  backgroundColor: 'black',
  spinner: QSpinner["a" /* default */],
  customClass: ''
},
    defaults = Loading_objectSpread({}, originalDefaults);

var Loading = {
  isActive: false,
  show: function show(opts) {
    var _this = this;

    if (Platform["d" /* isSSR */] === true) {
      return;
    }

    Loading_props = opts === Object(opts) && opts.ignoreDefaults === true ? Loading_objectSpread({}, originalDefaults, {}, opts) : Loading_objectSpread({}, defaults, {}, opts);
    Loading_props.customClass += " text-".concat(Loading_props.backgroundColor);
    this.isActive = true;

    if (Loading_vm !== void 0) {
      Loading_vm.$forceUpdate();
      return;
    }

    clearTimeout(Loading_timeout);
    Loading_timeout = setTimeout(function () {
      Loading_timeout = void 0;
      var node = document.createElement('div');
      document.body.appendChild(node);
      document.body.classList.add('q-body--loading');
      Loading_vm = new vue_runtime_esm["a" /* default */]({
        name: 'QLoading',
        el: node,
        render: function render(h) {
          return h('transition', {
            props: {
              name: 'q-transition--fade',
              appear: true
            },
            on: {
              'after-leave': function afterLeave() {
                // might be called to finalize
                // previous leave, even if it was cancelled
                if (_this.isActive !== true && Loading_vm !== void 0) {
                  Loading_vm.$destroy();
                  document.body.classList.remove('q-body--loading');
                  Loading_vm.$el.remove();
                  Loading_vm = void 0;
                }
              }
            }
          }, [_this.isActive === true ? h('div', {
            staticClass: 'q-loading fullscreen column flex-center z-max',
            key: Object(uid["a" /* default */])(),
            class: Loading_props.customClass.trim()
          }, [h(Loading_props.spinner, {
            props: {
              color: Loading_props.spinnerColor,
              size: Loading_props.spinnerSize
            }
          }), Loading_props.message && h('div', {
            class: "text-".concat(Loading_props.messageColor),
            domProps: defineProperty_default()({}, Loading_props.sanitize === true ? 'textContent' : 'innerHTML', Loading_props.message)
          }) || void 0]) : null]);
        }
      });
    }, Loading_props.delay);
  },
  hide: function hide() {
    if (this.isActive === true) {
      if (Loading_timeout !== void 0) {
        clearTimeout(Loading_timeout);
        Loading_timeout = void 0;
      }

      this.isActive = false;
    }
  },
  setDefaults: function setDefaults(opts) {
    opts === Object(opts) && Object.assign(defaults, opts);
  },
  install: function install(_ref) {
    var $q = _ref.$q,
        loading = _ref.cfg.loading;
    this.setDefaults(loading);
    $q.loading = this;
  }
};
vue_runtime_esm["a" /* default */].util.defineReactive(Loading, 'isActive', Loading.isActive);
/* harmony default export */ var plugins_Loading = (Loading);
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/Meta.js











var updateId, ssrTakeover;

function normalize(meta) {
  if (meta.title) {
    meta.title = meta.titleTemplate ? meta.titleTemplate(meta.title) : meta.title;
    delete meta.titleTemplate;
  }

  ;
  [['meta', 'content'], ['link', 'href']].forEach(function (type) {
    var metaType = meta[type[0]],
        metaProp = type[1];

    for (var name in metaType) {
      var metaLink = metaType[name];

      if (metaLink.template) {
        if (Object.keys(metaLink).length === 1) {
          delete metaType[name];
        } else {
          metaLink[metaProp] = metaLink.template(metaLink[metaProp] || '');
          delete metaLink.template;
        }
      }
    }
  });
}

function changed(old, def) {
  if (Object.keys(old).length !== Object.keys(def).length) {
    return true;
  }

  for (var key in old) {
    if (old[key] !== def[key]) {
      return true;
    }
  }
}

function bodyFilter(name) {
  return ['class', 'style'].includes(name) === false;
}

function htmlFilter(name) {
  return ['lang', 'dir'].includes(name) === false;
}

function Meta_diff(meta, other) {
  var add = {},
      remove = {};

  if (meta === void 0) {
    return {
      add: other,
      remove: remove
    };
  }

  if (meta.title !== other.title) {
    add.title = other.title;
  }

  ;
  ['meta', 'link', 'script', 'htmlAttr', 'bodyAttr'].forEach(function (type) {
    var old = meta[type],
        cur = other[type];
    remove[type] = [];

    if (old === void 0 || old === null) {
      add[type] = cur;
      return;
    }

    add[type] = {};

    for (var key in old) {
      if (cur.hasOwnProperty(key) === false) {
        remove[type].push(key);
      }
    }

    for (var _key in cur) {
      if (old.hasOwnProperty(_key) === false) {
        add[type][_key] = cur[_key];
      } else if (changed(old[_key], cur[_key]) === true) {
        remove[type].push(_key);
        add[type][_key] = cur[_key];
      }
    }
  });
  return {
    add: add,
    remove: remove
  };
}

function Meta_apply(_ref) {
  var add = _ref.add,
      remove = _ref.remove;

  if (add.title) {
    document.title = add.title;
  }

  if (Object.keys(remove).length > 0) {
    ['meta', 'link', 'script'].forEach(function (type) {
      remove[type].forEach(function (name) {
        document.head.querySelector("".concat(type, "[data-qmeta=\"").concat(name, "\"]")).remove();
      });
    });
    remove.htmlAttr.filter(htmlFilter).forEach(function (name) {
      document.documentElement.removeAttribute(name);
    });
    remove.bodyAttr.filter(bodyFilter).forEach(function (name) {
      document.body.removeAttribute(name);
    });
  }

  ;
  ['meta', 'link', 'script'].forEach(function (type) {
    var metaType = add[type];

    for (var name in metaType) {
      var tag = document.createElement(type);

      for (var att in metaType[name]) {
        if (att !== 'innerHTML') {
          tag.setAttribute(att, metaType[name][att]);
        }
      }

      tag.setAttribute('data-qmeta', name);

      if (type === 'script') {
        tag.innerHTML = metaType[name].innerHTML || '';
      }

      document.head.appendChild(tag);
    }
  });
  Object.keys(add.htmlAttr).filter(htmlFilter).forEach(function (name) {
    document.documentElement.setAttribute(name, add.htmlAttr[name] || '');
  });
  Object.keys(add.bodyAttr).filter(bodyFilter).forEach(function (name) {
    document.body.setAttribute(name, add.bodyAttr[name] || '');
  });
}

function parseMeta(component, meta) {
  if (component._inactive === true) {
    return;
  } // if it has meta


  if (component.__qMeta !== void 0) {
    extend(true, meta, component.__qMeta);

    if (component.$options.meta.stopPropagation === true) {
      return;
    }
  }

  component.$children.forEach(function (child) {
    parseMeta(child, meta);
  });
}

function updateClient() {
  if (ssrTakeover === true) {
    ssrTakeover = false;
    this.$root.__currentMeta = window.__Q_META__;
    document.body.querySelector('script[data-qmeta-init]').remove();
    return;
  }

  var meta = {
    title: '',
    titleTemplate: null,
    meta: {},
    link: {},
    script: {},
    htmlAttr: {},
    bodyAttr: {}
  };
  parseMeta(this.$root, meta);
  normalize(meta);
  Meta_apply(Meta_diff(this.$root.__currentMeta, meta));
  this.$root.__currentMeta = meta;
}

function getAttr(seed) {
  return function (att) {
    var val = seed[att];
    return att + (val !== void 0 ? "=\"".concat(val, "\"") : '');
  };
}

function getHead(meta) {
  var output = '';

  if (meta.title) {
    output += "<title>".concat(meta.title, "</title>");
  }

  ;
  ['meta', 'link', 'script'].forEach(function (type) {
    var metaType = meta[type];

    for (var att in metaType) {
      var attrs = Object.keys(metaType[att]).filter(function (att) {
        return att !== 'innerHTML';
      }).map(getAttr(metaType[att]));
      output += "<".concat(type, " ").concat(attrs.join(' '), " data-qmeta=\"").concat(att, "\">");

      if (type === 'script') {
        output += (metaType[att].innerHTML || '') + "</script>";
      }
    }
  });
  return output;
}

function getServerMeta(app, html) {
  var meta = {
    title: '',
    titleTemplate: null,
    meta: {},
    link: {},
    htmlAttr: {},
    bodyAttr: {},
    noscript: {}
  };
  parseMeta(app, meta);
  normalize(meta);
  var tokens = {
    '%%Q_HTML_ATTRS%%': Object.keys(meta.htmlAttr).filter(htmlFilter).map(getAttr(meta.htmlAttr)).join(' '),
    '%%Q_HEAD_TAGS%%': getHead(meta),
    '%%Q_BODY_ATTRS%%': Object.keys(meta.bodyAttr).filter(bodyFilter).map(getAttr(meta.bodyAttr)).join(' '),
    '%%Q_BODY_TAGS%%': Object.keys(meta.noscript).map(function (name) {
      return "<noscript data-qmeta=\"".concat(name, "\">").concat(meta.noscript[name], "</noscript>");
    }).join('') + "<script data-qmeta-init>window.__Q_META__=".concat(delete meta.noscript && JSON.stringify(meta), "</script>")
  };
  Object.keys(tokens).forEach(function (key) {
    html = html.replace(key, tokens[key]);
  });
  return html;
}

function Meta_beforeCreate() {
  if (typeof this.$options.meta === 'function') {
    if (this.$options.computed === void 0) {
      this.$options.computed = {};
    }

    this.$options.computed.__qMeta = this.$options.meta;
  } else if (hasMeta(this) === true) {
    this.__qMeta = this.$options.meta;
  }
} // needs to be really fast


function hasMeta(vm) {
  return vm.$options.meta !== void 0 && vm.$options.meta !== null;
}

function triggerMeta() {
  hasMeta(this) === true && this.__qMetaUpdate();
}

/* harmony default export */ var Meta = ({
  install: function install(_ref2) {
    var queues = _ref2.queues;

    if (Platform["d" /* isSSR */] === true) {
      vue_runtime_esm["a" /* default */].prototype.$getMetaHTML = function (app) {
        return function (html) {
          return getServerMeta(app, html);
        };
      };

      vue_runtime_esm["a" /* default */].mixin({
        beforeCreate: Meta_beforeCreate
      });
      queues.server.push(function (_, ctx) {
        ctx.ssr.Q_HTML_ATTRS += ' %%Q_HTML_ATTRS%%';
        Object.assign(ctx.ssr, {
          Q_HEAD_TAGS: '%%Q_HEAD_TAGS%%',
          Q_BODY_ATTRS: '%%Q_BODY_ATTRS%%',
          Q_BODY_TAGS: '%%Q_BODY_TAGS%%'
        });
      });
    } else {
      ssrTakeover = Platform["c" /* fromSSR */];
      vue_runtime_esm["a" /* default */].mixin({
        beforeCreate: Meta_beforeCreate,
        created: function created() {
          if (hasMeta(this) === true) {
            this.__qMetaUnwatch = this.$watch('__qMeta', this.__qMetaUpdate);
          }
        },
        activated: triggerMeta,
        deactivated: triggerMeta,
        beforeMount: triggerMeta,
        destroyed: function destroyed() {
          if (hasMeta(this) === true) {
            this.__qMetaUnwatch();

            this.__qMetaUpdate();
          }
        },
        methods: {
          __qMetaUpdate: function __qMetaUpdate() {
            clearTimeout(updateId);
            updateId = setTimeout(updateClient.bind(this), 50);
          }
        }
      });
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Screen.js
var Screen = __webpack_require__("09f9");

// CONCATENATED MODULE: ./node_modules/quasar/src/utils/web-storage.js





function web_storage_encode(value) {
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return '__q_date|' + value.toUTCString();
  }

  if (Object.prototype.toString.call(value) === '[object RegExp]') {
    return '__q_expr|' + value.source;
  }

  if (typeof value === 'number') {
    return '__q_numb|' + value;
  }

  if (typeof value === 'boolean') {
    return '__q_bool|' + (value ? '1' : '0');
  }

  if (typeof value === 'string') {
    return '__q_strn|' + value;
  }

  if (typeof value === 'function') {
    return '__q_strn|' + value.toString();
  }

  if (value === Object(value)) {
    return '__q_objt|' + JSON.stringify(value);
  } // hmm, we don't know what to do with it,
  // so just return it as is


  return value;
}

function web_storage_decode(value) {
  var type, length, source;
  length = value.length;

  if (length < 9) {
    // then it wasn't encoded by us
    return value;
  }

  type = value.substr(0, 8);
  source = value.substring(9);

  switch (type) {
    case '__q_date':
      return new Date(source);

    case '__q_expr':
      return new RegExp(source);

    case '__q_numb':
      return Number(source);

    case '__q_bool':
      return Boolean(source === '1');

    case '__q_strn':
      return '' + source;

    case '__q_objt':
      return JSON.parse(source);

    default:
      // hmm, we reached here, we don't know the type,
      // then it means it wasn't encoded by us, so just
      // return whatever value it is
      return value;
  }
}

function getEmptyStorage() {
  var fn = function fn() {};

  return {
    has: fn,
    getLength: fn,
    getItem: fn,
    getIndex: fn,
    getAll: fn,
    set: fn,
    remove: fn,
    clear: fn,
    isEmpty: fn
  };
}
function getStorage(type) {
  var webStorage = window[type + 'Storage'],
      get = function get(key) {
    var item = webStorage.getItem(key);
    return item ? web_storage_decode(item) : null;
  };

  return {
    has: function has(key) {
      return webStorage.getItem(key) !== null;
    },
    getLength: function getLength() {
      return webStorage.length;
    },
    getItem: get,
    getIndex: function getIndex(index) {
      if (index < webStorage.length) {
        return get(webStorage.key(index));
      }
    },
    getAll: function getAll() {
      var result = {},
          key,
          len = webStorage.length;

      for (var i = 0; i < len; i++) {
        key = webStorage.key(i);
        result[key] = get(key);
      }

      return result;
    },
    set: function set(key, value) {
      webStorage.setItem(key, web_storage_encode(value));
    },
    remove: function remove(key) {
      webStorage.removeItem(key);
    },
    clear: function clear() {
      webStorage.clear();
    },
    isEmpty: function isEmpty() {
      return webStorage.length === 0;
    }
  };
}
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js



/* harmony default export */ var LocalStorage = ({
  install: function install(_ref) {
    var $q = _ref.$q;
    var storage = Platform["d" /* isSSR */] === true || Platform["a" /* client */].has.webStorage === false ? getEmptyStorage() : getStorage('local');
    $q.localStorage = storage;
    Object.assign(this, storage);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins/SessionStorage.js



/* harmony default export */ var SessionStorage = ({
  install: function install(_ref) {
    var $q = _ref.$q;
    var storage = Platform["d" /* isSSR */] === true || Platform["a" /* client */].has.webStorage === false ? getEmptyStorage() : getStorage('session');
    $q.sessionStorage = storage;
    Object.assign(this, storage);
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/plugins.js















// CONCATENATED MODULE: ./node_modules/quasar/src/utils/open-url.js


/* harmony default export */ var open_url = (function (url, reject) {
  var open = window.open;

  if (Platform["b" /* default */].is.cordova === true) {
    if (cordova !== void 0 && cordova.InAppBrowser !== void 0 && cordova.InAppBrowser.open !== void 0) {
      open = cordova.InAppBrowser.open;
    } else if (navigator !== void 0 && navigator.app !== void 0) {
      return navigator.app.loadUrl(url, {
        openExternal: true
      });
    }
  } else if (vue_runtime_esm["a" /* default */].prototype.$q.electron !== void 0) {
    return vue_runtime_esm["a" /* default */].prototype.$q.electron.shell.openExternal(url);
  }

  var win = open(url, '_blank');

  if (win) {
    win.focus();
    return win;
  } else {
    reject && reject();
  }
});
// CONCATENATED MODULE: ./node_modules/quasar/src/utils.js















function noop() {}


// CONCATENATED MODULE: ./node_modules/quasar/src/index.esm.js
/* unused concated harmony import QAjaxBar */
/* concated harmony reexport QAvatar */__webpack_require__.d(__webpack_exports__, "a", function() { return QAvatar["a" /* default */]; });
/* unused concated harmony import QBadge */
/* unused concated harmony import QBanner */
/* unused concated harmony import QBar */
/* unused concated harmony import QBreadcrumbs */
/* unused concated harmony import QBreadcrumbsEl */
/* concated harmony reexport QBtn */__webpack_require__.d(__webpack_exports__, "b", function() { return QBtn["a" /* default */]; });
/* unused concated harmony import QBtnGroup */
/* unused concated harmony import QBtnDropdown */
/* unused concated harmony import QBtnToggle */
/* concated harmony reexport QCard */__webpack_require__.d(__webpack_exports__, "c", function() { return QCard; });
/* concated harmony reexport QCardSection */__webpack_require__.d(__webpack_exports__, "d", function() { return QCardSection; });
/* unused concated harmony import QCardActions */
/* unused concated harmony import QCarousel */
/* unused concated harmony import QCarouselSlide */
/* unused concated harmony import QCarouselControl */
/* unused concated harmony import QChatMessage */
/* unused concated harmony import QCheckbox */
/* unused concated harmony import QChip */
/* unused concated harmony import QCircularProgress */
/* unused concated harmony import QColor */
/* concated harmony reexport QDate */__webpack_require__.d(__webpack_exports__, "e", function() { return QDate; });
/* unused concated harmony import QTime */
/* unused concated harmony import QDialog */
/* unused concated harmony import QEditor */
/* unused concated harmony import QFab */
/* unused concated harmony import QFabAction */
/* unused concated harmony import QField */
/* unused concated harmony import QForm */
/* concated harmony reexport QIcon */__webpack_require__.d(__webpack_exports__, "h", function() { return QIcon["a" /* default */]; });
/* unused concated harmony import QImg */
/* unused concated harmony import QInfiniteScroll */
/* unused concated harmony import QInnerLoading */
/* concated harmony reexport QInput */__webpack_require__.d(__webpack_exports__, "i", function() { return QInput; });
/* unused concated harmony import QKnob */
/* concated harmony reexport QLayout */__webpack_require__.d(__webpack_exports__, "m", function() { return QLayout; });
/* concated harmony reexport QDrawer */__webpack_require__.d(__webpack_exports__, "f", function() { return QDrawer; });
/* unused concated harmony import QFooter */
/* concated harmony reexport QHeader */__webpack_require__.d(__webpack_exports__, "g", function() { return QHeader; });
/* concated harmony reexport QPage */__webpack_require__.d(__webpack_exports__, "o", function() { return QPage; });
/* concated harmony reexport QPageContainer */__webpack_require__.d(__webpack_exports__, "p", function() { return QPageContainer; });
/* unused concated harmony import QPageSticky */
/* concated harmony reexport QList */__webpack_require__.d(__webpack_exports__, "n", function() { return QList; });
/* concated harmony reexport QItem */__webpack_require__.d(__webpack_exports__, "j", function() { return QItem; });
/* concated harmony reexport QItemSection */__webpack_require__.d(__webpack_exports__, "l", function() { return QItemSection; });
/* concated harmony reexport QItemLabel */__webpack_require__.d(__webpack_exports__, "k", function() { return QItemLabel; });
/* unused concated harmony import QExpansionItem */
/* unused concated harmony import QSlideItem */
/* unused concated harmony import QMenu */
/* unused concated harmony import QNoSsr */
/* unused concated harmony import QResizeObserver */
/* unused concated harmony import QScrollObserver */
/* unused concated harmony import QOptionGroup */
/* unused concated harmony import QPageScroller */
/* unused concated harmony import QPagination */
/* unused concated harmony import QParallax */
/* unused concated harmony import QPopupEdit */
/* unused concated harmony import QPopupProxy */
/* unused concated harmony import QLinearProgress */
/* unused concated harmony import QPullToRefresh */
/* unused concated harmony import QRadio */
/* unused concated harmony import QRange */
/* unused concated harmony import QRating */
/* concated harmony reexport QScrollArea */__webpack_require__.d(__webpack_exports__, "q", function() { return QScrollArea; });
/* unused concated harmony import QSelect */
/* concated harmony reexport QSeparator */__webpack_require__.d(__webpack_exports__, "r", function() { return QSeparator; });
/* unused concated harmony import QSlideTransition */
/* unused concated harmony import QSlider */
/* unused concated harmony import QSpace */
/* unused concated harmony import QSpinner */
/* unused concated harmony import QSpinnerAudio */
/* unused concated harmony import QSpinnerBall */
/* unused concated harmony import QSpinnerBars */
/* unused concated harmony import QSpinnerComment */
/* unused concated harmony import QSpinnerCube */
/* unused concated harmony import QSpinnerDots */
/* unused concated harmony import QSpinnerFacebook */
/* unused concated harmony import QSpinnerGears */
/* unused concated harmony import QSpinnerGrid */
/* unused concated harmony import QSpinnerHearts */
/* unused concated harmony import QSpinnerHourglass */
/* unused concated harmony import QSpinnerInfinity */
/* unused concated harmony import QSpinnerIos */
/* unused concated harmony import QSpinnerOval */
/* unused concated harmony import QSpinnerPie */
/* unused concated harmony import QSpinnerPuff */
/* unused concated harmony import QSpinnerRadio */
/* unused concated harmony import QSpinnerRings */
/* unused concated harmony import QSpinnerTail */
/* unused concated harmony import QSplitter */
/* unused concated harmony import QStep */
/* unused concated harmony import QStepper */
/* unused concated harmony import QStepperNavigation */
/* unused concated harmony import QTabPanels */
/* unused concated harmony import QTabPanel */
/* unused concated harmony import QTable */
/* unused concated harmony import QTh */
/* unused concated harmony import QTr */
/* unused concated harmony import QTd */
/* unused concated harmony import QMarkupTable */
/* unused concated harmony import QTabs */
/* unused concated harmony import QTab */
/* unused concated harmony import QRouteTab */
/* concated harmony reexport QTimeline */__webpack_require__.d(__webpack_exports__, "s", function() { return QTimeline; });
/* concated harmony reexport QTimelineEntry */__webpack_require__.d(__webpack_exports__, "t", function() { return QTimelineEntry; });
/* unused concated harmony import QToggle */
/* concated harmony reexport QToolbar */__webpack_require__.d(__webpack_exports__, "u", function() { return QToolbar; });
/* concated harmony reexport QToolbarTitle */__webpack_require__.d(__webpack_exports__, "v", function() { return QToolbarTitle; });
/* unused concated harmony import QTooltip */
/* unused concated harmony import QTree */
/* unused concated harmony import QUploader */
/* unused concated harmony import QUploaderBase */
/* unused concated harmony import QUploaderAddTrigger */
/* unused concated harmony import QVideo */
/* unused concated harmony import QVirtualScroll */
/* unused concated harmony import ClosePopup */
/* unused concated harmony import GoBack */
/* concated harmony reexport Ripple */__webpack_require__.d(__webpack_exports__, "w", function() { return Ripple["a" /* default */]; });
/* unused concated harmony import ScrollFire */
/* unused concated harmony import Scroll */
/* unused concated harmony import TouchHold */
/* unused concated harmony import TouchPan */
/* unused concated harmony import TouchRepeat */
/* unused concated harmony import TouchSwipe */
/* unused concated harmony import AddressbarColor */
/* unused concated harmony import AppFullscreen */
/* unused concated harmony import AppVisibility */
/* unused concated harmony import BottomSheet */
/* unused concated harmony import Cookies */
/* unused concated harmony import Dialog */
/* unused concated harmony import LoadingBar */
/* unused concated harmony import Loading */
/* unused concated harmony import Meta */
/* unused concated harmony import Notify */
/* unused concated harmony import Platform */
/* unused concated harmony import Screen */
/* unused concated harmony import LocalStorage */
/* unused concated harmony import SessionStorage */
/* unused concated harmony import clone */
/* unused concated harmony import colors */
/* unused concated harmony import date */
/* unused concated harmony import debounce */
/* unused concated harmony import dom */
/* unused concated harmony import event */
/* unused concated harmony import extend */
/* unused concated harmony import format */
/* unused concated harmony import frameDebounce */
/* unused concated harmony import noop */
/* unused concated harmony import openURL */
/* unused concated harmony import patterns */
/* unused concated harmony import scroll */
/* unused concated harmony import throttle */
/* unused concated harmony import uid */








function index_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function index_esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { index_esm_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { index_esm_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ var index_esm = (index_esm_objectSpread({}, vue_plugin["a" /* default */], {
  install: function install(Vue, opts) {
    vue_plugin["a" /* default */].install(Vue, index_esm_objectSpread({
      components: components_namespaceObject,
      directives: directives_namespaceObject,
      plugins: plugins_namespaceObject
    }, opts));
  }
}));

/***/ })

}]);
//# sourceMappingURL=bb8293fa.96aa26cc.js.map