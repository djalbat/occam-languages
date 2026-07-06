"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
const _breakPoint = /*#__PURE__*/ _interop_require_default(require("../breakPoint"));
const _node = require("../utilities/node");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FileContext extends _context.default {
    constructor(context, fileContent, filePath, tokens, node, json){
        super(context);
        this.fileContent = fileContent;
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
        this.json = json;
    }
    getFileContent() {
        return this.fileContent;
    }
    getFilePath() {
        return this.filePath;
    }
    getTokens() {
        return this.tokens;
    }
    getNode() {
        return this.node;
    }
    getJSON() {
        return this.json;
    }
    getLexer() {
        const lexer = null;
        return lexer;
    }
    getParser() {
        const parser = null;
        return parser;
    }
    getTypePrefix() {
        const context = this.getContext(), typePrefix = context.getTypePrefix();
        return typePrefix;
    }
    matchFilePath(filePath) {
        const filePathMatches = this.filePath === filePath;
        return filePathMatches;
    }
    nodeAsString(node) {
        const string = (0, _node.nodeAsString)(node, this.tokens);
        return string;
    }
    nodesAsString(nodes) {
        const string = (0, _node.nodesAsString)(nodes, this.tokens);
        return string;
    }
    break(node, breakPoint, resume) {
        const filePath = this.filePath, releaseContext = this.getReleaseContext();
        if (breakPoint === null) {
            breakPoint = _breakPoint.default.fromFilePathNodeAndTokens(filePath, node, this.tokens);
        }
        releaseContext.break(breakPoint, resume);
        return breakPoint;
    }
    verify(continuation) {
        let verifies = false;
        if (this.node === null) {
            this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
            continuation(verifies);
            return;
        }
        this.debug(`Verifying the '${this.filePath}' file...`);
        this.verifyFile((fileVerifies)=>{
            if (fileVerifies) {
                verifies = true;
            }
            verifies ? this.complete() : this.clear();
            if (verifies) {
                this.info(`...verified the '${this.filePath}' file.`);
            }
            continuation(verifies);
        });
    }
    initialise() {
        const lexer = this.getLexer(), parser = this.getParser(), content = this.fileContent; ///
        this.tokens = lexer.tokenise(content);
        this.node = parser.parse(this.tokens);
    }
    static fromFile(Class, file, ...remainingArguments) {
        const fileContent = file.getContent(), filePath = file.getPath(), tokens = null, node = null, json = null, context = remainingArguments.pop(), fileContext = new Class(context, fileContent, filePath, tokens, node, json, ...remainingArguments);
        return fileContext;
    }
    static fromJSON(Class, json, ...remainingArguments) {
        const { fileContent, filePath } = json, tokens = null, node = null, context = remainingArguments.pop(), fileContext = new Class(context, fileContent, filePath, tokens, node, json, ...remainingArguments);
        return fileContext;
    }
    static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
        const fileContent = null, filePath = null, json = null, context = remainingArguments.pop(), fileContext = new Class(context, fileContent, filePath, tokens, node, json, ...remainingArguments);
        return fileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IEJyZWFrUG9pbnQgZnJvbSBcIi4uL2JyZWFrUG9pbnRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZW50ID0gZmlsZUNvbnRlbnQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBicmVhayhub2RlLCBicmVha1BvaW50LCByZXN1bWUpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBpZiAoYnJlYWtQb2ludCA9PT0gbnVsbCkge1xuICAgICAgYnJlYWtQb2ludCA9IEJyZWFrUG9pbnQuZnJvbUZpbGVQYXRoTm9kZUFuZFRva2VucyhmaWxlUGF0aCwgbm9kZSwgdGhpcy50b2tlbnMpO1xuICAgIH1cblxuICAgIHJlbGVhc2VDb250ZXh0LmJyZWFrKGJyZWFrUG9pbnQsIHJlc3VtZSk7XG5cbiAgICByZXR1cm4gYnJlYWtQb2ludDtcbiAgfVxuXG4gIHZlcmlmeShjb250aW51YXRpb24pIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuXG4gICAgICBjb250aW51YXRpb24odmVyaWZpZXMpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgdGhpcy52ZXJpZnlGaWxlKChmaWxlVmVyaWZpZXMpID0+IHtcbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVhdGlvbih2ZXJpZmllcyk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZmlsZUNvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGZpbGVDb250ZW50LCBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gbnVsbCxcbiAgICAgICAgICBmaWxlUGF0aCA9IG51bGwsXG4gICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwiZmlsZUNvbnRlbnQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJqc29uIiwiZ2V0RmlsZUNvbnRlbnQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRKU09OIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldFR5cGVQcmVmaXgiLCJnZXRDb250ZXh0IiwidHlwZVByZWZpeCIsIm1hdGNoRmlsZVBhdGgiLCJmaWxlUGF0aE1hdGNoZXMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXMiLCJicmVhayIsImJyZWFrUG9pbnQiLCJyZXN1bWUiLCJyZWxlYXNlQ29udGV4dCIsImdldFJlbGVhc2VDb250ZXh0IiwiQnJlYWtQb2ludCIsImZyb21GaWxlUGF0aE5vZGVBbmRUb2tlbnMiLCJ2ZXJpZnkiLCJjb250aW51YXRpb24iLCJ2ZXJpZmllcyIsIndhcm5pbmciLCJkZWJ1ZyIsInZlcmlmeUZpbGUiLCJmaWxlVmVyaWZpZXMiLCJjb21wbGV0ZSIsImNsZWFyIiwiaW5mbyIsImluaXRpYWxpc2UiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlIiwiQ2xhc3MiLCJmaWxlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0Q29udGVudCIsImdldFBhdGgiLCJwb3AiLCJmaWxlQ29udGV4dCIsImZyb21KU09OIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7bUVBQ0c7c0JBRXFCOzs7Ozs7QUFFN0IsTUFBTUEsb0JBQW9C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