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
        return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
    }
}
Object.assign(NonTerminalNode.prototype, _node.default);
const _default = NonTerminalNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub25UZXJtaW5hbE5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSBhcyBOb25UZXJtaW5hbE5vZGVCYXNlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL25vZGVcIjtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlQmFzZSB7XG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBjb25zdCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGVCYXNlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9uVGVybWluYWxOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vblRlcm1pbmFsTm9kZTtcbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJOb25UZXJtaW5hbE5vZGVCYXNlIiwiaXNVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsIkNsYXNzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7OEJBaEJ1RDs2REFFaEM7Ozs7OztBQUV2QixNQUFNQSx3QkFBd0JDLDZCQUFtQjtJQUMvQ0Msa0JBQWtCO1FBQ2hCLE1BQU1DLGdCQUFnQjtRQUV0QixPQUFPQTtJQUNUO0lBRUEsT0FBT0MsMkNBQTJDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9SLDZCQUFtQixDQUFDRywwQ0FBMEMsQ0FBQ0MsT0FBT0MsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUNqTztBQUVBQyxPQUFPQyxNQUFNLENBQUNYLGdCQUFnQlksU0FBUyxFQUFFQyxhQUFVO01BRW5ELFdBQWViIn0=