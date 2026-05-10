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
const _constants = require("../constants");
function nodeAsString(node, tokens) {
    let string;
    tokens = nodeAsTokens(node, tokens); ///
    string = tokensAsString(tokens);
    string = trimString(string); ///
    return string;
}
function nodesAsString(nodes, tokens) {
    const string = nodes.reduce((string, node)=>{
        const nodeString = nodeAsString(node, tokens);
        string = string === null ? nodeString : `${string}, ${nodeString}`;
        return string;
    }, null);
    return string;
}
const _default = {
    nodeAsString,
    nodesAsString
};
function trimString(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
    return string;
}
function tokensAsString(tokens) {
    const string = tokens.reduce((string, token)=>{
        const content = token.getContent();
        string = `${string}${content}`;
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
function nodeAsTokens(node, tokens) {
    const nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        const terminalNode = node; ///
        tokens = terminalNodeAsTokens(terminalNode, tokens);
    } else {
        const nonTerminalNode = node; ///
        tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
    }
    return tokens;
}
function terminalNodeAsTokens(terminalNode, tokens) {
    const significantToken = terminalNode.getSignificantToken();
    tokens = []; ///
    if (significantToken !== null) {
        const token = significantToken; ///
        tokens.push(token);
    }
    return tokens;
}
function nonTerminalNodeAsTokens(nonTerminalNode, tokens) {
    const lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucykge1xuICBsZXQgc3RyaW5nO1xuXG4gIHRva2VucyA9IG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgc3RyaW5nID0gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICBzdHJpbmcgPSB0cmltU3RyaW5nKHN0cmluZyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgdG9rZW5zKSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzLnJlZHVjZSgoc3RyaW5nLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgbm9kZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgYCR7c3RyaW5nfSwgJHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5vZGVBc1N0cmluZyxcbiAgbm9kZXNBc1N0cmluZyxcbn07XG5cbmZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMrJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIHRva2VucyA9IFtdOyAgLy8vXG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICBjb25zdCB0b2tlbiA9IHNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gbm9uVGVybWluYWxOb2RlQXNUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2VucyksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICByZXR1cm4gdG9rZW5zO1xufVxuIl0sIm5hbWVzIjpbIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmltU3RyaW5nIiwibm9kZXMiLCJyZWR1Y2UiLCJub2RlU3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsInRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBOEJBO2VBQUE7O1FBMUJnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOzs7MkJBZGE7QUFFdEIsU0FBU0QsYUFBYUUsSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlDO0lBRUpELFNBQVNFLGFBQWFILE1BQU1DLFNBQVUsR0FBRztJQUV6Q0MsU0FBU0UsZUFBZUg7SUFFeEJDLFNBQVNHLFdBQVdILFNBQVUsR0FBRztJQUVqQyxPQUFPQTtBQUNUO0FBRU8sU0FBU0gsY0FBY08sS0FBSyxFQUFFTCxNQUFNO0lBQ3pDLE1BQU1DLFNBQVNJLE1BQU1DLE1BQU0sQ0FBQyxDQUFDTCxRQUFRRjtRQUNuQyxNQUFNUSxhQUFhVixhQUFhRSxNQUFNQztRQUV0Q0MsU0FBUyxBQUFDQSxXQUFXLE9BQ1ZNLGFBQ0MsR0FBR04sT0FBTyxFQUFFLEVBQUVNLFlBQVk7UUFFdEMsT0FBT047SUFDVCxHQUFHO0lBRUgsT0FBT0E7QUFDVDtNQUVBLFdBQWU7SUFDYko7SUFDQUM7QUFDRjtBQUVBLFNBQVNNLFdBQVdILE1BQU07SUFDeEJBLFNBQVNBLE9BQU9PLE9BQU8sQ0FBQyxRQUFRQyx1QkFBWSxHQUFJLEdBQUc7SUFFbkQsT0FBT1I7QUFDVDtBQUVBLFNBQVNFLGVBQWVILE1BQU07SUFDNUIsTUFBTUMsU0FBU0QsT0FBT00sTUFBTSxDQUFDLENBQUNMLFFBQVFTO1FBQ3BDLE1BQU1DLFVBQVVELE1BQU1FLFVBQVU7UUFFaENYLFNBQVMsR0FBR0EsU0FBU1UsU0FBUztRQUU5QixPQUFPVjtJQUNULEdBQUdRLHVCQUFZO0lBRWYsT0FBT1I7QUFDVDtBQUVBLFNBQVNDLGFBQWFILElBQUksRUFBRUMsTUFBTTtJQUNoQyxNQUFNYSxtQkFBbUJkLEtBQUtlLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLE1BQU1FLGVBQWVoQixNQUFPLEdBQUc7UUFFL0JDLFNBQVNnQixxQkFBcUJELGNBQWNmO0lBQzlDLE9BQU87UUFDTCxNQUFNaUIsa0JBQWtCbEIsTUFBTSxHQUFHO1FBRWpDQyxTQUFTa0Isd0JBQXdCRCxpQkFBaUJqQjtJQUNwRDtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTZ0IscUJBQXFCRCxZQUFZLEVBQUVmLE1BQU07SUFDaEQsTUFBTW1CLG1CQUFtQkosYUFBYUssbUJBQW1CO0lBRXpEcEIsU0FBUyxFQUFFLEVBQUcsR0FBRztJQUVqQixJQUFJbUIscUJBQXFCLE1BQU07UUFDN0IsTUFBTVQsUUFBUVMsa0JBQWtCLEdBQUc7UUFFbkNuQixPQUFPcUIsSUFBSSxDQUFDWDtJQUNkO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLFNBQVNrQix3QkFBd0JELGVBQWUsRUFBRWpCLE1BQU07SUFDdEQsTUFBTXNCLDRCQUE0QkwsZ0JBQWdCTSw0QkFBNEIsQ0FBQ3ZCLFNBQ3pFd0IsNkJBQTZCUCxnQkFBZ0JRLDZCQUE2QixDQUFDekIsU0FDM0UwQixRQUFRRiw0QkFDUkcsTUFBTUwsNEJBQTRCO0lBRXhDdEIsU0FBU0EsT0FBTzRCLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO0lBRXZDLE9BQU8zQjtBQUNUIn0=