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
var _necessary = require("necessary");
var _verify = require("../utilities/verify");
var _fileContext = require("../utilities/fileContext");
var _constants = require("../constants");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var push = _necessary.arrayUtilities.push, tail = _necessary.arrayUtilities.tail, first = _necessary.arrayUtilities.first;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log, name, json, entries, callback, customGrammar, verifies, initialised, fileContexts, combinedCustomGrammar, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
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
    _create_class(ReleaseContext, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getJSON",
            value: function getJSON() {
                return this.json;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "getCallback",
            value: function getCallback() {
                return this.callback;
            }
        },
        {
            key: "getCustomGrammar",
            value: function getCustomGrammar() {
                return this.customGrammar;
            }
        },
        {
            key: "getVerifies",
            value: function getVerifies() {
                return this.verifies;
            }
        },
        {
            key: "isInitialised",
            value: function isInitialised() {
                return this.initialised;
            }
        },
        {
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
            }
        },
        {
            key: "getCombinedCustomGrammar",
            value: function getCombinedCustomGrammar() {
                return this.combinedCustomGrammar;
            }
        },
        {
            key: "getDependencyReleaseContexts",
            value: function getDependencyReleaseContexts() {
                return this.dependencyReleaseContexts;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                var releaseContext = this; ///
                return releaseContext;
            }
        },
        {
            key: "isReleased",
            value: function isReleased() {
                var released = this.json !== null;
                return released;
            }
        },
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                var typePrefix = null;
                var includeDependencies = false, typePrefixes = this.getTypePrefixes(includeDependencies), typePrefixesLength = typePrefixes.length;
                if (typePrefixesLength === 1) {
                    var firstTypePrefix = first(typePrefixes);
                    typePrefix = firstTypePrefix; ///
                }
                return typePrefix;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLabels = fileContext.getLabels(includeRelease);
                    push(labels, fileContextLabels);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextLabels = releaseContext.getLabels(includeDependencies);
                        push(labels, releaseContextLabels);
                    });
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTypes = fileContext.getTypes(includeRelease);
                    push(types, fileContextTypes);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTypes = releaseContext.getTypes(includeDependencies);
                        push(types, releaseContextTypes);
                    });
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextRules = fileContext.getRules(includeRelease);
                    push(rules, fileContextRules);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextRules = releaseContext.getRules(includeDependencies);
                        push(rules, releaseContextRules);
                    });
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextAxioms = fileContext.getAxioms(includeRelease);
                    push(axioms, fileContextAxioms);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencies);
                        push(axioms, releaseContextAxioms);
                    });
                }
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLemmas = fileContext.getLemmas(includeRelease);
                    push(lemmas, fileContextLemmas);
                });
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTheorems = fileContext.getTheorems(includeRelease);
                    push(theorems, fileContextTheorems);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTheorems = releaseContext.getTheorems(includeDependencies);
                        push(theorems, releaseContextTheorems);
                    });
                }
                return theorems;
            }
        },
        {
            key: "getProcedures",
            value: function getProcedures() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var procedures = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextProcedures = fileContext.getProcedures(includeRelease);
                    push(procedures, fileContextProcedures);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextProcedures = releaseContext.getProcedures(includeDependencies);
                        push(procedures, releaseContextProcedures);
                    });
                }
                return procedures;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextMetaLemmas = fileContext.getMetaLemmas(includeRelease);
                    push(metaLemmas, fileContextMetaLemmas);
                });
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextConjectures = fileContext.getConjectures(includeRelease);
                    push(conjectures, fileContextConjectures);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConjectures = releaseContext.getConjectures(includeDependencies);
                        push(conjectures, releaseContextConjectures);
                    });
                }
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextCombinators = fileContext.getCombinators(includeRelease);
                    push(combinators, fileContextCombinators);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextCombinators = releaseContext.getCombinators(includeDependencies);
                        push(combinators, releaseContextCombinators);
                    });
                }
                return combinators;
            }
        },
        {
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTypePrefixes = fileContext.getTypePrefixes(includeRelease);
                    push(typePrefixes, fileContextTypePrefixes);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTypePrefixes = releaseContext.getTypePrefixes(includeDependencies);
                        push(typePrefixes, releaseContextTypePrefixes);
                    });
                }
                return typePrefixes;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextConstructors = fileContext.getConstructors(includeRelease);
                    push(constructors, fileContextConstructors);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConstructors = releaseContext.getConstructors(includeDependencies);
                        push(constructors, releaseContextConstructors);
                    });
                }
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextMetatheorems = fileContext.getMetatheorems(includeRelease);
                    push(metatheorems, fileContextMetatheorems);
                });
                if (includeDependencies) {
                    this.dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextMetatheorems = releaseContext.getMetatheorems(includeDependencies);
                        push(metatheorems, releaseContextMetatheorems);
                    });
                }
                return metatheorems;
            }
        },
        {
            key: "matchShortenedVersion",
            value: function matchShortenedVersion(shortenedVersion) {
                return this.entries.matchShortenedVersion(shortenedVersion);
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                return this.entries.findFile(filePath);
            }
        },
        {
            key: "findFileContext",
            value: function findFileContext(filePath) {
                var fileContext = this.fileContexts.find(function(fileContext) {
                    var filePathMatches = fileContext.matchFilePath(filePath);
                    if (filePathMatches) {
                        return true;
                    }
                });
                return fileContext;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var level = _constants.TRACE_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var level = _constants.DEBUG_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var level = _constants.INFO_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var level = _constants.WARNING_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var level = _constants.ERROR_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message) {
                var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, lineIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = 0;
                return depth;
            }
        },
        {
            key: "initialise",
            value: function initialise(releaseContexts, fileContextFromJSON) {
                var released = this.isReleased(), releaseContext = this; ///
                released ? (0, _fileContext.fileContextsFromJSON)(this.json, this.fileContexts, releaseContext, fileContextFromJSON) : (0, _fileContext.fileContextsFromEntries)(this.entries, this.fileContexts, releaseContext);
                this.dependencyReleaseContexts = tail(releaseContexts); ///
                this.initialised = true;
            }
        },
        {
            key: "break",
            value: function _break(filePath, lineIndex) {
                return _async_to_generator(function() {
                    var level, message, context;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                level = _constants.TRACE_LEVEL, message = _constants.BREAK_MESSAGE;
                                this.writeToLog(level, message, filePath, lineIndex);
                                context = this; ///
                                return [
                                    4,
                                    this.callback(context, filePath, lineIndex)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, typePrefixes, releaseContext, typePrefixesVerify, verifiedFileContexts, fileContextsVerify;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                typePrefixes = this.getTypePrefixes(), releaseContext = this, typePrefixesVerify = (0, _verify.verifyTypePrefixes)(typePrefixes, releaseContext);
                                if (!typePrefixesVerify) return [
                                    3,
                                    2
                                ];
                                verifiedFileContexts = [];
                                return [
                                    4,
                                    (0, _verify.verifyFileContexts)(this.fileContexts, verifiedFileContexts)
                                ];
                            case 1:
                                fileContextsVerify = _state.sent();
                                if (fileContextsVerify) {
                                    this.fileContexts = verifiedFileContexts; ///
                                    this.verifies = true;
                                    verifies = true;
                                }
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var fileContextsJSON = this.fileContexts.map(function(fileContext) {
                    var fileContextJSON = fileContext.toJSON();
                    return fileContextJSON;
                }), json = fileContextsJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromLogNameJSONEntriesCallbackAndCustomGrammar",
            value: function fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar) {
                var verifies = false, initialised = false, fileContexts = [], combinedCustomGrammar = null, dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log, name, json, entries, callback, customGrammar, verifies, initialised, fileContexts, combinedCustomGrammar, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcHVzaCwgdGFpbCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuanNvbiA9IGpzb247XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLnZlcmlmaWVzID0gdmVyaWZpZXM7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRWZXJpZmllcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllcztcbiAgfVxuXG4gIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZmluZEZpbGVDb250ZXh0KGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0cy5maW5kKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gZmlsZUNvbnRleHQubWF0Y2hGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICAgIGlmIChmaWxlUGF0aE1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMubG9nLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGRlcHRoID0gMDtcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBmaWxlQ29udGV4dEZyb21KU09OKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIHJlbGVhc2VkID9cbiAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09OKHRoaXMuanNvbiwgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBmaWxlQ29udGV4dEZyb21KU09OKSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTsgLy8vXG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMLFxuICAgICAgICAgIG1lc3NhZ2UgPSBCUkVBS19NRVNTQUdFO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGF3YWl0IHRoaXMuY2FsbGJhY2soY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gdmVyaWZpZWRGaWxlQ29udGV4dHM7IC8vL1xuXG4gICAgICAgIHRoaXMudmVyaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIpIHtcbiAgICBjb25zdCB2ZXJpZmllcyA9IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxpc2VkID0gZmFsc2UsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbnVsbCxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImZpcnN0IiwibG9nIiwibmFtZSIsImpzb24iLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJjdXN0b21HcmFtbWFyIiwidmVyaWZpZXMiLCJpbml0aWFsaXNlZCIsImZpbGVDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXROYW1lIiwiZ2V0SlNPTiIsImdldEVudHJpZXMiLCJnZXRDYWxsYmFjayIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXRWZXJpZmllcyIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dCIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVmaXhlcyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VHlwZVByZWZpeCIsImdldExhYmVscyIsImxhYmVscyIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJmaWxlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyIsInJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImZpbGVDb250ZXh0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwiZmluZEZpbGUiLCJmaWxlUGF0aCIsImZpbmRGaWxlQ29udGV4dCIsImZpbmQiLCJmaWxlUGF0aE1hdGNoZXMiLCJtYXRjaEZpbGVQYXRoIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJUUkFDRV9MRVZFTCIsIndyaXRlVG9Mb2ciLCJkZWJ1ZyIsIkRFQlVHX0xFVkVMIiwiaW5mbyIsIklORk9fTEVWRUwiLCJ3YXJuaW5nIiwiV0FSTklOR19MRVZFTCIsImVycm9yIiwiRVJST1JfTEVWRUwiLCJsaW5lSW5kZXgiLCJ3cml0ZSIsImdldERlcHRoIiwiZGVwdGgiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiZmlsZUNvbnRleHRGcm9tSlNPTiIsImZpbGVDb250ZXh0c0Zyb21KU09OIiwiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJicmVhayIsImNvbnRleHQiLCJCUkVBS19NRVNTQUdFIiwidmVyaWZ5IiwidHlwZVByZWZpeGVzVmVyaWZ5IiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7c0JBRXdCOzJCQUNPO3lCQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0YsSUFBUUMsT0FBc0JDLHlCQUFjLENBQXBDRCxNQUFNRSxPQUFnQkQseUJBQWMsQ0FBOUJDLE1BQU1DLFFBQVVGLHlCQUFjLENBQXhCRTtBQUVMLElBQUEsQUFBTUosK0JBQU47YUFBTUEsZUFDUEssR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLEVBQUVDLHlCQUF5QjtnQ0FEaklmO1FBRWpCLElBQUksQ0FBQ0ssR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR0E7UUFDN0IsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7O2tCQVpoQmY7O1lBZW5CZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxHQUFHO1lBQ2pCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxJQUFJO1lBQ2xCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxJQUFJO1lBQ2xCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxPQUFPO1lBQ3JCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxRQUFRO1lBQ3RCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxhQUFhO1lBQzNCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxRQUFRO1lBQ3RCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxXQUFXO1lBQ3pCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxZQUFZO1lBQzFCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDWCxxQkFBcUI7WUFDbkM7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNYLHlCQUF5QjtZQUN2Qzs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxFQUFHLEdBQUc7Z0JBRWpDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBWSxJQUFJLENBQUN2QixJQUFJLEtBQUs7Z0JBRWhDLE9BQU91QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGFBQWE7Z0JBRWpCLElBQU1DLHNCQUFzQixPQUN0QkMsZUFBZSxJQUFJLENBQUNDLGVBQWUsQ0FBQ0Ysc0JBQ3BDRyxxQkFBcUJGLGFBQWFHLE1BQU07Z0JBRTlDLElBQUlELHVCQUF1QixHQUFHO29CQUM1QixJQUFNRSxrQkFBa0JsQyxNQUFNOEI7b0JBRTlCRixhQUFhTSxpQkFBaUIsR0FBRztnQkFDbkM7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVU4sc0JBQUFBLGlFQUFzQjtnQkFDOUIsSUFBTU8sU0FBUyxFQUFFO2dCQUVqQixJQUFJLENBQUMzQixZQUFZLENBQUM0QixPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1DLGlCQUFpQixPQUNqQkMsb0JBQW9CRixZQUFZSCxTQUFTLENBQUNJO29CQUVoRDFDLEtBQUt1QyxRQUFRSTtnQkFDZjtnQkFFQSxJQUFJWCxxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2xCLHlCQUF5QixDQUFDMEIsT0FBTyxDQUFDLFNBQUNiO3dCQUN0QyxJQUFNSyxzQkFBc0IsT0FDdEJZLHVCQUF1QmpCLGVBQWVXLFNBQVMsQ0FBQ047d0JBRXREaEMsS0FBS3VDLFFBQVFLO29CQUNmO2dCQUNGO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVNiLHNCQUFBQSxpRUFBc0I7Z0JBQzdCLElBQU1jLFFBQVEsRUFBRTtnQkFFaEIsSUFBSSxDQUFDbEMsWUFBWSxDQUFDNEIsT0FBTyxDQUFDLFNBQUNDO29CQUN6QixJQUFNQyxpQkFBaUIsT0FDakJLLG1CQUFtQk4sWUFBWUksUUFBUSxDQUFDSDtvQkFFOUMxQyxLQUFLOEMsT0FBT0M7Z0JBQ2Q7Z0JBRUEsSUFBSWYscUJBQXFCO29CQUN2QixJQUFJLENBQUNsQix5QkFBeUIsQ0FBQzBCLE9BQU8sQ0FBQyxTQUFDYjt3QkFDdEMsSUFBTUssc0JBQXNCLE9BQ3RCZ0Isc0JBQXNCckIsZUFBZWtCLFFBQVEsQ0FBQ2I7d0JBRXBEaEMsS0FBSzhDLE9BQU9FO29CQUNkO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVNqQixzQkFBQUEsaUVBQXNCO2dCQUM3QixJQUFNa0IsUUFBUSxFQUFFO2dCQUVoQixJQUFJLENBQUN0QyxZQUFZLENBQUM0QixPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1DLGlCQUFpQixPQUNqQlMsbUJBQW1CVixZQUFZUSxRQUFRLENBQUNQO29CQUU5QzFDLEtBQUtrRCxPQUFPQztnQkFDZDtnQkFFQSxJQUFJbkIscUJBQXFCO29CQUN2QixJQUFJLENBQUNsQix5QkFBeUIsQ0FBQzBCLE9BQU8sQ0FBQyxTQUFDYjt3QkFDdEMsSUFBTUssc0JBQXNCLE9BQ3RCb0Isc0JBQXNCekIsZUFBZXNCLFFBQVEsQ0FBQ2pCO3dCQUVwRGhDLEtBQUtrRCxPQUFPRTtvQkFDZDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVckIsc0JBQUFBLGlFQUFzQjtnQkFDOUIsSUFBTXNCLFNBQVMsRUFBRTtnQkFFakIsSUFBSSxDQUFDMUMsWUFBWSxDQUFDNEIsT0FBTyxDQUFDLFNBQUNDO29CQUN6QixJQUFNQyxpQkFBaUIsT0FDakJhLG9CQUFvQmQsWUFBWVksU0FBUyxDQUFDWDtvQkFFaEQxQyxLQUFLc0QsUUFBUUM7Z0JBQ2Y7Z0JBRUEsSUFBSXZCLHFCQUFxQjtvQkFDdkIsSUFBSSxDQUFDbEIseUJBQXlCLENBQUMwQixPQUFPLENBQUMsU0FBQ2I7d0JBQ3RDLElBQU1LLHNCQUFzQixPQUN0QndCLHVCQUF1QjdCLGVBQWUwQixTQUFTLENBQUNyQjt3QkFFdERoQyxLQUFLc0QsUUFBUUU7b0JBQ2Y7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVXpCLHNCQUFBQSxpRUFBc0I7Z0JBQzlCLElBQU0wQixTQUFTLEVBQUU7Z0JBRWpCLElBQUksQ0FBQzlDLFlBQVksQ0FBQzRCLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTUMsaUJBQWlCLE9BQ2pCaUIsb0JBQW9CbEIsWUFBWWdCLFNBQVMsQ0FBQ2Y7b0JBRWhEMUMsS0FBSzBELFFBQVFDO2dCQUNmO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVk1QixzQkFBQUEsaUVBQXNCO2dCQUNoQyxJQUFNNkIsV0FBVyxFQUFFO2dCQUVuQixJQUFJLENBQUNqRCxZQUFZLENBQUM0QixPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1DLGlCQUFpQixPQUNqQm9CLHNCQUFzQnJCLFlBQVltQixXQUFXLENBQUNsQjtvQkFFcEQxQyxLQUFLNkQsVUFBVUM7Z0JBQ2pCO2dCQUVBLElBQUk5QixxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2xCLHlCQUF5QixDQUFDMEIsT0FBTyxDQUFDLFNBQUNiO3dCQUN0QyxJQUFNSyxzQkFBc0IsT0FDdEIrQix5QkFBeUJwQyxlQUFlaUMsV0FBVyxDQUFDNUI7d0JBRTFEaEMsS0FBSzZELFVBQVVFO29CQUNqQjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFjaEMsc0JBQUFBLGlFQUFzQjtnQkFDbEMsSUFBTWlDLGFBQWEsRUFBRTtnQkFFckIsSUFBSSxDQUFDckQsWUFBWSxDQUFDNEIsT0FBTyxDQUFDLFNBQUNDO29CQUN6QixJQUFNQyxpQkFBaUIsT0FDakJ3Qix3QkFBd0J6QixZQUFZdUIsYUFBYSxDQUFDdEI7b0JBRXhEMUMsS0FBS2lFLFlBQVlDO2dCQUNuQjtnQkFFQSxJQUFJbEMscUJBQXFCO29CQUN2QixJQUFJLENBQUNsQix5QkFBeUIsQ0FBQzBCLE9BQU8sQ0FBQyxTQUFDYjt3QkFDdEMsSUFBTUssc0JBQXNCLE9BQ3RCbUMsMkJBQTJCeEMsZUFBZXFDLGFBQWEsQ0FBQ2hDO3dCQUU5RGhDLEtBQUtpRSxZQUFZRTtvQkFDbkI7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBY3BDLHNCQUFBQSxpRUFBc0I7Z0JBQ2xDLElBQU1xQyxhQUFhLEVBQUU7Z0JBRXJCLElBQUksQ0FBQ3pELFlBQVksQ0FBQzRCLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTUMsaUJBQWlCLE9BQ2pCNEIsd0JBQXdCN0IsWUFBWTJCLGFBQWEsQ0FBQzFCO29CQUV4RDFDLEtBQUtxRSxZQUFZQztnQkFDbkI7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZXZDLHNCQUFBQSxpRUFBc0I7Z0JBQ25DLElBQU13QyxjQUFjLEVBQUU7Z0JBRXRCLElBQUksQ0FBQzVELFlBQVksQ0FBQzRCLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTUMsaUJBQWlCLE9BQ2pCK0IseUJBQXlCaEMsWUFBWThCLGNBQWMsQ0FBQzdCO29CQUUxRDFDLEtBQUt3RSxhQUFhQztnQkFDcEI7Z0JBRUEsSUFBSXpDLHFCQUFxQjtvQkFDdkIsSUFBSSxDQUFDbEIseUJBQXlCLENBQUMwQixPQUFPLENBQUMsU0FBQ2I7d0JBQ3RDLElBQU1LLHNCQUFzQixPQUN0QjBDLDRCQUE0Qi9DLGVBQWU0QyxjQUFjLENBQUN2Qzt3QkFFaEVoQyxLQUFLd0UsYUFBYUU7b0JBQ3BCO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWUzQyxzQkFBQUEsaUVBQXNCO2dCQUNuQyxJQUFNNEMsY0FBYyxFQUFFO2dCQUV0QixJQUFJLENBQUNoRSxZQUFZLENBQUM0QixPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1DLGlCQUFpQixPQUNqQm1DLHlCQUF5QnBDLFlBQVlrQyxjQUFjLENBQUNqQztvQkFFMUQxQyxLQUFLNEUsYUFBYUM7Z0JBQ3BCO2dCQUVBLElBQUk3QyxxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2xCLHlCQUF5QixDQUFDMEIsT0FBTyxDQUFDLFNBQUNiO3dCQUN0QyxJQUFNSyxzQkFBc0IsT0FDdEI4Qyw0QkFBNEJuRCxlQUFlZ0QsY0FBYyxDQUFDM0M7d0JBRWhFaEMsS0FBSzRFLGFBQWFFO29CQUNwQjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQTFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZ0JGLHNCQUFBQSxpRUFBc0I7Z0JBQ3BDLElBQU1DLGVBQWUsRUFBRTtnQkFFdkIsSUFBSSxDQUFDckIsWUFBWSxDQUFDNEIsT0FBTyxDQUFDLFNBQUNDO29CQUN6QixJQUFNQyxpQkFBaUIsT0FDakJxQywwQkFBMEJ0QyxZQUFZUCxlQUFlLENBQUNRO29CQUU1RDFDLEtBQUtpQyxjQUFjOEM7Z0JBQ3JCO2dCQUVBLElBQUkvQyxxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2xCLHlCQUF5QixDQUFDMEIsT0FBTyxDQUFDLFNBQUNiO3dCQUN0QyxJQUFNSyxzQkFBc0IsT0FDdEJnRCw2QkFBNkJyRCxlQUFlTyxlQUFlLENBQUNGO3dCQUVsRWhDLEtBQUtpQyxjQUFjK0M7b0JBQ3JCO2dCQUNGO2dCQUVBLE9BQU8vQztZQUNUOzs7WUFFQWdELEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZ0JqRCxzQkFBQUEsaUVBQXNCO2dCQUNwQyxJQUFNa0QsZUFBZSxFQUFFO2dCQUV2QixJQUFJLENBQUN0RSxZQUFZLENBQUM0QixPQUFPLENBQUMsU0FBQ0M7b0JBQ3pCLElBQU1DLGlCQUFpQixPQUNqQnlDLDBCQUEwQjFDLFlBQVl3QyxlQUFlLENBQUN2QztvQkFFNUQxQyxLQUFLa0YsY0FBY0M7Z0JBQ3JCO2dCQUVBLElBQUluRCxxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2xCLHlCQUF5QixDQUFDMEIsT0FBTyxDQUFDLFNBQUNiO3dCQUN0QyxJQUFNSyxzQkFBc0IsT0FDdEJvRCw2QkFBNkJ6RCxlQUFlc0QsZUFBZSxDQUFDakQ7d0JBRWxFaEMsS0FBS2tGLGNBQWNFO29CQUNyQjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFnQnJELHNCQUFBQSxpRUFBc0I7Z0JBQ3BDLElBQU1zRCxlQUFlLEVBQUU7Z0JBRXZCLElBQUksQ0FBQzFFLFlBQVksQ0FBQzRCLE9BQU8sQ0FBQyxTQUFDQztvQkFDekIsSUFBTUMsaUJBQWlCLE9BQ2pCNkMsMEJBQTBCOUMsWUFBWTRDLGVBQWUsQ0FBQzNDO29CQUU1RDFDLEtBQUtzRixjQUFjQztnQkFDckI7Z0JBRUEsSUFBSXZELHFCQUFxQjtvQkFDdkIsSUFBSSxDQUFDbEIseUJBQXlCLENBQUMwQixPQUFPLENBQUMsU0FBQ2I7d0JBQ3RDLElBQU1LLHNCQUFzQixPQUN0QndELDZCQUE2QjdELGVBQWUwRCxlQUFlLENBQUNyRDt3QkFFbEVoQyxLQUFLc0YsY0FBY0U7b0JBQ3JCO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNuRixPQUFPLENBQUNrRixxQkFBcUIsQ0FBQ0M7WUFBbUI7OztZQUV2R0MsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNyRixPQUFPLENBQUNvRixRQUFRLENBQUNDO1lBQVc7OztZQUU3REMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkQsUUFBUTtnQkFDdEIsSUFBTW5ELGNBQWMsSUFBSSxDQUFDN0IsWUFBWSxDQUFDa0YsSUFBSSxDQUFDLFNBQUNyRDtvQkFDMUMsSUFBTXNELGtCQUFrQnRELFlBQVl1RCxhQUFhLENBQUNKO29CQUVsRCxJQUFJRyxpQkFBaUI7d0JBQ25CLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT3REO1lBQ1Q7OztZQUVBd0QsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUMsUUFBUUMsc0JBQVc7Z0JBRXpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixPQUFPRDtZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixPQUFPO2dCQUNYLElBQU1DLFFBQVFJLHNCQUFXO2dCQUV6QixJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsT0FBT0Q7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS04sT0FBTztnQkFDVixJQUFNQyxRQUFRTSxxQkFBVTtnQkFFeEIsSUFBSSxDQUFDSixVQUFVLENBQUNGLE9BQU9EO1lBQ3pCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLE9BQU87Z0JBQ2IsSUFBTUMsUUFBUVEsd0JBQWE7Z0JBRTNCLElBQUksQ0FBQ04sVUFBVSxDQUFDRixPQUFPRDtZQUN6Qjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNVixPQUFPO2dCQUNYLElBQU1DLFFBQVFVLHNCQUFXO2dCQUV6QixJQUFJLENBQUNSLFVBQVUsQ0FBQ0YsT0FBT0Q7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0YsS0FBSyxFQUFFRCxPQUFPO29CQUFFTixXQUFBQSxpRUFBVyxNQUFNa0IsWUFBQUEsaUVBQVk7Z0JBQ3RELElBQUksQ0FBQzFHLEdBQUcsQ0FBQzJHLEtBQUssQ0FBQ1osT0FBT0QsU0FBU04sVUFBVWtCO1lBQzNDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVE7Z0JBRWQsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxlQUFlLEVBQUVDLG1CQUFtQjtnQkFDN0MsSUFBTXZGLFdBQVcsSUFBSSxDQUFDRCxVQUFVLElBQzFCRCxpQkFBaUIsSUFBSSxFQUFHLEdBQUc7Z0JBRWpDRSxXQUNFd0YsSUFBQUEsaUNBQW9CLEVBQUMsSUFBSSxDQUFDL0csSUFBSSxFQUFFLElBQUksQ0FBQ00sWUFBWSxFQUFFZSxnQkFBZ0J5Rix1QkFDakVFLElBQUFBLG9DQUF1QixFQUFDLElBQUksQ0FBQy9HLE9BQU8sRUFBRSxJQUFJLENBQUNLLFlBQVksRUFBRWU7Z0JBRTdELElBQUksQ0FBQ2IseUJBQXlCLEdBQUdaLEtBQUtpSCxrQkFBa0IsR0FBRztnQkFFM0QsSUFBSSxDQUFDeEcsV0FBVyxHQUFHO1lBQ3JCOzs7WUFFTTRHLEtBQUFBO21CQUFOLFNBQU1BLE9BQU0zQixRQUFRLEVBQUVrQixTQUFTOzt3QkFDdkJYLE9BQ0FELFNBSUFzQjs7OztnQ0FMQXJCLFFBQVFDLHNCQUFXLEVBQ25CRixVQUFVdUIsd0JBQWE7Z0NBRTdCLElBQUksQ0FBQ3BCLFVBQVUsQ0FBQ0YsT0FBT0QsU0FBU04sVUFBVWtCO2dDQUVwQ1UsVUFBVSxJQUFJLEVBQUUsR0FBRztnQ0FFekI7O29DQUFNLElBQUksQ0FBQ2hILFFBQVEsQ0FBQ2dILFNBQVM1QixVQUFVa0I7OztnQ0FBdkM7Ozs7OztnQkFDRjs7OztZQUVNWSxLQUFBQTttQkFBTixTQUFNQTs7d0JBQ0FoSCxVQUVFdUIsY0FDQU4sZ0JBQ0FnRyxvQkFHRUMsc0JBQ0FDOzs7O2dDQVJKbkgsV0FBVztnQ0FFVHVCLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DUCxpQkFBaUIsSUFBSSxFQUNyQmdHLHFCQUFxQkcsSUFBQUEsMEJBQWtCLEVBQUM3RixjQUFjTjtxQ0FFeERnRyxvQkFBQUE7Ozs7Z0NBQ0lDO2dDQUNxQjs7b0NBQU1HLElBQUFBLDBCQUFrQixFQUFDLElBQUksQ0FBQ25ILFlBQVksRUFBRWdIOzs7Z0NBQWpFQyxxQkFBcUI7Z0NBRTNCLElBQUlBLG9CQUFvQjtvQ0FDdEIsSUFBSSxDQUFDakgsWUFBWSxHQUFHZ0gsc0JBQXNCLEdBQUc7b0NBRTdDLElBQUksQ0FBQ2xILFFBQVEsR0FBRztvQ0FFaEJBLFdBQVc7Z0NBQ2I7OztnQ0FHRjs7b0NBQU9BOzs7O2dCQUNUOzs7O1lBRUFzSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ3JILFlBQVksQ0FBQ3NILEdBQUcsQ0FBQyxTQUFDekY7b0JBQ3hDLElBQU0wRixrQkFBa0IxRixZQUFZdUYsTUFBTTtvQkFFMUMsT0FBT0c7Z0JBQ1QsSUFDQTdILE9BQU8ySCxrQkFBbUIsR0FBRztnQkFFbkMsT0FBTzNIO1lBQ1Q7Ozs7WUFFTzhILEtBQUFBO21CQUFQLFNBQU9BLCtDQUErQ2hJLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxhQUFhO2dCQUNyRyxJQUFNQyxXQUFXLE9BQ1hDLGNBQWMsT0FDZEMsZUFBZSxFQUFFLEVBQ2pCQyx3QkFBd0IsTUFDeEJDLDRCQUE0QixNQUM1QmEsaUJBQWlCLElBM2RONUIsZUEyZHlCSyxLQUFLQyxNQUFNQyxNQUFNQyxTQUFTQyxVQUFVQyxlQUFlQyxVQUFVQyxhQUFhQyxjQUFjQyx1QkFBdUJDO2dCQUV6SixPQUFPYTtZQUNUOzs7V0E5ZG1CNUIifQ==