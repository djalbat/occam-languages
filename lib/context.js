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
            key: "setContext",
            value: function setContext(context) {
                this.context = context;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGxldCBkZXB0aCA9IHRoaXMuY29udGV4dC5nZXREZXB0aCgpO1xuXG4gICAgZGVwdGgrKztcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJlbGVhc2VDb250ZXh0KCk7IH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmdldERlcHRoKCksXG4gICAgICAgICAgaW5kZW50ID0gRE9VQkxFX1NQQUNFLnJlcGVhdChkZXB0aCk7XG5cbiAgICBtZXNzYWdlID0gYCR7aW5kZW50fSR7bWVzc2FnZX1gOyAgLy8vXG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJzZXRDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImdldFJlbGVhc2VDb250ZXh0Iiwid3JpdGVUb0xvZyIsImxldmVsIiwibWVzc2FnZSIsImluZGVudCIsIkRPVUJMRV9TUEFDRSIsInJlcGVhdCIsInJlbGVhc2VDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eUJBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNQQyxPQUFPO2dDQURBRDtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUZFRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXRixPQUFPO2dCQUNoQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7WUFDakI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsUUFBUSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0csUUFBUTtnQkFFakNDO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXNCLE9BQU8sSUFBSSxDQUFDTCxPQUFPLENBQUNLLGlCQUFpQjtZQUFJOzs7WUFFL0RDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxLQUFLLEVBQUVDLE9BQU87Z0JBQ3ZCLElBQU1KLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCTSxTQUFTQyx1QkFBWSxDQUFDQyxNQUFNLENBQUNQO2dCQUVuQ0ksVUFBVSxBQUFDLEdBQVdBLE9BQVRDLFFBQWlCLE9BQVJELFVBQVksR0FBRztnQkFFckMsSUFBTUksaUJBQWlCLElBQUksQ0FBQ1AsaUJBQWlCO2dCQUU3Q08sZUFBZU4sVUFBVSxDQUFDQyxPQUFPQztZQUNuQzs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzdDLElBQUlmLFVBQVVlLG1CQUFtQkMsR0FBRztnQkFFcENoQixVQUFVLFdBQUljLE9BQUo7b0JBQVVkO2lCQUErQixDQUF6QyxPQUFtQixxQkFBR2UsdUJBQXNCLEdBQUc7Z0JBRXpELE9BQU9mO1lBQ1Q7OztXQXhDbUJEIn0=