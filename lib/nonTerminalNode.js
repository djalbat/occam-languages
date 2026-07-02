"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamparsers = require("occam-parsers");
const _node = /*#__PURE__*/ _interop_require_default(require("./mixins/node"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class NonTerminalNode extends _occamparsers.NonTerminalNode {
    isUnprecedented() {
        const unprecedented = false;
        return unprecedented;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
        if (precedence === undefined) {
            precedence = opacity; ///
            opacity = childNodes; ///
            childNodes = ruleName; ///
            ruleName = Class; ///
            Class = NonTerminalNode; ///
        }
        const nonTerminalNode = _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
        return nonTerminalNode;
    }
}
Object.assign(NonTerminalNode.prototype, _node.default);
const _default = NonTerminalNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub25UZXJtaW5hbE5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSBhcyBOb25UZXJtaW5hbE5vZGVCYXNlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL25vZGVcIjtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlQmFzZSB7XG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBjb25zdCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGVCYXNlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE5vblRlcm1pbmFsTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBOb25UZXJtaW5hbE5vZGU7XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlQmFzZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwibm9uVGVybWluYWxOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0NBOzs7ZUFBQTs7OzhCQWhDdUQ7NkRBRWhDOzs7Ozs7QUFFdkIsTUFBTUEsd0JBQXdCQyw2QkFBbUI7SUFDL0NDLGtCQUFrQjtRQUNoQixNQUFNQyxnQkFBZ0I7UUFFdEIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLDJDQUEyQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFDbEcsSUFBSUEsZUFBZUMsV0FBVztZQUM1QkQsYUFBYUQsU0FBUyxHQUFHO1lBRXpCQSxVQUFVRCxZQUFZLEdBQUc7WUFFekJBLGFBQWFELFVBQVcsR0FBRztZQUUzQkEsV0FBV0QsT0FBTyxHQUFHO1lBRXJCQSxRQUFRTCxpQkFBa0IsR0FBRztRQUMvQjtRQUVBLE1BQU1XLGtCQUFrQlYsNkJBQW1CLENBQUNHLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQyxTQUFTQztRQUU3SCxPQUFPRTtJQUNUO0FBQ0Y7QUFFQUMsT0FBT0MsTUFBTSxDQUFDYixnQkFBZ0JjLFNBQVMsRUFBRUMsYUFBVTtNQUVuRCxXQUFlZiJ9