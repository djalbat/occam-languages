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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZmlsZUNvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIGF3YWl0IHJlbGVhc2VDb250ZXh0LmJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGZpbGVDb250ZW50LCBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwiZ2V0RmlsZUNvbnRlbnQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0VHlwZVByZWZpeCIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4IiwibWF0Y2hGaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsInByZXBhcmUiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImJyZWFrIiwibGluZUluZGV4IiwibGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJyZWxlYXNlQ29udGV4dCIsImdldFJlbGVhc2VDb250ZXh0IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJmaWxlVmVyaWZpZXMiLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJjbGVhciIsImluZm8iLCJmcm9tRmlsZSIsIkNsYXNzIiwiZmlsZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldENvbnRlbnQiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7MkJBRXVCO3NCQUNDOzs7Ozs7QUFFN0IsTUFBTUEsb0JBQW9CQyxnQkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksQ0FBRTtRQUN4RCxLQUFLLENBQUNKO1FBRU4sSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0osV0FBVztJQUN6QjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsTUFBTUMsUUFBUTtRQUVkLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLFNBQVM7UUFFZixPQUFPQTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1iLFVBQVUsSUFBSSxDQUFDYyxVQUFVLElBQ3pCQyxhQUFhZixRQUFRYSxhQUFhO1FBRXhDLE9BQU9FO0lBQ1Q7SUFFQUMsY0FBY2Qs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