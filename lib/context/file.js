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
const _lineIndex = require("../utilities/lineIndex");
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
    nodeAsString(node) {
        const string = (0, _node.nodeAsString)(node, this.tokens);
        return string;
    }
    nodesAsString(nodes) {
        const string = (0, _node.nodesAsString)(nodes, this.tokens);
        return string;
    }
    async break(node, lineIndex) {
        const filePath = this.filePath, releaseContext = this.getReleaseContext();
        if (lineIndex === null) {
            lineIndex = (0, _lineIndex.lineIndexFromNodeAndTokens)(node, this.tokens);
        }
        await releaseContext.break(filePath, lineIndex);
        return lineIndex;
    }
    async verify() {
        let verifies = false;
        if (this.node === null) {
            this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
        } else {
            this.debug(`Verifying the '${this.filePath}' file...`);
            const fileVerifies = await this.verifyFile();
            if (fileVerifies) {
                verifies = true;
            }
            verifies ? this.complete() : this.clear();
            if (verifies) {
                this.info(`...verified the '${this.filePath}' file.`);
            }
        }
        return verifies;
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24pIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUsIGxpbmVJbmRleCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIGlmIChsaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcbiAgICB9XG5cbiAgICBhd2FpdCByZWxlYXNlQ29udGV4dC5icmVhayhmaWxlUGF0aCwgbGluZUluZGV4KTtcblxuICAgIHJldHVybiBsaW5lSW5kZXg7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZmlsZUNvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGZpbGVDb250ZW50LCBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwianNvbiIsImdldEZpbGVDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0SlNPTiIsImdldExleGVyIiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRUeXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsInR5cGVQcmVmaXgiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXMiLCJicmVhayIsImxpbmVJbmRleCIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInZlcmlmeSIsInZlcmlmaWVzIiwid2FybmluZyIsImRlYnVnIiwiZmlsZVZlcmlmaWVzIiwidmVyaWZ5RmlsZSIsImNvbXBsZXRlIiwiY2xlYXIiLCJpbmZvIiwiaW5pdGlhbGlzZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiZnJvbUZpbGUiLCJDbGFzcyIsImZpbGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRDb250ZW50IiwiZ2V0UGF0aCIsInBvcCIsImZpbGVDb250ZXh0IiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7MkJBRXVCO3NCQUNDOzs7Ozs7QUFFN0IsTUFBTUEsb0JBQW9CQyxnQkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQzlELEtBQUssQ0FBQ0w7UUFFTixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDTCxXQUFXO0lBQ3pCO0lBRUFNLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0wsUUFBUTtJQUN0QjtJQUVBTSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNMLE1BQU07SUFDcEI7SUFFQU0sVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDTCxJQUFJO0lBQ2xCO0lBRUFNLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0wsSUFBSTtJQUNsQjtJQUVBTSxXQUFXO1FBQ1QsTUFBTUMsUUFBUTtRQUVkLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLFNBQVM7UUFFZixPQUFPQTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1mLFVBQVUsSUFBSSxDQUFDZ0IsVUFBVSxJQUN6QkMsYUFBYWpC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