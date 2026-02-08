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
        var success, log, releaseContextMap, dependencyName, releaseName, releaseContext, releaseMatchesDependency, dependencyString, dependentNamesLength, lastDependentName, dependentName, releaseContextFromDependency, releaseContext1, releaseContextCreated, releaseMatchesDependency1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    success = false;
                    log = context.log, releaseContextMap = context.releaseContextMap, dependencyName = dependency.getName(), releaseName = dependencyName, releaseContext = releaseContextMap[releaseName] || null;
                    if (!(releaseContext !== null)) return [
                        3,
                        1
                    ];
                    releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);
                    if (releaseMatchesDependency) {
                        log.debug("The '".concat(releaseName, "' context has already been created."));
                        success = true;
                    }
                    return [
                        3,
                        5
                    ];
                case 1:
                    dependencyString = dependency.asString(), dependentNamesLength = dependentNames.length;
                    if (dependentNamesLength === 0) {
                        log.info("Creating the '".concat(releaseName, "' context..."));
                    } else {
                        lastDependentName = last(dependentNames), dependentName = lastDependentName; ///
                        log.info("Creating the '".concat(releaseName, "' context given the '").concat(dependentName, "' dependant's '").concat(dependencyString, "' dependency..."));
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
                    success ? log.debug("...created the '".concat(releaseName, "' context.")) : log.warning("...unable to create the '".concat(releaseName, "' context."));
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
            releaseContext.initialise(releaseContexts);
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
    var releaseContext = _release.default.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
    return releaseContext;
}
function releaseContextFromProject(project, context) {
    var releaseContext = null;
    var metaJSONFile = project.getMetaJSONFile();
    if (metaJSONFile !== null) {
        var metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);
        if (metaJSONFileValid) {
            var log = context.log, callback = context.callback, name = project.getName(), json = null, entries = project.getEntries();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgbG9nLCByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGxvZy5kZWJ1ZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpLFxuICAgICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRlcGVuZGVudE5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBsb2cuaW5mbyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC4uLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lOyAgLy8vXG5cbiAgICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBhd2FpdCByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWNjZXNzID9cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApIDpcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBsZXQgcmVsZWFzZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkZXBlbmRlbnRSZWxlYXNlZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dC53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0IGNhbm5vdCBiZSB2ZXJpZmllcyBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IHJlbGVhc2VkLCAvLy9cbiAgICAgICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaXNWZXJpZmllZCgpO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFZlcmlmeWluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0Li4uYCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VmVyaWZpZXMgPSBhd2FpdCByZWxlYXNlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgICAgICAgaWYgKHJlbGVhc2VDb250ZXh0VmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdC5gKTtcblxuICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCkge1xuICBjb25zdCB7IHJlbGVhc2VDb250ZXh0TWFwIH0gPSBjb250ZXh0LFxuICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0gfHwgbnVsbDtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgPT09IG51bGwpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dDtcblxuICAgIGxvZy53YXJuaW5nKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzSW5pdGlhbGlzZWQoKTtcblxuICAgIGlmICghcmVsZWFzZUNvbnRleHRJbml0aWFsaXNlZCkge1xuICAgICAgaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgbG9nLmluZm8oYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKTtcblxuICAgICAgbG9nLmRlYnVnKGAuLi5pbml0aWFsaXNlZCB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgeyBuYW1lIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0OyAgLy8vXG5cbiAganNvbiA9IGNvbnRleHRKU09OOyAvLy9cblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcik7XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdChwcm9qZWN0LCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlQ29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbWV0YUpTT05GaWxlID0gcHJvamVjdC5nZXRNZXRhSlNPTkZpbGUoKTtcblxuICBpZiAobWV0YUpTT05GaWxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YUpTT05GaWxlVmFsaWQgPSBpc01ldGFKU09ORmlsZVZhbGlkKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlVmFsaWQpIHtcbiAgICAgIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIG5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIGpzb24gPSBudWxsLFxuICAgICAgICAgICAgZW50cmllcyA9IHByb2plY3QuZ2V0RW50cmllcygpO1xuXG4gICAgICByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICB2ZXJpZnlSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tSlNPTixcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0LFxuICByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcztcblxuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBzdWNjZXNzID0gYXdhaXQgYXN5bmNFdmVyeURlcGVuZGVuY3koZGVwZW5kZW5jaWVzLCBhc3luYyAoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfSk7XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IGFzeW5jRXZlcnlEZXBlbmRlbmN5KGRlcGVuZGVuY2llcywgYXN5bmMgKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3ksICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0Lm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCByZXF1aXJlcyB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kgYnV0IGEgY29udGV4dCB3aXRoIHZlcnNpb24gJyR7dmVyc2lvblN0cmluZ30nIHdhcyBwcm92aWRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRGcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0RnJvbVByb2plY3QiLCJ2ZXJpZnlSZWxlYXNlQ29udGV4dCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJzdWNjZXNzIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiZ2V0TmFtZSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiZGVidWciLCJhc1N0cmluZyIsImxlbmd0aCIsImluZm8iLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ3YXJuaW5nIiwiZGVwZW5kZW50UmVsZWFzZWQiLCJyZWxlYXNlVmVyaWZpZXMiLCJyZWxlYXNlZCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkiLCJyZWxlYXNlQ29udGV4dFZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHRWZXJpZmllcyIsImlzUmVsZWFzZWQiLCJ2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaXNWZXJpZmllZCIsInZlcmlmeSIsInJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJyZWxlYXNlQ29udGV4dHMiLCJyZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyIsImluaXRpYWxpc2UiLCJqc29uIiwiY2FsbGJhY2siLCJuYW1lIiwiZW50cmllcyIsIkVudHJpZXMiLCJmcm9tSlNPTiIsImNvbnRleHRKU09OIiwiUmVsZWFzZUNvbnRleHQiLCJmcm9tTG9nTmFtZUpTT05FbnRyaWVzQ2FsbGJhY2tBbmRDdXN0b21HcmFtbWFyIiwiY3VzdG9tR3JhbW1hciIsInByb2plY3QiLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImdldEVudHJpZXMiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJhc3luY0V2ZXJ5RGVwZW5kZW5jeSIsImN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dCIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCIsInNoaWZ0IiwicHVzaCIsImZvckVhY2hEZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImluY2x1ZGVzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCIsImRlcGVuZGVudE5hbWVzSW5jbHVkZXNEZXBlbmRlbmN5TmFtZSIsImZpcnN0RGVwZW5kZW50TmFtZSIsImZpcnN0IiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzU3RyaW5nIiwiam9pbiIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsImVudHJpZXNNYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBWXNCQTtlQUFBQTs7UUFtS3RCO2VBQUE7O1FBdEVnQkM7ZUFBQUE7O1FBNEJBQztlQUFBQTs7UUFxQkFDO2VBQUFBOztRQTNGTUM7ZUFBQUE7Ozt5QkE3RFM7MEJBQ1k7OERBRWhCOzBCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsc0JBQXdCQyw2QkFBaUIsQ0FBekNEO0FBRUQsU0FBZVAscUJBQXFCUyxVQUFVLEVBQUVDLGNBQWMsRUFBRUMsT0FBTzs7WUFDeEVDLFNBRUlDLEtBQUtDLG1CQUNQQyxnQkFDQUMsYUFDQUMsZ0JBR0VDLDBCQVFBQyxrQkFDQUMsc0JBS0VDLG1CQUNBQyxlQUtBQyw4QkFDRk4saUJBQ0FPLHVCQUdFTjs7OztvQkFqQ05OLFVBQVU7b0JBRU5DLE1B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