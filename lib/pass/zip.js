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
        const generalChildNodesLength = generalChildNodes.length, specificChildNodesLength = specificChildNodes.length;
        if (generalChildNodesLength === specificChildNodesLength) {
            const specificTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(specificChildNodes), generalTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(generalChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(generalTerminalNodeMap, specificTerminalNodeMap);
            if (terminalNodeMapsEqual) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3ppcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnksIHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFppcFBhc3Mge1xuICBydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoID0gc3BlY2lmaWNDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCA9PT0gc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY1Rlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhzcGVjaWZpY0NoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhnZW5lcmFsQ2hpbGROb2RlcyksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwoZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCwgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXApO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBnZW5lcmFsQ2hpbGROb2Rlcy5ldmVyeSgoZ2VuZXJhbENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NoaWxkTm9kZSA9IHNwZWNpZmljQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGdlbmVyYWxOb2RlUXVlcnksIHNwZWNpZmljTm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTm9kZVF1ZXJ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUpLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY05vZGVRdWVyeShzcGVjaWZpY05vblRlcm1pbmFsTm9kZSk7ICAvLy9cblxuICAgICAgaWYgKChnZW5lcmFsTm9kZSAhPT0gbnVsbCkgJiYgKHNwZWNpZmljTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyAgPSBydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJaaXBQYXNzIiwicnVuIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoIiwic3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJnZW5lcmFsVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiZXZlcnkiLCJnZW5lcmFsQ2hpbGROb2RlIiwiaW5kZXgiLCJzcGVjaWZpY0NoaWxkTm9kZSIsImdlbmVyYWxOb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZSIsInNwZWNpZmljVGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7c0JBRm9FO0FBRTFFLE1BQU1BO0lBQ25CQyxJQUFJQyxXQUFXLEVBQUVDLFlBQVksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNwRCxJQUFJQztRQUVKLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNMLGFBQWFDLGlCQUFpQkM7UUFFN0RDLFVBQVVDLFNBQVUsR0FBRztRQUV2QixPQUFPRDtJQUNUO0lBRUFHLFFBQVFDLGlCQUFpQixFQUFFQyxrQkFBa0IsRUFBRSxHQUFHTixrQkFBa0IsRUFBRTtRQUNwRSxJQUFJTyxZQUFZO1FBRWhCLE1BQU1DLDBCQUEwQkgsa0JBQWtCSSxNQUFNLEVBQ2xEQywyQkFBMkJKLG1CQUFtQkcsTUFBTTtRQUUxRCxJQUFJRCw0QkFBNEJFLDBCQUEwQjtZQUN4RCxNQUFNQywwQkFBMEJDLElBQUFBLDhCQUF3QixFQUFDTixxQkFDbkRPLHlCQUF5QkQsSUFBQUEsOEJBQXdCLEVBQUNQLG9CQUNsRFMsd0JBQXdCQyxJQUFBQSw4QkFBd0IsRUFBQ0Ysd0JBQXdCRjtZQUUvRSxJQUFJRyx1QkFBdUI7Z0JBQ3pCLE1BQU1aLFVBQVVHLGtCQUFrQlcsS0FBSyxDQUFDLENBQUNDLGtCQUFrQkM7b0JBQ3pELE1BQU1DLG9CQUFvQmIsa0JBQWtCLENBQUNZLE1BQU0sRUFDN0NuQixlQUFlb0IsbUJBQ2ZyQixjQUFjbUIsa0JBQ2RmLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNMLGFBQWFDLGlCQUFpQkM7b0JBRTdELElBQUlFLFNBQVM7d0JBQ1gsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSxTQUFT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