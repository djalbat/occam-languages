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
    constructor(context, fileContent, filePath, tokens, node){
        super(context);
        this.fileContent = fileContent;
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
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
    getFileContext() {
        const fileContext = this; ///
        return fileContext;
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
    prepare() {
        if (this.tokens !== null) {
            return;
        }
        const lexer = this.getLexer(), parser = this.getParser(), content = this.fileContent; ///
        this.tokens = lexer.tokenise(content);
        this.node = parser.parse(this.tokens);
    }
    async break(node) {
        const filePath = this.filePath, lineIndex = (0, _lineIndex.lineIndexFromNodeAndTokens)(node, this.tokens), releaseContext = this.getReleaseContext();
        await releaseContext.break(filePath, lineIndex);
    }
    async verify() {
        let verifies = false;
        this.prepare();
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
    static fromFile(Class, file, ...remainingArguments) {
        const fileContent = file.getContent(), filePath = file.getPath(), tokens = null, node = null, context = remainingArguments.pop(), fileContext = new Class(context, fileContent, filePath, tokens, node, ...remainingArguments);
        return fileContext;
    }
    static fromJSON(Class, json, ...remainingArguments) {
        const { fileContent, filePath } = json, tokens = null, node = null, context = remainingArguments.pop(), fileContext = new Class(context, fileContent, filePath, tokens, node, ...remainingArguments);
        return fileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVQYXRoTWF0Y2hlcyA9ICh0aGlzLmZpbGVQYXRoID09PSBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhNYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmZpbGVDb250ZW50OyAvLy9cblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsobm9kZSkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBhd2FpdCByZWxlYXNlQ29udGV4dC5icmVhayhmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlGaWxlKCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKENsYXNzLCBmaWxlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBmaWxlQ29udGVudCwgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImdldEZpbGVDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldFR5cGVQcmVmaXgiLCJnZXRDb250ZXh0IiwidHlwZVByZWZpeCIsImdldEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGhNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwicHJlcGFyZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIndhcm5pbmciLCJkZWJ1ZyIsImZpbGVWZXJpZmllcyIsInZlcmlmeUZpbGUiLCJjb21wbGV0ZSIsImNsZWFyIiwiaW5mbyIsImZyb21GaWxlIiwiQ2xhc3MiLCJmaWxlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0Q29udGVudCIsImdldFBhdGgiLCJwb3AiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7MkJBRXVCO3NCQUNDOzs7Ozs7QUFFN0IsTUFBTUEsb0JBQW9CQyxnQkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksQ0FBRTtRQUN4RCxLQUFLLENBQUNKO1FBRU4sSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0osV0FBVztJQUN6QjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsTUFBTUMsUUFBUTtRQUVkLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLFNBQVM7UUFFZixP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