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
var _asynchronous = require("../utilities/asynchronous");
var _nominal = require("../utilities/nominal");
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
var push = _necessary.arrayUtilities.push;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log, entries, callback, fileContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log;
        this.entries = entries;
        this.callback = callback;
        this.fileContexts = fileContexts;
    }
    _create_class(ReleaseContext, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
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
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
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
            key: "getLexer",
            value: function getLexer() {
                var lexer = _nominal.nominalLexer; ///
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var parser = _nominal.nominalParser; ///
                return parser;
            }
        },
        {
            key: "getProcedures",
            value: function getProcedures() {
                var procedures = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextProcedures = fileContext.getProcedures(includeRelease);
                    push(procedures, fileContextProcedures);
                });
                return procedures;
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
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var procedures = this.getProcedures(), procedure = procedures.find(function(procedure) {
                    var nameMatches = procedure.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return procedure;
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var procedure = this.findProcedureByName(name), procedurePresent = procedure !== null;
                return procedurePresent;
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
            value: function initialise() {
                var releaseContext = this; ///
                fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, verifiedFileContexts, fileContextsVerify;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                verifiedFileContexts = [];
                                return [
                                    4,
                                    verifyFileContexts(this.fileContexts, verifiedFileContexts)
                                ];
                            case 1:
                                fileContextsVerify = _state.sent();
                                if (fileContextsVerify) {
                                    this.fileContexts = verifiedFileContexts; ///
                                    this.verified = true;
                                    verifies = true;
                                }
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
        }
    ], [
        {
            key: "fromLogEntriesAndCallback",
            value: function fromLogEntriesAndCallback(log, entries, callback) {
                var fileContexts = [], releaseContext = new ReleaseContext(log, entries, callback, fileContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
function verifyFileContexts(fileContexts, verifiedFileContexts) {
    return _async_to_generator(function() {
        var resolved, fileContextsVerify;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0, _asynchronous.asyncResolve)(fileContexts, verifiedFileContexts, function(fileContext) {
                            return _async_to_generator(function() {
                                var fileContextVerifies;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                fileContext.verify()
                                            ];
                                        case 1:
                                            fileContextVerifies = _state.sent();
                                            if (fileContextVerifies) {
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
                    resolved = _state.sent(), fileContextsVerify = resolved;
                    return [
                        2,
                        fileContextsVerify
                    ];
            }
        });
    })();
}
function fileContextsFromEntries(entries, fileContexts, releaseContext) {
    entries.forEachFile(function(file) {
        var FileContext = file.getFileContext(), fileContext = FileContext.fromFile(file, releaseContext);
        fileContexts.push(fileContext);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhc3luY1Jlc29sdmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuaW1wb3J0IHsgbm9taW5hbExleGVyLCBub21pbmFsUGFyc2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub21pbmFsXCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBlbnRyaWVzLCBjYWxsYmFjaywgZmlsZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2s7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG5vbWluYWxMZXhlcjsgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZmluZEZpbGVDb250ZXh0KGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0cy5maW5kKCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoTWF0Y2hlcyA9IGZpbGVDb250ZXh0Lm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHByb2NlZHVyZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBJTkZPX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLmxvZy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IDA7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXModGhpcy5lbnRyaWVzLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IGF3YWl0IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgaWYgKGZpbGVDb250ZXh0c1ZlcmlmeSkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG5cbiAgICAgIHRoaXMudmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgbWVzc2FnZSA9IEJSRUFLX01FU1NBR0U7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgYXdhaXQgdGhpcy5jYWxsYmFjayhjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nRW50cmllc0FuZENhbGxiYWNrKGxvZywgZW50cmllcywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIGVudHJpZXMsIGNhbGxiYWNrLCBmaWxlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKSB7XG4gIGNvbnN0IHJlc29sdmVkID0gYXdhaXQgYXN5bmNSZXNvbHZlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIGFzeW5jIChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VmVyaWZpZXMgPSBhd2FpdCBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgICAgIGlmIChmaWxlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWxlQ29udGV4dHNWZXJpZnkgPSByZXNvbHZlZDsgIC8vL1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZnk7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IEZpbGVDb250ZXh0ID0gZmlsZS5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImxvZyIsImVudHJpZXMiLCJjYWxsYmFjayIsImZpbGVDb250ZXh0cyIsImdldExvZyIsImdldEVudHJpZXMiLCJnZXRDYWxsYmFjayIsImdldEZpbGVDb250ZXh0cyIsImdldFJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJnZXRMZXhlciIsImxleGVyIiwibm9taW5hbExleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwibm9taW5hbFBhcnNlciIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJmaW5kRmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGVDb250ZXh0IiwiZmluZCIsImZpbGVQYXRoTWF0Y2hlcyIsIm1hdGNoRmlsZVBhdGgiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsInByb2NlZHVyZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsInRyYWNlIiwibWVzc2FnZSIsImxldmVsIiwiVFJBQ0VfTEVWRUwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJERUJVR19MRVZFTCIsImluZm8iLCJJTkZPX0xFVkVMIiwid2FybmluZyIsIldBUk5JTkdfTEVWRUwiLCJlcnJvciIsIkVSUk9SX0xFVkVMIiwibGluZUluZGV4Iiwid3JpdGUiLCJnZXREZXB0aCIsImRlcHRoIiwiaW5pdGlhbGlzZSIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiaW5pdGlhbGlzZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzVmVyaWZ5IiwidmVyaWZ5RmlsZUNvbnRleHRzIiwidmVyaWZpZWQiLCJicmVhayIsImNvbnRleHQiLCJCUkVBS19NRVNTQUdFIiwiZnJvbUxvZ0VudHJpZXNBbmRDYWxsYmFjayIsInJlc29sdmVkIiwiYXN5bmNSZXNvbHZlIiwiZmlsZUNvbnRleHRWZXJpZmllcyIsImZvckVhY2hGaWxlIiwiZmlsZSIsIkZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJmcm9tRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7NEJBRUY7dUJBQ2U7eUJBQ21EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsK0JBQU47YUFBTUEsZUFDUEcsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsWUFBWTtnQ0FEN0JOO1FBRWpCLElBQUksQ0FBQ0csR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUxITjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osR0FBRztZQUNqQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNy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