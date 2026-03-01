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
    initialise(json) {
        const { content } = json, lexer = this.getLexer(), parser = this.getParser();
        this.tokens = lexer.tokenise(content);
        this.node = parser.parse(this.tokens);
        this.clear();
        this.addProcedures();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZmlsZUNvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIGF3YWl0IHJlbGVhc2VDb250ZXh0LmJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGZpbGVDb250ZW50LCBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwiZ2V0RmlsZUNvbnRlbnQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0VHlwZVByZWZpeCIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4IiwibWF0Y2hGaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsInByZXBhcmUiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwiY2xlYXIiLCJhZGRQcm9jZWR1cmVzIiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIndhcm5pbmciLCJkZWJ1ZyIsImZpbGVWZXJpZmllcyIsInZlcmlmeUZpbGUiLCJjb21wbGV0ZSIsImluZm8iLCJmcm9tRmlsZSIsIkNsYXNzIiwiZmlsZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldENvbnRlbnQiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnRUFMRDsyQkFFdUI7c0JBQ0M7Ozs7OztBQUU3QixNQUFNQSxvQkFBb0JDLGdCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0o7UUFFTixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDSixXQUFXO0lBQ3pCO0lBRUFLLGNB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