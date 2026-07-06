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
    break(breakPoint, resume) {
        const level = _constants.TRACE_LEVEL, message = _constants.BREAK_MESSAGE, filePath = breakPoint.getFilePath(), lineIndex = breakPoint.getLineIndex();
        this.writeToLog(level, message, filePath, lineIndex);
        const context = this; ///
        this.callback(breakPoint, resume, context);
        return breakPoint;
    }
    verify(contiunation) {
        let verifies = false;
        const typePrefixes = this.getTypePrefixes(), releaseContext = this, typePrefixesVerify = (0, _verify.verifyTypePrefixes)(typePrefixes, releaseContext);
        if (!typePrefixesVerify) {
            contiunation(verifies);
            return;
        }
        const verifiedFileContexts = [];
        (0, _verify.verifyFileContexts)(this.fileContexts, verifiedFileContexts, (fileContextsVerify)=>{
            if (fileContextsVerify) {
                verifies = true;
                this.verifies = verifies;
                this.fileContexts = verifiedFileContexts; ///
            }
            contiunation(verifies);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIG1hdGNoRGVwZW5kZW5jeU5hbWUoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBkZXBlbmRlbmN5TmFtZSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IDA7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBoYXNWZXJpZmllZCgpIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgaXNVbnJlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCksXG4gICAgICAgICAgdW5yZWxlYXNlZCA9ICFyZWxlYXNlZDtcblxuICAgIHJldHVybiB1bnJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRTY2hlbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2NoZW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFNjaGVtYXMgPSBmaWxlQ29udGV4dC5nZXRTY2hlbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChzY2hlbWFzLCBmaWxlQ29udGV4dFNjaGVtYXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0U2NoZW1hcyA9IHJlbGVhc2VDb250ZXh0LmdldFNjaGVtYXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChzY2hlbWFzLCByZWxlYXNlQ29udGV4dFNjaGVtYXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldEdlbmVyYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBnZW5lcmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0R2VuZXJhdG9ycyA9IGZpbGVDb250ZXh0LmdldEdlbmVyYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGdlbmVyYXRvcnMsIGZpbGVDb250ZXh0R2VuZXJhdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRHZW5lcmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0R2VuZXJhdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGdlbmVyYXRvcnMsIHJlbGVhc2VDb250ZXh0R2VuZXJhdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9ycztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLmxvZy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHRoaXMuaXNSZWxlYXNlZCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0c1RhaWwgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHNUYWlsOyAvLy9cblxuICAgIHRoaXMuY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmVsZWFzZWQgP1xuICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICBicmVhayhicmVha1BvaW50LCByZXN1bWUpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIG1lc3NhZ2UgPSBCUkVBS19NRVNTQUdFLFxuICAgICAgICAgIGZpbGVQYXRoID0gYnJlYWtQb2ludC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGJyZWFrUG9pbnQuZ2V0TGluZUluZGV4KCk7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5jYWxsYmFjayhicmVha1BvaW50LCByZXN1bWUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGJyZWFrUG9pbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGl1bmF0aW9uKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKCF0eXBlUHJlZml4ZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRpdW5hdGlvbih2ZXJpZmllcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdO1xuXG4gICAgdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cywgKGZpbGVDb250ZXh0c1ZlcmlmeSkgPT4ge1xuICAgICAgaWYgKGZpbGVDb250ZXh0c1ZlcmlmeSkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gdmVyaWZpZWRGaWxlQ29udGV4dHM7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb250aXVuYXRpb24odmVyaWZpZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihDbGFzcywgbG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcikge1xuICAgIGlmIChjdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXIgPSBjYWxsYmFjazsgLy8vXG5cbiAgICAgIGNhbGxiYWNrID0gZW50cmllczsgLy8vXG5cbiAgICAgIGVudHJpZXMgPSBqc29uOyAvLy9cblxuICAgICAganNvbiA9IG5hbWU7ICAvLy9cblxuICAgICAgbmFtZSA9IGxvZzsgLy8vXG5cbiAgICAgIGxvZyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gUmVsZWFzZUNvbnRleHQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IENsYXNzKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwidGFpbCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJjYWxsYmFjayIsImN1c3RvbUdyYW1tYXIiLCJ2ZXJpZmllcyIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFZlcmlmaWVzIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRWZXJzaW9uIiwibWF0Y2hEZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeU5hbWVNYXRjaGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dCIsImdldENvbnRleHQiLCJjb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImhhc1ZlcmlmaWVkIiwidmVyaWZpZWQiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJpc1VucmVsZWFzZWQiLCJ1bnJlbGVhc2VkIiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZWZpeGVzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0U2NoZW1hcyIsInNjaGVtYXMiLCJmaWxlQ29udGV4dFNjaGVtYXMiLCJyZWxlYXNlQ29udGV4dFNjaGVtYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldEdlbmVyYXRvcnMiLCJnZW5lcmF0b3JzIiwiZmlsZUNvbnRleHRHZW5lcmF0b3JzIiwicmVsZWFzZUNvbnRleHRHZW5lcmF0b3JzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXREZXBlbmRlbmNpZXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJUUkFDRV9MRVZFTCIsIndyaXRlVG9Mb2ciLCJkZWJ1ZyIsIkRFQlVHX0xFVkVMIiwiaW5mbyIsIklORk9fTEVWRUwiLCJ3YXJuaW5nIiwiV0FSTklOR19MRVZFTCIsImVycm9yIiwiRVJST1JfTEVWRUwiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsIndyaXRlIiwiaW5pdGlhbGlzZSIsInJlbGVhc2VDb250ZXh0cyIsIkZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHRzVGFpbCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiYnJlYWsiLCJicmVha1BvaW50IiwicmVzdW1lIiwiQlJFQUtfTUVTU0FHRSIsImdldEZpbGVQYXRoIiwiZ2V0TGluZUluZGV4IiwidmVyaWZ5IiwiY29udGl1bmF0aW9uIiwidHlwZVByZWZpeGVzVmVyaWZ5IiwidmVyaWZ5VHlwZVByZWZpeGVzIiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNWZXJpZnkiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciIsIkNsYXNzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXFCQTs7OzJCQVRVO3dCQUV3QjsrQkFDRTs2QkFDSzsyQkFDa0M7QUFFaEcsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO0FBRTdCLE1BQU1KO0lBQ25CLFlBQVlLLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVB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