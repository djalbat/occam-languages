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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBtYXRjaERlcGVuZGVuY3lOYW1lKGRlcGVuZGVuY3lOYW1lKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gZGVwZW5kZW5jeU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbDtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgZGVwdGggPSAwO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaGFzVmVyaWZpZWQoKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmaWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVQcmVmaXhlc0xlbmd0aCA9IHR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGVQcmVmaXggPSBmaXJzdCh0eXBlUHJlZml4ZXMpO1xuXG4gICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFByb2NlZHVyZXMgPSBmaWxlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCBmaWxlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGFMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCBmaWxlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMubG9nLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzVGFpbCA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0c1RhaWw7IC8vL1xuXG4gICAgdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZWxlYXNlZCA/XG4gICAgICBmaWxlQ29udGV4dHNGcm9tSlNPTih0aGlzLmpzb24sIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCwgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpIDpcbiAgICAgICAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXModGhpcy5lbnRyaWVzLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgbWVzc2FnZSA9IEJSRUFLX01FU1NBR0U7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgYXdhaXQgdGhpcy5jYWxsYmFjayhjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gYXdhaXQgdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudmVyaWZpZXMgPSB2ZXJpZmllcztcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0cyA9IHZlcmlmaWVkRmlsZUNvbnRleHRzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyKENsYXNzLCBsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKSB7XG4gICAgaWYgKGN1c3RvbUdyYW1tYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3VzdG9tR3JhbW1hciA9IGNhbGxiYWNrOyAvLy9cblxuICAgICAgY2FsbGJhY2sgPSBlbnRyaWVzOyAvLy9cblxuICAgICAgZW50cmllcyA9IGpzb247IC8vL1xuXG4gICAgICBqc29uID0gbmFtZTsgIC8vL1xuXG4gICAgICBuYW1lID0gbG9nOyAvLy9cblxuICAgICAgbG9nID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBSZWxlYXNlQ29udGV4dDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZpZXMgPSBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsaXNlZCA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgQ2xhc3MobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hciwgdmVyaWZpZXMsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsInB1c2giLCJ0YWlsIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxvZyIsIm5hbWUiLCJqc29uIiwiZW50cmllcyIsImNhbGxiYWNrIiwiY3VzdG9tR3JhbW1hciIsInZlcmlmaWVzIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0TmFtZSIsImdldEpTT04iLCJnZXRFbnRyaWVzIiwiZ2V0Q2FsbGJhY2siLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0VmVyaWZpZXMiLCJpc0luaXRpYWxpc2VkIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsIm1hdGNoRGVwZW5kZW5jeU5hbWUiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGVuY3lOYW1lTWF0Y2hlcyIsImdldFJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJnZXRDb250ZXh0IiwiY29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJoYXNWZXJpZmllZCIsInZlcmlmaWVkIiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZWZpeGVzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJyZWxlYXNlQ29udGV4dFByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImZpbGVDb250ZXh0VHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImZpbGVQYXRoIiwibGluZUluZGV4Iiwid3JpdGUiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dHNUYWlsIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsImZpbGVDb250ZXh0c0Zyb21KU09OIiwiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJicmVhayIsIkJSRUFLX01FU1NBR0UiLCJ2ZXJpZnkiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiQ2xhc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7MkJBVFU7d0JBRXdCOytCQUNFOzZCQUNLOzJCQUNrQztBQUVoRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFN0IsTUFB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