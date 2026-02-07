"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "lineIndexFromNodeAndTokens", {
    enumerable: true,
    get: function() {
        return lineIndexFromNodeAndTokens;
    }
});
function lineIndexFromNodeAndTokens(node, tokens) {
    var lineIndex = 0;
    var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
    tokens.some(function(token, tokenIndex) {
        var tokenEndOfLineToken = token.isEndOfLineToken();
        if (tokenEndOfLineToken) {
            lineIndex += 1;
        }
        if (tokenIndex === firstSignificantTokenIndex) {
            return true;
        }
    });
    return lineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGluZUluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBsaW5lSW5kZXggPSAwO1xuXG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4ge1xuICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuSW5kZXggPT09IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsaW5lSW5kZXg7XG59XG4iXSwibmFtZXMiOlsibGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibGluZUluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInNvbWUiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSwyQkFBMkJDLElBQUksRUFBRUMsTUFBTTtJQUNyRCxJQUFJQyxZQUFZO0lBRWhCLElBQU1DLDZCQUE2QkgsS0FBS0ksNkJBQTZCLENBQUNIO0lBRXRFQSxPQUFPSSxJQUFJLENBQUMsU0FBQ0MsT0FBT0M7UUFDbEIsSUFBTUMsc0JBQXNCRixNQUFNRyxnQkFBZ0I7UUFFbEQsSUFBSUQscUJBQXFCO1lBQ3ZCTixhQUFhO1FBQ2Y7UUFFQSxJQUFJSyxlQUFlSiw0QkFBNEI7WUFDN0MsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPRDtBQUNUIn0=