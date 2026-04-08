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
    setContext(context) {
        this.context = context;
    }
    setFileContent(fileContent) {
        this.fileContent = fileContent;
    }
    setFilePath(filePath) {
        this.filePath = filePath;
    }
    setTokens(tokens) {
        this.tokens = tokens;
    }
    setNode(node) {
        this.node = node;
    }
    setJSON(json) {
        this.json = json;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24pIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIHNldENvbnRleHQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBzZXRGaWxlQ29udGVudChmaWxlQ29udGVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgfVxuXG4gIHNldEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIHNldEpTT04oanNvbikge1xuICAgIHRoaXMuanNvbiA9IGpzb247XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlLCBsaW5lSW5kZXgpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBpZiAobGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG4gICAgfVxuXG4gICAgYXdhaXQgcmVsZWFzZUNvbnRleHQuYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCk7XG5cbiAgICByZXR1cm4gbGluZUluZGV4O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlGaWxlKCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmZpbGVDb250ZW50OyAvLy9cblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKENsYXNzLCBmaWxlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBmaWxlQ29udGVudCwgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJnZXRGaWxlQ29udGVudCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldEpTT04iLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0VHlwZVByZWZpeCIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4Iiwic2V0Q29udGV4dCIsInNldEZpbGVDb250ZW50Iiwic2V0RmlsZVBhdGgiLCJzZXRUb2tlbnMiLCJzZXROb2RlIiwic2V0SlNPTiIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsImJyZWFrIiwibGluZUluZGV4IiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJmaWxlVmVyaWZpZXMiLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJjbGVhciIsImluZm8iLCJpbml0aWFsaXNlIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJmcm9tRmlsZSIsIkNsYXNzIiwiZmlsZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldENvbnRlbnQiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnRUFMRDsyQkFFdUI7c0JBQ0M7Ozs7OztBQUU3QixNQUFNQSxvQkFBb0JDLGdCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDOUQsS0FBSyxDQUFDTDtRQUVOLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFD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