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
        const childNodesCongruent = (0, _pass.areChildNodesCongruent)(generalChildNodes, specificChildNodes);
        if (childNodesCongruent) {
            const visited = generalChildNodes.every((generalChildNode, index)=>{
                const specificChildNode = specificChildNodes[index], specificNode = specificChildNode, generalNode = generalChildNode, visited = this.visitNode(generalNode, specificNode, ...remainingArguments);
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
                        const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, descended = this.descend(generalChildNodes, specificChildNodes, ...remainingArguments);
                        if (descended) {
                            visited = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3ppcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnksIGFyZUNoaWxkTm9kZXNDb25ncnVlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmlwUGFzcyB7XG4gIHJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzQ29uZ3J1ZW50ID0gYXJlQ2hpbGROb2Rlc0NvbmdydWVudChnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzKTtcblxuICAgIGlmIChjaGlsZE5vZGVzQ29uZ3J1ZW50KSB7XG4gICAgICBjb25zdCB2aXNpdGVkID0gZ2VuZXJhbENoaWxkTm9kZXMuZXZlcnkoKGdlbmVyYWxDaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGdlbmVyYWxOb2RlUXVlcnksIHNwZWNpZmljTm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTm9kZVF1ZXJ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUpLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY05vZGVRdWVyeShzcGVjaWZpY05vblRlcm1pbmFsTm9kZSk7ICAvLy9cblxuICAgICAgaWYgKChnZW5lcmFsTm9kZSAhPT0gbnVsbCkgJiYgKHNwZWNpZmljTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyAgPSBydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJaaXBQYXNzIiwicnVuIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImNoaWxkTm9kZXNDb25ncnVlbnQiLCJhcmVDaGlsZE5vZGVzQ29uZ3J1ZW50IiwiZXZlcnkiLCJnZW5lcmFsQ2hpbGROb2RlIiwiaW5kZXgiLCJzcGVjaWZpY0NoaWxkTm9kZSIsImdlbmVyYWxOb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZSIsInNwZWNpZmljVGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7c0JBRndDO0FBRTlDLE1BQU1BO0lBQ25CQyxJQUFJQyxXQUFXLEVBQUVDLFlBQVksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNwRCxJQUFJQztRQUVKLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNMLGFBQWFDLGlCQUFpQkM7UUFFN0RDLFVBQVVDLFNBQVUsR0FBRztRQUV2QixPQUFPRDtJQUNUO0lBRUFHLFFBQVFDLGlCQUFpQixFQUFFQyxrQkFBa0IsRUFBRSxHQUFHTixrQkFBa0IsRUFBRTtRQUNwRSxJQUFJTyxZQUFZO1FBRWhCLE1BQU1DLHNCQUFzQkMsSUFBQUEsNEJBQXNCLEVBQUNKLG1CQUFtQkM7UUFFdEUsSUFBSUUscUJBQXFCO1lBQ3ZCLE1BQU1OLFVBQVVHLGtCQUFrQkssS0FBSyxDQUFDLENBQUNDLGtCQUFrQkM7Z0JBQ3pELE1BQU1DLG9CQUFvQlAs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