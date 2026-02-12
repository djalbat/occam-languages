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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgRVJST1JfTEVWRUwsIFdBUk5JTkdfTEVWRUwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGVudCA9IERPVUJMRV9TUEFDRS5yZXBlYXQoZGVwdGgpO1xuXG4gICAgbWVzc2FnZSA9IGAke2luZGVudH0ke21lc3NhZ2V9YDsgIC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBjb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7ICAvLy9cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImdldFJlbGVhc2VDb250ZXh0IiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJUUkFDRV9MRVZFTCIsIndyaXRlVG9Mb2ciLCJkZWJ1ZyIsIkRFQlVHX0xFVkVMIiwiaW5mbyIsIklORk9fTEVWRUwiLCJ3YXJuaW5nIiwiV0FSTklOR19MRVZFTCIsImVycm9yIiwiRVJST1JfTEVWRUwiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJyZXBlYXQiLCJyZWxlYXNlQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMi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