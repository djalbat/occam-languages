"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get verifyFileContexts () {
        return verifyFileContexts;
    },
    get verifyTypePrefixes () {
        return verifyTypePrefixes;
    }
});
var _necessary = require("necessary");
var _asynchronous = require("../utilities/asynchronous");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
function verifyFileContexts(fileContexts, verifiedFileContexts) {
    return _async_to_generator(function() {
        var resolved, fileContextsVerify;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0, _asynchronous.asyncResolve)(fileContexts, verifiedFileContexts, function(fileContext) {
                            return _async_to_generator(function() {
                                var fileContextVerifies;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                fileContext.verify()
                                            ];
                                        case 1:
                                            fileContextVerifies = _state.sent();
                                            if (fileContextVerifies) {
                                                return [
                                                    2,
                                                    true
                                                ];
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        })
                    ];
                case 1:
                    resolved = _state.sent(), fileContextsVerify = resolved;
                    return [
                        2,
                        fileContextsVerify
                    ];
            }
        });
    })();
}
function verifyTypePrefixes(typePrefixes, releaseContext) {
    var typePrefixesVerify = true;
    var typePrefixesLength = typePrefixes.length, compressedTypePrefixes = _to_consumable_array(typePrefixes);
    compress(compressedTypePrefixes, function(typePrefixA, typePrefixB) {
        var typePrefixAName = typePrefixA.getName(), typePrefixBName = typePrefixB.getName();
        if (typePrefixAName !== typePrefixBName) {
            return true;
        }
    });
    var compressTypePrefixesLength = compressedTypePrefixes.length;
    if (typePrefixesLength > compressTypePrefixesLength) {
        filter(compressedTypePrefixes, function(typePrefix) {
            var typePrefixesIncludesTypePrefix = typePrefixes.includes(typePrefix);
            if (!typePrefixesIncludesTypePrefix) {
                return true;
            }
        });
        var firstTypePrefix = first(typePrefixes), typePrefix = firstTypePrefix, typePrefixString = typePrefix.getString();
        releaseContext.info("The '".concat(typePrefixString, "' type prefix is duplicated."));
        typePrefixesVerify = false;
    }
    return typePrefixesVerify;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgYXN5bmNSZXNvbHZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cykge1xuICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IGFzeW5jUmVzb2x2ZShmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzLCBhc3luYyAoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgZmlsZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICBpZiAoZmlsZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gcmVzb2x2ZWQ7ICAvLy9cblxuICByZXR1cm4gZmlsZUNvbnRleHRzVmVyaWZ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHRydWU7XG5cbiAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aCxcbiAgICAgICAgY29tcHJlc3NlZFR5cGVQcmVmaXhlcyA9IFsgIC8vL1xuICAgICAgICAgIC4uLnR5cGVQcmVmaXhlcyxcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyhjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeEEsIHR5cGVQcmVmaXhCKSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEFOYW1lID0gdHlwZVByZWZpeEEuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhCTmFtZSA9IHR5cGVQcmVmaXhCLmdldE5hbWUoKTtcblxuICAgIGlmICh0eXBlUHJlZml4QU5hbWUgIT09IHR5cGVQcmVmaXhCTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCA9IGNvbXByZXNzZWRUeXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPiBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCkge1xuICAgIGZpbHRlcihjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeCkgPT4ge1xuICAgICAgY29uc3QgdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmluY2x1ZGVzKHR5cGVQcmVmaXgpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeCwgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGR1cGxpY2F0ZWQuYClcblxuICAgIHR5cGVQcmVmaXhlc1ZlcmlmeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc1ZlcmlmeTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwiY29tcHJlc3MiLCJmaWxlQ29udGV4dHMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsInJlc29sdmVkIiwiZmlsZUNvbnRleHRzVmVyaWZ5IiwiYXN5bmNSZXNvbHZlIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFZlcmlmaWVzIiwidmVyaWZ5IiwidHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHQiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJjb21wcmVzc2VkVHlwZVByZWZpeGVzIiwidHlwZVByZWZpeEEiLCJ0eXBlUHJlZml4QiIsInR5cGVQcmVmaXhBTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4Qk5hbWUiLCJjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXgiLCJpbmNsdWRlcyIsImZpcnN0VHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFRc0JBO2VBQUFBOztRQWFOQztlQUFBQTs7O3lCQW5CZTs0QkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBUUMsUUFBNEJDLHlCQUFjLENBQTFDRCxPQUFPRSxTQUFxQkQseUJBQWMsQ0FBbkNDLFFBQVFDLFdBQWFGLHlCQUFjLENBQTNCRTtBQUVoQixTQUFlTCxtQkFBbUJNLFlBQVksRUFBRUMsb0JBQW9COztZQUNuRUMsVUFPQUM7Ozs7b0JBUFc7O3dCQUFNQyxJQUFBQSwwQkFBWSxFQUFDSixjQUFjQyxzQkFBc0IsU0FBT0k7O29DQUNqRUM7Ozs7NENBQXNCOztnREFBTUQsWUFBWUUsTUFBTTs7OzRDQUE5Q0Qsc0JBQXNCOzRDQUU1QixJQUFJQSxxQkFBcUI7Z0RBQ3ZCOztvREFBTzs7NENBQ1Q7Ozs7Ozs0QkFDRjs7OztvQkFOQUosV0FBVyxlQU9YQyxxQkFBcUJEO29CQUUzQjs7d0JBQU9DOzs7O0lBQ1Q7O0FBRU8sU0FBU1IsbUJBQW1CYSxZQUFZLEVBQUVDLGNBQWM7SUFDN0QsSUFBSUMscUJBQXFCO0lBRXpCLElBQU1DLHFCQUFxQkgsYUFBYUksTUFBTSxFQUN4Q0MseUJBQ0UscUJBQUdMO0lBR1hULFNBQVNjLHdCQUF3QixTQUFDQyxhQUFhQztRQUM3QyxJQUFNQyxrQkFBa0JGLFlBQVlHLE9BQU8sSUFDckNDLGtCQUFrQkgsWUFBWUUsT0FBTztRQUUzQyxJQUFJRCxvQkFBb0JFLGlCQUFpQjtZQUN2QyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQU1DLDZCQUE2Qk4sdUJBQXVCRCxNQUFNO0lBRWhFLElBQUlELHFCQUFxQlEsNEJBQTRCO1FBQ25EckIsT0FBT2Usd0JBQXdCLFNBQUNPO1lBQzlCLElBQU1DLGlDQUFpQ2IsYUFBYWMsUUFBUSxDQUFDRjtZQUU3RCxJQUFJLENBQUNDLGdDQUFnQztnQkFDbkMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFNRSxrQkFBa0IzQixNQUFNWSxlQUN4QlksYUFBYUcsaUJBQ2JDLG1CQUFtQkosV0FBV0ssU0FBUztRQUU3Q2hCLGVBQWVpQixJQUFJLENBQUMsQUFBQyxRQUF3QixPQUFqQkYsa0JBQWlCO1FBRTdDZCxxQkFBcUI7SUFDdkI7SUFFQSxPQUFPQTtBQUNUIn0=