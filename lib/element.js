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
    break(context, resume) {
        this.breakPoint = context.break(this.node, this.breakPoint, resume);
    }
    matchNode(node) {
        return this.node.match(node);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGJyZWFrUG9pbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0QnJlYWtQb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha1BvaW50O1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRCcmVha1BvaW50KGJyZWFrUG9pbnQpIHtcbiAgICB0aGlzLmJyZWFrUG9pbnQgPSBicmVha1BvaW50O1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgYnJlYWsoY29udGV4dCwgcmVzdW1lKSB7XG4gICAgdGhpcy5icmVha1BvaW50ID0gY29udGV4dC5icmVhayh0aGlzLm5vZGUsIHRoaXMuYnJlYWtQb2ludCwgcmVzdW1lKTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2gobm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRCcmVha1BvaW50Iiwic2V0Q29udGV4dCIsInNldFN0cmluZyIsInNldE5vZGUiLCJzZXRCcmVha1BvaW50IiwiY29tbWl0IiwiYnJlYWsiLCJyZXN1bWUiLCJtYXRjaE5vZGUiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUFxQkE7OztBQUFOLE1BQU1BO0lBQ25CLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUM3QyxJQUFJLENBQUNILE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixPQUFPO0lBQ3JCO0lBRUFLLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtJQUNwQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssV0FBV1IsT0FBTyxFQUFFO1FBQ2xCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtJQUNqQjtJQUVBUyxVQUFVUixNQUFNLEVBQUU7UUFDaEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFTLFFBQVFSLElBQUksRUFBRTtRQUNaLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtJQUNkO0lBRUFTLGNBQWNSLFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7SUFDcEI7SUFFQVMsT0FBT1osT0FBTyxFQUFFO1FBQ2QsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFhLE1BQU1iLE9BQU8sRUFBRWMsTUFBTSxFQUFFO1FBQ3JCLElBQUksQ0FBQ1gsVUFBVSxHQUFHSCxRQUFRYSxLQUFLLENBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEVBQUVXO0lBQzlEO0lBRUFDLFVBQVViLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNjLEtBQUssQ0FBQ2Q7SUFBTztBQUNsRCJ9