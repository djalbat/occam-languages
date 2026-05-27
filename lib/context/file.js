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
    async break(node, breakPoint) {
        const filePath = this.filePath, releaseContext = this.getReleaseContext();
        if (breakPoint === null) {
            breakPoint = _breakPoint.default.fromFilePathNodeAndTokens(filePath, node, this.tokens);
        }
        await releaseContext.break(breakPoint);
        return breakPoint;
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
    static fromNodeAndTokens(Class, node, tokens, ...remainingArguments) {
        const fileContent = null, filePath = null, json = null, context = remainingArguments.pop(), fileContext = new Class(context, fileContent, filePath, tokens, node, json, ...remainingArguments);
        return fileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IEJyZWFrUG9pbnQgZnJvbSBcIi4uL2JyZWFrUG9pbnRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZW50ID0gZmlsZUNvbnRlbnQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlLCBicmVha1BvaW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpO1xuXG4gICAgaWYgKGJyZWFrUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIGJyZWFrUG9pbnQgPSBCcmVha1BvaW50LmZyb21GaWxlUGF0aE5vZGVBbmRUb2tlbnMoZmlsZVBhdGgsIG5vZGUsIHRoaXMudG9rZW5zKTtcbiAgICB9XG5cbiAgICBhd2FpdCByZWxlYXNlQ29udGV4dC5icmVhayhicmVha1BvaW50KTtcblxuICAgIHJldHVybiBicmVha1BvaW50O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlGaWxlKCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmZpbGVDb250ZW50OyAvLy9cblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKENsYXNzLCBmaWxlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBmaWxlQ29udGVudCwgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IG51bGwsXG4gICAgICAgICAgZmlsZVBhdGggPSBudWxsLFxuICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwianNvbiIsImdldEZpbGVDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0SlNPTiIsImdldExleGVyIiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRUeXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsInR5cGVQcmVmaXgiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGhNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwiYnJlYWsiLCJicmVha1BvaW50IiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsIkJyZWFrUG9pbnQiLCJmcm9tRmlsZVBhdGhOb2RlQW5kVG9rZW5zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJmaWxlVmVyaWZpZXMiLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJjbGVhciIsImluZm8iLCJpbml0aWFsaXNlIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJmcm9tRmlsZSIsIkNsYXNzIiwiZmlsZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldENvbnRlbnQiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tSlNPTiIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dFQUxEO21FQUNHO3NCQUVxQjs7Ozs7O0FBRTdCLE1BQU1BLG9CQUFvQkMsZ0JBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVD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