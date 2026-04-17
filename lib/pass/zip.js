"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZipPass;
    }
});
const _pass = require("../utilities/pass");
class ZipPass {
    run(generalNode, specificNode, ...remainingArguments) {
        let success;
        const visited = this.visitNode(generalNode, specificNode, ...remainingArguments);
        success = visited; ///
        return success;
    }
    descend(generalChildNodes, specificChildNodes, ...remainingArguments) {
        let descended = false;
        const visited = generalChildNodes.every((generalChildNode, index)=>{
            const specificChildNode = specificChildNodes[index], specificNode = specificChildNode, generalNode = generalChildNode, visited = this.visitNode(generalNode, specificNode, ...remainingArguments);
            if (visited) {
                return true;
            }
        });
        if (visited) {
            descended = true;
        }
        return descended;
    }
    visitNode(generalNode, specificNode, ...remainingArguments) {
        let visited = false;
        const generalNodeTerminalNode = generalNode.isTerminalNode(), specificNodeTerminalNode = specificNode.isTerminalNode(), generalNodeNonTerminalNode = generalNode.isNonTerminalNode(), specificNodeNonTerminalNode = specificNode.isNonTerminalNode();
        if (false) {
        ///
        } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
            const generalTerminalNode = generalNode, specificTerminalNode = specificNode; ///
            visited = this.visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments);
        } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
            const generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode; ///
            visited = this.visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments);
        }
        return visited;
    }
    visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) {
        let visited;
        visited = true;
        return visited;
    }
    visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
        let visited = false;
        let { maps } = this.constructor;
        maps = [
            ...maps,
            {
                generalNodeQuery: _pass.nonTerminalNodeQuery,
                specificNodeQuery: _pass.nonTerminalNodeQuery,
                run: (generalNode, specificNode, ...remainingArguments)=>{
                    let visited = false;
                    const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///
                    if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
                        const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, childNodesCongruent = (0, _pass.areChildNodesCongruent)(generalChildNodes, specificChildNodes);
                        if (childNodesCongruent) {
                            const descended = this.descend(generalChildNodes, specificChildNodes, ...remainingArguments);
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
            const { generalNodeQuery, specificNodeQuery, run } = map;
            const generalNode = generalNodeQuery(generalNonTerminalNode), specificNode = specificNodeQuery(specificNonTerminalNode); ///
            if (generalNode !== null && specificNode !== null) {
                const success = run(generalNode, specificNode, ...remainingArguments);
                visited = success; ///
                return true;
            }
        });
        return visited;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3ppcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnksIGFyZUNoaWxkTm9kZXNDb25ncnVlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmlwUGFzcyB7XG4gIHJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gZ2VuZXJhbENoaWxkTm9kZXMuZXZlcnkoKGdlbmVyYWxDaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NoaWxkTm9kZSA9IHNwZWNpZmljQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQ29uZ3J1ZW50ID0gYXJlQ2hpbGROb2Rlc0NvbmdydWVudChnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNDb25ncnVlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBnZW5lcmFsTm9kZVF1ZXJ5LCBzcGVjaWZpY05vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbE5vZGVRdWVyeShnZW5lcmFsTm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNOb2RlUXVlcnkoc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgoZ2VuZXJhbE5vZGUgIT09IG51bGwpICYmIChzcGVjaWZpY05vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgID0gcnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiWmlwUGFzcyIsInJ1biIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiZ2VuZXJhbENoaWxkTm9kZXMiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJldmVyeSIsImdlbmVyYWxDaGlsZE5vZGUiLCJpbmRleCIsInNwZWNpZmljQ2hpbGROb2RlIiwiZ2VuZXJhbE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVOb25UZXJtaW5hbE5vZGUiLCJnZW5lcmFsVGVybWluYWxOb2RlIiwic3BlY2lmaWNUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0NvbmdydWVudCIsImFyZUNoaWxkTm9kZXNDb25ncnVlbnQiLCJzb21lIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3NCQUZ3QztBQUU5QyxNQUFNQTtJQUNuQkMsSUFBSUMsV0FBVyxFQUFFQyxZQUFZLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDcEQsSUFBSUM7UUFFSixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxhQUFhQyxpQkFBaUJDO1FBRTdEQyxVQUFVQyxTQUFVLEdBQUc7UUFFdkIsT0FBT0Q7SUFDVDtJQUVBRyxRQUFRQyxpQkFBaUIsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR04sa0JBQWtCLEVBQUU7UUFDcEUsSUFBSU8sWUFBWTtRQUVoQixNQUFNTCxVQUFVRyxrQkFBa0JHLEtBQUssQ0FBQyxDQUFDQyxrQkFBa0JDO1lBQ3pELE1BQU1DLG9CQUFvQkwsa0JBQWtCLENBQUNJLE1BQU0sRUFDN0NYLGVBQWVZLG1CQUNmYixjQUFjVyxrQkFDZFAsVUFBVSxJ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