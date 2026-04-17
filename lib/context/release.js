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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIG1hdGNoRGVwZW5kZW5jeU5hbWUoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBkZXBlbmRlbmN5TmFtZSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IDA7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBoYXNWZXJpZmllZCgpIHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5sb2cud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICByZWxlYXNlQ29udGV4dHNUYWlsID0gdGFpbChyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzVGFpbDsgLy8vXG5cbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJlbGVhc2VkID9cbiAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09OKHRoaXMuanNvbiwgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkgOlxuICAgICAgICBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCwgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoYnJlYWtQb2ludCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgbWVzc2FnZSA9IEJSRUFLX01FU1NBR0UsXG4gICAgICAgICAgZmlsZVBhdGggPSBicmVha1BvaW50LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gYnJlYWtQb2ludC5nZXRMaW5lSW5kZXgoKTtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBhd2FpdCB0aGlzLmNhbGxiYWNrKGNvbnRleHQsIGJyZWFrUG9pbnQpO1xuXG4gICAgcmV0dXJuIGJyZWFrUG9pbnQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnZlcmlmaWVzID0gdmVyaWZpZXM7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihDbGFzcywgbG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcikge1xuICAgIGlmIChjdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXIgPSBjYWxsYmFjazsgLy8vXG5cbiAgICAgIGNhbGxiYWNrID0gZW50cmllczsgLy8vXG5cbiAgICAgIGVudHJpZXMgPSBqc29uOyAvLy9cblxuICAgICAganNvbiA9IG5hbWU7ICAvLy9cblxuICAgICAgbmFtZSA9IGxvZzsgLy8vXG5cbiAgICAgIGxvZyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gUmVsZWFzZUNvbnRleHQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IENsYXNzKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwidGFpbCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJjYWxsYmFjayIsImN1c3RvbUdyYW1tYXIiLCJ2ZXJpZmllcyIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFZlcmlmaWVzIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRWZXJzaW9uIiwibWF0Y2hEZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeU5hbWVNYXRjaGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dCIsImdldENvbnRleHQiLCJjb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImhhc1ZlcmlmaWVkIiwidmVyaWZpZWQiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFR5cGVQcmVmaXgiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInRyYWNlIiwibWVzc2FnZSIsImxldmVsIiwiVFJBQ0VfTEVWRUwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJERUJVR19MRVZFTCIsImluZm8iLCJJTkZPX0xFVkVMIiwid2FybmluZyIsIldBUk5JTkdfTEVWRUwiLCJlcnJvciIsIkVSUk9SX0xFVkVMIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJ3cml0ZSIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0c1RhaWwiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsImJyZWFrIiwiYnJlYWtQb2ludCIsIkJSRUFLX01FU1NBR0UiLCJnZXRGaWxlUGF0aCIsImdldExpbmVJbmRleCIsInZlcmlmeSIsInR5cGVQcmVmaXhlc1ZlcmlmeSIsInZlcmlmeVR5cGVQcmVmaXhlcyIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzVmVyaWZ5IiwidmVyaWZ5RmlsZUNvbnRleHRzIiwidG9KU09OIiwiZmlsZUNvbnRleHRzSlNPTiIsIm1hcCIsImZpbGVDb250ZXh0SlNPTiIsImZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIiLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7OzsyQkFUVTt3QkFFd0I7K0JBQ0U7NkJBQ0s7MkJBQ2tDO0FBRWhHLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUU3QixNQUFNSjtJQUNuQixZQUFZSyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxxQkFBcUIsRUFBRUMseUJBQXlCLENBQUU7UUFDcEosSUFBSSxDQUFDVixHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLHFCQUFxQixHQUFHQTtRQUM3QixJQUFJLENBQUNDLHlCQUF5QixHQUFHQTtJQUNuQztJQUVBQyxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUNYLEdBQUc7SUFDakI7SUFFQVksVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDWCxJQUFJO0lBQ2xCO0lBRUFZLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ1gsSUFBSTtJQUNsQjtJQUVBWSxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNYLE9BQU87SUFDckI7SUFFQVksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDWCxRQUFRO0lBQ3RCO0lBRUFZLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQ1gsYUFBYTtJQUMzQjtJQUVBWSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNYLFFBQVE7SUFDdEI7SUFFQVksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNYLFdBQVc7SUFDekI7SUFFQVksa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDWCxZQUFZO0lBQzFCO0lBRUFZLDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQ1gscUJBQXFCO0lBQ25DO0lBRUFZLCtCQUErQjtRQUM3QixPQUFPLElBQUksQ0FBQ1gseUJBQXlCO0lBQ3ZDO0lBRUFZLGFBQWE7UUFBRSxPQUFPLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ21CLFVBQVU7SUFBSTtJQUVqREMsb0JBQW9CQyxjQUFjLEVBQUU7UUFDbEMsTUFBTUMsd0JBQXlCLElBQUksQ0FBQ3hCLElBQUksS0FBS3VCO1FBRTdDLE9BQU9DO0lBQ1Q7SUFFQUMsb0JBQW9CO1FBQ2xCLE1BQU1DLGlCQUFpQixJQUFJLEVBQUcsR0FBRztRQUVqQyxPQUFPQTtJQUNUO0lBRUFDLGFBQWE7UUFDWCxNQUFNQyxVQUFVO1FBRWhCLE9BQU9BO0lBQ1Q7SUFFQUMsV0FBVztRQUNULE1BQU1DLFFBQVE7UUFFZCxPQUFPQTtJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQyxXQUFXLElBQUksQ0FBQzNCLFFBQVEsRUFBRSxHQUFHO1FBRW5DLE9BQU8yQjtJQUNUO0lBRUFDLGFBQWE7UUFDWCxNQUFNQyxXQUFZLElBQUksQ0FBQ2pDLElBQUksS0FBSztRQUVoQyxPQUFPaUM7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxJQUFJQyxhQUFhO1FBRWpCLE1BQU1DLHNCQUFzQixPQUN0QkMsZUFBZSxJQUFJLENBQUNDLGVBQWUsQ0FBQ0Ysc0JBQ3BDRyxxQkFBcUJGLGFBQWFHLE1BQU07UUFFOUMsSUFBSUQsdUJBQXVCLEdBQUc7WUFDNUIsTUFBTUUsa0JBQWtCN0MsTUFBTXlDO1lBRTlCRixhQUFhTSxpQkFBaUIsR0FBRztRQUNuQztRQUVBLE9BQU9OO0lBQ1Q7SUFFQU8sVUFBVU4sc0JBQXNCLElBQUksRUFBRTtRQUNwQyxNQUFNTyxTQUFTLEVBQUU7UUFFakIsSUFBSSxDQUFDckMsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLENBQUNDO1lBQ3pCLE1BQU1DLGlCQUFpQixPQUNqQkMsb0JBQW9CRixZQUFZSCxTQUFTLENBQUNJO1lBRWhEcEQsS0FBS2lELFFBQVFJO1FBQ2Y7UUFFQSxJQUFJWCxxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ25CO2dCQUN0QyxNQUFNVyxzQkFBc0IsT0FDdEJZLHVCQUF1QnZCLGVBQWVpQixTQUFTLENBQUNOO2dCQUV0RDFDLEtBQUtpRCxRQUFRSztZQUNmO1FBQ0Y7UUFFQSxPQUFPTDtJQUNUO0lBRUFNLFNBQVNiLHNCQUFzQixJQUFJLEVBQUU7UUFDbkMsTUFBTWMsUUFBUSxFQUFFO1FBRWhCLElBQUksQ0FBQzVDLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDQztZQUN6QixNQUFNQyxpQkFBaUIsT0FDakJLLG1CQUFtQk4sWUFBWUksUUFBUSxDQUFDSDtZQUU5Q3BELEtBQUt3RCxPQUFPQztRQUNkO1FBRUEsSUFBSWYscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNuQjtnQkFDdEMsTUFBTVcsc0JBQXNCLE9BQ3RCZ0Isc0JBQXNCM0IsZUFBZXdCLFFBQVEsQ0FBQ2I7Z0JBRXBEMUMsS0FBS3dELE9BQU9FO1lBQ2Q7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsU0FBU2pCLHNCQUFzQixJQUFJLEVBQUU7UUFDbkMsTUFBTWtCLFFBQVEsRUFBRTtRQUVoQixJQUFJLENBQUNoRCxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCUyxtQkFBbUJWLFlBQVlRLFFBQVEsQ0FBQ1A7WUFFOUNwRCxLQUFLNEQsT0FBT0M7UUFDZDtRQUVBLElBQUluQixxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ25CO2dCQUN0QyxNQUFNVyxzQkFBc0IsT0FDdEJvQixzQkFBc0IvQixlQUFlNEIsUUFBUSxDQUFDakI7Z0JBRXBEMUMsS0FBSzRELE9BQU9FO1lBQ2Q7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsVUFBVXJCLHNCQUFzQixJQUFJLEVBQUU7UUFDcEMsTUFBTXNCLFNBQVMsRUFBRTtRQUVqQixJQUFJLENBQUNwRCxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCYSxvQkFBb0JkLFlBQVlZLFNBQVMsQ0FBQ1g7WUFFaERwRCxLQUFLZ0UsUUFBUUM7UUFDZjtRQUVBLElBQUl2QixxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ25CO2dCQUN0QyxNQUFNVyxzQkFBc0IsT0FDdEJ3Qix1QkFBdUJuQyxlQUFlZ0MsU0FBUyxDQUFDckI7Z0JBRXREMUMsS0FBS2dFLFFBQVFFO1lBQ2Y7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsVUFBVXpCLHNCQUFzQixJQUFJLEVBQUU7UUFDcEMsTUFBTTBCLFNBQVMsRUFBRTtRQUVqQixJQUFJLENBQUN4RCxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCaUIsb0JBQW9CbEIsWUFBWWdCLFNBQVMsQ0FBQ2Y7WUFFaERwRCxLQUFLb0UsUUFBUUM7UUFDZjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUUsWUFBWTVCLHNCQUFzQixJQUFJLEVBQUU7UUFDdEMsTUFBTTZCLFdBQVcsRUFBRTtRQUVuQixJQUFJLENBQUMzRCxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCb0Isc0JBQXNCckIsWUFBWW1CLFdBQVcsQ0FBQ2xCO1lBRXBEcEQsS0FBS3VFLFVBQVVDO1FBQ2pCO1FBRUEsSUFBSTlCLHFCQUFxQjtZQUN2QixJQUFJLENBQUM1Qix5QkFBeUIsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDbkI7Z0JBQ3RDLE1BQU1XLHNCQUFzQixPQUN0QitCLHlCQUF5QjFDLGVBQWV1QyxXQUFXLENBQUM1QjtnQkFFMUQxQyxLQUFLdUUsVUFBVUU7WUFDakI7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsY0FBY2hDLHNCQUFzQixJQUFJLEVBQUU7UUFDeEMsTUFBTWlDLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUMvRCxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCd0Isd0JBQXdCekIsWUFBWXVCLGFBQWEsQ0FBQ3RCO1lBRXhEcEQsS0FBSzJFLFlBQVlDO1FBQ25CO1FBRUEsSUFBSWxDLHFCQUFxQjtZQUN2QixJQUFJLENBQUM1Qix5QkFBeUIsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDbkI7Z0JBQ3RDLE1BQU1XLHNCQUFzQixPQUN0Qm1DLDJCQUEyQjlDLGVBQWUyQyxhQUFhLENBQUNoQztnQkFFOUQxQyxLQUFLMkUsWUFBWUU7WUFDbkI7UUFDRjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQUcsY0FBY3BDLHNCQUFzQixJQUFJLEVBQUU7UUFDeEMsTUFBTXFDLGFBQWEsRUFBRTtRQUVyQixJQUFJLENBQUNuRSxZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCNEIsd0JBQXdCN0IsWUFBWTJCLGFBQWEsQ0FBQzFCO1lBRXhEcEQsS0FBSytFLFlBQVlDO1FBQ25CO1FBRUEsT0FBT0Q7SUFDVDtJQUVBRSxlQUFldkMsc0JBQXNCLElBQUksRUFBRTtRQUN6QyxNQUFNd0MsY0FBYyxFQUFFO1FBRXRCLElBQUksQ0FBQ3RFLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDQztZQUN6QixNQUFNQyxpQkFBaUIsT0FDakIrQix5QkFBeUJoQyxZQUFZOEIsY0FBYyxDQUFDN0I7WUFFMURwRCxLQUFLa0YsYUFBYUM7UUFDcEI7UUFFQSxJQUFJekMscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNuQjtnQkFDdEMsTUFBTVcsc0JBQXNCLE9BQ3RCMEMsNEJBQTRCckQsZUFBZWtELGNBQWMsQ0FBQ3ZDO2dCQUVoRTFDLEtBQUtrRixhQUFhRTtZQUNwQjtRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxlQUFlM0Msc0JBQXNCLElBQUksRUFBRTtRQUN6QyxNQUFNNEMsY0FBYyxFQUFFO1FBRXRCLElBQUksQ0FBQzFFLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDQztZQUN6QixNQUFNQyxpQkFBaUIsT0FDakJtQyx5QkFBeUJwQyxZQUFZa0MsY0FBYyxDQUFDakM7WUFFMURwRCxLQUFLc0YsYUFBYUM7UUFDcEI7UUFFQSxJQUFJN0MscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNuQjtnQkFDdEMsTUFBTVcsc0JBQXNCLE9BQ3RCOEMsNEJBQTRCekQsZUFBZXNELGNBQWMsQ0FBQzNDO2dCQUVoRTFDLEtBQUtzRixhQUFhRTtZQUNwQjtRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBMUMsZ0JBQWdCRixzQkFBc0IsSUFBSSxFQUFFO1FBQzFDLE1BQU1DLGVBQWUsRUFBRTtRQUV2QixJQUFJLENBQUMvQixZQUFZLENBQUNzQyxPQUFPLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsaUJBQWlCLE9BQ2pCcUMsMEJBQTBCdEMsWUFBWVAsZUFBZSxDQUFDUTtZQUU1RHBELEtBQUsyQyxjQUFjOEM7UUFDckI7UUFFQSxJQUFJL0MscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNuQjtnQkFDdEMsTUFBTVcsc0JBQXNCLE9BQ3RCZ0QsNkJBQTZCM0QsZUFBZWEsZUFBZSxDQUFDRjtnQkFFbEUxQyxLQUFLMkMsY0FBYytDO1lBQ3JCO1FBQ0Y7UUFFQSxPQUFPL0M7SUFDVDtJQUVBZ0QsZ0JBQWdCakQsc0JBQXNCLElBQUksRUFBRTtRQUMxQyxNQUFNa0QsZUFBZSxFQUFFO1FBRXZCLElBQUksQ0FBQ2hGLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxDQUFDQztZQUN6QixNQUFNQyxpQkFBaUIsT0FDakJ5QywwQkFBMEIxQyxZQUFZd0MsZUFBZSxDQUFDdkM7WUFFNURwRCxLQUFLNEYsY0FBY0M7UUFDckI7UUFFQSxJQUFJbkQscUJBQXFCO1lBQ3ZCLElBQUksQ0FBQzVCLHlCQUF5QixDQUFDb0MsT0FBTyxDQUFDLENBQUNuQjtnQkFDdEMsTUFBTVcsc0JBQXNCLE9BQ3RCb0QsNkJBQTZCL0QsZUFBZTRELGVBQWUsQ0FBQ2pEO2dCQUVsRTFDLEtBQUs0RixjQUFjRTtZQUNyQjtRQUNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxnQkFBZ0JyRCxzQkFBc0IsSUFBSSxFQUFFO1FBQzFDLE1BQU1zRCxlQUFlLEVBQUU7UUFFdkIsSUFBSSxDQUFDcEYsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLENBQUNDO1lBQ3pCLE1BQU1DLGlCQUFpQixPQUNqQjZDLDBCQUEwQjlDLFlBQVk0QyxlQUFlLENBQUMzQztZQUU1RHBELEtBQUtnRyxjQUFjQztRQUNyQjtRQUVBLElBQUl2RCxxQkFBcUI7WUFDdkIsSUFBSSxDQUFDNUIseUJBQXlCLENBQUNvQyxPQUFPLENBQUMsQ0FBQ25CO2dCQUN0QyxNQUFNVyxzQkFBc0IsT0FDdEJ3RCw2QkFBNkJuRSxlQUFlZ0UsZUFBZSxDQUFDckQ7Z0JBRWxFMUMsS0FBS2dHLGNBQWNFO1lBQ3JCO1FBQ0Y7UUFFQSxPQUFPRjtJQUNUO0lBRUFHLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDNUYsT0FBTyxDQUFDNEYsZUFBZTtJQUFJO0lBRTNEQyxzQkFBc0JDLGdCQUFnQixFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUM5RixPQUFPLENBQUM2RixxQkFBcUIsQ0FBQ0M7SUFBbUI7SUFFdkdDLE1BQU1DLE9BQU8sRUFBRTtRQUNiLE1BQU1DLFFBQVFDLHNCQUFXO1FBRXpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBSSxNQUFNSixPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRSSxzQkFBVztRQUV6QixJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQU0sS0FBS04sT0FBTyxFQUFFO1FBQ1osTUFBTUMsUUFBUU0scUJBQVU7UUFFeEIsSUFBSSxDQUFDSixVQUFVLENBQUNGLE9BQU9EO0lBQ3pCO0lBRUFRLFFBQVFSLE9BQU8sRUFBRTtRQUNmLE1BQU1DLFFBQVFRLHdCQUFhO1FBRTNCLElBQUksQ0FBQ04sVUFBVSxDQUFDRixPQUFPRDtJQUN6QjtJQUVBVSxNQUFNVixPQUFPLEVBQUU7UUFDYixNQUFNQyxRQUFRVSxzQkFBVztRQUV6QixJQUFJLENBQUNSLFVBQVUsQ0FBQ0YsT0FBT0Q7SUFDekI7SUFFQUcsV0FBV0YsS0FBSyxFQUFFRCxPQUFPLEVBQUVZLFdBQVcsSUFBSSxFQUFFQyxZQUFZLElBQUksRUFBRTtRQUM1RCxJQUFJLENBQUNoSCxHQUFHLENBQUNpSCxLQUFLLENBQUNiLE9BQU9ELFNBQVNZLFVBQVVDO0lBQzNDO0lBRUFFLFdBQVdDLGVBQWUsRUFBRUMsdUJBQXVCLEVBQUU7UUFDbkQsTUFBTWpGLFdBQVcsSUFBSSxDQUFDRCxVQUFVLElBQzFCUCxpQkFBaUIsSUFBSSxFQUNyQjBGLHNCQUFzQnhILEtBQUtzSDtRQUVqQyxJQUFJLENBQUN6Ryx5QkFBeUIsR0FBRzJHLHFCQUFxQixHQUFHO1FBRXpELElBQUksQ0FBQzVHLHFCQUFxQixHQUFHNkcsSUFBQUEsdURBQXdDLEVBQUNIO1FBRXRFaEYsV0FDRW9GLElBQUFBLGlDQUFvQixFQUFDLElBQUksQ0FBQ3JILElBQUksRUFBRSxJQUFJLENBQUNNLFlBQVksRUFBRW1CLGdCQUFnQnlGLDJCQUNqRUksSUFBQUEsb0NBQXVCLEVBQUMsSUFBSSxDQUFDckgsT0FBTyxFQUFFLElBQUksQ0FBQ0ssWUFBWSxFQUFFbUIsZ0JBQWdCeUY7UUFFN0UsSUFBSSxDQUFDNUcsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLENBQUNDO1lBQ3pCQSxZQUFZbUUsVUFBVTtRQUN4QjtRQUVBLElBQUksQ0FBQzNHLFdBQVcsR0FBRztJQUNyQjtJQUVBLE1BQU1rSCxNQUFNQyxVQUFVLEVBQUU7UUFDdEIsTUFBTXRCLFFBQVFDLHNCQUFXLEVBQ25CRixVQUFVd0Isd0JBQWEsRUFDdkJaLFdBQVdXLFdBQVdFLFdBQVcsSUFDakNaLFlBQVlVLFdBQVdHLFlBQVk7UUFFekMsSUFBSSxDQUFDdkIsVUFBVSxDQUFDRixPQUFPRCxTQUFTWSxVQUFVQztRQUUxQyxNQUFNbkYsVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QixNQUFNLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQ3lCLFNBQVM2RjtRQUU3QixPQUFPQTtJQUNUO0lBRUEsTUFBTUksU0FBUztRQUNiLElBQUl4SCxXQUFXO1FBRWYsTUFBTWlDLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DYixpQkFBaUIsSUFBSSxFQUNyQm9HLHFCQUFxQkMsSUFBQUEsMEJBQWtCLEVBQUN6RixjQUFjWjtRQUU1RCxJQUFJb0csb0JBQW9CO1lBQ3RCLE1BQU1FLHVCQUF1QixFQUFFLEVBQ3pCQyxxQkFBcUIsTUFBTUMsSUFBQUEsMEJBQWtCLEVBQUMsSUFBSSxDQUFDM0gsWUFBWSxFQUFFeUg7WUFFdkUsSUFBSUMsb0JBQW9CO2dCQUN0QjVILFdBQVc7Z0JBRVgsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO2dCQUVoQixJQUFJLENBQUNFLFlBQVksR0FBR3lILHNCQUFzQixHQUFHO1lBQy9DO1FBQ0Y7UUFFQSxPQUFPM0g7SUFDVDtJQUVBOEgsU0FBUztRQUNQLE1BQU1DLG1CQUFtQixJQUFJLENBQUM3SCxZQUFZLENBQUM4SCxHQUFHLENBQUMsQ0FBQ3ZGO1lBQ3hDLE1BQU13RixrQkFBa0J4RixZQUFZcUYsTUFBTTtZQUUxQyxPQUFPRztRQUNULElBQ0FySSxPQUFPbUksa0JBQW1CLEdBQUc7UUFFbkMsT0FBT25JO0lBQ1Q7SUFFQSxPQUFPc0ksK0NBQStDQyxLQUFLLEVBQUV6SSxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFO1FBQzlHLElBQUlBLGtCQUFrQnFJLFdBQVc7WUFDL0JySSxnQkFBZ0JELFVBQVUsR0FBRztZQUU3QkEsV0FBV0QsU0FBUyxHQUFHO1lBRXZCQSxVQUFVRCxNQUFNLEdBQUc7WUFFbkJBLE9BQU9ELE1BQU8sR0FBRztZQUVqQkEsT0FBT0QsS0FBSyxHQUFHO1lBRWZBLE1BQU15SSxPQUFRLEdBQUc7WUFFakJBLFFBQVE5SSxnQkFBZ0IsR0FBRztRQUM3QjtRQUVBLE1BQU1XLFdBQVcsT0FDWEMsY0FBYyxPQUNkQyxlQUFlLEVBQUUsRUFDakJDLHdCQUF3QixNQUN4QkMsNEJBQTRCLE1BQzVCaUIsaUJBQWlCLElBQUk4RyxNQUFNekksS0FBS0MsTUFBTUMsTUFBTUMsU0FBU0MsVUFBVUMsZUFBZUMsVUFBVUMsYUFBYUMsY0FBY0MsdUJBQXVCQztRQUVoSixPQUFPaUI7SUFDVDtBQUNGIn0=