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
    get verifyReleaseContext () {
        return verifyReleaseContext;
    }
});
var _necessary = require("necessary");
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
var last = _necessary.arrayUtilities.last;
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
var _default = {
    createReleaseContext: createReleaseContext,
    verifyReleaseContext: verifyReleaseContext,
    initialiseReleaseContext: initialiseReleaseContext
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyaWZpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgYXN5bmNFdmVyeURlcGVuZGVuY3kgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlcGVuZGVuY3lcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpc2VSZWxlYXNlQ29udGV4dChkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgcmVsZWFzZUNvbnRleHRNYXAgfSA9IGNvbnRleHQsXG4gICAgICAgIGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXSB8fCBudWxsO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0O1xuXG4gICAgbG9nLndhcm5pbmcoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSAnJHtkZXBlbmRlbmN5TmFtZX0nIGNvbnRleHQgYmVjYXVzZSBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZC5gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkID0gcmVsZWFzZUNvbnRleHQuaXNJbml0aWFsaXNlZCgpO1xuXG4gICAgaWYgKCFyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkKSB7XG4gICAgICBpbml0aWFsaXNlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5LCByZWxlYXNlQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHsgbG9nIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgbG9nLmluZm8oYEluaXRpYWxpc2luZyB0aGUgJyR7ZGVwZW5kZW5jeU5hbWV9JyBjb250ZXh0Li4uYCk7XG5cbiAgICAgIGNvbnN0IHsgRmlsZUNvbnRleHRGcm9tRmlsZVBhdGggfSA9IGNvbnRleHQ7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzLCBGaWxlQ29udGV4dEZyb21GaWxlUGF0aCk7XG5cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uaW5pdGlhbGlzZWQgdGhlICcke2RlcGVuZGVuY3lOYW1lfScgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgeyByZWxlYXNlQ29udGV4dE1hcCB9ID0gY29udGV4dCxcbiAgICAgICAgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgcmVsZWFzZU5hbWUgPSBkZXBlbmRlbmN5TmFtZSwgLy8vXG4gICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdIHx8IG51bGw7XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgIGxvZy5kZWJ1ZyhgVGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuYCk7XG5cbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5U3RyaW5nID0gZGVwZW5kZW5jeS5hc1N0cmluZygpLFxuICAgICAgICAgIGRlcGVuZGVudE5hbWVzTGVuZ3RoID0gZGVwZW5kZW50TmFtZXMubGVuZ3RoO1xuXG4gICAgaWYgKGRlcGVuZGVudE5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBsb2cuaW5mbyhgQ3JlYXRpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC4uLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0RGVwZW5kZW50TmFtZSA9IGxhc3QoZGVwZW5kZW50TmFtZXMpLFxuICAgICAgICAgICAgZGVwZW5kZW50TmFtZSA9IGxhc3REZXBlbmRlbnROYW1lOyAgLy8vXG5cbiAgICAgIGxvZy5pbmZvKGBDcmVhdGluZyB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0IGdpdmVuIHRoZSAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kYW50J3MgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kuLi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlbGVhc2VDb250ZXh0RnJvbURlcGVuZGVuY3kgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBhd2FpdCByZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5KGRlcGVuZGVuY3ksIGNvbnRleHQpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KTtcblxuICAgIGlmIChyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeSA9IGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kpIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdID0gcmVsZWFzZUNvbnRleHQ7XG5cbiAgICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdWNjZXNzID9cbiAgICAgIGxvZy5kZWJ1ZyhgLi4uY3JlYXRlZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBjb250ZXh0LmApIDpcbiAgICAgICAgbG9nLndhcm5pbmcoYC4uLnVuYWJsZSB0byBjcmVhdGUgdGhlICcke3JlbGVhc2VOYW1lfScgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBsZXQgcmVsZWFzZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV07XG5cbiAgaWYgKHJlbGVhc2VDb250ZXh0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSByZWxlYXNlQ29udGV4dC5pc1JlbGVhc2VkKCk7XG5cbiAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgIHJlbGVhc2VWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkZXBlbmRlbnRSZWxlYXNlZCkge1xuICAgICAgICByZWxlYXNlQ29udGV4dC53YXJuaW5nKGBUaGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0IGNhbm5vdCBiZSB2ZXJpZmllcyBiZWNhdXNlIGl0cyAnJHtkZXBlbmRlbnROYW1lfScgZGVwZW5kZW50IGlzIGEgcGFja2FnZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVudE5hbWUgPSByZWxlYXNlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbnRSZWxlYXNlZCA9IHJlbGVhc2VkLCAvLy9cbiAgICAgICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaGFzVmVyaWZpZWQoKTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZWxlYXNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZnlpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdC4uLmApO1xuXG4gICAgICAgICAgICBjb25zdCByZWxlYXNlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgcmVsZWFzZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QuYCk7XG5cbiAgICAgICAgICAgICAgcmVsZWFzZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVJlbGVhc2VDb250ZXh0LFxuICB2ZXJpZnlSZWxlYXNlQ29udGV4dCxcbiAgaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3ksIHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgc3VjY2VzcztcblxuICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICBkZXBlbmRlbnROYW1lcyA9IFsgLi4uZGVwZW5kZW50TmFtZXMsIGRlcGVuZGVuY3lOYW1lIF07ICAvLy9cblxuICBzdWNjZXNzID0gYXdhaXQgYXN5bmNFdmVyeURlcGVuZGVuY3koZGVwZW5kZW5jaWVzLCBhc3luYyAoZGVwZW5kZW5jeSkgPT4ge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzKGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcblxuICAgIGlmICghY3ljbGljRGVwZW5kZW5jeUV4aXN0cykge1xuICAgICAgc3VjY2VzcyA9IGF3YWl0IGNyZWF0ZVJlbGVhc2VDb250ZXh0KGRlcGVuZGVuY3ksIGRlcGVuZGVudE5hbWVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfSk7XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IGFzeW5jRXZlcnlEZXBlbmRlbmN5KGRlcGVuZGVuY2llcywgYXN5bmMgKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5UmVsZWFzZUNvbnRleHQocmVsZWFzZU5hbWUsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgICBpZiAocmVsZWFzZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0c1ZlcmlmeTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVSZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0cyA9IFtdLFxuICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAgLy8vXG4gICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0cyA9IFtcbiAgICAgICAgICByZW1haW5pbmdSZWxlYXNlQ29udGV4dFxuICAgICAgICBdO1xuXG4gIGxldCByZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuc2hpZnQoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0OyAgLy8vXG5cbiAgICByZWxlYXNlQ29udGV4dHMucHVzaChyZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWUsIC8vL1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dE1hcFtyZWxlYXNlTmFtZV0sXG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLmluY2x1ZGVzKHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgPSByZW1haW5pbmdSZWxlYXNlQ29udGV4dHMuaW5jbHVkZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQgJiYgIXJlbWFpbmluZ1JlbGVhc2VDb250ZXh0c0luY2x1ZGVzUmVsZWFzZUNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nUmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgICAgICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLnB1c2gocmVtYWluaW5nUmVsZWFzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoID0gcmVtYWluaW5nUmVsZWFzZUNvbnRleHRzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZWxlYXNlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0Q3JlYXRlZCA9IChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCk7XG5cbiAgaWYgKCFyZWxlYXNlQ29udGV4dENyZWF0ZWQpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gZGVwZW5kZW5jeU5hbWU7IC8vL1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIGNvbnRleHQgY291bGQgbm90IGJlIGNyZWF0ZWQuIFBlcmhhcHMgdGhlICdtZXRhLmpzb24nIGZpbGUgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBPciB0aGVyZSBjb3VsZCBiZSBhIGRlcGVuZGVuY3kgbWlzbWF0Y2guYCk7XG4gIH1cblxuICByZXR1cm4gcmVsZWFzZUNvbnRleHRDcmVhdGVkO1xufVxuXG5mdW5jdGlvbiBjaGVja0N5Y2xpY0RlcGVuZGVuY3lFeGlzdHMoZGVwZW5kZW5jeSwgZGVwZW5kZW50TmFtZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW50TmFtZXMuaW5jbHVkZXMoZGVwZW5kZW5jeU5hbWUpLFxuICAgICAgICBjeWNsaWNEZXBlbmRlbmN5RXhpc3RzID0gZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lOyAgLy8vXG5cbiAgaWYgKGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHMpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gY29udGV4dCxcbiAgICAgICAgICBmaXJzdERlcGVuZGVudE5hbWUgPSBmaXJzdChkZXBlbmRlbnROYW1lcyksXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzID0gWyAgLy8vXG4gICAgICAgICAgICAuLi5kZXBlbmRlbnROYW1lcyxcbiAgICAgICAgICAgIGZpcnN0RGVwZW5kZW50TmFtZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVwZW5kZW5jeU5hbWVzU3RyaW5nID0gZGVwZW5kZW5jeU5hbWVzLmpvaW4oYCcgLT4gJ2ApO1xuXG4gICAgbG9nLndhcm5pbmcoYFRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3ksICcke2RlcGVuZGVuY3lOYW1lc1N0cmluZ30nLmApO1xuICB9XG5cbiAgcmV0dXJuIGN5Y2xpY0RlcGVuZGVuY3lFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5KHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbmN5LCBkZXBlbmRlbnROYW1lcywgY29udGV4dCkge1xuICBsZXQgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gdHJ1ZTtcblxuICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpO1xuXG4gIGlmIChzaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiA9IHJlbGVhc2VDb250ZXh0Lm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIGlmICghZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbikge1xuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICB2ZXJzaW9uID0gcmVsZWFzZUNvbnRleHQuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgICAgbGFzdERlcGVuZGVudE5hbWUgPSBsYXN0KGRlcGVuZGVudE5hbWVzKSxcbiAgICAgICAgICAgIGRlcGVuZGVudE5hbWUgPSBsYXN0RGVwZW5kZW50TmFtZSwgIC8vL1xuICAgICAgICAgICAgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRlcGVuZGVuY3lTdHJpbmcgPSBkZXBlbmRlbmN5LmFzU3RyaW5nKCk7XG5cbiAgICAgIGxvZy53YXJuaW5nKGBUaGUgJyR7ZGVwZW5kZW50TmFtZX0nIGRlcGVuZGVudCByZXF1aXJlcyB0aGUgJyR7ZGVwZW5kZW5jeVN0cmluZ30nIGRlcGVuZGVuY3kgYnV0IGEgY29udGV4dCB3aXRoIHZlcnNpb24gJyR7dmVyc2lvblN0cmluZ30nIHdhcyBwcm92aWRlZC5gKTtcblxuICAgICAgcmVsZWFzZU1hdGNoZXNEZXBlbmRlbmN5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbGVhc2VNYXRjaGVzRGVwZW5kZW5jeTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZURlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeSwgcmVsZWFzZUNvbnRleHQsIGNvbnRleHQpIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgZGVwZW5kZW5jaWVzLmZvckVhY2hEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7ICAvLy9cbiAgICBpbml0aWFsaXNlUmVsZWFzZUNvbnRleHQoZGVwZW5kZW5jeSwgY29udGV4dCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGVhc2VDb250ZXh0IiwiaW5pdGlhbGlzZVJlbGVhc2VDb250ZXh0IiwidmVyaWZ5UmVsZWFzZUNvbnRleHQiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZXBlbmRlbmN5IiwiY29udGV4dCIsInJlbGVhc2VDb250ZXh0TWFwIiwiZGVwZW5kZW5jeU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dCIsImxvZyIsIndhcm5pbmciLCJyZWxlYXNlQ29udGV4dEluaXRpYWxpc2VkIiwiaXNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VEZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwicmVsZWFzZUNvbnRleHRzIiwicmV0cmlldmVSZWxlYXNlQ29udGV4dHMiLCJpbmZvIiwiRmlsZUNvbnRleHRGcm9tRmlsZVBhdGgiLCJpbml0aWFsaXNlIiwiZGVidWciLCJkZXBlbmRlbnROYW1lcyIsInN1Y2Nlc3MiLCJyZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5U3RyaW5nIiwiZGVwZW5kZW50TmFtZXNMZW5ndGgiLCJsYXN0RGVwZW5kZW50TmFtZSIsImRlcGVuZGVudE5hbWUiLCJyZWxlYXNlQ29udGV4dEZyb21EZXBlbmRlbmN5IiwicmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY2hlY2tSZWxlYXNlTWF0Y2hlc0RlcGVuZGVuY3kiLCJhc1N0cmluZyIsImxlbmd0aCIsImNoZWNrUmVsZWFzZUNvbnRleHRDcmVhdGVkIiwiY3JlYXRlRGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImRlcGVuZGVudFJlbGVhc2VkIiwicmVsZWFzZVZlcmlmaWVzIiwicmVsZWFzZWQiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzVmVyaWZ5IiwicmVsZWFzZUNvbnRleHRWZXJpZmllZCIsInJlbGVhc2VDb250ZXh0VmVyaWZpZXMiLCJpc1JlbGVhc2VkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImhhc1ZlcmlmaWVkIiwidmVyaWZ5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwiYXN5bmNFdmVyeURlcGVuZGVuY3kiLCJjeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwiY2hlY2tDeWNsaWNEZXBlbmRlbmN5RXhpc3RzIiwibmFtZSIsInJlbWFpbmluZ1JlbGVhc2VDb250ZXh0IiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzIiwicmVtYWluaW5nUmVsZWFzZUNvbnRleHRzTGVuZ3RoIiwic2hpZnQiLCJwdXNoIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJyZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiaW5jbHVkZXMiLCJyZW1haW5pbmdSZWxlYXNlQ29udGV4dHNJbmNsdWRlc1JlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW50TmFtZXNJbmNsdWRlc0RlcGVuZGVuY3lOYW1lIiwiZmlyc3REZXBlbmRlbnROYW1lIiwiZmlyc3QiLCJkZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXNTdHJpbmciLCJqb2luIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwiZW50cmllc01hdGNoU2hvcnRlbmVkVmVyc2lvbiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFzQ3NCQTtlQUFBQTs7UUErRnRCO2VBQUE7O1FBN0hnQkM7ZUFBQUE7O1FBbUZNQztlQUFBQTs7O3lCQXpGUzswQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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