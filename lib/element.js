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
    constructor(context, string, node){
        this.context = context;
        this.string = string;
        this.node = node;
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
    setContext(context) {
        this.context = context;
    }
    setString(string) {
        this.string = string;
    }
    setNode(node) {
        this.node = node;
    }
    async break(context) {
        await context.break(this.node);
    }
    matchNode(node) {
        return this.node.match(node);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHNldENvbnRleHQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIGF3YWl0IGNvbnRleHQuYnJlYWsodGhpcy5ub2RlKTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2gobm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsInNldENvbnRleHQiLCJzZXRTdHJpbmciLCJzZXROb2RlIiwiYnJlYWsiLCJtYXRjaE5vZGUiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUFxQkE7OztBQUFOLE1BQU1BO0lBQ25CLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLENBQUU7UUFDakMsSUFBSSxDQUFDRixPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksV0FBV04sT0FBTyxFQUFFO1FBQ2xCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtJQUNqQjtJQUVBTyxVQUFVTixNQUFNLEVBQUU7UUFDaEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO0lBQ2hCO0lBRUFPLFFBQVFOLElBQUksRUFBRTtRQUNaLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtJQUNkO0lBRUEsTUFBTU8sTUFBTVQsT0FBTyxFQUFFO1FBQ25CLE1BQU1BLFFBQVFTLEtBQUssQ0FBQyxJQUFJLENBQUNQLElBQUk7SUFDL0I7SUFFQVEsVUFBVVIsSUFBSSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ1MsS0FBSyxDQUFDVDtJQUFPO0FBQ2xEIn0=