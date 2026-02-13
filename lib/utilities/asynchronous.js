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
    get asyncBackwardsEvery () {
        return asyncBackwardsEvery;
    },
    get asyncEvery () {
        return asyncEvery;
    },
    get asyncForEach () {
        return asyncForEach;
    },
    get asyncForwardsEvery () {
        return asyncForwardsEvery;
    },
    get asyncReduce () {
        return asyncReduce;
    },
    get asyncResolve () {
        return asyncResolve;
    },
    get asyncSome () {
        return asyncSome;
    },
    get default () {
        return _default;
    }
});
var _necessary = require("necessary");
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var filter = _necessary.arrayUtilities.filter;
function asyncSome(array, callback) {
    return _async_to_generator(function() {
        var result, length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = false;
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(item, index, array)
                    ];
                case 2:
                    result = _state.sent();
                    if (result) {
                        return [
                            3,
                            4
                        ];
                    }
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        result
                    ];
            }
        });
    })();
}
function asyncEvery(array, callback) {
    return _async_to_generator(function() {
        var result, length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = true;
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(item, index, array)
                    ];
                case 2:
                    result = _state.sent();
                    if (!result) {
                        return [
                            3,
                            4
                        ];
                    }
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        result
                    ];
            }
        });
    })();
}
function asyncReduce(array, callback, initialValue) {
    return _async_to_generator(function() {
        var value, length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    value = initialValue; ///
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(value, item, index, array)
                    ];
                case 2:
                    value = _state.sent();
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        value
                    ];
            }
        });
    })();
}
function asyncForEach(array, callback) {
    return _async_to_generator(function() {
        var length, index, item;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    item = array[index];
                    return [
                        4,
                        callback(item, index, array)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    index += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    })();
}
function asyncResolve(arrayA, arrayB, callback) {
    return _async_to_generator(function() {
        var _loop, resolved, _ret, arrayALength;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _loop = function() {
                        var arrayALength, resolved;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    arrayALength = arrayA.length;
                                    if (arrayALength === 0) {
                                        return [
                                            2,
                                            "break"
                                        ];
                                    }
                                    resolved = false;
                                    return [
                                        4,
                                        asyncForEach(arrayA, function(elementA) {
                                            return _async_to_generator(function() {
                                                var passed, elementB;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                callback(elementA)
                                                            ];
                                                        case 1:
                                                            passed = _state.sent();
                                                            if (passed) {
                                                                elementB = elementA; ///
                                                                arrayB.push(elementB);
                                                                resolved = true;
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
                                    _state.sent();
                                    if (!resolved) {
                                        return [
                                            2,
                                            "break"
                                        ];
                                    }
                                    filter(arrayA, function(elementA) {
                                        var arrayBIncludesElementA = arrayB.includes(elementA);
                                        if (!arrayBIncludesElementA) {
                                            return true;
                                        }
                                    });
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    arrayA = _to_consumable_array(arrayA);
                    _state.label = 1;
                case 1:
                    return [
                        5,
                        _ts_values(_loop())
                    ];
                case 2:
                    _ret = _state.sent();
                    if (_ret === "break") return [
                        3,
                        4
                    ];
                    _state.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    arrayALength = arrayA.length;
                    resolved = arrayALength === 0;
                    return [
                        2,
                        resolved
                    ];
            }
        });
    })();
}
function asyncForwardsEvery(array, callback) {
    return _async_to_generator(function() {
        var length, index, element, passed;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    length = array.length;
                    index = 0;
                    _state.label = 1;
                case 1:
                    if (!(index < length)) return [
                        3,
                        4
                    ];
                    element = array[index];
                    return [
                        4,
                        callback(element, index)
                    ];
                case 2:
                    passed = _state.sent();
                    if (!passed) {
                        return [
                            2,
                            false
                        ];
                    }
                    _state.label = 3;
                case 3:
                    index++;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        true
                    ];
            }
        });
    })();
}
function asyncBackwardsEvery(array, callback) {
    return _async_to_generator(function() {
        var length, index, element, passed;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    length = array.length;
                    index = length - 1;
                    _state.label = 1;
                case 1:
                    if (!(index >= 0)) return [
                        3,
                        4
                    ];
                    element = array[index];
                    return [
                        4,
                        callback(element, index)
                    ];
                case 2:
                    passed = _state.sent();
                    if (!passed) {
                        return [
                            2,
                            false
                        ];
                    }
                    _state.label = 3;
                case 3:
                    index--;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        true
                    ];
            }
        });
    })();
}
var _default = {
    asyncSome: asyncSome,
    asyncEvery: asyncEvery,
    asyncReduce: asyncReduce,
    asyncForEach: asyncForEach,
    asyncResolve: asyncResolve,
    asyncForwardsEvery: asyncForwardsEvery,
    asyncBackwardsEvery: asyncBackwardsEvery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBpdGVtID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soaXRlbSwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpbmRleF07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBjYWxsYmFjayhpdGVtLCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gYXdhaXQgY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2luZGV4XTtcblxuICAgIGF3YWl0IGNhbGxiYWNrKGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2goYXJyYXlBLCBhc3luYyAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNCYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gbGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luY1NvbWUsXG4gIGFzeW5jRXZlcnksXG4gIGFzeW5jUmVkdWNlLFxuICBhc3luY0ZvckVhY2gsXG4gIGFzeW5jUmVzb2x2ZSxcbiAgYXN5bmNGb3J3YXJkc0V2ZXJ5LFxuICBhc3luY0JhY2t3YXJkc0V2ZXJ5XG59O1xuIl0sIm5hbWVzIjpbImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY0V2ZXJ5IiwiYXN5bmNGb3JFYWNoIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNSZWR1Y2UiLCJhc3luY1Jlc29sdmUiLCJhc3luY1NvbWUiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiY2FsbGJhY2siLCJyZXN1bHQiLCJsZW5ndGgiLCJpbmRleCIsIml0ZW0iLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImFycmF5QSIsImFycmF5QiIsInJlc29sdmVkIiwiYXJyYXlBTGVuZ3RoIiwiZWxlbWVudEEiLCJwYXNzZWQiLCJlbGVtZW50QiIsInB1c2giLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpSXNCQTtlQUFBQTs7UUF6R0FDO2VBQUFBOztRQWdDQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUF4RUFDO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBNURBQztlQUFBQTs7UUEwSXRCO2VBQUE7Ozt5QkE5SStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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