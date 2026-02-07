"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get chainContext () {
        return chainContext;
    },
    get default () {
        return _default;
    }
});
function chainContext(context) {
    return new Proxy(context, {
        get: function(context, name, receiver) {
            if (Reflect.has(context, name)) {
                return Reflect.get(context, name, receiver);
            }
            context = context.getContext(); ///
            return Reflect.get(context, name, receiver);
        }
    });
}
var _default = {
    chainContext: chainContext
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYWluQ29udGV4dChjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgUHJveHkoY29udGV4dCwge1xuICAgIGdldDogKGNvbnRleHQsIG5hbWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICBpZiAoUmVmbGVjdC5oYXMoY29udGV4dCwgbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbnRleHQsIG5hbWUsIHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpOyAvLy9cblxuICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGNvbnRleHQsIG5hbWUsIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoYWluQ29udGV4dFxufTtcbiJdLCJuYW1lcyI6WyJjaGFpbkNvbnRleHQiLCJjb250ZXh0IiwiUHJveHkiLCJnZXQiLCJuYW1lIiwicmVjZWl2ZXIiLCJSZWZsZWN0IiwiaGFzIiwiZ2V0Q29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBRWdCQTtlQUFBQTs7UUFjaEI7ZUFBQTs7O0FBZE8sU0FBU0EsYUFBYUMsT0FBTztJQUNsQyxPQUFPLElBQUlDLE1BQU1ELFNBQVM7UUFDeEJFLEtBQUssU0FBQ0YsU0FBU0csTUFBTUM7WUFDbkIsSUFBSUMsUUFBUUMsR0FBRyxDQUFDTixTQUFTRyxPQUFPO2dCQUM5QixPQUFPRSxRQUFRSCxHQUFHLENBQUNGLFNBQVNHLE1BQU1DO1lBQ3BDO1lBRUFKLFVBQVVBLFFBQVFPLFVBQVUsSUFBSSxHQUFHO1lBRW5DLE9BQU9GLFFBQVFILEdBQUcsQ0FBQ0YsU0FBU0csTUFBTUM7UUFDcEM7SUFDRjtBQUNGO0lBRUEsV0FBZTtJQUNiTCxjQUFBQTtBQUNGIn0=