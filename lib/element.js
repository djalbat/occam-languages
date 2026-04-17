"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
    }
});
class Element {
    constructor(context, string, node, breakPoint){
        this.context = context;
        this.string = string;
        this.node = node;
        this.breakPoint = breakPoint;
    }
    getContext() {
        return this.context;
    }
    getString() {
        return this.string;
    }
    getNode() {
        return this.node;
    }
    getBreakPoint() {
        return this.breakPoint;
    }
    setContext(context) {
        this.context = context;
    }
    setString(string) {
        this.string = string;
    }
    setNode(node) {
        this.node = node;
    }
    setBreakPoint(breakPoint) {
        this.breakPoint = breakPoint;
    }
    commit(context) {
        this.context = context;
    }
    async break(context) {
        this.breakPoint = await context.break(this.node, this.breakPoint);
    }
    matchNode(node) {
        return this.node.match(node);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGJyZWFrUG9pbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0QnJlYWtQb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha1BvaW50O1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRCcmVha1BvaW50KGJyZWFrUG9pbnQpIHtcbiAgICB0aGlzLmJyZWFrUG9pbnQgPSBicmVha1BvaW50O1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGF3YWl0IGNvbnRleHQuYnJlYWsodGhpcy5ub2RlLCB0aGlzLmJyZWFrUG9pbnQpO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChub2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldEJyZWFrUG9pbnQiLCJzZXRDb250ZXh0Iiwic2V0U3RyaW5nIiwic2V0Tm9kZSIsInNldEJyZWFrUG9pbnQiLCJjb21taXQiLCJicmVhayIsIm1hdGNoTm9kZSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXFCQTs7O0FBQU4sTUFBTUE7SUFDbkIsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQzdDLElBQUksQ0FBQ0gsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNKLE9BQU87SUFDckI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0osVUFBVTtJQUN4QjtJQUVBSyxXQUFXUixPQUFPLEVBQUU7UUFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFTLFVBQVVSLE1BQU0sRUFBRTtRQUNoQixJQUFJLENBQUNBLE1BQU0sR0FBR0E7SUFDaEI7SUFFQVMsUUFBUVIsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQVMsY0FBY1IsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtJQUNwQjtJQUVBUyxPQUFPWixPQUFPLEVBQUU7UUFDZCxJQUFJLENBQUNBLE9BQU8sR0FBR0E7SUFDakI7SUFFQSxNQUFNYSxNQUFNYixPQUFPLEVBQUU7UUFDbkIsSUFBSSxDQUFDRyxVQUFVLEdBQUcsTUFBTUgsUUFBUWEsS0FBSyxDQUFDLElBQUksQ0FBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQ0MsVUFBVTtJQUNsRTtJQUVBVyxVQUFVWixJQUFJLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDYSxLQUFLLENBQUNiO0lBQU87QUFDbEQifQ==