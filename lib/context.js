"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Context;
    }
});
const _constants = require("./constants");
class Context {
    constructor(context){
        this.context = context;
    }
    getContext() {
        return this.context;
    }
    getDepth() {
        let depth = this.context.getDepth();
        depth++;
        return depth;
    }
    isReleased() {
        return this.context.isReleased();
    }
    isUnreleased() {
        return this.context.isUnreleased();
    }
    getReleaseContext() {
        return this.context.getReleaseContext();
    }
    nodesAsString(node) {
        return this.context.nodesAsString(node);
    }
    nodeAsString(node) {
        return this.context.nodeAsString(node);
    }
    trace(message) {
        const level = _constants.TRACE_LEVEL;
        this.writeToLog(level, message);
    }
    debug(message) {
        const level = _constants.DEBUG_LEVEL;
        this.writeToLog(level, message);
    }
    info(message) {
        const level = _constants.INFO_LEVEL;
        this.writeToLog(level, message);
    }
    warning(message) {
        const level = _constants.WARNING_LEVEL;
        this.writeToLog(level, message);
    }
    error(message) {
        const level = _constants.ERROR_LEVEL;
        this.writeToLog(level, message);
    }
    writeToLog(level, message) {
        const depth = this.getDepth(), indent = _constants.DOUBLE_SPACE.repeat(depth);
        message = `${indent}${message}`; ///
        const releaseContext = this.getReleaseContext();
        releaseContext.writeToLog(level, message);
    }
    async break(node, lineIndex) {
        return await this.context.break(node, lineIndex);
    }
    static fromNothing(Class, ...remainingArguments) {
        let context = remainingArguments.pop();
        context = new Class(context, ...remainingArguments); ///
        return context;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgRVJST1JfTEVWRUwsIFdBUk5JTkdfTEVWRUwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1JlbGVhc2VkKCk7IH1cblxuICBpc1VucmVsZWFzZWQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNVbnJlbGVhc2VkKCk7IH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRSZWxlYXNlQ29udGV4dCgpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZGVwdGggPSB0aGlzLmdldERlcHRoKCksXG4gICAgICAgICAgaW5kZW50ID0gRE9VQkxFX1NQQUNFLnJlcGVhdChkZXB0aCk7XG5cbiAgICBtZXNzYWdlID0gYCR7aW5kZW50fSR7bWVzc2FnZX1gOyAgLy8vXG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsobm9kZSwgbGluZUluZGV4KSB7IHJldHVybiBhd2FpdCB0aGlzLmNvbnRleHQuYnJlYWsobm9kZSwgbGluZUluZGV4KTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7XG5cbiAgICBjb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7ICAvLy9cblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImlzUmVsZWFzZWQiLCJpc1VucmVsZWFzZWQiLCJnZXRSZWxlYXNlQ29udGV4dCIsIm5vZGVzQXNTdHJpbmciLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJUUkFDRV9MRVZFTCIsIndyaXRlVG9Mb2ciLCJkZWJ1ZyIsIkRFQlVHX0xFVkVMIiwiaW5mbyIsIklORk9fTEVWRUwiLCJ3YXJuaW5nIiwiV0FSTklOR19MRVZFTCIsImVycm9yIiwiRVJST1JfTEVWRUwiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJyZXBlYXQiLCJyZWxlYXNlQ29udGV4dCIsImJyZWFrIiwibGluZUluZGV4IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OzsyQkFGMEU7QUFFaEYsTUFBTUE7SUFDbkIsWUFBWUMsT0FBTyxDQUFFO1FBQ25CLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtJQUNqQjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNELE9BQU87SUFDckI7SUFFQUUsV0FBVztRQUNULElBQUlDLFFBQVEsSUFBSSxDQUFDSCxPQUFPLENBQUNFLFFBQVE7UUFFakNDO1FBRUEsT0FBT0E7SUFDVDtJQUVBQyxhQUFhO1FBQUUsT0FBTyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksVUFBVTtJQUFJO0lBRWpEQyxlQUFlO1FBQUUsT0FBTyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0ssWUFBWTtJQUFJO0lBRXJEQyxvQkFBb0I7UUFBRSxPQUFPLElBQUksQ0FBQ04sT0FBTyxDQUFDTSxpQkFBaUI7SUFBSTtJQUUvREMsY0FBY0MsSUFBSSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLE9BQU8sQ0FBQ08sYUFBYSxDQUFDQztJQUFPO0lBRS9EQyxhQUFhRCxJQUFJLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1IsT0FBTyxDQUFDUyxZQUFZLENBQUNEO0lBQU87SUFFN0RFLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1DLFFBQVFDLHNCQUFXO1FBRXpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBSSxNQUFNSixPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRSSxzQkFBVztRQUV6QixJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQU0sS0FBS04sT0FBTyxFQUFFO1FBQ1osTUFBTUMsUUFBUU0scUJBQVU7UUFFeEIsSUFBSSxDQUFDSixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFRLFFBQVFSLE9BQU8sRUFBRTtRQUNmLE1BQU1DLFFBQVFRLHdCQUFhO1FBRTNCLElBQUksQ0FBQ04sVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBVSxNQUFNVixPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRVSxzQkFBVztRQUV6QixJQUFJLENBQUNSLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQUcsV0FBV0YsS0FBSyxFQUFFRCxPQUFPLEVBQUU7UUFDekIsTUFBTVIsUUFBUSxJQUFJLENBQUNELFFBQVEsSUFDckJxQixTQUFTQyx1QkFBWSxDQUFDQyxNQUFNLENBQUN0QjtRQUVuQ1EsVUFBVSxHQUFHWSxTQUFTWixTQUFTLEVBQUcsR0FBRztRQUVyQyxNQUFNZSxpQkFBaUIsSUFBSSxDQUFDcEIsaUJBQWlCO1FBRTdDb0IsZUFBZVosVUFBVSxDQUFDRixPQUFPRDtJQUNuQztJQUVBLE1BQU1nQixNQUFNbkIsSUFBSSxFQUFFb0IsU0FBUyxFQUFFO1FBQUUsT0FBTyxNQUFNLElBQUksQ0FBQzVCLE9BQU8sQ0FBQzJCLEtBQUssQ0FBQ25CLE1BQU1vQjtJQUFZO0lBRWpGLE9BQU9DLFlBQVlDLEtBQUssRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUMvQyxJQUFJL0IsVUFBVStCLG1CQUFtQkMsR0FBRztRQUVwQ2hDLFVBQVUsSUFBSThCLE1BQU05QixZQUFZK0IscUJBQXNCLEdBQUc7UUFFekQsT0FBTy9CO0lBQ1Q7QUFDRiJ9