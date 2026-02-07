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
        releaseContext.info("The '".concat(typePrefixString, "' type prefix is duplicated at least once."));
        typePrefixesVerify = false;
    }
    return typePrefixesVerify;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgYXN5bmNSZXNvbHZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cykge1xuICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IGFzeW5jUmVzb2x2ZShmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzLCBhc3luYyAoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0VmVyaWZpZXMgPSBhd2FpdCBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0VmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSksXG4gICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gcmVzb2x2ZWQ7ICAvLy9cblxuICByZXR1cm4gZmlsZUNvbnRleHRzVmVyaWZ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHRydWU7XG5cbiAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aCxcbiAgICBjb21wcmVzc2VkVHlwZVByZWZpeGVzID0gWyAgLy8vXG4gICAgICAuLi50eXBlUHJlZml4ZXMsXG4gICAgXTtcblxuICBjb21wcmVzcyhjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeEEsIHR5cGVQcmVmaXhCKSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEFOYW1lID0gdHlwZVByZWZpeEEuZ2V0TmFtZSgpLFxuICAgICAgdHlwZVByZWZpeEJOYW1lID0gdHlwZVByZWZpeEIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhBTmFtZSAhPT0gdHlwZVByZWZpeEJOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoID0gY29tcHJlc3NlZFR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA+IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoKSB7XG4gICAgZmlsdGVyKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4KSA9PiB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuaW5jbHVkZXModHlwZVByZWZpeCk7XG5cbiAgICAgIGlmICghdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKSxcbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXgsIC8vL1xuICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGR1cGxpY2F0ZWQgYXQgbGVhc3Qgb25jZS5gKVxuXG4gICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZVByZWZpeGVzVmVyaWZ5O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGVDb250ZXh0cyIsInZlcmlmeVR5cGVQcmVmaXhlcyIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJjb21wcmVzcyIsImZpbGVDb250ZXh0cyIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwicmVzb2x2ZWQiLCJmaWxlQ29udGV4dHNWZXJpZnkiLCJhc3luY1Jlc29sdmUiLCJmaWxlQ29udGV4dCIsImZpbGVDb250ZXh0VmVyaWZpZXMiLCJ2ZXJpZnkiLCJ0eXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dCIsInR5cGVQcmVmaXhlc1ZlcmlmeSIsInR5cGVQcmVmaXhlc0xlbmd0aCIsImxlbmd0aCIsImNvbXByZXNzZWRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4QSIsInR5cGVQcmVmaXhCIiwidHlwZVByZWZpeEFOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVmaXhCTmFtZSIsImNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoIiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCIsImluY2x1ZGVzIiwiZmlyc3RUeXBlUHJlZml4IiwidHlwZVByZWZpeFN0cmluZyIsImdldFN0cmluZyIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVFzQkE7ZUFBQUE7O1FBYU5DO2VBQUFBOzs7eUJBbkJlOzRCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFRQyxRQUE0QkMseUJBQWMsQ0FBMUNELE9BQU9FLFNBQXFCRCx5QkFBYyxDQUFuQ0MsUUFBUUMsV0FBYUYseUJBQWMsQ0FBM0JFO0FBRWhCLFNBQWVMLG1CQUFtQk0sWUFBWSxFQUFFQyxvQkFBb0I7O1lBQ25FQyxVQU9KQzs7OztvQkFQZTs7d0JBQU1DLElBQUFBLDBCQUFZLEVBQUNKLGNBQWNDLHNCQUFzQixTQUFPSTs7b0NBQ3JFQzs7Ozs0Q0FBc0I7O2dEQUFNRCxZQUFZRSxNQUFNOzs7NENBQTlDRCxzQkFBc0I7NENBRTVCLElBQUlBLHFCQUFxQjtnREFDdkI7O29EQUFPOzs0Q0FDVDs7Ozs7OzRCQUNGOzs7O29CQU5JSixXQUFXLGVBT2ZDLHFCQUFxQkQ7b0JBRXZCOzt3QkFBT0M7Ozs7SUFDVDs7QUFFTyxTQUFTUixtQkFBbUJhLFlBQVksRUFBRUMsY0FBYztJQUM3RCxJQUFJQyxxQkFBcUI7SUFFekIsSUFBTUMscUJBQXFCSCxhQUFhSSxNQUFNLEVBQzVDQyx5QkFDRSxxQkFBR0w7SUFHUFQsU0FBU2Msd0JBQXdCLFNBQUNDLGFBQWFDO1FBQzdDLElBQU1DLGtCQUFrQkYsWUFBWUcsT0FBTyxJQUN6Q0Msa0JBQWtCSCxZQUFZRSxPQUFPO1FBRXZDLElBQUlELG9CQUFvQkUsaUJBQWlCO1lBQ3ZDLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBTUMsNkJBQTZCTix1QkFBdUJELE1BQU07SUFFaEUsSUFBSUQscUJBQXFCUSw0QkFBNEI7UUFDbkRyQixPQUFPZSx3QkFBd0IsU0FBQ087WUFDOUIsSUFBTUMsaUNBQWlDYixhQUFhYyxRQUFRLENBQUNGO1lBRTdELElBQUksQ0FBQ0MsZ0NBQWdDO2dCQUNuQyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQU1FLGtCQUFrQjNCLE1BQU1ZLGVBQzVCWSxhQUFhRyxpQkFDYkMsbUJBQW1CSixXQUFXSyxTQUFTO1FBRXpDaEIsZUFBZWlCLElBQUksQ0FBQyxBQUFDLFFBQXdCLE9BQWpCRixrQkFBaUI7UUFFN0NkLHFCQUFxQjtJQUN2QjtJQUVBLE9BQU9BO0FBQ1QifQ==