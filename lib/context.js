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
    async break(node, lineIndex = null) {
        await this.context.break(node, lineIndex);
    }
    static fromNothing(Class, ...remainingArguments) {
        let context = remainingArguments.pop();
        context = new Class(context, ...remainingArguments); ///
        return context;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UsIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgRVJST1JfTEVWRUwsIFdBUk5JTkdfTEVWRUwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGxldCBkZXB0aCA9IHRoaXMuY29udGV4dC5nZXREZXB0aCgpO1xuXG4gICAgZGVwdGgrKztcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFJlbGVhc2VDb250ZXh0KCk7IH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBpbmRlbnQgPSBET1VCTEVfU1BBQ0UucmVwZWF0KGRlcHRoKTtcblxuICAgIG1lc3NhZ2UgPSBgJHtpbmRlbnR9JHttZXNzYWdlfWA7ICAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlLCBsaW5lSW5kZXggPSBudWxsKSB7IGF3YWl0IHRoaXMuY29udGV4dC5icmVhayhub2RlLCBsaW5lSW5kZXgpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTtcblxuICAgIGNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJzZXRDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImdldFJlbGVhc2VDb250ZXh0Iiwibm9kZXNBc1N0cmluZyIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImluZGVudCIsIkRPVUJMRV9TUEFDRSIsInJlcGVhdCIsInJlbGVhc2VDb250ZXh0IiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzJCQUYwRTtBQUVoRixNQUFNQTtJQUNuQixZQUFZQyxPQUFPLENBQUU7UUFDbkIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0QsT0FBTztJQUNyQjtJQUVBRSxXQUFXRixPQUFPLEVBQUU7UUFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFHLFdBQVc7UUFDVCxJQUFJQyxRQUFRLElBQUksQ0FBQ0osT0FBTyxDQUFDRyxRQUFRO1FBRWpDQztRQUVBLE9BQU9BO0lBQ1Q7SUFFQUMsb0JBQW9CO1FBQUUsT0FBTyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0ssaUJBQWlCO0lBQUk7SUFFL0RDLGNBQWNDLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDUCxPQUFPLENBQUNNLGFBQWEsQ0FBQ0M7SUFBTztJQUUvREMsYUFBYUQsSUFBSSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNQLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDRDtJQUFPO0lBRTdERSxNQUFNQyxPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRQyxzQkFBVztRQUV6QixJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQUksTUFBTUosT0FBTyxFQUFFO1FBQ2IsTUFBTUMsUUFBUUksc0JBQVc7UUFFekIsSUFBSSxDQUFDRixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFNLEtBQUtOLE9BQU8sRUFBRTtRQUNaLE1BQU1DLFFBQVFNLHFCQUFVO1FBRXhCLElBQUksQ0FBQ0osVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBUSxRQUFRUixPQUFPLEVBQUU7UUFDZixNQUFNQyxRQUFRUSx3QkFBYTtRQUUzQixJQUFJLENBQUNOLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQVUsTUFBTVYsT0FBTyxFQUFFO1FBQ2IsTUFBTUMsUUFBUVUsc0JBQVc7UUFFekIsSUFBSSxDQUFDUixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFHLFdBQVdGLEtBQUssRUFBRUQsT0FBTyxFQUFFO1FBQ3pCLE1BQU1OLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCbUIsU0FBU0MsdUJBQVksQ0FBQ0MsTUFBTSxDQUFDcEI7UUFFbkNNLFVBQVUsR0FBR1ksU0FBU1osU0FBUyxFQUFHLEdBQUc7UUFFckMsTUFBTWUsaUJBQWlCLElBQUksQ0FBQ3BCLGlCQUFpQjtRQUU3Q29CLGVBQWVaLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDbkM7SUFFQSxNQUFNZ0IsTUFBTW5CLElBQUksRUFBRW9CLFlBQVksSUFBSSxFQUFFO1FBQUUsTUFBTSxJQUFJLENBQUMzQixPQUFPLENBQUMwQixLQUFLLENBQUNuQixNQUFNb0I7SUFBWTtJQUVqRixPQUFPQyxZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSTlCLFVBQVU4QixtQkFBbUJDLEdBQUc7UUFFcEMvQixVQUFVLElBQUk2QixNQUFNN0IsWUFBWThCLHFCQUFzQixHQUFHO1FBRXpELE9BQU85QjtJQUNUO0FBQ0YifQ==