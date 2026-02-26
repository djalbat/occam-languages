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
    async break(node) {
        await this.context.break(node);
    }
    static fromNothing(Class, ...remainingArguments) {
        let context = remainingArguments.pop();
        context = new Class(context, ...remainingArguments); ///
        return context;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgRVJST1JfTEVWRUwsIFdBUk5JTkdfTEVWRUwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UmVsZWFzZUNvbnRleHQoKTsgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSk7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5nZXREZXB0aCgpLFxuICAgICAgICAgIGluZGVudCA9IERPVUJMRV9TUEFDRS5yZXBlYXQoZGVwdGgpO1xuXG4gICAgbWVzc2FnZSA9IGAke2luZGVudH0ke21lc3NhZ2V9YDsgIC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUpIHsgYXdhaXQgdGhpcy5jb250ZXh0LmJyZWFrKG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJub2Rlc0FzU3RyaW5nIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImxldmVsIiwiVFJBQ0VfTEVWRUwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJERUJVR19MRVZFTCIsImluZm8iLCJJTkZPX0xFVkVMIiwid2FybmluZyIsIldBUk5JTkdfTEVWRUwiLCJlcnJvciIsIkVSUk9SX0xFVkVMIiwiaW5kZW50IiwiRE9VQkxFX1NQQUNFIiwicmVwZWF0IiwicmVsZWFzZUNvbnRleHQiLCJicmVhayIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7MkJBRjBFO0FBRWhGLE1BQU1BO0lBQ25CLFlBQVlDLE9BQU8sQ0FBRTtRQUNuQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7SUFDakI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDRCxPQUFPO0lBQ3JCO0lBRUFFLFdBQVc7UUFDVCxJQUFJQyxRQUFRLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxRQUFRO1FBRWpDQztRQUVBLE9BQU9BO0lBQ1Q7SUFFQUMsb0JBQW9CO1FBQUUsT0FBTyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksaUJBQWlCO0lBQUk7SUFFL0RDLGNBQWNDLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDTixPQUFPLENBQUNLLGFBQWEsQ0FBQ0M7SUFBTztJQUUvREMsYUFBYUQsSUFBSSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNOLE9BQU8sQ0FBQ08sWUFBWSxDQUFDRDtJQUFPO0lBRTdERSxNQUFNQyxPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRQyxzQkFBVztRQUV6QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQUksTUFBTUosT0FBTyxFQUFFO1FBQ2IsTUFBTUMsUUFBUUksc0JBQVc7UUFFekIsSUFBSSxDQUFDRixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFNLEtBQUtOLE9BQU8sRUFBRTtRQUNaLE1BQU1DLFFBQVFNLHFCQUFVO1FBRXhCLElBQUksQ0FBQ0osVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBUSxRQUFRUixPQUFPLEVBQUU7UUFDZixNQUFNQyxRQUFRUSx3QkFBYTtRQUUzQixJQUFJLENBQUNOLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQVUsTUFBTVYsT0FBTyxFQUFFO1FBQ2IsTUFBTUMsUUFBUVUsc0JBQVc7UUFFekIsSUFBSSxDQUFDUixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFHLFdBQVdGLEtBQUssRUFBRUQsT0FBTyxFQUFFO1FBQ3pCLE1BQU1OLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCbUIsU0FBU0MsdUJBQVksQ0FBQ0MsTUFBTSxDQUFDcEI7UUFFbkNNLFVBQVUsR0FBR1ksU0FBU1osU0FBUyxFQUFHLEdBQUc7UUFFckMsTUFBTWUsaUJBQWlCLElBQUksQ0FBQ3BCLGlCQUFpQjtRQUU3Q29CLGVBQWVaLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDbkM7SUFFQSxNQUFNZ0IsTUFBTW5CLElBQUksRUFBRTtRQUFFLE1BQU0sSUFBSSxDQUFDTixPQUFPLENBQUN5QixLQUFLLENBQUNuQjtJQUFPO0lBRXBELE9BQU9vQixZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSTVCLFVBQVU0QixtQkFBbUJDLEdBQUc7UUFFcEM3QixVQUFVLElBQUkyQixNQUFNM0IsWUFBWTRCLHFCQUFzQixHQUFHO1FBRXpELE9BQU81QjtJQUNUO0FBQ0YifQ==