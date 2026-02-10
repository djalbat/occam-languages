"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createReleaseContext () {
        return createReleaseContext;
    },
    get default () {
        return _default;
    },
    get initialiseReleaseContext () {
        return initialiseReleaseContext;
    },
    get releaseContextFromJSON () {
        return releaseContextFromJSON;
    },
    get releaseContextFromProject () {
        return releaseContextFromProject;
    },
    get verifyReleaseContext () {
        return verifyReleaseContext;
    }
});
var _necessary = require("necessary");
var _occammodel = require("occam-model");
var _release = /*#__PURE__*/ _interop_require_default(require("../context/release"));
var _dependency = require("../utilities/dependency");
var _customGrammar = require("../utilities/customGrammar");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var last = _necessary.arrayUtilities.last, isMetaJSONFileValid = _occammodel.metaJSONUtilities.isMetaJSONFileValid;
function createReleaseContext(dependency, dependentNames, context) {
    return _async_to_generator(function() {
        var success, releaseContextMap, dependencyName, releaseName, releaseContext, log, releaseMatchesDependency, log1, dependencyString, dependentNamesLength, lastDependentName, dependentName, releaseContextFromDependency, releaseContext1, releaseContextCreated, releaseMatchesDependency1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    success = false;
                    releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
                    if (!(releaseContext !== null)) return [
                        3,
                        1
                    ];
                    log = context.log, releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
                    if (releaseMatchesDependency) {
                        log.debug("The '".concat(releaseName, "' context has already been created."));
                        success = true;
                    }
                    return [
                        3,
                        5
                    ];
                case 1:
                    log1 = context.log, dependencyString = dependency.asString(), dependentNamesLength = dependentNames.length;
                    if (dependentNamesLength === 0) {
                        log1.info("Creating the '".concat(releaseName, "' context..."));
                    } else {
                        lastDependentName = last(dependentNames), dependentName = lastDependentName; ///
                        log1.info("Creating the '".concat(releaseName, "' context given the '").concat(dependentName, "' dependant's '").concat(dependencyString, "' dependency..."));
                    }
                    releaseContextFromDependency = context.releaseContextFromDependency;
                    return [
                        4,
                        releaseContextFromDependency(dependency, context)
                    ];
                case 2:
                    releaseContext1 = _state.sent(), releaseContextCreated = checkReleaseContextCreated(releaseContext1, dependency, context);
                    if (!releaseContextCreated) return [
                        3,
                        4
                    ];
                    releaseMatchesDependency1 = checkReleaseMatchesDependency(releaseContext1, dependency, dependentNames, context);
                    if (!releaseMatchesDependency1) return [
                        3,
                        4
                    ];
                    releaseContextMap[releaseName] = releaseContext1;
                    return [
                        4,
                        createDependencyReleaseContexts(dependency, releaseContext1, dependentNames, context)
                    ];
                case 3:
                    success = _state.sent();
                    _state.label = 4;
                case 4:
                    success ? log1.debug("...created the '".concat(releaseName, "' context.")) : log1.warning("...unable to create the '".concat(releaseName, "' context."));
                    _state.label = 5;
                case 5:
                    return [
                        2,
                        success
                    ];
            }
        });
    })();
}
function verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap) {
    return _async_to_generator(function() {
        var releaseVerifies, releaseContext, released, _$dependentName, _$dependentReleased, dependencyReleaseContextsVerify, releaseContextVerified, releaseContextVerifies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    releaseVerifies = false;
                    releaseContext = releaseContextMap[releaseName];
                    if (!(releaseContext !== null)) return [
                        3,
                        6
                    ];
                    released = releaseContext.isReleased();
                    if (!released) return [
                        3,
                        1
                    ];
                    releaseVerifies = true;
                    return [
                        3,
                        6
                    ];
                case 1:
                    if (!dependentReleased) return [
                        3,
                        2
                    ];
                    releaseContext.warning("The '".concat(releaseName, "' project cannot be verifies because its '").concat(dependentName, "' dependent is a package."));
                    return [
                        3,
                        6
                    ];
                case 2:
                    _$dependentName = releaseName, _$dependentReleased = released;
                    return [
                        4,
                        verifyDependencyReleaseContexts(releaseContext, _$dependentName, _$dependentReleased, releaseContextMap)
                    ];
                case 3:
                    dependencyReleaseContextsVerify = _state.sent();
                    if (!dependencyReleaseContextsVerify) return [
                        3,
                        6
                    ];
                    releaseContextVerified = releaseContext.hasVerified();
                    if (!releaseContextVerified) return [
                        3,
                        4
                    ];
                    releaseVerifies = true;
                    return [
                        3,
                        6
                    ];
                case 4:
                    releaseContext.info("Verifying the '".concat(releaseName, "' project..."));
                    return [
                        4,
                        releaseContext.verify()
                    ];
                case 5:
                    releaseContextVerifies = _state.sent();
                    if (releaseContextVerifies) {
                        releaseContext.info("...verified the '".concat(releaseName, "' project."));
                        releaseVerifies = true;
                    }
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        releaseVerifies
                    ];
            }
        });
    })();
}
function initialiseReleaseContext(dependency, context) {
    var releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
    if (releaseContext === null) {
        var log = context.log;
        log.warning("Unable to initialise the '".concat(dependencyName, "' context because it has not been created."));
    } else {
        var releaseContextInitialised = releaseContext.isInitialised();
        if (!releaseContextInitialised) {
            initialiseDependencyReleaseContexts(dependency, releaseContext, context);
            var log1 = context.log, releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);
            log1.info("Initialising the '".concat(dependencyName, "' context..."));
            var FileContextFromFilePath = context.FileContextFromFilePath;
            releaseContext.initialise(releaseContexts, FileContextFromFilePath);
            log1.debug("...initialised the '".concat(dependencyName, "' context."));
        }
    }
}
function releaseContextFromJSON(json, context) {
    var log = context.log, callback = context.callback, name = json.name;
    context = json.context; ///
    var entries = json.entries;
    json = entries; ///
    entries = _occammodel.Entries.fromJSON(json);
    var contextJSON = context; ///
    json = contextJSON; ///
    var customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
    return releaseContext;
}
function releaseContextFromProject(project, context) {
    var releaseContext = null;
    var metaJSONFile = project.getMetaJSONFile();
    if (metaJSONFile !== null) {
        var metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);
        if (metaJSONFileValid) {
            var log = context.log, callback = context.callback, name = project.getName(), json = null, entries = project.getEntries(), customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries);
            releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
        }
    }
    return releaseContext;
}
var _default = {
    createReleaseContext: createReleaseContext,
    verifyReleaseContext: verifyReleaseContext,
    releaseContextFromJSON: releaseContextFromJSON,
    initialiseReleaseContext: initialiseReleaseContext,
    releaseContextFromProject: releaseContextFromProject
};
function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context) {
    return _async_to_generator(function() {
        var success, dependencyName, dependencies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dependencyName = dependency.getName(), dependencies = releaseContext.getDependencies();
                    dependentNames = _to_consumable_array(dependentNames).concat([
                        dependencyName
                    ]); ///
                    return [
                        4,
                        (0, _dependency.asyncEveryDependency)(dependencies, function(dependency) {
                            return _async_to_generator(function() {
                                var success, cyclicDependencyExists;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            success = false;
                                            cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);
                                            if (!!cyclicDependencyExists) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                createReleaseContext(dependency, dependentNames, context)
                                            ];
                                        case 1:
                                            success = _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            return [
                                                2,
                                                success
                                            ];
                                    }
                                });
                            })();
                        })
                    ];
                case 1:
                    success = _state.sent();
                    return [
                        2,
                        success
                    ];
            }
        });
    })();
}
function verifyDependencyReleaseContexts(releaseContext, dependentName, dependentReleased, releaseContextMap) {
    return _async_to_generator(function() {
        var dependencies, dependencyReleaseContextsVerify;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    dependencies = releaseContext.getDependencies();
                    return [
                        4,
                        (0, _dependency.asyncEveryDependency)(dependencies, function(dependency) {
                            return _async_to_generator(function() {
                                var name, releaseName, releaseContextVerifies;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            name = dependency.getName(), releaseName = name;
                                            return [
                                                4,
                                                verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap)
                                            ];
                                        case 1:
                                            releaseContextVerifies = _state.sent();
                                            if (releaseContextVerifies) {
                                                return [
                                                    2,
                                                    true
                                                ];
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        })
                    ];
                case 1:
                    dependencyReleaseContextsVerify = _state.sent();
                    return [
                        2,
                        dependencyReleaseContextsVerify
                    ];
            }
        });
    })();
}
function retrieveReleaseContexts(releaseContext, releaseContextMap) {
    var releaseContexts = [], remainingReleaseContext = releaseContext, remainingReleaseContexts = [
        remainingReleaseContext
    ];
    var remainingReleaseContextsLength = remainingReleaseContexts.length;
    while(remainingReleaseContextsLength > 0){
        var remainingReleaseContext1 = remainingReleaseContexts.shift(), _$releaseContext = remainingReleaseContext1; ///
        releaseContexts.push(_$releaseContext);
        var dependencies = _$releaseContext.getDependencies();
        dependencies.forEachDependency(function(dependency) {
            var dependencyName = dependency.getName(), releaseName = dependencyName, _$releaseContext = releaseContextMap[releaseName], releaseContextsIncludesReleaseContext = releaseContexts.includes(_$releaseContext), remainingReleaseContextsIncludesReleaseContext = remainingReleaseContexts.includes(_$releaseContext);
            if (!releaseContextsIncludesReleaseContext && !remainingReleaseContextsIncludesReleaseContext) {
                var remainingReleaseContext = _$releaseContext; ///
                remainingReleaseContexts.push(remainingReleaseContext);
            }
        });
        remainingReleaseContextsLength = remainingReleaseContexts.length;
    }
    return releaseContexts;
}
function checkReleaseContextCreated(releaseContext, dependency, context) {
    var releaseContextCreated = releaseContext !== null;
    if (!releaseContextCreated) {
        var log = context.log, dependencyName = dependency.getName(), releaseName = dependencyName; ///
        log.warning("The '".concat(releaseName, "' context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch."));
    }
    return releaseContextCreated;
}
function checkCyclicDependencyExists(dependency, dependentNames, context) {
    var dependencyName = dependency.getName(), dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName), cyclicDependencyExists = dependentNamesIncludesDependencyName; ///
    if (cyclicDependencyExists) {
        var log = context.log, firstDependentName = first(dependentNames), dependencyNames = _to_consumable_array(dependentNames).concat([
            firstDependentName
        ]), dependencyNamesString = dependencyNames.join("' -> '");
        log.warning("There is a cyclic dependency, '".concat(dependencyNamesString, "'."));
    }
    return cyclicDependencyExists;
}
function checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context) {
    var releaseMatchesDependency = true;
    var shortenedVersion = dependency.getShortedVersion();
    if (shortenedVersion !== null) {
        var entriesMatchShortenedVersion = releaseContext.matchShortenedVersion(shortenedVersion);
        if (!entriesMatchShortenedVersion) {
            var log = context.log, version = releaseContext.getVersion(), lastDependentName = last(dependentNames), dependentName = lastDependentName, versionString = version.toString(), dependencyString = dependency.asString();
            log.warning("The '".concat(dependentName, "' dependent requires the '").concat(dependencyString, "' dependency but a context with version '").concat(versionString, "' was provided."));
            releaseMatchesDependency = false;
        }
    }
    return releaseMatchesDependency;
}
function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
    var dependencies = releaseContext.getDependencies();
    dependencies.forEachDependency(function(dependency) {
        initialiseReleaseContext(dependency, context);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBsb2cuZGVidWcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLmApO1xuXG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKSxcbiAgICAgICAgICBkZXBlbmRlbnROYW1lc0xlbmd0aCA9IGRlcGVuZGVudE5hbWVzLmxlbmd0aDtcblxuICAgIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgbG9nLmluZm8oYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuLi5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZTsgIC8vL1xuXG4gICAgICBsb2cuaW5mbyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGFudCdzICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5Li4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gYXdhaXQgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0KSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VjY2VzcyA/XG4gICAgICBsb2cuZGVidWcoYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKSA6XG4gICAgICAgIGxvZy53YXJuaW5nKGAuLi51bmFibGUgdG8gY3JlYXRlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGVwZW5kZW50UmVsZWFzZWQpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQud2FybmluZyhgVGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdCBjYW5ub3QgYmUgdmVyaWZpZXMgYmVjYXVzZSBpdHMgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCBpcyBhIHBhY2thZ2UuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gcmVsZWFzZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgZGVwZW5kZW50UmVsZWFzZWQgPSByZWxlYXNlZCwgLy8vXG4gICAgICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkgPSBhd2FpdCB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0Lmhhc1ZlcmlmaWVkKCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVmVyaWZ5aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuLi5gKTtcblxuICAgICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllcyA9IGF3YWl0IHJlbGVhc2VDb250ZXh0LnZlcmlmeSgpO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0LmApO1xuXG4gICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VWZXJpZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgbG9nLndhcm5pbmcoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgbG9nLmluZm8oYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIGNvbnN0IHsgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCk7XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICAoe2NvbnRleHR9ID0ganNvbik7IC8vL1xuXG4gIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAganNvbiA9IGVudHJpZXM7IC8vL1xuXG4gIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pO1xuXG4gIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dDsgIC8vL1xuXG4gIGpzb24gPSBjb250ZXh0SlNPTjsgLy8vXG5cbiAgY29uc3QgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0KHByb2plY3QsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBtZXRhSlNPTkZpbGUgPSBwcm9qZWN0LmdldE1ldGFKU09ORmlsZSgpO1xuXG4gIGlmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhSlNPTkZpbGVWYWxpZCA9IGlzTWV0YUpTT05GaWxlVmFsaWQobWV0YUpTT05GaWxlKTtcblxuICAgIGlmIChtZXRhSlNPTkZpbGVWYWxpZCkge1xuICAgICAgY29uc3QgeyBsb2csIGNhbGxiYWNrIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgICBlbnRyaWVzID0gcHJvamVjdC5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVSZWxlYXNlQ29udGV4dCxcbiAgdmVyaWZ5UmVsZWFzZUNvbnRleHQsXG4gIHJlbGVhc2VDb250ZXh0RnJvbUpTT04sXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdFxufTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN1Y2Nlc3M7XG5cbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgc3VjY2VzcyA9IGF3YWl0IGFzeW5jRXZlcnlEZXBlbmRlbmN5KGRlcGVuZGVuY2llcywgYXN5bmMgKGRlcGVuZGVuY3kpID0+IHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIWN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH0pO1xuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkgPSBhd2FpdCBhc3luY0V2ZXJ5RGVwZW5kZW5jeShkZXBlbmRlbmNpZXMsIGFzeW5jIChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRWZXJpZmllcyA9IGF3YWl0IHZlcmlmeVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0VmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgIC8vL1xuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMgPSBbXG4gICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRcbiAgICAgICAgXTtcblxuICBsZXQgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcblxuICB3aGlsZSAocmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVsZWFzZUNvbnRleHRzLnB1c2gocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lLCAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdLFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKCFyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ICYmICFyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7IC8vL1xuXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5wdXNoKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpO1xuXG4gIGlmICghcmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IGRlcGVuZGVuY3lOYW1lOyAvLy9cblxuICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGNvdWxkIG5vdCBiZSBjcmVhdGVkLiBQZXJoYXBzIHRoZSAnbWV0YS5qc29uJyBmaWxlIGlzIG1pc3Npbmcgb3IgaW52YWxpZC4gT3IgdGhlcmUgY291bGQgYmUgYSBkZXBlbmRlbmN5IG1pc21hdGNoLmApO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0Q3JlYXRlZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVudE5hbWVzLmluY2x1ZGVzKGRlcGVuZGVuY3lOYW1lKSxcbiAgICAgICAgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZTsgIC8vL1xuXG4gIGlmIChjeWNsaWNEZXBlbmRlbmN5RXhpc3RzKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lID0gZmlyc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lcyA9IFsgIC8vL1xuICAgICAgICAgICAgLi4uZGVwZW5kZW50TmFtZXMsXG4gICAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lc1N0cmluZyA9IGRlcGVuZGVuY3lOYW1lcy5qb2luKGAnIC0+ICdgKTtcblxuICAgIGxvZy53YXJuaW5nKGBUaGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5LCAnJHtkZXBlbmRlbmN5TmFtZXNTdHJpbmd9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IHRydWU7XG5cbiAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKTtcblxuICBpZiAoc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICBpZiAoIWVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgdmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0LmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIGxhc3REZXBlbmRlbnROYW1lID0gbGFzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgICBkZXBlbmRlbnROYW1lID0gbGFzdERlcGVuZGVudE5hbWUsICAvLy9cbiAgICAgICAgICAgIHZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpO1xuXG4gICAgICBsb2cud2FybmluZyhgVGhlICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgcmVxdWlyZXMgdGhlICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5IGJ1dCBhIGNvbnRleHQgd2l0aCB2ZXJzaW9uICcke3ZlcnNpb25TdHJpbmd9JyB3YXMgcHJvdmlkZWQuYCk7XG5cbiAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3k7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4geyAgLy8vXG4gICAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxlYXNlQ29udGV4dCIsImluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0RnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0IiwidmVyaWZ5UmVsZWFzZUNvbnRleHQiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJpc01ldGFKU09ORmlsZVZhbGlkIiwibWV0YUpTT05VdGlsaXRpZXMiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW50TmFtZXMiLCJjb250ZXh0Iiwic3VjY2VzcyIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJyZWxlYXNlTmFtZSIsInJlbGVhc2VDb250ZXh0IiwibG9nIiwicmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeVN0cmluZyIsImRlcGVuZGVudE5hbWVzTGVuZ3RoIiwibGFzdERlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnROYW1lIiwicmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeSIsInJlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImdldE5hbWUiLCJjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSIsImRlYnVnIiwiYXNTdHJpbmciLCJsZW5ndGgiLCJpbmZvIiwiY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQiLCJjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwid2FybmluZyIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVzIiwicmVsZWFzZWQiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzVmVyaWZ5IiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsInJlbGVhc2VDb250ZXh0VmVyaWZpZXMiLCJpc1JlbGVhc2VkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImhhc1ZlcmlmaWVkIiwidmVyaWZ5IiwicmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCIsImlzSW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInJlbGVhc2VDb250ZXh0cyIsInJldHJpZXZlUmVsZWFzZUNvbnRleHRzIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJpbml0aWFsaXNlIiwianNvbiIsImNhbGxiYWNrIiwibmFtZSIsImVudHJpZXMiLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJjb250ZXh0SlNPTiIsImN1c3RvbUdyYW1tYXIiLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwicHJvamVjdCIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsIm1ldGFKU09ORmlsZVZhbGlkIiwiZ2V0RW50cmllcyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImFzeW5jRXZlcnlEZXBlbmRlbmN5IiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFhc0JBO2VBQUFBOztRQXlLdEI7ZUFBQTs7UUExRWdCQztlQUFBQTs7UUE4QkFDO2VBQUFBOztRQXNC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