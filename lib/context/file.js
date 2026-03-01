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
    findFile() {
        const releaseContext = this.getReleaseContext(), file = releaseContext.findFile(this.filePath);
        return file;
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
        const file = this.findFile(), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBmaW5kRmlsZSgpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKSxcbiAgICAgICAgICBmaWxlID0gcmVsZWFzZUNvbnRleHQuZmluZEZpbGUodGhpcy5maWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuYWRkUHJvY2VkdXJlcygpO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsobm9kZSkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBhd2FpdCByZWxlYXNlQ29udGV4dC5icmVhayhmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlGaWxlKCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKENsYXNzLCBmaWxlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBmaWxlQ29udGVudCwgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImdldEZpbGVDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldFR5cGVQcmVmaXgiLCJnZXRDb250ZXh0IiwidHlwZVByZWZpeCIsIm1hdGNoRmlsZVBhdGgiLCJmaWxlUGF0aE1hdGNoZXMiLCJmaW5kRmlsZSIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJmaWxlIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwicHJlcGFyZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwiY2xlYXIiLCJhZGRQcm9jZWR1cmVzIiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInZlcmlmeSIsInZlcmlmaWVzIiwid2FybmluZyIsImRlYnVnIiwiZmlsZVZlcmlmaWVzIiwidmVyaWZ5RmlsZSIsImNvbXBsZXRlIiwiaW5mbyIsImZyb21GaWxlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnRUFMRDsyQkFFdUI7c0JBQ0M7Ozs7OztBQUU3QixNQUFNQSxvQkFBb0JDLGdCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFB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