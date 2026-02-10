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
                    releaseContextVerified = releaseContext.isVerified();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICBsb2cuZGVidWcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkLmApO1xuXG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKSxcbiAgICAgICAgICBkZXBlbmRlbnROYW1lc0xlbmd0aCA9IGRlcGVuZGVudE5hbWVzLmxlbmd0aDtcblxuICAgIGlmIChkZXBlbmRlbnROYW1lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgbG9nLmluZm8oYENyZWF0aW5nIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuLi5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZTsgIC8vL1xuXG4gICAgICBsb2cuaW5mbyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBnaXZlbiB0aGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGFudCdzICcke2RlcGVuZGVuY3lTdHJpbmd9JyBkZXBlbmRlbmN5Li4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IH0gPSBjb250ZXh0LFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gYXdhaXQgcmVsZWFzZUNvbnRleHRGcm9tRGVwZW5kZW5jeShkZXBlbmRlbmN5LCBjb250ZXh0KSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dENyZWF0ZWQgPSBjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZChyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVsZWFzZUNvbnRleHRDcmVhdGVkKSB7XG4gICAgICBjb25zdCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBjaGVja1JlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeShyZWxlYXNlQ29udGV4dCwgZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSA9IHJlbGVhc2VDb250ZXh0O1xuXG4gICAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VjY2VzcyA/XG4gICAgICBsb2cuZGVidWcoYC4uLmNyZWF0ZWQgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKSA6XG4gICAgICAgIGxvZy53YXJuaW5nKGAuLi51bmFibGUgdG8gY3JlYXRlIHRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VDb250ZXh0KHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gcmVsZWFzZUNvbnRleHQuaXNSZWxlYXNlZCgpO1xuXG4gICAgaWYgKHJlbGVhc2VkKSB7XG4gICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGVwZW5kZW50UmVsZWFzZWQpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQud2FybmluZyhgVGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdCBjYW5ub3QgYmUgdmVyaWZpZXMgYmVjYXVzZSBpdHMgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCBpcyBhIHBhY2thZ2UuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZXBlbmRlbnROYW1lID0gcmVsZWFzZU5hbWUsICAvLy9cbiAgICAgICAgICAgICAgZGVwZW5kZW50UmVsZWFzZWQgPSByZWxlYXNlZCwgLy8vXG4gICAgICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkgPSBhd2FpdCB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRWZXJpZmllZCA9IHJlbGVhc2VDb250ZXh0LmlzVmVyaWZpZWQoKTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZnlpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdC4uLmApO1xuXG4gICAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgcmVsZWFzZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuYCk7XG5cbiAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICBsb2cud2FybmluZyhgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dCBiZWNhdXNlIGl0IGhhcyBub3QgYmVlbiBjcmVhdGVkLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICBsb2cuaW5mbyhgSW5pdGlhbGlzaW5nIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuLi5gKTtcblxuICAgICAgY29uc3QgeyBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCB9ID0gY29udGV4dDtcblxuICAgICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMsIEZpbGVDb250ZXh0RnJvbUZpbGVQYXRoKTtcblxuICAgICAgbG9nLmRlYnVnKGAuLi5pbml0aWFsaXNlZCB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgeyBuYW1lIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0OyAgLy8vXG5cbiAganNvbiA9IGNvbnRleHRKU09OOyAvLy9cblxuICBjb25zdCBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBSZWxlYXNlQ29udGV4dC5mcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgY2FsbGJhY2ssIGN1c3RvbUdyYW1tYXIpO1xuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QocHJvamVjdCwgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZUNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGFKU09ORmlsZSA9IHByb2plY3QuZ2V0TWV0YUpTT05GaWxlKCk7XG5cbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZVZhbGlkID0gaXNNZXRhSlNPTkZpbGVWYWxpZChtZXRhSlNPTkZpbGUpO1xuXG4gICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICBjb25zdCB7IGxvZywgY2FsbGJhY2sgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBuYW1lID0gcHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgICAgICBqc29uID0gbnVsbCxcbiAgICAgICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKSxcbiAgICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpO1xuXG4gICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICB2ZXJpZnlSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tSlNPTixcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcztcblxuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBzdWNjZXNzID0gYXdhaXQgYXN5bmNFdmVyeURlcGVuZGVuY3koZGVwZW5kZW5jaWVzLCBhc3luYyAoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfSk7XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IGFzeW5jRXZlcnlEZXBlbmRlbmN5KGRlcGVuZGVuY2llcywgYXN5bmMgKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3ksICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0Lm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCByZXF1aXJlcyB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kgYnV0IGEgY29udGV4dCB3aXRoIHZlcnNpb24gJyR7dmVyc2lvblN0cmluZ30nIHdhcyBwcm92aWRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRGcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJzdWNjZXNzIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJsb2ciLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiZ2V0TmFtZSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiZGVidWciLCJhc1N0cmluZyIsImxlbmd0aCIsImluZm8iLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ3YXJuaW5nIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZXMiLCJyZWxlYXNlZCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHRWZXJpZmllcyIsImlzUmVsZWFzZWQiLCJ2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaXNWZXJpZmllZCIsInZlcmlmeSIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsIkZpbGVDb250ZXh0RnJvbUZpbGVQYXRoIiwiaW5pdGlhbGlzZSIsImpzb24iLCJjYWxsYmFjayIsIm5hbWUiLCJlbnRyaWVzIiwiRW50cmllcyIsImZyb21KU09OIiwiY29udGV4dEpTT04iLCJjdXN0b21HcmFtbWFyIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsIlJlbGVhc2VDb250ZXh0IiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldEVudHJpZXMiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY0V2ZXJ5RGVwZW5kZW5jeSIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dCIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCIsInNoaWZ0IiwicHVzaCIsImZvckVhY2hEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBYXNCQTtlQUFBQTs7UUF5S3RCO2VBQUE7O1FBMUVnQkM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFzQkFD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