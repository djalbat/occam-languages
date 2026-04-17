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
        let descended;
        descended = leftChildNodes.every((leftChildNode, index)=>{
            const rightChildNode = rightChildNodes[index], leftNode = leftChildNode, rightNode = rightChildNode, visited = this.visitNode(leftNode, rightNode, ...remainingArguments);
            if (visited) {
                return true;
            }
        });
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
                        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesCongruent = (0, _pass.areChildNodesCongruent)(leftChildNodes, rightChildNodes);
                        if (childNodesCongruent) {
                            const descended = this.descend(leftChildNodes, rightChildNodes, ...remainingArguments);
                            if (descended) {
                                visited = true;
                            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSwgYXJlQ2hpbGROb2Rlc0NvbmdydWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZVBhc3Mge1xuICBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZDtcblxuICAgIGRlc2NlbmRlZCA9IGxlZnRDaGlsZE5vZGVzLmV2ZXJ5KChsZWZ0Q2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmlnaHRDaGlsZE5vZGUgPSByaWdodENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbGVmdE5vZGUgPSBsZWZ0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb2RlVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVUZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLmlzTm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVUZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZShsZWZ0VGVybWluYWxOb2RlLCByaWdodFRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgdmlzaXRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbGVmdE5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJpZ2h0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiAobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgICAgICAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNDb25ncnVlbnQgPSBhcmVDaGlsZE5vZGVzQ29uZ3J1ZW50KGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlc0NvbmdydWVudCkge1xuICAgICAgICAgICAgICBjb25zdCBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGxlZnROb2RlUXVlcnksIHJpZ2h0Tm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3QgbGVmdE5vZGUgPSBsZWZ0Tm9kZVF1ZXJ5KGxlZnROb25UZXJtaW5hbE5vZGUpLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vZGUgPSByaWdodE5vZGVRdWVyeShyaWdodE5vblRlcm1pbmFsTm9kZSk7ICAvLy9cblxuICAgICAgaWYgKChsZWZ0Tm9kZSAhPT0gbnVsbCkgJiYgKHJpZ2h0Tm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHZpc2l0ZWQgPSBzdWNjZXNzOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWl2YWxlbmNlUGFzcyIsInJ1biIsImxlZnROb2RlIiwicmlnaHROb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJldmVyeSIsImxlZnRDaGlsZE5vZGUiLCJpbmRleCIsInJpZ2h0Q2hpbGROb2RlIiwibGVmdE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSIsImxlZnROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVOb25UZXJtaW5hbE5vZGUiLCJsZWZ0VGVybWluYWxOb2RlIiwicmlnaHRUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImxlZnROb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInJpZ2h0Tm9kZVF1ZXJ5IiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0NvbmdydWVudCIsImFyZUNoaWxkTm9kZXNDb25ncnVlbnQiLCJzb21lIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3NCQUZ3QztBQUU5QyxNQUFNQTtJQUNuQkMsSUFBSUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDOUMsSUFBSUM7UUFFSixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxVQUFVQyxjQUFjQztRQUV2REMsVUFBVUMsU0FBVSxHQUFHO1FBRXZCLE9BQU9EO0lBQ1Q7SUFFQUcsUUFBUUMsY0FBYyxFQUFFQyxlQUFlLEVBQUUsR0FBR04sa0JBQWtCLEVBQUU7UUFDOUQsSUFBSU87UUFFSkEsWUFBWUYsZUFBZUcsS0FBSyxDQUFDLENBQUNDLGVBQWVDO1lBQy9DLE1BQU1DLGlCQUFpQkwsZUFBZSxDQUFDSSxNQUFNLEVBQ3ZDWixXQUFXVyxlQUNYVixZQUFZWSxnQkFDWlQsVUFBVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsVUFBVUMsY0FBY0M7WUFFdkQsSUFBSUUsU0FBUztnQkFDWCxPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9LO0lBQ1Q7SUFFQUosVUFBVUwsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDcEQsSUFBSUUsVUFBVTtRQUVkLE1BQU1VLHVCQUF1QmQsU0FBU2UsY0FBYyxJQUM5Q0Msd0JBQXdCZixVQUFVYyxjQUFjLElBQ2hERSwwQkFBMEJqQixTQUFTa0IsaUJBQWlCLElBQ3BEQywyQkFBMkJsQixVQUFVaUIsaUJBQWlCO1FBRTVELElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlKLHdCQUF3QkUsdUJBQXVCO1lBQ3hELE1BQU1JLG1CQUFtQnBCLFVBQ25CcUIsb0JBQW9CcEIsV0FBWSxHQUFHO1lBRXpDRyxVQUFVLElBQUksQ0FBQ2tCLGlCQUFpQixDQUFDRixrQkFBa0JDLHNCQUFzQm5CO1FBQzNFLE9BQU8sSUFBSWUsMkJBQTJCRSwwQkFBMEI7WUFDOUQsTUFBTUksc0JBQXNCdkIsVUFDdEJ3Qix1QkFBdUJ2QixXQUFXLEdBQUc7WUFFM0NHLFVBQVUsSUFBSSxDQUFDcUIsb0JBQW9CLENBQUNGLHFCQUFxQkMseUJBQXlCdEI7UUFDcEY7UUFFQSxPQUFPRTtJQUNUO0lBRUFrQixrQkFBa0JGLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRSxHQUFHbkIsa0JBQWtCLEVBQUU7UUFDNUUsSUFBSUU7UUFFSkEsVUFBVTtRQUVWLE9BQU9BO0lBQ1Q7SUFFQXFCLHFCQUFxQkYsbUJBQW1CLEVBQUVDLG9CQUFvQixFQUFFLEdBQUd0QixrQkFBa0IsRUFBRTtRQUNyRixJQUFJRSxVQUFVO1FBRWQsSUFBSSxFQUFFc0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFFL0JBLE9BQU87ZUFDRkE7WUFDSDtnQkFDRUMsZUFBZUMsMEJBQW9CO2dCQUNuQ0MsZ0JBQWdCRCwwQkFBb0I7Z0JBQ3BDN0IsS0FBSyxDQUFDQyxVQUFVQyxXQUFXLEdBQUdDO29CQUM1QixJQUFJRSxVQUFVO29CQUVkLE1BQU0wQiw4QkFBOEJQLG9CQUFvQlEsV0FBVyxJQUM3REMsK0JBQStCUixxQkFBcUJPLFdBQVcsSUFBSSxHQUFHO29CQUU1RSxJQUFJRCxnQ0FBZ0NFLDhCQUE4Qjt3QkFDaEUsTUFBTUMsZ0NBQWdDVixvQkFBb0JXLGFBQWEsSUFDakVDLGlDQUFpQ1gscUJBQXFCVSxhQUFhLElBQ25FM0IsaUJBQWlCMEIsK0JBQ2pCekIsa0JBQWtCMkIsZ0NBQ2xCQyxzQkFBc0JDLElBQUFBLDRCQUFzQixFQUFDOUIsZ0JBQWdCQzt3QkFFbkUsSUFBSTRCLHFCQUFxQjs0QkFDdkIsTUFBTTNCLFlBQVksSUFBSSxDQUFDSCxPQUFPLENBQUNDLGdCQUFnQkMsb0JBQW9CTjs0QkFFbkUsSUFBSU8sV0FBVztnQ0FDYkwsVUFBVTs0QkFDWjt3QkFDRjtvQkFDRjtvQkFFQSxPQUFPQTtnQkFDVDtZQUNGO1NBQ0Q7UUFFRHNCLEtBQUtZLElBQUksQ0FBQyxDQUFDQztZQUNULE1BQU0sRUFBRVosYUFBYSxFQUFFRSxjQUFjLEVBQUU5QixHQUFHLEVBQUUsR0FBR3dDO1lBRS9DLE1BQU12QyxXQUFXMkIsY0FBY0osc0JBQ3pCdEIsWUFBWTRCLGVBQWVMLHVCQUF3QixHQUFHO1lBRTVELElBQUksQUFBQ3hCLGFBQWEsUUFBVUMsY0FBYyxNQUFPO2dCQUMvQyxNQUFNRSxVQUFVSixJQUFJQyxVQUFVQyxjQUFjQztnQkFFNUNFLFVBQVVELFNBQVUsR0FBRztnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPQztJQUNUO0FBQ0YifQ==