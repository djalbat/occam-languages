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
    getMetaLemmas(includeDependencies = true) {
        const metaLemmas = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextMetaLemmas = fileContext.getMetaLemmas(includeRelease);
            push(metaLemmas, fileContextMetaLemmas);
        });
        return metaLemmas;
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
    getMetatheorems(includeDependencies = true) {
        const metatheorems = [];
        this.fileContexts.forEach((fileContext)=>{
            const includeRelease = false, fileContextMetatheorems = fileContext.getMetatheorems(includeRelease);
            push(metatheorems, fileContextMetatheorems);
        });
        if (includeDependencies) {
            this.dependencyReleaseContexts.forEach((releaseContext)=>{
                const includeDependencies = false, releaseContextMetatheorems = releaseContext.getMetatheorems(includeDependencies);
                push(metatheorems, releaseContextMetatheorems);
            });
        }
        return metatheorems;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIG1hdGNoRGVwZW5kZW5jeU5hbWUoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBkZXBlbmRlbmN5TmFtZSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IDA7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBoYXNWZXJpZmllZCgpIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgaXNVbnJlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCksXG4gICAgICAgICAgdW5yZWxlYXNlZCA9ICFyZWxlYXNlZDtcblxuICAgIHJldHVybiB1bnJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5sb2cud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dHNUYWlsID0gdGFpbChyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzVGFpbDsgLy8vXG5cbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJlbGVhc2VkID9cbiAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09OKHRoaXMuanNvbiwgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkgOlxuICAgICAgICBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCwgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoYnJlYWtQb2ludCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgbWVzc2FnZSA9IEJSRUFLX01FU1NBR0UsXG4gICAgICAgICAgZmlsZVBhdGggPSBicmVha1BvaW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gYnJlYWtQb2ludC5nZXRMaW5lSW5kZXgoKTtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBhd2FpdCB0aGlzLmNhbGxiYWNrKGNvbnRleHQsIGJyZWFrUG9pbnQpO1xuXG4gICAgcmV0dXJuIGJyZWFrUG9pbnQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnZlcmlmaWVzID0gdmVyaWZpZXM7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihDbGFzcywgbG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcikge1xuICAgIGlmIChjdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXIgPSBjYWxsYmFjazsgLy8vXG5cbiAgICAgIGNhbGxiYWNrID0gZW50cmllczsgLy8vXG5cbiAgICAgIGVudHJpZXMgPSBqc29uOyAvLy9cblxuICAgICAganNvbiA9IG5hbWU7ICAvLy9cblxuICAgICAgbmFtZSA9IGxvZzsgLy8vXG5cbiAgICAgIGxvZyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gUmVsZWFzZUNvbnRleHQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IENsYXNzKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwidGFpbCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJjYWxsYmFjayIsImN1c3RvbUdyYW1tYXIiLCJ2ZXJpZmllcyIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFZlcmlmaWVzIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRWZXJzaW9uIiwibWF0Y2hEZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeU5hbWVNYXRjaGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dCIsImdldENvbnRleHQiLCJjb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImhhc1ZlcmlmaWVkIiwidmVyaWZpZWQiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJpc1VucmVsZWFzZWQiLCJ1bnJlbGVhc2VkIiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZWZpeGVzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJyZWxlYXNlQ29udGV4dFByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImZpbGVDb250ZXh0VHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImZpbGVQYXRoIiwibGluZUluZGV4Iiwid3JpdGUiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dHNUYWlsIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsImZpbGVDb250ZXh0c0Zyb21KU09OIiwiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJicmVhayIsImJyZWFrUG9pbnQiLCJCUkVBS19NRVNTQUdFIiwiZ2V0RmlsZVBhdGgiLCJnZXRMaW5lSW5kZXgiLCJ2ZXJpZnkiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiQ2xhc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7MkJBVFU7d0JBRXdCOytCQUNFOzZCQUNLOzJCQUNrQztBQUVoRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFN0IsTUFBTUo7SUFDbkIsWUFBWUssR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QixDQUFFO1FBQ3BKLElBQUksQ0FBQ1YsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR0E7UUFDN0IsSUFBSSxDQUFD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