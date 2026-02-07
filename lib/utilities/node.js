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
    get nodeAsString () {
        return nodeAsString;
    },
    get nodesAsString () {
        return nodesAsString;
    }
});
var _constants = require("../constants");
function nodeAsString(node, tokens) {
    var string;
    tokens = nodeAsTokens(node, tokens); ///
    string = tokensAsString(tokens);
    string = trimString(string); ///
    return string;
}
function nodesAsString(nodes, tokens) {
    var string = nodes.reduce(function(string, node) {
        var nodeString = nodeAsString(node, tokens);
        string = string === null ? nodeString : "".concat(string, ", ").concat(nodeString);
        return string;
    }, null);
    return string;
}
var _default = {
    nodeAsString: nodeAsString,
    nodesAsString: nodesAsString
};
function trimString(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
    return string;
}
function tokensAsString(tokens) {
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
function nodeAsTokens(node, tokens) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        tokens = terminalNodeAsTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
    }
    return tokens;
}
function terminalNodeAsTokens(terminalNode, tokens) {
    var significantToken = terminalNode.getSignificantToken(), token = significantToken; ///
    tokens = [
        token
    ];
    return tokens;
}
function nonTerminalNodeAsTokens(nonTerminalNode, tokens) {
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIHRva2VucyA9IG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgc3RyaW5nID0gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICBzdHJpbmcgPSB0cmltU3RyaW5nKHN0cmluZyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgbm9kZVN0cmluZyA6XG4gICAgICBgJHtzdHJpbmd9LCAke25vZGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZUFzU3RyaW5nLFxuICBub2Rlc0FzU3RyaW5nLFxufTtcblxuZnVuY3Rpb24gdHJpbVN0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyskLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHRva2Vuc0FzU3RyaW5nKHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgdG9rZW5zID0gdGVybWluYWxOb2RlQXNUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgdG9rZW5zID0gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gdGVybWluYWxOb2RlQXNUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIHRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgdG9rZW5zID0gWyAgLy8vXG4gICAgdG9rZW5cbiAgXTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBub25UZXJtaW5hbE5vZGVBc1Rva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTsgIC8vL1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG4iXSwibmFtZXMiOlsibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJzdHJpbmciLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInRyaW1TdHJpbmciLCJub2RlcyIsInJlZHVjZSIsIm5vZGVTdHJpbmciLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIiwidG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUFzVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQXNUb2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThCQTtlQUFBOztRQTFCZ0JBO2VBQUFBOztRQVlBQztlQUFBQTs7O3lCQWRhO0FBRXRCLFNBQVNELGFBQWFFLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQztJQUVKRCxTQUFTRSxhQUFhSCxNQUFNQyxTQUFVLEdBQUc7SUFFekNDLFNBQVNFLGVBQWVIO0lBRXhCQyxTQUFTRyxXQUFXSCxTQUFVLEdBQUc7SUFFakMsT0FBT0E7QUFDVDtBQUVPLFNBQVNILGNBQWNPLEtBQUssRUFBRUwsTUFBTTtJQUN6QyxJQUFNQyxTQUFTSSxNQUFNQyxNQUFNLENBQUMsU0FBQ0wsUUFBUUY7UUFDbkMsSUFBTVEsYUFBYVYsYUFBYUUsTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBVyxPQUNuQk0sYUFDQSxBQUFDLEdBQWFBLE9BQVhOLFFBQU8sTUFBZSxPQUFYTTtRQUVoQixPQUFPTjtJQUNULEdBQUc7SUFFSCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiSixjQUFBQTtJQUNBQyxlQUFBQTtBQUNGO0FBRUEsU0FBU00sV0FBV0gsTUFBTTtJQUN4QkEsU0FBU0EsT0FBT08sT0FBTyxDQUFDLFFBQVFDLHVCQUFZLEdBQUksR0FBRztJQUVuRCxPQUFPUjtBQUNUO0FBRUEsU0FBU0UsZUFBZUgsTUFBTTtJQUM1QixJQUFNQyxTQUFTRCxPQUFPTSxNQUFNLENBQUMsU0FBQ0wsUUFBUVM7UUFDcEMsSUFBTUMsVUFBVUQsTUFBTUUsVUFBVTtRQUVoQ1gsU0FBUyxBQUFDLEdBQVdVLE9BQVRWLFFBQWlCLE9BQVJVO1FBRXJCLE9BQU9WO0lBQ1QsR0FBR1EsdUJBQVk7SUFFZixPQUFPUjtBQUNUO0FBRUEsU0FBU0MsYUFBYUgsSUFBSSxFQUFFQyxNQUFNO0lBQ2hDLElBQU1hLG1CQUFtQmQsS0FBS2UsY0FBYztJQUU1QyxJQUFJRCxrQkFBa0I7UUFDcEIsSUFBTUUsZUFBZWhCLE1BQU8sR0FBRztRQUUvQkMsU0FBU2dCLHFCQUFxQkQsY0FBY2Y7SUFDOUMsT0FBTztRQUNMLElBQU1pQixrQkFBa0JsQixNQUFNLEdBQUc7UUFFakNDLFNBQVNrQix3QkFBd0JELGlCQUFpQmpCO0lBQ3BEO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNnQixxQkFBcUJELFlBQVksRUFBRWYsTUFBTTtJQUNoRCxJQUFNbUIsbUJBQW1CSixhQUFhSyxtQkFBbUIsSUFDbkRWLFFBQVFTLGtCQUFrQixHQUFHO0lBRW5DbkIsU0FBUztRQUNQVTtLQUNEO0lBRUQsT0FBT1Y7QUFDVDtBQUVBLFNBQVNrQix3QkFBd0JELGVBQWUsRUFBRWpCLE1BQU07SUFDdEQsSUFBTXFCLDRCQUE0QkosZ0JBQWdCSyw0QkFBNEIsQ0FBQ3RCLFNBQ3pFdUIsNkJBQTZCTixnQkFBZ0JPLDZCQUE2QixDQUFDeEIsU0FDM0V5QixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDckIsU0FBU0EsT0FBTzJCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU8xQjtBQUNUIn0=