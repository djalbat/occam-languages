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
    get verifyFileContexts () {
        return verifyFileContexts;
    },
    get verifyTypePrefixes () {
        return verifyTypePrefixes;
    }
});
const _necessary = require("necessary");
const _continuation = require("../utilities/continuation");
const { first, filter, compress } = _necessary.arrayUtilities;
function verifyFileContexts(fileContexts, verifiedFileContexts, contiunation) {
    (0, _continuation.resolve)(fileContexts, verifiedFileContexts, (fileContext, contiunation)=>{
        fileContext.verify(contiunation);
    }, contiunation);
}
function verifyTypePrefixes(typePrefixes, releaseContext) {
    let typePrefixesVerify = true;
    const typePrefixesLength = typePrefixes.length, compressedTypePrefixes = [
        ...typePrefixes
    ];
    compress(compressedTypePrefixes, (typePrefixA, typePrefixB)=>{
        const typePrefixAName = typePrefixA.getName(), typePrefixBName = typePrefixB.getName();
        if (typePrefixAName !== typePrefixBName) {
            return true;
        }
    });
    const compressTypePrefixesLength = compressedTypePrefixes.length;
    if (typePrefixesLength > compressTypePrefixesLength) {
        filter(compressedTypePrefixes, (typePrefix)=>{
            const typePrefixesIncludesTypePrefix = typePrefixes.includes(typePrefix);
            if (!typePrefixesIncludesTypePrefix) {
                return true;
            }
        });
        const firstTypePrefix = first(typePrefixes), typePrefix = firstTypePrefix, typePrefixString = typePrefix.getString();
        releaseContext.info(`The '${typePrefixString}' type prefix is duplicated.`);
        typePrefixesVerify = false;
    }
    return typePrefixesVerify;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGludWF0aW9uXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIGNvbnRpdW5hdGlvbikge1xuICByZXNvbHZlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIChmaWxlQ29udGV4dCwgY29udGl1bmF0aW9uKSA9PiB7XG4gICAgZmlsZUNvbnRleHQudmVyaWZ5KGNvbnRpdW5hdGlvbik7XG4gIH0sIGNvbnRpdW5hdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICBjb25zdCB0eXBlUHJlZml4ZXNMZW5ndGggPSB0eXBlUHJlZml4ZXMubGVuZ3RoLFxuICAgICAgICBjb21wcmVzc2VkVHlwZVByZWZpeGVzID0gWyAgLy8vXG4gICAgICAgICAgLi4udHlwZVByZWZpeGVzLFxuICAgICAgICBdO1xuXG4gIGNvbXByZXNzKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4QSwgdHlwZVByZWZpeEIpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4QU5hbWUgPSB0eXBlUHJlZml4QS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeEJOYW1lID0gdHlwZVByZWZpeEIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhBTmFtZSAhPT0gdHlwZVByZWZpeEJOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoID0gY29tcHJlc3NlZFR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA+IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoKSB7XG4gICAgZmlsdGVyKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4KSA9PiB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuaW5jbHVkZXModHlwZVByZWZpeCk7XG5cbiAgICAgIGlmICghdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4LCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgZHVwbGljYXRlZC5gKVxuXG4gICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZVByZWZpeGVzVmVyaWZ5O1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGVDb250ZXh0cyIsInZlcmlmeVR5cGVQcmVmaXhlcyIsImZpcnN0IiwiZmlsdGVyIiwiY29tcHJlc3MiLCJhcnJheVV0aWxpdGllcyIsImZpbGVDb250ZXh0cyIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiY29udGl1bmF0aW9uIiwicmVzb2x2ZSIsImZpbGVDb250ZXh0IiwidmVyaWZ5IiwidHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHQiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJjb21wcmVzc2VkVHlwZVByZWZpeGVzIiwidHlwZVByZWZpeEEiLCJ0eXBlUHJlZml4QiIsInR5cGVQcmVmaXhBTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4Qk5hbWUiLCJjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXgiLCJpbmNsdWRlcyIsImZpcnN0VHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFRZ0JBO2VBQUFBOztRQU1BQztlQUFBQTs7OzJCQVplOzhCQUVQO0FBRXhCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyx5QkFBYztBQUUzQyxTQUFTTCxtQkFBbUJNLFlBQVksRUFBRUMsb0JBQW9CLEVBQUVDLFlBQVk7SUFDakZDLElBQUFBLHFCQUFPLEVBQUNILGNBQWNDLHNCQUFzQixDQUFDRyxhQUFhRjtRQUN4REUsWUFBWUMsTUFBTSxDQUFDSDtJQUNyQixHQUFHQTtBQUNMO0FBRU8sU0FBU1AsbUJBQW1CVyxZQUFZLEVBQUVDLGNBQWM7SUFDN0QsSUFBSUMscUJBQXFCO0lBRXpCLE1BQU1DLHFCQUFxQkgsYUFBYUksTUFBTSxFQUN4Q0MseUJBQXlCO1dBQ3BCTDtLQUNKO0lBRVBSLFNBQVNhLHdCQUF3QixDQUFDQyxhQUFhQztRQUM3QyxNQUFNQyxrQkFBa0JGLFlBQVlHLE9BQU8sSUFDckNDLGtCQUFrQkgsWUFBWUUsT0FBTztRQUUzQyxJQUFJRCxvQkFBb0JFLGlCQUFpQjtZQUN2QyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE1BQU1DLDZCQUE2Qk4sdUJBQXVCRCxNQUFNO0lBRWhFLElBQUlELHFCQUFxQlEsNEJBQTRCO1FBQ25EcEIsT0FBT2Msd0JBQXdCLENBQUNPO1lBQzlCLE1BQU1DLGlDQUFpQ2IsYUFBYWMsUUFBUSxDQUFDRjtZQUU3RCxJQUFJLENBQUNDLGdDQUFnQztnQkFDbkMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxNQUFNRSxrQkFBa0J6QixNQUFNVSxlQUN4QlksYUFBYUcsaUJBQ2JDLG1CQUFtQkosV0FBV0ssU0FBUztRQUU3Q2hCLGVBQWVpQixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUVGLGlCQUFpQiw0QkFBNEIsQ0FBQztRQUUxRWQscUJBQXFCO0lBQ3ZCO0lBRUEsT0FBT0E7QUFDVCJ9