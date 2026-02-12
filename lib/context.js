"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Context;
    }
});
var _constants = require("./constants");
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var Context = /*#__PURE__*/ function() {
    function Context(context) {
        _class_call_check(this, Context);
        this.context = context;
    }
    _create_class(Context, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.context.getReleaseContext();
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                return this.context.nodesAsString(node);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                return this.context.nodeAsString(node);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var level = _constants.TRACE_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var level = _constants.DEBUG_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var level = _constants.INFO_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var level = _constants.WARNING_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var level = _constants.ERROR_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message) {
                var depth = this.getDepth(), indent = _constants.DOUBLE_SPACE.repeat(depth);
                message = "".concat(indent).concat(message); ///
                var releaseContext = this.getReleaseContext();
                releaseContext.writeToLog(level, message);
            }
        },
        {
            key: "break",
            value: function _break(node) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.context.break(node)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var context = remainingArguments.pop();
                context = _construct(Class, [
                    context
                ].concat(_to_consumable_array(remainingArguments))); ///
                return context;
            }
        }
    ]);
    return Context;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgRVJST1JfTEVWRUwsIFdBUk5JTkdfTEVWRUwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSk7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGVudCA9IERPVUJMRV9TUEFDRS5yZXBlYXQoZGVwdGgpO1xuXG4gICAgbWVzc2FnZSA9IGAke2luZGVudH0ke21lc3NhZ2V9YDsgIC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUpIHsgYXdhaXQgdGhpcy5jb250ZXh0LmJyZWFrKG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJub2Rlc0FzU3RyaW5nIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImxldmVsIiwiVFJBQ0VfTEVWRUwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJERUJVR19MRVZFTCIsImluZm8iLCJJTkZPX0xFVkVMIiwid2FybmluZyIsIldBUk5JTkdfTEVWRUwiLCJlcnJvciIsIkVSUk9SX0xFVkVMIiwiaW5kZW50IiwiRE9VQkxFX1NQQUNFIiwicmVwZWF0IiwicmVsZWFzZUNvbnRleHQiLCJicmVhayIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3lCQUYwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNQQyxPQUFPO2dDQURBRDtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUZFRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxRQUFRLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxRQUFRO2dCQUVqQ0M7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBc0IsT0FBTyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksaUJBQWlCO1lBQUk7OztZQUUvREMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLElBQUk7Z0JBQUksT0FBTyxJQUFJLENBQUNOLE9BQU8sQ0FBQ0ssYUFBYSxDQUFDQztZQUFPOzs7WUFFL0RDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxJQUFJO2dCQUFJLE9BQU8sSUFBSSxDQUFDTixPQUFPLENBQUNPLFlBQVksQ0FBQ0Q7WUFBTzs7O1lBRTdERSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztnQkFDWCxJQUFNQyxRQUFRQyxzQkFBVztnQkFFekIsSUFBSSxDQUFDQyxVQUFVLENBQUNGLE9BQU9EO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1KLE9BQU87Z0JBQ1gsSUFBTUMsUUFBUUksc0JBQVc7Z0JBRXpCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRixPQUFPRDtZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLTixPQUFPO2dCQUNWLElBQU1DLFFBQVFNLHFCQUFVO2dCQUV4QixJQUFJLENBQUNKLFVBQVUsQ0FBQ0YsT0FBT0Q7WUFDekI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVIsT0FBTztnQkFDYixJQUFNQyxRQUFRUSx3QkFBYTtnQkFFM0IsSUFBSSxDQUFDTixVQUFVLENBQUNGLE9BQU9EO1lBQ3pCOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1WLE9BQU87Z0JBQ1gsSUFBTUMsUUFBUVUsc0JBQVc7Z0JBRXpCLElBQUksQ0FBQ1IsVUFBVSxDQUFDRixPQUFPRDtZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixLQUFLLEVBQUVELE9BQU87Z0JBQ3ZCLElBQU1OLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCbUIsU0FBU0MsdUJBQVksQ0FBQ0MsTUFBTSxDQUFDcEI7Z0JBRW5DTSxVQUFVLEFBQUMsR0FBV0EsT0FBVFksUUFBaUIsT0FBUlosVUFBWSxHQUFHO2dCQUVyQyxJQUFNZSxpQkFBaUIsSUFBSSxDQUFDcEIsaUJBQWlCO2dCQUU3Q29CLGVBQWVaLFVBQVUsQ0FBQ0YsT0FBT0Q7WUFDbkM7OztZQUVNZ0IsS0FBQUE7bUJBQU4sU0FBTUEsT0FBTW5CLElBQUk7Ozs7O2dDQUFJOztvQ0FBTSxJQUFJLENBQUNOLE9BQU8sQ0FBQ3lCLEtBQUssQ0FBQ25COzs7Z0NBQXpCOzs7Ozs7Z0JBQWdDOzs7OztZQUU3Q29CLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDN0MsSUFBSTVCLFVBQVU0QixtQkFBbUJDLEdBQUc7Z0JBRXBDN0IsVUFBVSxXQUFJMkIsT0FBSjtvQkFBVTNCO2lCQUErQixDQUF6QyxPQUFtQixxQkFBRzRCLHVCQUFzQixHQUFHO2dCQUV6RCxPQUFPNUI7WUFDVDs7O1dBeEVtQkQifQ==