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
const _occamquery = require("occam-query");
const { match } = _necessary.arrayUtilities, { nodeQuery } = _occamquery.queryUtilities;
const nonTerminalNodeQuery = nodeQuery("/*");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuZXhwb3J0IGNvbnN0IG5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLypcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDaGlsZE5vZGVzQ29uZ3J1ZW50KGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQikge1xuICBjb25zdCBjaGlsZE5vZGVzQ29uZ3J1ZW50ID0gbWF0Y2goY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCAoY2hpbGROb2RlQSwgY2hpbGROb2RlQikgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZUNvbmdydWVudCA9IGlzQ2hpbGROb2RlQ29uZ3J1ZW50KGNoaWxkTm9kZUEsIGNoaWxkTm9kZUIpO1xuXG4gICAgaWYgKGNoaWxkTm9kZUNvbmdydWVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc0NvbmdydWVudDtcbn1cblxuZnVuY3Rpb24gaXNDaGlsZE5vZGVDb25ncnVlbnQoY2hpbGROb2RlQSwgY2hpbGROb2RlQikge1xuICBsZXQgY2hpbGROb2RlQ29uZ3J1ZW50ID0gZmFsc2U7XG5cbiAgY29uc3QgY2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgY2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZUIuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAoY2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSAmJiBjaGlsZE5vZGVCTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY2hpbGROb2RlQ29uZ3J1ZW50ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjaGlsZE5vZGVBVGVybWluYWxOb2RlID0gIWNoaWxkTm9kZUFOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgY2hpbGROb2RlQlRlcm1pbmFsTm9kZSA9ICFjaGlsZE5vZGVCTm9uVGVybWluYWxOb2RlO1xuXG4gICAgaWYgKGNoaWxkTm9kZUFUZXJtaW5hbE5vZGUgJiYgY2hpbGROb2RlQlRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IGNoaWxkTm9kZUEsIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IGNoaWxkTm9kZUIsIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQU1hdGNoZXNUZXJtaW5hbE5vZGVCID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZUFNYXRjaGVzVGVybWluYWxOb2RlQikge1xuICAgICAgICBjaGlsZE5vZGVDb25ncnVlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZE5vZGVDb25ncnVlbnQ7XG59XG4iXSwibmFtZXMiOlsiYXJlQ2hpbGROb2Rlc0NvbmdydWVudCIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNDb25ncnVlbnQiLCJjaGlsZE5vZGVBIiwiY2hpbGROb2RlQiIsImNoaWxkTm9kZUNvbmdydWVudCIsImlzQ2hpbGROb2RlQ29uZ3J1ZW50IiwiY2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZUFUZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVBTWF0Y2hlc1Rlcm1pbmFsTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVnQkE7ZUFBQUE7O1FBRkhDO2VBQUFBOzs7MkJBTmtCOzRCQUNBO0FBRS9CLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjLEVBQzFCLEVBQUVDLFNBQVMsRUFBRSxHQUFHQywwQkFBYztBQUU3QixNQUFNSix1QkFBdUJHLFVBQVU7QUFFdkMsU0FBU0osdUJBQXVCTSxXQUFXLEVBQUVDLFdBQVc7SUFDN0QsTUFBTUMsc0JBQXNCTixNQUFNSSxhQUFhQyxhQUFhLENBQUNFLFlBQVlDO1FBQ3ZFLE1BQU1DLHFCQUFxQkMscUJBQXFCSCxZQUFZQztRQUU1RCxJQUFJQyxvQkFBb0I7WUFDdEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUO0FBRUEsU0FBU0kscUJBQXFCSCxVQUFVLEVBQUVDLFVBQVU7SUFDbEQsSUFBSUMscUJBQXFCO0lBRXpCLE1BQU1FLDRCQUE0QkosV0FBV0ssaUJBQWlCLElBQ3hEQyw0QkFBNEJMLFdBQVdJLGlCQUFpQjtJQUU5RCxJQUFJRCw2QkFBNkJFLDJCQUEyQjtRQUMxREoscUJBQXFCO0lBQ3ZCLE9BQU87UUFDTCxNQUFNSyx5QkFBeUIsQ0FBQ0gsMkJBQzFCSSx5QkFBeUIsQ0FBQ0Y7UUFFaEMsSUFBSUMsMEJBQTBCQyx3QkFBd0I7WUFDcEQsTUFBTUMsZ0JBQWdCVCxZQUNoQlUsZ0JBQWdCVCxZQUNoQlUsb0NBQW9DRixjQUFjaEIsS0FBSyxDQUFDaUI7WUFFOUQsSUFBSUMsbUNBQW1DO2dCQUNyQ1QscUJBQXFCO1lBQ3ZCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==