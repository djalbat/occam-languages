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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmVsZWFzZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRW50cmllcywgbWV0YUpTT05VdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbW9kZWxcIjtcblxuaW1wb3J0IFJlbGVhc2VDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3JlbGVhc2VcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNNZXRhSlNPTkZpbGVWYWxpZCB9ID0gbWV0YUpTT05VdGlsaXRpZXM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgbG9nLCByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGxvZy5kZWJ1ZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpLFxuICAgICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRlcGVuZGVudE5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBsb2cuaW5mbyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC4uLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lOyAgLy8vXG5cbiAgICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBhd2FpdCByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWNjZXNzID9cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApIDpcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUNvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbG9nLCBjYWxsYmFjayB9ID0gY29udGV4dCxcbiAgICAgICAgeyBuYW1lIH0gPSBqc29uO1xuXG4gICh7Y29udGV4dH0gPSBqc29uKTsgLy8vXG5cbiAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICBqc29uID0gZW50cmllczsgLy8vXG5cbiAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0OyAgLy8vXG5cbiAganNvbiA9IGNvbnRleHRKU09OOyAvLy9cblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IFJlbGVhc2VDb250ZXh0LmZyb21Mb2dOYW1lSlNPTkVudHJpZXNDYWxsYmFja0FuZEN1c3RvbUdyYW1tYXIobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgY3VzdG9tR3JhbW1hcik7XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQ7XG5cbiAgICBsb2cud2FybmluZyhgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dCBiZWNhdXNlIGl0IGhhcyBub3QgYmVlbiBjcmVhdGVkLmApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQgPSByZWxlYXNlQ29udGV4dC5pc0luaXRpYWxpc2VkKCk7XG5cbiAgICBpZiAoIXJlbGVhc2VDb250ZXh0SW5pdGlhbGlzZWQpIHtcbiAgICAgIGluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHMgPSByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICBsb2cuaW5mbyhgSW5pdGlhbGlzaW5nIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuLi5gKTtcblxuICAgICAgcmVsZWFzZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgICBsb2cuZGVidWcoYC4uLmluaXRpYWxpc2VkIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlQ29udGV4dEZyb21Qcm9qZWN0KHByb2plY3QsIGNvbnRleHQpIHtcbiAgbGV0IHJlbGVhc2VDb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBtZXRhSlNPTkZpbGUgPSBwcm9qZWN0LmdldE1ldGFKU09ORmlsZSgpO1xuXG4gIGlmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhSlNPTkZpbGVWYWxpZCA9IGlzTWV0YUpTT05GaWxlVmFsaWQobWV0YUpTT05GaWxlKTtcblxuICAgIGlmIChtZXRhSlNPTkZpbGVWYWxpZCkge1xuICAgICAgY29uc3QgeyBsb2csIGNhbGxiYWNrIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAganNvbiA9IG51bGwsXG4gICAgICAgICAgICBlbnRyaWVzID0gcHJvamVjdC5nZXRFbnRyaWVzKCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0ID0gUmVsZWFzZUNvbnRleHQuZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBjdXN0b21HcmFtbWFyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUmVsZWFzZUNvbnRleHQsXG4gIHJlbGVhc2VDb250ZXh0RnJvbUpTT04sXG4gIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dCxcbiAgcmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdFxufTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN1Y2Nlc3M7XG5cbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW50TmFtZXMgPSBbIC4uLmRlcGVuZGVudE5hbWVzLCBkZXBlbmRlbmN5TmFtZSBdOyAgLy8vXG5cbiAgc3VjY2VzcyA9IGF3YWl0IGFzeW5jRXZlcnlEZXBlbmRlbmN5KGRlcGVuZGVuY2llcywgYXN5bmMgKGRlcGVuZGVuY3kpID0+IHtcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY3ljbGljRGVwZW5kZW5jeUV4aXN0cyA9IGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICBpZiAoIWN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICAgIHN1Y2Nlc3MgPSBhd2FpdCBjcmVhdGVSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH0pO1xuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRzID0gW10sXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQsICAvLy9cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0XG4gICAgICAgIF07XG5cbiAgbGV0IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5zaGlmdCgpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHQ7ICAvLy9cblxuICAgIHJlbGVhc2VDb250ZXh0cy5wdXNoKHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHJlbGVhc2VDb250ZXh0LmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSxcbiAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cy5pbmNsdWRlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICghcmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCAmJiAhcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzSW5jbHVkZXNSZWxlYXNlQ29udGV4dCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0OyAvLy9cblxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMucHVzaChyZW1haW5pbmdSZWxlYXNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VDb250ZXh0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlQ29udGV4dENyZWF0ZWQocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGNvbnRleHQpIHtcbiAgY29uc3QgcmVsZWFzZUNvbnRleHRDcmVhdGVkID0gKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKTtcblxuICBpZiAoIXJlbGVhc2VDb250ZXh0Q3JlYXRlZCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZTsgLy8vXG5cbiAgICBsb2cud2FybmluZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBjb3VsZCBub3QgYmUgY3JlYXRlZC4gUGVyaGFwcyB0aGUgJ21ldGEuanNvbicgZmlsZSBpcyBtaXNzaW5nIG9yIGludmFsaWQuIE9yIHRoZXJlIGNvdWxkIGJlIGEgZGVwZW5kZW5jeSBtaXNtYXRjaC5gKTtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dENyZWF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyhkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbnROYW1lcy5pbmNsdWRlcyhkZXBlbmRlbmN5TmFtZSksXG4gICAgICAgIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMgPSBkZXBlbmRlbnROYW1lc0luY2x1ZGVzRGVwZW5kZW5jeU5hbWU7ICAvLy9cblxuICBpZiAoY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZSA9IGZpcnN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXMgPSBbICAvLy9cbiAgICAgICAgICAgIC4uLmRlcGVuZGVudE5hbWVzLFxuICAgICAgICAgICAgZmlyc3REZXBlbmRlbnROYW1lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZXNTdHJpbmcgPSBkZXBlbmRlbmN5TmFtZXMuam9pbihgJyAtPiAnYCk7XG5cbiAgICBsb2cud2FybmluZyhgVGhlcmUgaXMgYSBjeWNsaWMgZGVwZW5kZW5jeSwgJyR7ZGVwZW5kZW5jeU5hbWVzU3RyaW5nfScuYCk7XG4gIH1cblxuICByZXR1cm4gY3ljbGljRGVwZW5kZW5jeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSB0cnVlO1xuXG4gIGNvbnN0IHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCk7XG5cbiAgaWYgKHNob3J0ZW5lZFZlcnNpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uID0gcmVsZWFzZUNvbnRleHQubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgaWYgKCFlbnRyaWVzTWF0Y2hTaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIHZlcnNpb24gPSByZWxlYXNlQ29udGV4dC5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgICBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lLCAgLy8vXG4gICAgICAgICAgICB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgICAgZGVwZW5kZW5jeVN0cmluZyA9IGRlcGVuZGVuY3kuYXNTdHJpbmcoKTtcblxuICAgICAgbG9nLndhcm5pbmcoYFRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IHJlcXVpcmVzIHRoZSAnJHtkZXBlbmRlbmN5U3RyaW5nfScgZGVwZW5kZW5jeSBidXQgYSBjb250ZXh0IHdpdGggdmVyc2lvbiAnJHt2ZXJzaW9uU3RyaW5nfScgd2FzIHByb3ZpZGVkLmApO1xuXG4gICAgICByZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbmNpZXMuZm9yRWFjaERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHsgIC8vL1xuICAgIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVsZWFzZUNvbnRleHQiLCJpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dEZyb21KU09OIiwicmVsZWFzZUNvbnRleHRGcm9tUHJvamVjdCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTWV0YUpTT05GaWxlVmFsaWQiLCJtZXRhSlNPTlV0aWxpdGllcyIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbnROYW1lcyIsImNvbnRleHQiLCJzdWNjZXNzIiwibG9nIiwicmVsZWFzZUNvbnRleHRNYXAiLCJkZXBlbmRlbmN5TmFtZSIsInJlbGVhc2VOYW1lIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiZ2V0TmFtZSIsImNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5IiwiZGVidWciLCJhc1N0cmluZyIsImxlbmd0aCIsImluZm8iLCJjaGVja1JlbGVhc2VDb250ZXh0Q3JlYXRlZCIsImNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJ3YXJuaW5nIiwianNvbiIsImNhbGxiYWNrIiwibmFtZSIsImVudHJpZXMiLCJFbnRyaWVzIiwiZnJvbUpTT04iLCJjb250ZXh0SlNPTiIsIlJlbGVhc2VDb250ZXh0IiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0NhbGxiYWNrQW5kQ3VzdG9tR3JhbW1hciIsImN1c3RvbUdyYW1tYXIiLCJyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVSZWxlYXNlQ29udGV4dHMiLCJpbml0aWFsaXNlIiwicHJvamVjdCIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsIm1ldGFKU09ORmlsZVZhbGlkIiwiZ2V0RW50cmllcyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImFzeW5jRXZlcnlEZXBlbmRlbmN5IiwiY3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsImNoZWNrQ3ljbGljRGVwZW5kZW5jeUV4aXN0cyIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFZc0JBO2VBQUFBOztRQXlIdEI7ZUFBQTs7UUFqRGdCQztlQUFBQTs7UUFyQkFDO2VBQUFBOztRQWlEQUM7ZUFBQUE7Ozt5QkE5R2U7MEJBQ1k7OERBRWhCOzBCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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