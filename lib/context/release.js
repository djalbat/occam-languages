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
    isFileContext() {
        const fileContext = false;
        return fileContext;
    }
    isReleaseContext() {
        const releaseContext = true;
        return releaseContext;
    }
    matchDependencyName(dependencyName) {
        const dependencyNameMatches = this.name === dependencyName;
        return dependencyNameMatches;
    }
    getReleaseContext() {
        const releaseContext = this; ///
        return releaseContext;
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
        this.initialised = true;
    }
    async break(filePath, lineIndex) {
        const level = _constants.TRACE_LEVEL, message = _constants.BREAK_MESSAGE;
        this.writeToLog(level, message, filePath, lineIndex);
        const context = this; ///
        await this.callback(context, filePath, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBpc0ZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBpc1JlbGVhc2VDb250ZXh0KCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdHJ1ZTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoRGVwZW5kZW5jeU5hbWUoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBkZXBlbmRlbmN5TmFtZSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IDA7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBoYXNWZXJpZmllZCgpIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5sb2cud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dHNUYWlsID0gdGFpbChyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzVGFpbDsgLy8vXG5cbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJlbGVhc2VkID9cbiAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09OKHRoaXMuanNvbiwgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkgOlxuICAgICAgICBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCwgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICBhc3luYyBicmVhayhmaWxlUGF0aCwgbGluZUluZGV4KSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTCxcbiAgICAgICAgICBtZXNzYWdlID0gQlJFQUtfTUVTU0FHRTtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBhd2FpdCB0aGlzLmNhbGxiYWNrKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHZlcmlmeVR5cGVQcmVmaXhlcyh0eXBlUHJlZml4ZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkRmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgICBmaWxlQ29udGV4dHNWZXJpZnkgPSBhd2FpdCB2ZXJpZnlGaWxlQ29udGV4dHModGhpcy5maWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0c1ZlcmlmeSkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gdmVyaWZpZWRGaWxlQ29udGV4dHM7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIoQ2xhc3MsIGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIpIHtcbiAgICBpZiAoY3VzdG9tR3JhbW1hciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdXN0b21HcmFtbWFyID0gY2FsbGJhY2s7IC8vL1xuXG4gICAgICBjYWxsYmFjayA9IGVudHJpZXM7IC8vL1xuXG4gICAgICBlbnRyaWVzID0ganNvbjsgLy8vXG5cbiAgICAgIGpzb24gPSBuYW1lOyAgLy8vXG5cbiAgICAgIG5hbWUgPSBsb2c7IC8vL1xuXG4gICAgICBsb2cgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IFJlbGVhc2VDb250ZXh0OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllcyA9IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxpc2VkID0gZmFsc2UsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBDbGFzcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwicHVzaCIsInRhaWwiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibG9nIiwibmFtZSIsImpzb24iLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJjdXN0b21HcmFtbWFyIiwidmVyaWZpZXMiLCJpbml0aWFsaXNlZCIsImZpbGVDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXROYW1lIiwiZ2V0SlNPTiIsImdldEVudHJpZXMiLCJnZXRDYWxsYmFjayIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXRWZXJpZmllcyIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaXNGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiaXNSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwibWF0Y2hEZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeU5hbWVNYXRjaGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiaGFzVmVyaWZpZWQiLCJ2ZXJpZmllZCIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVmaXhlcyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VHlwZVByZWZpeCIsImdldExhYmVscyIsImxhYmVscyIsImZvckVhY2giLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInRyYWNlIiwibWVzc2FnZSIsImxldmVsIiwiVFJBQ0VfTEVWRUwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJERUJVR19MRVZFTCIsImluZm8iLCJJTkZPX0xFVkVMIiwid2FybmluZyIsIldBUk5JTkdfTEVWRUwiLCJlcnJvciIsIkVSUk9SX0xFVkVMIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJ3cml0ZSIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0c1RhaWwiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsImJyZWFrIiwiQlJFQUtfTUVTU0FHRSIsImNvbnRleHQiLCJ2ZXJpZnkiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiQ2xhc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7MkJBVFU7d0JBRXdCOytCQUNFOzZCQUNLOzJCQUNrQztBQUVoRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFN0IsTUFBTUo7SUFDbkIsWUFBWUssR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QixDQUFFO1FBQ3BKLElBQUksQ0FBQ1YsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR0E7UUFDN0IsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7SUFDbkM7SUFFQUMsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDWCxHQUFHO0lBQ2pCO0lBRUFZLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ1gsSUFBSTtJQUNsQjtJQUVBWSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNYLElBQUk7SUFDbEI7SUFFQVksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDWCxPQUFPO0lBQ3JCO0lBRUFZLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ1gsUUFBUTtJQUN0QjtJQUVBWSxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNYLGFBQWE7SUFDM0I7SUFFQVksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDWCxRQUFRO0lBQ3RCO0lBRUFZLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDWCxXQUFXO0lBQ3pCO0lBRUFZLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ1gsWUFBWTtJQUMxQjtJQUVBWSwyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUNYLHFCQUFxQjtJQUNuQztJQUVBWSwrQkFBK0I7UUFDN0IsT0FBTyxJQUFJLENBQUNYLHlCQUF5QjtJQUN2QztJQUVBWSxnQkFBZ0I7UUFDZCxNQUFNQyxjQUFjO1FBRXBCLE9BQU9BO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGlCQUFpQjtRQUV2QixPQUFPQTtJQUNUO0lBRUFDLG9CQUFvQkMsY0FBYyxFQUFFO1FBQ2xDLE1BQU1DLHdCQUF5QixJQUFJLENBQUMzQixJQUFJLEtBQUswQjtRQUU3QyxPQUFPQztJQUNUO0lBRUFDLG9CQUFvQjtRQUNsQixNQUFNSixpQkFBaUIsSUFBSSxFQUFHLEdBQUc7UUFFakMsT0FBT0E7SUFDVDtJQUVBSyxXQUFXO1FBQ1QsTUFBTUMsUUFBUTtRQUVkLE9BQU9BO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLFdBQVcsSUFBSSxDQUFDM0IsUUFBUSxFQUFFLEdBQUc7UUFFbkMsT0FBTzJCO0lBQ1Q7SUFFQUMsYUFBYTtRQUNYLE1BQU1DLFdBQVksSUFBSSxDQUFDakMsSUFBSSxLQUFLO1FBRWhDLE9BQU9pQztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLElBQUlDLGFBQWE7UUFFakIsTUFBTUMsc0JBQXNCLE9BQ3RCQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxDQUFDRixzQkFDcENHLHFCQUFxQkYsYUFBYUcsTUFBTTtRQUU5QyxJQUFJRCx1QkFBdUIsR0FBRztZQUM1QixNQUFNRSxrQkFBa0I3QyxNQUFNeUM7WUFFOUJGLGFBQWFNLGlCQUFpQixHQUFHO1FBQ25DO1FBRUEsT0FBT047SUFDVDtJQUVBTyxVQUFVTixzQkFBc0IsSUFBSSxFQUFFO1FBQ3BDLE1BQU1PLFNBQVMsRUFBRTtRQUVqQixJQUFJLENBQUNyQyxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ3ZCO1lBQ3pCLE1BQU13QixpQkFBaUIsT0FDakJDLG9CQUFvQnpCLFlBQVlxQixTQUFTLENBQUNHO1lBRWhEbkQsS0FBS2lELFFBQVFHO1FBQ2Y7UUFFQSxJQUFJVixxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ3JCO2dCQUN0QyxNQUFNYSxzQkFBc0IsT0FDdEJXLHVCQUF1QnhCLGVBQWVtQixTQUFTLENBQUNOO2dCQUV0RDFDLEtBQUtpRCxRQUFRSTtZQUNmO1FBQ0Y7UUFFQSxPQUFPSjtJQUNUO0lBRUFLLFNBQVNaLHNCQUFzQixJQUFJLEVBQUU7UUFDbkMsTUFBTWEsUUFBUSxFQUFFO1FBRWhCLElBQUksQ0FBQzNDLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDdkI7WUFDekIsTUFBTXdCLGlCQUFpQixPQUNqQkssbUJBQW1CN0IsWUFBWTJCLFFBQVEsQ0FBQ0g7WUFFOUNuRCxLQUFLdUQsT0FBT0M7UUFDZDtRQUVBLElBQUlkLHFCQUFxQjtZQUN2QixJQUFJLENBQUM1Qix5QkFBeUIsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDckI7Z0JBQ3RDLE1BQU1hLHNCQUFzQixPQUN0QmUsc0JBQXNCNUIsZUFBZXlCLFFBQVEsQ0FBQ1o7Z0JBRXBEMUMsS0FBS3VELE9BQU9FO1lBQ2Q7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsU0FBU2hCLHNCQUFzQixJQUFJLEVBQUU7UUFDbkMsTUFBTWlCLFFBQVEsRUFBRTtRQUVoQixJQUFJLENBQUMvQyxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ3ZCO1lBQ3pCLE1BQU13QixpQkFBaUIsT0FDakJTLG1CQUFtQmpDLFlBQVkrQixRQUFRLENBQUNQO1lBRTlDbkQsS0FBSzJELE9BQU9DO1FBQ2Q7UUFFQSxJQUFJbEIscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNyQjtnQkFDdEMsTUFBTWEsc0JBQXNCLE9BQ3RCbUIsc0JBQXNCaEMsZUFBZTZCLFFBQVEsQ0FBQ2hCO2dCQUVwRDFDLEtBQUsyRCxPQUFPRTtZQUNkO1FBQ0Y7UUFFQSxPQUFPRjtJQUNUO0lBRUFHLFVBQVVwQixzQkFBc0IsSUFBSSxFQUFFO1FBQ3BDLE1BQU1xQixTQUFTLEVBQUU7UUFFakIsSUFBSSxDQUFDbkQsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLENBQUN2QjtZQUN6QixNQUFNd0IsaUJBQWlCLE9BQ2pCYSxvQkFBb0JyQyxZQUFZbUMsU0FBUyxDQUFDWDtZQUVoRG5ELEtBQUsrRCxRQUFRQztRQUNmO1FBRUEsSUFBSXRCLHFCQUFxQjtZQUN2QixJQUFJLENBQUM1Qix5QkFBeUIsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDckI7Z0JBQ3RDLE1BQU1hLHNCQUFzQixPQUN0QnVCLHVCQUF1QnBDLGVBQWVpQyxTQUFTLENBQUNwQjtnQkFFdEQxQyxLQUFLK0QsUUFBUUU7WUFDZjtRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxVQUFVeEIsc0JBQXNCLElBQUksRUFBRTtRQUNwQyxNQUFNeUIsU0FBUyxFQUFFO1FBRWpCLElBQUksQ0FBQ3ZELFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDdkI7WUFDekIsTUFBTXdCLGlCQUFpQixPQUNqQmlCLG9CQUFvQnpDLFlBQVl1QyxTQUFTLENBQUNmO1lBRWhEbkQsS0FBS21FLFFBQVFDO1FBQ2Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLFlBQVkzQixzQkFBc0IsSUFBSSxFQUFFO1FBQ3RDLE1BQU00QixXQUFXLEVBQUU7UUFFbkIsSUFBSSxDQUFDMUQsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLENBQUN2QjtZQUN6QixNQUFNd0IsaUJBQWlCLE9BQ2pCb0Isc0JBQXNCNUMsWUFBWTBDLFdBQVcsQ0FBQ2xCO1lBRXBEbkQsS0FBS3NFLFVBQVVDO1FBQ2pCO1FBRUEsSUFBSTdCLHFCQUFxQjtZQUN2QixJQUFJLENBQUM1Qix5QkFBeUIsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDckI7Z0JBQ3RDLE1BQU1hLHNCQUFzQixPQUN0QjhCLHlCQUF5QjNDLGVBQWV3QyxXQUFXLENBQUMzQjtnQkFFMUQxQyxLQUFLc0UsVUFBVUU7WUFDakI7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsY0FBYy9CLHNCQUFzQixJQUFJLEVBQUU7UUFDeEMsTUFBTWdDLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUM5RCxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ3ZCO1lBQ3pCLE1BQU13QixpQkFBaUIsT0FDakJ3Qix3QkFBd0JoRCxZQUFZOEMsYUFBYSxDQUFDdEI7WUFFeERuRCxLQUFLMEUsWUFBWUM7UUFDbkI7UUFFQSxJQUFJakMscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNyQjtnQkFDdEMsTUFBTWEsc0JBQXNCLE9BQ3RCa0MsMkJBQTJCL0MsZUFBZTRDLGFBQWEsQ0FBQy9CO2dCQUU5RDFDLEtBQUswRSxZQUFZRTtZQUNuQjtRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxjQUFjbkMsc0JBQXNCLElBQUksRUFBRTtRQUN4QyxNQUFNb0MsYUFBYSxFQUFFO1FBRXJCLElBQUksQ0FBQ2xFLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDdkI7WUFDekIsTUFBTXdCLGlCQUFpQixPQUNqQjRCLHdCQUF3QnBELFlBQVlrRCxhQUFhLENBQUMxQjtZQUV4RG5ELEtBQUs4RSxZQUFZQztRQUNuQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsZUFBZXRDLHNCQUFzQixJQUFJLEVBQUU7UUFDekMsTUFBTXVDLGNBQWMsRUFBRTtRQUV0QixJQUFJLENBQUNyRSxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ3ZCO1lBQ3pCLE1BQU13QixpQkFBaUIsT0FDakIrQix5QkFBeUJ2RCxZQUFZcUQsY0FBYyxDQUFDN0I7WUFFMURuRCxLQUFLaUYsYUFBYUM7UUFDcEI7UUFFQSxJQUFJeEMscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNyQjtnQkFDdEMsTUFBTWEsc0JBQXNCLE9BQ3RCeUMsNEJBQTRCdEQsZUFBZW1ELGNBQWMsQ0FBQ3RDO2dCQUVoRTFDLEtBQUtpRixhQUFhRTtZQUNwQjtRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxlQUFlMUMsc0JBQXNCLElBQUksRUFBRTtRQUN6QyxNQUFNMkMsY0FBYyxFQUFFO1FBRXRCLElBQUksQ0FBQ3pFLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDdkI7WUFDekIsTUFBTXdCLGlCQUFpQixPQUNqQm1DLHlCQUF5QjNELFlBQVl5RCxjQUFjLENBQUNqQztZQUUxRG5ELEtBQUtxRixhQUFhQztRQUNwQjtRQUVBLElBQUk1QyxxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ3JCO2dCQUN0QyxNQUFNYSxzQkFBc0IsT0FDdEI2Qyw0QkFBNEIxRCxlQUFldUQsY0FBYyxDQUFDMUM7Z0JBRWhFMUMsS0FBS3FGLGFBQWFFO1lBQ3BCO1FBQ0Y7UUFFQSxPQUFPRjtJQUNUO0lBRUF6QyxnQkFBZ0JGLHNCQUFzQixJQUFJLEVBQUU7UUFDMUMsTUFBTUMsZUFBZSxFQUFFO1FBRXZCLElBQUksQ0FBQy9CLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDdkI7WUFDekIsTUFBTXdCLGlCQUFpQixPQUNqQnFDLDBCQUEwQjdELFlBQVlpQixlQUFlLENBQUNPO1lBRTVEbkQsS0FBSzJDLGNBQWM2QztRQUNyQjtRQUVBLElBQUk5QyxxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ3JCO2dCQUN0QyxNQUFNYSxzQkFBc0IsT0FDdEIrQyw2QkFBNkI1RCxlQUFlZSxlQUFlLENBQUNGO2dCQUVsRTFDLEtBQUsyQyxjQUFjOEM7WUFDckI7UUFDRjtRQUVBLE9BQU85QztJQUNUO0lBRUErQyxnQkFBZ0JoRCxzQkFBc0IsSUFBSSxFQUFFO1FBQzFDLE1BQU1pRCxlQUFlLEVBQUU7UUFFdkIsSUFBSSxDQUFDL0UsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLENBQUN2QjtZQUN6QixNQUFNd0IsaUJBQWlCLE9BQ2pCeUMsMEJBQTBCakUsWUFBWStELGVBQWUsQ0FBQ3ZDO1lBRTVEbkQsS0FBSzJGLGNBQWNDO1FBQ3JCO1FBRUEsSUFBSWxELHFCQUFxQjtZQUN2QixJQUFJLENBQUM1Qix5QkFBeUIsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDckI7Z0JBQ3RDLE1BQU1hLHNCQUFzQixPQUN0Qm1ELDZCQUE2QmhFLGVBQWU2RCxlQUFlLENBQUNoRDtnQkFFbEUxQyxLQUFLMkYsY0FBY0U7WUFDckI7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsZ0JBQWdCcEQsc0JBQXNCLElBQUksRUFBRTtRQUMxQyxNQUFNcUQsZUFBZSxFQUFFO1FBRXZCLElBQUksQ0FBQ25GLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDdkI7WUFDekIsTUFBTXdCLGlCQUFpQixPQUNqQjZDLDBCQUEwQnJFLFlBQVltRSxlQUFlLENBQUMzQztZQUU1RG5ELEtBQUsrRixjQUFjQztRQUNyQjtRQUVBLElBQUl0RCxxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ3JCO2dCQUN0QyxNQUFNYSxzQkFBc0IsT0FDdEJ1RCw2QkFBNkJwRSxlQUFlaUUsZUFBZSxDQUFDcEQ7Z0JBRWxFMUMsS0FBSytGLGNBQWNFO1lBQ3JCO1FBQ0Y7UUFFQSxPQUFPRjtJQUNUO0lBRUFHLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDM0YsT0FBTyxDQUFDMkYsZUFBZTtJQUFJO0lBRTNEQyxzQkFBc0JDLGdCQUFnQixFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUM3RixPQUFPLENBQUM0RixxQkFBcUIsQ0FBQ0M7SUFBbUI7SUFFdkdDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1DLFFBQVFDLHNCQUFXO1FBRXpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBSSxNQUFNSixPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRSSxzQkFBVztRQUV6QixJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQU0sS0FBS04sT0FBTyxFQUFFO1FBQ1osTUFBTUMsUUFBUU0scUJBQVU7UUFFeEIsSUFBSSxDQUFDSixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFRLFFBQVFSLE9BQU8sRUFBRTtRQUNmLE1BQU1DLFFBQVFRLHdCQUFhO1FBRTNCLElBQUksQ0FBQ04sVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBVSxNQUFNVixPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRVSxzQkFBVztRQUV6QixJQUFJLENBQUNSLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQUcsV0FBV0YsS0FBSyxFQUFFRCxPQUFPLEVBQUVZLFdBQVcsSUFBSSxFQUFFQyxZQUFZLElBQUksRUFBRTtRQUM1RCxJQUFJLENBQUMvRyxHQUFHLENBQUNnSCxLQUFLLENBQUNiLE9BQU9ELFNBQVNZLFVBQVVDO0lBQzNDO0lBRUFFLFdBQVdDLGVBQWUsRUFBRUMsdUJBQXVCLEVBQUU7UUFDbkQsTUFBTWhGLFdBQVcsSUFBSSxDQUFDRCxVQUFVLElBQzFCVCxpQkFBaUIsSUFBSSxFQUNyQjJGLHNCQUFzQnZILEtBQUtxSDtRQUVqQyxJQUFJLENBQUN4Ryx5QkFBeUIsR0FBRzBHLHFCQUFxQixHQUFHO1FBRXpELElBQUksQ0FBQzNHLHFCQUFxQixHQUFHNEcsSUFBQUEsdURBQXdDLEVBQUNIO1FBRXRFL0UsV0FDRW1GLElBQUFBLGlDQUFvQixFQUFDLElBQUksQ0FBQ3BILElBQUksRUFBRSxJQUFJLENBQUNNLFlBQVksRUFBRWlCLGdCQUFnQjBGLDJCQUNqRUksSUFBQUEsb0NBQXVCLEVBQUMsSUFBSSxDQUFDcEgsT0FBTyxFQUFFLElBQUksQ0FBQ0ssWUFBWSxFQUFFaUIsZ0JBQWdCMEY7UUFFN0UsSUFBSSxDQUFDNUcsV0FBVyxHQUFHO0lBQ3JCO0lBRUEsTUFBTWlILE1BQU1WLFFBQVEsRUFBRUMsU0FBUyxFQUFFO1FBQy9CLE1BQU1aLFFBQVFDLHNCQUFXLEVBQ25CRixVQUFVdUIsd0JBQWE7UUFFN0IsSUFBSSxDQUFDcEIsVUFBVSxDQUFDRixPQUFPRCxTQUFTWSxVQUFVQztRQUUxQyxNQUFNVyxVQUFVLElBQUksRUFBRSxHQUFHO1FBRXpCLE1BQU0sSUFBSSxDQUFDdEgsUUFBUSxDQUFDc0gsU0FBU1osVUFBVUM7SUFDekM7SUFFQSxNQUFNWSxTQUFTO1FBQ2IsSUFBSXJILFdBQVc7UUFFZixNQUFNaUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNmLGlCQUFpQixJQUFJLEVBQ3JCbUcscUJBQXFCQyxJQUFBQSwwQkFBa0IsRUFBQ3RGLGNBQWNkO1FBRTVELElBQUltRyxvQkFBb0I7WUFDdEIsTUFBTUUsdUJBQXVCLEVBQUUsRUFDekJDLHFCQUFxQixNQUFNQyxJQUFBQSwwQkFBa0IsRUFBQyxJQUFJLENBQUN4SCxZQUFZLEVBQUVzSDtZQUV2RSxJQUFJQyxvQkFBb0I7Z0JBQ3RCekgsV0FBVztnQkFFWCxJQUFJLENBQUNBLFFBQVEsR0FBR0E7Z0JBRWhCLElBQUksQ0FBQ0UsWUFBWSxHQUFHc0gsc0JBQXNCLEdBQUc7WUFDL0M7UUFDRjtRQUVBLE9BQU94SDtJQUNUO0lBRUEySCxTQUFTO1FBQ1AsTUFBTUMsbUJBQW1CLElBQUksQ0FBQzFILFlBQVksQ0FBQzJILEdBQUcsQ0FBQyxDQUFDNUc7WUFDeEMsTUFBTTZHLGtCQUFrQjdHLFlBQVkwRyxNQUFNO1lBRTFDLE9BQU9HO1FBQ1QsSUFDQWxJLE9BQU9nSSxrQkFBbUIsR0FBRztRQUVuQyxPQUFPaEk7SUFDVDtJQUVBLE9BQU9tSSwrQ0FBK0NDLEtBQUssRUFBRXRJLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUU7UUFDOUcsSUFBSUEsa0JBQWtCa0ksV0FBVztZQUMvQmxJLGdCQUFnQkQsVUFBVSxHQUFHO1lBRTdCQSxXQUFXRCxTQUFTLEdBQUc7WUFFdkJBLFVBQVVELE1BQU0sR0FBRztZQUVuQkEsT0FBT0QsTUFBTyxHQUFHO1lBRWpCQSxPQUFPRCxLQUFLLEdBQUc7WUFFZkEsTUFBTXNJLE9BQVEsR0FBRztZQUVqQkEsUUFBUTNJLGdCQUFnQixHQUFHO1FBQzdCO1FBRUEsTUFBTVcsV0FBVyxPQUNYQyxjQUFjLE9BQ2RDLGVBQWUsRUFBRSxFQUNqQkMsd0JBQXdCLE1BQ3hCQyw0QkFBNEIsTUFDNUJlLGlCQUFpQixJQUFJNkcsTUFBTXRJLEtBQUtDLE1BQU1DLE1BQU1DLFNBQVNDLFVBQVVDLGVBQWVDLFVBQVVDLGFBQWFDLGNBQWNDLHVCQUF1QkM7UUFFaEosT0FBT2U7SUFDVDtBQUNGIn0=