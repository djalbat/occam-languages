"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReleaseContext;
    }
});
const _necessary = require("necessary");
const _verify = require("../utilities/verify");
const _customGrammar = require("../utilities/customGrammar");
const _fileContext = require("../utilities/fileContext");
const _constants = require("../constants");
const { push, tail, first } = _necessary.arrayUtilities;
class ReleaseContext {
    constructor(log, name, json, entries, callback, customGrammar, verifies, initialised, fileContexts, combinedCustomGrammar, dependencyReleaseContexts){
        this.log = log;
        this.name = name;
        this.json = json;
        this.entries = entries;
        this.callback = callback;
        this.customGrammar = customGrammar;
        this.verifies = verifies;
        this.initialised = initialised;
        this.fileContexts = fileContexts;
        this.combinedCustomGrammar = combinedCustomGrammar;
        this.dependencyReleaseContexts = dependencyReleaseContexts;
    }
    getLog() {
        return this.log;
    }
    getName() {
        return this.name;
    }
    getJSON() {
        return this.json;
    }
    getEntries() {
        return this.entries;
    }
    getCallback() {
        return this.callback;
    }
    getCustomGrammar() {
        return this.customGrammar;
    }
    getVerifies() {
        return this.verifies;
    }
    isInitialised() {
        return this.initialised;
    }
    getFileContexts() {
        return this.fileContexts;
    }
    getCombinedCustomGrammar() {
        return this.combinedCustomGrammar;
    }
    getDependencyReleaseContexts() {
        return this.dependencyReleaseContexts;
    }
    getVersion() {
        return this.entries.getVersion();
    }
    matchDependencyName(dependencyName) {
        const dependencyNameMatches = this.name === dependencyName;
        return dependencyNameMatches;
    }
    getReleaseContext() {
        const releaseContext = this; ///
        return releaseContext;
    }
    getContext() {
        const context = null;
        return context;
    }
    getDepth() {
        const depth = 0;
        return depth;
    }
    hasVerified() {
        const verified = this.verifies; ///
        return verified;
    }
    isReleased() {
        const released = this.json !== null;
        return released;
    }
    isUnreleased() {
        const released = this.isReleased(), unreleased = !released;
        return unreleased;
    }
    getTypePrefix() {
        let typePrefix = null;
        const includeDependencies = false, typePrefixes = this.getTypePrefixes(includeDependencies), typePrefixesLength = typePrefixes.length;
        if (typePrefixesLength === 1) {
            const firstTypePrefix = first(typePrefixes);
            typePrefix = firstTypePrefix; ///
        }
        return typePrefix;
    }
    getLabels(includeDependencies = true) {
        const labels = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextLabels = fileContext.getLabels(includeRelease);
            push(labels, fileContextLabels);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextLabels = releaseContext.getLabels(includeDependencies);
                push(labels, releaseContextLabels);
            });
        }
        return labels;
    }
    getTypes(includeDependencies = true) {
        const types = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextTypes = fileContext.getTypes(includeRelease);
            push(types, fileContextTypes);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextTypes = releaseContext.getTypes(includeDependencies);
                push(types, releaseContextTypes);
            });
        }
        return types;
    }
    getRules(includeDependencies = true) {
        const rules = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextRules = fileContext.getRules(includeRelease);
            push(rules, fileContextRules);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextRules = releaseContext.getRules(includeDependencies);
                push(rules, releaseContextRules);
            });
        }
        return rules;
    }
    getAxioms(includeDependencies = true) {
        const axioms = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextAxioms = fileContext.getAxioms(includeRelease);
            push(axioms, fileContextAxioms);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencies);
                push(axioms, releaseContextAxioms);
            });
        }
        return axioms;
    }
    getLemmas(includeDependencies = true) {
        const lemmas = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextLemmas = fileContext.getLemmas(includeRelease);
            push(lemmas, fileContextLemmas);
        });
        return lemmas;
    }
    getSchemas(includeDependencies = true) {
        const schemas = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextSchemas = fileContext.getSchemas(includeRelease);
            push(schemas, fileContextSchemas);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextSchemas = releaseContext.getSchemas(includeDependencies);
                push(schemas, releaseContextSchemas);
            });
        }
        return schemas;
    }
    getTheorems(includeDependencies = true) {
        const theorems = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextTheorems = fileContext.getTheorems(includeRelease);
            push(theorems, fileContextTheorems);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextTheorems = releaseContext.getTheorems(includeDependencies);
                push(theorems, releaseContextTheorems);
            });
        }
        return theorems;
    }
    getProcedures(includeDependencies = true) {
        const procedures = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextProcedures = fileContext.getProcedures(includeRelease);
            push(procedures, fileContextProcedures);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextProcedures = releaseContext.getProcedures(includeDependencies);
                push(procedures, releaseContextProcedures);
            });
        }
        return procedures;
    }
    getGenerators(includeDependencies = true) {
        const generators = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextGenerators = fileContext.getGenerators(includeRelease);
            push(generators, fileContextGenerators);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextGenerators = releaseContext.getGenerators(includeDependencies);
                push(generators, releaseContextGenerators);
            });
        }
        return generators;
    }
    getConjectures(includeDependencies = true) {
        const conjectures = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextConjectures = fileContext.getConjectures(includeRelease);
            push(conjectures, fileContextConjectures);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextConjectures = releaseContext.getConjectures(includeDependencies);
                push(conjectures, releaseContextConjectures);
            });
        }
        return conjectures;
    }
    getCombinators(includeDependencies = true) {
        const combinators = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextCombinators = fileContext.getCombinators(includeRelease);
            push(combinators, fileContextCombinators);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextCombinators = releaseContext.getCombinators(includeDependencies);
                push(combinators, releaseContextCombinators);
            });
        }
        return combinators;
    }
    getTypePrefixes(includeDependencies = true) {
        const typePrefixes = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextTypePrefixes = fileContext.getTypePrefixes(includeRelease);
            push(typePrefixes, fileContextTypePrefixes);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextTypePrefixes = releaseContext.getTypePrefixes(includeDependencies);
                push(typePrefixes, releaseContextTypePrefixes);
            });
        }
        return typePrefixes;
    }
    getConstructors(includeDependencies = true) {
        const constructors = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextConstructors = fileContext.getConstructors(includeRelease);
            push(constructors, fileContextConstructors);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextConstructors = releaseContext.getConstructors(includeDependencies);
                push(constructors, releaseContextConstructors);
            });
        }
        return constructors;
    }
    getDependencies() {
        return this.entries.getDependencies();
    }
    matchShortenedVersion(shortenedVersion) {
        return this.entries.matchShortenedVersion(shortenedVersion);
    }
    trace(message) {
        const level = _constants.TRACE_LEVEL;
        this.writeToLog(level, message);
    }
    debug(message) {
        const level = _constants.DEBUG_LEVEL;
        this.writeToLog(level, message);
    }
    info(message) {
        const level = _constants.INFO_LEVEL;
        this.writeToLog(level, message);
    }
    warning(message) {
        const level = _constants.WARNING_LEVEL;
        this.writeToLog(level, message);
    }
    error(message) {
        const level = _constants.ERROR_LEVEL;
        this.writeToLog(level, message);
    }
    writeToLog(level, message, filePath = null, lineIndex = null) {
        this.log.write(level, message, filePath, lineIndex);
    }
    initialise(releaseContexts, FileContextFromFilePath) {
        const released = this.isReleased(), releaseContext = this, releaseContextsTail = tail(releaseContexts);
        this.dependencyReleaseContexts = releaseContextsTail; ///
        this.combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts);
        released ? (0, _fileContext.fileContextsFromJSON)(this.json, this.fileContexts, releaseContext, FileContextFromFilePath) : (0, _fileContext.fileContextsFromEntries)(this.entries, this.fileContexts, releaseContext, FileContextFromFilePath);
        this.fileContexts.forEach((fileContext)=>{
            fileContext.initialise();
        });
        this.initialised = true;
    }
    async break(breakPoint) {
        const level = _constants.TRACE_LEVEL, message = _constants.BREAK_MESSAGE, filePath = breakPoint.getFilePath(), lineIndex = breakPoint.getLineIndex();
        this.writeToLog(level, message, filePath, lineIndex);
        const context = this; ///
        await this.callback(context, breakPoint);
        return breakPoint;
    }
    async verify() {
        let verifies = false;
        const typePrefixes = this.getTypePrefixes(), releaseContext = this, typePrefixesVerify = (0, _verify.verifyTypePrefixes)(typePrefixes, releaseContext);
        if (typePrefixesVerify) {
            const verifiedFileContexts = [], fileContextsVerify = await (0, _verify.verifyFileContexts)(this.fileContexts, verifiedFileContexts);
            if (fileContextsVerify) {
                verifies = true;
                this.verifies = verifies;
                this.fileContexts = verifiedFileContexts; ///
            }
        }
        return verifies;
    }
    toJSON() {
        const fileContextsJSON = this.fileContexts.map((fileContext)=>{
            const fileContextJSON = fileContext.toJSON();
            return fileContextJSON;
        }), json = fileContextsJSON; ///
        return json;
    }
    static fromLogNameJSONEntriesCallbackAndCustomGrammar(Class, log, name, json, entries, callback, customGrammar) {
        if (customGrammar === undefined) {
            customGrammar = callback; ///
            callback = entries; ///
            entries = json; ///
            json = name; ///
            name = log; ///
            log = Class; ///
            Class = ReleaseContext; ///
        }
        const verifies = false, initialised = false, fileContexts = [], combinedCustomGrammar = null, dependencyReleaseContexts = null, releaseContext = new Class(log, name, json, entries, callback, customGrammar, verifies, initialised, fileContexts, combinedCustomGrammar, dependencyReleaseContexts);
        return releaseContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIG1hdGNoRGVwZW5kZW5jeU5hbWUoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBkZXBlbmRlbmN5TmFtZSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IDA7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBoYXNWZXJpZmllZCgpIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgaXNVbnJlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCksXG4gICAgICAgICAgdW5yZWxlYXNlZCA9ICFyZWxlYXNlZDtcblxuICAgIHJldHVybiB1bnJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRTY2hlbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2NoZW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFNjaGVtYXMgPSBmaWxlQ29udGV4dC5nZXRTY2hlbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChzY2hlbWFzLCBmaWxlQ29udGV4dFNjaGVtYXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0U2NoZW1hcyA9IHJlbGVhc2VDb250ZXh0LmdldFNjaGVtYXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChzY2hlbWFzLCByZWxlYXNlQ29udGV4dFNjaGVtYXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldEdlbmVyYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBnZW5lcmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0R2VuZXJhdG9ycyA9IGZpbGVDb250ZXh0LmdldEdlbmVyYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGdlbmVyYXRvcnMsIGZpbGVDb250ZXh0R2VuZXJhdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRHZW5lcmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0R2VuZXJhdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGdlbmVyYXRvcnMsIHJlbGVhc2VDb250ZXh0R2VuZXJhdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9ycztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLmxvZy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHRoaXMuaXNSZWxlYXNlZCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0c1RhaWwgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHNUYWlsOyAvLy9cblxuICAgIHRoaXMuY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmVsZWFzZWQgP1xuICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICBhc3luYyBicmVhayhicmVha1BvaW50KSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTCxcbiAgICAgICAgICBtZXNzYWdlID0gQlJFQUtfTUVTU0FHRSxcbiAgICAgICAgICBmaWxlUGF0aCA9IGJyZWFrUG9pbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBicmVha1BvaW50LmdldExpbmVJbmRleCgpO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGF3YWl0IHRoaXMuY2FsbGJhY2soY29udGV4dCwgYnJlYWtQb2ludCk7XG5cbiAgICByZXR1cm4gYnJlYWtQb2ludDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gYXdhaXQgdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudmVyaWZpZXMgPSB2ZXJpZmllcztcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0cyA9IHZlcmlmaWVkRmlsZUNvbnRleHRzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyKENsYXNzLCBsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKSB7XG4gICAgaWYgKGN1c3RvbUdyYW1tYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3VzdG9tR3JhbW1hciA9IGNhbGxiYWNrOyAvLy9cblxuICAgICAgY2FsbGJhY2sgPSBlbnRyaWVzOyAvLy9cblxuICAgICAgZW50cmllcyA9IGpzb247IC8vL1xuXG4gICAgICBqc29uID0gbmFtZTsgIC8vL1xuXG4gICAgICBuYW1lID0gbG9nOyAvLy9cblxuICAgICAgbG9nID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBSZWxlYXNlQ29udGV4dDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZpZXMgPSBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsaXNlZCA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgQ2xhc3MobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hciwgdmVyaWZpZXMsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsInB1c2giLCJ0YWlsIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxvZyIsIm5hbWUiLCJqc29uIiwiZW50cmllcyIsImNhbGxiYWNrIiwiY3VzdG9tR3JhbW1hciIsInZlcmlmaWVzIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0TmFtZSIsImdldEpTT04iLCJnZXRFbnRyaWVzIiwiZ2V0Q2FsbGJhY2siLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0VmVyaWZpZXMiLCJpc0luaXRpYWxpc2VkIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldFZlcnNpb24iLCJtYXRjaERlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeU5hbWUiLCJkZXBlbmRlbmN5TmFtZU1hdGNoZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiaGFzVmVyaWZpZWQiLCJ2ZXJpZmllZCIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImlzVW5yZWxlYXNlZCIsInVucmVsZWFzZWQiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFR5cGVQcmVmaXgiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRTY2hlbWFzIiwic2NoZW1hcyIsImZpbGVDb250ZXh0U2NoZW1hcyIsInJlbGVhc2VDb250ZXh0U2NoZW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0R2VuZXJhdG9ycyIsImdlbmVyYXRvcnMiLCJmaWxlQ29udGV4dEdlbmVyYXRvcnMiLCJyZWxlYXNlQ29udGV4dEdlbmVyYXRvcnMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyIsInJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImZpbGVQYXRoIiwibGluZUluZGV4Iiwid3JpdGUiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dHNUYWlsIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsImZpbGVDb250ZXh0c0Zyb21KU09OIiwiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJicmVhayIsImJyZWFrUG9pbnQiLCJCUkVBS19NRVNTQUdFIiwiZ2V0RmlsZVBhdGgiLCJnZXRMaW5lSW5kZXgiLCJ2ZXJpZnkiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiQ2xhc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7MkJBVFU7d0JBRXdCOytCQUNFOzZCQUNLOzJCQUNrQztBQUVoRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFN0IsTUFBTUo7SUFDbkIsWUFBWUssR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QixDQUFFO1FBQ3BKLElBQUksQ0FBQ1YsR0FBRyxHQUFHQTtR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