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
    constructor(context, string, node, lineIndex){
        this.context = context;
        this.string = string;
        this.node = node;
        this.lineIndex = lineIndex;
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
    getLineIndex() {
        return this.lineIndex;
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
    setLineIndex(lineIndex) {
        this.lineIndex = lineIndex;
    }
    commit(context) {
        this.context = context;
    }
    async break(context) {
        this.lineIndex = await context.break(this.node, this.lineIndex);
    }
    matchNode(node) {
        return this.node.match(node);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGluZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxpbmVJbmRleDtcbiAgfVxuXG4gIHNldENvbnRleHQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0TGluZUluZGV4KGxpbmVJbmRleCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4O1xuICB9XG5cbiAgY29tbWl0KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gYXdhaXQgY29udGV4dC5icmVhayh0aGlzLm5vZGUsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2gobm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldExpbmVJbmRleCIsInNldENvbnRleHQiLCJzZXRTdHJpbmciLCJzZXROb2RlIiwic2V0TGluZUluZGV4IiwiY29tbWl0IiwiYnJlYWsiLCJtYXRjaE5vZGUiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUFxQkE7OztBQUFOLE1BQU1BO0lBQ25CLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsQ0FBRTtRQUM1QyxJQUFJLENBQUNILE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixPQUFPO0lBQ3JCO0lBRUFLLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtJQUNwQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDSixTQUFTO0lBQ3ZCO0lBRUFLLFdBQVdSLE9BQU8sRUFBRTtRQUNsQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7SUFDakI7SUFFQVMsVUFBVVIsTUFBTSxFQUFFO1FBQ2hCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtJQUNoQjtJQUVBUyxRQUFRUixJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBUyxhQUFhUixTQUFTLEVBQUU7UUFDdEIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO0lBQ25CO0lBRUFTLE9BQU9aLE9BQU8sRUFBRTtRQUNkLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtJQUNqQjtJQUVBLE1BQU1hLE1BQU1iLE9BQU8sRUFBRTtRQUNuQixJQUFJLENBQUNHLFNBQVMsR0FBRyxNQUFNSCxRQUFRYSxLQUFLLENBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDQyxTQUFTO0lBQ2hFO0lBRUFXLFVBQVVaLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNhLEtBQUssQ0FBQ2I7SUFBTztBQUNsRCJ9