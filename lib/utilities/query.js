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
    get default () {
        return _default;
    },
    get nodeQuery () {
        return nodeQuery;
    },
    get nodesQuery () {
        return nodesQuery;
    }
});
var _occamquery = require("occam-query");
function nodeQuery(expressionString) {
    var query = _occamquery.Query.fromExpressionString(expressionString);
    return function(node) {
        var nodes = query.execute(node);
        node = nodes.shift() || null; ///
        return node;
    };
}
function nodesQuery(expressionString) {
    var query = _occamquery.Query.fromExpressionString(expressionString);
    return function(node) {
        var nodes = query.execute(node);
        return nodes;
    };
}
var _default = {
    nodeQuery: nodeQuery,
    nodesQuery: nodesQuery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnkoZXhwcmVzc2lvblN0cmluZykge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgbm9kZSA9IG5vZGVzLnNoaWZ0KCkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnkoZXhwcmVzc2lvblN0cmluZykge1xuICBjb25zdCBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vZGVRdWVyeSxcbiAgbm9kZXNRdWVyeSxcbn1cbiJdLCJuYW1lcyI6WyJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZXhwcmVzc2lvblN0cmluZyIsInF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJzaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBMEJBO2VBQUE7O1FBdEJnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOzs7MEJBZE07QUFFZixTQUFTRCxVQUFVRSxnQkFBZ0I7SUFDeEMsSUFBTUMsUUFBUUMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUNIO0lBRXpDLE9BQU8sU0FBU0ksSUFBSTtRQUNsQixJQUFNQyxRQUFRSixNQUFNSyxPQUFPLENBQUNGO1FBRTVCQSxPQUFPQyxNQUFNRSxLQUFLLE1BQU0sTUFBTSxHQUFHO1FBRWpDLE9BQU9IO0lBQ1Q7QUFDRjtBQUVPLFNBQVNMLFdBQVdDLGdCQUFnQjtJQUN6QyxJQUFNQyxRQUFRQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0g7SUFFekMsT0FBTyxTQUFTSSxJQUFJO1FBQ2xCLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFFNUIsT0FBT0M7SUFDVDtBQUNGO0lBRUEsV0FBZTtJQUNiUCxXQUFBQTtJQUNBQyxZQUFBQTtBQUNGIn0=