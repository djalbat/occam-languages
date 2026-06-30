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
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
        return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
    }
}
Object.assign(NonTerminalNode.prototype, _node.default);
const _default = NonTerminalNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub25UZXJtaW5hbE5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSBhcyBOb25UZXJtaW5hbE5vZGVCYXNlIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL25vZGVcIjtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlQmFzZSB7XG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGVCYXNlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTm9uVGVybWluYWxOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vblRlcm1pbmFsTm9kZTtcbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJOb25UZXJtaW5hbE5vZGVCYXNlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzhCQVZ1RDs2REFFaEM7Ozs7OztBQUV2QixNQUFNQSx3QkFBd0JDLDZCQUFtQjtJQUMvQyxPQUFPQywyQ0FBMkNDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT04sNkJBQW1CLENBQUNDLDBDQUEwQyxDQUFDQyxPQUFPQyxVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQ2pPO0FBRUFDLE9BQU9DLE1BQU0sQ0FBQ1QsZ0JBQWdCVSxTQUFTLEVBQUVDLGFBQVU7TUFFbkQsV0FBZVgifQ==