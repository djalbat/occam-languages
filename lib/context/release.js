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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGRlcHRoID0gMDtcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGhhc1ZlcmlmaWVkKCkge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZmllczsgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBpc1JlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gKHRoaXMuanNvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVsZWFzZWQ7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4ID0gbnVsbDtcblxuICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNMZW5ndGggPSB0eXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKTtcblxuICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRQcm9jZWR1cmVzID0gZmlsZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgZmlsZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocHJvY2VkdXJlcywgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZVByZWZpeGVzLCBmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLmxvZy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHRoaXMuaXNSZWxlYXNlZCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VDb250ZXh0c1RhaWwgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHNUYWlsOyAvLy9cblxuICAgIHRoaXMuY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmVsZWFzZWQgP1xuICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIG1lc3NhZ2UgPSBCUkVBS19NRVNTQUdFO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGF3YWl0IHRoaXMuY2FsbGJhY2soY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnZlcmlmaWVzID0gdmVyaWZpZXM7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihDbGFzcywgbG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcikge1xuICAgIGlmIChjdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXIgPSBjYWxsYmFjazsgLy8vXG5cbiAgICAgIGNhbGxiYWNrID0gZW50cmllczsgLy8vXG5cbiAgICAgIGVudHJpZXMgPSBqc29uOyAvLy9cblxuICAgICAganNvbiA9IG5hbWU7ICAvLy9cblxuICAgICAgbmFtZSA9IGxvZzsgLy8vXG5cbiAgICAgIGxvZyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gUmVsZWFzZUNvbnRleHQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IENsYXNzKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwidGFpbCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJjYWxsYmFjayIsImN1c3RvbUdyYW1tYXIiLCJ2ZXJpZmllcyIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFZlcmlmaWVzIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZ2V0RGVwdGgiLCJkZXB0aCIsImhhc1ZlcmlmaWVkIiwidmVyaWZpZWQiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFR5cGVQcmVmaXgiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInRyYWNlIiwibWVzc2FnZSIsImxldmVsIiwiVFJBQ0VfTEVWRUwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJERUJVR19MRVZFTCIsImluZm8iLCJJTkZPX0xFVkVMIiwid2FybmluZyIsIldBUk5JTkdfTEVWRUwiLCJlcnJvciIsIkVSUk9SX0xFVkVMIiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJ3cml0ZSIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0c1RhaWwiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsImJyZWFrIiwiQlJFQUtfTUVTU0FHRSIsImNvbnRleHQiLCJ2ZXJpZnkiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiQ2xhc3MiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7MkJBVFU7d0JBRXdCOytCQUNFOzZCQUNLOzJCQUNrQztBQUVoRyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFN0IsTUFBTUo7SUFDbkIsWUFBWUssR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QixDQUFFO1FBQ3BKLElBQUksQ0FBQ1YsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7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