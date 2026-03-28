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
        this.fileContexts.forEach((fileContext)=>{
            fileContext.initialise();
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBtYXRjaERlcGVuZGVuY3lOYW1lKGRlcGVuZGVuY3lOYW1lKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gZGVwZW5kZW5jeU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbDtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgZGVwdGggPSAwO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaGFzVmVyaWZpZWQoKSB7XG4gICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmaWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVQcmVmaXhlc0xlbmd0aCA9IHR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGVQcmVmaXggPSBmaXJzdCh0eXBlUHJlZml4ZXMpO1xuXG4gICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFByb2NlZHVyZXMgPSBmaWxlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCBmaWxlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGFMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCBmaWxlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMubG9nLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzVGFpbCA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0c1RhaWw7IC8vL1xuXG4gICAgdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZWxlYXNlZCA/XG4gICAgICBmaWxlQ29udGV4dHNGcm9tSlNPTih0aGlzLmpzb24sIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCwgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpIDpcbiAgICAgICAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXModGhpcy5lbnRyaWVzLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIG1lc3NhZ2UgPSBCUkVBS19NRVNTQUdFO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGF3YWl0IHRoaXMuY2FsbGJhY2soY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnZlcmlmaWVzID0gdmVyaWZpZXM7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihDbGFzcywgbG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcikge1xuICAgIGlmIChjdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXIgPSBjYWxsYmFjazsgLy8vXG5cbiAgICAgIGNhbGxiYWNrID0gZW50cmllczsgLy8vXG5cbiAgICAgIGVudHJpZXMgPSBqc29uOyAvLy9cblxuICAgICAganNvbiA9IG5hbWU7ICAvLy9cblxuICAgICAgbmFtZSA9IGxvZzsgLy8vXG5cbiAgICAgIGxvZyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gUmVsZWFzZUNvbnRleHQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IENsYXNzKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwidGFpbCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJjYWxsYmFjayIsImN1c3RvbUdyYW1tYXIiLCJ2ZXJpZmllcyIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFZlcmlmaWVzIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJtYXRjaERlcGVuZGVuY3lOYW1lIiwiZGVwZW5kZW5jeU5hbWUiLCJkZXBlbmRlbmN5TmFtZU1hdGNoZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJnZXREZXB0aCIsImRlcHRoIiwiaGFzVmVyaWZpZWQiLCJ2ZXJpZmllZCIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVmaXhlcyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VHlwZVByZWZpeCIsImdldExhYmVscyIsImxhYmVscyIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJmaWxlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyIsInJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImZpbGVDb250ZXh0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJnZXREZXBlbmRlbmNpZXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJUUkFDRV9MRVZFTCIsIndyaXRlVG9Mb2ciLCJkZWJ1ZyIsIkRFQlVHX0xFVkVMIiwiaW5mbyIsIklORk9fTEVWRUwiLCJ3YXJuaW5nIiwiV0FSTklOR19MRVZFTCIsImVycm9yIiwiRVJST1JfTEVWRUwiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsIndyaXRlIiwiaW5pdGlhbGlzZSIsInJlbGVhc2VDb250ZXh0cyIsIkZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHRzVGFpbCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiYnJlYWsiLCJCUkVBS19NRVNTQUdFIiwidmVyaWZ5IiwidHlwZVByZWZpeGVzVmVyaWZ5IiwidmVyaWZ5VHlwZVByZWZpeGVzIiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNWZXJpZnkiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciIsIkNsYXNzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXFCQTs7OzJCQVRVO3dC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