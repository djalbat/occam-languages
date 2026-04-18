"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EquivalencePass;
    }
});
const _pass = require("../utilities/pass");
class EquivalencePass {
    run(leftNode, rightNode, ...remainingArguments) {
        let success;
        const visited = this.visitNode(leftNode, rightNode, ...remainingArguments);
        success = visited; ///
        return success;
    }
    descend(leftChildNodes, rightChildNodes, ...remainingArguments) {
        let descended = false;
        const childNodesCongruent = (0, _pass.areChildNodesCongruent)(leftChildNodes, rightChildNodes);
        if (childNodesCongruent) {
            const visited = leftChildNodes.every((leftChildNode, index)=>{
                const rightChildNode = rightChildNodes[index], leftNode = leftChildNode, rightNode = rightChildNode, visited = this.visitNode(leftNode, rightNode, ...remainingArguments);
                if (visited) {
                    return true;
                }
            });
            if (visited) {
                descended = true;
            }
        }
        return descended;
    }
    visitNode(leftNode, rightNode, ...remainingArguments) {
        let visited = false;
        const leftNodeTerminalNode = leftNode.isTerminalNode(), rightNodeTerminalNode = rightNode.isTerminalNode(), leftNodeNonTerminalNode = leftNode.isNonTerminalNode(), rightNodeNonTerminalNode = rightNode.isNonTerminalNode();
        if (false) {
        ///
        } else if (leftNodeTerminalNode && rightNodeTerminalNode) {
            const leftTerminalNode = leftNode, rightTerminalNode = rightNode; ///
            visited = this.visitTerminalNode(leftTerminalNode, rightTerminalNode, ...remainingArguments);
        } else if (leftNodeNonTerminalNode && rightNodeNonTerminalNode) {
            const leftNonTerminalNode = leftNode, rightNonTerminalNode = rightNode; ///
            visited = this.visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, ...remainingArguments);
        }
        return visited;
    }
    visitTerminalNode(leftTerminalNode, rightTerminalNode, ...remainingArguments) {
        let visited;
        visited = true;
        return visited;
    }
    visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, ...remainingArguments) {
        let visited = false;
        let { maps } = this.constructor;
        maps = [
            ...maps,
            {
                leftNodeQuery: _pass.nonTerminalNodeQuery,
                rightNodeQuery: _pass.nonTerminalNodeQuery,
                run: (leftNode, rightNode, ...remainingArguments)=>{
                    let visited = false;
                    const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(); ///
                    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = this.descend(leftChildNodes, rightChildNodes, ...remainingArguments);
                        if (descended) {
                            visited = true;
                        }
                    }
                    return visited;
                }
            }
        ];
        maps.some((map)=>{
            const { leftNodeQuery, rightNodeQuery, run } = map;
            const leftNode = leftNodeQuery(leftNonTerminalNode), rightNode = rightNodeQuery(rightNonTerminalNode); ///
            if (leftNode !== null && rightNode !== null) {
                const success = run(leftNode, rightNode, ...remainingArguments);
                visited = success; ///
                return true;
            }
        });
        return visited;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSwgYXJlQ2hpbGROb2Rlc0NvbmdydWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZVBhc3Mge1xuICBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0NvbmdydWVudCA9IGFyZUNoaWxkTm9kZXNDb25ncnVlbnQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2Rlcyk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0NvbmdydWVudCkge1xuICAgICAgY29uc3QgdmlzaXRlZCA9IGxlZnRDaGlsZE5vZGVzLmV2ZXJ5KChsZWZ0Q2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByaWdodENoaWxkTm9kZSA9IHJpZ2h0Q2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgIGxlZnROb2RlID0gbGVmdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdE5vZGVUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGxlZnROb2RlTm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZVRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUobGVmdFRlcm1pbmFsTm9kZSwgcmlnaHRUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7IC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBsZWZ0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcmlnaHROb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodENoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBsZWZ0Tm9kZVF1ZXJ5LCByaWdodE5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbGVmdE5vZGVRdWVyeShsZWZ0Tm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHROb2RlUXVlcnkocmlnaHROb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgobGVmdE5vZGUgIT09IG51bGwpICYmIChyaWdodE5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZVBhc3MiLCJydW4iLCJsZWZ0Tm9kZSIsInJpZ2h0Tm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImxlZnRDaGlsZE5vZGVzIiwicmlnaHRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiY2hpbGROb2Rlc0NvbmdydWVudCIsImFyZUNoaWxkTm9kZXNDb25ncnVlbnQiLCJldmVyeSIsImxlZnRDaGlsZE5vZGUiLCJpbmRleCIsInJpZ2h0Q2hpbGROb2RlIiwibGVmdE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSIsImxlZnROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVOb25UZXJtaW5hbE5vZGUiLCJsZWZ0VGVybWluYWxOb2RlIiwicmlnaHRUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImxlZnROb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInJpZ2h0Tm9kZVF1ZXJ5IiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztzQkFGd0M7QUFFOUMsTUFBTUE7SUFDbkJDLElBQUlDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdDLGtCQUFrQixFQUFFO1FBQzlDLElBQUlDO1FBRUosTUFBTUMsVUFBVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsVUFBVUMsY0FBY0M7UUFFdkRDLFVBQVVDLFNBQVUsR0FBRztRQUV2QixPQUFPRDtJQUNUO0lBRUFHLFFBQVFDLGNBQWMsRUFBRUMsZUFBZSxFQUFFLEdBQUdOLGtCQUFrQixFQUFFO1FBQzlELElBQUlPLFlBQVk7UUFFaEIsTUFBTUMsc0JBQXNCQyxJQUFBQSw0QkFBc0IsRUFBQ0osZ0JBQWdCQztRQUVuRSxJQUFJRSxxQkFBcUI7WUFDdkIsTUFBTU4sVUFBVUcsZUFBZUssS0FBSyxDQUFDLENBQUNDLGVBQWVDO2dCQUNuRCxNQUFNQyxpQkFBaUJQLGVBQWUsQ0FBQ00sTUFBTSxFQUN2Q2QsV0FBV2EsZUFDWFosWUFBWWMsZ0JBQ1pYLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFVBQVVDLGNBQWNDO2dCQUV2RCxJQUFJRSxTQUFTO29CQUNYLE9BQU87Z0JBQ1Q7WUFDRjtZQUVBLElBQUlBLFNBQVM7Z0JBQ1hLLFlBQVk7WUFDZDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBSixVQUFVTCxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNwRCxJQUFJRSxVQUFVO1FBRWQsTUFBTVksdUJBQXVCaEIsU0FBU2lCLGNBQWMsSUFDOUNDLHdCQUF3QmpCLFVBQVVnQixjQUFjLElBQ2hERSwwQkFBMEJuQixTQUFTb0IsaUJBQWlCLElBQ3BEQywyQkFBMkJwQixVQUFVbUIsaUJBQWlCO1FBRTVELElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlKLHdCQUF3QkUsdUJBQXVCO1lBQ3hELE1BQU1JLG1CQUFtQnRCLFVBQ25CdUIsb0JBQW9CdEIsV0FBWSxHQUFHO1lBRXpDRyxVQUFVLElBQUksQ0FBQ29CLGlCQUFpQixDQUFDRixrQkFBa0JDLHNCQUFzQnJCO1FBQzNFLE9BQU8sSUFBSWlCLDJCQUEyQkUsMEJBQTBCO1lBQzlELE1BQU1JLHNCQUFzQnpCLFVBQ3RCMEIsdUJBQXVCekIsV0FBVyxHQUFHO1lBRTNDRyxVQUFVLElBQUksQ0FBQ3VCLG9CQUFvQixDQUFDRixxQkFBcUJDLHlCQUF5QnhCO1FBQ3BGO1FBRUEsT0FBT0U7SUFDVDtJQUVBb0Isa0JBQWtCRixnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUUsR0FBR3JCLGtCQUFrQixFQUFFO1FBQzVFLElBQUlFO1FBRUpBLFVBQVU7UUFFVixPQUFPQTtJQUNUO0lBRUF1QixxQkFBcUJGLG1CQUFtQixFQUFFQyxvQkFBb0IsRUFBRSxHQUFHeEIsa0JBQWtCLEVBQUU7UUFDckYsSUFBSUUsVUFBVTtRQUVkLElBQUksRUFBRXdCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBRS9CQSxPQUFPO2VBQ0ZBO1lBQ0g7Z0JBQ0VDLGVBQWVDLDBCQUFvQjtnQkFDbkNDLGdCQUFnQkQsMEJBQW9CO2dCQUNwQy9CLEtBQUssQ0FBQ0MsVUFBVUMsV0FBVyxHQUFHQztvQkFDNUIsSUFBSUUsVUFBVTtvQkFFZCxNQUFNNEIsOEJBQThCUCxvQkFBb0JRLFdBQVcsSUFDN0RDLCtCQUErQlIscUJBQXFCTyxXQUFXLElBQUksR0FBRztvQkFFNUUsSUFBSUQsZ0NBQWdDRSw4QkFBOEI7d0JBQ2hFLE1BQU1DLGdDQUFnQ1Ysb0JBQW9CVyxhQUFhLElBQ2pFQyxpQ0FBaUNYLHFCQUFxQlUsYUFBYSxJQUNuRTdCLGlCQUFpQjRCLCtCQUNqQjNCLGtCQUFrQjZCLGdDQUNsQjVCLFlBQVksSUFBSSxDQUFDSCxPQUFPLENBQUNDLGdCQUFnQkMsb0JBQW9CTjt3QkFFbkUsSUFBSU8sV0FBVzs0QkFDYkwsVUFBVTt3QkFDWjtvQkFDRjtvQkFFQSxPQUFPQTtnQkFDVDtZQUNGO1NBQ0Q7UUFFRHdCLEtBQUtVLElBQUksQ0FBQyxDQUFDQztZQUNULE1BQU0sRUFBRVYsYUFBYSxFQUFFRSxjQUFjLEVBQUVoQyxHQUFHLEVBQUUsR0FBR3dDO1lBRS9DLE1BQU12QyxXQUFXNkIsY0FBY0osc0JBQ3pCeEIsWUFBWThCLGVBQWVMLHVCQUF3QixHQUFHO1lBRTVELElBQUksQUFBQzFCLGFBQWEsUUFBVUMsY0FBYyxNQUFPO2dCQUMvQyxNQUFNRSxVQUFVSixJQUFJQyxVQUFVQyxjQUFjQztnQkFFNUNFLFVBQVVELFNBQVUsR0FBRztnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPQztJQUNUO0FBQ0YifQ==