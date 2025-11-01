var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// _vendor/github.com/naturalcrit/homebrewery/node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter2(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap2(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap2(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap2(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag2 = getTag(value), isFunc = tag2 == funcTag || tag2 == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag2 == objectTag || tag2 == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag2]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag2, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap2(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter2(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other2) {
          return value > other2;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap2(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other2, bitmask, customizer, stack) {
          if (value === other2) {
            return true;
          }
          if (value == null || other2 == null || !isObjectLike(value) && !isObjectLike(other2)) {
            return value !== value && other2 !== other2;
          }
          return baseIsEqualDeep(value, other2, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other2, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other2), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other2);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other2)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other2, bitmask, customizer, equalFunc, stack) : equalByTag(object, other2, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other2, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other2.value() : other2;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other2, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other2) {
          return value < other2;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap2(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap2(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap2(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other2) {
            return compareMultiple(object, other2, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap2(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap2(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other2) {
          if (value !== other2) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other2 !== undefined2, othIsNull = other2 === null, othIsReflexive = other2 === other2, othIsSymbol = isSymbol(other2);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other2 || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other2 || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other2, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other2.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other2.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols2(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other2) {
            var result2;
            if (value === undefined2 && other2 === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other2 !== undefined2) {
              if (result2 === undefined2) {
                return other2;
              }
              if (typeof value == "string" || typeof other2 == "string") {
                value = baseToString(value);
                other2 = baseToString(other2);
              } else {
                value = baseToNumber(value);
                other2 = baseToNumber(other2);
              }
              result2 = operator(value, other2);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap2(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other2) {
            if (!(typeof value == "string" && typeof other2 == "string")) {
              value = toNumber(value);
              other2 = toNumber(other2);
            }
            return operator(value, other2);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag2 = getTag(object);
            if (tag2 == mapTag) {
              return mapToArray(object);
            }
            if (tag2 == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other2, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other2.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other2);
          if (arrStacked && othStacked) {
            return arrStacked == other2 && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other2);
          stack.set(other2, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other2[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other2, array, stack) : customizer(arrValue, othValue, index, array, other2, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other2, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other2);
          return result2;
        }
        function equalByTag(object, other2, tag2, bitmask, customizer, equalFunc, stack) {
          switch (tag2) {
            case dataViewTag:
              if (object.byteLength != other2.byteLength || object.byteOffset != other2.byteOffset) {
                return false;
              }
              object = object.buffer;
              other2 = other2.buffer;
            case arrayBufferTag:
              if (object.byteLength != other2.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other2))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other2);
            case errorTag:
              return object.name == other2.name && object.message == other2.message;
            case regexpTag:
            case stringTag:
              return object == other2 + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other2.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other2;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other2);
              var result2 = equalArrays(convert(object), convert(other2), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other2);
              }
          }
          return false;
        }
        function equalObjects(object, other2, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other2), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other2 : hasOwnProperty.call(other2, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other2);
          if (objStacked && othStacked) {
            return objStacked == other2 && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other2);
          stack.set(other2, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other2[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other2, object, stack) : customizer(objValue, othValue, key, object, other2, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other2.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other2) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other2);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols2);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag2 = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag2;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols2 = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter2(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols2(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag2, isDeep) {
          var Ctor = object.constructor;
          switch (tag2) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other2 = lodash[funcName];
          if (typeof other2 != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other2) {
            return true;
          }
          var data = getData(other2);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat2() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap2(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap2(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter2(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap2(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap2(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter2(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter2(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter2(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter2 : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap2 : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter2 : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag2 = getTag(collection);
          if (tag2 == mapTag || tag2 == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options2) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options2)) {
            leading = !!options2.leading;
            maxing = "maxWait" in options2;
            maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options2 ? !!options2.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap2(transforms[0], baseUnary(getIteratee())) : arrayMap2(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options2) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options2)) {
            leading = "leading" in options2 ? !!options2.leading : leading;
            trailing = "trailing" in options2 ? !!options2.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other2) {
          return value === other2 || value !== value && other2 !== other2;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other2) {
          return value >= other2;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag2 = getTag(value);
          if (tag2 == mapTag || tag2 == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other2) {
          return baseIsEqual(value, other2);
        }
        function isEqualWith(value, other2, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other2) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other2, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag2 = baseGetTag(value);
          return tag2 == errorTag || tag2 == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag2 = baseGetTag(value);
          return tag2 == funcTag || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag;
        }
        function isInteger2(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger2(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other2) {
          return value <= other2;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag2 = getTag(value), func = tag2 == mapTag ? mapToArray : tag2 == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign2 = value < 0 ? -1 : 1;
            return sign2 * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other2 = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other2) ? other2 + "" : other2;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap2(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap2(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random2(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape4(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options2, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options2, guard)) {
            options2 = undefined2;
          }
          string = toString(string);
          options2 = assignInWith({}, options2, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options2.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options2.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options2.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options2.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options2, "sourceURL") ? (options2.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue2, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue2) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue2 + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options2, "variable") && options2.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options2) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options2)) {
            var separator = "separator" in options2 ? options2.separator : separator;
            length = "length" in options2 ? toInteger(options2.length) : length;
            omission = "omission" in options2 ? baseToString(options2.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape2(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap2(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options2) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options2 == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options2 = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options2) && "chain" in options2) || !!options2.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap2);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap2(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add2 = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max2(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min2(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat2;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add2;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape4;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite2;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger2;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max2;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min2;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random2;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape2;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _2 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _2;
        define(function() {
          return _2;
        });
      } else if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root._ = _2;
      }
    }).call(exports);
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/romans/romans.js
var require_romans = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/romans/romans.js"(exports, module) {
    var ROMAN_LOOKUP = new Array(4e3);
    var DECIMAL_LOOKUP = /* @__PURE__ */ new Map();
    var CHAR_VALUES = Object.freeze({
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1e3
    });
    var CONVERSION_PAIRS = Object.freeze([
      [1e3, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ]);
    var INVALID_PATTERNS = Object.freeze([
      /I{4,}/,
      /V{2,}/,
      /X{4,}/,
      /L{2,}/,
      /C{4,}/,
      /D{2,}/,
      /M{4,}/,
      /IL|IC|ID|IM/,
      /VL|VC|VD|VM|VX/,
      /XD|XM/,
      /LC|LD|LM/,
      /DM/,
      /IVIV|IXIX|XLXL|XCXC|CDCD|CMCM/
    ]);
    var VALID_CHARS = /* @__PURE__ */ new Set(["I", "V", "X", "L", "C", "D", "M"]);
    var initialized = false;
    function initializeLookupTables() {
      if (initialized) return;
      for (let i = 1; i < 4e3; i++) {
        ROMAN_LOOKUP[i] = buildRomanFast(i);
        DECIMAL_LOOKUP.set(ROMAN_LOOKUP[i], i);
      }
      initialized = true;
    }
    function buildRomanFast(num) {
      let result = "";
      if (num >= 1e3) {
        const count = Math.floor(num / 1e3);
        result += "M".repeat(count);
        num %= 1e3;
      }
      if (num >= 900) {
        result += "CM";
        num -= 900;
      }
      if (num >= 500) {
        result += "D";
        num -= 500;
      }
      if (num >= 400) {
        result += "CD";
        num -= 400;
      }
      if (num >= 100) {
        const count = Math.floor(num / 100);
        result += "C".repeat(count);
        num %= 100;
      }
      if (num >= 90) {
        result += "XC";
        num -= 90;
      }
      if (num >= 50) {
        result += "L";
        num -= 50;
      }
      if (num >= 40) {
        result += "XL";
        num -= 40;
      }
      if (num >= 10) {
        const count = Math.floor(num / 10);
        result += "X".repeat(count);
        num %= 10;
      }
      if (num >= 9) {
        result += "IX";
        num -= 9;
      }
      if (num >= 5) {
        result += "V";
        num -= 5;
      }
      if (num >= 4) {
        result += "IV";
        num -= 4;
      }
      if (num >= 1) {
        result += "I".repeat(num);
      }
      return result;
    }
    function isValidRoman(str) {
      if (typeof str !== "string" || str.length === 0) return false;
      for (let i = 0; i < str.length; i++) {
        if (!VALID_CHARS.has(str[i])) return false;
      }
      for (let i = 0; i < INVALID_PATTERNS.length; i++) {
        if (INVALID_PATTERNS[i].test(str)) return false;
      }
      return true;
    }
    var romanize2 = (decimal) => {
      if (decimal === Infinity) {
        throw new Error("requires max value of less than 4000");
      }
      if ((decimal | 0) !== decimal || decimal <= 0) {
        throw new Error("requires an unsigned integer");
      }
      if (decimal >= 4e3) {
        throw new Error("requires max value of less than 4000");
      }
      if (!initialized) initializeLookupTables();
      return ROMAN_LOOKUP[decimal];
    };
    var deromanize = (romanStr) => {
      if (typeof romanStr !== "string") {
        throw new Error("requires valid roman numeral string");
      }
      if (!initialized) initializeLookupTables();
      const cached = DECIMAL_LOOKUP.get(romanStr);
      if (cached !== void 0) {
        return cached;
      }
      if (!isValidRoman(romanStr)) {
        throw new Error("requires valid roman numeral string");
      }
      let result = 0;
      let prevValue = 0;
      for (let i = romanStr.length - 1; i >= 0; i--) {
        const currentValue = CHAR_VALUES[romanStr[i]];
        result += currentValue < prevValue ? -currentValue : currentValue;
        prevValue = currentValue;
      }
      return result;
    };
    initializeLookupTables();
    var allChars = CONVERSION_PAIRS.map((pair) => pair[1]);
    var allNumerals = CONVERSION_PAIRS.map((pair) => pair[0]);
    module.exports = {
      deromanize,
      romanize: romanize2,
      allChars,
      allNumerals
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/util.js
var require_util = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/util.js"(exports) {
    "use strict";
    function defaults(target, defs) {
      if (target == null) target = {};
      var ret = {};
      var keys = Object.keys(defs);
      for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        ret[key] = target[key] || defs[key];
      }
      return ret;
    }
    exports.defaults = defaults;
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/en.json
var require_en = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/en.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: "-",
      unitSeparator: "and ",
      base: {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
      },
      units: [
        "hundred",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion",
        "sextillion",
        "septillion",
        "octillion",
        "nonillion",
        "decillion",
        "undecillion",
        "duodecillion",
        "tredecillion",
        "quattuordecillion",
        "quindecillion"
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/es.json
var require_es = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/es.json"(exports, module) {
    module.exports = {
      useLongScale: true,
      baseSeparator: " y ",
      unitSeparator: "",
      base: {
        "0": "cero",
        "1": "uno",
        "2": "dos",
        "3": "tres",
        "4": "cuatro",
        "5": "cinco",
        "6": "seis",
        "7": "siete",
        "8": "ocho",
        "9": "nueve",
        "10": "diez",
        "11": "once",
        "12": "doce",
        "13": "trece",
        "14": "catorce",
        "15": "quince",
        "16": "diecis\xE9is",
        "17": "diecisiete",
        "18": "dieciocho",
        "19": "diecinueve",
        "20": "veinte",
        "21": "veintiuno",
        "22": "veintid\xF3s",
        "23": "veintitr\xE9s",
        "24": "veinticuatro",
        "25": "veinticinco",
        "26": "veintis\xE9is",
        "27": "veintisiete",
        "28": "veintiocho",
        "29": "veintinueve",
        "30": "treinta",
        "40": "cuarenta",
        "50": "cincuenta",
        "60": "sesenta",
        "70": "setenta",
        "80": "ochenta",
        "90": "noventa",
        "100": "cien",
        "200": "doscientos",
        "300": "trescientos",
        "400": "cuatrocientos",
        "500": "quinientos",
        "600": "seiscientos",
        "700": "setecientos",
        "800": "ochocientos",
        "900": "novecientos",
        "1000": "mil"
      },
      unitExceptions: {
        "1000000": "un mill\xF3n",
        "1000000000000": "un bill\xF3n",
        "1000000000000000000": "un trill\xF3n",
        "1000000000000000000000000": "un cuatrillones",
        "1000000000000000000000000000000": "un quintill\xF3n",
        "1000000000000000000000000000000000000": "un sextill\xF3n",
        "1000000000000000000000000000000000000000000": "un septill\xF3n",
        "1000000000000000000000000000000000000000000000000": "un octill\xF3n",
        "1000000000000000000000000000000000000000000000000000000": "un nonill\xF3n",
        "1000000000000000000000000000000000000000000000000000000000000": "un decill\xF3n",
        "1000000000000000000000000000000000000000000000000000000000000000000": "un undecill\xF3n",
        "1000000000000000000000000000000000000000000000000000000000000000000000000": "un duodecill\xF3n",
        "1000000000000000000000000000000000000000000000000000000000000000000000000000000": "un tredecill\xF3n",
        "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000": "un cuatordecill\xF3n",
        "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000": "un quindecill\xF3n"
      },
      units: [
        {
          singular: "ciento",
          useBaseInstead: true,
          useBaseException: [1],
          useBaseExceptionWhenNoTrailingNumbers: true
        },
        {
          singular: "mil",
          avoidPrefixException: [1]
        },
        {
          singular: "mill\xF3n",
          plural: "millones"
        },
        {
          singular: "bill\xF3n",
          plural: "billones"
        },
        {
          singular: "trill\xF3n",
          plural: "trillones"
        },
        {
          singular: "cuatrill\xF3n",
          plural: "cuatrillones"
        },
        {
          singular: "quintill\xF3n",
          plural: "quintillones"
        },
        {
          singular: "sextill\xF3n",
          plural: "sextillones"
        },
        {
          singular: "septill\xF3n",
          plural: "septillones"
        },
        {
          singular: "octill\xF3n",
          plural: "octillones"
        },
        {
          singular: "nonill\xF3n",
          plural: "nonillones"
        },
        {
          singular: "decill\xF3n",
          plural: "decillones"
        },
        {
          singular: "undecill\xF3n",
          plural: "undecillones"
        },
        {
          singular: "duodecill\xF3n",
          plural: "duodecillones"
        },
        {
          singular: "tredecill\xF3n",
          plural: "tredecillones"
        },
        {
          singular: "cuatrodecill\xF3n",
          plural: "cuatrodecillones"
        },
        {
          singular: "quindecill\xF3n",
          plural: "quindecillones"
        }
      ]
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/ar.json
var require_ar = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/ar.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: "",
      unitSeparator: "",
      allSeparator: "\u0648",
      base: {
        "0": "\u0635\u0641\u0631",
        "1": "\u0648\u0627\u062D\u062F",
        "2": "\u0627\u062B\u0646\u0627\u0646",
        "3": "\u062B\u0644\u0627\u062B\u0629",
        "4": "\u0623\u0631\u0628\u0639\u0629",
        "5": "\u062E\u0645\u0633\u0629",
        "6": "\u0633\u062A\u0629",
        "7": "\u0633\u0628\u0639\u0629",
        "8": "\u062B\u0645\u0627\u0646\u064A\u0629",
        "9": "\u062A\u0633\u0639\u0629",
        "10": "\u0639\u0634\u0631\u0629",
        "11": "\u0623\u062D\u062F \u0639\u0634\u0631",
        "12": "\u0625\u062B\u0646\u0627 \u0639\u0634\u0631",
        "13": "\u062B\u0644\u0627\u062B\u0629 \u0639\u0634\u0631",
        "14": "\u0623\u0631\u0628\u0639\u0629 \u0639\u0634\u0631",
        "15": "\u062E\u0645\u0633\u0629 \u0639\u0634\u0631",
        "16": "\u0633\u062A\u0629 \u0639\u0634\u0631",
        "17": "\u0633\u0628\u0639\u0629 \u0639\u0634\u0631",
        "18": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0639\u0634\u0631",
        "19": "\u062A\u0633\u0639\u0629 \u0639\u0634\u0631",
        "20": "\u0639\u0634\u0631\u0648\u0646",
        "21": "\u0648\u0627\u062D\u062F \u0648\u0639\u0634\u0631\u0648\u0646",
        "22": "\u0627\u062B\u0646\u0627\u0646 \u0648\u0639\u0634\u0631\u0648\u0646",
        "23": "\u062B\u0644\u0627\u062B\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "24": "\u0623\u0631\u0628\u0639\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "25": "\u062E\u0645\u0633\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "26": "\u0633\u062A\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "27": "\u0633\u0628\u0639\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "28": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "29": "\u062A\u0633\u0639\u0629 \u0648\u0639\u0634\u0631\u0648\u0646",
        "30": "\u062B\u0644\u0627\u062B\u0648\u0646",
        "31": "\u0648\u0627\u062D\u062F \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "32": "\u0627\u062B\u0646\u0627\u0646 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "33": "\u062B\u0644\u0627\u062B\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "34": "\u0623\u0631\u0628\u0639\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "35": "\u062E\u0645\u0633\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "36": "\u0633\u062A\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "37": "\u0633\u0628\u0639\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "38": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "39": "\u062A\u0633\u0639\u0629 \u0648\u062B\u0644\u0627\u062B\u0648\u0646",
        "40": "\u0623\u0631\u0628\u0639\u0648\u0646",
        "41": "\u0648\u0627\u062D\u062F \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "42": "\u0627\u062B\u0646\u0627\u0646 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "43": "\u062B\u0644\u0627\u062B\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "44": "\u0623\u0631\u0628\u0639\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "45": "\u062E\u0645\u0633\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "46": "\u0633\u062A\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "47": "\u0633\u0628\u0639\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "48": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "49": "\u062A\u0633\u0639\u0629 \u0648\u0623\u0631\u0628\u0639\u0648\u0646",
        "50": "\u062E\u0645\u0633\u0648\u0646",
        "51": "\u0648\u0627\u062D\u062F \u0648\u062E\u0645\u0633\u0648\u0646",
        "52": "\u0627\u062B\u0646\u0627\u0646 \u0648\u062E\u0645\u0633\u0648\u0646",
        "53": "\u062B\u0644\u0627\u062B\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "54": "\u0623\u0631\u0628\u0639\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "55": "\u062E\u0645\u0633\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "56": "\u0633\u062A\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "57": "\u0633\u0628\u0639\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "58": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "59": "\u062A\u0633\u0639\u0629 \u0648\u062E\u0645\u0633\u0648\u0646",
        "60": "\u0633\u062A\u0648\u0646",
        "61": "\u0648\u0627\u062D\u062F \u0648\u0633\u062A\u0648\u0646",
        "62": "\u0627\u062B\u0646\u0627\u0646 \u0648\u0633\u062A\u0648\u0646",
        "63": "\u062B\u0644\u0627\u062B\u0629 \u0648\u0633\u062A\u0648\u0646",
        "64": "\u0623\u0631\u0628\u0639\u0629 \u0648\u0633\u062A\u0648\u0646",
        "65": "\u062E\u0645\u0633\u0629 \u0648\u0633\u062A\u0648\u0646",
        "66": "\u0633\u062A\u0629 \u0648\u0633\u062A\u0648\u0646",
        "67": "\u0633\u0628\u0639\u0629 \u0648\u0633\u062A\u0648\u0646",
        "68": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u0633\u062A\u0648\u0646",
        "69": "\u062A\u0633\u0639\u0629 \u0648\u0633\u062A\u0648\u0646",
        "70": "\u0633\u0628\u0639\u0648\u0646",
        "71": "\u0648\u0627\u062D\u062F \u0648\u0633\u0628\u0639\u0648\u0646",
        "72": "\u0627\u062B\u0646\u0627\u0646 \u0648\u0633\u0628\u0639\u0648\u0646",
        "73": "\u062B\u0644\u0627\u062B\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "74": "\u0623\u0631\u0628\u0639\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "75": "\u062E\u0645\u0633\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "76": "\u0633\u062A\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "77": "\u0633\u0628\u0639\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "78": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "79": "\u062A\u0633\u0639\u0629 \u0648\u0633\u0628\u0639\u0648\u0646",
        "80": "\u062B\u0645\u0627\u0646\u0648\u0646",
        "81": "\u0648\u0627\u062D\u062F \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "82": "\u0627\u062B\u0646\u0627\u0646 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "83": "\u062B\u0644\u0627\u062B\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "84": "\u0623\u0631\u0628\u0639\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "85": "\u062E\u0645\u0633\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "86": "\u0633\u062A\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "87": "\u0633\u0628\u0639\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "88": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "89": "\u062A\u0633\u0639\u0629 \u0648\u062B\u0645\u0627\u0646\u0648\u0646",
        "90": "\u062A\u0633\u0639\u0648\u0646",
        "91": "\u0648\u0627\u062D\u062F \u0648\u062A\u0633\u0639\u0648\u0646",
        "92": "\u0627\u062B\u0646\u0627\u0646 \u0648\u062A\u0633\u0639\u0648\u0646",
        "93": "\u062B\u0644\u0627\u062B\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "94": "\u0623\u0631\u0628\u0639\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "95": "\u062E\u0645\u0633\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "96": "\u0633\u062A\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "97": "\u0633\u0628\u0639\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "98": "\u062B\u0645\u0627\u0646\u064A\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "99": "\u062A\u0633\u0639\u0629 \u0648\u062A\u0633\u0639\u0648\u0646",
        "200": "\u0645\u0627\u0626\u062A\u0627\u0646",
        "300": "\u062B\u0644\u0627\u062B\u0645\u0627\u0626\u0629",
        "400": "\u0623\u0631\u0628\u0639\u0645\u0627\u0626\u0629",
        "500": "\u062E\u0645\u0633\u0645\u0627\u0626\u0629",
        "600": "\u0633\u062A\u0645\u0627\u0626\u0629",
        "700": "\u0633\u0628\u0639\u0645\u0627\u0626\u0629",
        "800": "\u062B\u0645\u0627\u0646\u0645\u0627\u0626\u0629",
        "900": "\u062A\u0633\u0639\u0645\u0627\u0626\u0629"
      },
      units: [
        { singular: "\u0645\u0627\u0626\u0629", useBaseInstead: true, useBaseException: [1] },
        { singular: "\u0623\u0644\u0641", dual: "\u0623\u0644\u0641\u0627\u0646", plural: "\u0622\u0644\u0627\u0641", restrictedPlural: true, avoidPrefixException: [1, 2] },
        { singular: "\u0645\u0644\u064A\u0648\u0646", dual: "\u0645\u0644\u064A\u0648\u0646\u0627\u0646", plural: "\u0645\u0644\u0627\u064A\u064A\u0646", restrictedPlural: true, avoidPrefixException: [1, 2] },
        { singular: "\u0645\u0644\u064A\u0627\u0631", dual: "\u0645\u0644\u064A\u0627\u0631\u0627\u0646", plural: "\u0645\u0644\u0627\u064A\u064A\u0631", restrictedPlural: true, avoidPrefixException: [1, 2] },
        { singular: "\u062A\u0631\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0643\u0648\u0627\u062F\u0631\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0643\u0648\u064A\u0646\u062A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0633\u0643\u0633\u062A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0633\u0628\u062A\u064A\u0644\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0623\u0648\u0643\u062A\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0646\u0648\u0646\u064A\u0644\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u062F\u0634\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0623\u0648\u0646\u062F\u0634\u064A\u0644\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u062F\u0648\u062F\u0634\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u062A\u0631\u064A\u062F\u0634\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0643\u0648\u0627\u062A\u0648\u0631\u062F\u0634\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] },
        { singular: "\u0643\u0648\u064A\u0646\u062F\u0634\u064A\u0644\u064A\u0648\u0646", avoidPrefixException: [1] }
      ],
      unitExceptions: {}
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/az.json
var require_az = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/az.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "",
      base: {
        "0": "s\u0131f\u0131r",
        "1": "bir",
        "2": "iki",
        "3": "\xFC\xE7",
        "4": "d\xF6rd",
        "5": "be\u015F",
        "6": "alt\u0131",
        "7": "yeddi",
        "8": "s\u0259kkiz",
        "9": "doqquz",
        "10": "on",
        "20": "iyirmi",
        "30": "otuz",
        "40": "q\u0131rx",
        "50": "\u0259lli",
        "60": "altm\u0131\u015F",
        "70": "yetmi\u015F",
        "80": "s\u0259ks\u0259n",
        "90": "doxsan"
      },
      units: [
        {
          singular: "y\xFCz",
          avoidPrefixException: [1]
        },
        {
          singular: "min",
          avoidPrefixException: [1]
        },
        "milyon",
        "milyard",
        "trilyon",
        "kvadrilyon",
        "kentilyon",
        "sekstilyon",
        "septilyon",
        "oktilyon",
        "nonilyon",
        "desilyon",
        "andesilyon",
        "dodesilyon",
        "tredesilyon",
        "katordesilyon",
        "kendesilyon"
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/pt.json
var require_pt = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/pt.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " e ",
      unitSeparator: "e ",
      andWhenTrailing: true,
      base: {
        "0": "zero",
        "1": "um",
        "2": "dois",
        "3": "tr\xEAs",
        "4": "quatro",
        "5": "cinco",
        "6": "seis",
        "7": "sete",
        "8": "oito",
        "9": "nove",
        "10": "dez",
        "11": "onze",
        "12": "doze",
        "13": "treze",
        "14": "catorze",
        "15": "quinze",
        "16": "dezesseis",
        "17": "dezessete",
        "18": "dezoito",
        "19": "dezenove",
        "20": "vinte",
        "30": "trinta",
        "40": "quarenta",
        "50": "cinquenta",
        "60": "sessenta",
        "70": "setenta",
        "80": "oitenta",
        "90": "noventa",
        "100": "cem",
        "200": "duzentos",
        "300": "trezentos",
        "400": "quatrocentos",
        "500": "quinhentos",
        "600": "seiscentos",
        "700": "setecentos",
        "800": "oitocentos",
        "900": "novecentos",
        "1000": "mil"
      },
      unitExceptions: {
        "1": "um"
      },
      units: [
        {
          singular: "cento",
          useBaseInstead: true,
          useBaseException: [
            1
          ],
          useBaseExceptionWhenNoTrailingNumbers: true,
          andException: true
        },
        {
          singular: "mil",
          avoidPrefixException: [1],
          andException: true
        },
        {
          singular: "milh\xE3o",
          plural: "milh\xF5es"
        },
        {
          singular: "bilh\xE3o",
          plural: "bilh\xF5es"
        },
        {
          singular: "trilh\xE3o",
          plural: "trilh\xF5es"
        },
        {
          singular: "quadrilh\xE3o",
          plural: "quadrilh\xE3o"
        },
        {
          singular: "quintilh\xE3o",
          plural: "quintilh\xF5es"
        },
        {
          singular: "sextilh\xE3o",
          plural: "sextilh\xF5es"
        },
        {
          singular: "septilh\xE3o",
          plural: "septilh\xF5es"
        },
        {
          singular: "octilh\xE3o",
          plural: "octilh\xF5es"
        },
        {
          singular: "nonilh\xE3o",
          plural: "nonilh\xF5es"
        },
        {
          singular: "decilh\xE3o",
          plural: "decilh\xF5es"
        },
        {
          singular: "undecilh\xE3o",
          plural: "undecilh\xF5es"
        },
        {
          singular: "doudecilh\xE3o",
          plural: "doudecilh\xF5es"
        },
        {
          singular: "tredecilh\xE3o",
          plural: "tredecilh\xF5es"
        }
      ]
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/pt-PT.json
var require_pt_PT = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/pt-PT.json"(exports, module) {
    module.exports = {
      useLongScale: true,
      baseSeparator: " e ",
      unitSeparator: "e ",
      andWhenTrailing: true,
      base: {
        "0": "zero",
        "1": "um",
        "2": "dois",
        "3": "tr\xEAs",
        "4": "quatro",
        "5": "cinco",
        "6": "seis",
        "7": "sete",
        "8": "oito",
        "9": "nove",
        "10": "dez",
        "11": "onze",
        "12": "doze",
        "13": "treze",
        "14": "catorze",
        "15": "quinze",
        "16": "dezasseis",
        "17": "dezassete",
        "18": "dezoito",
        "19": "dezanove",
        "20": "vinte",
        "30": "trinta",
        "40": "quarenta",
        "50": "cinquenta",
        "60": "sessenta",
        "70": "setenta",
        "80": "oitenta",
        "90": "noventa",
        "100": "cem",
        "200": "duzentos",
        "300": "trezentos",
        "400": "quatrocentos",
        "500": "quinhentos",
        "600": "seiscentos",
        "700": "setecentos",
        "800": "oitocentos",
        "900": "novecentos",
        "1000": "mil"
      },
      unitExceptions: {
        "1": "um"
      },
      units: [
        {
          singular: "cento",
          useBaseInstead: true,
          useBaseException: [
            1
          ],
          useBaseExceptionWhenNoTrailingNumbers: true,
          andException: true
        },
        {
          singular: "mil",
          avoidPrefixException: [1],
          andException: true
        },
        {
          singular: "milh\xE3o",
          plural: "milh\xF5es"
        },
        {
          singular: "bili\xE3o",
          plural: "bili\xF5es"
        },
        {
          singular: "trili\xE3o",
          plural: "trili\xF5es"
        },
        {
          singular: "quadrili\xE3o",
          plural: "quadrili\xF5es"
        },
        {
          singular: "quintili\xE3o",
          plural: "quintili\xF5es"
        },
        {
          singular: "sextili\xE3o",
          plural: "sextili\xF5es"
        },
        {
          singular: "septili\xE3o",
          plural: "septili\xF5es"
        },
        {
          singular: "octili\xE3o",
          plural: "octili\xF5es"
        },
        {
          singular: "nonili\xE3o",
          plural: "nonili\xF5es"
        },
        {
          singular: "decili\xE3o",
          plural: "decili\xF5es"
        }
      ]
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/fr.json
var require_fr = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/fr.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: "-",
      unitSeparator: "",
      base: {
        "0": "z\xE9ro",
        "1": "un",
        "2": "deux",
        "3": "trois",
        "4": "quatre",
        "5": "cinq",
        "6": "six",
        "7": "sept",
        "8": "huit",
        "9": "neuf",
        "10": "dix",
        "11": "onze",
        "12": "douze",
        "13": "treize",
        "14": "quatorze",
        "15": "quinze",
        "16": "seize",
        "17": "dix-sept",
        "18": "dix-huit",
        "19": "dix-neuf",
        "20": "vingt",
        "30": "trente",
        "40": "quarante",
        "50": "cinquante",
        "60": "soixante",
        "70": "soixante-dix",
        "80": "quatre-vingt",
        "90": "quatre-vingt-dix"
      },
      units: [
        {
          singular: "cent",
          plural: "cents",
          avoidInNumberPlural: true,
          avoidPrefixException: [1]
        },
        {
          singular: "mille",
          avoidPrefixException: [1]
        },
        {
          singular: "million",
          plural: "millions"
        },
        {
          singular: "milliard",
          plural: "milliards"
        },
        {
          singular: "billion",
          plural: "billions"
        },
        {
          singular: "billiard",
          plural: "billiards"
        },
        {
          singular: "trillion",
          plural: "trillions"
        },
        {
          singular: "trilliard",
          plural: "trilliards"
        },
        {
          singular: "quadrillion",
          plural: "quadrillions"
        },
        {
          singular: "quadrilliard",
          plural: "quadrilliards"
        },
        {
          singular: "quintillion",
          plural: "quintillions"
        },
        {
          singular: "quintilliard",
          plural: "quintilliards"
        },
        {
          singular: "sextillion",
          plural: "sextillions"
        },
        {
          singular: "sextilliard",
          plural: "sextilliards"
        },
        {
          singular: "septillion",
          plural: "septillions"
        },
        {
          singular: "septilliard",
          plural: "septilliards"
        },
        {
          singular: "octillion",
          plural: "octillions"
        }
      ],
      unitExceptions: {
        "21": "vingt et un",
        "31": "trente et un",
        "41": "quarante et un",
        "51": "cinquante et un",
        "61": "soixante et un",
        "71": "soixante et onze",
        "72": "soixante-douze",
        "73": "soixante-treize",
        "74": "soixante-quatorze",
        "75": "soixante-quinze",
        "76": "soixante-seize",
        "77": "soixante-dix-sept",
        "78": "soixante-dix-huit",
        "79": "soixante-dix-neuf",
        "80": "quatre-vingts",
        "91": "quatre-vingt-onze",
        "92": "quatre-vingt-douze",
        "93": "quatre-vingt-treize",
        "94": "quatre-vingt-quatorze",
        "95": "quatre-vingt-quinze",
        "96": "quatre-vingt-seize",
        "97": "quatre-vingt-dix-sept",
        "98": "quatre-vingt-dix-huit",
        "99": "quatre-vingt-dix-neuf"
      }
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/eo.json
var require_eo = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/eo.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "",
      base: {
        "0": "nulo",
        "1": "unu",
        "2": "du",
        "3": "tri",
        "4": "kvar",
        "5": "kvin",
        "6": "ses",
        "7": "sep",
        "8": "ok",
        "9": "na\u016D",
        "10": "dek",
        "20": "dudek",
        "30": "tridek",
        "40": "kvardek",
        "50": "kvindek",
        "60": "sesdek",
        "70": "sepdek",
        "80": "okdek",
        "90": "na\u016Ddek",
        "100": "cent",
        "200": "ducent",
        "300": "tricent",
        "400": "kvarcent",
        "500": "kvincent",
        "600": "sescent",
        "700": "sepcent",
        "800": "okcent",
        "900": "na\u016Dcent"
      },
      units: [
        {
          useBaseInstead: true,
          useBaseException: []
        },
        {
          singular: "mil",
          avoidPrefixException: [1]
        },
        {
          singular: "miliono",
          plural: "milionoj",
          avoidPrefixException: [1]
        },
        {
          singular: "miliardo",
          plural: "miliardoj",
          avoidPrefixException: [1]
        },
        {
          singular: "biliono",
          plural: "bilionoj",
          avoidPrefixException: [1]
        }
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/it.json
var require_it = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/it.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: "",
      unitSeparator: "",
      generalSeparator: "",
      wordSeparator: "",
      base: {
        "0": "zero",
        "1": "uno",
        "2": "due",
        "3": "tre",
        "4": "quattro",
        "5": "cinque",
        "6": "sei",
        "7": "sette",
        "8": "otto",
        "9": "nove",
        "10": "dieci",
        "11": "undici",
        "12": "dodici",
        "13": "tredici",
        "14": "quattordici",
        "15": "quindici",
        "16": "sedici",
        "17": "diciassette",
        "18": "diciotto",
        "19": "diciannove",
        "20": "venti",
        "21": "ventuno",
        "23": "ventitr\xE9",
        "28": "ventotto",
        "30": "trenta",
        "31": "trentuno",
        "33": "trentatr\xE9",
        "38": "trentotto",
        "40": "quaranta",
        "41": "quarantuno",
        "43": "quaranta\xADtr\xE9",
        "48": "quarantotto",
        "50": "cinquanta",
        "51": "cinquantuno",
        "53": "cinquantatr\xE9",
        "58": "cinquantotto",
        "60": "sessanta",
        "61": "sessantuno",
        "63": "sessanta\xADtr\xE9",
        "68": "sessantotto",
        "70": "settanta",
        "71": "settantuno",
        "73": "settantatr\xE9",
        "78": "settantotto",
        "80": "ottanta",
        "81": "ottantuno",
        "83": "ottantatr\xE9",
        "88": "ottantotto",
        "90": "novanta",
        "91": "novantuno",
        "93": "novantatr\xE9",
        "98": "novantotto",
        "100": "cento",
        "101": "centuno",
        "108": "centootto",
        "180": "centottanta",
        "201": "duecentuno",
        "301": "tre\xADcent\xADuno",
        "401": "quattro\xADcent\xADuno",
        "501": "cinque\xADcent\xADuno",
        "601": "sei\xADcent\xADuno",
        "701": "sette\xADcent\xADuno",
        "801": "otto\xADcent\xADuno",
        "901": "nove\xADcent\xADuno"
      },
      unitExceptions: {
        "1": "un"
      },
      units: [
        {
          singular: "cento",
          avoidPrefixException: [
            1
          ]
        },
        {
          singular: "mille",
          plural: "mila",
          avoidPrefixException: [
            1
          ]
        },
        {
          singular: "milione",
          plural: "milioni"
        },
        {
          singular: "miliardo",
          plural: "miliardi"
        },
        {
          singular: "bilione",
          plural: "bilioni"
        },
        {
          singular: "biliardo",
          plural: "biliardi"
        },
        {
          singular: "trilione",
          plural: "trilioni"
        },
        {
          singular: "triliardo",
          plural: "triliardi"
        },
        {
          singular: "quadrilione",
          plural: "quadrilioni"
        },
        {
          singular: "quadriliardo",
          plural: "quadriliardi"
        }
      ]
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/vi.json
var require_vi = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/vi.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "v\xE0 ",
      base: {
        "0": "kh\xF4ng",
        "1": "m\u1ED9t",
        "2": "hai",
        "3": "ba",
        "4": "b\u1ED1n",
        "5": "n\u0103m",
        "6": "s\xE1u",
        "7": "b\u1EA3y",
        "8": "t\xE1m",
        "9": "ch\xEDn",
        "10": "m\u01B0\u1EDDi",
        "15": "m\u01B0\u1EDDi l\u0103m",
        "20": "hai m\u01B0\u01A1i",
        "21": "hai m\u01B0\u01A1i m\u1ED1t",
        "25": "hai m\u01B0\u01A1i l\u0103m",
        "30": "ba m\u01B0\u01A1i",
        "31": "ba m\u01B0\u01A1i m\u1ED1t",
        "40": "b\u1ED1n m\u01B0\u01A1i",
        "41": "b\u1ED1n m\u01B0\u01A1i m\u1ED1t",
        "45": "b\u1ED1n m\u01B0\u01A1i l\u0103m",
        "50": "n\u0103m m\u01B0\u01A1i",
        "51": "n\u0103m m\u01B0\u01A1i m\u1ED1t",
        "55": "n\u0103m m\u01B0\u01A1i l\u0103m",
        "60": "s\xE1u m\u01B0\u01A1i",
        "61": "s\xE1u m\u01B0\u01A1i m\u1ED1t",
        "65": "s\xE1u m\u01B0\u01A1i l\u0103m",
        "70": "b\u1EA3y m\u01B0\u01A1i",
        "71": "b\u1EA3y m\u01B0\u01A1i m\u1ED1t",
        "75": "b\u1EA3y m\u01B0\u01A1i l\u0103m",
        "80": "t\xE1m m\u01B0\u01A1i",
        "81": "t\xE1m m\u01B0\u01A1i m\u1ED1t",
        "85": "t\xE1m m\u01B0\u01A1i l\u0103m",
        "90": "ch\xEDn m\u01B0\u01A1i",
        "91": "ch\xEDn m\u01B0\u01A1i m\u1ED1t",
        "95": "ch\xEDn m\u01B0\u01A1i l\u0103m"
      },
      units: [
        "tr\u0103m",
        "ng\xE0n",
        "tri\u1EC7u",
        "t\u1EF7",
        "ngh\xECn t\u1EF7"
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/tr.json
var require_tr = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/tr.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "",
      base: {
        "0": "s\u0131f\u0131r",
        "1": "bir",
        "2": "iki",
        "3": "\xFC\xE7",
        "4": "d\xF6rt",
        "5": "be\u015F",
        "6": "alt\u0131",
        "7": "yedi",
        "8": "sekiz",
        "9": "dokuz",
        "10": "on",
        "20": "yirmi",
        "30": "otuz",
        "40": "k\u0131rk",
        "50": "elli",
        "60": "altm\u0131\u015F",
        "70": "yetmi\u015F",
        "80": "seksen",
        "90": "doksan"
      },
      units: [
        {
          singular: "y\xFCz",
          avoidPrefixException: [1]
        },
        {
          singular: "bin",
          avoidPrefixException: [1]
        },
        "milyon",
        "milyar",
        "trilyon",
        "katrilyon",
        "kentilyon",
        "sekstilyon",
        "septilyon",
        "oktilyon",
        "nonilyon",
        "desilyon",
        "andesilyon",
        "dodesilyon",
        "tredesilyon",
        "katordesilyon",
        "kendesilyon"
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/hu.json
var require_hu = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/hu.json"(exports, module) {
    module.exports = {
      useLongScale: true,
      baseSeparator: "",
      unitSeparator: "\xE9s ",
      base: {
        "0": "nulla",
        "1": "egy",
        "2": "kett\u0151",
        "3": "h\xE1rom",
        "4": "n\xE9gy",
        "5": "\xF6t",
        "6": "hat",
        "7": "h\xE9t",
        "8": "nyolc",
        "9": "kilenc",
        "10": "t\xEDz",
        "11": "tizenegy",
        "12": "tizenkett\u0151",
        "13": "tizenh\xE1rom",
        "14": "tizenn\xE9gy",
        "15": "tizen\xF6t",
        "16": "tizenhat",
        "17": "tizenh\xE9t",
        "18": "tizennyolc",
        "19": "tizenkilenc",
        "20": "h\xFAsz",
        "21": "huszonegy",
        "22": "huszonkett\u0151",
        "23": "huszonh\xE1rom",
        "24": "huszonn\xE9gy",
        "25": "huszon\xF6t",
        "26": "huszonhat",
        "27": "huszonh\xE9t",
        "28": "huszonnyolc",
        "29": "huszonkilenc",
        "30": "harminc",
        "40": "negyven",
        "50": "\xF6tven",
        "60": "hatvan",
        "70": "hetven",
        "80": "nyolcvan",
        "90": "kilencven",
        "100": "sz\xE1z",
        "200": "k\xE9tsz\xE1z",
        "300": "h\xE1romsz\xE1z",
        "400": "n\xE9gysz\xE1z",
        "500": "\xF6tsz\xE1z",
        "600": "hatsz\xE1z",
        "700": "h\xE9tsz\xE1z",
        "800": "nyolcsz\xE1z",
        "900": "kilencsz\xE1z",
        "1000": "ezer"
      },
      unitExceptions: {
        "1": "egy"
      },
      units: [
        {
          singular: "sz\xE1z",
          useBaseInstead: true,
          useBaseException: [1]
        },
        {
          singular: "ezer",
          avoidPrefixException: [1]
        },
        {
          singular: "milli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "milli\xE1rd",
          avoidPrefixException: [1]
        },
        {
          singular: "-billi\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "billi\xE1rd",
          avoidPrefixException: [1]
        },
        {
          singular: "trilli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "trilli\xE1rd",
          avoidPrefixException: [1]
        },
        {
          singular: "kvadrilli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "kvadrilli\xE1rd",
          avoidPrefixException: [1]
        },
        {
          singular: "kvintilli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "kvintilli\xE1rd",
          avoidPrefixException: [1]
        },
        {
          singular: "szextilli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "szeptilli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "oktilli\xF3",
          avoidPrefixException: [1]
        },
        {
          singular: "nonilli\xF3",
          avoidPrefixException: [1]
        }
      ]
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/en-indian.json
var require_en_indian = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/en-indian.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: "-",
      unitSeparator: "and ",
      base: {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
      },
      units: {
        "2": "hundred",
        "3": "thousand",
        "5": "lakh",
        "7": "crore"
      },
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/uk.json
var require_uk = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/uk.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "",
      base: {
        "0": "\u043D\u0443\u043B\u044C",
        "1": "\u043E\u0434\u0438\u043D",
        "2": "\u0434\u0432\u0430",
        "3": "\u0442\u0440\u0438",
        "4": "\u0447\u043E\u0442\u0438\u0440\u0438",
        "5": "\u043F\u2019\u044F\u0442\u044C",
        "6": "\u0448\u0456\u0441\u0442\u044C",
        "7": "\u0441\u0456\u043C",
        "8": "\u0432\u0456\u0441\u0456\u043C",
        "9": "\u0434\u0435\u0432\u2019\u044F\u0442\u044C",
        "10": "\u0434\u0435\u0441\u044F\u0442\u044C",
        "11": "\u043E\u0434\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "12": "\u0434\u0432\u0430\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "13": "\u0442\u0440\u0438\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "14": "\u0447\u043E\u0442\u0438\u0440\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "15": "\u043F\u2019\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "16": "\u0448\u0456\u0441\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "17": "\u0441\u0456\u043C\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "18": "\u0432\u0456\u0441\u0456\u043C\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "19": "\u0434\u0435\u0432\u2019\u044F\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u044C",
        "20": "\u0434\u0432\u0430\u0434\u0446\u044F\u0442\u044C",
        "30": "\u0442\u0440\u0438\u0434\u0446\u044F\u0442\u044C",
        "40": "\u0441\u043E\u0440\u043E\u043A",
        "50": "\u043F\u2019\u044F\u0442\u0434\u0435\u0441\u044F\u0442",
        "60": "\u0448\u0456\u0441\u0442\u0434\u0435\u0441\u044F\u0442",
        "70": "\u0441\u0456\u043C\u0434\u0435\u0441\u044F\u0442",
        "80": "\u0432\u0456\u0441\u0456\u043C\u0434\u0435\u0441\u044F\u0442",
        "90": "\u0434\u0435\u0432\u2019\u044F\u043D\u043E\u0441\u0442\u043E",
        "100": "\u0441\u0442\u043E",
        "200": "\u0434\u0432\u0456\u0441\u0442\u0456",
        "300": "\u0442\u0440\u0438\u0441\u0442\u0430",
        "400": "\u0447\u043E\u0442\u0438\u0440\u0438\u0441\u0442\u0430",
        "500": "\u043F\u2019\u044F\u0442\u0441\u043E\u0442",
        "600": "\u0448\u0456\u0441\u0442\u0441\u043E\u0442",
        "700": "\u0441\u0456\u043C\u0441\u043E\u0442",
        "800": "\u0432\u0456\u0441\u0456\u043C\u0441\u043E\u0442",
        "900": "\u0434\u0435\u0432\u2019\u044F\u0442\u0441\u043E\u0442"
      },
      alternativeBase: {
        feminine: {
          "1": "\u043E\u0434\u043D\u0430",
          "2": "\u0434\u0432\u0456"
        }
      },
      units: [
        {
          useBaseInstead: true,
          useBaseException: []
        },
        {
          singular: "\u0442\u0438\u0441\u044F\u0447\u0430",
          few: "\u0442\u0438\u0441\u044F\u0447\u0456",
          plural: "\u0442\u0438\u0441\u044F\u0447",
          useAlternativeBase: "feminine",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043C\u0456\u043B\u044C\u0439\u043E\u043D",
          few: "\u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0438",
          plural: "\u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043C\u0456\u043B\u044C\u044F\u0440\u0434",
          few: "\u043C\u0456\u043B\u044C\u044F\u0440\u0434\u0438",
          plural: "\u043C\u0456\u043B\u044C\u044F\u0440\u0434\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0442\u0440\u0438\u043B\u044C\u0439\u043E\u043D",
          few: "\u0442\u0440\u0438\u043B\u044C\u0439\u043E\u043D\u0438",
          plural: "\u0442\u0440\u0438\u043B\u044C\u0439\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0430\u0434\u0440\u0438\u043B\u044C\u0439\u043E\u043D",
          few: "\u043A\u0432\u0430\u0434\u0440\u0438\u043B\u044C\u0439\u043E\u043D\u0438",
          plural: "\u043A\u0432\u0430\u0434\u0440\u0438\u043B\u044C\u0439\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0456\u043D\u0442\u0438\u043B\u044C\u0439\u043E\u043D",
          few: "\u043A\u0432\u0456\u043D\u0442\u0438\u043B\u044C\u0439\u043E\u043D\u0438",
          plural: "\u043A\u0432\u0456\u043D\u0442\u0438\u043B\u044C\u0439\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0441\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u0439\u043E\u043D",
          few: "\u0441\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u0439\u043E\u043D\u0438",
          plural: "\u0441\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u0439\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0441\u0435\u043F\u0442\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u0441\u0435\u043F\u0442\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u0441\u0435\u043F\u0442\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043E\u043A\u0442\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u043E\u043A\u0442\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u043E\u043A\u0442\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043D\u043E\u043D\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u043D\u043E\u043D\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u043D\u043E\u043D\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0443\u043D\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u0443\u043D\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u0443\u043D\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0434\u0443\u043E\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u0434\u0443\u043E\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u0434\u0443\u043E\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0442\u0440\u0435\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u0442\u0440\u0435\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u0442\u0440\u0435\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0430\u0442\u0443\u043E\u0440\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u043A\u0432\u0430\u0442\u0443\u043E\u0440\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u043A\u0432\u0430\u0442\u0443\u043E\u0440\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0456\u043D\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D",
          few: "\u043A\u0432\u0456\u043D\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0438",
          plural: "\u043A\u0432\u0456\u043D\u0434\u0435\u0446\u0456\u043B\u043B\u0456\u043E\u043D\u0456\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        }
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/ru.json
var require_ru = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/ru.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "",
      base: {
        "0": "\u043D\u043E\u043B\u044C",
        "1": "\u043E\u0434\u0438\u043D",
        "2": "\u0434\u0432\u0430",
        "3": "\u0442\u0440\u0438",
        "4": "\u0447\u0435\u0442\u044B\u0440\u0435",
        "5": "\u043F\u044F\u0442\u044C",
        "6": "\u0448\u0435\u0441\u0442\u044C",
        "7": "\u0441\u0435\u043C\u044C",
        "8": "\u0432\u043E\u0441\u0435\u043C\u044C",
        "9": "\u0434\u0435\u0432\u044F\u0442\u044C",
        "10": "\u0434\u0435\u0441\u044F\u0442\u044C",
        "11": "\u043E\u0434\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "12": "\u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "13": "\u0442\u0440\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "14": "\u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "15": "\u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "16": "\u0448\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "17": "\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "18": "\u0432\u043E\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "19": "\u0434\u0435\u0432\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "20": "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C",
        "30": "\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C",
        "40": "\u0441\u043E\u0440\u043E\u043A",
        "50": "\u043F\u044F\u0442\u044C\u0434\u0435\u0441\u044F\u0442",
        "60": "\u0448\u0435\u0441\u0442\u044C\u0434\u0435\u0441\u044F\u0442",
        "70": "\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442",
        "80": "\u0432\u043E\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442",
        "90": "\u0434\u0435\u0432\u044F\u043D\u043E\u0441\u0442\u043E",
        "100": "\u0441\u0442\u043E",
        "200": "\u0434\u0432\u0435\u0441\u0442\u0438",
        "300": "\u0442\u0440\u0438\u0441\u0442\u0430",
        "400": "\u0447\u0435\u0442\u044B\u0440\u0435\u0441\u0442\u0430",
        "500": "\u043F\u044F\u0442\u044C\u0441\u043E\u0442",
        "600": "\u0448\u0435\u0441\u0442\u044C\u0441\u043E\u0442",
        "700": "\u0441\u0435\u043C\u044C\u0441\u043E\u0442",
        "800": "\u0432\u043E\u0441\u0435\u043C\u044C\u0441\u043E\u0442",
        "900": "\u0434\u0435\u0432\u044F\u0442\u044C\u0441\u043E\u0442"
      },
      alternativeBase: {
        feminine: {
          "1": "\u043E\u0434\u043D\u0430",
          "2": "\u0434\u0432\u0435"
        }
      },
      units: [
        {
          useBaseInstead: true,
          useBaseException: []
        },
        {
          singular: "\u0442\u044B\u0441\u044F\u0447\u0430",
          few: "\u0442\u044B\u0441\u044F\u0447\u0438",
          plural: "\u0442\u044B\u0441\u044F\u0447",
          useAlternativeBase: "feminine",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043C\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434",
          few: "\u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u0430",
          plural: "\u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0442\u0440\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u0442\u0440\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u0442\u0440\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0430\u0434\u0440\u0438\u043B\u044C\u043E\u043D",
          few: "\u043A\u0432\u0430\u0434\u0440\u0438\u043B\u043B\u0438\u043E\u043D",
          plural: "\u043A\u0432\u0430\u0434\u0440\u0438\u043B\u043E\u043D",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0438\u043D\u0442\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u043A\u0432\u0438\u043D\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u043A\u0432\u0438\u043D\u0442\u0438\u043B\u044C\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0441\u0435\u043A\u0441\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          few: "\u0441\u0435\u043A\u0441\u0442\u0438\u043B\u044C\u043E\u043D\u0430",
          plural: "\u0441\u0435\u043A\u0441\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0441\u0435\u043F\u0442\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u0441\u0435\u043F\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u0441\u0435\u043F\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043E\u043A\u0442\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u043E\u043A\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u043E\u043A\u0442\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043D\u043E\u043D\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u043D\u043E\u043D\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u043D\u043E\u043D\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0443\u043D\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u0443\u043D\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u0443\u043D\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0438\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0434\u0443\u043E\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u0434\u0443\u043E\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u0434\u0443\u043E\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0438\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u0442\u0440\u0435\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u0442\u0440\u0435\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u0442\u0440\u0435\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0438\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0430\u0442\u0443\u043E\u0440\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u043A\u0432\u0430\u0442\u0443\u043E\u0440\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u043A\u0432\u0430\u0442\u0443\u043E\u0440\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0438\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        },
        {
          singular: "\u043A\u0432\u0438\u043D\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D",
          few: "\u043A\u0432\u0438\u043D\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0430",
          plural: "\u043A\u0432\u0438\u043D\u0434\u0435\u0446\u0438\u043B\u043B\u0438\u043E\u043D\u0438\u0432",
          useSingularEnding: true,
          useFewEnding: true,
          avoidEndingRules: [11, 12, 13, 14, 111, 112, 113, 114, 211, 212, 213, 214, 311, 312, 313, 314, 411, 412, 413, 414, 511, 512, 513, 514, 611, 612, 613, 614, 711, 712, 713, 714, 811, 812, 813, 814, 911, 912, 913, 914]
        }
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/id.json
var require_id = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/i18n/id.json"(exports, module) {
    module.exports = {
      useLongScale: false,
      baseSeparator: " ",
      unitSeparator: "",
      base: {
        "0": "nol",
        "1": "satu",
        "2": "dua",
        "3": "tiga",
        "4": "empat",
        "5": "lima",
        "6": "enam",
        "7": "tujuh",
        "8": "delapan",
        "9": "sembilan",
        "10": "sepuluh",
        "11": "sebelas",
        "12": "dua belas",
        "13": "tiga belas",
        "14": "empat belas",
        "15": "lima belas",
        "16": "enam belas",
        "17": "tujuh belas",
        "18": "delapan belas",
        "19": "sembilan belas",
        "20": "dua puluh",
        "30": "tiga puluh",
        "40": "empat puluh",
        "50": "lima puluh",
        "60": "enam puluh",
        "70": "tujuh puluh",
        "80": "delapan puluh",
        "90": "sembilan puluh"
      },
      units: [
        {
          singular: "seratus",
          plural: "ratus",
          avoidPrefixException: [1]
        },
        {
          singular: "seribu",
          plural: "ribu",
          avoidPrefixException: [1]
        },
        "juta",
        "miliar",
        "triliun",
        "kuadiliun"
      ],
      unitExceptions: []
    };
  }
});

// _vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/index.js
var require_lib = __commonJS({
  "_vendor/github.com/naturalcrit/homebrewery/node_modules/written-number/lib/index.js"(exports, module) {
    "use strict";
    exports = module.exports = writtenNumber2;
    var util = require_util();
    var languages = ["en", "es", "ar", "az", "pt", "fr", "eo", "it", "vi", "tr", "uk", "ru", "id"];
    var i18n = {
      en: require_en(),
      es: require_es(),
      ar: require_ar(),
      az: require_az(),
      pt: require_pt(),
      ptPT: require_pt_PT(),
      fr: require_fr(),
      eo: require_eo(),
      it: require_it(),
      vi: require_vi(),
      tr: require_tr(),
      hu: require_hu(),
      enIndian: require_en_indian(),
      uk: require_uk(),
      ru: require_ru(),
      id: require_id()
    };
    exports.i18n = i18n;
    var shortScale = [100];
    for (i = 1; i <= 16; i++) {
      shortScale.push(Math.pow(10, i * 3));
    }
    var i;
    var longScale = [100, 1e3];
    for (i = 1; i <= 15; i++) {
      longScale.push(Math.pow(10, i * 6));
    }
    writtenNumber2.defaults = {
      noAnd: false,
      alternativeBase: null,
      lang: "en"
    };
    function writtenNumber2(n, options2) {
      options2 = options2 || {};
      options2 = util.defaults(options2, writtenNumber2.defaults);
      if (n < 0) {
        return "";
      }
      n = Math.round(+n);
      var language = typeof options2.lang === "string" ? i18n[options2.lang] : options2.lang;
      if (!language) {
        if (languages.indexOf(writtenNumber2.defaults.lang) < 0) {
          writtenNumber2.defaults.lang = "en";
        }
        language = i18n[writtenNumber2.defaults.lang];
      }
      var scale = language.useLongScale ? longScale : shortScale;
      var units = language.units;
      var unit;
      if (!(units instanceof Array)) {
        var rawUnits = units;
        units = [];
        scale = Object.keys(rawUnits);
        for (var i2 in scale) {
          units.push(rawUnits[scale[i2]]);
          scale[i2] = Math.pow(10, parseInt(scale[i2]));
        }
      }
      var baseCardinals = language.base;
      var alternativeBaseCardinals = options2.alternativeBase ? language.alternativeBase[options2.alternativeBase] : {};
      if (language.unitExceptions[n]) return language.unitExceptions[n];
      if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
      if (baseCardinals[n]) return baseCardinals[n];
      if (n < 100)
        return handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options2);
      var m = n % 100;
      var ret = [];
      if (m) {
        if (options2.noAnd && !(language.andException && language.andException[10])) {
          ret.push(writtenNumber2(m, options2));
        } else {
          ret.push(language.unitSeparator + writtenNumber2(m, options2));
        }
      }
      var firstSignificant;
      for (var i2 = 0, len = units.length; i2 < len; i2++) {
        var r = Math.floor(n / scale[i2]);
        var divideBy;
        if (i2 === len - 1) divideBy = 1e6;
        else divideBy = scale[i2 + 1] / scale[i2];
        r %= divideBy;
        unit = units[i2];
        if (!r) continue;
        firstSignificant = scale[i2];
        if (unit.useBaseInstead) {
          var shouldUseBaseException = unit.useBaseException.indexOf(r) > -1 && (unit.useBaseExceptionWhenNoTrailingNumbers ? i2 === 0 && ret.length : true);
          if (!shouldUseBaseException) {
            ret.push(alternativeBaseCardinals[r * scale[i2]] || baseCardinals[r * scale[i2]]);
          } else {
            ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
          }
          continue;
        }
        var str;
        if (typeof unit === "string") {
          str = unit;
        } else if (r === 1 || unit.useSingularEnding && r % 10 === 1 && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {
          str = unit.singular;
        } else if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5 && (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
          str = unit.few;
        } else {
          str = unit.plural && (!unit.avoidInNumberPlural || !m) ? unit.plural : unit.singular;
          str = r === 2 && unit.dual ? unit.dual : str;
          str = r > 10 && unit.restrictedPlural ? unit.singular : str;
        }
        if (unit.avoidPrefixException && unit.avoidPrefixException.indexOf(r) > -1) {
          ret.push(str);
          continue;
        }
        var exception = language.unitExceptions[r];
        var number = exception || writtenNumber2(
          r,
          util.defaults(
            {
              // Languages with and exceptions need to set `noAnd` to false
              noAnd: !(language.andException && language.andException[r] || unit.andException) && true,
              alternativeBase: unit.useAlternativeBase
            },
            options2
          )
        );
        n -= r * scale[i2];
        ret.push(number + " " + str);
      }
      var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
      var rest = n - firstSignificantN;
      if (language.andWhenTrailing && firstSignificant && 0 < rest && ret[0].indexOf(language.unitSeparator) !== 0) {
        ret = [ret[0], language.unitSeparator.replace(/\s+$/, "")].concat(
          ret.slice(1)
        );
      }
      if (language.allSeparator) {
        for (var j = 0; j < ret.length - 1; j++) {
          ret[j] = language.allSeparator + ret[j];
        }
      }
      var result = ret.reverse().join(" ");
      return result;
    }
    function handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals, options2) {
      var dec = Math.floor(n / 10) * 10;
      unit = n - dec;
      if (unit) {
        return alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + writtenNumber2(unit, options2);
      }
      return alternativeBaseCardinals[dec] || baseCardinals[dec];
    }
  }
});

// _vendor/github.com/naturalcrit/homebrewery/shared/naturalcrit/markdown.js
var import_lodash = __toESM(require_lodash(), 1);

// _vendor/github.com/naturalcrit/homebrewery/node_modules/expr-eval/dist/index.mjs
var INUMBER = "INUMBER";
var IOP1 = "IOP1";
var IOP2 = "IOP2";
var IOP3 = "IOP3";
var IVAR = "IVAR";
var IVARNAME = "IVARNAME";
var IFUNCALL = "IFUNCALL";
var IFUNDEF = "IFUNDEF";
var IEXPR = "IEXPR";
var IEXPREVAL = "IEXPREVAL";
var IMEMBER = "IMEMBER";
var IENDSTATEMENT = "IENDSTATEMENT";
var IARRAY = "IARRAY";
function Instruction(type, value) {
  this.type = type;
  this.value = value !== void 0 && value !== null ? value : 0;
}
Instruction.prototype.toString = function() {
  switch (this.type) {
    case INUMBER:
    case IOP1:
    case IOP2:
    case IOP3:
    case IVAR:
    case IVARNAME:
    case IENDSTATEMENT:
      return this.value;
    case IFUNCALL:
      return "CALL " + this.value;
    case IFUNDEF:
      return "DEF " + this.value;
    case IARRAY:
      return "ARRAY " + this.value;
    case IMEMBER:
      return "." + this.value;
    default:
      return "Invalid Instruction";
  }
};
function unaryInstruction(value) {
  return new Instruction(IOP1, value);
}
function binaryInstruction(value) {
  return new Instruction(IOP2, value);
}
function ternaryInstruction(value) {
  return new Instruction(IOP3, value);
}
function simplify(tokens, unaryOps, binaryOps, ternaryOps, values) {
  var nstack = [];
  var newexpression = [];
  var n1, n2, n3;
  var f;
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER || type === IVARNAME) {
      if (Array.isArray(item.value)) {
        nstack.push.apply(nstack, simplify(item.value.map(function(x) {
          return new Instruction(INUMBER, x);
        }).concat(new Instruction(IARRAY, item.value.length)), unaryOps, binaryOps, ternaryOps, values));
      } else {
        nstack.push(item);
      }
    } else if (type === IVAR && values.hasOwnProperty(item.value)) {
      item = new Instruction(INUMBER, values[item.value]);
      nstack.push(item);
    } else if (type === IOP2 && nstack.length > 1) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = binaryOps[item.value];
      item = new Instruction(INUMBER, f(n1.value, n2.value));
      nstack.push(item);
    } else if (type === IOP3 && nstack.length > 2) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === "?") {
        nstack.push(n1.value ? n2.value : n3.value);
      } else {
        f = ternaryOps[item.value];
        item = new Instruction(INUMBER, f(n1.value, n2.value, n3.value));
        nstack.push(item);
      }
    } else if (type === IOP1 && nstack.length > 0) {
      n1 = nstack.pop();
      f = unaryOps[item.value];
      item = new Instruction(INUMBER, f(n1.value));
      nstack.push(item);
    } else if (type === IEXPR) {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(new Instruction(IEXPR, simplify(item.value, unaryOps, binaryOps, ternaryOps, values)));
    } else if (type === IMEMBER && nstack.length > 0) {
      n1 = nstack.pop();
      nstack.push(new Instruction(INUMBER, n1.value[item.value]));
    } else {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(item);
    }
  }
  while (nstack.length > 0) {
    newexpression.push(nstack.shift());
  }
  return newexpression;
}
function substitute(tokens, variable, expr) {
  var newexpression = [];
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === IVAR && item.value === variable) {
      for (var j = 0; j < expr.tokens.length; j++) {
        var expritem = expr.tokens[j];
        var replitem;
        if (expritem.type === IOP1) {
          replitem = unaryInstruction(expritem.value);
        } else if (expritem.type === IOP2) {
          replitem = binaryInstruction(expritem.value);
        } else if (expritem.type === IOP3) {
          replitem = ternaryInstruction(expritem.value);
        } else {
          replitem = new Instruction(expritem.type, expritem.value);
        }
        newexpression.push(replitem);
      }
    } else if (type === IEXPR) {
      newexpression.push(new Instruction(IEXPR, substitute(item.value, variable, expr)));
    } else {
      newexpression.push(item);
    }
  }
  return newexpression;
}
function evaluate(tokens, expr, values) {
  var nstack = [];
  var n1, n2, n3;
  var f, args, argCount;
  if (isExpressionEvaluator(tokens)) {
    return resolveExpression(tokens, values);
  }
  var numTokens = tokens.length;
  for (var i = 0; i < numTokens; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER || type === IVARNAME) {
      nstack.push(item.value);
    } else if (type === IOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === "and") {
        nstack.push(n1 ? !!evaluate(n2, expr, values) : false);
      } else if (item.value === "or") {
        nstack.push(n1 ? true : !!evaluate(n2, expr, values));
      } else if (item.value === "=") {
        f = expr.binaryOps[item.value];
        nstack.push(f(n1, evaluate(n2, expr, values), values));
      } else {
        f = expr.binaryOps[item.value];
        nstack.push(f(resolveExpression(n1, values), resolveExpression(n2, values)));
      }
    } else if (type === IOP3) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === "?") {
        nstack.push(evaluate(n1 ? n2 : n3, expr, values));
      } else {
        f = expr.ternaryOps[item.value];
        nstack.push(f(resolveExpression(n1, values), resolveExpression(n2, values), resolveExpression(n3, values)));
      }
    } else if (type === IVAR) {
      if (item.value in expr.functions) {
        nstack.push(expr.functions[item.value]);
      } else if (item.value in expr.unaryOps && expr.parser.isOperatorEnabled(item.value)) {
        nstack.push(expr.unaryOps[item.value]);
      } else {
        var v = values[item.value];
        if (v !== void 0) {
          nstack.push(v);
        } else {
          throw new Error("undefined variable: " + item.value);
        }
      }
    } else if (type === IOP1) {
      n1 = nstack.pop();
      f = expr.unaryOps[item.value];
      nstack.push(f(resolveExpression(n1, values)));
    } else if (type === IFUNCALL) {
      argCount = item.value;
      args = [];
      while (argCount-- > 0) {
        args.unshift(resolveExpression(nstack.pop(), values));
      }
      f = nstack.pop();
      if (f.apply && f.call) {
        nstack.push(f.apply(void 0, args));
      } else {
        throw new Error(f + " is not a function");
      }
    } else if (type === IFUNDEF) {
      nstack.push(function() {
        var n22 = nstack.pop();
        var args2 = [];
        var argCount2 = item.value;
        while (argCount2-- > 0) {
          args2.unshift(nstack.pop());
        }
        var n12 = nstack.pop();
        var f2 = function() {
          var scope = Object.assign({}, values);
          for (var i2 = 0, len = args2.length; i2 < len; i2++) {
            scope[args2[i2]] = arguments[i2];
          }
          return evaluate(n22, expr, scope);
        };
        Object.defineProperty(f2, "name", {
          value: n12,
          writable: false
        });
        values[n12] = f2;
        return f2;
      }());
    } else if (type === IEXPR) {
      nstack.push(createExpressionEvaluator(item, expr));
    } else if (type === IEXPREVAL) {
      nstack.push(item);
    } else if (type === IMEMBER) {
      n1 = nstack.pop();
      nstack.push(n1[item.value]);
    } else if (type === IENDSTATEMENT) {
      nstack.pop();
    } else if (type === IARRAY) {
      argCount = item.value;
      args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      nstack.push(args);
    } else {
      throw new Error("invalid Expression");
    }
  }
  if (nstack.length > 1) {
    throw new Error("invalid Expression (parity)");
  }
  return nstack[0] === 0 ? 0 : resolveExpression(nstack[0], values);
}
function createExpressionEvaluator(token, expr, values) {
  if (isExpressionEvaluator(token)) return token;
  return {
    type: IEXPREVAL,
    value: function(scope) {
      return evaluate(token.value, expr, scope);
    }
  };
}
function isExpressionEvaluator(n) {
  return n && n.type === IEXPREVAL;
}
function resolveExpression(n, values) {
  return isExpressionEvaluator(n) ? n.value(values) : n;
}
function expressionToString(tokens, toJS) {
  var nstack = [];
  var n1, n2, n3;
  var f, args, argCount;
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      if (typeof item.value === "number" && item.value < 0) {
        nstack.push("(" + item.value + ")");
      } else if (Array.isArray(item.value)) {
        nstack.push("[" + item.value.map(escapeValue).join(", ") + "]");
      } else {
        nstack.push(escapeValue(item.value));
      }
    } else if (type === IOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.value;
      if (toJS) {
        if (f === "^") {
          nstack.push("Math.pow(" + n1 + ", " + n2 + ")");
        } else if (f === "and") {
          nstack.push("(!!" + n1 + " && !!" + n2 + ")");
        } else if (f === "or") {
          nstack.push("(!!" + n1 + " || !!" + n2 + ")");
        } else if (f === "||") {
          nstack.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" + n1 + "),(" + n2 + ")))");
        } else if (f === "==") {
          nstack.push("(" + n1 + " === " + n2 + ")");
        } else if (f === "!=") {
          nstack.push("(" + n1 + " !== " + n2 + ")");
        } else if (f === "[") {
          nstack.push(n1 + "[(" + n2 + ") | 0]");
        } else {
          nstack.push("(" + n1 + " " + f + " " + n2 + ")");
        }
      } else {
        if (f === "[") {
          nstack.push(n1 + "[" + n2 + "]");
        } else {
          nstack.push("(" + n1 + " " + f + " " + n2 + ")");
        }
      }
    } else if (type === IOP3) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.value;
      if (f === "?") {
        nstack.push("(" + n1 + " ? " + n2 + " : " + n3 + ")");
      } else {
        throw new Error("invalid Expression");
      }
    } else if (type === IVAR || type === IVARNAME) {
      nstack.push(item.value);
    } else if (type === IOP1) {
      n1 = nstack.pop();
      f = item.value;
      if (f === "-" || f === "+") {
        nstack.push("(" + f + n1 + ")");
      } else if (toJS) {
        if (f === "not") {
          nstack.push("(!" + n1 + ")");
        } else if (f === "!") {
          nstack.push("fac(" + n1 + ")");
        } else {
          nstack.push(f + "(" + n1 + ")");
        }
      } else if (f === "!") {
        nstack.push("(" + n1 + "!)");
      } else {
        nstack.push("(" + f + " " + n1 + ")");
      }
    } else if (type === IFUNCALL) {
      argCount = item.value;
      args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      f = nstack.pop();
      nstack.push(f + "(" + args.join(", ") + ")");
    } else if (type === IFUNDEF) {
      n2 = nstack.pop();
      argCount = item.value;
      args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      n1 = nstack.pop();
      if (toJS) {
        nstack.push("(" + n1 + " = function(" + args.join(", ") + ") { return " + n2 + " })");
      } else {
        nstack.push("(" + n1 + "(" + args.join(", ") + ") = " + n2 + ")");
      }
    } else if (type === IMEMBER) {
      n1 = nstack.pop();
      nstack.push(n1 + "." + item.value);
    } else if (type === IARRAY) {
      argCount = item.value;
      args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      nstack.push("[" + args.join(", ") + "]");
    } else if (type === IEXPR) {
      nstack.push("(" + expressionToString(item.value, toJS) + ")");
    } else if (type === IENDSTATEMENT) ;
    else {
      throw new Error("invalid Expression");
    }
  }
  if (nstack.length > 1) {
    if (toJS) {
      nstack = [nstack.join(",")];
    } else {
      nstack = [nstack.join(";")];
    }
  }
  return String(nstack[0]);
}
function escapeValue(v) {
  if (typeof v === "string") {
    return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  return v;
}
function contains(array, obj) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    }
  }
  return false;
}
function getSymbols(tokens, symbols, options2) {
  options2 = options2 || {};
  var withMembers = !!options2.withMembers;
  var prevVar = null;
  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];
    if (item.type === IVAR || item.type === IVARNAME) {
      if (!withMembers && !contains(symbols, item.value)) {
        symbols.push(item.value);
      } else if (prevVar !== null) {
        if (!contains(symbols, prevVar)) {
          symbols.push(prevVar);
        }
        prevVar = item.value;
      } else {
        prevVar = item.value;
      }
    } else if (item.type === IMEMBER && withMembers && prevVar !== null) {
      prevVar += "." + item.value;
    } else if (item.type === IEXPR) {
      getSymbols(item.value, symbols, options2);
    } else if (prevVar !== null) {
      if (!contains(symbols, prevVar)) {
        symbols.push(prevVar);
      }
      prevVar = null;
    }
  }
  if (prevVar !== null && !contains(symbols, prevVar)) {
    symbols.push(prevVar);
  }
}
function Expression(tokens, parser2) {
  this.tokens = tokens;
  this.parser = parser2;
  this.unaryOps = parser2.unaryOps;
  this.binaryOps = parser2.binaryOps;
  this.ternaryOps = parser2.ternaryOps;
  this.functions = parser2.functions;
}
Expression.prototype.simplify = function(values) {
  values = values || {};
  return new Expression(simplify(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, values), this.parser);
};
Expression.prototype.substitute = function(variable, expr) {
  if (!(expr instanceof Expression)) {
    expr = this.parser.parse(String(expr));
  }
  return new Expression(substitute(this.tokens, variable, expr), this.parser);
};
Expression.prototype.evaluate = function(values) {
  values = values || {};
  return evaluate(this.tokens, this, values);
};
Expression.prototype.toString = function() {
  return expressionToString(this.tokens, false);
};
Expression.prototype.symbols = function(options2) {
  options2 = options2 || {};
  var vars = [];
  getSymbols(this.tokens, vars, options2);
  return vars;
};
Expression.prototype.variables = function(options2) {
  options2 = options2 || {};
  var vars = [];
  getSymbols(this.tokens, vars, options2);
  var functions = this.functions;
  return vars.filter(function(name) {
    return !(name in functions);
  });
};
Expression.prototype.toJSFunction = function(param, variables) {
  var expr = this;
  var f = new Function(param, "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " + expressionToString(this.simplify(variables).tokens, true) + "; }");
  return function() {
    return f.apply(expr, arguments);
  };
};
var TEOF = "TEOF";
var TOP = "TOP";
var TNUMBER = "TNUMBER";
var TSTRING = "TSTRING";
var TPAREN = "TPAREN";
var TBRACKET = "TBRACKET";
var TCOMMA = "TCOMMA";
var TNAME = "TNAME";
var TSEMICOLON = "TSEMICOLON";
function Token(type, value, index) {
  this.type = type;
  this.value = value;
  this.index = index;
}
Token.prototype.toString = function() {
  return this.type + ": " + this.value;
};
function TokenStream(parser2, expression) {
  this.pos = 0;
  this.current = null;
  this.unaryOps = parser2.unaryOps;
  this.binaryOps = parser2.binaryOps;
  this.ternaryOps = parser2.ternaryOps;
  this.consts = parser2.consts;
  this.expression = expression;
  this.savedPosition = 0;
  this.savedCurrent = null;
  this.options = parser2.options;
  this.parser = parser2;
}
TokenStream.prototype.newToken = function(type, value, pos) {
  return new Token(type, value, pos != null ? pos : this.pos);
};
TokenStream.prototype.save = function() {
  this.savedPosition = this.pos;
  this.savedCurrent = this.current;
};
TokenStream.prototype.restore = function() {
  this.pos = this.savedPosition;
  this.current = this.savedCurrent;
};
TokenStream.prototype.next = function() {
  if (this.pos >= this.expression.length) {
    return this.newToken(TEOF, "EOF");
  }
  if (this.isWhitespace() || this.isComment()) {
    return this.next();
  } else if (this.isRadixInteger() || this.isNumber() || this.isOperator() || this.isString() || this.isParen() || this.isBracket() || this.isComma() || this.isSemicolon() || this.isNamedOp() || this.isConst() || this.isName()) {
    return this.current;
  } else {
    this.parseError('Unknown character "' + this.expression.charAt(this.pos) + '"');
  }
};
TokenStream.prototype.isString = function() {
  var r = false;
  var startPos = this.pos;
  var quote = this.expression.charAt(startPos);
  if (quote === "'" || quote === '"') {
    var index = this.expression.indexOf(quote, startPos + 1);
    while (index >= 0 && this.pos < this.expression.length) {
      this.pos = index + 1;
      if (this.expression.charAt(index - 1) !== "\\") {
        var rawString = this.expression.substring(startPos + 1, index);
        this.current = this.newToken(TSTRING, this.unescape(rawString), startPos);
        r = true;
        break;
      }
      index = this.expression.indexOf(quote, index + 1);
    }
  }
  return r;
};
TokenStream.prototype.isParen = function() {
  var c = this.expression.charAt(this.pos);
  if (c === "(" || c === ")") {
    this.current = this.newToken(TPAREN, c);
    this.pos++;
    return true;
  }
  return false;
};
TokenStream.prototype.isBracket = function() {
  var c = this.expression.charAt(this.pos);
  if ((c === "[" || c === "]") && this.isOperatorEnabled("[")) {
    this.current = this.newToken(TBRACKET, c);
    this.pos++;
    return true;
  }
  return false;
};
TokenStream.prototype.isComma = function() {
  var c = this.expression.charAt(this.pos);
  if (c === ",") {
    this.current = this.newToken(TCOMMA, ",");
    this.pos++;
    return true;
  }
  return false;
};
TokenStream.prototype.isSemicolon = function() {
  var c = this.expression.charAt(this.pos);
  if (c === ";") {
    this.current = this.newToken(TSEMICOLON, ";");
    this.pos++;
    return true;
  }
  return false;
};
TokenStream.prototype.isConst = function() {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || c !== "_" && c !== "." && (c < "0" || c > "9")) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    if (str in this.consts) {
      this.current = this.newToken(TNUMBER, this.consts[str]);
      this.pos += str.length;
      return true;
    }
  }
  return false;
};
TokenStream.prototype.isNamedOp = function() {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || c !== "_" && (c < "0" || c > "9")) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    if (this.isOperatorEnabled(str) && (str in this.binaryOps || str in this.unaryOps || str in this.ternaryOps)) {
      this.current = this.newToken(TOP, str);
      this.pos += str.length;
      return true;
    }
  }
  return false;
};
TokenStream.prototype.isName = function() {
  var startPos = this.pos;
  var i = startPos;
  var hasLetter = false;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos && (c === "$" || c === "_")) {
        if (c === "_") {
          hasLetter = true;
        }
        continue;
      } else if (i === this.pos || !hasLetter || c !== "_" && (c < "0" || c > "9")) {
        break;
      }
    } else {
      hasLetter = true;
    }
  }
  if (hasLetter) {
    var str = this.expression.substring(startPos, i);
    this.current = this.newToken(TNAME, str);
    this.pos += str.length;
    return true;
  }
  return false;
};
TokenStream.prototype.isWhitespace = function() {
  var r = false;
  var c = this.expression.charAt(this.pos);
  while (c === " " || c === "	" || c === "\n" || c === "\r") {
    r = true;
    this.pos++;
    if (this.pos >= this.expression.length) {
      break;
    }
    c = this.expression.charAt(this.pos);
  }
  return r;
};
var codePointPattern = /^[0-9a-f]{4}$/i;
TokenStream.prototype.unescape = function(v) {
  var index = v.indexOf("\\");
  if (index < 0) {
    return v;
  }
  var buffer = v.substring(0, index);
  while (index >= 0) {
    var c = v.charAt(++index);
    switch (c) {
      case "'":
        buffer += "'";
        break;
      case '"':
        buffer += '"';
        break;
      case "\\":
        buffer += "\\";
        break;
      case "/":
        buffer += "/";
        break;
      case "b":
        buffer += "\b";
        break;
      case "f":
        buffer += "\f";
        break;
      case "n":
        buffer += "\n";
        break;
      case "r":
        buffer += "\r";
        break;
      case "t":
        buffer += "	";
        break;
      case "u":
        var codePoint = v.substring(index + 1, index + 5);
        if (!codePointPattern.test(codePoint)) {
          this.parseError("Illegal escape sequence: \\u" + codePoint);
        }
        buffer += String.fromCharCode(parseInt(codePoint, 16));
        index += 4;
        break;
      default:
        throw this.parseError('Illegal escape sequence: "\\' + c + '"');
    }
    ++index;
    var backslash = v.indexOf("\\", index);
    buffer += v.substring(index, backslash < 0 ? v.length : backslash);
    index = backslash;
  }
  return buffer;
};
TokenStream.prototype.isComment = function() {
  var c = this.expression.charAt(this.pos);
  if (c === "/" && this.expression.charAt(this.pos + 1) === "*") {
    this.pos = this.expression.indexOf("*/", this.pos) + 2;
    if (this.pos === 1) {
      this.pos = this.expression.length;
    }
    return true;
  }
  return false;
};
TokenStream.prototype.isRadixInteger = function() {
  var pos = this.pos;
  if (pos >= this.expression.length - 2 || this.expression.charAt(pos) !== "0") {
    return false;
  }
  ++pos;
  var radix;
  var validDigit;
  if (this.expression.charAt(pos) === "x") {
    radix = 16;
    validDigit = /^[0-9a-f]$/i;
    ++pos;
  } else if (this.expression.charAt(pos) === "b") {
    radix = 2;
    validDigit = /^[01]$/i;
    ++pos;
  } else {
    return false;
  }
  var valid = false;
  var startPos = pos;
  while (pos < this.expression.length) {
    var c = this.expression.charAt(pos);
    if (validDigit.test(c)) {
      pos++;
      valid = true;
    } else {
      break;
    }
  }
  if (valid) {
    this.current = this.newToken(TNUMBER, parseInt(this.expression.substring(startPos, pos), radix));
    this.pos = pos;
  }
  return valid;
};
TokenStream.prototype.isNumber = function() {
  var valid = false;
  var pos = this.pos;
  var startPos = pos;
  var resetPos = pos;
  var foundDot = false;
  var foundDigits = false;
  var c;
  while (pos < this.expression.length) {
    c = this.expression.charAt(pos);
    if (c >= "0" && c <= "9" || !foundDot && c === ".") {
      if (c === ".") {
        foundDot = true;
      } else {
        foundDigits = true;
      }
      pos++;
      valid = foundDigits;
    } else {
      break;
    }
  }
  if (valid) {
    resetPos = pos;
  }
  if (c === "e" || c === "E") {
    pos++;
    var acceptSign = true;
    var validExponent = false;
    while (pos < this.expression.length) {
      c = this.expression.charAt(pos);
      if (acceptSign && (c === "+" || c === "-")) {
        acceptSign = false;
      } else if (c >= "0" && c <= "9") {
        validExponent = true;
        acceptSign = false;
      } else {
        break;
      }
      pos++;
    }
    if (!validExponent) {
      pos = resetPos;
    }
  }
  if (valid) {
    this.current = this.newToken(TNUMBER, parseFloat(this.expression.substring(startPos, pos)));
    this.pos = pos;
  } else {
    this.pos = resetPos;
  }
  return valid;
};
TokenStream.prototype.isOperator = function() {
  var startPos = this.pos;
  var c = this.expression.charAt(this.pos);
  if (c === "+" || c === "-" || c === "*" || c === "/" || c === "%" || c === "^" || c === "?" || c === ":" || c === ".") {
    this.current = this.newToken(TOP, c);
  } else if (c === "\u2219" || c === "\u2022") {
    this.current = this.newToken(TOP, "*");
  } else if (c === ">") {
    if (this.expression.charAt(this.pos + 1) === "=") {
      this.current = this.newToken(TOP, ">=");
      this.pos++;
    } else {
      this.current = this.newToken(TOP, ">");
    }
  } else if (c === "<") {
    if (this.expression.charAt(this.pos + 1) === "=") {
      this.current = this.newToken(TOP, "<=");
      this.pos++;
    } else {
      this.current = this.newToken(TOP, "<");
    }
  } else if (c === "|") {
    if (this.expression.charAt(this.pos + 1) === "|") {
      this.current = this.newToken(TOP, "||");
      this.pos++;
    } else {
      return false;
    }
  } else if (c === "=") {
    if (this.expression.charAt(this.pos + 1) === "=") {
      this.current = this.newToken(TOP, "==");
      this.pos++;
    } else {
      this.current = this.newToken(TOP, c);
    }
  } else if (c === "!") {
    if (this.expression.charAt(this.pos + 1) === "=") {
      this.current = this.newToken(TOP, "!=");
      this.pos++;
    } else {
      this.current = this.newToken(TOP, c);
    }
  } else {
    return false;
  }
  this.pos++;
  if (this.isOperatorEnabled(this.current.value)) {
    return true;
  } else {
    this.pos = startPos;
    return false;
  }
};
TokenStream.prototype.isOperatorEnabled = function(op) {
  return this.parser.isOperatorEnabled(op);
};
TokenStream.prototype.getCoordinates = function() {
  var line = 0;
  var column;
  var newline2 = -1;
  do {
    line++;
    column = this.pos - newline2;
    newline2 = this.expression.indexOf("\n", newline2 + 1);
  } while (newline2 >= 0 && newline2 < this.pos);
  return {
    line,
    column
  };
};
TokenStream.prototype.parseError = function(msg) {
  var coords = this.getCoordinates();
  throw new Error("parse error [" + coords.line + ":" + coords.column + "]: " + msg);
};
function ParserState(parser2, tokenStream, options2) {
  this.parser = parser2;
  this.tokens = tokenStream;
  this.current = null;
  this.nextToken = null;
  this.next();
  this.savedCurrent = null;
  this.savedNextToken = null;
  this.allowMemberAccess = options2.allowMemberAccess !== false;
}
ParserState.prototype.next = function() {
  this.current = this.nextToken;
  return this.nextToken = this.tokens.next();
};
ParserState.prototype.tokenMatches = function(token, value) {
  if (typeof value === "undefined") {
    return true;
  } else if (Array.isArray(value)) {
    return contains(value, token.value);
  } else if (typeof value === "function") {
    return value(token);
  } else {
    return token.value === value;
  }
};
ParserState.prototype.save = function() {
  this.savedCurrent = this.current;
  this.savedNextToken = this.nextToken;
  this.tokens.save();
};
ParserState.prototype.restore = function() {
  this.tokens.restore();
  this.current = this.savedCurrent;
  this.nextToken = this.savedNextToken;
};
ParserState.prototype.accept = function(type, value) {
  if (this.nextToken.type === type && this.tokenMatches(this.nextToken, value)) {
    this.next();
    return true;
  }
  return false;
};
ParserState.prototype.expect = function(type, value) {
  if (!this.accept(type, value)) {
    var coords = this.tokens.getCoordinates();
    throw new Error("parse error [" + coords.line + ":" + coords.column + "]: Expected " + (value || type));
  }
};
ParserState.prototype.parseAtom = function(instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }
  if (this.accept(TNAME) || this.accept(TOP, isPrefixOperator)) {
    instr.push(new Instruction(IVAR, this.current.value));
  } else if (this.accept(TNUMBER)) {
    instr.push(new Instruction(INUMBER, this.current.value));
  } else if (this.accept(TSTRING)) {
    instr.push(new Instruction(INUMBER, this.current.value));
  } else if (this.accept(TPAREN, "(")) {
    this.parseExpression(instr);
    this.expect(TPAREN, ")");
  } else if (this.accept(TBRACKET, "[")) {
    if (this.accept(TBRACKET, "]")) {
      instr.push(new Instruction(IARRAY, 0));
    } else {
      var argCount = this.parseArrayList(instr);
      instr.push(new Instruction(IARRAY, argCount));
    }
  } else {
    throw new Error("unexpected " + this.nextToken);
  }
};
ParserState.prototype.parseExpression = function(instr) {
  var exprInstr = [];
  if (this.parseUntilEndStatement(instr, exprInstr)) {
    return;
  }
  this.parseVariableAssignmentExpression(exprInstr);
  if (this.parseUntilEndStatement(instr, exprInstr)) {
    return;
  }
  this.pushExpression(instr, exprInstr);
};
ParserState.prototype.pushExpression = function(instr, exprInstr) {
  for (var i = 0, len = exprInstr.length; i < len; i++) {
    instr.push(exprInstr[i]);
  }
};
ParserState.prototype.parseUntilEndStatement = function(instr, exprInstr) {
  if (!this.accept(TSEMICOLON)) return false;
  if (this.nextToken && this.nextToken.type !== TEOF && !(this.nextToken.type === TPAREN && this.nextToken.value === ")")) {
    exprInstr.push(new Instruction(IENDSTATEMENT));
  }
  if (this.nextToken.type !== TEOF) {
    this.parseExpression(exprInstr);
  }
  instr.push(new Instruction(IEXPR, exprInstr));
  return true;
};
ParserState.prototype.parseArrayList = function(instr) {
  var argCount = 0;
  while (!this.accept(TBRACKET, "]")) {
    this.parseExpression(instr);
    ++argCount;
    while (this.accept(TCOMMA)) {
      this.parseExpression(instr);
      ++argCount;
    }
  }
  return argCount;
};
ParserState.prototype.parseVariableAssignmentExpression = function(instr) {
  this.parseConditionalExpression(instr);
  while (this.accept(TOP, "=")) {
    var varName = instr.pop();
    var varValue = [];
    var lastInstrIndex = instr.length - 1;
    if (varName.type === IFUNCALL) {
      if (!this.tokens.isOperatorEnabled("()=")) {
        throw new Error("function definition is not permitted");
      }
      for (var i = 0, len = varName.value + 1; i < len; i++) {
        var index = lastInstrIndex - i;
        if (instr[index].type === IVAR) {
          instr[index] = new Instruction(IVARNAME, instr[index].value);
        }
      }
      this.parseVariableAssignmentExpression(varValue);
      instr.push(new Instruction(IEXPR, varValue));
      instr.push(new Instruction(IFUNDEF, varName.value));
      continue;
    }
    if (varName.type !== IVAR && varName.type !== IMEMBER) {
      throw new Error("expected variable for assignment");
    }
    this.parseVariableAssignmentExpression(varValue);
    instr.push(new Instruction(IVARNAME, varName.value));
    instr.push(new Instruction(IEXPR, varValue));
    instr.push(binaryInstruction("="));
  }
};
ParserState.prototype.parseConditionalExpression = function(instr) {
  this.parseOrExpression(instr);
  while (this.accept(TOP, "?")) {
    var trueBranch = [];
    var falseBranch = [];
    this.parseConditionalExpression(trueBranch);
    this.expect(TOP, ":");
    this.parseConditionalExpression(falseBranch);
    instr.push(new Instruction(IEXPR, trueBranch));
    instr.push(new Instruction(IEXPR, falseBranch));
    instr.push(ternaryInstruction("?"));
  }
};
ParserState.prototype.parseOrExpression = function(instr) {
  this.parseAndExpression(instr);
  while (this.accept(TOP, "or")) {
    var falseBranch = [];
    this.parseAndExpression(falseBranch);
    instr.push(new Instruction(IEXPR, falseBranch));
    instr.push(binaryInstruction("or"));
  }
};
ParserState.prototype.parseAndExpression = function(instr) {
  this.parseComparison(instr);
  while (this.accept(TOP, "and")) {
    var trueBranch = [];
    this.parseComparison(trueBranch);
    instr.push(new Instruction(IEXPR, trueBranch));
    instr.push(binaryInstruction("and"));
  }
};
var COMPARISON_OPERATORS = ["==", "!=", "<", "<=", ">=", ">", "in"];
ParserState.prototype.parseComparison = function(instr) {
  this.parseAddSub(instr);
  while (this.accept(TOP, COMPARISON_OPERATORS)) {
    var op = this.current;
    this.parseAddSub(instr);
    instr.push(binaryInstruction(op.value));
  }
};
var ADD_SUB_OPERATORS = ["+", "-", "||"];
ParserState.prototype.parseAddSub = function(instr) {
  this.parseTerm(instr);
  while (this.accept(TOP, ADD_SUB_OPERATORS)) {
    var op = this.current;
    this.parseTerm(instr);
    instr.push(binaryInstruction(op.value));
  }
};
var TERM_OPERATORS = ["*", "/", "%"];
ParserState.prototype.parseTerm = function(instr) {
  this.parseFactor(instr);
  while (this.accept(TOP, TERM_OPERATORS)) {
    var op = this.current;
    this.parseFactor(instr);
    instr.push(binaryInstruction(op.value));
  }
};
ParserState.prototype.parseFactor = function(instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }
  this.save();
  if (this.accept(TOP, isPrefixOperator)) {
    if (this.current.value !== "-" && this.current.value !== "+") {
      if (this.nextToken.type === TPAREN && this.nextToken.value === "(") {
        this.restore();
        this.parseExponential(instr);
        return;
      } else if (this.nextToken.type === TSEMICOLON || this.nextToken.type === TCOMMA || this.nextToken.type === TEOF || this.nextToken.type === TPAREN && this.nextToken.value === ")") {
        this.restore();
        this.parseAtom(instr);
        return;
      }
    }
    var op = this.current;
    this.parseFactor(instr);
    instr.push(unaryInstruction(op.value));
  } else {
    this.parseExponential(instr);
  }
};
ParserState.prototype.parseExponential = function(instr) {
  this.parsePostfixExpression(instr);
  while (this.accept(TOP, "^")) {
    this.parseFactor(instr);
    instr.push(binaryInstruction("^"));
  }
};
ParserState.prototype.parsePostfixExpression = function(instr) {
  this.parseFunctionCall(instr);
  while (this.accept(TOP, "!")) {
    instr.push(unaryInstruction("!"));
  }
};
ParserState.prototype.parseFunctionCall = function(instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }
  if (this.accept(TOP, isPrefixOperator)) {
    var op = this.current;
    this.parseAtom(instr);
    instr.push(unaryInstruction(op.value));
  } else {
    this.parseMemberExpression(instr);
    while (this.accept(TPAREN, "(")) {
      if (this.accept(TPAREN, ")")) {
        instr.push(new Instruction(IFUNCALL, 0));
      } else {
        var argCount = this.parseArgumentList(instr);
        instr.push(new Instruction(IFUNCALL, argCount));
      }
    }
  }
};
ParserState.prototype.parseArgumentList = function(instr) {
  var argCount = 0;
  while (!this.accept(TPAREN, ")")) {
    this.parseExpression(instr);
    ++argCount;
    while (this.accept(TCOMMA)) {
      this.parseExpression(instr);
      ++argCount;
    }
  }
  return argCount;
};
ParserState.prototype.parseMemberExpression = function(instr) {
  this.parseAtom(instr);
  while (this.accept(TOP, ".") || this.accept(TBRACKET, "[")) {
    var op = this.current;
    if (op.value === ".") {
      if (!this.allowMemberAccess) {
        throw new Error('unexpected ".", member access is not permitted');
      }
      this.expect(TNAME);
      instr.push(new Instruction(IMEMBER, this.current.value));
    } else if (op.value === "[") {
      if (!this.tokens.isOperatorEnabled("[")) {
        throw new Error('unexpected "[]", arrays are disabled');
      }
      this.parseExpression(instr);
      this.expect(TBRACKET, "]");
      instr.push(binaryInstruction("["));
    } else {
      throw new Error("unexpected symbol: " + op.value);
    }
  }
};
function add(a, b) {
  return Number(a) + Number(b);
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function mod(a, b) {
  return a % b;
}
function concat(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  }
  return "" + a + b;
}
function equal(a, b) {
  return a === b;
}
function notEqual(a, b) {
  return a !== b;
}
function greaterThan(a, b) {
  return a > b;
}
function lessThan(a, b) {
  return a < b;
}
function greaterThanEqual(a, b) {
  return a >= b;
}
function lessThanEqual(a, b) {
  return a <= b;
}
function andOperator(a, b) {
  return Boolean(a && b);
}
function orOperator(a, b) {
  return Boolean(a || b);
}
function inOperator(a, b) {
  return contains(b, a);
}
function sinh(a) {
  return (Math.exp(a) - Math.exp(-a)) / 2;
}
function cosh(a) {
  return (Math.exp(a) + Math.exp(-a)) / 2;
}
function tanh(a) {
  if (a === Infinity) return 1;
  if (a === -Infinity) return -1;
  return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
}
function asinh(a) {
  if (a === -Infinity) return a;
  return Math.log(a + Math.sqrt(a * a + 1));
}
function acosh(a) {
  return Math.log(a + Math.sqrt(a * a - 1));
}
function atanh(a) {
  return Math.log((1 + a) / (1 - a)) / 2;
}
function log10(a) {
  return Math.log(a) * Math.LOG10E;
}
function neg(a) {
  return -a;
}
function not(a) {
  return !a;
}
function trunc(a) {
  return a < 0 ? Math.ceil(a) : Math.floor(a);
}
function random(a) {
  return Math.random() * (a || 1);
}
function factorial(a) {
  return gamma(a + 1);
}
function isInteger(value) {
  return isFinite(value) && value === Math.round(value);
}
var GAMMA_G = 4.7421875;
var GAMMA_P = [
  0.9999999999999971,
  57.15623566586292,
  -59.59796035547549,
  14.136097974741746,
  -0.4919138160976202,
  3399464998481189e-20,
  4652362892704858e-20,
  -9837447530487956e-20,
  1580887032249125e-19,
  -21026444172410488e-20,
  21743961811521265e-20,
  -1643181065367639e-19,
  8441822398385275e-20,
  -26190838401581408e-21,
  36899182659531625e-22
];
function gamma(n) {
  var t, x;
  if (isInteger(n)) {
    if (n <= 0) {
      return isFinite(n) ? Infinity : NaN;
    }
    if (n > 171) {
      return Infinity;
    }
    var value = n - 2;
    var res = n - 1;
    while (value > 1) {
      res *= value;
      value--;
    }
    if (res === 0) {
      res = 1;
    }
    return res;
  }
  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
  }
  if (n >= 171.35) {
    return Infinity;
  }
  if (n > 85) {
    var twoN = n * n;
    var threeN = twoN * n;
    var fourN = threeN * n;
    var fiveN = fourN * n;
    return Math.sqrt(2 * Math.PI / n) * Math.pow(n / Math.E, n) * (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) - 571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) + 5246819 / (75246796800 * fiveN * n));
  }
  --n;
  x = GAMMA_P[0];
  for (var i = 1; i < GAMMA_P.length; ++i) {
    x += GAMMA_P[i] / (n + i);
  }
  t = n + GAMMA_G + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}
function stringOrArrayLength(s) {
  if (Array.isArray(s)) {
    return s.length;
  }
  return String(s).length;
}
function hypot() {
  var sum = 0;
  var larg = 0;
  for (var i = 0; i < arguments.length; i++) {
    var arg = Math.abs(arguments[i]);
    var div2;
    if (larg < arg) {
      div2 = larg / arg;
      sum = sum * div2 * div2 + 1;
      larg = arg;
    } else if (arg > 0) {
      div2 = arg / larg;
      sum += div2 * div2;
    } else {
      sum += arg;
    }
  }
  return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
}
function condition(cond, yep, nope) {
  return cond ? yep : nope;
}
function roundTo(value, exp) {
  if (typeof exp === "undefined" || +exp === 0) {
    return Math.round(value);
  }
  value = +value;
  exp = -+exp;
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  value = value.toString().split("e");
  value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}
function setVar(name, value, variables) {
  if (variables) variables[name] = value;
  return value;
}
function arrayIndex(array, index) {
  return array[index | 0];
}
function max(array) {
  if (arguments.length === 1 && Array.isArray(array)) {
    return Math.max.apply(Math, array);
  } else {
    return Math.max.apply(Math, arguments);
  }
}
function min(array) {
  if (arguments.length === 1 && Array.isArray(array)) {
    return Math.min.apply(Math, array);
  } else {
    return Math.min.apply(Math, arguments);
  }
}
function arrayMap(f, a) {
  if (typeof f !== "function") {
    throw new Error("First argument to map is not a function");
  }
  if (!Array.isArray(a)) {
    throw new Error("Second argument to map is not an array");
  }
  return a.map(function(x, i) {
    return f(x, i);
  });
}
function arrayFold(f, init, a) {
  if (typeof f !== "function") {
    throw new Error("First argument to fold is not a function");
  }
  if (!Array.isArray(a)) {
    throw new Error("Second argument to fold is not an array");
  }
  return a.reduce(function(acc, x, i) {
    return f(acc, x, i);
  }, init);
}
function arrayFilter(f, a) {
  if (typeof f !== "function") {
    throw new Error("First argument to filter is not a function");
  }
  if (!Array.isArray(a)) {
    throw new Error("Second argument to filter is not an array");
  }
  return a.filter(function(x, i) {
    return f(x, i);
  });
}
function stringOrArrayIndexOf(target, s) {
  if (!(Array.isArray(s) || typeof s === "string")) {
    throw new Error("Second argument to indexOf is not a string or array");
  }
  return s.indexOf(target);
}
function arrayJoin(sep, a) {
  if (!Array.isArray(a)) {
    throw new Error("Second argument to join is not an array");
  }
  return a.join(sep);
}
function sign(x) {
  return (x > 0) - (x < 0) || +x;
}
var ONE_THIRD = 1 / 3;
function cbrt(x) {
  return x < 0 ? -Math.pow(-x, ONE_THIRD) : Math.pow(x, ONE_THIRD);
}
function expm1(x) {
  return Math.exp(x) - 1;
}
function log1p(x) {
  return Math.log(1 + x);
}
function log2(x) {
  return Math.log(x) / Math.LN2;
}
function Parser(options2) {
  this.options = options2 || {};
  this.unaryOps = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    sinh: Math.sinh || sinh,
    cosh: Math.cosh || cosh,
    tanh: Math.tanh || tanh,
    asinh: Math.asinh || asinh,
    acosh: Math.acosh || acosh,
    atanh: Math.atanh || atanh,
    sqrt: Math.sqrt,
    cbrt: Math.cbrt || cbrt,
    log: Math.log,
    log2: Math.log2 || log2,
    ln: Math.log,
    lg: Math.log10 || log10,
    log10: Math.log10 || log10,
    expm1: Math.expm1 || expm1,
    log1p: Math.log1p || log1p,
    abs: Math.abs,
    ceil: Math.ceil,
    floor: Math.floor,
    round: Math.round,
    trunc: Math.trunc || trunc,
    "-": neg,
    "+": Number,
    exp: Math.exp,
    not,
    length: stringOrArrayLength,
    "!": factorial,
    sign: Math.sign || sign
  };
  this.binaryOps = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div,
    "%": mod,
    "^": Math.pow,
    "||": concat,
    "==": equal,
    "!=": notEqual,
    ">": greaterThan,
    "<": lessThan,
    ">=": greaterThanEqual,
    "<=": lessThanEqual,
    and: andOperator,
    or: orOperator,
    "in": inOperator,
    "=": setVar,
    "[": arrayIndex
  };
  this.ternaryOps = {
    "?": condition
  };
  this.functions = {
    random,
    fac: factorial,
    min,
    max,
    hypot: Math.hypot || hypot,
    pyt: Math.hypot || hypot,
    // backward compat
    pow: Math.pow,
    atan2: Math.atan2,
    "if": condition,
    gamma,
    roundTo,
    map: arrayMap,
    fold: arrayFold,
    filter: arrayFilter,
    indexOf: stringOrArrayIndexOf,
    join: arrayJoin
  };
  this.consts = {
    E: Math.E,
    PI: Math.PI,
    "true": true,
    "false": false
  };
}
Parser.prototype.parse = function(expr) {
  var instr = [];
  var parserState = new ParserState(
    this,
    new TokenStream(this, expr),
    { allowMemberAccess: this.options.allowMemberAccess }
  );
  parserState.parseExpression(instr);
  parserState.expect(TEOF, "EOF");
  return new Expression(instr, this);
};
Parser.prototype.evaluate = function(expr, variables) {
  return this.parse(expr).evaluate(variables);
};
var sharedParser = new Parser();
Parser.parse = function(expr) {
  return sharedParser.parse(expr);
};
Parser.evaluate = function(expr, variables) {
  return sharedParser.parse(expr).evaluate(variables);
};
var optionNameMap = {
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
  "%": "remainder",
  "^": "power",
  "!": "factorial",
  "<": "comparison",
  ">": "comparison",
  "<=": "comparison",
  ">=": "comparison",
  "==": "comparison",
  "!=": "comparison",
  "||": "concatenate",
  "and": "logical",
  "or": "logical",
  "not": "logical",
  "?": "conditional",
  ":": "conditional",
  "=": "assignment",
  "[": "array",
  "()=": "fndef"
};
function getOptionName(op) {
  return optionNameMap.hasOwnProperty(op) ? optionNameMap[op] : op;
}
Parser.prototype.isOperatorEnabled = function(op) {
  var optionName = getOptionName(op);
  var operators = this.options.operators || {};
  return !(optionName in operators) || !!operators[optionName];
};

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked/lib/marked.esm.js
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var noopTest = { exec: () => null };
function edit(regex2, opt = "") {
  let source = typeof regex2 === "string" ? regex2 : regex2.source;
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = __spreadProps(__spreadValues({}, blockNormal), {
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
});
var blockPedantic = __spreadProps(__spreadValues({}, blockNormal), {
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = __spreadProps(__spreadValues({}, inlineNormal), {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
});
var inlineGfm = __spreadProps(__spreadValues({}, inlineNormal), {
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
var inlineBreaks = __spreadProps(__spreadValues({}, inlineGfm), {
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch (e) {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  var _a2;
  const row = tableRow.replace(other.findPipe, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(other.splitPipe);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !((_a2 = cells.at(-1)) == null ? void 0 : _a2.trim())) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text,
    tokens: lexer2.inlineTokens(text)
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  // set by the lexer
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "rules");
    // set by the lexer
    __publicField(this, "lexer");
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (this.rules.other.endingHash.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (this.rules.other.blockquoteStart.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "code") {
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => this.rules.other.anyLine.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    var _a2;
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
    const rows = ((_a2 = cap[3]) == null ? void 0 : _a2.trim()) ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[1];
        href = "mailto:" + text;
      } else {
        text = cap[1];
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    var _a2, _b;
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[0];
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = (_b = (_a2 = this.rules.inline._backpedal.exec(cap[0])) == null ? void 0 : _a2[0]) != null ? _b : "";
        } while (prevCapZero !== cap[0]);
        text = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
};
var _Lexer = class __Lexer {
  constructor(options2) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(other.carriageReturn, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    var _a2, _b, _c;
    if (this.options.pedantic) {
      src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
    }
    while (src) {
      let token;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "paragraph" || (lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "paragraph" || (lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens.at(-1);
        if (lastParagraphClipped && (lastToken == null ? void 0 : lastToken.type) === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    var _a2, _b, _c;
    let maskedSrc = src;
    let match = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.inline) == null ? void 0 : _b.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.type === "text" && (lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  // set by the parser
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    var _a2;
    const langString = (_a2 = (lang || "").match(other.notSpaceStart)) == null ? void 0 : _a2[0];
    const code = text.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    var _a2;
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (((_a2 = item.tokens[0]) == null ? void 0 : _a2.type) === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${escape2(text, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape2(title) + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text, tokens }) {
    if (tokens) {
      text = this.parser.parseInline(tokens, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape2(text);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${escape2(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    var _a2, _b;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body, escaped: true }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer2 = this.renderer) {
    var _a2, _b;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer2.text(token);
          break;
        }
        case "html": {
          out += renderer2.html(token);
          break;
        }
        case "link": {
          out += renderer2.link(token);
          break;
        }
        case "image": {
          out += renderer2.image(token);
          break;
        }
        case "strong": {
          out += renderer2.strong(token);
          break;
        }
        case "em": {
          out += renderer2.em(token);
          break;
        }
        case "codespan": {
          out += renderer2.codespan(token);
          break;
        }
        case "br": {
          out += renderer2.br(token);
          break;
        }
        case "del": {
          out += renderer2.del(token);
          break;
        }
        case "text": {
          out += renderer2.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _a;
var _Hooks = (_a = class {
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = options2 || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), _a);
var Marked = class {
  constructor(...args) {
    __publicField(this, "defaults", _getDefaults());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", _Parser);
    __publicField(this, "Renderer", _Renderer);
    __publicField(this, "TextRenderer", _TextRenderer);
    __publicField(this, "Lexer", _Lexer);
    __publicField(this, "Tokenizer", _Tokenizer);
    __publicField(this, "Hooks", _Hooks);
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    var _a2, _b;
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if ((_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = __spreadValues({}, pack);
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer2 = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer2)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer2[rendererProp];
          renderer2[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer2, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer2, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer2;
      }
      if (pack.tokenizer) {
        const tokenizer2 = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer2)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer2[tokenizerProp];
          tokenizer2[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer2, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer2, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer2;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = __spreadValues(__spreadValues({}, this.defaults), opts);
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = __spreadValues(__spreadValues({}, this.defaults), opt);
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 != null ? options2 : this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 != null ? options2 : this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src, options2) => {
      const origOpt = __spreadValues({}, options2);
      const opt = __spreadValues(__spreadValues({}, this.defaults), origOpt);
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-extended-tables/src/index.js
function src_default({ interruptPatterns = [], skipEmptyRows = true } = {}) {
  return {
    extensions: [
      {
        name: "spanTable",
        level: "block",
        // Is this a block-level or inline-level tokenizer?
        start(src) {
          var _a2;
          return (_a2 = src.match(/\n *([^\n ].*\|.*)\n/m)) == null ? void 0 : _a2.index;
        },
        // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          var _a2;
          let regexString = "^ *([^\\n ].*\\|.*\\n(?: *[^\\s].*\\n)*?) {0,3}(?:\\| *)?(:?-+(?: *(?:100|[1-9][0-9]?%) *-+)?:? *(?:\\| *:?-+(?: *(?:100|[1-9][0-9]?%) *-+)?:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n| {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)| {0,3}#{1,6}(?:\\s|$)| {0,3}>| {4}[^\\n]| {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n| {0,3}(?:[*+-]|1[.)]) |<\\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?: +|\\n|\\/?>)|<(?:script|pre|style|textarea|!--)endRegex).*(?:\\n|$))*)\\n*|$)";
          regexString = regexString.replace("endRegex", interruptPatterns.map((str) => `|(?:${str})`).join(""));
          const widthRegex = / *(?:100|[1-9][0-9]?%) */g;
          const regex2 = new RegExp(regexString);
          const cap = regex2.exec(src);
          if (cap) {
            const item = {
              type: "spanTable",
              header: cap[1].replace(/\n$/, "").split("\n"),
              align: cap[2].replace(widthRegex, "").replace(/^ *|\| *$/g, "").split(/ *\| */),
              rows: ((_a2 = cap[3]) == null ? void 0 : _a2.trim()) ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [],
              width: cap[2].replace(/:/g, "").replace(/-+| /g, "").split("|")
            };
            item.header[0] = splitCells2(item.header[0]);
            const colCount = item.header[0].reduce((length, header) => {
              return length + header.colspan;
            }, 0);
            if (colCount === item.align.length) {
              item.raw = cap[0];
              let i, j, k, row;
              let l = item.align.length;
              for (i = 0; i < l; i++) {
                if (/^ *-+: *$/.test(item.align[i])) {
                  item.align[i] = "right";
                } else if (/^ *:-+: *$/.test(item.align[i])) {
                  item.align[i] = "center";
                } else if (/^ *:-+ *$/.test(item.align[i])) {
                  item.align[i] = "left";
                } else {
                  item.align[i] = null;
                }
              }
              l = item.header.length;
              for (i = 1; i < l; i++) {
                item.header[i] = splitCells2(item.header[i], colCount, item.header[i - 1], skipEmptyRows);
              }
              l = item.rows.length;
              for (i = 0; i < l; i++) {
                item.rows[i] = splitCells2(item.rows[i], colCount, item.rows[i - 1], skipEmptyRows);
              }
              l = item.header.length;
              for (j = 0; j < l; j++) {
                row = item.header[j];
                for (k = 0; k < row.length; k++) {
                  row[k].tokens = [];
                  this.lexer.inline(row[k].text, row[k].tokens);
                }
              }
              l = item.rows.length;
              for (j = 0; j < l; j++) {
                row = item.rows[j];
                for (k = 0; k < row.length; k++) {
                  row[k].tokens = [];
                  this.lexer.inline(row[k].text, row[k].tokens);
                }
              }
              return item;
            }
          }
        },
        renderer(token) {
          let i, j, row, cell, col, text;
          let output = "<table>";
          output += "<thead>";
          for (i = 0; i < token.header.length; i++) {
            row = token.header[i];
            let col2 = 0;
            output += "<tr>";
            for (j = 0; j < row.length; j++) {
              cell = row[j];
              text = this.parser.parseInline(cell.tokens);
              output += getTableCell(text, cell, "th", token.align[col2], token.width[col2]);
              col2 += cell.colspan;
            }
            output += "</tr>";
          }
          output += "</thead>";
          if (token.rows.length) {
            output += "<tbody>";
            for (i = 0; i < token.rows.length; i++) {
              row = token.rows[i];
              col = 0;
              if (!row[0].emptyRow) {
                output += "<tr>";
                for (j = 0; j < row.length; j++) {
                  cell = row[j];
                  text = this.parser.parseInline(cell.tokens);
                  output += getTableCell(text, cell, "td", token.align[col], token.width[col]);
                  col += cell.colspan;
                }
                output += "</tr>";
              }
            }
            output += "</tbody>";
          }
          output += "</table>";
          return output;
        }
      }
    ]
  };
}
var getTableCell = (text, cell, type, align, width) => {
  if (!cell.rowspan) {
    return "";
  }
  const tag2 = `<${type}${cell.colspan > 1 ? ` colspan=${cell.colspan}` : ""}${cell.rowspan > 1 ? ` rowspan=${cell.rowspan}` : ""}${align ? ` align=${align}` : ""}${width ? ` width=${width}` : ""}>`;
  return `${tag2 + text}</${type}>
`;
};
var splitCells2 = (tableRow, count, prevRow = [], skipEmptyRows) => {
  var _a2, _b, _c;
  const cells = [...tableRow.trim().matchAll(/(?:[^|\\]|\\.?)+(?:\|+|$)/g)].map((x) => x[0]);
  if (!((_a2 = cells[0]) == null ? void 0 : _a2.trim())) {
    cells.shift();
  }
  if (!((_b = cells[cells.length - 1]) == null ? void 0 : _b.trim())) {
    cells.pop();
  }
  let numCols = 0;
  let i, j, trimmedCell, prevCell, prevCols;
  for (i = 0; i < cells.length; i++) {
    trimmedCell = cells[i].split(/\|+$/)[0];
    cells[i] = {
      rowspan: 1,
      colspan: Math.max(cells[i].length - trimmedCell.length, 1),
      text: trimmedCell.trim().replace(/\\\|/g, "|")
      // display escaped pipes as normal character
    };
    if (trimmedCell.slice(-1) === "^" && prevRow.length) {
      prevCols = 0;
      for (j = 0; j < prevRow.length; j++) {
        prevCell = prevRow[j];
        if (prevCols === numCols && prevCell.colspan === cells[i].colspan) {
          cells[i].rowSpanTarget = (_c = prevCell.rowSpanTarget) != null ? _c : prevCell;
          cells[i].rowSpanTarget.text += ` ${cells[i].text.slice(0, -1)}`;
          cells[i].rowSpanTarget.rowspan += 1;
          cells[i].rowspan = 0;
          break;
        }
        prevCols += prevCell.colspan;
        if (prevCols > numCols) {
          break;
        }
      }
    }
    numCols += cells[i].colspan;
  }
  if (cells.length > 0 && skipEmptyRows && cells.length === cells.filter((cell) => {
    return cell.rowspan === 0;
  }).length) {
    cells[0].emptyRow = true;
    for (i = 0; i < cells.length; i++) {
      cells[i].rowSpanTarget.rowspan -= 1;
    }
  }
  if (numCols > count) {
    cells.splice(count);
  } else {
    while (numCols < count) {
      cells.push({
        rowspan: 1,
        colspan: 1,
        text: ""
      });
      numCols += 1;
    }
  }
  return cells;
};

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-definition-lists/src/index.js
function src_default2() {
  return {
    extensions: [
      {
        name: "definitionListsSingleLine",
        level: "block",
        start(src) {
          var _a2;
          return (_a2 = src.match(/\n[^\n]*?::[^\n]*/m)) == null ? void 0 : _a2.index;
        },
        // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          const regex2 = /^([^\n]*?)::([^\n]*)(?:\n|$)/ym;
          let match;
          let endIndex = 0;
          const definitions = [];
          while (match = regex2.exec(src)) {
            const originalLine = match[0];
            let firstLine = originalLine;
            this.lexer.inlineTokens(firstLine.trim()).filter((t) => t.type == "emoji").map((emoji) => firstLine = firstLine.replace(emoji.raw, "x".repeat(emoji.raw.length)));
            const newMatch = /^([^\n]*?)::([^\n]*)(?:\n|$)/ym.exec(firstLine);
            if (newMatch) {
              definitions.push({
                dt: this.lexer.inlineTokens(originalLine.slice(0, newMatch[1].length).trim()),
                dd: this.lexer.inlineTokens(originalLine.slice(newMatch[1].length + 2).trim())
              });
            }
            endIndex = regex2.lastIndex;
          }
          if (definitions.length) {
            return {
              type: "definitionListsSingleLine",
              raw: src.slice(0, endIndex),
              definitions
            };
          }
        },
        renderer(token) {
          return `<dl>${token.definitions.reduce((html2, def2) => {
            return `${html2}<dt>${this.parser.parseInline(def2.dt)}</dt><dd>${this.parser.parseInline(def2.dd)}</dd>
`;
          }, "")}</dl>`;
        }
      },
      {
        name: "definitionListsMultiLine",
        level: "block",
        start(src) {
          var _a2;
          return (_a2 = src.match(/\n[^\n]*\n::[^:\n]/m)) == null ? void 0 : _a2.index;
        },
        // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          var _a2;
          const regex2 = /(\n?\n?(?!::)[^\n]+?(?=\n::[^:\n]))|\n::([^:\n](?:.|\n)*?(?=(?:\n::)|(?:\n\n)|$))/y;
          let match;
          let endIndex = 0;
          const definitions = [];
          while (match = regex2.exec(src)) {
            if (match[1]) {
              if (((_a2 = this.lexer.blockTokens(match[1].trim())[0]) == null ? void 0 : _a2.type) !== "paragraph")
                break;
              definitions.push({
                dt: this.lexer.inlineTokens(match[1].trim()),
                dds: []
              });
            }
            if (match[2] && definitions.length) {
              definitions[definitions.length - 1].dds.push(
                this.lexer.inlineTokens(match[2].trim().replace(/\s/g, " "))
              );
            }
            endIndex = regex2.lastIndex;
          }
          if (definitions.length) {
            return {
              type: "definitionListsMultiLine",
              raw: src.slice(0, endIndex),
              definitions
            };
          }
        },
        renderer(token) {
          let returnVal = `<dl>`;
          token.definitions.forEach((def2) => {
            const dds = def2.dds.map((s) => {
              return `
<dd>${this.parser.parseInline(s).trim()}</dd>`;
            }).join("");
            returnVal += `<dt>${this.parser.parseInline(def2.dt)}</dt>${dds}
`;
          });
          returnVal = returnVal.trim();
          return `${returnVal}</dl>`;
        }
      }
    ]
  };
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-alignment-paragraphs/src/index.js
function src_default3() {
  return {
    extensions: [
      {
        name: "alignedParagraphs",
        level: "block",
        start(src) {
          var _a2;
          return (_a2 = src.match(/(?:-:|:-|-:) {1}/m)) == null ? void 0 : _a2.index;
        },
        // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          var _a2, _b, _c;
          const alignedParagraphClasses = [];
          alignedParagraphClasses[2] = "Left";
          alignedParagraphClasses[4] = "Right";
          alignedParagraphClasses[6] = "Center";
          const regex2 = /^(((:-))|((-:))|((:-:))) .+(\n(([^\n].*\n)*(\n|$))|$)/ygm;
          const match = regex2.exec(src);
          if (match == null ? void 0 : match.length) {
            let whichAlign;
            if ((_a2 = match[2]) == null ? void 0 : _a2.length) whichAlign = 2;
            if ((_b = match[4]) == null ? void 0 : _b.length) whichAlign = 4;
            if ((_c = match[6]) == null ? void 0 : _c.length) whichAlign = 6;
            return {
              type: "alignedParagraphs",
              // Should match "name" above
              raw: match[0],
              // Text to consume from the source
              length: match[whichAlign].length,
              text: match[0].slice(match[whichAlign].length),
              alignment: alignedParagraphClasses[whichAlign],
              tokens: this.lexer.inlineTokens(match[0].slice(match[whichAlign].length + 1))
            };
          }
        },
        renderer(token) {
          return `<p align="${token.alignment}">${this.parser.parseInline(token.tokens)}</p>`;
        }
      }
    ]
  };
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-nonbreaking-spaces/src/index.js
function src_default4() {
  return {
    extensions: [
      {
        name: "nonbreakingSpaces",
        level: "inline",
        start(src) {
          var _a2;
          return (_a2 = src.match(/:>+/m)) == null ? void 0 : _a2.index;
        },
        // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          const regex2 = /:(>+)/ym;
          const match = regex2.exec(src);
          if (match == null ? void 0 : match.length) {
            return {
              type: "nonbreakingSpaces",
              // Should match "name" above
              raw: match[0],
              // Text to consume from the source
              length: match[1].length
            };
          }
        },
        renderer(token) {
          return "&nbsp;".repeat(token.length).concat("");
        }
      }
    ]
  };
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-subsuper-text/src/index.js
function src_default5() {
  return {
    extensions: [
      {
        name: "subSuperText",
        level: "inline",
        start(src) {
          var _a2;
          return (_a2 = src.match(/\^/m)) == null ? void 0 : _a2.index;
        },
        // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          const superRegex = /^\^(?!\s)(?=([^\n\^]*[^\s\^]))\1\^/m;
          const subRegex = /^\^\^(?!\s)(?=([^\n\^]*[^\s\^]))\1\^\^/m;
          let isSuper = false;
          let match = subRegex.exec(src);
          if (!match) {
            match = superRegex.exec(src);
            if (match)
              isSuper = true;
          }
          if (match == null ? void 0 : match.length) {
            return {
              type: "subSuperText",
              // Should match "name" above
              raw: match[0],
              // Text to consume from the source
              tag: isSuper ? "sup" : "sub",
              tokens: this.lexer.inlineTokens(match[1])
            };
          }
        },
        renderer(token) {
          return `<${token.tag}>${this.parser.parseInline(token.tokens)}</${token.tag}>`;
        }
      }
    ]
  };
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-smartypants-lite/lib/index.mjs
function markedSmartypantsLite() {
  return {
    tokenizer: {
      inlineText(src) {
        const cap = this.rules.inline.text.exec(src);
        if (!cap) {
          return;
        }
        const text = cap[0].replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  };
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/github-slugger/regex.js
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;

// _vendor/github.com/naturalcrit/homebrewery/node_modules/github-slugger/index.js
var own = Object.hasOwnProperty;
var BananaSlug = class {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences;
    this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(value, maintainCase) {
    const self2 = this;
    let result = slug(value, maintainCase === true);
    const originalSlug = result;
    while (own.call(self2.occurrences, result)) {
      self2.occurrences[originalSlug]++;
      result = originalSlug + "-" + self2.occurrences[originalSlug];
    }
    self2.occurrences[result] = 0;
    return result;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
};
function slug(value, maintainCase) {
  if (typeof value !== "string") return "";
  if (!maintainCase) value = value.toLowerCase();
  return value.replace(regex, "").replace(/ /g, "-");
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-gfm-heading-id/src/index.js
var slugger = new BananaSlug();
var headings = [];
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_2, n) => {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
function gfmHeadingId({ prefix = "", globalSlugs = false } = {}) {
  return {
    headerIds: false,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(src) {
        if (!globalSlugs) {
          resetHeadings();
        }
        return src;
      }
    },
    useNewRenderer: true,
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const raw = unescape(text).trim().replace(/<[!\/a-z].*?>/gi, "");
        const level = depth;
        const id = `${prefix}${slugger.slug(raw.toLowerCase())}`;
        const heading2 = { level, text, id, raw };
        headings.push(heading2);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
    }
  };
}
function resetHeadings() {
  headings = [];
  slugger = new BananaSlug();
}

// _vendor/github.com/naturalcrit/homebrewery/node_modules/marked-emoji/src/index.js
var defaultOptions = {
  // emojis: {}, required
  renderer: void 0
};
function markedEmoji(options2) {
  options2 = __spreadValues(__spreadValues({}, defaultOptions), options2);
  if (!options2.emojis) {
    throw new Error("Must provide emojis to markedEmoji");
  }
  const emojiNames = Object.keys(options2.emojis).map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const emojiRegex = new RegExp(`:(${emojiNames}):`);
  const tokenizerRule = new RegExp(`^${emojiRegex.source}`);
  return {
    extensions: [{
      name: "emoji",
      level: "inline",
      start(src) {
        var _a2;
        return (_a2 = src.match(emojiRegex)) == null ? void 0 : _a2.index;
      },
      tokenizer(src, tokens) {
        const match = tokenizerRule.exec(src);
        if (!match) {
          return;
        }
        const name = match[1];
        const emoji = options2.emojis[name];
        if (!emoji) {
          return;
        }
        return {
          type: "emoji",
          raw: match[0],
          name,
          emoji
        };
      },
      renderer(token) {
        if (options2.renderer) {
          return options2.renderer(token);
        }
        return `<img alt="${token.name}" src="${token.emoji}" class="marked-emoji-img">`;
      }
    }]
  };
}

// _vendor/github.com/naturalcrit/homebrewery/shared/naturalcrit/markdown.js
var import_romans = __toESM(require_romans(), 1);
var import_written_number = __toESM(require_lib(), 1);

// _vendor/github.com/naturalcrit/homebrewery/themes/fonts/iconFonts/diceFont.js
var diceFont = {
  "df_f": "df F",
  "df_f_minus": "df F-minus",
  "df_f_plus": "df F-plus",
  "df_f_zero": "df F-zero",
  "df_d10": "df d10",
  "df_d10_1": "df d10-1",
  "df_d10_10": "df d10-10",
  "df_d10_2": "df d10-2",
  "df_d10_3": "df d10-3",
  "df_d10_4": "df d10-4",
  "df_d10_5": "df d10-5",
  "df_d10_6": "df d10-6",
  "df_d10_7": "df d10-7",
  "df_d10_8": "df d10-8",
  "df_d10_9": "df d10-9",
  "df_d10_0": "df d10-0",
  "df_d12": "df d12",
  "df_d12_1": "df d12-1",
  "df_d12_10": "df d12-10",
  "df_d12_11": "df d12-11",
  "df_d12_12": "df d12-12",
  "df_d12_2": "df d12-2",
  "df_d12_3": "df d12-3",
  "df_d12_4": "df d12-4",
  "df_d12_5": "df d12-5",
  "df_d12_6": "df d12-6",
  "df_d12_7": "df d12-7",
  "df_d12_8": "df d12-8",
  "df_d12_9": "df d12-9",
  "df_d2": "df d2",
  "df_d2_1": "df d2-1",
  "df_d2_2": "df d2-2",
  "df_d20": "df d20",
  "df_d20_1": "df d20-1",
  "df_d20_10": "df d20-10",
  "df_d20_11": "df d20-11",
  "df_d20_12": "df d20-12",
  "df_d20_13": "df d20-13",
  "df_d20_14": "df d20-14",
  "df_d20_15": "df d20-15",
  "df_d20_16": "df d20-16",
  "df_d20_17": "df d20-17",
  "df_d20_18": "df d20-18",
  "df_d20_19": "df d20-19",
  "df_d20_2": "df d20-2",
  "df_d20_20": "df d20-20",
  "df_d20_3": "df d20-3",
  "df_d20_4": "df d20-4",
  "df_d20_5": "df d20-5",
  "df_d20_6": "df d20-6",
  "df_d20_7": "df d20-7",
  "df_d20_8": "df d20-8",
  "df_d20_9": "df d20-9",
  "df_d4": "df d4",
  "df_d4_1": "df d4-1",
  "df_d4_2": "df d4-2",
  "df_d4_3": "df d4-3",
  "df_d4_4": "df d4-4",
  "df_d6": "df d6",
  "df_d6_1": "df d6-1",
  "df_d6_2": "df d6-2",
  "df_d6_3": "df d6-3",
  "df_d6_4": "df d6-4",
  "df_d6_5": "df d6-5",
  "df_d6_6": "df d6-6",
  "df_d8": "df d8",
  "df_d8_1": "df d8-1",
  "df_d8_2": "df d8-2",
  "df_d8_3": "df d8-3",
  "df_d8_4": "df d8-4",
  "df_d8_5": "df d8-5",
  "df_d8_6": "df d8-6",
  "df_d8_7": "df d8-7",
  "df_d8_8": "df d8-8",
  "df_dot_d6": "df dot-d6",
  "df_dot_d6_1": "df dot-d6-1",
  "df_dot_d6_2": "df dot-d6-2",
  "df_dot_d6_3": "df dot-d6-3",
  "df_dot_d6_4": "df dot-d6-4",
  "df_dot_d6_5": "df dot-d6-5",
  "df_dot_d6_6": "df dot-d6-6",
  "df_small_dot_d6_1": "df small-dot-d6-1",
  "df_small_dot_d6_2": "df small-dot-d6-2",
  "df_small_dot_d6_3": "df small-dot-d6-3",
  "df_small_dot_d6_4": "df small-dot-d6-4",
  "df_small_dot_d6_5": "df small-dot-d6-5",
  "df_small_dot_d6_6": "df small-dot-d6-6",
  "df_solid_small_dot_d6_1": "df solid-small-dot-d6-1",
  "df_solid_small_dot_d6_2": "df solid-small-dot-d6-2",
  "df_solid_small_dot_d6_3": "df solid-small-dot-d6-3",
  "df_solid_small_dot_d6_4": "df solid-small-dot-d6-4",
  "df_solid_small_dot_d6_5": "df solid-small-dot-d6-5",
  "df_solid_small_dot_d6_6": "df solid-small-dot-d6-6",
  "df_d10_00": "df d10-00",
  "df_d10_01": "df d10-01",
  "df_d10_02": "df d10-02",
  "df_d10_03": "df d10-03",
  "df_d10_04": "df d10-04",
  "df_d10_05": "df d10-05",
  "df_d10_06": "df d10-06",
  "df_d10_07": "df d10-07",
  "df_d10_08": "df d10-08",
  "df_d10_09": "df d10-09",
  "df_d10_10": "df d10-10",
  "df_d10_11": "df d10-11",
  "df_d10_12": "df d10-12",
  "df_d10_13": "df d10-13",
  "df_d10_14": "df d10-14",
  "df_d10_15": "df d10-15",
  "df_d10_16": "df d10-16",
  "df_d10_17": "df d10-17",
  "df_d10_18": "df d10-18",
  "df_d10_19": "df d10-19",
  "df_d10_20": "df d10-20",
  "df_d10_21": "df d10-21",
  "df_d10_22": "df d10-22",
  "df_d10_23": "df d10-23",
  "df_d10_24": "df d10-24",
  "df_d10_25": "df d10-25",
  "df_d10_26": "df d10-26",
  "df_d10_27": "df d10-27",
  "df_d10_28": "df d10-28",
  "df_d10_29": "df d10-29",
  "df_d10_30": "df d10-30",
  "df_d10_31": "df d10-31",
  "df_d10_32": "df d10-32",
  "df_d10_33": "df d10-33",
  "df_d10_34": "df d10-34",
  "df_d10_35": "df d10-35",
  "df_d10_36": "df d10-36",
  "df_d10_37": "df d10-37",
  "df_d10_38": "df d10-38",
  "df_d10_39": "df d10-39",
  "df_d10_40": "df d10-40",
  "df_d10_41": "df d10-41",
  "df_d10_42": "df d10-42",
  "df_d10_43": "df d10-43",
  "df_d10_44": "df d10-44",
  "df_d10_45": "df d10-45",
  "df_d10_46": "df d10-46",
  "df_d10_47": "df d10-47",
  "df_d10_48": "df d10-48",
  "df_d10_49": "df d10-49",
  "df_d10_50": "df d10-50",
  "df_d10_51": "df d10-51",
  "df_d10_52": "df d10-52",
  "df_d10_53": "df d10-53",
  "df_d10_54": "df d10-54",
  "df_d10_55": "df d10-55",
  "df_d10_56": "df d10-56",
  "df_d10_57": "df d10-57",
  "df_d10_58": "df d10-58",
  "df_d10_59": "df d10-59",
  "df_d10_60": "df d10-60",
  "df_d10_61": "df d10-61",
  "df_d10_62": "df d10-62",
  "df_d10_63": "df d10-63",
  "df_d10_64": "df d10-64",
  "df_d10_65": "df d10-65",
  "df_d10_66": "df d10-66",
  "df_d10_67": "df d10-67",
  "df_d10_68": "df d10-68",
  "df_d10_69": "df d10-69",
  "df_d10_70": "df d10-70",
  "df_d10_71": "df d10-71",
  "df_d10_72": "df d10-72",
  "df_d10_73": "df d10-73",
  "df_d10_74": "df d10-74",
  "df_d10_75": "df d10-75",
  "df_d10_76": "df d10-76",
  "df_d10_77": "df d10-77",
  "df_d10_78": "df d10-78",
  "df_d10_79": "df d10-79",
  "df_d10_80": "df d10-80",
  "df_d10_81": "df d10-81",
  "df_d10_82": "df d10-82",
  "df_d10_83": "df d10-83",
  "df_d10_84": "df d10-84",
  "df_d10_85": "df d10-85",
  "df_d10_86": "df d10-86",
  "df_d10_87": "df d10-87",
  "df_d10_88": "df d10-88",
  "df_d10_89": "df d10-89",
  "df_d10_90": "df d10-90",
  "df_d10_91": "df d10-91",
  "df_d10_92": "df d10-92",
  "df_d10_93": "df d10-93",
  "df_d10_94": "df d10-94",
  "df_d10_95": "df d10-95",
  "df_d10_96": "df d10-96",
  "df_d10_97": "df d10-97",
  "df_d10_98": "df d10-98",
  "df_d10_99": "df d10-99",
  "df_d10_100": "df d10-100"
};
var diceFont_default = diceFont;

// _vendor/github.com/naturalcrit/homebrewery/themes/fonts/iconFonts/elderberryInn.js
var elderberryInn = {
  "ei_book": "ei book",
  "ei_screen": "ei screen",
  /* Spell levels */
  "ei_spell_0": "ei spell-0",
  "ei_spell_1": "ei spell-1",
  "ei_spell_2": "ei spell-2",
  "ei_spell_3": "ei spell-3",
  "ei_spell_4": "ei spell-4",
  "ei_spell_5": "ei spell-5",
  "ei_spell_6": "ei spell-6",
  "ei_spell_7": "ei spell-7",
  "ei_spell_8": "ei spell-8",
  "ei_spell_9": "ei spell-9",
  /* Damage types */
  "ei_acid": "ei acid",
  "ei_bludgeoning": "ei bludgeoning",
  "ei_cold": "ei cold",
  "ei_fire": "ei fire",
  "ei_force": "ei force",
  "ei_lightning": "ei lightning",
  "ei_necrotic": "ei necrotic",
  "ei_piercing": "ei piercing",
  "ei_poison": "ei poison",
  "ei_psychic": "ei psychic",
  "ei_radiant": "ei radiant",
  "ei_slashing": "ei slashing",
  "ei_thunder": "ei thunder",
  /* DnD Conditions */
  "ei_blinded": "ei blinded",
  "ei_charmed": "ei charmed",
  "ei_deafened": "ei deafened",
  "ei_exhaust1": "ei exhaust-1",
  "ei_blinded": "ei blinded",
  "ei_exhaust2": "ei exhaust-2",
  "ei_exhaust3": "ei exhaust-3",
  "ei_exhaust4": "ei exhaust-4",
  "ei_exhaust5": "ei exhaust-5",
  "ei_exhaust6": "ei exhaust-6",
  "ei_frightened": "ei frightened",
  "ei_grappled": "ei grappled",
  "ei_incapacitated": "ei incapacitated",
  "ei_invisible": "ei invisible",
  "ei_paralyzed": "ei paralyzed",
  "ei_petrified": "ei petrified",
  "ei_poisoned": "ei poisoned",
  "ei_prone": "ei prone",
  "ei_restrained": "ei restrained",
  "ei_stunned": "ei stunned",
  "ei_unconscious": "ei unconscious",
  /* Character Classes and Features */
  "ei_barbarian_rage": "ei barbarian-rage",
  "ei_barbarian_reckless_attack": "ei barbarian-reckless-attack",
  "ei_bardic_inspiration": "ei bardic-inspiration",
  "ei_cleric_channel_divinity": "ei cleric-channel-divinity",
  "ei_druid_wild_shape": "ei druid-wild-shape",
  "ei_fighter_action_surge": "ei fighter-action-surge",
  "ei_fighter_second_wind": "ei fighter-second-wind",
  "ei_monk_flurry_blows": "ei monk-flurry-blows",
  "ei_monk_patient_defense": "ei monk-patient-defense",
  "ei_monk_step_of_the_wind": "ei monk-step-of-the-wind",
  "ei_monk_step_of_the_wind2": "ei monk-step-of-the-wind-2",
  "ei_monk_step_of_the_wind3": "ei monk-step-of-the-wind-3",
  "ei_monk_stunning_strike": "ei monk-stunning-strike",
  "ei_monk_stunning_strike2": "ei monk-stunning-strike-2",
  "ei_paladin_divine_smite": "ei paladin-divine-smite",
  "ei_paladin_lay_on_hands": "ei paladin-lay-on-hands",
  "ei_barbarian_abilities": "ei barbarian-abilities",
  "ei_barbarian": "ei barbarian",
  "ei_bard_abilities": "ei bard-abilities",
  "ei_bard": "ei bard",
  "ei_cleric_abilities": "ei cleric-abilities",
  "ei_cleric": "ei cleric",
  "ei_druid_abilities": "ei druid-abilities",
  "ei_druid": "ei druid",
  "ei_fighter_abilities": "ei fighter-abilities",
  "ei_fighter": "ei fighter",
  "ei_monk_abilities": "ei monk-abilities",
  "ei_monk": "ei monk",
  "ei_paladin_abilities": "ei paladin-abilities",
  "ei_paladin": "ei paladin",
  "ei_ranger_abilities": "ei ranger-abilities",
  "ei_ranger": "ei ranger",
  "ei_rogue_abilities": "ei rogue-abilities",
  "ei_rogue": "ei rogue",
  "ei_sorcerer_abilities": "ei sorcerer-abilities",
  "ei_sorcerer": "ei sorcerer",
  "ei_warlock_abilities": "ei warlock-abilities",
  "ei_warlock": "ei warlock",
  "ei_wizard_abilities": "ei wizard-abilities",
  "ei_wizard": "ei wizard",
  /* Types of actions */
  "ei_movement": "ei movement",
  "ei_action": "ei action",
  "ei_bonus_action": "ei bonus-action",
  "ei_reaction": "ei reaction",
  /* SRD Spells */
  "ei_acid_arrow": "ei acid-arrow",
  "ei_action1": "ei action-1",
  "ei_alter_self": "ei alter-self",
  "ei_alter_self2": "ei alter-self-2",
  "ei_magic_beans": "ei magic-beans",
  "ei_animal_friendship": "ei animal-friendship",
  "ei_animate_dead": "ei animate-dead",
  "ei_animate_objects": "ei animate-objects",
  "ei_animate_objects2": "ei animate-objects-2",
  "ei_bane": "ei bane",
  "ei_bless": "ei bless",
  "ei_blur": "ei blur",
  "ei_bonus": "ei bonus",
  "ei_branding_smite": "ei branding-smite",
  "ei_burning_hands": "ei burning-hands",
  "ei_charm_person": "ei charm-person",
  "ei_chill_touch": "ei chill-touch",
  "ei_cloudkill": "ei cloudkill",
  "ei_comprehend_languages": "ei comprehend-languages",
  "ei_cone_of_cold": "ei cone-of-cold",
  "ei_conjure_elemental": "ei conjure-elemental",
  "ei_conjure_minor_elemental": "ei conjure-minor-elemental",
  "ei_control_water": "ei control-water",
  "ei_counterspell": "ei counterspell",
  "ei_cure_wounds": "ei cure-wounds",
  "ei_dancing_lights": "ei dancing-lights",
  "ei_darkness": "ei darkness",
  "ei_detect_magic": "ei detect-magic",
  "ei_disguise_self": "ei disguise-self",
  "ei_disintegrate": "ei disintegrate",
  "ei_dispel_evil_and_good": "ei dispel-evil-and-good",
  "ei_dispel_magic": "ei dispel-magic",
  "ei_dominate_monster": "ei dominate-monster",
  "ei_dominate_person": "ei dominate-person",
  "ei_eldritch_blast": "ei eldritch-blast",
  "ei_enlarge_reduce": "ei enlarge-reduce",
  "ei_entangle": "ei entangle",
  "ei_faerie_fire": "ei faerie-fire",
  "ei_faerie_fire2": "ei faerie-fire2",
  "ei_feather_fall": "ei feather-fall",
  "ei_find_familiar": "ei find-familiar",
  "ei_finger_of_death": "ei finger-of-death",
  "ei_fireball": "ei fireball",
  "ei_floating_disk": "ei floating-disk",
  "ei_fly": "ei fly",
  "ei_fog_cloud": "ei fog-cloud",
  "ei_gaseous_form": "ei gaseous-form",
  "ei_gaseous_form2": "ei gaseous-form2",
  "ei_gentle_repose": "ei gentle-repose",
  "ei_gentle_repose2": "ei gentle-repose2",
  "ei_globe_of_invulnerability": "ei globe-of-invulnerability",
  "ei_guiding_bolt": "ei guiding-bolt",
  "ei_healing_word": "ei healing-word",
  "ei_heat_metal": "ei heat-metal",
  "ei_hellish_rebuke": "ei hellish-rebuke",
  "ei_heroes_feast": "ei heroes-feast",
  "ei_heroism": "ei heroism",
  "ei_hideous_laughter": "ei hideous-laughter",
  "ei_identify": "ei identify",
  "ei_illusory_script": "ei illusory-script",
  "ei_inflict_wounds": "ei inflict-wounds",
  "ei_light": "ei light",
  "ei_longstrider": "ei longstrider",
  "ei_mage_armor": "ei mage-armor",
  "ei_mage_hand": "ei mage-hand",
  "ei_magic_missile": "ei magic-missile",
  "ei_mass_cure_wounds": "ei mass-cure-wounds",
  "ei_mass_healing_word": "ei mass-healing-word",
  "ei_mending": "ei _mending",
  "ei_message": "ei message",
  "ei_minor_illusion": "ei _minor-illusion",
  "ei_movement1": "ei movement1",
  "ei_polymorph": "ei polymorph",
  "ei_power_word_kill": "ei power-word-kill",
  "ei_power_word_stun": "ei power-word-stun",
  "ei_prayer_of_healing": "ei prayer-of-healing",
  "ei_prestidigitation": "ei prestidigitation",
  "ei_protection_from_evil_and_good": "ei protection-from-evil-and-good",
  "ei_raise_dead": "ei raise-dead",
  "ei_raise_dead2": "ei raise-dead2",
  "ei_reaction1": "ei reaction1",
  "ei_resurrection": "ei resurrection",
  "ei_resurrection2": "ei resurrection2",
  "ei_revivify": "ei revivify",
  "ei_revivify2": "ei revivify2",
  "ei_sacred_flame": "ei sacred-flame",
  "ei_sanctuary": "ei sanctuary",
  "ei_scorching_ray": "ei scorching-ray",
  "ei_sending": "ei sending",
  "ei_shatter": "ei shatter",
  "ei_shield": "ei shield",
  "ei_silent_image": "ei silent-image",
  "ei_sleep": "ei sleep",
  "ei_speak_with_animals": "ei speak-with-animals",
  "ei_telekinesis": "ei telekinesis",
  "ei_true_strike": "ei true-strike",
  "ei_vicious_mockery": "ei vicious-mockery",
  "ei_wall_of_fire": "ei wall-of-fire",
  "ei_wall_of_force": "ei wall-of-force",
  "ei_wall_of_ice": "ei wall-of-ice",
  "ei_wall_of_stone": "ei wall-of-stone",
  "ei_wall_of_thorns": "ei wall-of-thorns",
  "ei_wish": "ei wish"
};
var elderberryInn_default = elderberryInn;

// _vendor/github.com/naturalcrit/homebrewery/themes/fonts/iconFonts/gameIcons.js
var gameIcons = {
  "gi_zigzag_leaf": "gi zigzag-leaf",
  "gi_zebra_shield": "gi zebra-shield",
  "gi_x_mark": "gi x-mark",
  "gi_wyvern": "gi wyvern",
  "gi_wrench": "gi wrench",
  "gi_wooden_sign": "gi wooden-sign",
  "gi_wolf_howl": "gi wolf-howl",
  "gi_wolf_head": "gi wolf-head",
  "gi_wireless_signal": "gi wireless-signal",
  "gi_wifi": "gi wifi",
  "gi_water_drop": "gi water-drop",
  "gi_virgo": "gi virgo",
  "gi_vine_whip": "gi vine-whip",
  "gi_vial": "gi vial",
  "gi_vest": "gi vest",
  "gi_venomous_snake": "gi venomous-snake",
  "gi_vase": "gi vase",
  "gi_unplugged": "gi unplugged",
  "gi_underhand": "gi underhand",
  "gi_uncertainty": "gi uncertainty",
  "gi_two_hearts": "gi two-hearts",
  "gi_two_dragons": "gi two-dragons",
  "gi_turd": "gi turd",
  "gi_trophy": "gi trophy",
  "gi_triforce": "gi triforce",
  "gi_trident": "gi trident",
  "gi_trefoil_lily": "gi trefoil-lily",
  "gi_trail": "gi trail",
  "gi_tower": "gi tower",
  "gi_torch": "gi torch",
  "gi_tooth": "gi tooth",
  "gi_tombstone": "gi tombstone",
  "gi_toast": "gi toast",
  "gi_tic_tac_toe": "gi tic-tac-toe",
  "gi_three_keys": "gi three-keys",
  "gi_thorny_vine": "gi thorny-vine",
  "gi_thorn_arrow": "gi thorn-arrow",
  "gi_tesla": "gi tesla",
  "gi_tentacle": "gi tentacle",
  "gi_telescope": "gi telescope",
  "gi_taurus": "gi taurus",
  "gi_targeted": "gi targeted",
  "gi_target_laser": "gi target-laser",
  "gi_target_arrows": "gi target-arrows",
  "gi_syringe": "gi syringe",
  "gi_surveillance_camera": "gi surveillance-camera",
  "gi_supersonic_arrow": "gi supersonic-arrow",
  "gi_super_mushroom": "gi super-mushroom",
  "gi_sunbeams": "gi sunbeams",
  "gi_sun": "gi sun",
  "gi_sun_symbol": "gi sun-symbol",
  "gi_suits": "gi suits",
  "gi_suckered_tentacle": "gi suckered-tentacle",
  "gi_stopwatch": "gi stopwatch",
  "gi_sprout": "gi sprout",
  "gi_sprout_emblem": "gi sprout-emblem",
  "gi_spray_can": "gi spray-can",
  "gi_splash": "gi splash",
  "gi_spiral_shell": "gi spiral-shell",
  "gi_spinning_sword": "gi spinning-sword",
  "gi_spiked_tentacle": "gi spiked-tentacle",
  "gi_spiked_mace": "gi spiked-mace",
  "gi_spikeball": "gi spikeball",
  "gi_spider_face": "gi spider-face",
  "gi_speech_bubbles": "gi speech-bubbles",
  "gi_speech_bubble": "gi speech-bubble",
  "gi_spear_head": "gi spear-head",
  "gi_spawn_node": "gi spawn-node",
  "gi_spades": "gi spades",
  "gi_spades_card": "gi spades-card",
  "gi_soccer_ball": "gi soccer-ball",
  "gi_snowflake": "gi snowflake",
  "gi_snorkel": "gi snorkel",
  "gi_snake": "gi snake",
  "gi_snail": "gi snail",
  "gi_small_fire": "gi small-fire",
  "gi_slash_ring": "gi slash-ring",
  "gi_skull": "gi skull",
  "gi_skull_trophy": "gi skull-trophy",
  "gi_site": "gi site",
  "gi_sideswipe": "gi sideswipe",
  "gi_sickle": "gi sickle",
  "gi_shuriken": "gi shuriken",
  "gi_shovel": "gi shovel",
  "gi_shotgun_shell": "gi shotgun-shell",
  "gi_shot_through_the_heart": "gi shot-through-the-heart",
  "gi_shoe_prints": "gi shoe-prints",
  "gi_ship_emblem": "gi ship-emblem",
  "gi_shield": "gi shield",
  "gi_sheriff": "gi sheriff",
  "gi_sheep": "gi sheep",
  "gi_shark": "gi shark",
  "gi_seagull": "gi seagull",
  "gi_sea_serpent": "gi sea-serpent",
  "gi_scythe": "gi scythe",
  "gi_scroll_unfurled": "gi scroll-unfurled",
  "gi_scorpio": "gi scorpio",
  "gi_save": "gi save",
  "gi_satellite": "gi satellite",
  "gi_sapphire": "gi sapphire",
  "gi_sagittarius": "gi sagittarius",
  "gi_rune_stone": "gi rune-stone",
  "gi_rss": "gi rss",
  "gi_round_shield": "gi round-shield",
  "gi_round_bottom_flask": "gi round-bottom-flask",
  "gi_robot_arm": "gi robot-arm",
  "gi_roast_chicken": "gi roast-chicken",
  "gi_ringing_bell": "gi ringing-bell",
  "gi_rifle": "gi rifle",
  "gi_revolver": "gi revolver",
  "gi_reverse": "gi reverse",
  "gi_repair": "gi repair",
  "gi_relic_blade": "gi relic-blade",
  "gi_regeneration": "gi regeneration",
  "gi_recycle": "gi recycle",
  "gi_reactor": "gi reactor",
  "gi_raven": "gi raven",
  "gi_radioactive": "gi radioactive",
  "gi_radial_balance": "gi radial-balance",
  "gi_radar_dish": "gi radar-dish",
  "gi_rabbit": "gi rabbit",
  "gi_quill_ink": "gi quill-ink",
  "gi_queen_crown": "gi queen-crown",
  "gi_pyramids": "gi pyramids",
  "gi_potion": "gi potion",
  "gi_poison_cloud": "gi poison-cloud",
  "gi_podium": "gi podium",
  "gi_player": "gi player",
  "gi_player_thunder_struck": "gi player-thunder-struck",
  "gi_player_teleport": "gi player-teleport",
  "gi_player_shot": "gi player-shot",
  "gi_player_pyromaniac": "gi player-pyromaniac",
  "gi_player_pain": "gi player-pain",
  "gi_player_lift": "gi player-lift",
  "gi_player_king": "gi player-king",
  "gi_player_dodge": "gi player-dodge",
  "gi_player_despair": "gi player-despair",
  "gi_plain_dagger": "gi plain-dagger",
  "gi_pisces": "gi pisces",
  "gi_ping_pong": "gi ping-pong",
  "gi_pine_tree": "gi pine-tree",
  "gi_pills": "gi pills",
  "gi_pill": "gi pill",
  "gi_perspective_dice_three": "gi perspective-dice-three",
  "gi_perspective_dice_six": "gi perspective-dice-six",
  "gi_perspective_dice_six_two": "gi perspective-dice-six-two",
  "gi_perspective_dice_random": "gi perspective-dice-random",
  "gi_perspective_dice_one": "gi perspective-dice-one",
  "gi_perspective_dice_four": "gi perspective-dice-four",
  "gi_perspective_dice_five": "gi perspective-dice-five",
  "gi_pawprint": "gi pawprint",
  "gi_pawn": "gi pawn",
  "gi_palm_tree": "gi palm-tree",
  "gi_overmind": "gi overmind",
  "gi_overhead": "gi overhead",
  "gi_ophiuchus": "gi ophiuchus",
  "gi_on_target": "gi on-target",
  "gi_omega": "gi omega",
  "gi_octopus": "gi octopus",
  "gi_ocean_emblem": "gi ocean-emblem",
  "gi_ocarina": "gi ocarina",
  "gi_nuclear": "gi nuclear",
  "gi_noose": "gi noose",
  "gi_nodular": "gi nodular",
  "gi_nails": "gi nails",
  "gi_musket": "gi musket",
  "gi_muscle_up": "gi muscle-up",
  "gi_muscle_fat": "gi muscle-fat",
  "gi_mp5": "gi mp5",
  "gi_moon_sun": "gi moon-sun",
  "gi_montains": "gi montains",
  "gi_monster_skull": "gi monster-skull",
  "gi_mirror": "gi mirror",
  "gi_mining_diamonds": "gi mining-diamonds",
  "gi_mine_wagon": "gi mine-wagon",
  "gi_microphone": "gi microphone",
  "gi_metal_gate": "gi metal-gate",
  "gi_medical_pack": "gi medical-pack",
  "gi_meat": "gi meat",
  "gi_meat_hook": "gi meat-hook",
  "gi_match": "gi match",
  "gi_mass_driver": "gi mass-driver",
  "gi_magnet": "gi magnet",
  "gi_maggot": "gi maggot",
  "gi_love_howl": "gi love-howl",
  "gi_locked_fortress": "gi locked-fortress",
  "gi_load": "gi load",
  "gi_lit_candelabra": "gi lit-candelabra",
  "gi_lion": "gi lion",
  "gi_lightning": "gi lightning",
  "gi_lightning_trio": "gi lightning-trio",
  "gi_lightning_sword": "gi lightning-sword",
  "gi_lightning_storm": "gi lightning-storm",
  "gi_lightning_bolt": "gi lightning-bolt",
  "gi_lighthouse": "gi lighthouse",
  "gi_light_bulb": "gi light-bulb",
  "gi_libra": "gi libra",
  "gi_lever": "gi lever",
  "gi_level_two": "gi level-two",
  "gi_level_two_advanced": "gi level-two-advanced",
  "gi_level_three": "gi level-three",
  "gi_level_three_advanced": "gi level-three-advanced",
  "gi_level_four": "gi level-four",
  "gi_level_four_advanced": "gi level-four-advanced",
  "gi_leo": "gi leo",
  "gi_leaf": "gi leaf",
  "gi_lava": "gi lava",
  "gi_laser_site": "gi laser-site",
  "gi_laser_blast": "gi laser-blast",
  "gi_large_hammer": "gi large-hammer",
  "gi_lantern_flame": "gi lantern-flame",
  "gi_kunai": "gi kunai",
  "gi_knight_helmet": "gi knight-helmet",
  "gi_knife": "gi knife",
  "gi_knife_fork": "gi knife-fork",
  "gi_kitchen_knives": "gi kitchen-knives",
  "gi_key": "gi key",
  "gi_key_basic": "gi key-basic",
  "gi_kettlebell": "gi kettlebell",
  "gi_kaleidoscope": "gi kaleidoscope",
  "gi_jigsaw_piece": "gi jigsaw-piece",
  "gi_jetpack": "gi jetpack",
  "gi_interdiction": "gi interdiction",
  "gi_insect_jaws": "gi insect-jaws",
  "gi_incense": "gi incense",
  "gi_implosion": "gi implosion",
  "gi_ice_cube": "gi ice-cube",
  "gi_hydra": "gi hydra",
  "gi_hydra_shot": "gi hydra-shot",
  "gi_hourglass": "gi hourglass",
  "gi_hot_surface": "gi hot-surface",
  "gi_hospital_cross": "gi hospital-cross",
  "gi_horseshoe": "gi horseshoe",
  "gi_horns": "gi horns",
  "gi_horn_call": "gi horn-call",
  "gi_hood": "gi hood",
  "gi_honeycomb": "gi honeycomb",
  "gi_hole_ladder": "gi hole-ladder",
  "gi_hive_emblem": "gi hive-emblem",
  "gi_help": "gi help",
  "gi_helmet": "gi helmet",
  "gi_heavy_shield": "gi heavy-shield",
  "gi_heavy_fall": "gi heavy-fall",
  "gi_heat_haze": "gi heat-haze",
  "gi_hearts": "gi hearts",
  "gi_hearts_card": "gi hearts-card",
  "gi_heartburn": "gi heartburn",
  "gi_heart_tower": "gi heart-tower",
  "gi_heart_bottle": "gi heart-bottle",
  "gi_health": "gi health",
  "gi_health_increase": "gi health-increase",
  "gi_health_decrease": "gi health-decrease",
  "gi_harpoon_trident": "gi harpoon-trident",
  "gi_hand": "gi hand",
  "gi_hand_saw": "gi hand-saw",
  "gi_hand_emblem": "gi hand-emblem",
  "gi_hammer": "gi hammer",
  "gi_hammer_drop": "gi hammer-drop",
  "gi_halberd": "gi halberd",
  "gi_guillotine": "gi guillotine",
  "gi_guarded_tower": "gi guarded-tower",
  "gi_groundbreaker": "gi groundbreaker",
  "gi_grenade": "gi grenade",
  "gi_grass": "gi grass",
  "gi_grass_patch": "gi grass-patch",
  "gi_grappling_hook": "gi grappling-hook",
  "gi_gold_bar": "gi gold-bar",
  "gi_gloop": "gi gloop",
  "gi_glass_heart": "gi glass-heart",
  "gi_gemini": "gi gemini",
  "gi_gem": "gi gem",
  "gi_gem_pendant": "gi gem-pendant",
  "gi_gecko": "gi gecko",
  "gi_gears": "gi gears",
  "gi_gear_heart": "gi gear-heart",
  "gi_gear_hammer": "gi gear-hammer",
  "gi_gavel": "gi gavel",
  "gi_gamepad_cross": "gi gamepad-cross",
  "gi_frozen_arrow": "gi frozen-arrow",
  "gi_frostfire": "gi frostfire",
  "gi_frost_emblem": "gi frost-emblem",
  "gi_fox": "gi fox",
  "gi_forward": "gi forward",
  "gi_forging": "gi forging",
  "gi_footprint": "gi footprint",
  "gi_food_chain": "gi food-chain",
  "gi_focused_lightning": "gi focused-lightning",
  "gi_fluffy_swirl": "gi fluffy-swirl",
  "gi_flowers": "gi flowers",
  "gi_flower": "gi flower",
  "gi_flat_hammer": "gi flat-hammer",
  "gi_flask": "gi flask",
  "gi_flaming_trident": "gi flaming-trident",
  "gi_flaming_claw": "gi flaming-claw",
  "gi_flaming_arrow": "gi flaming-arrow",
  "gi_flame_symbol": "gi flame-symbol",
  "gi_fizzing_flask": "gi fizzing-flask",
  "gi_fish": "gi fish",
  "gi_fireball_sword": "gi fireball-sword",
  "gi_fire": "gi fire",
  "gi_fire_symbol": "gi fire-symbol",
  "gi_fire_shield": "gi fire-shield",
  "gi_fire_ring": "gi fire-ring",
  "gi_fire_breath": "gi fire-breath",
  "gi_fire_bomb": "gi fire-bomb",
  "gi_fedora": "gi fedora",
  "gi_feathered_wing": "gi feathered-wing",
  "gi_feather_wing": "gi feather-wing",
  "gi_fast_ship": "gi fast-ship",
  "gi_falling": "gi falling",
  "gi_fall_down": "gi fall-down",
  "gi_fairy": "gi fairy",
  "gi_fairy_wand": "gi fairy-wand",
  "gi_eyeball": "gi eyeball",
  "gi_eye_shield": "gi eye-shield",
  "gi_eye_monster": "gi eye-monster",
  "gi_explosive_materials": "gi explosive-materials",
  "gi_explosion": "gi explosion",
  "gi_energise": "gi energise",
  "gi_emerald": "gi emerald",
  "gi_eggplant": "gi eggplant",
  "gi_egg": "gi egg",
  "gi_egg_pod": "gi egg-pod",
  "gi_duel": "gi duel",
  "gi_droplets": "gi droplets",
  "gi_droplet": "gi droplet",
  "gi_droplet_splash": "gi droplet-splash",
  "gi_dripping_sword": "gi dripping-sword",
  "gi_dripping_knife": "gi dripping-knife",
  "gi_dripping_blade": "gi dripping-blade",
  "gi_drill": "gi drill",
  "gi_dragonfly": "gi dragonfly",
  "gi_dragon": "gi dragon",
  "gi_dragon_wing": "gi dragon-wing",
  "gi_dragon_breath": "gi dragon-breath",
  "gi_doubled": "gi doubled",
  "gi_double_team": "gi double-team",
  "gi_diving_dagger": "gi diving-dagger",
  "gi_divert": "gi divert",
  "gi_dinosaur": "gi dinosaur",
  "gi_dice_two": "gi dice-two",
  "gi_dice_three": "gi dice-three",
  "gi_dice_six": "gi dice-six",
  "gi_dice_one": "gi dice-one",
  "gi_dice_four": "gi dice-four",
  "gi_dice_five": "gi dice-five",
  "gi_diamonds": "gi diamonds",
  "gi_diamonds_card": "gi diamonds-card",
  "gi_diamond": "gi diamond",
  "gi_desert_skull": "gi desert-skull",
  "gi_dervish_swords": "gi dervish-swords",
  "gi_demolish": "gi demolish",
  "gi_defibrillate": "gi defibrillate",
  "gi_decapitation": "gi decapitation",
  "gi_death_skull": "gi death-skull",
  "gi_dead_tree": "gi dead-tree",
  "gi_daisy": "gi daisy",
  "gi_daggers": "gi daggers",
  "gi_cycle": "gi cycle",
  "gi_cut_palm": "gi cut-palm",
  "gi_cubes": "gi cubes",
  "gi_crystals": "gi crystals",
  "gi_crystal_wand": "gi crystal-wand",
  "gi_crystal_cluster": "gi crystal-cluster",
  "gi_crystal_ball": "gi crystal-ball",
  "gi_crush": "gi crush",
  "gi_crowned_heart": "gi crowned-heart",
  "gi_crown": "gi crown",
  "gi_crown_of_thorns": "gi crown-of-thorns",
  "gi_crossed_swords": "gi crossed-swords",
  "gi_crossed_sabres": "gi crossed-sabres",
  "gi_crossed_pistols": "gi crossed-pistols",
  "gi_crossed_bones": "gi crossed-bones",
  "gi_crossed_axes": "gi crossed-axes",
  "gi_crossbow": "gi crossbow",
  "gi_croc_sword": "gi croc-sword",
  "gi_cracked_shield": "gi cracked-shield",
  "gi_cracked_helm": "gi cracked-helm",
  "gi_crab_claw": "gi crab-claw",
  "gi_corked_tube": "gi corked-tube",
  "gi_compass": "gi compass",
  "gi_cold_heart": "gi cold-heart",
  "gi_cog": "gi cog",
  "gi_cog_wheel": "gi cog-wheel",
  "gi_coffee_mug": "gi coffee-mug",
  "gi_cluster_bomb": "gi cluster-bomb",
  "gi_clovers": "gi clovers",
  "gi_clovers_card": "gi clovers-card",
  "gi_clover": "gi clover",
  "gi_clockwork": "gi clockwork",
  "gi_cloak_and_dagger": "gi cloak-and-dagger",
  "gi_circular_shield": "gi circular-shield",
  "gi_circular_saw": "gi circular-saw",
  "gi_circle_of_circles": "gi circle-of-circles",
  "gi_chicken_leg": "gi chicken-leg",
  "gi_chessboard": "gi chessboard",
  "gi_chemical_arrow": "gi chemical-arrow",
  "gi_cheese": "gi cheese",
  "gi_chain": "gi chain",
  "gi_cat": "gi cat",
  "gi_castle_flag": "gi castle-flag",
  "gi_castle_emblem": "gi castle-emblem",
  "gi_carrot": "gi carrot",
  "gi_capricorn": "gi capricorn",
  "gi_capitol": "gi capitol",
  "gi_cannon_shot": "gi cannon-shot",
  "gi_candle": "gi candle",
  "gi_candle_fire": "gi candle-fire",
  "gi_cancer": "gi cancer",
  "gi_cancel": "gi cancel",
  "gi_campfire": "gi campfire",
  "gi_butterfly": "gi butterfly",
  "gi_burst_blob": "gi burst-blob",
  "gi_burning_meteor": "gi burning-meteor",
  "gi_burning_eye": "gi burning-eye",
  "gi_burning_embers": "gi burning-embers",
  "gi_burning_book": "gi burning-book",
  "gi_bullets": "gi bullets",
  "gi_bubbling_potion": "gi bubbling-potion",
  "gi_broken_skull": "gi broken-skull",
  "gi_broken_shield": "gi broken-shield",
  "gi_broken_heart": "gi broken-heart",
  "gi_broken_bottle": "gi broken-bottle",
  "gi_broken_bone": "gi broken-bone",
  "gi_broadsword": "gi broadsword",
  "gi_broadhead_arrow": "gi broadhead-arrow",
  "gi_bridge": "gi bridge",
  "gi_brandy_bottle": "gi brandy-bottle",
  "gi_brain_freeze": "gi brain-freeze",
  "gi_bowling_pin": "gi bowling-pin",
  "gi_bowie_knife": "gi bowie-knife",
  "gi_bottom_right": "gi bottom-right",
  "gi_bottled_bolt": "gi bottled-bolt",
  "gi_bottle_vapors": "gi bottle-vapors",
  "gi_boot_stomp": "gi boot-stomp",
  "gi_boomerang": "gi boomerang",
  "gi_book": "gi book",
  "gi_bone_knife": "gi bone-knife",
  "gi_bone_bite": "gi bone-bite",
  "gi_bombs": "gi bombs",
  "gi_bomb_explosion": "gi bomb-explosion",
  "gi_bolt_shield": "gi bolt-shield",
  "gi_bleeding_hearts": "gi bleeding-hearts",
  "gi_bleeding_eye": "gi bleeding-eye",
  "gi_blaster": "gi blaster",
  "gi_blast": "gi blast",
  "gi_blade_bite": "gi blade-bite",
  "gi_bird_mask": "gi bird-mask",
  "gi_bird_claw": "gi bird-claw",
  "gi_biohazard": "gi biohazard",
  "gi_bell": "gi bell",
  "gi_beetle": "gi beetle",
  "gi_beer": "gi beer",
  "gi_bear_trap": "gi bear-trap",
  "gi_beam_wake": "gi beam-wake",
  "gi_batwings": "gi batwings",
  "gi_battery_white": "gi battery-white",
  "gi_battery_positive": "gi battery-positive",
  "gi_battery_negative": "gi battery-negative",
  "gi_battery_black": "gi battery-black",
  "gi_battery_75": "gi battery-75",
  "gi_battery_50": "gi battery-50",
  "gi_battery_25": "gi battery-25",
  "gi_battery_100": "gi battery-100",
  "gi_battery_0": "gi battery-0",
  "gi_batteries": "gi batteries",
  "gi_battered_axe": "gi battered-axe",
  "gi_bat_sword": "gi bat-sword",
  "gi_barrier": "gi barrier",
  "gi_barbed_arrow": "gi barbed-arrow",
  "gi_ball": "gi ball",
  "gi_axe": "gi axe",
  "gi_axe_swing": "gi axe-swing",
  "gi_aware": "gi aware",
  "gi_aura": "gi aura",
  "gi_arson": "gi arson",
  "gi_arrow_flights": "gi arrow-flights",
  "gi_arrow_cluster": "gi arrow-cluster",
  "gi_aries": "gi aries",
  "gi_arena": "gi arena",
  "gi_archery_target": "gi archery-target",
  "gi_archer": "gi archer",
  "gi_arcane_mask": "gi arcane-mask",
  "gi_aquarius": "gi aquarius",
  "gi_apple": "gi apple",
  "gi_anvil": "gi anvil",
  "gi_ankh": "gi ankh",
  "gi_angel_wings": "gi angel-wings",
  "gi_anchor": "gi anchor",
  "gi_ammo_bag": "gi ammo-bag",
  "gi_alligator_clip": "gi alligator-clip",
  "gi_all_for_one": "gi all-for-one",
  "gi_alien_fire": "gi alien-fire",
  "gi_acorn": "gi acorn",
  "gi_acid": "gi acid"
};
var gameIcons_default = gameIcons;

// _vendor/github.com/naturalcrit/homebrewery/themes/fonts/iconFonts/fontAwesome.js
var fontAwesome = {
  // FONT-AWESOME SOLID
  "fas_0": "fas fa-0",
  "fas_1": "fas fa-1",
  "fas_2": "fas fa-2",
  "fas_3": "fas fa-3",
  "fas_4": "fas fa-4",
  "fas_5": "fas fa-5",
  "fas_6": "fas fa-6",
  "fas_7": "fas fa-7",
  "fas_8": "fas fa-8",
  "fas_9": "fas fa-9",
  "fas_a": "fas fa-a",
  "fas_address_book": "fas fa-address-book",
  "fas_address_card": "fas fa-address-card",
  "fas_align_center": "fas fa-align-center",
  "fas_align_justify": "fas fa-align-justify",
  "fas_align_left": "fas fa-align-left",
  "fas_align_right": "fas fa-align-right",
  "fas_anchor_circle_check": "fas fa-anchor-circle-check",
  "fas_anchor_circle_exclamation": "fas fa-anchor-circle-exclamation",
  "fas_anchor_circle_xmark": "fas fa-anchor-circle-xmark",
  "fas_anchor_lock": "fas fa-anchor-lock",
  "fas_anchor": "fas fa-anchor",
  "fas_angle_down": "fas fa-angle-down",
  "fas_angle_left": "fas fa-angle-left",
  "fas_angle_right": "fas fa-angle-right",
  "fas_angle_up": "fas fa-angle-up",
  "fas_angles_down": "fas fa-angles-down",
  "fas_angles_left": "fas fa-angles-left",
  "fas_angles_right": "fas fa-angles-right",
  "fas_angles_up": "fas fa-angles-up",
  "fas_ankh": "fas fa-ankh",
  "fas_apple_whole": "fas fa-apple-whole",
  "fas_archway": "fas fa-archway",
  "fas_arrow_down_1_9": "fas fa-arrow-down-1-9",
  "fas_arrow_down_9_1": "fas fa-arrow-down-9-1",
  "fas_arrow_down_a_z": "fas fa-arrow-down-a-z",
  "fas_arrow_down_long": "fas fa-arrow-down-long",
  "fas_arrow_down_short_wide": "fas fa-arrow-down-short-wide",
  "fas_arrow_down_up_across_line": "fas fa-arrow-down-up-across-line",
  "fas_arrow_down_up_lock": "fas fa-arrow-down-up-lock",
  "fas_arrow_down_wide_short": "fas fa-arrow-down-wide-short",
  "fas_arrow_down_z_a": "fas fa-arrow-down-z-a",
  "fas_arrow_down": "fas fa-arrow-down",
  "fas_arrow_left_long": "fas fa-arrow-left-long",
  "fas_arrow_left": "fas fa-arrow-left",
  "fas_arrow_pointer": "fas fa-arrow-pointer",
  "fas_arrow_right_arrow_left": "fas fa-arrow-right-arrow-left",
  "fas_arrow_right_from_bracket": "fas fa-arrow-right-from-bracket",
  "fas_arrow_right_long": "fas fa-arrow-right-long",
  "fas_arrow_right_to_bracket": "fas fa-arrow-right-to-bracket",
  "fas_arrow_right_to_city": "fas fa-arrow-right-to-city",
  "fas_arrow_right": "fas fa-arrow-right",
  "fas_arrow_rotate_left": "fas fa-arrow-rotate-left",
  "fas_arrow_rotate_right": "fas fa-arrow-rotate-right",
  "fas_arrow_trend_down": "fas fa-arrow-trend-down",
  "fas_arrow_trend_up": "fas fa-arrow-trend-up",
  "fas_arrow_turn_down": "fas fa-arrow-turn-down",
  "fas_arrow_turn_up": "fas fa-arrow-turn-up",
  "fas_arrow_up_1_9": "fas fa-arrow-up-1-9",
  "fas_arrow_up_9_1": "fas fa-arrow-up-9-1",
  "fas_arrow_up_a_z": "fas fa-arrow-up-a-z",
  "fas_arrow_up_from_bracket": "fas fa-arrow-up-from-bracket",
  "fas_arrow_up_from_ground_water": "fas fa-arrow-up-from-ground-water",
  "fas_arrow_up_from_water_pump": "fas fa-arrow-up-from-water-pump",
  "fas_arrow_up_long": "fas fa-arrow-up-long",
  "fas_arrow_up_right_dots": "fas fa-arrow-up-right-dots",
  "fas_arrow_up_right_from_square": "fas fa-arrow-up-right-from-square",
  "fas_arrow_up_short_wide": "fas fa-arrow-up-short-wide",
  "fas_arrow_up_wide_short": "fas fa-arrow-up-wide-short",
  "fas_arrow_up_z_a": "fas fa-arrow-up-z-a",
  "fas_arrow_up": "fas fa-arrow-up",
  "fas_arrows_down_to_line": "fas fa-arrows-down-to-line",
  "fas_arrows_down_to_people": "fas fa-arrows-down-to-people",
  "fas_arrows_left_right_to_line": "fas fa-arrows-left-right-to-line",
  "fas_arrows_left_right": "fas fa-arrows-left-right",
  "fas_arrows_rotate": "fas fa-arrows-rotate",
  "fas_arrows_spin": "fas fa-arrows-spin",
  "fas_arrows_split_up_and_left": "fas fa-arrows-split-up-and-left",
  "fas_arrows_to_circle": "fas fa-arrows-to-circle",
  "fas_arrows_to_dot": "fas fa-arrows-to-dot",
  "fas_arrows_to_eye": "fas fa-arrows-to-eye",
  "fas_arrows_turn_right": "fas fa-arrows-turn-right",
  "fas_arrows_turn_to_dots": "fas fa-arrows-turn-to-dots",
  "fas_arrows_up_down_left_right": "fas fa-arrows-up-down-left-right",
  "fas_arrows_up_down": "fas fa-arrows-up-down",
  "fas_arrows_up_to_line": "fas fa-arrows-up-to-line",
  "fas_asterisk": "fas fa-asterisk",
  "fas_at": "fas fa-at",
  "fas_atom": "fas fa-atom",
  "fas_audio_description": "fas fa-audio-description",
  "fas_austral_sign": "fas fa-austral-sign",
  "fas_award": "fas fa-award",
  "fas_b": "fas fa-b",
  "fas_baby_carriage": "fas fa-baby-carriage",
  "fas_baby": "fas fa-baby",
  "fas_backward_fast": "fas fa-backward-fast",
  "fas_backward_step": "fas fa-backward-step",
  "fas_backward": "fas fa-backward",
  "fas_bacon": "fas fa-bacon",
  "fas_bacteria": "fas fa-bacteria",
  "fas_bacterium": "fas fa-bacterium",
  "fas_bag_shopping": "fas fa-bag-shopping",
  "fas_bahai": "fas fa-bahai",
  "fas_baht_sign": "fas fa-baht-sign",
  "fas_ban_smoking": "fas fa-ban-smoking",
  "fas_ban": "fas fa-ban",
  "fas_bandage": "fas fa-bandage",
  "fas_bangladeshi_taka_sign": "fas fa-bangladeshi-taka-sign",
  "fas_barcode": "fas fa-barcode",
  "fas_bars_progress": "fas fa-bars-progress",
  "fas_bars_staggered": "fas fa-bars-staggered",
  "fas_bars": "fas fa-bars",
  "fas_baseball_bat_ball": "fas fa-baseball-bat-ball",
  "fas_baseball": "fas fa-baseball",
  "fas_basket_shopping": "fas fa-basket-shopping",
  "fas_basketball": "fas fa-basketball",
  "fas_bath": "fas fa-bath",
  "fas_battery_empty": "fas fa-battery-empty",
  "fas_battery_full": "fas fa-battery-full",
  "fas_battery_half": "fas fa-battery-half",
  "fas_battery_quarter": "fas fa-battery-quarter",
  "fas_battery_three_quarters": "fas fa-battery-three-quarters",
  "fas_bed_pulse": "fas fa-bed-pulse",
  "fas_bed": "fas fa-bed",
  "fas_beer_mug_empty": "fas fa-beer-mug-empty",
  "fas_bell_concierge": "fas fa-bell-concierge",
  "fas_bell_slash": "fas fa-bell-slash",
  "fas_bell": "fas fa-bell",
  "fas_bezier_curve": "fas fa-bezier-curve",
  "fas_bicycle": "fas fa-bicycle",
  "fas_binoculars": "fas fa-binoculars",
  "fas_biohazard": "fas fa-biohazard",
  "fas_bitcoin_sign": "fas fa-bitcoin-sign",
  "fas_blender_phone": "fas fa-blender-phone",
  "fas_blender": "fas fa-blender",
  "fas_blog": "fas fa-blog",
  "fas_bold": "fas fa-bold",
  "fas_bolt_lightning": "fas fa-bolt-lightning",
  "fas_bolt": "fas fa-bolt",
  "fas_bomb": "fas fa-bomb",
  "fas_bone": "fas fa-bone",
  "fas_bong": "fas fa-bong",
  "fas_book_atlas": "fas fa-book-atlas",
  "fas_book_bible": "fas fa-book-bible",
  "fas_book_bookmark": "fas fa-book-bookmark",
  "fas_book_journal_whills": "fas fa-book-journal-whills",
  "fas_book_medical": "fas fa-book-medical",
  "fas_book_open_reader": "fas fa-book-open-reader",
  "fas_book_open": "fas fa-book-open",
  "fas_book_quran": "fas fa-book-quran",
  "fas_book_skull": "fas fa-book-skull",
  "fas_book_tanakh": "fas fa-book-tanakh",
  "fas_book": "fas fa-book",
  "fas_bookmark": "fas fa-bookmark",
  "fas_border_all": "fas fa-border-all",
  "fas_border_none": "fas fa-border-none",
  "fas_border_top_left": "fas fa-border-top-left",
  "fas_bore_hole": "fas fa-bore-hole",
  "fas_bottle_droplet": "fas fa-bottle-droplet",
  "fas_bottle_water": "fas fa-bottle-water",
  "fas_bowl_food": "fas fa-bowl-food",
  "fas_bowl_rice": "fas fa-bowl-rice",
  "fas_bowling_ball": "fas fa-bowling-ball",
  "fas_box_archive": "fas fa-box-archive",
  "fas_box_open": "fas fa-box-open",
  "fas_box_tissue": "fas fa-box-tissue",
  "fas_box": "fas fa-box",
  "fas_boxes_packing": "fas fa-boxes-packing",
  "fas_boxes_stacked": "fas fa-boxes-stacked",
  "fas_braille": "fas fa-braille",
  "fas_brain": "fas fa-brain",
  "fas_brazilian_real_sign": "fas fa-brazilian-real-sign",
  "fas_bread_slice": "fas fa-bread-slice",
  "fas_bridge_circle_check": "fas fa-bridge-circle-check",
  "fas_bridge_circle_exclamation": "fas fa-bridge-circle-exclamation",
  "fas_bridge_circle_xmark": "fas fa-bridge-circle-xmark",
  "fas_bridge_lock": "fas fa-bridge-lock",
  "fas_bridge_water": "fas fa-bridge-water",
  "fas_bridge": "fas fa-bridge",
  "fas_briefcase_medical": "fas fa-briefcase-medical",
  "fas_briefcase": "fas fa-briefcase",
  "fas_broom_ball": "fas fa-broom-ball",
  "fas_broom": "fas fa-broom",
  "fas_brush": "fas fa-brush",
  "fas_bucket": "fas fa-bucket",
  "fas_bug_slash": "fas fa-bug-slash",
  "fas_bug": "fas fa-bug",
  "fas_bugs": "fas fa-bugs",
  "fas_building_circle_arrow_right": "fas fa-building-circle-arrow-right",
  "fas_building_circle_check": "fas fa-building-circle-check",
  "fas_building_circle_exclamation": "fas fa-building-circle-exclamation",
  "fas_building_circle_xmark": "fas fa-building-circle-xmark",
  "fas_building_columns": "fas fa-building-columns",
  "fas_building_flag": "fas fa-building-flag",
  "fas_building_lock": "fas fa-building-lock",
  "fas_building_ngo": "fas fa-building-ngo",
  "fas_building_shield": "fas fa-building-shield",
  "fas_building_un": "fas fa-building-un",
  "fas_building_user": "fas fa-building-user",
  "fas_building_wheat": "fas fa-building-wheat",
  "fas_building": "fas fa-building",
  "fas_bullhorn": "fas fa-bullhorn",
  "fas_bullseye": "fas fa-bullseye",
  "fas_burger": "fas fa-burger",
  "fas_burst": "fas fa-burst",
  "fas_bus_simple": "fas fa-bus-simple",
  "fas_bus": "fas fa-bus",
  "fas_business_time": "fas fa-business-time",
  "fas_c": "fas fa-c",
  "fas_cable_car": "fas fa-cable-car",
  "fas_cake_candles": "fas fa-cake-candles",
  "fas_calculator": "fas fa-calculator",
  "fas_calendar_check": "fas fa-calendar-check",
  "fas_calendar_day": "fas fa-calendar-day",
  "fas_calendar_days": "fas fa-calendar-days",
  "fas_calendar_minus": "fas fa-calendar-minus",
  "fas_calendar_plus": "fas fa-calendar-plus",
  "fas_calendar_week": "fas fa-calendar-week",
  "fas_calendar_xmark": "fas fa-calendar-xmark",
  "fas_calendar": "fas fa-calendar",
  "fas_camera_retro": "fas fa-camera-retro",
  "fas_camera_rotate": "fas fa-camera-rotate",
  "fas_camera": "fas fa-camera",
  "fas_campground": "fas fa-campground",
  "fas_candy_cane": "fas fa-candy-cane",
  "fas_cannabis": "fas fa-cannabis",
  "fas_capsules": "fas fa-capsules",
  "fas_car_battery": "fas fa-car-battery",
  "fas_car_burst": "fas fa-car-burst",
  "fas_car_on": "fas fa-car-on",
  "fas_car_rear": "fas fa-car-rear",
  "fas_car_side": "fas fa-car-side",
  "fas_car_tunnel": "fas fa-car-tunnel",
  "fas_car": "fas fa-car",
  "fas_caravan": "fas fa-caravan",
  "fas_caret_down": "fas fa-caret-down",
  "fas_caret_left": "fas fa-caret-left",
  "fas_caret_right": "fas fa-caret-right",
  "fas_caret_up": "fas fa-caret-up",
  "fas_carrot": "fas fa-carrot",
  "fas_cart_arrow_down": "fas fa-cart-arrow-down",
  "fas_cart_flatbed_suitcase": "fas fa-cart-flatbed-suitcase",
  "fas_cart_flatbed": "fas fa-cart-flatbed",
  "fas_cart_plus": "fas fa-cart-plus",
  "fas_cart_shopping": "fas fa-cart-shopping",
  "fas_cash_register": "fas fa-cash-register",
  "fas_cat": "fas fa-cat",
  "fas_cedi_sign": "fas fa-cedi-sign",
  "fas_cent_sign": "fas fa-cent-sign",
  "fas_certificate": "fas fa-certificate",
  "fas_chair": "fas fa-chair",
  "fas_chalkboard_user": "fas fa-chalkboard-user",
  "fas_chalkboard": "fas fa-chalkboard",
  "fas_champagne_glasses": "fas fa-champagne-glasses",
  "fas_charging_station": "fas fa-charging-station",
  "fas_chart_area": "fas fa-chart-area",
  "fas_chart_bar": "fas fa-chart-bar",
  "fas_chart_column": "fas fa-chart-column",
  "fas_chart_gantt": "fas fa-chart-gantt",
  "fas_chart_line": "fas fa-chart-line",
  "fas_chart_pie": "fas fa-chart-pie",
  "fas_chart_simple": "fas fa-chart-simple",
  "fas_check_double": "fas fa-check-double",
  "fas_check_to_slot": "fas fa-check-to-slot",
  "fas_check": "fas fa-check",
  "fas_cheese": "fas fa-cheese",
  "fas_chess_bishop": "fas fa-chess-bishop",
  "fas_chess_board": "fas fa-chess-board",
  "fas_chess_king": "fas fa-chess-king",
  "fas_chess_knight": "fas fa-chess-knight",
  "fas_chess_pawn": "fas fa-chess-pawn",
  "fas_chess_queen": "fas fa-chess-queen",
  "fas_chess_rook": "fas fa-chess-rook",
  "fas_chess": "fas fa-chess",
  "fas_chevron_down": "fas fa-chevron-down",
  "fas_chevron_left": "fas fa-chevron-left",
  "fas_chevron_right": "fas fa-chevron-right",
  "fas_chevron_up": "fas fa-chevron-up",
  "fas_child_combatant": "fas fa-child-combatant",
  "fas_child_dress": "fas fa-child-dress",
  "fas_child_reaching": "fas fa-child-reaching",
  "fas_child": "fas fa-child",
  "fas_children": "fas fa-children",
  "fas_church": "fas fa-church",
  "fas_circle_arrow_down": "fas fa-circle-arrow-down",
  "fas_circle_arrow_left": "fas fa-circle-arrow-left",
  "fas_circle_arrow_right": "fas fa-circle-arrow-right",
  "fas_circle_arrow_up": "fas fa-circle-arrow-up",
  "fas_circle_check": "fas fa-circle-check",
  "fas_circle_chevron_down": "fas fa-circle-chevron-down",
  "fas_circle_chevron_left": "fas fa-circle-chevron-left",
  "fas_circle_chevron_right": "fas fa-circle-chevron-right",
  "fas_circle_chevron_up": "fas fa-circle-chevron-up",
  "fas_circle_dollar_to_slot": "fas fa-circle-dollar-to-slot",
  "fas_circle_dot": "fas fa-circle-dot",
  "fas_circle_down": "fas fa-circle-down",
  "fas_circle_exclamation": "fas fa-circle-exclamation",
  "fas_circle_h": "fas fa-circle-h",
  "fas_circle_half_stroke": "fas fa-circle-half-stroke",
  "fas_circle_info": "fas fa-circle-info",
  "fas_circle_left": "fas fa-circle-left",
  "fas_circle_minus": "fas fa-circle-minus",
  "fas_circle_nodes": "fas fa-circle-nodes",
  "fas_circle_notch": "fas fa-circle-notch",
  "fas_circle_pause": "fas fa-circle-pause",
  "fas_circle_play": "fas fa-circle-play",
  "fas_circle_plus": "fas fa-circle-plus",
  "fas_circle_question": "fas fa-circle-question",
  "fas_circle_radiation": "fas fa-circle-radiation",
  "fas_circle_right": "fas fa-circle-right",
  "fas_circle_stop": "fas fa-circle-stop",
  "fas_circle_up": "fas fa-circle-up",
  "fas_circle_user": "fas fa-circle-user",
  "fas_circle_xmark": "fas fa-circle-xmark",
  "fas_circle": "fas fa-circle",
  "fas_city": "fas fa-city",
  "fas_clapperboard": "fas fa-clapperboard",
  "fas_clipboard_check": "fas fa-clipboard-check",
  "fas_clipboard_list": "fas fa-clipboard-list",
  "fas_clipboard_question": "fas fa-clipboard-question",
  "fas_clipboard_user": "fas fa-clipboard-user",
  "fas_clipboard": "fas fa-clipboard",
  "fas_clock_rotate_left": "fas fa-clock-rotate-left",
  "fas_clock": "fas fa-clock",
  "fas_clone": "fas fa-clone",
  "fas_closed_captioning": "fas fa-closed-captioning",
  "fas_cloud_arrow_down": "fas fa-cloud-arrow-down",
  "fas_cloud_arrow_up": "fas fa-cloud-arrow-up",
  "fas_cloud_bolt": "fas fa-cloud-bolt",
  "fas_cloud_meatball": "fas fa-cloud-meatball",
  "fas_cloud_moon_rain": "fas fa-cloud-moon-rain",
  "fas_cloud_moon": "fas fa-cloud-moon",
  "fas_cloud_rain": "fas fa-cloud-rain",
  "fas_cloud_showers_heavy": "fas fa-cloud-showers-heavy",
  "fas_cloud_showers_water": "fas fa-cloud-showers-water",
  "fas_cloud_sun_rain": "fas fa-cloud-sun-rain",
  "fas_cloud_sun": "fas fa-cloud-sun",
  "fas_cloud": "fas fa-cloud",
  "fas_clover": "fas fa-clover",
  "fas_code_branch": "fas fa-code-branch",
  "fas_code_commit": "fas fa-code-commit",
  "fas_code_compare": "fas fa-code-compare",
  "fas_code_fork": "fas fa-code-fork",
  "fas_code_merge": "fas fa-code-merge",
  "fas_code_pull_request": "fas fa-code-pull-request",
  "fas_code": "fas fa-code",
  "fas_coins": "fas fa-coins",
  "fas_colon_sign": "fas fa-colon-sign",
  "fas_comment_dollar": "fas fa-comment-dollar",
  "fas_comment_dots": "fas fa-comment-dots",
  "fas_comment_medical": "fas fa-comment-medical",
  "fas_comment_slash": "fas fa-comment-slash",
  "fas_comment_sms": "fas fa-comment-sms",
  "fas_comment": "fas fa-comment",
  "fas_comments_dollar": "fas fa-comments-dollar",
  "fas_comments": "fas fa-comments",
  "fas_compact_disc": "fas fa-compact-disc",
  "fas_compass_drafting": "fas fa-compass-drafting",
  "fas_compass": "fas fa-compass",
  "fas_compress": "fas fa-compress",
  "fas_computer_mouse": "fas fa-computer-mouse",
  "fas_computer": "fas fa-computer",
  "fas_cookie_bite": "fas fa-cookie-bite",
  "fas_cookie": "fas fa-cookie",
  "fas_copy": "fas fa-copy",
  "fas_copyright": "fas fa-copyright",
  "fas_couch": "fas fa-couch",
  "fas_cow": "fas fa-cow",
  "fas_credit_card": "fas fa-credit-card",
  "fas_crop_simple": "fas fa-crop-simple",
  "fas_crop": "fas fa-crop",
  "fas_cross": "fas fa-cross",
  "fas_crosshairs": "fas fa-crosshairs",
  "fas_crow": "fas fa-crow",
  "fas_crown": "fas fa-crown",
  "fas_crutch": "fas fa-crutch",
  "fas_cruzeiro_sign": "fas fa-cruzeiro-sign",
  "fas_cube": "fas fa-cube",
  "fas_cubes_stacked": "fas fa-cubes-stacked",
  "fas_cubes": "fas fa-cubes",
  "fas_d": "fas fa-d",
  "fas_database": "fas fa-database",
  "fas_delete_left": "fas fa-delete-left",
  "fas_democrat": "fas fa-democrat",
  "fas_desktop": "fas fa-desktop",
  "fas_dharmachakra": "fas fa-dharmachakra",
  "fas_diagram_next": "fas fa-diagram-next",
  "fas_diagram_predecessor": "fas fa-diagram-predecessor",
  "fas_diagram_project": "fas fa-diagram-project",
  "fas_diagram_successor": "fas fa-diagram-successor",
  "fas_diamond_turn_right": "fas fa-diamond-turn-right",
  "fas_diamond": "fas fa-diamond",
  "fas_dice_d20": "fas fa-dice-d20",
  "fas_dice_d6": "fas fa-dice-d6",
  "fas_dice_five": "fas fa-dice-five",
  "fas_dice_four": "fas fa-dice-four",
  "fas_dice_one": "fas fa-dice-one",
  "fas_dice_six": "fas fa-dice-six",
  "fas_dice_three": "fas fa-dice-three",
  "fas_dice_two": "fas fa-dice-two",
  "fas_dice": "fas fa-dice",
  "fas_disease": "fas fa-disease",
  "fas_display": "fas fa-display",
  "fas_divide": "fas fa-divide",
  "fas_dna": "fas fa-dna",
  "fas_dog": "fas fa-dog",
  "fas_dollar_sign": "fas fa-dollar-sign",
  "fas_dolly": "fas fa-dolly",
  "fas_dong_sign": "fas fa-dong-sign",
  "fas_door_closed": "fas fa-door-closed",
  "fas_door_open": "fas fa-door-open",
  "fas_dove": "fas fa-dove",
  "fas_down_left_and_up_right_to_center": "fas fa-down-left-and-up-right-to-center",
  "fas_down_long": "fas fa-down-long",
  "fas_download": "fas fa-download",
  "fas_dragon": "fas fa-dragon",
  "fas_draw_polygon": "fas fa-draw-polygon",
  "fas_droplet_slash": "fas fa-droplet-slash",
  "fas_droplet": "fas fa-droplet",
  "fas_drum_steelpan": "fas fa-drum-steelpan",
  "fas_drum": "fas fa-drum",
  "fas_drumstick_bite": "fas fa-drumstick-bite",
  "fas_dumbbell": "fas fa-dumbbell",
  "fas_dumpster_fire": "fas fa-dumpster-fire",
  "fas_dumpster": "fas fa-dumpster",
  "fas_dungeon": "fas fa-dungeon",
  "fas_e": "fas fa-e",
  "fas_ear_deaf": "fas fa-ear-deaf",
  "fas_ear_listen": "fas fa-ear-listen",
  "fas_earth_africa": "fas fa-earth-africa",
  "fas_earth_americas": "fas fa-earth-americas",
  "fas_earth_asia": "fas fa-earth-asia",
  "fas_earth_europe": "fas fa-earth-europe",
  "fas_earth_oceania": "fas fa-earth-oceania",
  "fas_egg": "fas fa-egg",
  "fas_eject": "fas fa-eject",
  "fas_elevator": "fas fa-elevator",
  "fas_ellipsis_vertical": "fas fa-ellipsis-vertical",
  "fas_ellipsis": "fas fa-ellipsis",
  "fas_envelope_circle_check": "fas fa-envelope-circle-check",
  "fas_envelope_open_text": "fas fa-envelope-open-text",
  "fas_envelope_open": "fas fa-envelope-open",
  "fas_envelope": "fas fa-envelope",
  "fas_envelopes_bulk": "fas fa-envelopes-bulk",
  "fas_equals": "fas fa-equals",
  "fas_eraser": "fas fa-eraser",
  "fas_ethernet": "fas fa-ethernet",
  "fas_euro_sign": "fas fa-euro-sign",
  "fas_exclamation": "fas fa-exclamation",
  "fas_expand": "fas fa-expand",
  "fas_explosion": "fas fa-explosion",
  "fas_eye_dropper": "fas fa-eye-dropper",
  "fas_eye_low_vision": "fas fa-eye-low-vision",
  "fas_eye_slash": "fas fa-eye-slash",
  "fas_eye": "fas fa-eye",
  "fas_f": "fas fa-f",
  "fas_face_angry": "fas fa-face-angry",
  "fas_face_dizzy": "fas fa-face-dizzy",
  "fas_face_flushed": "fas fa-face-flushed",
  "fas_face_frown_open": "fas fa-face-frown-open",
  "fas_face_frown": "fas fa-face-frown",
  "fas_face_grimace": "fas fa-face-grimace",
  "fas_face_grin_beam_sweat": "fas fa-face-grin-beam-sweat",
  "fas_face_grin_beam": "fas fa-face-grin-beam",
  "fas_face_grin_hearts": "fas fa-face-grin-hearts",
  "fas_face_grin_squint_tears": "fas fa-face-grin-squint-tears",
  "fas_face_grin_squint": "fas fa-face-grin-squint",
  "fas_face_grin_stars": "fas fa-face-grin-stars",
  "fas_face_grin_tears": "fas fa-face-grin-tears",
  "fas_face_grin_tongue_squint": "fas fa-face-grin-tongue-squint",
  "fas_face_grin_tongue_wink": "fas fa-face-grin-tongue-wink",
  "fas_face_grin_tongue": "fas fa-face-grin-tongue",
  "fas_face_grin_wide": "fas fa-face-grin-wide",
  "fas_face_grin_wink": "fas fa-face-grin-wink",
  "fas_face_grin": "fas fa-face-grin",
  "fas_face_kiss_beam": "fas fa-face-kiss-beam",
  "fas_face_kiss_wink_heart": "fas fa-face-kiss-wink-heart",
  "fas_face_kiss": "fas fa-face-kiss",
  "fas_face_laugh_beam": "fas fa-face-laugh-beam",
  "fas_face_laugh_squint": "fas fa-face-laugh-squint",
  "fas_face_laugh_wink": "fas fa-face-laugh-wink",
  "fas_face_laugh": "fas fa-face-laugh",
  "fas_face_meh_blank": "fas fa-face-meh-blank",
  "fas_face_meh": "fas fa-face-meh",
  "fas_face_rolling_eyes": "fas fa-face-rolling-eyes",
  "fas_face_sad_cry": "fas fa-face-sad-cry",
  "fas_face_sad_tear": "fas fa-face-sad-tear",
  "fas_face_smile_beam": "fas fa-face-smile-beam",
  "fas_face_smile_wink": "fas fa-face-smile-wink",
  "fas_face_smile": "fas fa-face-smile",
  "fas_face_surprise": "fas fa-face-surprise",
  "fas_face_tired": "fas fa-face-tired",
  "fas_fan": "fas fa-fan",
  "fas_faucet_drip": "fas fa-faucet-drip",
  "fas_faucet": "fas fa-faucet",
  "fas_fax": "fas fa-fax",
  "fas_feather_pointed": "fas fa-feather-pointed",
  "fas_feather": "fas fa-feather",
  "fas_ferry": "fas fa-ferry",
  "fas_file_arrow_down": "fas fa-file-arrow-down",
  "fas_file_arrow_up": "fas fa-file-arrow-up",
  "fas_file_audio": "fas fa-file-audio",
  "fas_file_circle_check": "fas fa-file-circle-check",
  "fas_file_circle_exclamation": "fas fa-file-circle-exclamation",
  "fas_file_circle_minus": "fas fa-file-circle-minus",
  "fas_file_circle_plus": "fas fa-file-circle-plus",
  "fas_file_circle_question": "fas fa-file-circle-question",
  "fas_file_circle_xmark": "fas fa-file-circle-xmark",
  "fas_file_code": "fas fa-file-code",
  "fas_file_contract": "fas fa-file-contract",
  "fas_file_csv": "fas fa-file-csv",
  "fas_file_excel": "fas fa-file-excel",
  "fas_file_export": "fas fa-file-export",
  "fas_file_image": "fas fa-file-image",
  "fas_file_import": "fas fa-file-import",
  "fas_file_invoice_dollar": "fas fa-file-invoice-dollar",
  "fas_file_invoice": "fas fa-file-invoice",
  "fas_file_lines": "fas fa-file-lines",
  "fas_file_medical": "fas fa-file-medical",
  "fas_file_pdf": "fas fa-file-pdf",
  "fas_file_pen": "fas fa-file-pen",
  "fas_file_powerpoint": "fas fa-file-powerpoint",
  "fas_file_prescription": "fas fa-file-prescription",
  "fas_file_shield": "fas fa-file-shield",
  "fas_file_signature": "fas fa-file-signature",
  "fas_file_video": "fas fa-file-video",
  "fas_file_waveform": "fas fa-file-waveform",
  "fas_file_word": "fas fa-file-word",
  "fas_file_zipper": "fas fa-file-zipper",
  "fas_file": "fas fa-file",
  "fas_fill_drip": "fas fa-fill-drip",
  "fas_fill": "fas fa-fill",
  "fas_film": "fas fa-film",
  "fas_filter_circle_dollar": "fas fa-filter-circle-dollar",
  "fas_filter_circle_xmark": "fas fa-filter-circle-xmark",
  "fas_filter": "fas fa-filter",
  "fas_fingerprint": "fas fa-fingerprint",
  "fas_fire_burner": "fas fa-fire-burner",
  "fas_fire_extinguisher": "fas fa-fire-extinguisher",
  "fas_fire_flame_curved": "fas fa-fire-flame-curved",
  "fas_fire_flame_simple": "fas fa-fire-flame-simple",
  "fas_fire": "fas fa-fire",
  "fas_fish_fins": "fas fa-fish-fins",
  "fas_fish": "fas fa-fish",
  "fas_flag_checkered": "fas fa-flag-checkered",
  "fas_flag_usa": "fas fa-flag-usa",
  "fas_flag": "fas fa-flag",
  "fas_flask_vial": "fas fa-flask-vial",
  "fas_flask": "fas fa-flask",
  "fas_floppy_disk": "fas fa-floppy-disk",
  "fas_florin_sign": "fas fa-florin-sign",
  "fas_folder_closed": "fas fa-folder-closed",
  "fas_folder_minus": "fas fa-folder-minus",
  "fas_folder_open": "fas fa-folder-open",
  "fas_folder_plus": "fas fa-folder-plus",
  "fas_folder_tree": "fas fa-folder-tree",
  "fas_folder": "fas fa-folder",
  "fas_font_awesome": "fas fa-font-awesome",
  "fas_font": "fas fa-font",
  "fas_football": "fas fa-football",
  "fas_forward_fast": "fas fa-forward-fast",
  "fas_forward_step": "fas fa-forward-step",
  "fas_forward": "fas fa-forward",
  "fas_franc_sign": "fas fa-franc-sign",
  "fas_frog": "fas fa-frog",
  "fas_futbol": "fas fa-futbol",
  "fas_g": "fas fa-g",
  "fas_gamepad": "fas fa-gamepad",
  "fas_gas_pump": "fas fa-gas-pump",
  "fas_gauge_high": "fas fa-gauge-high",
  "fas_gauge_simple_high": "fas fa-gauge-simple-high",
  "fas_gauge_simple": "fas fa-gauge-simple",
  "fas_gauge": "fas fa-gauge",
  "fas_gavel": "fas fa-gavel",
  "fas_gear": "fas fa-gear",
  "fas_gears": "fas fa-gears",
  "fas_gem": "fas fa-gem",
  "fas_genderless": "fas fa-genderless",
  "fas_ghost": "fas fa-ghost",
  "fas_gift": "fas fa-gift",
  "fas_gifts": "fas fa-gifts",
  "fas_glass_water_droplet": "fas fa-glass-water-droplet",
  "fas_glass_water": "fas fa-glass-water",
  "fas_glasses": "fas fa-glasses",
  "fas_globe": "fas fa-globe",
  "fas_golf_ball_tee": "fas fa-golf-ball-tee",
  "fas_gopuram": "fas fa-gopuram",
  "fas_graduation_cap": "fas fa-graduation-cap",
  "fas_greater_than_equal": "fas fa-greater-than-equal",
  "fas_greater_than": "fas fa-greater-than",
  "fas_grip_lines_vertical": "fas fa-grip-lines-vertical",
  "fas_grip_lines": "fas fa-grip-lines",
  "fas_grip_vertical": "fas fa-grip-vertical",
  "fas_grip": "fas fa-grip",
  "fas_group_arrows_rotate": "fas fa-group-arrows-rotate",
  "fas_guarani_sign": "fas fa-guarani-sign",
  "fas_guitar": "fas fa-guitar",
  "fas_gun": "fas fa-gun",
  "fas_h": "fas fa-h",
  "fas_hammer": "fas fa-hammer",
  "fas_hamsa": "fas fa-hamsa",
  "fas_hand_back_fist": "fas fa-hand-back-fist",
  "fas_hand_dots": "fas fa-hand-dots",
  "fas_hand_fist": "fas fa-hand-fist",
  "fas_hand_holding_dollar": "fas fa-hand-holding-dollar",
  "fas_hand_holding_droplet": "fas fa-hand-holding-droplet",
  "fas_hand_holding_hand": "fas fa-hand-holding-hand",
  "fas_hand_holding_heart": "fas fa-hand-holding-heart",
  "fas_hand_holding_medical": "fas fa-hand-holding-medical",
  "fas_hand_holding": "fas fa-hand-holding",
  "fas_hand_lizard": "fas fa-hand-lizard",
  "fas_hand_middle_finger": "fas fa-hand-middle-finger",
  "fas_hand_peace": "fas fa-hand-peace",
  "fas_hand_point_down": "fas fa-hand-point-down",
  "fas_hand_point_left": "fas fa-hand-point-left",
  "fas_hand_point_right": "fas fa-hand-point-right",
  "fas_hand_point_up": "fas fa-hand-point-up",
  "fas_hand_pointer": "fas fa-hand-pointer",
  "fas_hand_scissors": "fas fa-hand-scissors",
  "fas_hand_sparkles": "fas fa-hand-sparkles",
  "fas_hand_spock": "fas fa-hand-spock",
  "fas_hand": "fas fa-hand",
  "fas_handcuffs": "fas fa-handcuffs",
  "fas_hands_asl_interpreting": "fas fa-hands-asl-interpreting",
  "fas_hands_bound": "fas fa-hands-bound",
  "fas_hands_bubbles": "fas fa-hands-bubbles",
  "fas_hands_clapping": "fas fa-hands-clapping",
  "fas_hands_holding_child": "fas fa-hands-holding-child",
  "fas_hands_holding_circle": "fas fa-hands-holding-circle",
  "fas_hands_holding": "fas fa-hands-holding",
  "fas_hands_praying": "fas fa-hands-praying",
  "fas_hands": "fas fa-hands",
  "fas_handshake_angle": "fas fa-handshake-angle",
  "fas_handshake_simple_slash": "fas fa-handshake-simple-slash",
  "fas_handshake_simple": "fas fa-handshake-simple",
  "fas_handshake_slash": "fas fa-handshake-slash",
  "fas_handshake": "fas fa-handshake",
  "fas_hanukiah": "fas fa-hanukiah",
  "fas_hard_drive": "fas fa-hard-drive",
  "fas_hashtag": "fas fa-hashtag",
  "fas_hat_cowboy_side": "fas fa-hat-cowboy-side",
  "fas_hat_cowboy": "fas fa-hat-cowboy",
  "fas_hat_wizard": "fas fa-hat-wizard",
  "fas_head_side_cough_slash": "fas fa-head-side-cough-slash",
  "fas_head_side_cough": "fas fa-head-side-cough",
  "fas_head_side_mask": "fas fa-head-side-mask",
  "fas_head_side_virus": "fas fa-head-side-virus",
  "fas_heading": "fas fa-heading",
  "fas_headphones_simple": "fas fa-headphones-simple",
  "fas_headphones": "fas fa-headphones",
  "fas_headset": "fas fa-headset",
  "fas_heart_circle_bolt": "fas fa-heart-circle-bolt",
  "fas_heart_circle_check": "fas fa-heart-circle-check",
  "fas_heart_circle_exclamation": "fas fa-heart-circle-exclamation",
  "fas_heart_circle_minus": "fas fa-heart-circle-minus",
  "fas_heart_circle_plus": "fas fa-heart-circle-plus",
  "fas_heart_circle_xmark": "fas fa-heart-circle-xmark",
  "fas_heart_crack": "fas fa-heart-crack",
  "fas_heart_pulse": "fas fa-heart-pulse",
  "fas_heart": "fas fa-heart",
  "fas_helicopter_symbol": "fas fa-helicopter-symbol",
  "fas_helicopter": "fas fa-helicopter",
  "fas_helmet_safety": "fas fa-helmet-safety",
  "fas_helmet_un": "fas fa-helmet-un",
  "fas_highlighter": "fas fa-highlighter",
  "fas_hill_avalanche": "fas fa-hill-avalanche",
  "fas_hill_rockslide": "fas fa-hill-rockslide",
  "fas_hippo": "fas fa-hippo",
  "fas_hockey_puck": "fas fa-hockey-puck",
  "fas_holly_berry": "fas fa-holly-berry",
  "fas_horse_head": "fas fa-horse-head",
  "fas_horse": "fas fa-horse",
  "fas_hospital_user": "fas fa-hospital-user",
  "fas_hospital": "fas fa-hospital",
  "fas_hot_tub_person": "fas fa-hot-tub-person",
  "fas_hotdog": "fas fa-hotdog",
  "fas_hotel": "fas fa-hotel",
  "fas_hourglass_end": "fas fa-hourglass-end",
  "fas_hourglass_half": "fas fa-hourglass-half",
  "fas_hourglass_start": "fas fa-hourglass-start",
  "fas_hourglass": "fas fa-hourglass",
  "fas_house_chimney_crack": "fas fa-house-chimney-crack",
  "fas_house_chimney_medical": "fas fa-house-chimney-medical",
  "fas_house_chimney_user": "fas fa-house-chimney-user",
  "fas_house_chimney_window": "fas fa-house-chimney-window",
  "fas_house_chimney": "fas fa-house-chimney",
  "fas_house_circle_check": "fas fa-house-circle-check",
  "fas_house_circle_exclamation": "fas fa-house-circle-exclamation",
  "fas_house_circle_xmark": "fas fa-house-circle-xmark",
  "fas_house_crack": "fas fa-house-crack",
  "fas_house_fire": "fas fa-house-fire",
  "fas_house_flag": "fas fa-house-flag",
  "fas_house_flood_water_circle_arrow_right": "fas fa-house-flood-water-circle-arrow-right",
  "fas_house_flood_water": "fas fa-house-flood-water",
  "fas_house_laptop": "fas fa-house-laptop",
  "fas_house_lock": "fas fa-house-lock",
  "fas_house_medical_circle_check": "fas fa-house-medical-circle-check",
  "fas_house_medical_circle_exclamation": "fas fa-house-medical-circle-exclamation",
  "fas_house_medical_circle_xmark": "fas fa-house-medical-circle-xmark",
  "fas_house_medical_flag": "fas fa-house-medical-flag",
  "fas_house_medical": "fas fa-house-medical",
  "fas_house_signal": "fas fa-house-signal",
  "fas_house_tsunami": "fas fa-house-tsunami",
  "fas_house_user": "fas fa-house-user",
  "fas_house": "fas fa-house",
  "fas_hryvnia_sign": "fas fa-hryvnia-sign",
  "fas_hurricane": "fas fa-hurricane",
  "fas_i_cursor": "fas fa-i-cursor",
  "fas_i": "fas fa-i",
  "fas_ice_cream": "fas fa-ice-cream",
  "fas_icicles": "fas fa-icicles",
  "fas_icons": "fas fa-icons",
  "fas_id_badge": "fas fa-id-badge",
  "fas_id_card_clip": "fas fa-id-card-clip",
  "fas_id_card": "fas fa-id-card",
  "fas_igloo": "fas fa-igloo",
  "fas_image_portrait": "fas fa-image-portrait",
  "fas_image": "fas fa-image",
  "fas_images": "fas fa-images",
  "fas_inbox": "fas fa-inbox",
  "fas_indent": "fas fa-indent",
  "fas_indian_rupee_sign": "fas fa-indian-rupee-sign",
  "fas_industry": "fas fa-industry",
  "fas_infinity": "fas fa-infinity",
  "fas_info": "fas fa-info",
  "fas_italic": "fas fa-italic",
  "fas_j": "fas fa-j",
  "fas_jar_wheat": "fas fa-jar-wheat",
  "fas_jar": "fas fa-jar",
  "fas_jedi": "fas fa-jedi",
  "fas_jet_fighter_up": "fas fa-jet-fighter-up",
  "fas_jet_fighter": "fas fa-jet-fighter",
  "fas_joint": "fas fa-joint",
  "fas_jug_detergent": "fas fa-jug-detergent",
  "fas_k": "fas fa-k",
  "fas_kaaba": "fas fa-kaaba",
  "fas_key": "fas fa-key",
  "fas_keyboard": "fas fa-keyboard",
  "fas_khanda": "fas fa-khanda",
  "fas_kip_sign": "fas fa-kip-sign",
  "fas_kit_medical": "fas fa-kit-medical",
  "fas_kitchen_set": "fas fa-kitchen-set",
  "fas_kiwi_bird": "fas fa-kiwi-bird",
  "fas_l": "fas fa-l",
  "fas_land_mine_on": "fas fa-land-mine-on",
  "fas_landmark_dome": "fas fa-landmark-dome",
  "fas_landmark_flag": "fas fa-landmark-flag",
  "fas_landmark": "fas fa-landmark",
  "fas_language": "fas fa-language",
  "fas_laptop_code": "fas fa-laptop-code",
  "fas_laptop_file": "fas fa-laptop-file",
  "fas_laptop_medical": "fas fa-laptop-medical",
  "fas_laptop": "fas fa-laptop",
  "fas_lari_sign": "fas fa-lari-sign",
  "fas_layer_group": "fas fa-layer-group",
  "fas_leaf": "fas fa-leaf",
  "fas_left_long": "fas fa-left-long",
  "fas_left_right": "fas fa-left-right",
  "fas_lemon": "fas fa-lemon",
  "fas_less_than_equal": "fas fa-less-than-equal",
  "fas_less_than": "fas fa-less-than",
  "fas_life_ring": "fas fa-life-ring",
  "fas_lightbulb": "fas fa-lightbulb",
  "fas_lines_leaning": "fas fa-lines-leaning",
  "fas_link_slash": "fas fa-link-slash",
  "fas_link": "fas fa-link",
  "fas_lira_sign": "fas fa-lira-sign",
  "fas_list_check": "fas fa-list-check",
  "fas_list_ol": "fas fa-list-ol",
  "fas_list_ul": "fas fa-list-ul",
  "fas_list": "fas fa-list",
  "fas_litecoin_sign": "fas fa-litecoin-sign",
  "fas_location_arrow": "fas fa-location-arrow",
  "fas_location_crosshairs": "fas fa-location-crosshairs",
  "fas_location_dot": "fas fa-location-dot",
  "fas_location_pin_lock": "fas fa-location-pin-lock",
  "fas_location_pin": "fas fa-location-pin",
  "fas_lock_open": "fas fa-lock-open",
  "fas_lock": "fas fa-lock",
  "fas_locust": "fas fa-locust",
  "fas_lungs_virus": "fas fa-lungs-virus",
  "fas_lungs": "fas fa-lungs",
  "fas_m": "fas fa-m",
  "fas_magnet": "fas fa-magnet",
  "fas_magnifying_glass_arrow_right": "fas fa-magnifying-glass-arrow-right",
  "fas_magnifying_glass_chart": "fas fa-magnifying-glass-chart",
  "fas_magnifying_glass_dollar": "fas fa-magnifying-glass-dollar",
  "fas_magnifying_glass_location": "fas fa-magnifying-glass-location",
  "fas_magnifying_glass_minus": "fas fa-magnifying-glass-minus",
  "fas_magnifying_glass_plus": "fas fa-magnifying-glass-plus",
  "fas_magnifying_glass": "fas fa-magnifying-glass",
  "fas_manat_sign": "fas fa-manat-sign",
  "fas_map_location_dot": "fas fa-map-location-dot",
  "fas_map_location": "fas fa-map-location",
  "fas_map_pin": "fas fa-map-pin",
  "fas_map": "fas fa-map",
  "fas_marker": "fas fa-marker",
  "fas_mars_and_venus_burst": "fas fa-mars-and-venus-burst",
  "fas_mars_and_venus": "fas fa-mars-and-venus",
  "fas_mars_double": "fas fa-mars-double",
  "fas_mars_stroke_right": "fas fa-mars-stroke-right",
  "fas_mars_stroke_up": "fas fa-mars-stroke-up",
  "fas_mars_stroke": "fas fa-mars-stroke",
  "fas_mars": "fas fa-mars",
  "fas_martini_glass_citrus": "fas fa-martini-glass-citrus",
  "fas_martini_glass_empty": "fas fa-martini-glass-empty",
  "fas_martini_glass": "fas fa-martini-glass",
  "fas_mask_face": "fas fa-mask-face",
  "fas_mask_ventilator": "fas fa-mask-ventilator",
  "fas_mask": "fas fa-mask",
  "fas_masks_theater": "fas fa-masks-theater",
  "fas_mattress_pillow": "fas fa-mattress-pillow",
  "fas_maximize": "fas fa-maximize",
  "fas_medal": "fas fa-medal",
  "fas_memory": "fas fa-memory",
  "fas_menorah": "fas fa-menorah",
  "fas_mercury": "fas fa-mercury",
  "fas_message": "fas fa-message",
  "fas_meteor": "fas fa-meteor",
  "fas_microchip": "fas fa-microchip",
  "fas_microphone_lines_slash": "fas fa-microphone-lines-slash",
  "fas_microphone_lines": "fas fa-microphone-lines",
  "fas_microphone_slash": "fas fa-microphone-slash",
  "fas_microphone": "fas fa-microphone",
  "fas_microscope": "fas fa-microscope",
  "fas_mill_sign": "fas fa-mill-sign",
  "fas_minimize": "fas fa-minimize",
  "fas_minus": "fas fa-minus",
  "fas_mitten": "fas fa-mitten",
  "fas_mobile_button": "fas fa-mobile-button",
  "fas_mobile_retro": "fas fa-mobile-retro",
  "fas_mobile_screen_button": "fas fa-mobile-screen-button",
  "fas_mobile_screen": "fas fa-mobile-screen",
  "fas_mobile": "fas fa-mobile",
  "fas_money_bill_1_wave": "fas fa-money-bill-1-wave",
  "fas_money_bill_1": "fas fa-money-bill-1",
  "fas_money_bill_transfer": "fas fa-money-bill-transfer",
  "fas_money_bill_trend_up": "fas fa-money-bill-trend-up",
  "fas_money_bill_wave": "fas fa-money-bill-wave",
  "fas_money_bill_wheat": "fas fa-money-bill-wheat",
  "fas_money_bill": "fas fa-money-bill",
  "fas_money_bills": "fas fa-money-bills",
  "fas_money_check_dollar": "fas fa-money-check-dollar",
  "fas_money_check": "fas fa-money-check",
  "fas_monument": "fas fa-monument",
  "fas_moon": "fas fa-moon",
  "fas_mortar_pestle": "fas fa-mortar-pestle",
  "fas_mosque": "fas fa-mosque",
  "fas_mosquito_net": "fas fa-mosquito-net",
  "fas_mosquito": "fas fa-mosquito",
  "fas_motorcycle": "fas fa-motorcycle",
  "fas_mound": "fas fa-mound",
  "fas_mountain_city": "fas fa-mountain-city",
  "fas_mountain_sun": "fas fa-mountain-sun",
  "fas_mountain": "fas fa-mountain",
  "fas_mug_hot": "fas fa-mug-hot",
  "fas_mug_saucer": "fas fa-mug-saucer",
  "fas_music": "fas fa-music",
  "fas_n": "fas fa-n",
  "fas_naira_sign": "fas fa-naira-sign",
  "fas_network_wired": "fas fa-network-wired",
  "fas_neuter": "fas fa-neuter",
  "fas_newspaper": "fas fa-newspaper",
  "fas_not_equal": "fas fa-not-equal",
  "fas_notdef": "fas fa-notdef",
  "fas_note_sticky": "fas fa-note-sticky",
  "fas_notes_medical": "fas fa-notes-medical",
  "fas_o": "fas fa-o",
  "fas_object_group": "fas fa-object-group",
  "fas_object_ungroup": "fas fa-object-ungroup",
  "fas_oil_can": "fas fa-oil-can",
  "fas_oil_well": "fas fa-oil-well",
  "fas_om": "fas fa-om",
  "fas_otter": "fas fa-otter",
  "fas_outdent": "fas fa-outdent",
  "fas_p": "fas fa-p",
  "fas_pager": "fas fa-pager",
  "fas_paint_roller": "fas fa-paint-roller",
  "fas_paintbrush": "fas fa-paintbrush",
  "fas_palette": "fas fa-palette",
  "fas_pallet": "fas fa-pallet",
  "fas_panorama": "fas fa-panorama",
  "fas_paper_plane": "fas fa-paper-plane",
  "fas_paperclip": "fas fa-paperclip",
  "fas_parachute_box": "fas fa-parachute-box",
  "fas_paragraph": "fas fa-paragraph",
  "fas_passport": "fas fa-passport",
  "fas_paste": "fas fa-paste",
  "fas_pause": "fas fa-pause",
  "fas_paw": "fas fa-paw",
  "fas_peace": "fas fa-peace",
  "fas_pen_clip": "fas fa-pen-clip",
  "fas_pen_fancy": "fas fa-pen-fancy",
  "fas_pen_nib": "fas fa-pen-nib",
  "fas_pen_ruler": "fas fa-pen-ruler",
  "fas_pen_to_square": "fas fa-pen-to-square",
  "fas_pen": "fas fa-pen",
  "fas_pencil": "fas fa-pencil",
  "fas_people_arrows": "fas fa-people-arrows",
  "fas_people_carry_box": "fas fa-people-carry-box",
  "fas_people_group": "fas fa-people-group",
  "fas_people_line": "fas fa-people-line",
  "fas_people_pulling": "fas fa-people-pulling",
  "fas_people_robbery": "fas fa-people-robbery",
  "fas_people_roof": "fas fa-people-roof",
  "fas_pepper_hot": "fas fa-pepper-hot",
  "fas_percent": "fas fa-percent",
  "fas_person_arrow_down_to_line": "fas fa-person-arrow-down-to-line",
  "fas_person_arrow_up_from_line": "fas fa-person-arrow-up-from-line",
  "fas_person_biking": "fas fa-person-biking",
  "fas_person_booth": "fas fa-person-booth",
  "fas_person_breastfeeding": "fas fa-person-breastfeeding",
  "fas_person_burst": "fas fa-person-burst",
  "fas_person_cane": "fas fa-person-cane",
  "fas_person_chalkboard": "fas fa-person-chalkboard",
  "fas_person_circle_check": "fas fa-person-circle-check",
  "fas_person_circle_exclamation": "fas fa-person-circle-exclamation",
  "fas_person_circle_minus": "fas fa-person-circle-minus",
  "fas_person_circle_plus": "fas fa-person-circle-plus",
  "fas_person_circle_question": "fas fa-person-circle-question",
  "fas_person_circle_xmark": "fas fa-person-circle-xmark",
  "fas_person_digging": "fas fa-person-digging",
  "fas_person_dots_from_line": "fas fa-person-dots-from-line",
  "fas_person_dress_burst": "fas fa-person-dress-burst",
  "fas_person_dress": "fas fa-person-dress",
  "fas_person_drowning": "fas fa-person-drowning",
  "fas_person_falling_burst": "fas fa-person-falling-burst",
  "fas_person_falling": "fas fa-person-falling",
  "fas_person_half_dress": "fas fa-person-half-dress",
  "fas_person_harassing": "fas fa-person-harassing",
  "fas_person_hiking": "fas fa-person-hiking",
  "fas_person_military_pointing": "fas fa-person-military-pointing",
  "fas_person_military_rifle": "fas fa-person-military-rifle",
  "fas_person_military_to_person": "fas fa-person-military-to-person",
  "fas_person_praying": "fas fa-person-praying",
  "fas_person_pregnant": "fas fa-person-pregnant",
  "fas_person_rays": "fas fa-person-rays",
  "fas_person_rifle": "fas fa-person-rifle",
  "fas_person_running": "fas fa-person-running",
  "fas_person_shelter": "fas fa-person-shelter",
  "fas_person_skating": "fas fa-person-skating",
  "fas_person_skiing_nordic": "fas fa-person-skiing-nordic",
  "fas_person_skiing": "fas fa-person-skiing",
  "fas_person_snowboarding": "fas fa-person-snowboarding",
  "fas_person_swimming": "fas fa-person-swimming",
  "fas_person_through_window": "fas fa-person-through-window",
  "fas_person_walking_arrow_loop_left": "fas fa-person-walking-arrow-loop-left",
  "fas_person_walking_arrow_right": "fas fa-person-walking-arrow-right",
  "fas_person_walking_dashed_line_arrow_right": "fas fa-person-walking-dashed-line-arrow-right",
  "fas_person_walking_luggage": "fas fa-person-walking-luggage",
  "fas_person_walking_with_cane": "fas fa-person-walking-with-cane",
  "fas_person_walking": "fas fa-person-walking",
  "fas_person": "fas fa-person",
  "fas_peseta_sign": "fas fa-peseta-sign",
  "fas_peso_sign": "fas fa-peso-sign",
  "fas_phone_flip": "fas fa-phone-flip",
  "fas_phone_slash": "fas fa-phone-slash",
  "fas_phone_volume": "fas fa-phone-volume",
  "fas_phone": "fas fa-phone",
  "fas_photo_film": "fas fa-photo-film",
  "fas_piggy_bank": "fas fa-piggy-bank",
  "fas_pills": "fas fa-pills",
  "fas_pizza_slice": "fas fa-pizza-slice",
  "fas_place_of_worship": "fas fa-place-of-worship",
  "fas_plane_arrival": "fas fa-plane-arrival",
  "fas_plane_circle_check": "fas fa-plane-circle-check",
  "fas_plane_circle_exclamation": "fas fa-plane-circle-exclamation",
  "fas_plane_circle_xmark": "fas fa-plane-circle-xmark",
  "fas_plane_departure": "fas fa-plane-departure",
  "fas_plane_lock": "fas fa-plane-lock",
  "fas_plane_slash": "fas fa-plane-slash",
  "fas_plane_up": "fas fa-plane-up",
  "fas_plane": "fas fa-plane",
  "fas_plant_wilt": "fas fa-plant-wilt",
  "fas_plate_wheat": "fas fa-plate-wheat",
  "fas_play": "fas fa-play",
  "fas_plug_circle_bolt": "fas fa-plug-circle-bolt",
  "fas_plug_circle_check": "fas fa-plug-circle-check",
  "fas_plug_circle_exclamation": "fas fa-plug-circle-exclamation",
  "fas_plug_circle_minus": "fas fa-plug-circle-minus",
  "fas_plug_circle_plus": "fas fa-plug-circle-plus",
  "fas_plug_circle_xmark": "fas fa-plug-circle-xmark",
  "fas_plug": "fas fa-plug",
  "fas_plus_minus": "fas fa-plus-minus",
  "fas_plus": "fas fa-plus",
  "fas_podcast": "fas fa-podcast",
  "fas_poo_storm": "fas fa-poo-storm",
  "fas_poo": "fas fa-poo",
  "fas_poop": "fas fa-poop",
  "fas_power_off": "fas fa-power-off",
  "fas_prescription_bottle_medical": "fas fa-prescription-bottle-medical",
  "fas_prescription_bottle": "fas fa-prescription-bottle",
  "fas_prescription": "fas fa-prescription",
  "fas_print": "fas fa-print",
  "fas_pump_medical": "fas fa-pump-medical",
  "fas_pump_soap": "fas fa-pump-soap",
  "fas_puzzle_piece": "fas fa-puzzle-piece",
  "fas_q": "fas fa-q",
  "fas_qrcode": "fas fa-qrcode",
  "fas_question": "fas fa-question",
  "fas_quote_left": "fas fa-quote-left",
  "fas_quote_right": "fas fa-quote-right",
  "fas_r": "fas fa-r",
  "fas_radiation": "fas fa-radiation",
  "fas_radio": "fas fa-radio",
  "fas_rainbow": "fas fa-rainbow",
  "fas_ranking_star": "fas fa-ranking-star",
  "fas_receipt": "fas fa-receipt",
  "fas_record_vinyl": "fas fa-record-vinyl",
  "fas_rectangle_ad": "fas fa-rectangle-ad",
  "fas_rectangle_list": "fas fa-rectangle-list",
  "fas_rectangle_xmark": "fas fa-rectangle-xmark",
  "fas_recycle": "fas fa-recycle",
  "fas_registered": "fas fa-registered",
  "fas_repeat": "fas fa-repeat",
  "fas_reply_all": "fas fa-reply-all",
  "fas_reply": "fas fa-reply",
  "fas_republican": "fas fa-republican",
  "fas_restroom": "fas fa-restroom",
  "fas_retweet": "fas fa-retweet",
  "fas_ribbon": "fas fa-ribbon",
  "fas_right_from_bracket": "fas fa-right-from-bracket",
  "fas_right_left": "fas fa-right-left",
  "fas_right_long": "fas fa-right-long",
  "fas_right_to_bracket": "fas fa-right-to-bracket",
  "fas_ring": "fas fa-ring",
  "fas_road_barrier": "fas fa-road-barrier",
  "fas_road_bridge": "fas fa-road-bridge",
  "fas_road_circle_check": "fas fa-road-circle-check",
  "fas_road_circle_exclamation": "fas fa-road-circle-exclamation",
  "fas_road_circle_xmark": "fas fa-road-circle-xmark",
  "fas_road_lock": "fas fa-road-lock",
  "fas_road_spikes": "fas fa-road-spikes",
  "fas_road": "fas fa-road",
  "fas_robot": "fas fa-robot",
  "fas_rocket": "fas fa-rocket",
  "fas_rotate_left": "fas fa-rotate-left",
  "fas_rotate_right": "fas fa-rotate-right",
  "fas_rotate": "fas fa-rotate",
  "fas_route": "fas fa-route",
  "fas_rss": "fas fa-rss",
  "fas_ruble_sign": "fas fa-ruble-sign",
  "fas_rug": "fas fa-rug",
  "fas_ruler_combined": "fas fa-ruler-combined",
  "fas_ruler_horizontal": "fas fa-ruler-horizontal",
  "fas_ruler_vertical": "fas fa-ruler-vertical",
  "fas_ruler": "fas fa-ruler",
  "fas_rupee_sign": "fas fa-rupee-sign",
  "fas_rupiah_sign": "fas fa-rupiah-sign",
  "fas_s": "fas fa-s",
  "fas_sack_dollar": "fas fa-sack-dollar",
  "fas_sack_xmark": "fas fa-sack-xmark",
  "fas_sailboat": "fas fa-sailboat",
  "fas_satellite_dish": "fas fa-satellite-dish",
  "fas_satellite": "fas fa-satellite",
  "fas_scale_balanced": "fas fa-scale-balanced",
  "fas_scale_unbalanced_flip": "fas fa-scale-unbalanced-flip",
  "fas_scale_unbalanced": "fas fa-scale-unbalanced",
  "fas_school_circle_check": "fas fa-school-circle-check",
  "fas_school_circle_exclamation": "fas fa-school-circle-exclamation",
  "fas_school_circle_xmark": "fas fa-school-circle-xmark",
  "fas_school_flag": "fas fa-school-flag",
  "fas_school_lock": "fas fa-school-lock",
  "fas_school": "fas fa-school",
  "fas_scissors": "fas fa-scissors",
  "fas_screwdriver_wrench": "fas fa-screwdriver-wrench",
  "fas_screwdriver": "fas fa-screwdriver",
  "fas_scroll_torah": "fas fa-scroll-torah",
  "fas_scroll": "fas fa-scroll",
  "fas_sd_card": "fas fa-sd-card",
  "fas_section": "fas fa-section",
  "fas_seedling": "fas fa-seedling",
  "fas_server": "fas fa-server",
  "fas_shapes": "fas fa-shapes",
  "fas_share_from_square": "fas fa-share-from-square",
  "fas_share_nodes": "fas fa-share-nodes",
  "fas_share": "fas fa-share",
  "fas_sheet_plastic": "fas fa-sheet-plastic",
  "fas_shekel_sign": "fas fa-shekel-sign",
  "fas_shield_cat": "fas fa-shield-cat",
  "fas_shield_dog": "fas fa-shield-dog",
  "fas_shield_halved": "fas fa-shield-halved",
  "fas_shield_heart": "fas fa-shield-heart",
  "fas_shield_virus": "fas fa-shield-virus",
  "fas_shield": "fas fa-shield",
  "fas_ship": "fas fa-ship",
  "fas_shirt": "fas fa-shirt",
  "fas_shoe_prints": "fas fa-shoe-prints",
  "fas_shop_lock": "fas fa-shop-lock",
  "fas_shop_slash": "fas fa-shop-slash",
  "fas_shop": "fas fa-shop",
  "fas_shower": "fas fa-shower",
  "fas_shrimp": "fas fa-shrimp",
  "fas_shuffle": "fas fa-shuffle",
  "fas_shuttle_space": "fas fa-shuttle-space",
  "fas_sign_hanging": "fas fa-sign-hanging",
  "fas_signal": "fas fa-signal",
  "fas_signature": "fas fa-signature",
  "fas_signs_post": "fas fa-signs-post",
  "fas_sim_card": "fas fa-sim-card",
  "fas_sink": "fas fa-sink",
  "fas_sitemap": "fas fa-sitemap",
  "fas_skull_crossbones": "fas fa-skull-crossbones",
  "fas_skull": "fas fa-skull",
  "fas_slash": "fas fa-slash",
  "fas_sleigh": "fas fa-sleigh",
  "fas_sliders": "fas fa-sliders",
  "fas_smog": "fas fa-smog",
  "fas_smoking": "fas fa-smoking",
  "fas_snowflake": "fas fa-snowflake",
  "fas_snowman": "fas fa-snowman",
  "fas_snowplow": "fas fa-snowplow",
  "fas_soap": "fas fa-soap",
  "fas_socks": "fas fa-socks",
  "fas_solar_panel": "fas fa-solar-panel",
  "fas_sort_down": "fas fa-sort-down",
  "fas_sort_up": "fas fa-sort-up",
  "fas_sort": "fas fa-sort",
  "fas_spa": "fas fa-spa",
  "fas_spaghetti_monster_flying": "fas fa-spaghetti-monster-flying",
  "fas_spell_check": "fas fa-spell-check",
  "fas_spider": "fas fa-spider",
  "fas_spinner": "fas fa-spinner",
  "fas_splotch": "fas fa-splotch",
  "fas_spoon": "fas fa-spoon",
  "fas_spray_can_sparkles": "fas fa-spray-can-sparkles",
  "fas_spray_can": "fas fa-spray-can",
  "fas_square_arrow_up_right": "fas fa-square-arrow-up-right",
  "fas_square_caret_down": "fas fa-square-caret-down",
  "fas_square_caret_left": "fas fa-square-caret-left",
  "fas_square_caret_right": "fas fa-square-caret-right",
  "fas_square_caret_up": "fas fa-square-caret-up",
  "fas_square_check": "fas fa-square-check",
  "fas_square_envelope": "fas fa-square-envelope",
  "fas_square_full": "fas fa-square-full",
  "fas_square_h": "fas fa-square-h",
  "fas_square_minus": "fas fa-square-minus",
  "fas_square_nfi": "fas fa-square-nfi",
  "fas_square_parking": "fas fa-square-parking",
  "fas_square_pen": "fas fa-square-pen",
  "fas_square_person_confined": "fas fa-square-person-confined",
  "fas_square_phone_flip": "fas fa-square-phone-flip",
  "fas_square_phone": "fas fa-square-phone",
  "fas_square_plus": "fas fa-square-plus",
  "fas_square_poll_horizontal": "fas fa-square-poll-horizontal",
  "fas_square_poll_vertical": "fas fa-square-poll-vertical",
  "fas_square_root_variable": "fas fa-square-root-variable",
  "fas_square_rss": "fas fa-square-rss",
  "fas_square_share_nodes": "fas fa-square-share-nodes",
  "fas_square_up_right": "fas fa-square-up-right",
  "fas_square_virus": "fas fa-square-virus",
  "fas_square_xmark": "fas fa-square-xmark",
  "fas_square": "fas fa-square",
  "fas_staff_snake": "fas fa-staff-snake",
  "fas_stairs": "fas fa-stairs",
  "fas_stamp": "fas fa-stamp",
  "fas_stapler": "fas fa-stapler",
  "fas_star_and_crescent": "fas fa-star-and-crescent",
  "fas_star_half_stroke": "fas fa-star-half-stroke",
  "fas_star_half": "fas fa-star-half",
  "fas_star_of_david": "fas fa-star-of-david",
  "fas_star_of_life": "fas fa-star-of-life",
  "fas_star": "fas fa-star",
  "fas_sterling_sign": "fas fa-sterling-sign",
  "fas_stethoscope": "fas fa-stethoscope",
  "fas_stop": "fas fa-stop",
  "fas_stopwatch_20": "fas fa-stopwatch-20",
  "fas_stopwatch": "fas fa-stopwatch",
  "fas_store_slash": "fas fa-store-slash",
  "fas_store": "fas fa-store",
  "fas_street_view": "fas fa-street-view",
  "fas_strikethrough": "fas fa-strikethrough",
  "fas_stroopwafel": "fas fa-stroopwafel",
  "fas_subscript": "fas fa-subscript",
  "fas_suitcase_medical": "fas fa-suitcase-medical",
  "fas_suitcase_rolling": "fas fa-suitcase-rolling",
  "fas_suitcase": "fas fa-suitcase",
  "fas_sun_plant_wilt": "fas fa-sun-plant-wilt",
  "fas_sun": "fas fa-sun",
  "fas_superscript": "fas fa-superscript",
  "fas_swatchbook": "fas fa-swatchbook",
  "fas_synagogue": "fas fa-synagogue",
  "fas_syringe": "fas fa-syringe",
  "fas_t": "fas fa-t",
  "fas_table_cells_column_lock": "fas fa-table-cells-column-lock",
  "fas_table_cells_large": "fas fa-table-cells-large",
  "fas_table_cells_row_lock": "fas fa-table-cells-row-lock",
  "fas_table_cells": "fas fa-table-cells",
  "fas_table_columns": "fas fa-table-columns",
  "fas_table_list": "fas fa-table-list",
  "fas_table_tennis_paddle_ball": "fas fa-table-tennis-paddle-ball",
  "fas_table": "fas fa-table",
  "fas_tablet_button": "fas fa-tablet-button",
  "fas_tablet_screen_button": "fas fa-tablet-screen-button",
  "fas_tablet": "fas fa-tablet",
  "fas_tablets": "fas fa-tablets",
  "fas_tachograph_digital": "fas fa-tachograph-digital",
  "fas_tag": "fas fa-tag",
  "fas_tags": "fas fa-tags",
  "fas_tape": "fas fa-tape",
  "fas_tarp_droplet": "fas fa-tarp-droplet",
  "fas_tarp": "fas fa-tarp",
  "fas_taxi": "fas fa-taxi",
  "fas_teeth_open": "fas fa-teeth-open",
  "fas_teeth": "fas fa-teeth",
  "fas_temperature_arrow_down": "fas fa-temperature-arrow-down",
  "fas_temperature_arrow_up": "fas fa-temperature-arrow-up",
  "fas_temperature_empty": "fas fa-temperature-empty",
  "fas_temperature_full": "fas fa-temperature-full",
  "fas_temperature_half": "fas fa-temperature-half",
  "fas_temperature_high": "fas fa-temperature-high",
  "fas_temperature_low": "fas fa-temperature-low",
  "fas_temperature_quarter": "fas fa-temperature-quarter",
  "fas_temperature_three_quarters": "fas fa-temperature-three-quarters",
  "fas_tenge_sign": "fas fa-tenge-sign",
  "fas_tent_arrow_down_to_line": "fas fa-tent-arrow-down-to-line",
  "fas_tent_arrow_left_right": "fas fa-tent-arrow-left-right",
  "fas_tent_arrow_turn_left": "fas fa-tent-arrow-turn-left",
  "fas_tent_arrows_down": "fas fa-tent-arrows-down",
  "fas_tent": "fas fa-tent",
  "fas_tents": "fas fa-tents",
  "fas_terminal": "fas fa-terminal",
  "fas_text_height": "fas fa-text-height",
  "fas_text_slash": "fas fa-text-slash",
  "fas_text_width": "fas fa-text-width",
  "fas_thermometer": "fas fa-thermometer",
  "fas_thumbs_down": "fas fa-thumbs-down",
  "fas_thumbs_up": "fas fa-thumbs-up",
  "fas_thumbtack": "fas fa-thumbtack",
  "fas_ticket_simple": "fas fa-ticket-simple",
  "fas_ticket": "fas fa-ticket",
  "fas_timeline": "fas fa-timeline",
  "fas_toggle_off": "fas fa-toggle-off",
  "fas_toggle_on": "fas fa-toggle-on",
  "fas_toilet_paper_slash": "fas fa-toilet-paper-slash",
  "fas_toilet_paper": "fas fa-toilet-paper",
  "fas_toilet_portable": "fas fa-toilet-portable",
  "fas_toilet": "fas fa-toilet",
  "fas_toilets_portable": "fas fa-toilets-portable",
  "fas_toolbox": "fas fa-toolbox",
  "fas_tooth": "fas fa-tooth",
  "fas_torii_gate": "fas fa-torii-gate",
  "fas_tornado": "fas fa-tornado",
  "fas_tower_broadcast": "fas fa-tower-broadcast",
  "fas_tower_cell": "fas fa-tower-cell",
  "fas_tower_observation": "fas fa-tower-observation",
  "fas_tractor": "fas fa-tractor",
  "fas_trademark": "fas fa-trademark",
  "fas_traffic_light": "fas fa-traffic-light",
  "fas_trailer": "fas fa-trailer",
  "fas_train_subway": "fas fa-train-subway",
  "fas_train_tram": "fas fa-train-tram",
  "fas_train": "fas fa-train",
  "fas_transgender": "fas fa-transgender",
  "fas_trash_arrow_up": "fas fa-trash-arrow-up",
  "fas_trash_can_arrow_up": "fas fa-trash-can-arrow-up",
  "fas_trash_can": "fas fa-trash-can",
  "fas_trash": "fas fa-trash",
  "fas_tree_city": "fas fa-tree-city",
  "fas_tree": "fas fa-tree",
  "fas_triangle_exclamation": "fas fa-triangle-exclamation",
  "fas_trophy": "fas fa-trophy",
  "fas_trowel_bricks": "fas fa-trowel-bricks",
  "fas_trowel": "fas fa-trowel",
  "fas_truck_arrow_right": "fas fa-truck-arrow-right",
  "fas_truck_droplet": "fas fa-truck-droplet",
  "fas_truck_fast": "fas fa-truck-fast",
  "fas_truck_field_un": "fas fa-truck-field-un",
  "fas_truck_field": "fas fa-truck-field",
  "fas_truck_front": "fas fa-truck-front",
  "fas_truck_medical": "fas fa-truck-medical",
  "fas_truck_monster": "fas fa-truck-monster",
  "fas_truck_moving": "fas fa-truck-moving",
  "fas_truck_pickup": "fas fa-truck-pickup",
  "fas_truck_plane": "fas fa-truck-plane",
  "fas_truck_ramp_box": "fas fa-truck-ramp-box",
  "fas_truck": "fas fa-truck",
  "fas_tty": "fas fa-tty",
  "fas_turkish_lira_sign": "fas fa-turkish-lira-sign",
  "fas_turn_down": "fas fa-turn-down",
  "fas_turn_up": "fas fa-turn-up",
  "fas_tv": "fas fa-tv",
  "fas_u": "fas fa-u",
  "fas_umbrella_beach": "fas fa-umbrella-beach",
  "fas_umbrella": "fas fa-umbrella",
  "fas_underline": "fas fa-underline",
  "fas_universal_access": "fas fa-universal-access",
  "fas_unlock_keyhole": "fas fa-unlock-keyhole",
  "fas_unlock": "fas fa-unlock",
  "fas_up_down_left_right": "fas fa-up-down-left-right",
  "fas_up_down": "fas fa-up-down",
  "fas_up_long": "fas fa-up-long",
  "fas_up_right_and_down_left_from_center": "fas fa-up-right-and-down-left-from-center",
  "fas_up_right_from_square": "fas fa-up-right-from-square",
  "fas_upload": "fas fa-upload",
  "fas_user_astronaut": "fas fa-user-astronaut",
  "fas_user_check": "fas fa-user-check",
  "fas_user_clock": "fas fa-user-clock",
  "fas_user_doctor": "fas fa-user-doctor",
  "fas_user_gear": "fas fa-user-gear",
  "fas_user_graduate": "fas fa-user-graduate",
  "fas_user_group": "fas fa-user-group",
  "fas_user_injured": "fas fa-user-injured",
  "fas_user_large_slash": "fas fa-user-large-slash",
  "fas_user_large": "fas fa-user-large",
  "fas_user_lock": "fas fa-user-lock",
  "fas_user_minus": "fas fa-user-minus",
  "fas_user_ninja": "fas fa-user-ninja",
  "fas_user_nurse": "fas fa-user-nurse",
  "fas_user_pen": "fas fa-user-pen",
  "fas_user_plus": "fas fa-user-plus",
  "fas_user_secret": "fas fa-user-secret",
  "fas_user_shield": "fas fa-user-shield",
  "fas_user_slash": "fas fa-user-slash",
  "fas_user_tag": "fas fa-user-tag",
  "fas_user_tie": "fas fa-user-tie",
  "fas_user_xmark": "fas fa-user-xmark",
  "fas_user": "fas fa-user",
  "fas_users_between_lines": "fas fa-users-between-lines",
  "fas_users_gear": "fas fa-users-gear",
  "fas_users_line": "fas fa-users-line",
  "fas_users_rays": "fas fa-users-rays",
  "fas_users_rectangle": "fas fa-users-rectangle",
  "fas_users_slash": "fas fa-users-slash",
  "fas_users_viewfinder": "fas fa-users-viewfinder",
  "fas_users": "fas fa-users",
  "fas_utensils": "fas fa-utensils",
  "fas_v": "fas fa-v",
  "fas_van_shuttle": "fas fa-van-shuttle",
  "fas_vault": "fas fa-vault",
  "fas_vector_square": "fas fa-vector-square",
  "fas_venus_double": "fas fa-venus-double",
  "fas_venus_mars": "fas fa-venus-mars",
  "fas_venus": "fas fa-venus",
  "fas_vest_patches": "fas fa-vest-patches",
  "fas_vest": "fas fa-vest",
  "fas_vial_circle_check": "fas fa-vial-circle-check",
  "fas_vial_virus": "fas fa-vial-virus",
  "fas_vial": "fas fa-vial",
  "fas_vials": "fas fa-vials",
  "fas_video_slash": "fas fa-video-slash",
  "fas_video": "fas fa-video",
  "fas_vihara": "fas fa-vihara",
  "fas_virus_covid_slash": "fas fa-virus-covid-slash",
  "fas_virus_covid": "fas fa-virus-covid",
  "fas_virus_slash": "fas fa-virus-slash",
  "fas_virus": "fas fa-virus",
  "fas_viruses": "fas fa-viruses",
  "fas_voicemail": "fas fa-voicemail",
  "fas_volcano": "fas fa-volcano",
  "fas_volleyball": "fas fa-volleyball",
  "fas_volume_high": "fas fa-volume-high",
  "fas_volume_low": "fas fa-volume-low",
  "fas_volume_off": "fas fa-volume-off",
  "fas_volume_xmark": "fas fa-volume-xmark",
  "fas_vr_cardboard": "fas fa-vr-cardboard",
  "fas_w": "fas fa-w",
  "fas_walkie_talkie": "fas fa-walkie-talkie",
  "fas_wallet": "fas fa-wallet",
  "fas_wand_magic_sparkles": "fas fa-wand-magic-sparkles",
  "fas_wand_magic": "fas fa-wand-magic",
  "fas_wand_sparkles": "fas fa-wand-sparkles",
  "fas_warehouse": "fas fa-warehouse",
  "fas_water_ladder": "fas fa-water-ladder",
  "fas_water": "fas fa-water",
  "fas_wave_square": "fas fa-wave-square",
  "fas_weight_hanging": "fas fa-weight-hanging",
  "fas_weight_scale": "fas fa-weight-scale",
  "fas_wheat_awn_circle_exclamation": "fas fa-wheat-awn-circle-exclamation",
  "fas_wheat_awn": "fas fa-wheat-awn",
  "fas_wheelchair_move": "fas fa-wheelchair-move",
  "fas_wheelchair": "fas fa-wheelchair",
  "fas_whiskey_glass": "fas fa-whiskey-glass",
  "fas_wifi": "fas fa-wifi",
  "fas_wind": "fas fa-wind",
  "fas_window_maximize": "fas fa-window-maximize",
  "fas_window_minimize": "fas fa-window-minimize",
  "fas_window_restore": "fas fa-window-restore",
  "fas_wine_bottle": "fas fa-wine-bottle",
  "fas_wine_glass_empty": "fas fa-wine-glass-empty",
  "fas_wine_glass": "fas fa-wine-glass",
  "fas_won_sign": "fas fa-won-sign",
  "fas_worm": "fas fa-worm",
  "fas_wrench": "fas fa-wrench",
  "fas_x_ray": "fas fa-x-ray",
  "fas_x": "fas fa-x",
  "fas_xmark": "fas fa-xmark",
  "fas_xmarks_lines": "fas fa-xmarks-lines",
  "fas_y": "fas fa-y",
  "fas_yen_sign": "fas fa-yen-sign",
  "fas_yin_yang": "fas fa-yin-yang",
  "fas_z": "fas fa-z",
  //FONT-AWESOME REGULAR
  "far_address_book": "far fa-address-book",
  "far_address_card": "far fa-address-card",
  "far_bell_slash": "far fa-bell-slash",
  "far_bell": "far fa-bell",
  "far_bookmark": "far fa-bookmark",
  "far_building": "far fa-building",
  "far_calendar_check": "far fa-calendar-check",
  "far_calendar_days": "far fa-calendar-days",
  "far_calendar_minus": "far fa-calendar-minus",
  "far_calendar_plus": "far fa-calendar-plus",
  "far_calendar_xmark": "far fa-calendar-xmark",
  "far_calendar": "far fa-calendar",
  "far_chart_bar": "far fa-chart-bar",
  "far_chess_bishop": "far fa-chess-bishop",
  "far_chess_king": "far fa-chess-king",
  "far_chess_knight": "far fa-chess-knight",
  "far_chess_pawn": "far fa-chess-pawn",
  "far_chess_queen": "far fa-chess-queen",
  "far_chess_rook": "far fa-chess-rook",
  "far_circle_check": "far fa-circle-check",
  "far_circle_dot": "far fa-circle-dot",
  "far_circle_down": "far fa-circle-down",
  "far_circle_left": "far fa-circle-left",
  "far_circle_pause": "far fa-circle-pause",
  "far_circle_play": "far fa-circle-play",
  "far_circle_question": "far fa-circle-question",
  "far_circle_right": "far fa-circle-right",
  "far_circle_stop": "far fa-circle-stop",
  "far_circle_up": "far fa-circle-up",
  "far_circle_user": "far fa-circle-user",
  "far_circle_xmark": "far fa-circle-xmark",
  "far_circle": "far fa-circle",
  "far_clipboard": "far fa-clipboard",
  "far_clock": "far fa-clock",
  "far_clone": "far fa-clone",
  "far_closed_captioning": "far fa-closed-captioning",
  "far_comment_dots": "far fa-comment-dots",
  "far_comment": "far fa-comment",
  "far_comments": "far fa-comments",
  "far_compass": "far fa-compass",
  "far_copy": "far fa-copy",
  "far_copyright": "far fa-copyright",
  "far_credit_card": "far fa-credit-card",
  "far_envelope_open": "far fa-envelope-open",
  "far_envelope": "far fa-envelope",
  "far_eye_slash": "far fa-eye-slash",
  "far_eye": "far fa-eye",
  "far_face_angry": "far fa-face-angry",
  "far_face_dizzy": "far fa-face-dizzy",
  "far_face_flushed": "far fa-face-flushed",
  "far_face_frown_open": "far fa-face-frown-open",
  "far_face_frown": "far fa-face-frown",
  "far_face_grimace": "far fa-face-grimace",
  "far_face_grin_beam_sweat": "far fa-face-grin-beam-sweat",
  "far_face_grin_beam": "far fa-face-grin-beam",
  "far_face_grin_hearts": "far fa-face-grin-hearts",
  "far_face_grin_squint_tears": "far fa-face-grin-squint-tears",
  "far_face_grin_squint": "far fa-face-grin-squint",
  "far_face_grin_stars": "far fa-face-grin-stars",
  "far_face_grin_tears": "far fa-face-grin-tears",
  "far_face_grin_tongue_squint": "far fa-face-grin-tongue-squint",
  "far_face_grin_tongue_wink": "far fa-face-grin-tongue-wink",
  "far_face_grin_tongue": "far fa-face-grin-tongue",
  "far_face_grin_wide": "far fa-face-grin-wide",
  "far_face_grin_wink": "far fa-face-grin-wink",
  "far_face_grin": "far fa-face-grin",
  "far_face_kiss_beam": "far fa-face-kiss-beam",
  "far_face_kiss_wink_heart": "far fa-face-kiss-wink-heart",
  "far_face_kiss": "far fa-face-kiss",
  "far_face_laugh_beam": "far fa-face-laugh-beam",
  "far_face_laugh_squint": "far fa-face-laugh-squint",
  "far_face_laugh_wink": "far fa-face-laugh-wink",
  "far_face_laugh": "far fa-face-laugh",
  "far_face_meh_blank": "far fa-face-meh-blank",
  "far_face_meh": "far fa-face-meh",
  "far_face_rolling_eyes": "far fa-face-rolling-eyes",
  "far_face_sad_cry": "far fa-face-sad-cry",
  "far_face_sad_tear": "far fa-face-sad-tear",
  "far_face_smile_beam": "far fa-face-smile-beam",
  "far_face_smile_wink": "far fa-face-smile-wink",
  "far_face_smile": "far fa-face-smile",
  "far_face_surprise": "far fa-face-surprise",
  "far_face_tired": "far fa-face-tired",
  "far_file_audio": "far fa-file-audio",
  "far_file_code": "far fa-file-code",
  "far_file_excel": "far fa-file-excel",
  "far_file_image": "far fa-file-image",
  "far_file_lines": "far fa-file-lines",
  "far_file_pdf": "far fa-file-pdf",
  "far_file_powerpoint": "far fa-file-powerpoint",
  "far_file_video": "far fa-file-video",
  "far_file_word": "far fa-file-word",
  "far_file_zipper": "far fa-file-zipper",
  "far_file": "far fa-file",
  "far_flag": "far fa-flag",
  "far_floppy_disk": "far fa-floppy-disk",
  "far_folder_closed": "far fa-folder-closed",
  "far_folder_open": "far fa-folder-open",
  "far_folder": "far fa-folder",
  "far_font_awesome": "far fa-font-awesome",
  "far_futbol": "far fa-futbol",
  "far_gem": "far fa-gem",
  "far_hand_back_fist": "far fa-hand-back-fist",
  "far_hand_lizard": "far fa-hand-lizard",
  "far_hand_peace": "far fa-hand-peace",
  "far_hand_point_down": "far fa-hand-point-down",
  "far_hand_point_left": "far fa-hand-point-left",
  "far_hand_point_right": "far fa-hand-point-right",
  "far_hand_point_up": "far fa-hand-point-up",
  "far_hand_pointer": "far fa-hand-pointer",
  "far_hand_scissors": "far fa-hand-scissors",
  "far_hand_spock": "far fa-hand-spock",
  "far_hand": "far fa-hand",
  "far_handshake": "far fa-handshake",
  "far_hard_drive": "far fa-hard-drive",
  "far_heart": "far fa-heart",
  "far_hospital": "far fa-hospital",
  "far_hourglass_half": "far fa-hourglass-half",
  "far_hourglass": "far fa-hourglass",
  "far_id_badge": "far fa-id-badge",
  "far_id_card": "far fa-id-card",
  "far_image": "far fa-image",
  "far_images": "far fa-images",
  "far_keyboard": "far fa-keyboard",
  "far_lemon": "far fa-lemon",
  "far_life_ring": "far fa-life-ring",
  "far_lightbulb": "far fa-lightbulb",
  "far_map": "far fa-map",
  "far_message": "far fa-message",
  "far_money_bill_1": "far fa-money-bill-1",
  "far_moon": "far fa-moon",
  "far_newspaper": "far fa-newspaper",
  "far_note_sticky": "far fa-note-sticky",
  "far_object_group": "far fa-object-group",
  "far_object_ungroup": "far fa-object-ungroup",
  "far_paper_plane": "far fa-paper-plane",
  "far_paste": "far fa-paste",
  "far_pen_to_square": "far fa-pen-to-square",
  "far_rectangle_list": "far fa-rectangle-list",
  "far_rectangle_xmark": "far fa-rectangle-xmark",
  "far_registered": "far fa-registered",
  "far_share_from_square": "far fa-share-from-square",
  "far_snowflake": "far fa-snowflake",
  "far_square_caret_down": "far fa-square-caret-down",
  "far_square_caret_left": "far fa-square-caret-left",
  "far_square_caret_right": "far fa-square-caret-right",
  "far_square_caret_up": "far fa-square-caret-up",
  "far_square_check": "far fa-square-check",
  "far_square_full": "far fa-square-full",
  "far_square_minus": "far fa-square-minus",
  "far_square_plus": "far fa-square-plus",
  "far_square": "far fa-square",
  "far_star_half_stroke": "far fa-star-half-stroke",
  "far_star_half": "far fa-star-half",
  "far_star": "far fa-star",
  "far_sun": "far fa-sun",
  "far_thumbs_down": "far fa-thumbs-down",
  "far_thumbs_up": "far fa-thumbs-up",
  "far_trash_can": "far fa-trash-can",
  "far_user": "far fa-user",
  "far_window_maximize": "far fa-window-maximize",
  "far_window_minimize": "far fa-window-minimize",
  "far_window_restore": "far fa-window-restore",
  //FONT-AWESOME BRANDS
  "fab_42_group": "fab fa-42-group",
  "fab_500px": "fab fa-500px",
  "fab_accessible_icon": "fab fa-accessible-icon",
  "fab_accusoft": "fab fa-accusoft",
  "fab_adn": "fab fa-adn",
  "fab_adversal": "fab fa-adversal",
  "fab_affiliatetheme": "fab fa-affiliatetheme",
  "fab_airbnb": "fab fa-airbnb",
  "fab_algolia": "fab fa-algolia",
  "fab_alipay": "fab fa-alipay",
  "fab_amazon_pay": "fab fa-amazon-pay",
  "fab_amazon": "fab fa-amazon",
  "fab_amilia": "fab fa-amilia",
  "fab_android": "fab fa-android",
  "fab_angellist": "fab fa-angellist",
  "fab_angrycreative": "fab fa-angrycreative",
  "fab_angular": "fab fa-angular",
  "fab_app_store_ios": "fab fa-app-store-ios",
  "fab_app_store": "fab fa-app-store",
  "fab_apper": "fab fa-apper",
  "fab_apple_pay": "fab fa-apple-pay",
  "fab_apple": "fab fa-apple",
  "fab_artstation": "fab fa-artstation",
  "fab_asymmetrik": "fab fa-asymmetrik",
  "fab_atlassian": "fab fa-atlassian",
  "fab_audible": "fab fa-audible",
  "fab_autoprefixer": "fab fa-autoprefixer",
  "fab_avianex": "fab fa-avianex",
  "fab_aviato": "fab fa-aviato",
  "fab_aws": "fab fa-aws",
  "fab_bandcamp": "fab fa-bandcamp",
  "fab_battle_net": "fab fa-battle-net",
  "fab_behance": "fab fa-behance",
  "fab_bilibili": "fab fa-bilibili",
  "fab_bimobject": "fab fa-bimobject",
  "fab_bitbucket": "fab fa-bitbucket",
  "fab_bitcoin": "fab fa-bitcoin",
  "fab_bity": "fab fa-bity",
  "fab_black_tie": "fab fa-black-tie",
  "fab_blackberry": "fab fa-blackberry",
  "fab_blogger_b": "fab fa-blogger-b",
  "fab_blogger": "fab fa-blogger",
  "fab_bluesky": "fab fa-bluesky",
  "fab_bluetooth_b": "fab fa-bluetooth-b",
  "fab_bluetooth": "fab fa-bluetooth",
  "fab_bootstrap": "fab fa-bootstrap",
  "fab_bots": "fab fa-bots",
  "fab_brave_reverse": "fab fa-brave-reverse",
  "fab_brave": "fab fa-brave",
  "fab_btc": "fab fa-btc",
  "fab_buffer": "fab fa-buffer",
  "fab_buromobelexperte": "fab fa-buromobelexperte",
  "fab_buy_n_large": "fab fa-buy-n-large",
  "fab_buysellads": "fab fa-buysellads",
  "fab_canadian_maple_leaf": "fab fa-canadian-maple-leaf",
  "fab_cc_amazon_pay": "fab fa-cc-amazon-pay",
  "fab_cc_amex": "fab fa-cc-amex",
  "fab_cc_apple_pay": "fab fa-cc-apple-pay",
  "fab_cc_diners_club": "fab fa-cc-diners-club",
  "fab_cc_discover": "fab fa-cc-discover",
  "fab_cc_jcb": "fab fa-cc-jcb",
  "fab_cc_mastercard": "fab fa-cc-mastercard",
  "fab_cc_paypal": "fab fa-cc-paypal",
  "fab_cc_stripe": "fab fa-cc-stripe",
  "fab_cc_visa": "fab fa-cc-visa",
  "fab_centercode": "fab fa-centercode",
  "fab_centos": "fab fa-centos",
  "fab_chrome": "fab fa-chrome",
  "fab_chromecast": "fab fa-chromecast",
  "fab_cloudflare": "fab fa-cloudflare",
  "fab_cloudscale": "fab fa-cloudscale",
  "fab_cloudsmith": "fab fa-cloudsmith",
  "fab_cloudversify": "fab fa-cloudversify",
  "fab_cmplid": "fab fa-cmplid",
  "fab_codepen": "fab fa-codepen",
  "fab_codiepie": "fab fa-codiepie",
  "fab_confluence": "fab fa-confluence",
  "fab_connectdevelop": "fab fa-connectdevelop",
  "fab_contao": "fab fa-contao",
  "fab_cotton_bureau": "fab fa-cotton-bureau",
  "fab_cpanel": "fab fa-cpanel",
  "fab_creative_commons_by": "fab fa-creative-commons-by",
  "fab_creative_commons_nc_eu": "fab fa-creative-commons-nc-eu",
  "fab_creative_commons_nc_jp": "fab fa-creative-commons-nc-jp",
  "fab_creative_commons_nc": "fab fa-creative-commons-nc",
  "fab_creative_commons_nd": "fab fa-creative-commons-nd",
  "fab_creative_commons_pd_alt": "fab fa-creative-commons-pd-alt",
  "fab_creative_commons_pd": "fab fa-creative-commons-pd",
  "fab_creative_commons_remix": "fab fa-creative-commons-remix",
  "fab_creative_commons_sa": "fab fa-creative-commons-sa",
  "fab_creative_commons_sampling_plus": "fab fa-creative-commons-sampling-plus",
  "fab_creative_commons_sampling": "fab fa-creative-commons-sampling",
  "fab_creative_commons_share": "fab fa-creative-commons-share",
  "fab_creative_commons_zero": "fab fa-creative-commons-zero",
  "fab_creative_commons": "fab fa-creative-commons",
  "fab_critical_role": "fab fa-critical-role",
  "fab_css3_alt": "fab fa-css3-alt",
  "fab_css3": "fab fa-css3",
  "fab_cuttlefish": "fab fa-cuttlefish",
  "fab_d_and_d_beyond": "fab fa-d-and-d-beyond",
  "fab_d_and_d": "fab fa-d-and-d",
  "fab_dailymotion": "fab fa-dailymotion",
  "fab_dashcube": "fab fa-dashcube",
  "fab_debian": "fab fa-debian",
  "fab_deezer": "fab fa-deezer",
  "fab_delicious": "fab fa-delicious",
  "fab_deploydog": "fab fa-deploydog",
  "fab_deskpro": "fab fa-deskpro",
  "fab_dev": "fab fa-dev",
  "fab_deviantart": "fab fa-deviantart",
  "fab_dhl": "fab fa-dhl",
  "fab_diaspora": "fab fa-diaspora",
  "fab_digg": "fab fa-digg",
  "fab_digital_ocean": "fab fa-digital-ocean",
  "fab_discord": "fab fa-discord",
  "fab_discourse": "fab fa-discourse",
  "fab_dochub": "fab fa-dochub",
  "fab_docker": "fab fa-docker",
  "fab_draft2digital": "fab fa-draft2digital",
  "fab_dribbble": "fab fa-dribbble",
  "fab_dropbox": "fab fa-dropbox",
  "fab_drupal": "fab fa-drupal",
  "fab_dyalog": "fab fa-dyalog",
  "fab_earlybirds": "fab fa-earlybirds",
  "fab_ebay": "fab fa-ebay",
  "fab_edge_legacy": "fab fa-edge-legacy",
  "fab_edge": "fab fa-edge",
  "fab_elementor": "fab fa-elementor",
  "fab_ello": "fab fa-ello",
  "fab_ember": "fab fa-ember",
  "fab_empire": "fab fa-empire",
  "fab_envira": "fab fa-envira",
  "fab_erlang": "fab fa-erlang",
  "fab_ethereum": "fab fa-ethereum",
  "fab_etsy": "fab fa-etsy",
  "fab_evernote": "fab fa-evernote",
  "fab_expeditedssl": "fab fa-expeditedssl",
  "fab_facebook_f": "fab fa-facebook-f",
  "fab_facebook_messenger": "fab fa-facebook-messenger",
  "fab_facebook": "fab fa-facebook",
  "fab_fantasy_flight_games": "fab fa-fantasy-flight-games",
  "fab_fedex": "fab fa-fedex",
  "fab_fedora": "fab fa-fedora",
  "fab_figma": "fab fa-figma",
  "fab_firefox_browser": "fab fa-firefox-browser",
  "fab_firefox": "fab fa-firefox",
  "fab_first_order_alt": "fab fa-first-order-alt",
  "fab_first_order": "fab fa-first-order",
  "fab_firstdraft": "fab fa-firstdraft",
  "fab_flickr": "fab fa-flickr",
  "fab_flipboard": "fab fa-flipboard",
  "fab_fly": "fab fa-fly",
  "fab_font_awesome": "fab fa-font-awesome",
  "fab_fonticons_fi": "fab fa-fonticons-fi",
  "fab_fonticons": "fab fa-fonticons",
  "fab_fort_awesome_alt": "fab fa-fort-awesome-alt",
  "fab_fort_awesome": "fab fa-fort-awesome",
  "fab_forumbee": "fab fa-forumbee",
  "fab_foursquare": "fab fa-foursquare",
  "fab_free_code_camp": "fab fa-free-code-camp",
  "fab_freebsd": "fab fa-freebsd",
  "fab_fulcrum": "fab fa-fulcrum",
  "fab_galactic_republic": "fab fa-galactic-republic",
  "fab_galactic_senate": "fab fa-galactic-senate",
  "fab_get_pocket": "fab fa-get-pocket",
  "fab_gg_circle": "fab fa-gg-circle",
  "fab_gg": "fab fa-gg",
  "fab_git_alt": "fab fa-git-alt",
  "fab_git": "fab fa-git",
  "fab_github_alt": "fab fa-github-alt",
  "fab_github": "fab fa-github",
  "fab_gitkraken": "fab fa-gitkraken",
  "fab_gitlab": "fab fa-gitlab",
  "fab_gitter": "fab fa-gitter",
  "fab_glide_g": "fab fa-glide-g",
  "fab_glide": "fab fa-glide",
  "fab_gofore": "fab fa-gofore",
  "fab_golang": "fab fa-golang",
  "fab_goodreads_g": "fab fa-goodreads-g",
  "fab_goodreads": "fab fa-goodreads",
  "fab_google_drive": "fab fa-google-drive",
  "fab_google_pay": "fab fa-google-pay",
  "fab_google_play": "fab fa-google-play",
  "fab_google_plus_g": "fab fa-google-plus-g",
  "fab_google_plus": "fab fa-google-plus",
  "fab_google_scholar": "fab fa-google-scholar",
  "fab_google_wallet": "fab fa-google-wallet",
  "fab_google": "fab fa-google",
  "fab_gratipay": "fab fa-gratipay",
  "fab_grav": "fab fa-grav",
  "fab_gripfire": "fab fa-gripfire",
  "fab_grunt": "fab fa-grunt",
  "fab_guilded": "fab fa-guilded",
  "fab_gulp": "fab fa-gulp",
  "fab_hacker_news": "fab fa-hacker-news",
  "fab_hackerrank": "fab fa-hackerrank",
  "fab_hashnode": "fab fa-hashnode",
  "fab_hips": "fab fa-hips",
  "fab_hire_a_helper": "fab fa-hire-a-helper",
  "fab_hive": "fab fa-hive",
  "fab_hooli": "fab fa-hooli",
  "fab_hornbill": "fab fa-hornbill",
  "fab_hotjar": "fab fa-hotjar",
  "fab_houzz": "fab fa-houzz",
  "fab_html5": "fab fa-html5",
  "fab_hubspot": "fab fa-hubspot",
  "fab_ideal": "fab fa-ideal",
  "fab_imdb": "fab fa-imdb",
  "fab_instagram": "fab fa-instagram",
  "fab_instalod": "fab fa-instalod",
  "fab_intercom": "fab fa-intercom",
  "fab_internet_explorer": "fab fa-internet-explorer",
  "fab_invision": "fab fa-invision",
  "fab_ioxhost": "fab fa-ioxhost",
  "fab_itch_io": "fab fa-itch-io",
  "fab_itunes_note": "fab fa-itunes-note",
  "fab_itunes": "fab fa-itunes",
  "fab_java": "fab fa-java",
  "fab_jedi_order": "fab fa-jedi-order",
  "fab_jenkins": "fab fa-jenkins",
  "fab_jira": "fab fa-jira",
  "fab_joget": "fab fa-joget",
  "fab_joomla": "fab fa-joomla",
  "fab_js": "fab fa-js",
  "fab_jsfiddle": "fab fa-jsfiddle",
  "fab_jxl": "fab fa-jxl",
  "fab_kaggle": "fab fa-kaggle",
  "fab_keybase": "fab fa-keybase",
  "fab_keycdn": "fab fa-keycdn",
  "fab_kickstarter_k": "fab fa-kickstarter-k",
  "fab_kickstarter": "fab fa-kickstarter",
  "fab_korvue": "fab fa-korvue",
  "fab_laravel": "fab fa-laravel",
  "fab_lastfm": "fab fa-lastfm",
  "fab_leanpub": "fab fa-leanpub",
  "fab_less": "fab fa-less",
  "fab_letterboxd": "fab fa-letterboxd",
  "fab_line": "fab fa-line",
  "fab_linkedin_in": "fab fa-linkedin-in",
  "fab_linkedin": "fab fa-linkedin",
  "fab_linode": "fab fa-linode",
  "fab_linux": "fab fa-linux",
  "fab_lyft": "fab fa-lyft",
  "fab_magento": "fab fa-magento",
  "fab_mailchimp": "fab fa-mailchimp",
  "fab_mandalorian": "fab fa-mandalorian",
  "fab_markdown": "fab fa-markdown",
  "fab_mastodon": "fab fa-mastodon",
  "fab_maxcdn": "fab fa-maxcdn",
  "fab_mdb": "fab fa-mdb",
  "fab_medapps": "fab fa-medapps",
  "fab_medium": "fab fa-medium",
  "fab_medrt": "fab fa-medrt",
  "fab_meetup": "fab fa-meetup",
  "fab_megaport": "fab fa-megaport",
  "fab_mendeley": "fab fa-mendeley",
  "fab_meta": "fab fa-meta",
  "fab_microblog": "fab fa-microblog",
  "fab_microsoft": "fab fa-microsoft",
  "fab_mintbit": "fab fa-mintbit",
  "fab_mix": "fab fa-mix",
  "fab_mixcloud": "fab fa-mixcloud",
  "fab_mixer": "fab fa-mixer",
  "fab_mizuni": "fab fa-mizuni",
  "fab_modx": "fab fa-modx",
  "fab_monero": "fab fa-monero",
  "fab_napster": "fab fa-napster",
  "fab_neos": "fab fa-neos",
  "fab_nfc_directional": "fab fa-nfc-directional",
  "fab_nfc_symbol": "fab fa-nfc-symbol",
  "fab_nimblr": "fab fa-nimblr",
  "fab_node_js": "fab fa-node-js",
  "fab_node": "fab fa-node",
  "fab_npm": "fab fa-npm",
  "fab_ns8": "fab fa-ns8",
  "fab_nutritionix": "fab fa-nutritionix",
  "fab_octopus_deploy": "fab fa-octopus-deploy",
  "fab_odnoklassniki": "fab fa-odnoklassniki",
  "fab_odysee": "fab fa-odysee",
  "fab_old_republic": "fab fa-old-republic",
  "fab_opencart": "fab fa-opencart",
  "fab_openid": "fab fa-openid",
  "fab_opensuse": "fab fa-opensuse",
  "fab_opera": "fab fa-opera",
  "fab_optin_monster": "fab fa-optin-monster",
  "fab_orcid": "fab fa-orcid",
  "fab_osi": "fab fa-osi",
  "fab_padlet": "fab fa-padlet",
  "fab_page4": "fab fa-page4",
  "fab_pagelines": "fab fa-pagelines",
  "fab_palfed": "fab fa-palfed",
  "fab_patreon": "fab fa-patreon",
  "fab_paypal": "fab fa-paypal",
  "fab_perbyte": "fab fa-perbyte",
  "fab_periscope": "fab fa-periscope",
  "fab_phabricator": "fab fa-phabricator",
  "fab_phoenix_framework": "fab fa-phoenix-framework",
  "fab_phoenix_squadron": "fab fa-phoenix-squadron",
  "fab_php": "fab fa-php",
  "fab_pied_piper_alt": "fab fa-pied-piper-alt",
  "fab_pied_piper_hat": "fab fa-pied-piper-hat",
  "fab_pied_piper_pp": "fab fa-pied-piper-pp",
  "fab_pied_piper": "fab fa-pied-piper",
  "fab_pinterest_p": "fab fa-pinterest-p",
  "fab_pinterest": "fab fa-pinterest",
  "fab_pix": "fab fa-pix",
  "fab_pixiv": "fab fa-pixiv",
  "fab_playstation": "fab fa-playstation",
  "fab_product_hunt": "fab fa-product-hunt",
  "fab_pushed": "fab fa-pushed",
  "fab_python": "fab fa-python",
  "fab_qq": "fab fa-qq",
  "fab_quinscape": "fab fa-quinscape",
  "fab_quora": "fab fa-quora",
  "fab_r_project": "fab fa-r-project",
  "fab_raspberry_pi": "fab fa-raspberry-pi",
  "fab_ravelry": "fab fa-ravelry",
  "fab_react": "fab fa-react",
  "fab_reacteurope": "fab fa-reacteurope",
  "fab_readme": "fab fa-readme",
  "fab_rebel": "fab fa-rebel",
  "fab_red_river": "fab fa-red-river",
  "fab_reddit_alien": "fab fa-reddit-alien",
  "fab_reddit": "fab fa-reddit",
  "fab_redhat": "fab fa-redhat",
  "fab_renren": "fab fa-renren",
  "fab_replyd": "fab fa-replyd",
  "fab_researchgate": "fab fa-researchgate",
  "fab_resolving": "fab fa-resolving",
  "fab_rev": "fab fa-rev",
  "fab_rocketchat": "fab fa-rocketchat",
  "fab_rockrms": "fab fa-rockrms",
  "fab_rust": "fab fa-rust",
  "fab_safari": "fab fa-safari",
  "fab_salesforce": "fab fa-salesforce",
  "fab_sass": "fab fa-sass",
  "fab_schlix": "fab fa-schlix",
  "fab_screenpal": "fab fa-screenpal",
  "fab_scribd": "fab fa-scribd",
  "fab_searchengin": "fab fa-searchengin",
  "fab_sellcast": "fab fa-sellcast",
  "fab_sellsy": "fab fa-sellsy",
  "fab_servicestack": "fab fa-servicestack",
  "fab_shirtsinbulk": "fab fa-shirtsinbulk",
  "fab_shoelace": "fab fa-shoelace",
  "fab_shopify": "fab fa-shopify",
  "fab_shopware": "fab fa-shopware",
  "fab_signal_messenger": "fab fa-signal-messenger",
  "fab_simplybuilt": "fab fa-simplybuilt",
  "fab_sistrix": "fab fa-sistrix",
  "fab_sith": "fab fa-sith",
  "fab_sitrox": "fab fa-sitrox",
  "fab_sketch": "fab fa-sketch",
  "fab_skyatlas": "fab fa-skyatlas",
  "fab_skype": "fab fa-skype",
  "fab_slack": "fab fa-slack",
  "fab_slideshare": "fab fa-slideshare",
  "fab_snapchat": "fab fa-snapchat",
  "fab_soundcloud": "fab fa-soundcloud",
  "fab_sourcetree": "fab fa-sourcetree",
  "fab_space_awesome": "fab fa-space-awesome",
  "fab_speakap": "fab fa-speakap",
  "fab_speaker_deck": "fab fa-speaker-deck",
  "fab_spotify": "fab fa-spotify",
  "fab_square_behance": "fab fa-square-behance",
  "fab_square_dribbble": "fab fa-square-dribbble",
  "fab_square_facebook": "fab fa-square-facebook",
  "fab_square_font_awesome_stroke": "fab fa-square-font-awesome-stroke",
  "fab_square_font_awesome": "fab fa-square-font-awesome",
  "fab_square_git": "fab fa-square-git",
  "fab_square_github": "fab fa-square-github",
  "fab_square_gitlab": "fab fa-square-gitlab",
  "fab_square_google_plus": "fab fa-square-google-plus",
  "fab_square_hacker_news": "fab fa-square-hacker-news",
  "fab_square_instagram": "fab fa-square-instagram",
  "fab_square_js": "fab fa-square-js",
  "fab_square_lastfm": "fab fa-square-lastfm",
  "fab_square_letterboxd": "fab fa-square-letterboxd",
  "fab_square_odnoklassniki": "fab fa-square-odnoklassniki",
  "fab_square_pied_piper": "fab fa-square-pied-piper",
  "fab_square_pinterest": "fab fa-square-pinterest",
  "fab_square_reddit": "fab fa-square-reddit",
  "fab_square_snapchat": "fab fa-square-snapchat",
  "fab_square_steam": "fab fa-square-steam",
  "fab_square_threads": "fab fa-square-threads",
  "fab_square_tumblr": "fab fa-square-tumblr",
  "fab_square_twitter": "fab fa-square-twitter",
  "fab_square_upwork": "fab fa-square-upwork",
  "fab_square_viadeo": "fab fa-square-viadeo",
  "fab_square_vimeo": "fab fa-square-vimeo",
  "fab_square_web_awesome_stroke": "fab fa-square-web-awesome-stroke",
  "fab_square_web_awesome": "fab fa-square-web-awesome",
  "fab_square_whatsapp": "fab fa-square-whatsapp",
  "fab_square_x_twitter": "fab fa-square-x-twitter",
  "fab_square_xing": "fab fa-square-xing",
  "fab_square_youtube": "fab fa-square-youtube",
  "fab_squarespace": "fab fa-squarespace",
  "fab_stack_exchange": "fab fa-stack-exchange",
  "fab_stack_overflow": "fab fa-stack-overflow",
  "fab_stackpath": "fab fa-stackpath",
  "fab_staylinked": "fab fa-staylinked",
  "fab_steam_symbol": "fab fa-steam-symbol",
  "fab_steam": "fab fa-steam",
  "fab_sticker_mule": "fab fa-sticker-mule",
  "fab_strava": "fab fa-strava",
  "fab_stripe_s": "fab fa-stripe-s",
  "fab_stripe": "fab fa-stripe",
  "fab_stubber": "fab fa-stubber",
  "fab_studiovinari": "fab fa-studiovinari",
  "fab_stumbleupon_circle": "fab fa-stumbleupon-circle",
  "fab_stumbleupon": "fab fa-stumbleupon",
  "fab_superpowers": "fab fa-superpowers",
  "fab_supple": "fab fa-supple",
  "fab_suse": "fab fa-suse",
  "fab_swift": "fab fa-swift",
  "fab_symfony": "fab fa-symfony",
  "fab_teamspeak": "fab fa-teamspeak",
  "fab_telegram": "fab fa-telegram",
  "fab_tencent_weibo": "fab fa-tencent-weibo",
  "fab_the_red_yeti": "fab fa-the-red-yeti",
  "fab_themeco": "fab fa-themeco",
  "fab_themeisle": "fab fa-themeisle",
  "fab_think_peaks": "fab fa-think-peaks",
  "fab_threads": "fab fa-threads",
  "fab_tiktok": "fab fa-tiktok",
  "fab_trade_federation": "fab fa-trade-federation",
  "fab_trello": "fab fa-trello",
  "fab_tumblr": "fab fa-tumblr",
  "fab_twitch": "fab fa-twitch",
  "fab_twitter": "fab fa-twitter",
  "fab_typo3": "fab fa-typo3",
  "fab_uber": "fab fa-uber",
  "fab_ubuntu": "fab fa-ubuntu",
  "fab_uikit": "fab fa-uikit",
  "fab_umbraco": "fab fa-umbraco",
  "fab_uncharted": "fab fa-uncharted",
  "fab_uniregistry": "fab fa-uniregistry",
  "fab_unity": "fab fa-unity",
  "fab_unsplash": "fab fa-unsplash",
  "fab_untappd": "fab fa-untappd",
  "fab_ups": "fab fa-ups",
  "fab_upwork": "fab fa-upwork",
  "fab_usb": "fab fa-usb",
  "fab_usps": "fab fa-usps",
  "fab_ussunnah": "fab fa-ussunnah",
  "fab_vaadin": "fab fa-vaadin",
  "fab_viacoin": "fab fa-viacoin",
  "fab_viadeo": "fab fa-viadeo",
  "fab_viber": "fab fa-viber",
  "fab_vimeo_v": "fab fa-vimeo-v",
  "fab_vimeo": "fab fa-vimeo",
  "fab_vine": "fab fa-vine",
  "fab_vk": "fab fa-vk",
  "fab_vnv": "fab fa-vnv",
  "fab_vuejs": "fab fa-vuejs",
  "fab_watchman_monitoring": "fab fa-watchman-monitoring",
  "fab_waze": "fab fa-waze",
  "fab_web_awesome": "fab fa-web-awesome",
  "fab_webflow": "fab fa-webflow",
  "fab_weebly": "fab fa-weebly",
  "fab_weibo": "fab fa-weibo",
  "fab_weixin": "fab fa-weixin",
  "fab_whatsapp": "fab fa-whatsapp",
  "fab_whmcs": "fab fa-whmcs",
  "fab_wikipedia_w": "fab fa-wikipedia-w",
  "fab_windows": "fab fa-windows",
  "fab_wirsindhandwerk": "fab fa-wirsindhandwerk",
  "fab_wix": "fab fa-wix",
  "fab_wizards_of_the_coast": "fab fa-wizards-of-the-coast",
  "fab_wodu": "fab fa-wodu",
  "fab_wolf_pack_battalion": "fab fa-wolf-pack-battalion",
  "fab_wordpress_simple": "fab fa-wordpress-simple",
  "fab_wordpress": "fab fa-wordpress",
  "fab_wpbeginner": "fab fa-wpbeginner",
  "fab_wpexplorer": "fab fa-wpexplorer",
  "fab_wpforms": "fab fa-wpforms",
  "fab_wpressr": "fab fa-wpressr",
  "fab_x_twitter": "fab fa-x-twitter",
  "fab_xbox": "fab fa-xbox",
  "fab_xing": "fab fa-xing",
  "fab_y_combinator": "fab fa-y-combinator",
  "fab_yahoo": "fab fa-yahoo",
  "fab_yammer": "fab fa-yammer",
  "fab_yandex_international": "fab fa-yandex-international",
  "fab_yandex": "fab fa-yandex",
  "fab_yarn": "fab fa-yarn",
  "fab_yelp": "fab fa-yelp",
  "fab_yoast": "fab fa-yoast",
  "fab_youtube": "fab fa-youtube",
  "fab_zhihu": "fab fa-zhihu"
};
var fontAwesome_default = fontAwesome;

// _vendor/github.com/naturalcrit/homebrewery/shared/naturalcrit/markdown.js
var renderer = new marked.Renderer();
var tokenizer = new marked.Tokenizer();
var mathParser = new Parser({
  operators: {
    // These default to true, but are included to be explicit
    add: true,
    subtract: true,
    multiply: true,
    divide: true,
    power: true,
    round: true,
    floor: true,
    ceil: true,
    abs: true,
    sin: false,
    cos: false,
    tan: false,
    asin: false,
    acos: false,
    atan: false,
    sinh: false,
    cosh: false,
    tanh: false,
    asinh: false,
    acosh: false,
    atanh: false,
    sqrt: false,
    cbrt: false,
    log: false,
    log2: false,
    ln: false,
    lg: false,
    log10: false,
    expm1: false,
    log1p: false,
    trunc: false,
    join: false,
    sum: false,
    indexOf: false,
    "-": false,
    "+": false,
    exp: false,
    not: false,
    length: false,
    "!": false,
    sign: false,
    random: false,
    fac: false,
    min: false,
    max: false,
    hypot: false,
    pyt: false,
    pow: false,
    atan2: false,
    "if": false,
    gamma: false,
    roundTo: false,
    map: false,
    fold: false,
    filter: false,
    remainder: false,
    factorial: false,
    comparison: false,
    concatenate: false,
    logical: false,
    assignment: false,
    array: false,
    fndef: false
  }
});
mathParser.functions.sign = function(a) {
  if (a >= 0) return "+";
  return "-";
};
mathParser.functions.signed = function(a) {
  if (a >= 0) return `+${a}`;
  return `${a}`;
};
mathParser.functions.toRomans = function(a) {
  return (0, import_romans.romanize)(a);
};
mathParser.functions.toRomansUpper = function(a) {
  return (0, import_romans.romanize)(a).toUpperCase();
};
mathParser.functions.toRomansLower = function(a) {
  return (0, import_romans.romanize)(a).toLowerCase();
};
mathParser.functions.toChar = function(a) {
  if (a <= 0) return a;
  const genChars = function(i) {
    return (i > 26 ? genChars(Math.floor((i - 1) / 26)) : "") + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[(i - 1) % 26];
  };
  return genChars(a);
};
mathParser.functions.toCharUpper = function(a) {
  return mathParser.functions.toChar(a).toUpperCase();
};
mathParser.functions.toCharLower = function(a) {
  return mathParser.functions.toChar(a).toLowerCase();
};
mathParser.functions.toWords = function(a) {
  return (0, import_written_number.default)(a);
};
mathParser.functions.toWordsUpper = function(a) {
  return mathParser.functions.toWords(a).toUpperCase();
};
mathParser.functions.toWordsLower = function(a) {
  return mathParser.functions.toWords(a).toLowerCase();
};
mathParser.functions.toWordsCaps = function(a) {
  const words = mathParser.functions.toWords(a).split(" ");
  return words.map((word) => {
    return word.replace(/(?:^|\b|\s)(\w)/g, function(w, index) {
      return index === 0 ? w.toLowerCase() : w.toUpperCase();
    });
  }).join(" ");
};
var normalizeVarNames = (label) => {
  return label.trim().replace(/\s+/g, " ");
};
renderer.html = function(token) {
  let html2 = token.text;
  if (import_lodash.default.startsWith(import_lodash.default.trim(html2), "<div") && import_lodash.default.endsWith(import_lodash.default.trim(html2), "</div>")) {
    const openTag = html2.substring(0, html2.indexOf(">") + 1);
    html2 = html2.substring(html2.indexOf(">") + 1);
    html2 = html2.substring(0, html2.lastIndexOf("</div>"));
    return `${openTag} ${marked.parse(html2)} </div>`;
  }
  return html2;
};
renderer.paragraph = function(token) {
  let match;
  const text = this.parser.parseInline(token.tokens);
  if (text.startsWith("<div") || text.startsWith("</div"))
    return `${text}`;
  else if (match = text.match(/(^|^.*?\n)<span class="inline-block(.*?<\/span>)$/))
    return `${match[1].trim() ? `<p>${match[1]}</p>` : ""}<span class="inline-block${match[2]}`;
  else
    return `<p>${text}</p>
`;
};
renderer.link = function(token) {
  let { href, title, tokens } = token;
  const text = this.parser.parseInline(tokens);
  let self2 = false;
  if (href[0] == "#") {
    self2 = true;
  }
  href = cleanUrl2(href);
  if (href === null) {
    return text;
  }
  let out = `<a href="${escape3(href)}"`;
  if (title) {
    out += ` title="${escape3(title)}"`;
  }
  if (self2) {
    out += ' target="_self"';
  }
  out += `>${text}</a>`;
  return out;
};
renderer.image = function(token) {
  const { href, title, text } = token;
  if (href === null)
    return text;
  let out = `<img src="${href}" alt="${text}" style="--HB_src:url(${href});"`;
  if (title)
    out += ` title="${title}"`;
  out += ">";
  return out;
};
tokenizer.def = function() {
  return void 0;
};
var mustacheSpans = {
  name: "mustacheSpans",
  level: "inline",
  // Is this a block-level or inline-level tokenizer?
  start(src) {
    var _a2;
    return (_a2 = src.match(/{{[^{]/)) == null ? void 0 : _a2.index;
  },
  // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const completeSpan = /^{{[^\n]*}}/;
    const inlineRegex = /{{(?=((?:[:=](?:"['\w,\-+*/()#%=?.&:!@$^;:\[\]_= ]*"|[\w\-+*/()#%.]*)|[^"=':{}\s]*)*))\1 *|}}/g;
    const match = completeSpan.exec(src);
    if (match) {
      let blockCount = 0;
      let tags = {};
      let endTags = 0;
      let endToken = 0;
      let delim;
      while (delim = inlineRegex.exec(match[0])) {
        if (import_lodash.default.isEmpty(tags)) {
          tags = processStyleTags(delim[0].substring(2));
          endTags = delim[0].length;
        }
        if (delim[0].startsWith("{{")) {
          blockCount++;
        } else if (delim[0] == "}}" && blockCount !== 0) {
          blockCount--;
          if (blockCount == 0) {
            endToken = inlineRegex.lastIndex;
            break;
          }
        }
      }
      if (endToken) {
        const raw = src.slice(0, endToken);
        const text = raw.slice(endTags || -2, -2);
        return {
          // Token to generate
          type: "mustacheSpans",
          // Should match "name" above
          raw,
          // Text to consume from the source
          text,
          // Additional custom properties
          tags,
          tokens: this.lexer.inlineTokens(text)
          // inlineTokens to process **bold**, *italics*, etc.
        };
      }
    }
  },
  renderer(token) {
    const tags = token.tags;
    tags.classes = ["inline-block", tags.classes].join(" ").trim();
    return `<span${tags.classes ? ` class="${tags.classes}"` : ""}${tags.id ? ` id="${tags.id}"` : ""}${tags.styles ? ` style="${Object.entries(tags.styles).map(([key, value]) => `${key}:${value};`).join(" ")}"` : ""}${tags.attributes ? ` ${Object.entries(tags.attributes).map(([key, value]) => `${key}="${value}"`).join(" ")}` : ""}>${this.parser.parseInline(token.tokens)}</span>`;
  }
};
var mustacheDivs = {
  name: "mustacheDivs",
  level: "block",
  start(src) {
    var _a2;
    return (_a2 = src.match(/\n *{{[^{]/m)) == null ? void 0 : _a2.index;
  },
  // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    var _a2;
    const completeBlock = new RegExp("^ *{{[^\\n}]* *\\n.*\\n *}}", "s");
    const blockRegex = /^ *{{(?=((?:[:=](?:"['\w,\-+*/()#%=?.&:!@$^;:\[\]_= ]*"|[\w\-()#%.]*)|[^"=':{}\s]*)*))\1 *$|^ *}}$/gm;
    const match = completeBlock.exec(src);
    if (match) {
      let blockCount = 0;
      let tags = {};
      let endTags = 0;
      let endToken = 0;
      let delim;
      while (delim = (_a2 = blockRegex.exec(match[0])) == null ? void 0 : _a2[0].trim()) {
        if (import_lodash.default.isEmpty(tags)) {
          tags = processStyleTags(delim.substring(2));
          endTags = delim.length + src.indexOf(delim);
        }
        if (delim.startsWith("{{")) {
          blockCount++;
        } else if (delim == "}}" && blockCount !== 0) {
          blockCount--;
          if (blockCount == 0) {
            endToken = blockRegex.lastIndex;
            break;
          }
        }
      }
      if (endToken) {
        const raw = src.slice(0, endToken);
        const text = raw.slice(endTags || -2, -2);
        return {
          // Token to generate
          type: "mustacheDivs",
          // Should match "name" above
          raw,
          // Text to consume from the source
          text,
          // Additional custom properties
          tags,
          tokens: this.lexer.blockTokens(text)
        };
      }
    }
  },
  renderer(token) {
    const tags = token.tags;
    tags.classes = ["block", tags.classes].join(" ").trim();
    return `<div${tags.classes ? ` class="${tags.classes}"` : ""}${tags.id ? ` id="${tags.id}"` : ""}${tags.styles ? ` style="${Object.entries(tags.styles).map(([key, value]) => `${key}:${value};`).join(" ")}"` : ""}${tags.attributes ? ` ${Object.entries(tags.attributes).map(([key, value]) => `${key}="${value}"`).join(" ")}` : ""}>${this.parser.parse(token.tokens)}</div>`;
  }
};
var mustacheInjectInline = {
  name: "mustacheInjectInline",
  level: "inline",
  start(src) {
    var _a2;
    return (_a2 = src.match(/ *{[^{\n]/)) == null ? void 0 : _a2.index;
  },
  // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const inlineRegex = /^ *{(?=((?:[:=](?:"['\w,\-+*/()#%=?.&:!@$^;:\[\]_= ]*"|[\w\-()#%.]*)|[^"=':{}\s]*)*))\1}/g;
    const match = inlineRegex.exec(src);
    if (match) {
      const lastToken = tokens[tokens.length - 1];
      if (!lastToken || lastToken.type == "mustacheInjectInline")
        return false;
      const tags = processStyleTags(match[1]);
      lastToken.originalType = lastToken.type;
      lastToken.type = "mustacheInjectInline";
      lastToken.injectedTags = tags;
      return {
        type: "mustacheInjectInline",
        // Should match "name" above
        raw: match[0],
        // Text to consume from the source
        text: ""
      };
    }
  },
  renderer(token) {
    if (!token.originalType) {
      return;
    }
    token.type = token.originalType;
    const text = this.parser.parseInline([token]);
    const originalTags = extractHTMLStyleTags(text);
    const injectedTags = token.injectedTags;
    const tags = mergeHTMLTags(originalTags, injectedTags);
    const openingTag = new RegExp("(<[^\\s<>]+)[^\\n<>]*(>.*)", "s").exec(text);
    if (openingTag) {
      return `${openingTag[1]}${tags.classes ? ` class="${tags.classes}"` : ""}${tags.id ? ` id="${tags.id}"` : ""}${!import_lodash.default.isEmpty(tags.styles) ? ` style="${Object.entries(tags.styles).map(([key, value]) => `${key}:${value};`).join(" ")}"` : ""}${!import_lodash.default.isEmpty(tags.attributes) ? ` ${Object.entries(tags.attributes).map(([key, value]) => `${key}="${value}"`).join(" ")}` : ""}${openingTag[2]}`;
    }
    return text;
  }
};
var mustacheInjectBlock = {
  extensions: [{
    name: "mustacheInjectBlock",
    level: "block",
    start(src) {
      var _a2;
      return (_a2 = src.match(/\n *{[^{\n]/m)) == null ? void 0 : _a2.index;
    },
    // Hint to Marked.js to stop and check for a match
    tokenizer(src, tokens) {
      const inlineRegex = /^ *{(?=((?:[:=](?:"['\w,\-+*/()#%=?.&:!@$^;:\[\]_= ]*"|[\w\-+*/()#%.]*)|[^"=':{}\s]*)*))\1}/ym;
      const match = inlineRegex.exec(src);
      if (match) {
        const lastToken = tokens[tokens.length - 1];
        if (!lastToken || lastToken.type == "mustacheInjectBlock")
          return false;
        lastToken.originalType = "mustacheInjectBlock";
        lastToken.injectedTags = processStyleTags(match[1]);
        return {
          type: "mustacheInjectBlock",
          // Should match "name" above
          raw: match[0],
          // Text to consume from the source
          text: ""
        };
      }
    },
    renderer(token) {
      if (!token.originalType) {
        return;
      }
      token.type = token.originalType;
      const text = this.parser.parse([token]);
      const originalTags = extractHTMLStyleTags(text);
      const injectedTags = token.injectedTags;
      const tags = mergeHTMLTags(originalTags, injectedTags);
      const openingTag = new RegExp("(<[^\\s<>]+)[^\\n<>]*(>.*)", "s").exec(text);
      if (openingTag) {
        return `${openingTag[1]}${tags.classes ? ` class="${tags.classes}"` : ""}${tags.id ? ` id="${tags.id}"` : ""}${!import_lodash.default.isEmpty(tags.styles) ? ` style="${Object.entries(tags.styles).map(([key, value]) => `${key}:${value};`).join(" ")}"` : ""}${!import_lodash.default.isEmpty(tags.attributes) ? ` ${Object.entries(tags.attributes).map(([key, value]) => `${key}="${value}"`).join(" ")}` : ""}${openingTag[2]}`;
      }
      return text;
    }
  }],
  walkTokens(token) {
    if (token.originalType == "mustacheInjectBlock" && token.type !== "table") {
      token.originalType = token.type;
      token.type = "mustacheInjectBlock";
    }
  }
};
var forcedParagraphBreaks = {
  name: "hardBreaks",
  level: "block",
  start(src) {
    var _a2;
    return (_a2 = src.match(/\n:+$/m)) == null ? void 0 : _a2.index;
  },
  // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const regex2 = /^(:+)(?:\n|$)/ym;
    const match = regex2.exec(src);
    if (match == null ? void 0 : match.length) {
      return {
        type: "hardBreaks",
        // Should match "name" above
        raw: match[0],
        // Text to consume from the source
        length: match[1].length,
        text: ""
      };
    }
  },
  renderer(token) {
    return `<div class='blank'></div>
`.repeat(token.length);
  }
};
var replaceVar = function(input, hoist = false, allowUnresolved = false) {
  var _a2, _b;
  const regex2 = /([!$]?)\[((?!\s*\])(?:\\.|[^\[\]\\])+)\]/g;
  const match = regex2.exec(input);
  const prefix = match[1];
  const label = normalizeVarNames(match[2]);
  const mathRegex = /[a-z]+\(|[+\-*/^(),]/g;
  const matches = label.split(mathRegex);
  const mathVars = (_a2 = matches.filter((match2) => isNaN(match2))) == null ? void 0 : _a2.map((s) => s.trim());
  let replacedLabel = label;
  if (prefix[0] == "$" && (mathVars == null ? void 0 : mathVars[0]) !== label.trim()) {
    mathVars == null ? void 0 : mathVars.forEach((variable) => {
      const foundVar2 = lookupVar(variable, globalPageNumber, hoist);
      if (foundVar2 && foundVar2.resolved && foundVar2.content && !isNaN(foundVar2.content))
        replacedLabel = replacedLabel.replaceAll(new RegExp(`(?<!\\w)(${variable})(?!\\w)`, "g"), foundVar2.content);
    });
    try {
      return mathParser.evaluate(replacedLabel);
    } catch (e) {
      return void 0;
    }
  }
  const foundVar = lookupVar(label, globalPageNumber, hoist);
  if (!foundVar || !foundVar.resolved && !allowUnresolved)
    return void 0;
  const linkRegex = /^([^<\s][^\s]*|<.*?>)(?: ("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\((?:\\\(|\\\)|[^()])*\)))?$/m;
  const linkMatch = linkRegex.exec(foundVar.content);
  const href = linkMatch ? linkMatch[1] : null;
  const title = linkMatch ? (_b = linkMatch[2]) == null ? void 0 : _b.slice(1, -1) : null;
  if (!prefix[0] && href)
    return `[${label}](${href}${title ? ` "${title}"` : ""})`;
  if (prefix[0] == "!" && href)
    return `![${label}](${href} ${title ? ` "${title}"` : ""})`;
  if (prefix[0] == "$")
    return foundVar.content;
};
var lookupVar = function(label, index, hoist = false) {
  var _a2, _b;
  while (index >= 0) {
    if (((_a2 = globalVarsList[index]) == null ? void 0 : _a2[label]) !== void 0)
      return globalVarsList[index][label];
    index--;
  }
  if (hoist) {
    index = Object.keys(globalVarsList).length;
    while (index >= 0) {
      if (((_b = globalVarsList[index]) == null ? void 0 : _b[label]) !== void 0)
        return globalVarsList[index][label];
      index--;
    }
  }
  return void 0;
};
var processVariableQueue = function() {
  let resolvedOne = true;
  let finalLoop = false;
  while (resolvedOne || finalLoop) {
    resolvedOne = false;
    for (const item of varsQueue) {
      if (item.type == "text")
        continue;
      if (item.type == "varDefBlock") {
        const regex2 = /[!$]?\[((?!\s*\])(?:\\.|[^\[\]\\])+)\]/g;
        let match;
        let resolved = true;
        let tempContent = item.content;
        while (match = regex2.exec(item.content)) {
          const value = replaceVar(match[0], true);
          if (value == void 0)
            resolved = false;
          else
            tempContent = tempContent.replaceAll(match[0], value);
        }
        if (resolved == true || item.content != tempContent) {
          resolvedOne = true;
          item.content = tempContent;
        }
        globalVarsList[globalPageNumber][item.varName] = {
          content: item.content,
          resolved
        };
        if (resolved)
          item.type = "resolved";
      }
      if (item.type == "varCallBlock" || item.type == "varCallInline") {
        const value = replaceVar(item.content, true, finalLoop);
        if (value == void 0)
          continue;
        resolvedOne = true;
        item.content = value;
        item.type = "text";
      }
    }
    varsQueue = varsQueue.filter((item) => item.type !== "resolved");
    if (finalLoop)
      break;
    if (!resolvedOne)
      finalLoop = true;
  }
  varsQueue = varsQueue.filter((item) => item.type !== "varDefBlock");
};
function MarkedVariables() {
  return {
    hooks: {
      preprocess(src) {
        const codeBlockSkip = /^(?: {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+|^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})(?:[^\n]*)(?:\n|$)(?:|(?:[\s\S]*?)(?:\n|$))(?: {0,3}\2[~`]* *(?=\n|$))|`[^`]*?`/;
        const blockDefRegex = /^[!$]?\[((?!\s*\])(?:\\.|[^\[\]\\])+)\]:(?!\() *((?:\n? *[^\s].*)+)(?=\n+|$)/;
        const blockCallRegex = /^[!$]?\[((?!\s*\])(?:\\.|[^\[\]\\])+)\](?=\n|$)/;
        const inlineDefRegex = /([!$]?\[((?!\s*\])(?:\\.|[^\[\]\\])+)\])\(([^\n]+)\)/;
        const inlineCallRegex = /[!$]?\[((?!\s*\])(?:\\.|[^\[\]\\])+)\](?!\()/;
        const combinedRegex = new RegExp([codeBlockSkip, blockDefRegex, blockCallRegex, inlineDefRegex, inlineCallRegex].map((s) => `(${s.source})`).join("|"), "gm");
        let lastIndex = 0;
        let match;
        while ((match = combinedRegex.exec(src)) !== null) {
          if (match.index > lastIndex) {
            varsQueue.push(
              {
                type: "text",
                varName: null,
                content: src.slice(lastIndex, match.index)
              }
            );
          }
          if (match[1]) {
            varsQueue.push(
              {
                type: "text",
                varName: null,
                content: match[0]
              }
            );
          }
          if (match[3]) {
            const label = match[4] ? normalizeVarNames(match[4]) : null;
            const content = match[5] ? match[5].trim().replace(/[ \t]+/g, " ") : null;
            varsQueue.push(
              {
                type: "varDefBlock",
                varName: label,
                content
              }
            );
          }
          if (match[6]) {
            const label = match[7] ? normalizeVarNames(match[7]) : null;
            varsQueue.push(
              {
                type: "varCallBlock",
                varName: label,
                content: match[0]
              }
            );
          }
          if (match[8]) {
            const label = match[10] ? normalizeVarNames(match[10]) : null;
            let content = match[11] || null;
            let level = 0;
            let i;
            for (i = 0; i < content.length; i++) {
              if (content[i] === "\\") {
                i++;
              } else if (content[i] === "(") {
                level++;
              } else if (content[i] === ")") {
                level--;
                if (level < 0)
                  break;
              }
            }
            combinedRegex.lastIndex = combinedRegex.lastIndex - (content.length - i);
            content = content.slice(0, i).trim().replace(/\s+/g, " ");
            varsQueue.push(
              {
                type: "varDefBlock",
                varName: label,
                content
              }
            );
            varsQueue.push(
              {
                type: "varCallInline",
                varName: label,
                content: match[9]
              }
            );
          }
          if (match[12]) {
            const label = match[13] ? normalizeVarNames(match[13]) : null;
            varsQueue.push(
              {
                type: "varCallInline",
                varName: label,
                content: match[0]
              }
            );
          }
          lastIndex = combinedRegex.lastIndex;
        }
        if (lastIndex < src.length) {
          varsQueue.push(
            {
              type: "text",
              varName: null,
              content: src.slice(lastIndex)
            }
          );
        }
        processVariableQueue();
        const output = varsQueue.map((item) => item.content).join("");
        varsQueue = [];
        return output;
      }
    }
  };
}
var MarkedEmojiOptions = {
  emojis: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, diceFont_default), elderberryInn_default), fontAwesome_default), gameIcons_default),
  renderer: (token) => `<i class="${token.emoji}"></i>`
};
var tableTerminators = [
  `:+\\n`,
  // hardBreak
  ` *{[^
]+}`,
  // blockInjector
  ` *{{[^{
]*
.*?
}}`
  // mustacheDiv
];
marked.use(MarkedVariables());
marked.use(src_default2());
marked.use({ extensions: [forcedParagraphBreaks, mustacheSpans, mustacheDivs, mustacheInjectInline] });
marked.use(mustacheInjectBlock);
marked.use(src_default3());
marked.use(src_default5());
marked.use(src_default4());
marked.use({ renderer, tokenizer, mangle: false });
marked.use(
  src_default({ interruptPatterns: tableTerminators }),
  gfmHeadingId({ globalSlugs: true }),
  markedSmartypantsLite(),
  markedEmoji(MarkedEmojiOptions)
);
function cleanUrl2(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement2 = (ch) => escapeReplacements2[ch];
var escape3 = function(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement2);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement2);
    }
  }
  return html2;
};
var tagTypes = ["div", "span", "a"];
var tagRegex = new RegExp(`(${import_lodash.default.map(tagTypes, (type) => {
  return `\\<${type}\\b|\\</${type}>`;
}).join("|")})`, "g");
var voidTags = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "command",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source"
]);
var processStyleTags = (string) => {
  var _a2;
  const tags = string.match(/(?:[^, ":=]+|[:=](?:"[^"]*"|))+/g);
  const id = import_lodash.default.remove(tags, (tag2) => tag2.startsWith("#")).map((tag2) => tag2.slice(1))[0] || null;
  const classes = import_lodash.default.remove(tags, (tag2) => !tag2.includes(":") && !tag2.includes("=")).join(" ") || null;
  const attributes = ((_a2 = import_lodash.default.remove(tags, (tag2) => tag2.includes("=")).map((tag2) => tag2.replace(/="?([^"]*)"?/g, '="$1"'))) == null ? void 0 : _a2.filter((attr) => !attr.startsWith('class="') && !attr.startsWith('style="') && !attr.startsWith('id="')).reduce((obj, attr) => {
    const index = attr.indexOf("=");
    let [key, value] = [attr.substring(0, index), attr.substring(index + 1)];
    value = value.replace(/"/g, "");
    obj[key.trim()] = value.trim();
    return obj;
  }, {})) || null;
  const styles = (tags == null ? void 0 : tags.length) ? tags.reduce((styleObj, style) => {
    const index = style.indexOf(":");
    const [key, value] = [style.substring(0, index), style.substring(index + 1)];
    styleObj[key.trim()] = value.replace(/"?([^"]*)"?/g, "$1").trim();
    return styleObj;
  }, {}) : null;
  return {
    id,
    classes,
    styles: import_lodash.default.isEmpty(styles) ? null : styles,
    attributes: import_lodash.default.isEmpty(attributes) ? null : attributes
  };
};
var extractHTMLStyleTags = (htmlString) => {
  var _a2, _b, _c, _d, _e;
  const firstElementOnly = htmlString.split(">")[0];
  const id = ((_a2 = firstElementOnly.match(/id="([^"]*)"/)) == null ? void 0 : _a2[1]) || null;
  const classes = ((_b = firstElementOnly.match(/class="([^"]*)"/)) == null ? void 0 : _b[1]) || null;
  const styles = ((_d = (_c = firstElementOnly.match(/style="([^"]*)"/)) == null ? void 0 : _c[1]) == null ? void 0 : _d.split(";").reduce((styleObj, style) => {
    if (style.trim() === "") return styleObj;
    const index = style.indexOf(":");
    const [key, value] = [style.substring(0, index), style.substring(index + 1)];
    styleObj[key.trim()] = value.trim();
    return styleObj;
  }, {})) || null;
  const attributes = ((_e = firstElementOnly.match(/[a-zA-Z]+="[^"]*"/g)) == null ? void 0 : _e.filter((attr) => !attr.startsWith('class="') && !attr.startsWith('style="') && !attr.startsWith('id="')).reduce((obj, attr) => {
    const index = attr.indexOf("=");
    const [key, value] = [attr.substring(0, index), attr.substring(index + 1)];
    obj[key.trim()] = value.replace(/"/g, "");
    return obj;
  }, {})) || null;
  return {
    id,
    classes,
    styles: import_lodash.default.isEmpty(styles) ? null : styles,
    attributes: import_lodash.default.isEmpty(attributes) ? null : attributes
  };
};
var mergeHTMLTags = (originalTags, newTags) => {
  var _a2, _b, _c, _d;
  return {
    id: newTags.id || originalTags.id || null,
    classes: [originalTags.classes, newTags.classes].join(" ").trim() || null,
    styles: Object.assign((_a2 = originalTags.styles) != null ? _a2 : {}, (_b = newTags.styles) != null ? _b : {}),
    attributes: Object.assign((_c = originalTags.attributes) != null ? _c : {}, (_d = newTags.attributes) != null ? _d : {})
  };
};
var globalVarsList = {};
var varsQueue = [];
var globalPageNumber = 0;
var Markdown = {
  marked,
  render: (rawBrewText, pageNumber = 0) => {
    const lastPageNumber = pageNumber > 0 ? globalVarsList[pageNumber - 1].HB_pageNumber.content : 0;
    globalVarsList[pageNumber] = {
      //Reset global links for current page, to ensure values are parsed in order
      "HB_pageNumber": {
        //Add document variables for this page
        content: !isNaN(Number(lastPageNumber)) ? Number(lastPageNumber) + 1 : lastPageNumber,
        resolved: true
      }
    };
    varsQueue = [];
    globalPageNumber = pageNumber;
    if (pageNumber == 0) {
      resetHeadings();
    }
    rawBrewText = rawBrewText.replace(/^\\column(?:break)?$/gm, `
<div class='columnSplit'></div>
`);
    const opts = marked.defaults;
    rawBrewText = opts.hooks.preprocess(rawBrewText);
    const tokens = marked.lexer(rawBrewText, opts);
    marked.walkTokens(tokens, opts.walkTokens);
    const html2 = marked.parser(tokens, opts);
    return opts.hooks.postprocess(html2);
  },
  validate: (rawBrewText) => {
    const errors = [];
    const leftovers = import_lodash.default.reduce(rawBrewText.split("\n"), (acc, line, _lineNumber) => {
      const lineNumber = _lineNumber + 1;
      const matches = line.match(tagRegex);
      if (!matches || !matches.length) return acc;
      import_lodash.default.each(matches, (match) => {
        import_lodash.default.each(tagTypes, (type) => {
          if (match == `<${type}`) {
            acc.push({
              type,
              line: lineNumber
            });
          }
          if (match === `</${type}>`) {
            while (acc.length && voidTags.has(import_lodash.default.last(acc).type) && import_lodash.default.last(acc).type != type) {
              acc.pop();
            }
            if (!acc.length) {
              errors.push({
                line: lineNumber,
                type,
                text: "Unmatched closing tag",
                id: "CLOSE"
              });
            } else if (import_lodash.default.last(acc).type == type) {
              acc.pop();
            } else {
              errors.push({
                line: `${import_lodash.default.last(acc).line} to ${lineNumber}`,
                type,
                text: "Type mismatch on closing tag",
                id: "MISMATCH"
              });
              acc.pop();
            }
          }
        });
      });
      return acc;
    }, []);
    import_lodash.default.each(leftovers, (unmatched) => {
      errors.push({
        line: unmatched.line,
        type: unmatched.type,
        text: "Unmatched opening tag",
        id: "OPEN"
      });
    });
    return errors;
  }
};
var markdown_default = Markdown;
export {
  markdown_default as default
};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

expr-eval/dist/index.mjs:
  (*!
   Based on ndef.parser, by Raphael Graf(r@undefined.ch)
   http://www.undefined.ch/mparser/index.html
  
   Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)
  
   You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
   to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
   but don't feel like you have to let me know or ask permission.
  *)
*/
