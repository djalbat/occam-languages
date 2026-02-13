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
        var result, length, index, element;
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
                    element = array[index];
                    return [
                        4,
                        callback(element, index, array)
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
        var result, length, index, element;
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
                    element = array[index];
                    return [
                        4,
                        callback(element, index, array)
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
        var value, length, index, element;
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
                    element = array[index];
                    return [
                        4,
                        callback(value, element, index, array)
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
        var length, index, element;
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
                        callback(element, index, array)
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
                                        asyncForEach(arrayA, function(elementA, index) {
                                            return _async_to_generator(function() {
                                                var passed, elementB;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                callback(elementA, index, arrayA)
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
                        callback(element, index, array)
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
                        callback(element, index, array)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gYXdhaXQgY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGF3YWl0IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2goYXJyYXlBLCBhc3luYyAoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50QSwgaW5kZXgsIGFycmF5QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIHJlc29sdmVkID0gKGFycmF5QUxlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gYXdhaXQgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0JhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBsZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBhd2FpdCBjYWxsYmFjayhlbGVtZW50LCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luY1NvbWUsXG4gIGFzeW5jRXZlcnksXG4gIGFzeW5jUmVkdWNlLFxuICBhc3luY0ZvckVhY2gsXG4gIGFzeW5jUmVzb2x2ZSxcbiAgYXN5bmNGb3J3YXJkc0V2ZXJ5LFxuICBhc3luY0JhY2t3YXJkc0V2ZXJ5XG59O1xuIl0sIm5hbWVzIjpbImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY0V2ZXJ5IiwiYXN5bmNGb3JFYWNoIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNSZWR1Y2UiLCJhc3luY1Jlc29sdmUiLCJhc3luY1NvbWUiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiY2FsbGJhY2siLCJyZXN1bHQiLCJsZW5ndGgiLCJpbmRleCIsImVsZW1lbnQiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImFycmF5QSIsImFycmF5QiIsInJlc29sdmVkIiwiYXJyYXlBTGVuZ3RoIiwiZWxlbWVudEEiLCJwYXNzZWQiLCJlbGVtZW50QiIsInB1c2giLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlJc0JBO2VBQUFBOztRQXpHQUM7ZUFBQUE7O1FBZ0NBQztlQUFBQTs7UUEwREFDO2VBQUFBOztRQXhFQUM7ZUFBQUE7O1FBd0JBQztlQUFBQTs7UUE1REFDO2VBQUFBOztRQTBJdEI7ZUFBQTs7O3lCQTlJK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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