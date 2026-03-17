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
    isFileContext() {
        const fileContext = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBpc0ZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5maWxlUGF0aCA9PT0gZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoTWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5maWxlQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgbGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpO1xuXG4gICAgYXdhaXQgcmVsZWFzZUNvbnRleHQuYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZpbGVWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RmlsZSgpO1xuXG4gICAgICBpZiAoZmlsZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmVyaWZpZXMgP1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCkgOlxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShDbGFzcywgZmlsZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgZmlsZUNvbnRlbnQsIGZpbGVQYXRoIH0gPSBqc29uLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwiZmlsZUNvbnRlbnQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJnZXRGaWxlQ29udGVudCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRUeXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsInR5cGVQcmVmaXgiLCJpc0ZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGhNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwicHJlcGFyZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIndhcm5pbmciLCJkZWJ1ZyIsImZpbGVWZXJpZmllcyIsInZlcmlmeUZpbGUiLCJjb21wbGV0ZSIsImNsZWFyIiwiaW5mbyIsImZyb21GaWxlIiwiQ2xhc3MiLCJmaWxlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0Q29udGVudCIsImdldFBhdGgiLCJwb3AiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7MkJBRXVCO3NCQUNDOzs7Ozs7QUFFN0IsTUFBTUEsb0JBQW9CQyxnQkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksQ0FBRTtRQUN4RCxLQUFLLENBQUNKO1FBRU4sSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0osV0FBVztJQUN6QjtJQUVBSyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsTUFBTUMsUUFBUTtRQUVkLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLFNBQVM7UUFFZixPQUFPQTtJ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