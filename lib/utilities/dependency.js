"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "asyncEveryDependency", {
    enumerable: true,
    get: function() {
        return asyncEveryDependency;
    }
});
const _asynchronous = require("../utilities/asynchronous");
async function asyncEveryDependency(dependencies, callback) {
    const array = dependencies.getArray();
    return await (0, _asynchronous.asyncEvery)(array, callback);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGVwZW5kZW5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeSAgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXN5bmNFdmVyeURlcGVuZGVuY3koZGVwZW5kZW5jaWVzLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IGRlcGVuZGVuY2llcy5nZXRBcnJheSgpO1xuXG4gIHJldHVybiBhd2FpdCBhc3luY0V2ZXJ5KGFycmF5LCBjYWxsYmFjayk7XG59XG4iXSwibmFtZXMiOlsiYXN5bmNFdmVyeURlcGVuZGVuY3kiLCJkZXBlbmRlbmNpZXMiLCJjYWxsYmFjayIsImFycmF5IiwiZ2V0QXJyYXkiLCJhc3luY0V2ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJc0JBOzs7ZUFBQUE7Ozs4QkFGTTtBQUVyQixlQUFlQSxxQkFBcUJDLFlBQVksRUFBRUMsUUFBUTtJQUMvRCxNQUFNQyxRQUFRRixhQUFhRyxRQUFRO0lBRW5DLE9BQU8sTUFBTUMsSUFBQUEsd0JBQVUsRUFBQ0YsT0FBT0Q7QUFDakMifQ==