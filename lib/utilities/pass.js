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
    get areChildNodesCongruent () {
        return areChildNodesCongruent;
    },
    get nonTerminalNodeQuery () {
        return nonTerminalNodeQuery;
    }
});
const _necessary = require("necessary");
const _query = require("../utilities/query");
const { match } = _necessary.arrayUtilities;
const nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
function areChildNodesCongruent(childNodesA, childNodesB) {
    const childNodesCongruent = match(childNodesA, childNodesB, (childNodeA, childNodeB)=>{
        const childNodeCongruent = isChildNodeCongruent(childNodeA, childNodeB);
        if (childNodeCongruent) {
            return true;
        }
    });
    return childNodesCongruent;
}
function isChildNodeCongruent(childNodeA, childNodeB) {
    let childNodeCongruent = false;
    const childNodeANonTerminalNode = childNodeA.isNonTerminalNode(), childNodeBNonTerminalNode = childNodeB.isNonTerminalNode();
    if (childNodeANonTerminalNode && childNodeBNonTerminalNode) {
        childNodeCongruent = true;
    } else {
        const childNodeATerminalNode = !childNodeANonTerminalNode, childNodeBTerminalNode = !childNodeBNonTerminalNode;
        if (childNodeATerminalNode && childNodeBTerminalNode) {
            const terminalNodeA = childNodeA, terminalNodeB = childNodeB, terminalNodeAMatchesTerminalNodeB = terminalNodeA.match(terminalNodeB);
            if (terminalNodeAMatchesTerminalNodeB) {
                childNodeCongruent = true;
            }
        }
    }
    return childNodeCongruent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBjb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJlQ2hpbGROb2Rlc0NvbmdydWVudChjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IpIHtcbiAgY29uc3QgY2hpbGROb2Rlc0NvbmdydWVudCA9IG1hdGNoKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgKGNoaWxkTm9kZUEsIGNoaWxkTm9kZUIpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVDb25ncnVlbnQgPSBpc0NoaWxkTm9kZUNvbmdydWVudChjaGlsZE5vZGVBLCBjaGlsZE5vZGVCKTtcblxuICAgIGlmIChjaGlsZE5vZGVDb25ncnVlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNDb25ncnVlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzQ2hpbGROb2RlQ29uZ3J1ZW50KGNoaWxkTm9kZUEsIGNoaWxkTm9kZUIpIHtcbiAgbGV0IGNoaWxkTm9kZUNvbmdydWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZUFOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGVBLmlzTm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgIGNoaWxkTm9kZUJOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKGNoaWxkTm9kZUFOb25UZXJtaW5hbE5vZGUgJiYgY2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNoaWxkTm9kZUNvbmdydWVudCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2hpbGROb2RlQVRlcm1pbmFsTm9kZSA9ICFjaGlsZE5vZGVBTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIGNoaWxkTm9kZUJUZXJtaW5hbE5vZGUgPSAhY2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZTtcblxuICAgIGlmIChjaGlsZE5vZGVBVGVybWluYWxOb2RlICYmIGNoaWxkTm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBjaGlsZE5vZGVBLCAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBjaGlsZE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUFNYXRjaGVzVGVybWluYWxOb2RlQiA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQik7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVBTWF0Y2hlc1Rlcm1pbmFsTm9kZUIpIHtcbiAgICAgICAgY2hpbGROb2RlQ29uZ3J1ZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGROb2RlQ29uZ3J1ZW50O1xufVxuIl0sIm5hbWVzIjpbImFyZUNoaWxkTm9kZXNDb25ncnVlbnQiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlUXVlcnkiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc0NvbmdydWVudCIsImNoaWxkTm9kZUEiLCJjaGlsZE5vZGVCIiwiY2hpbGROb2RlQ29uZ3J1ZW50IiwiaXNDaGlsZE5vZGVDb25ncnVlbnQiLCJjaGlsZE5vZGVBTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVCTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlQVRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZUFNYXRjaGVzVGVybWluYWxOb2RlQiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBVWdCQTtlQUFBQTs7UUFGSEM7ZUFBQUE7OzsyQkFOa0I7dUJBRUw7QUFFMUIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFekIsTUFBTUYsdUJBQXVCRyxJQUFBQSxnQkFBUyxFQUFDO0FBRXZDLFNBQVNKLHVCQUF1QkssV0FBVyxFQUFFQyxXQUFXO0lBQzdELE1BQU1DLHNCQUFzQkwsTUFBTUcsYUFBYUMsYUFBYSxDQUFDRSxZQUFZQztRQUN2RSxNQUFNQyxxQkFBcUJDLHFCQUFxQkgsWUFBWUM7UUFFNUQsSUFBSUMsb0JBQW9CO1lBQ3RCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNJLHFCQUFxQkgsVUFBVSxFQUFFQyxVQUFVO0lBQ2xELElBQUlDLHFCQUFxQjtJQUV6QixNQUFNRSw0QkFBNEJKLFdBQVdLLGlCQUFpQixJQUN4REMsNEJBQTRCTCxXQUFXSSxpQkFBaUI7SUFFOUQsSUFBSUQsNkJBQTZCRSwyQkFBMkI7UUFDMURKLHFCQUFxQjtJQUN2QixPQUFPO1FBQ0wsTUFBTUsseUJBQXlCLENBQUNILDJCQUMxQkkseUJBQXlCLENBQUNGO1FBRWhDLElBQUlDLDBCQUEwQkMsd0JBQXdCO1lBQ3BELE1BQU1DLGdCQUFnQlQsWUFDaEJVLGdCQUFnQlQsWUFDaEJVLG9DQUFvQ0YsY0FBY2YsS0FBSyxDQUFDZ0I7WUFFOUQsSUFBSUMsbUNBQW1DO2dCQUNyQ1QscUJBQXFCO1lBQ3ZCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==