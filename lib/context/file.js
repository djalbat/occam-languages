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
    async break(node, lineIndex = null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24pIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5maWxlUGF0aCA9PT0gZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoTWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBpZiAobGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG4gICAgfVxuXG4gICAgYXdhaXQgcmVsZWFzZUNvbnRleHQuYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCk7XG5cbiAgICByZXR1cm4gbGluZUluZGV4O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlGaWxlKCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmZpbGVDb250ZW50OyAvLy9cblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKENsYXNzLCBmaWxlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBmaWxlQ29udGVudCwgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJnZXRGaWxlQ29udGVudCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldEpTT04iLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0VHlwZVByZWZpeCIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4IiwibWF0Y2hGaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsImJyZWFrIiwibGluZUluZGV4IiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJmaWxlVmVyaWZpZXMiLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJjbGVhciIsImluZm8iLCJpbml0aWFsaXNlIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJmcm9tRmlsZSIsIkNsYXNzIiwiZmlsZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldENvbnRlbnQiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnRUFMRDsyQkFFdUI7c0JBQ0M7Ozs7OztBQUU3QixNQUFNQSxvQkFBb0JDLGdCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDOUQsS0FBSyxDQUFDTDtRQUVOLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNMLFdBQVc7SUFDekI7SUFFQU0sY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDTCxRQUFRO0lBQ3RCO0lBRUFNLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0wsTUFBTTtJQUNwQjtJQUVBTSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNMLElBQUk7SUFDbEI7SUFFQU0sVUFBVTtRQUNSLE9BQU8s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