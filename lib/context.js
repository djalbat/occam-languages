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
    setContext(context) {
        this.context = context;
    }
    getDepth() {
        let depth = this.context.getDepth();
        depth++;
        return depth;
    }
    isReleased() {
        return this.context.isReleased();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgRVJST1JfTEVWRUwsIFdBUk5JTkdfTEVWRUwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGxldCBkZXB0aCA9IHRoaXMuY29udGV4dC5nZXREZXB0aCgpO1xuXG4gICAgZGVwdGgrKztcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNSZWxlYXNlZCgpOyB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSk7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGVudCA9IERPVUJMRV9TUEFDRS5yZXBlYXQoZGVwdGgpO1xuXG4gICAgbWVzc2FnZSA9IGAke2luZGVudH0ke21lc3NhZ2V9YDsgIC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUsIGxpbmVJbmRleCkgeyByZXR1cm4gYXdhaXQgdGhpcy5jb250ZXh0LmJyZWFrKG5vZGUsIGxpbmVJbmRleCk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpO1xuXG4gICAgY29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInNldENvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiaXNSZWxlYXNlZCIsImdldFJlbGVhc2VDb250ZXh0Iiwibm9kZXNBc1N0cmluZyIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImluZGVudCIsIkRPVUJMRV9TUEFDRSIsInJlcGVhdCIsInJlbGVhc2VDb250ZXh0IiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzJCQUYwRTtBQUVoRixNQUFNQTtJQUNuQixZQUFZQyxPQUFPLENBQUU7UUFDbkIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0QsT0FBTztJQUNyQjtJQUVBRSxXQUFXRixPQUFPLEVBQUU7UUFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFHLFdBQVc7UUFDVCxJQUFJQyxRQUFRLElBQUksQ0FBQ0osT0FBTyxDQUFDRyxRQUFRO1FBRWpDQztRQUVBLE9BQU9BO0lBQ1Q7SUFFQUMsYUFBYTtRQUFFLE9BQU8sSUFBSSxDQUFDTCxPQUFPLENBQUNLLFVBQVU7SUFBSTtJQUVqREMsb0JBQW9CO1FBQUUsT0FBTyxJQUFJLENBQUNOLE9BQU8sQ0FBQ00saUJBQWlCO0lBQUk7SUFFL0RDLGNBQWNDLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDUixPQUFPLENBQUNPLGFBQWEsQ0FBQ0M7SUFBTztJQUUvREMsYUFBYUQsSUFBSSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsWUFBWSxDQUFDRDtJQUFPO0lBRTdERSxNQUFNQyxPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRQyxzQkFBVztRQUV6QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQUksTUFBTUosT0FBTyxFQUFFO1FBQ2IsTUFBTUMsUUFBUUksc0JBQVc7UUFFekIsSUFBSSxDQUFDRixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFNLEtBQUtOLE9BQU8sRUFBRTtRQUNaLE1BQU1DLFFBQVFNLHFCQUFVO1FBRXhCLElBQUksQ0FBQ0osVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBUSxRQUFRUixPQUFPLEVBQUU7UUFDZixNQUFNQyxRQUFRUSx3QkFBYTtRQUUzQixJQUFJLENBQUNOLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQVUsTUFBTVYsT0FBTyxFQUFFO1FBQ2IsTUFBTUMsUUFBUVUsc0JBQVc7UUFFekIsSUFBSSxDQUFDUixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFHLFdBQVdGLEtBQUssRUFBRUQsT0FBTyxFQUFFO1FBQ3pCLE1BQU1QLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCb0IsU0FBU0MsdUJBQVksQ0FBQ0MsTUFBTSxDQUFDckI7UUFFbkNPLFVBQVUsR0FBR1ksU0FBU1osU0FBUyxFQUFHLEdBQUc7UUFFckMsTUFBTWUsaUJBQWlCLElBQUksQ0FBQ3BCLGlCQUFpQjtRQUU3Q29CLGVBQWVaLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDbkM7SUFFQSxNQUFNZ0IsTUFBTW5CLElBQUksRUFBRW9CLFNBQVMsRUFBRTtRQUFFLE9BQU8sTUFBTSxJQUFJLENBQUM1QixPQUFPLENBQUMyQixLQUFLLENBQUNuQixNQUFNb0I7SUFBWTtJQUVqRixPQUFPQyxZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSS9CLFVBQVUrQixtQkFBbUJDLEdBQUc7UUFFcENoQyxVQUFVLElBQUk4QixNQUFNOUIsWUFBWStCLHFCQUFzQixHQUFHO1FBRXpELE9BQU8vQjtJQUNUO0FBQ0YifQ==