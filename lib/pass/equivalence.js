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
        const leftChildNodesLength = leftChildNodes.length, rightChildNodesLength = rightChildNodes.length;
        if (leftChildNodesLength === rightChildNodesLength) {
            const leftTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(leftChildNodes), rightTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(rightChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(leftTerminalNodeMap, rightTerminalNodeMap);
            if (terminalNodeMapsEqual) {
                descended = leftChildNodes.every((leftChildNode, index)=>{
                    const rightChildNode = rightChildNodes[index], leftNode = leftChildNode, rightNode = rightChildNode, visited = this.visitNode(leftNode, rightNode, ...remainingArguments);
                    if (visited) {
                        return true;
                    }
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSwgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzLCBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1aXZhbGVuY2VQYXNzIHtcbiAgcnVuKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRDaGlsZE5vZGVzTGVuZ3RoID0gbGVmdENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgcmlnaHRDaGlsZE5vZGVzTGVuZ3RoID0gcmlnaHRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Q2hpbGROb2Rlc0xlbmd0aCA9PT0gcmlnaHRDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybWluYWxOb2RlTWFwID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGxlZnRDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybWluYWxOb2RlTWFwID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKHJpZ2h0Q2hpbGROb2RlcyksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwobGVmdFRlcm1pbmFsTm9kZU1hcCwgcmlnaHRUZXJtaW5hbE5vZGVNYXApO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGRlc2NlbmRlZCA9IGxlZnRDaGlsZE5vZGVzLmV2ZXJ5KChsZWZ0Q2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hpbGROb2RlID0gcmlnaHRDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBsZWZ0Tm9kZSA9IGxlZnRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb2RlVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVUZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLmlzTm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVUZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZShsZWZ0VGVybWluYWxOb2RlLCByaWdodFRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgdmlzaXRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbGVmdE5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJpZ2h0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiAobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgICAgICAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbWFwcy5zb21lKChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbGVmdE5vZGVRdWVyeSwgcmlnaHROb2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnROb2RlUXVlcnkobGVmdE5vblRlcm1pbmFsTm9kZSksICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZVF1ZXJ5KHJpZ2h0Tm9uVGVybWluYWxOb2RlKTsgIC8vL1xuXG4gICAgICBpZiAoKGxlZnROb2RlICE9PSBudWxsKSAmJiAocmlnaHROb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcnVuKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2VQYXNzIiwicnVuIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJsZWZ0Q2hpbGROb2RlcyIsInJpZ2h0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImxlZnRDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHRDaGlsZE5vZGVzTGVuZ3RoIiwibGVmdFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyIsInJpZ2h0VGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiZXZlcnkiLCJsZWZ0Q2hpbGROb2RlIiwiaW5kZXgiLCJyaWdodENoaWxkTm9kZSIsImxlZnROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVUZXJtaW5hbE5vZGUiLCJsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwicmlnaHROb2RlTm9uVGVybWluYWxOb2RlIiwibGVmdFRlcm1pbmFsTm9kZSIsInJpZ2h0VGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJsZWZ0Tm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJyaWdodE5vZGVRdWVyeSIsImxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7c0JBRm9FO0FBRTFFLE1BQU1BO0lBQ25CQyxJQUFJQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUM5QyxJQUFJQztRQUVKLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFVBQVVDLGNBQWNDO1FBRXZEQyxVQUFVQyxTQUFVLEdBQUc7UUFFdkIsT0FBT0Q7SUFDVDtJQUVBRyxRQUFRQyxjQUFj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