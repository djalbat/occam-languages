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
    break(node, breakPoint, resume) {
        const filePath = this.filePath, releaseContext = this.getReleaseContext();
        if (breakPoint === null) {
            breakPoint = _breakPoint.default.fromFilePathNodeAndTokens(filePath, node, this.tokens);
        }
        releaseContext.break(breakPoint, resume);
        return breakPoint;
    }
    verify() {
        let verifies = false;
        if (this.node === null) {
            this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
        } else {
            this.debug(`Verifying the '${this.filePath}' file...`);
            const fileVerifies = this.verifyFile();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IEJyZWFrUG9pbnQgZnJvbSBcIi4uL2JyZWFrUG9pbnRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZW50ID0gZmlsZUNvbnRlbnQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZW50O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG51bGw7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBicmVhayhub2RlLCBicmVha1BvaW50LCByZXN1bWUpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBpZiAoYnJlYWtQb2ludCA9PT0gbnVsbCkge1xuICAgICAgYnJlYWtQb2ludCA9IEJyZWFrUG9pbnQuZnJvbUZpbGVQYXRoTm9kZUFuZFRva2VucyhmaWxlUGF0aCwgbm9kZSwgdGhpcy50b2tlbnMpO1xuICAgIH1cblxuICAgIHJlbGVhc2VDb250ZXh0LmJyZWFrKGJyZWFrUG9pbnQsIHJlc3VtZSk7XG5cbiAgICByZXR1cm4gYnJlYWtQb2ludDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZpbGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RmlsZSgpO1xuXG4gICAgICBpZiAoZmlsZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmVyaWZpZXMgP1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCkgOlxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5maWxlQ29udGVudDsgLy8vXG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShDbGFzcywgZmlsZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgZmlsZUNvbnRlbnQsIGZpbGVQYXRoIH0gPSBqc29uLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMoQ2xhc3MsIG5vZGUsIHRva2VucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBudWxsLFxuICAgICAgICAgIGZpbGVQYXRoID0gbnVsbCxcbiAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJnZXRGaWxlQ29udGVudCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldEpTT04iLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0VHlwZVByZWZpeCIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4IiwibWF0Y2hGaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsImJyZWFrIiwiYnJlYWtQb2ludCIsInJlc3VtZSIsInJlbGVhc2VDb250ZXh0IiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJCcmVha1BvaW50IiwiZnJvbUZpbGVQYXRoTm9kZUFuZFRva2VucyIsInZlcmlmeSIsInZlcmlmaWVzIiwid2FybmluZyIsImRlYnVnIiwiZmlsZVZlcmlmaWVzIiwidmVyaWZ5RmlsZSIsImNvbXBsZXRlIiwiY2xlYXIiLCJpbmZvIiwiaW5pdGlhbGlzZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiZnJvbUZpbGUiLCJDbGFzcyIsImZpbGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRDb250ZW50IiwiZ2V0UGF0aCIsInBvcCIsImZpbGVDb250ZXh0IiwiZnJvbUpTT04iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnRUFMRDttRUFDRztzQkFFcUI7Ozs7OztBQUU3QixNQUFNQSxvQkFBb0JDLGdCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFF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