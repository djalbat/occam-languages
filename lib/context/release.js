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
            key: "getDependencies",
            value: function getDependencies() {
                return this.entries.getDependencies();
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
                }) || null;
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
            value: function initialise(releaseContexts, FileContextFromFilePath) {
                var released = this.isReleased(), releaseContext = this, releaseContextsTail = tail(releaseContext);
                released ? (0, _fileContext.fileContextsFromJSON)(this.json, this.fileContexts, releaseContext, FileContextFromFilePath) : (0, _fileContext.fileContextsFromEntries)(this.entries, this.fileContexts, releaseContext, FileContextFromFilePath);
                this.dependencyReleaseContexts = releaseContextsTail; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlUeXBlUHJlZml4ZXMsIHZlcmlmeUZpbGVDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5pbXBvcnQgeyBmaWxlQ29udGV4dHNGcm9tSlNPTiwgZmlsZUNvbnRleHRzRnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHB1c2gsIHRhaWwsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY29tYmluZWRDdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy52ZXJpZmllcyA9IHZlcmlmaWVzO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0VmVyaWZpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZXM7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVQcmVmaXhlc0xlbmd0aCA9IHR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGVQcmVmaXggPSBmaXJzdCh0eXBlUHJlZml4ZXMpO1xuXG4gICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFByb2NlZHVyZXMgPSBmaWxlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCBmaWxlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGFMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCBmaWxlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmZpbmRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGZpbmRGaWxlQ29udGV4dChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5maWxlQ29udGV4dHMuZmluZCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoTWF0Y2hlcyA9IGZpbGVDb250ZXh0Lm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBERUJVR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMubG9nLndyaXRlKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGRlcHRoID0gMDtcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzVGFpbCA9IHRhaWwocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgcmVsZWFzZWQgP1xuICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0LCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHNUYWlsOyAvLy9cblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgbWVzc2FnZSA9IEJSRUFLX01FU1NBR0U7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgYXdhaXQgdGhpcy5jYWxsYmFjayhjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gYXdhaXQgdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG5cbiAgICAgICAgdGhpcy52ZXJpZmllcyA9IHRydWU7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcikge1xuICAgIGNvbnN0IHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJ0YWlsIiwiZmlyc3QiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJjYWxsYmFjayIsImN1c3RvbUdyYW1tYXIiLCJ2ZXJpZmllcyIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFZlcmlmaWVzIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZWZpeGVzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJyZWxlYXNlQ29udGV4dFByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImZpbGVDb250ZXh0VHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJmaW5kRmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGVDb250ZXh0IiwiZmluZCIsImZpbGVQYXRoTWF0Y2hlcyIsIm1hdGNoRmlsZVBhdGgiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImxpbmVJbmRleCIsIndyaXRlIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJGaWxlQ29udGV4dEZyb21GaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0c1RhaWwiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiYnJlYWsiLCJjb250ZXh0IiwiQlJFQUtfTUVTU0FHRSIsInZlcmlmeSIsInR5cGVQcmVmaXhlc1ZlcmlmeSIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzVmVyaWZ5IiwidmVyaWZ5VHlwZVByZWZpeGVzIiwidmVyaWZ5RmlsZUNvbnRleHRzIiwidG9KU09OIiwiZmlsZUNvbnRleHRzSlNPTiIsIm1hcCIsImZpbGVDb250ZXh0SlNPTiIsImZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVO3NCQUV3QjsyQkFDTzt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhHLElBQVFDLE9BQXNCQyx5QkFBYyxDQUFwQ0QsTUFBTUUsT0FBZ0JELHlCQUFjLENBQTlCQyxNQUFNQyxRQUFVRix5QkFBYyxDQUF4QkU7QUFFTCxJQUFBLEFBQU1KLCtCQUFOO2FBQU1BLGVBQ1BLLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLHFCQUFxQixFQUFFQyx5QkFBeUI7Z0NBRGpJZjtRQUVqQixJQUFJLENBQUNLLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFdBQVcs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