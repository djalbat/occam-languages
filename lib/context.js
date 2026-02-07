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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBpbmRlbnQgPSBET1VCTEVfU1BBQ0UucmVwZWF0KGRlcHRoKTtcblxuICAgIG1lc3NhZ2UgPSBgJHtpbmRlbnR9JHttZXNzYWdlfWA7ICAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpO1xuXG4gICAgY29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxufSJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ3cml0ZVRvTG9nIiwibGV2ZWwiLCJtZXNzYWdlIiwiaW5kZW50IiwiRE9VQkxFX1NQQUNFIiwicmVwZWF0IiwicmVsZWFzZUNvbnRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt5QkFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLE9BQU87Z0NBREFEO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBRkVEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxPQUFPO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFFBQVEsSUFBSSxDQUFDSCxPQUFPLENBQUNFLFFBQVE7Z0JBRWpDQztnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFzQixPQUFPLElBQUksQ0FBQ0osT0FBTyxDQUFDSSxpQkFBaUI7WUFBSTs7O1lBRS9EQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxPQUFPO2dCQUN2QixJQUFNSixRQUFRLElBQUksQ0FBQ0QsUUFBUSxJQUNyQk0sU0FBU0MsdUJBQVksQ0FBQ0MsTUFBTSxDQUFDUDtnQkFFbkNJLFVBQVUsQUFBQyxHQUFXQSxPQUFUQyxRQUFpQixPQUFSRCxVQUFZLEdBQUc7Z0JBRXJDLElBQU1JLGlCQUFpQixJQUFJLENBQUNQLGlCQUFpQjtnQkFFN0NPLGVBQWVOLFVBQVUsQ0FBQ0MsT0FBT0M7WUFDbkM7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUM3QyxJQUFJZCxVQUFVYyxtQkFBbUJDLEdBQUc7Z0JBRXBDZixVQUFVLFdBQUlhLE9BQUo7b0JBQVViO2lCQUErQixDQUF6QyxPQUFtQixxQkFBR2MsdUJBQXNCLEdBQUc7Z0JBRXpELE9BQU9kO1lBQ1Q7OztXQXBDbUJEIn0=