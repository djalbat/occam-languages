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
const _asynchronous = require("../utilities/asynchronous");
const { first, filter, compress } = _necessary.arrayUtilities;
async function verifyFileContexts(fileContexts, verifiedFileContexts) {
    const resolved = await (0, _asynchronous.asyncResolve)(fileContexts, verifiedFileContexts, async (fileContext)=>{
        const fileContextVerifies = await fileContext.verify();
        if (fileContextVerifies) {
            return true;
        }
    }), fileContextsVerify = resolved; ///
    return fileContextsVerify;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgYXN5bmNSZXNvbHZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cykge1xuICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IGFzeW5jUmVzb2x2ZShmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzLCBhc3luYyAoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgZmlsZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICBpZiAoZmlsZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gcmVzb2x2ZWQ7ICAvLy9cblxuICByZXR1cm4gZmlsZUNvbnRleHRzVmVyaWZ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHRydWU7XG5cbiAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aCxcbiAgICAgICAgY29tcHJlc3NlZFR5cGVQcmVmaXhlcyA9IFsgIC8vL1xuICAgICAgICAgIC4uLnR5cGVQcmVmaXhlcyxcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyhjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeEEsIHR5cGVQcmVmaXhCKSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEFOYW1lID0gdHlwZVByZWZpeEEuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhCTmFtZSA9IHR5cGVQcmVmaXhCLmdldE5hbWUoKTtcblxuICAgIGlmICh0eXBlUHJlZml4QU5hbWUgIT09IHR5cGVQcmVmaXhCTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCA9IGNvbXByZXNzZWRUeXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPiBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCkge1xuICAgIGZpbHRlcihjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeCkgPT4ge1xuICAgICAgY29uc3QgdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmluY2x1ZGVzKHR5cGVQcmVmaXgpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeCwgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGR1cGxpY2F0ZWQuYClcblxuICAgIHR5cGVQcmVmaXhlc1ZlcmlmeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc1ZlcmlmeTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJmaXJzdCIsImZpbHRlciIsImNvbXByZXNzIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWxlQ29udGV4dHMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsInJlc29sdmVkIiwiYXN5bmNSZXNvbHZlIiwiZmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dFZlcmlmaWVzIiwidmVyaWZ5IiwiZmlsZUNvbnRleHRzVmVyaWZ5IiwidHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHQiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJjb21wcmVzc2VkVHlwZVByZWZpeGVzIiwidHlwZVByZWZpeEEiLCJ0eXBlUHJlZml4QiIsInR5cGVQcmVmaXhBTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4Qk5hbWUiLCJjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXgiLCJpbmNsdWRlcyIsImZpcnN0VHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJpbmZvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFRc0JBO2VBQUFBOztRQWFOQztlQUFBQTs7OzJCQW5CZTs4QkFFRjtBQUU3QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0MseUJBQWM7QUFFM0MsZUFBZUwsbUJBQW1CTSxZQUFZLEVBQUVDLG9CQUFvQjtJQUN6RSxNQUFNQyxXQUFXLE1BQU1DLElBQUFBLDBCQUFZLEVBQUNILGNBQWNDLHNCQUFzQixPQUFPRztRQUN2RSxNQUFNQyxzQkFBc0IsTUFBTUQsWUFBWUUsTUFBTTtRQUVwRCxJQUFJRCxxQkFBcUI7WUFDdkIsT0FBTztRQUNUO0lBQ0YsSUFDQUUscUJBQXFCTCxVQUFXLEdBQUc7SUFFekMsT0FBT0s7QUFDVDtBQUVPLFNBQVNaLG1CQUFtQmEsWUFBWSxFQUFFQyxjQUFjO0lBQzdELElBQUlDLHFCQUFxQjtJQUV6QixNQUFNQyxxQkFBcUJILGFBQWFJLE1BQU0sRUFDeENDLHlCQUF5QjtXQUNwQkw7S0FDSjtJQUVQVixTQUFTZSx3QkFBd0IsQ0FBQ0MsYUFBYUM7UUFDN0MsTUFBTUMsa0JBQWtCRixZQUFZRyxPQUFPLElBQ3JDQyxrQkFBa0JILFlBQVlFLE9BQU87UUFFM0MsSUFBSUQsb0JBQW9CRSxpQkFBaUI7WUFDdkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxNQUFNQyw2QkFBNkJOLHVCQUF1QkQsTUFBTTtJQUVoRSxJQUFJRCxxQkFBcUJRLDRCQUE0QjtRQUNuRHRCLE9BQU9nQix3QkFBd0IsQ0FBQ087WUFDOUIsTUFBTUMsaUNBQWlDYixhQUFhYyxRQUFRLENBQUNGO1lBRTdELElBQUksQ0FBQ0MsZ0NBQWdDO2dCQUNuQyxPQUFPO1lBQ1Q7UUFDRjtRQUVBLE1BQU1FLGtCQUFrQjNCLE1BQU1ZLGVBQ3hCWSxhQUFhRyxpQkFDYkMsbUJBQW1CSixXQUFXSyxTQUFTO1FBRTdDaEIsZUFBZWlCLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRUYsaUJBQWlCLDRCQUE0QixDQUFDO1FBRTFFZCxxQkFBcUI7SUFDdkI7SUFFQSxPQUFPQTtBQUNUIn0=