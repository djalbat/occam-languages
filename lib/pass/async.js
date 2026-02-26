"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AsyncPass;
    }
});
const _pass = require("../utilities/pass");
const _asynchronous = require("../utilities/asynchronous");
class AsyncPass {
    async run(node, ...remainingArguments) {
        let success;
        const visited = await this.visitNode(node, ...remainingArguments);
        success = visited; ///
        return success;
    }
    async descend(childNodes, ...remainingArguments) {
        let descended = false;
        const visited = await (0, _asynchronous.asyncEvery)(childNodes, async (childNode)=>{
            const node = childNode, visited = await this.visitNode(node, ...remainingArguments);
            if (visited) {
                return true;
            }
        });
        if (visited) {
            descended = true;
        }
        return descended;
    }
    async visitNode(node, ...remainingArguments) {
        let visited;
        const nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            const terminalNode = node; ///
            visited = await this.visitTerminalNode(terminalNode, ...remainingArguments);
        } else {
            const nonTerminalNode = node; ///
            visited = await this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
        }
        return visited;
    }
    async visitTerminalNode(terminalNode, ...remainingArguments) {
        const visited = true;
        return visited;
    }
    async visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
        let visited = false;
        let { maps } = this.constructor;
        maps = [
            ...maps,
            {
                nodeQuery: _pass.nonTerminalNodeQuery,
                run: async (node, ...remainingArguments)=>{
                    let visited = false;
                    const childNodes = nonTerminalNode.getChildNodes(), descended = await this.descend(childNodes, ...remainingArguments);
                    if (descended) {
                        visited = true;
                    }
                    return visited;
                }
            }
        ];
        await (0, _asynchronous.asyncSome)(maps, async (map)=>{
            const { nodeQuery, run } = map;
            const node = nodeQuery(nonTerminalNode);
            if (node !== null) {
                const success = await run(node, ...remainingArguments);
                visited = success; ///
                return true;
            }
        });
        return visited;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2FzeW5jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuaW1wb3J0IHsgYXN5bmNTb21lLCBhc3luY0V2ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNQYXNzIHtcbiAgYXN5bmMgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhc3luYyBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBhd2FpdCBhc3luY0V2ZXJ5KGNoaWxkTm9kZXMsIGFzeW5jIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIGFzeW5jIHZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gYXdhaXQgdGhpcy52aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiBhc3luYyAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSBhd2FpdCB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgYXdhaXQgYXN5bmNTb21lKG1hcHMsIGFzeW5jIChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXN5bmNQYXNzIiwicnVuIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImNoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJhc3luY0V2ZXJ5IiwiY2hpbGROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJub2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsImdldENoaWxkTm9kZXMiLCJhc3luY1NvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7c0JBSGdCOzhCQUNDO0FBRXZCLE1BQU1BO0lBQ25CLE1BQU1DLElBQUlDLElBQUksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUNyQyxJQUFJQztRQUVKLE1BQU1DLFVBQVUsTUFBTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osU0FBU0M7UUFFOUNDLFVBQVVDLFNBQVUsR0FBRztRQUV2QixPQUFPRDtJQUNUO0lBRUEsTUFBTUcsUUFBUUMsVUFBVSxFQUFFLEdBQUdMLGtCQUFrQixFQUFFO1FBQy9DLElBQUlNLFlBQVk7UUFFaEIsTUFBTUosVUFBVSxNQUFNSyxJQUFBQSx3QkFBVSxFQUFDRixZQUFZLE9BQU9HO1lBQ2xELE1BQU1ULE9BQU9TLFdBQ1BOLFVBQVUsTUFBTSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osU0FBU0M7WUFFOUMsSUFBSUUsU0FBUztnQkFDWCxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlBLFNBQVM7WUFDWEksWUFBWTtRQUNkO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE1BQU1ILFVBQVVKLElBQUksRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUMzQyxJQUFJRTtRQUVKLE1BQU1PLG1CQUFtQlYsS0FBS1csY0FBYztRQUU1QyxJQUFJRCxrQkFBa0I7WUFDcEIsTUFBTUUsZUFBZVosTUFBTyxHQUFHO1lBRS9CRyxVQUFVLE1BQU0sSUFBSSxDQUFDVSxpQkFBaUIsQ0FBQ0QsaUJBQWlCWDtRQUMxRCxPQUFPO1lBQ0wsTUFBTWEsa0JBQWtCZCxNQUFPLEdBQUc7WUFFbENHLFVBQVUsTUFBTSxJQUFJLENBQUNZLG9CQUFvQixDQUFDRCxvQkFBb0JiO1FBQ2hFO1FBRUEsT0FBT0U7SUFDVDtJQUVBLE1BQU1VLGtCQUFrQkQsWUFBWSxFQUFFLEdBQUdYLGtCQUFrQixFQUFFO1FBQzNELE1BQU1FLFVBQVU7UUFFaEIsT0FBT0E7SUFDVDtJQUVBLE1BQU1ZLHFCQUFxQkQsZUFBZSxFQUFFLEdBQUdiLGtCQUFrQixFQUFFO1FBQ2pFLElBQUlFLFVBQVU7UUFFZCxJQUFJLEVBQUVhLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBRS9CQSxPQUFPO2VBQ0ZBO1lBQ0g7Z0JBQ0VDLFdBQVdDLDBCQUFvQjtnQkFDL0JuQixLQUFLLE9BQU9DLE1BQU0sR0FBR0M7b0JBQ25CLElBQUlFLFVBQVU7b0JBRWQsTUFBTUcsYUFBYVEsZ0JBQWdCSyxhQUFhLElBQzFDWixZQUFZLE1BQU0sSUFBSSxDQUFDRixPQUFPLENBQUNDLGVBQWVMO29CQUVwRCxJQUFJTSxXQUFXO3dCQUNiSixVQUFVO29CQUNaO29CQUVBLE9BQU9BO2dCQUNUO1lBQ0Y7U0FDRDtRQUVELE1BQU1pQixJQUFBQSx1QkFBUyxFQUFDSixNQUFNLE9BQU9LO1lBQzNCLE1BQU0sRUFBRUosU0FBUyxFQUFFbEIsR0FBRyxFQUFFLEdBQUdzQjtZQUUzQixNQUFNckIsT0FBT2lCLFVBQVVIO1lBRXZCLElBQUlkLFNBQVMsTUFBTTtnQkFDakIsTUFBTUUsVUFBVSxNQUFNSCxJQUFJQyxTQUFTQztnQkFFbkNFLFVBQVVELFNBQVUsR0FBRztnQkFFdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPQztJQUNUO0FBQ0YifQ==