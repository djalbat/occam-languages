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
    get asyncEvery () {
        return asyncEvery;
    },
    get asyncForEach () {
        return asyncForEach;
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
var _default = {
    asyncSome: asyncSome,
    asyncEvery: asyncEvery,
    asyncReduce: asyncReduce,
    asyncForEach: asyncForEach,
    asyncResolve: asyncResolve
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBpdGVtID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soaXRlbSwgaW5kZXgsIGFycmF5KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpbmRleF07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBjYWxsYmFjayhpdGVtLCBpbmRleCwgYXJyYXkpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gYXdhaXQgY2FsbGJhY2sodmFsdWUsIGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3luY0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgY29uc3QgaXRlbSA9IGFycmF5W2luZGV4XTtcblxuICAgIGF3YWl0IGNhbGxiYWNrKGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jUmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2goYXJyYXlBLCBhc3luYyAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGF3YWl0IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXN5bmNTb21lLFxuICBhc3luY0V2ZXJ5LFxuICBhc3luY1JlZHVjZSxcbiAgYXN5bmNGb3JFYWNoLFxuICBhc3luY1Jlc29sdmVcbn07XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeSIsImFzeW5jRm9yRWFjaCIsImFzeW5jUmVkdWNlIiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNTb21lIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheSIsImNhbGxiYWNrIiwicmVzdWx0IiwibGVuZ3RoIiwiaW5kZXgiLCJpdGVtIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJhcnJheUEiLCJhcnJheUIiLCJyZXNvbHZlZCIsImFycmF5QUxlbmd0aCIsImVsZW1lbnRBIiwicGFzc2VkIiwiZWxlbWVudEIiLCJwdXNoIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF3QnNCQTtlQUFBQTs7UUFnQ0FDO2VBQUFBOztRQWRBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztR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