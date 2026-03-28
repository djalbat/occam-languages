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
    async break(node) {
        const filePath = this.filePath, lineIndex = (0, _lineIndex.lineIndexFromNodeAndTokens)(node, this.tokens), releaseContext = this.getReleaseContext();
        await releaseContext.break(filePath, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24pIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5maWxlUGF0aCA9PT0gZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoTWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgbGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpO1xuXG4gICAgYXdhaXQgcmVsZWFzZUNvbnRleHQuYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZmlsZUNvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGZpbGVDb250ZW50LCBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwianNvbiIsImdldEZpbGVDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0SlNPTiIsImdldExleGVyIiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRUeXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsInR5cGVQcmVmaXgiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGhNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIndhcm5pbmciLCJkZWJ1ZyIsImZpbGVWZXJpZmllcyIsInZlcmlmeUZpbGUiLCJjb21wbGV0ZSIsImNsZWFyIiwiaW5mbyIsImluaXRpYWxpc2UiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlIiwiQ2xhc3MiLCJmaWxlIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0Q29udGVudCIsImdldFBhdGgiLCJwb3AiLCJmaWxlQ29udGV4dCIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dFQUxEOzJCQUV1QjtzQkFDQzs7Ozs7O0FBRTdCLE1BQU1BLG9CQUFvQkMsZ0JBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUM5RCxLQUFLLENBQUNMO1FBRU4sSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0wsV0FBVztJQUN6QjtJQUVBTSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNMLFFBQVE7SUFDdEI7SUFFQU0sWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDTCxNQUFNO0lBQ3BCO0lBRUFNLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0wsSUFBSTtJQUNsQjtJQUVBTSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNMLElBQUk7SUFDbEI7SUFFQU0sV0FBVztRQUNULE1BQU1DLFFBQVE7UUFFZCxPQUFPQTtJQUNUO0lBRUFDLFlBQVk7UUFD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