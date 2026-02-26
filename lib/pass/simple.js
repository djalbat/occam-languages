"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SimplePass;
    }
});
const _pass = require("../utilities/pass");
class SimplePass {
    run(node, ...remainingArguments) {
        let success;
        const visited = this.visitNode(node, ...remainingArguments);
        success = visited; ///
        return success;
    }
    descend(childNodes, ...remainingArguments) {
        let descended = false;
        const visited = childNodes.every((childNode)=>{
            const node = childNode, visited = this.visitNode(node, ...remainingArguments);
            if (visited) {
                return true;
            }
        });
        if (visited) {
            descended = true;
        }
        return descended;
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
        const visited = true;
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
                    const childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, ...remainingArguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3NpbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlUGFzcyB7XG4gIHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICBkZXNjZW5kZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlUXVlcnkobm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHZpc2l0ZWQgPSBzdWNjZXNzO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTaW1wbGVQYXNzIiwicnVuIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImNoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJldmVyeSIsImNoaWxkTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwibm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztzQkFGZ0I7QUFFdEIsTUFBTUE7SUFDbkJDLElBQUlDLElBQUksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUMvQixJQUFJQztRQUVKLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFNBQVNDO1FBRXhDQyxVQUFVQyxTQUFVLEdBQUc7UUFFdkIsT0FBT0Q7SUFDVDtJQUVBRyxRQUFRQyxVQUFVLEVBQUUsR0FBR0wsa0JBQWtCLEVBQUU7UUFDekMsSUFBSU0sWUFBWTtRQUVoQixNQUFNSixVQUFVRyxXQUFXRSxLQUFLLENBQUMsQ0FBQ0M7WUFDaEMsTUFBTVQsT0FBT1MsV0FDUE4sVUFBVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osU0FBU0M7WUFFeEMsSUFBSUUsU0FBUztnQkFDWCxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlBLFNBQVM7WUFDWEksWUFBWTtRQUNkO1FBRUEsT0FBT0E7SUFDVDtJQUVBSCxVQUFVSixJQUFJLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDckMsSUFBSUU7UUFFSixNQUFNTyxtQkFBbUJWLEtBQUtXLGNBQWM7UUFFNUMsSUFBSUQsa0JBQWtCO1lBQ3BCLE1BQU1FLGVBQWVaLE1BQU8sR0FBRztZQUUvQkcsVUFBVSxJQUFJLENBQUNVLGlCQUFpQixDQUFDRCxpQkFBaUJYO1FBQ3BELE9BQU87WUFDTCxNQUFNYSxrQkFBa0JkLE1BQU8sR0FBRztZQUVsQ0csVUFBVSxJQUFJLENBQUNZLG9CQUFvQixDQUFDRCxvQkFBb0JiO1FBQzFEO1FBRUEsT0FBT0U7SUFDVDtJQUVBVSxrQkFBa0JELFlBQVksRUFBRSxHQUFHWCxrQkFBa0IsRUFBRTtRQUNyRCxNQUFNRSxVQUFVO1FBRWhCLE9BQU9BO0lBQ1Q7SUFFQVkscUJBQXFCRCxlQUFlLEVBQUUsR0FBR2Isa0JBQWtCLEVBQUU7UUFDM0QsSUFBSUUsVUFBVTtRQUVkLElBQUksRUFBRWEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFFL0JBLE9BQU87ZUFDRkE7WUFDSDtnQkFDRUMsV0FBV0MsMEJBQW9CO2dCQUMvQm5CLEtBQUssQ0FBQ0MsTUFBTSxHQUFHQztvQkFDYixJQUFJRSxVQUFVO29CQUVkLE1BQU1HLGFBQWFRLGdCQUFnQkssYUFBYSxJQUMxQ1osWUFBWSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0MsZUFBZUw7b0JBRTlDLElBQUlNLFdBQVc7d0JBQ2JKLFVBQVU7b0JBQ1o7b0JBRUEsT0FBT0E7Z0JBQ1Q7WUFDRjtTQUNEO1FBRURhLEtBQUtJLElBQUksQ0FBQyxDQUFDQztZQUNULE1BQU0sRUFBRUosU0FBUyxFQUFFbEIsR0FBRyxFQUFFLEdBQUdzQjtZQUUzQixNQUFNckIsT0FBT2lCLFVBQVVIO1lBRXZCLElBQUlkLFNBQVMsTUFBTTtnQkFDakIsTUFBTUUsVUFBVUgsSUFBSUMsU0FBU0M7Z0JBRTdCRSxVQUFVRDtnQkFFVixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9DO0lBQ1Q7QUFDRiJ9