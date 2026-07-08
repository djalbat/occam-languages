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
        let node;
        const map = maps.find((map)=>{
            const { nodeQuery } = map;
            node = nodeQuery(nonTerminalNode);
            if (node !== null) {
                return true;
            }
        }) || null;
        if (map !== null) {
            const { run } = map, success = run(node, ...remainingArguments);
            if (success) {
                visited = true;
            }
        }
        return visited;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3NpbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlUGFzcyB7XG4gIHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICBkZXNjZW5kZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIG5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IG1hcCA9IG1hcHMuZmluZCgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IG5vZGVRdWVyeSB9ID0gbWFwO1xuXG4gICAgICBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWFwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHJ1biB9ID0gbWFwLFxuICAgICAgICAgICAgc3VjY2VzcyA9IHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNpbXBsZVBhc3MiLCJydW4iLCJub2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImV2ZXJ5IiwiY2hpbGROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJub2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsImdldENoaWxkTm9kZXMiLCJtYXAiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3NCQUZnQjtBQUV0QixNQUFNQTtJQUNuQkMsSUFBSUMsSUFBSSxFQUFFLEdBQUdDLGtCQUFrQixFQUFFO1FBQy9CLElBQUlDO1FBRUosTUFBTUMsVUFBVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osU0FBU0M7UUFFeENDLFVBQVVDLFNBQVUsR0FBRztRQUV2QixPQUFPRDtJQUNUO0lBRUFHLFFBQVFDLFVBQVUsRUFBRSxHQUFHTCxrQkFBa0IsRUFBRTtRQUN6QyxJQUFJTSxZQUFZO1FBRWhCLE1BQU1KLFVBQVVHLFdBQVdFLEtBQUssQ0FBQyxDQUFDQztZQUNoQyxNQUFNVCxPQUFPUyxXQUNQTixVQUFVLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixTQUFTQztZQUV4QyxJQUFJRSxTQUFTO2dCQUNYLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSUEsU0FBUztZQUNYSSxZQUFZO1FBQ2Q7UUFFQSxPQUFPQTtJQUNUO0lBRUFILFVBQVVKLElBQUksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNyQyxJQUFJRTtRQUVKLE1BQU1PLG1CQUFtQlYsS0FBS1csY0FBYztRQUU1QyxJQUFJRCxrQkFBa0I7WUFDcEIsTUFBTUUsZUFBZVosTUFBTyxHQUFHO1lBRS9CRyxVQUFVLElBQUksQ0FBQ1UsaUJBQWlCLENBQUNELGlCQUFpQlg7UUFDcEQsT0FBTztZQUNMLE1BQU1hLGtCQUFrQmQsTUFBTyxHQUFHO1lBRWxDRyxVQUFVLElBQUksQ0FBQ1ksb0JBQW9CLENBQUNELG9CQUFvQmI7UUFDMUQ7UUFFQSxPQUFPRTtJQUNUO0lBRUFVLGtCQUFrQkQsWUFBWSxFQUFFLEdBQUdYLGtCQUFrQixFQUFFO1FBQ3JELE1BQU1FLFVBQVU7UUFFaEIsT0FBT0E7SUFDVDtJQUVBWSxxQkFBcUJELGVBQWUsRUFBRSxHQUFHYixrQkFBa0IsRUFBRTtRQUMzRCxJQUFJRSxVQUFVO1FBRWQsSUFBSSxFQUFFYSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztRQUUvQkEsT0FBTztlQUNGQTtZQUNIO2dCQUNFQyxXQUFXQywwQkFBb0I7Z0JBQy9CbkIsS0FBSyxDQUFDQyxNQUFNLEdBQUdDO29CQUNiLElBQUlFLFVBQVU7b0JBRWQsTUFBTUcsYUFBYVEsZ0JBQWdCSyxhQUFhLElBQzFDWixZQUFZLElBQUksQ0FBQ0YsT0FBTyxDQUFDQyxlQUFlTDtvQkFFOUMsSUFBSU0sV0FBVzt3QkFDYkosVUFBVTtvQkFDWjtvQkFFQSxPQUFPQTtnQkFDVDtZQUNGO1NBQ0Q7UUFFRCxJQUFJSDtRQUVKLE1BQU1vQixNQUFNSixLQUFLSyxJQUFJLENBQUMsQ0FBQ0Q7WUFDckIsTUFBTSxFQUFFSCxTQUFTLEVBQUUsR0FBR0c7WUFFdEJwQixPQUFPaUIsVUFBVUg7WUFFakIsSUFBSWQsU0FBUyxNQUFNO2dCQUNqQixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sSUFBSW9CLFFBQVEsTUFBTTtZQUNoQixNQUFNLEVBQUVyQixHQUFHLEVBQUUsR0FBR3FCLEtBQ1ZsQixVQUFVSCxJQUFJQyxTQUFTQztZQUU3QixJQUFJQyxTQUFTO2dCQUNYQyxVQUFVO1lBQ1o7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7QUFDRiJ9