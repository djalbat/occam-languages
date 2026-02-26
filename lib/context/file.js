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
    constructor(context, filePath, tokens, node){
        super(context);
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
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
        const filePath = file.getPath(), tokens = null, node = null, context = remainingArguments.pop(), fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);
        return fileContext;
    }
    static fromJSON(Class, json, ...remainingArguments) {
        const { filePath } = json, tokens = null, node = null, context = remainingArguments.pop(), fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);
        return fileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5maWxlUGF0aCA9PT0gZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRGaWxlKCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpLFxuICAgICAgICAgIGZpbGUgPSByZWxlYXNlQ29udGV4dC5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIGF3YWl0IHJlbGVhc2VDb250ZXh0LmJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGZpbGVQYXRoIH0gPSBqc29uLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0VHlwZVByZWZpeCIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4IiwibWF0Y2hGaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsImZpbmRGaWxlIiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXMiLCJwcmVwYXJlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJjbGVhciIsImFkZFByb2NlZHVyZXMiLCJicmVhayIsImxpbmVJbmRleCIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJmaWxlVmVyaWZpZXMiLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJpbmZvIiwiZnJvbUZpbGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldFBhdGgiLCJwb3AiLCJmaWxlQ29udGV4dCIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dFQUxEOzJCQUV1QjtzQkFDQzs7Ozs7O0FBRTdCLE1BQU1BLG9CQUFvQkMsZ0JBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxDQUFFO1FBQzNDLEtBQUssQ0FBQ0g7UUFFTixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNI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