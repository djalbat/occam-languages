"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ForwardPass;
    }
});
const _pass = require("../utilities/pass");
class ForwardPass {
    run(node, ...remainingArguments) {
        let success;
        const visited = this.visitNode(node, ...remainingArguments);
        success = visited; ///
        return success;
    }
    descend(index, childNodes, ...remainingArguments) {
        let descendedForward = false;
        const descendForward = remainingArguments.pop(), childNodesLength = childNodes.length;
        if (index === childNodesLength) {
            descendedForward = descendForward();
        } else {
            const childNode = childNodes[index], node = childNode, visited = this.visitNode(node, ...remainingArguments, ()=>{
                remainingArguments.push(descendForward);
                const aheadIndex = index + 1, descendedForward = this.descend(aheadIndex, childNodes, ...remainingArguments);
                return descendedForward;
            });
            if (visited) {
                descendedForward = true;
            }
        }
        return descendedForward;
    }
    visitNode(node, ...remainingArguments) {
        let visited;
        const nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            const terminalNode = node; ///
            visited = this.visitTerminalNode(terminalNode, ...remainingArguments);
        } else {
            const nonTerminalNode = node; ///
            visited = this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
        }
        return visited;
    }
    visitTerminalNode(terminalNode, ...remainingArguments) {
        let visited = false;
        const descendForward = remainingArguments.pop(), descendedForward = descendForward();
        if (descendedForward) {
            visited = true;
        }
        remainingArguments.push(descendForward);
        return visited;
    }
    visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
        let visited = false;
        let { maps } = this.constructor;
        maps = [
            ...maps,
            {
                nodeQuery: _pass.nonTerminalNodeQuery,
                run: (node, ...remainingArguments)=>{
                    let visited = false;
                    const index = 0, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(index, childNodes, ...remainingArguments);
                    if (descended) {
                        visited = true;
                    }
                    return visited;
                }
            }
        ];
        maps.some((map)=>{
            const { nodeQuery, run } = map;
            const node = nodeQuery(nonTerminalNode);
            if (node !== null) {
                const success = run(node, ...remainingArguments);
                visited = success;
                return true;
            }
        });
        return visited;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2ZvcndhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vblRlcm1pbmFsTm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcndhcmRQYXNzIHtcbiAgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGluZGV4LCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkRm9yd2FyZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVzY2VuZEZvcndhcmQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgZGVzY2VuZGVkRm9yd2FyZCA9IGRlc2NlbmRGb3J3YXJkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRGb3J3YXJkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBkZXNjZW5kZWRGb3J3YXJkID0gdGhpcy5kZXNjZW5kKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlc2NlbmRlZEZvcndhcmQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgZGVzY2VuZGVkRm9yd2FyZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZEZvcndhcmQ7XG4gIH1cblxuICB2aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlc2NlbmRGb3J3YXJkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBkZXNjZW5kZWRGb3J3YXJkID0gZGVzY2VuZEZvcndhcmQoKTtcblxuICAgIGlmIChkZXNjZW5kZWRGb3J3YXJkKSB7XG4gICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaChkZXNjZW5kRm9yd2FyZCk7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbWFwcy5zb21lKChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvcndhcmRQYXNzIiwicnVuIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImluZGV4IiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZEZvcndhcmQiLCJkZXNjZW5kRm9yd2FyZCIsInBvcCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGUiLCJwdXNoIiwiYWhlYWRJbmRleCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwibm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJnZXRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztzQkFGZ0I7QUFFdEIsTUFBTUE7SUFDbkJDLElBQUlDLElBQUksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUMvQixJQUFJQztRQUVKLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFNBQVNDO1FBRXhDQyxVQUFVQyxTQUFVLEdBQUc7UUFFdkIsT0FBT0Q7SUFDVDtJQUVBRyxRQUFRQyxLQUFLLEVBQUVDLFVBQVUsRUFBRSxHQUFHTixrQkFBa0IsRUFBRTtRQUNoRCxJQUFJTyxtQkFBbUI7UUFFdkIsTUFBTUMsaUJBQWlCUixtQkFBbUJTLEdBQUcsSUFDdkNDLG1CQUFtQkosV0FBV0ssTUFBTTtRQUUxQyxJQUFJTixVQUFVSyxrQkFBa0I7WUFDOUJILG1CQUFtQkM7UUFDckIsT0FBTztZQUNMLE1BQU1JLFlBQVlOLFVBQVUsQ0FBQ0QsTUFBTSxFQUM3Qk4sT0FBT2EsV0FDUFYsVUFBVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osU0FBU0Msb0JBQW9CO2dCQUNwREEsbUJBQW1CYSxJQUFJLENBQUNMO2dCQUV4QixNQUFNTSxhQUFhVCxRQUFRLEdBQ3JCRSxtQkFBbUIsSUFBSSxDQUFDSCxPQUFPLENBQUNVLFlBQVlSLGVBQWVOO2dCQUVqRSxPQUFPTztZQUNUO1lBRU4sSUFBSUwsU0FBUztnQkFDWEssbUJBQW1CO1lBQ3JCO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFKLFVBQVVKLElBQUksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNyQyxJQUFJRTtRQUVKLE1BQU1hLG1CQUFtQmhCLEtBQUtpQixjQUFjO1FBRTVDLElBQUlELGtCQUFrQjtZQUNwQixNQUFNRSxlQUFlbEIsTUFBTyxHQUFHO1lBRS9CRyxVQUFVLElBQUksQ0FBQ2dCLGlCQUFpQixDQUFDRCxpQkFBaUJqQjtRQUNwRCxPQUFPO1lBQ0wsTUFBTW1CLGtCQUFrQnBCLE1BQU8sR0FBRztZQUVsQ0csVUFBVSxJQUFJLENBQUNrQixvQkFBb0IsQ0FBQ0Qsb0JBQW9CbkI7UUFDMUQ7UUFFQSxPQUFPRTtJQUNUO0lBRUFnQixrQkFBa0JELFlBQVksRUFBRSxHQUFHakIsa0JBQWtCLEVBQUU7UUFDckQsSUFBSUUsVUFBVTtRQUVkLE1BQU1NLGlCQUFpQlIsbUJBQW1CUyxHQUFHLElBQ3ZDRixtQkFBbUJDO1FBRXpCLElBQUlELGtCQUFrQjtZQUNwQkwsVUFBVTtRQUNaO1FBRUFGLG1CQUFtQmEsSUFBSSxDQUFDTDtRQUV4QixPQUFPTjtJQUNUO0lBRUFrQixxQkFBcUJELGVBQWUsRUFBRSxHQUFHbkIsa0JBQWtCLEVBQUU7UUFDM0QsSUFBSUUsVUFBVTtRQUVkLElBQUksRUFBRW1CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBRS9CQSxPQUFPO2VBQ0ZBO1lBQ0g7Z0JBQ0VDLFdBQVdDLDBCQUFvQjtnQkFDL0J6QixLQUFLLENBQUNDLE1BQU0sR0FBR0M7b0JBQ2IsSUFBSUUsVUFBVTtvQkFFZCxNQUFNRyxRQUFRLEdBQ1JDLGFBQWFhLGdCQUFnQkssYUFBYSxJQUMxQ0MsWUFBWSxJQUFJLENBQUNyQixPQUFPLENBQUNDLE9BQU9DLGVBQWVOO29CQUVyRCxJQUFJeUIsV0FBVzt3QkFDYnZCLFVBQVU7b0JBQ1o7b0JBRUEsT0FBT0E7Z0JBQ1Q7WUFDRjtTQUNEO1FBRURtQixLQUFLSyxJQUFJLENBQUMsQ0FBQ0M7WUFDVCxNQUFNLEVBQUVMLFNBQVMsRUFBRXhCLEdBQUcsRUFBRSxHQUFHNkI7WUFFM0IsTUFBTTVCLE9BQU91QixVQUFVSDtZQUV2QixJQUFJcEIsU0FBUyxNQUFNO2dCQUNqQixNQUFNRSxVQUFVSCxJQUFJQyxTQUFTQztnQkFFN0JFLFVBQVVEO2dCQUVWLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT0M7SUFDVDtBQUNGIn0=