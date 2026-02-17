"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
var _lineIndex = require("../utilities/lineIndex");
var _node = require("../utilities/node");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var FileContext = /*#__PURE__*/ function(Context) {
    _inherits(FileContext, Context);
    function FileContext(context, filePath, tokens, node, lexer, parser) {
        _class_call_check(this, FileContext);
        var _this;
        _this = _call_super(this, FileContext, [
            context
        ]);
        _this.filePath = filePath;
        _this.tokens = tokens;
        _this.node = node;
        _this.lexer = lexer;
        _this.parser = parser;
        return _this;
    }
    _create_class(FileContext, [
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
            }
        },
        {
            key: "findFile",
            value: function findFile() {
                var releaseContext = this.getReleaseContext(), file = releaseContext.findFile(this.filePath);
                return file;
            }
        },
        {
            key: "getCombinedCustomGrammar",
            value: function getCombinedCustomGrammar() {
                var releaseContext = this.getReleaseContext(), combinedCustomGrammar = releaseContext.getCombinedCustomGrammar();
                return combinedCustomGrammar;
            }
        },
        {
            key: "matchFilePath",
            value: function matchFilePath(filePath) {
                var filePathMatches = this.filePath === filePath;
                return filePathMatches;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(nodes) {
                var string = (0, _node.nodesAsString)(nodes, this.tokens);
                return string;
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                if (this.tokens !== null) {
                    return;
                }
                var file = this.findFile(), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var content = json.content, lexer = this.getLexer(), parser = this.getParser();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
                this.clear();
                this.addProcedures();
            }
        },
        {
            key: "break",
            value: function _break(node) {
                return _async_to_generator(function() {
                    var filePath, lineIndex, releaseContext;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                filePath = this.filePath, lineIndex = (0, _lineIndex.lineIndexFromNodeAndTokens)(node, this.tokens), releaseContext = this.getReleaseContext();
                                return [
                                    4,
                                    releaseContext.break(filePath, lineIndex)
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
                    var verifies, fileVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                this.prepare();
                                if (!(this.node === null)) return [
                                    3,
                                    1
                                ];
                                this.warning("Unable to verify the '".concat(this.filePath, "' file because it cannot be parsed."));
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                this.debug("Verifying the '".concat(this.filePath, "' file..."));
                                return [
                                    4,
                                    this.verifyFile()
                                ];
                            case 2:
                                fileVerifies = _state.sent();
                                if (fileVerifies) {
                                    verifies = true;
                                }
                                verifies ? this.complete() : this.clear();
                                if (verifies) {
                                    this.info("...verified the '".concat(this.filePath, "' file."));
                                }
                                _state.label = 3;
                            case 3:
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
                var file = this.findFile(this.filePath), filePath = this.filePath, content = file.getContent(), json = {
                    filePath: filePath,
                    content: content
                };
                return json;
            }
        }
    ], [
        {
            key: "fromFileLexerAndParer",
            value: function fromFileLexerAndParer(Class, file, lexer, parser) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var filePath = file.getPath(), tokens = null, node = null, context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node,
                    lexer,
                    parser
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        },
        {
            key: "fromFilePathLexerAndParser",
            value: function fromFilePathLexerAndParser(Class, filePath, lexer, parser) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var tokens = null, node = null, context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node,
                    lexer,
                    parser
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        }
    ]);
    return FileContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgbGV4ZXIsIHBhcnNlcikge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZmluZEZpbGUoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCksXG4gICAgICAgICAgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyKCk7XG5cbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgbWF0Y2hGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVQYXRoTWF0Y2hlcyA9ICh0aGlzLmZpbGVQYXRoID09PSBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhNYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIGF3YWl0IHJlbGVhc2VDb250ZXh0LmJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUxleGVyQW5kUGFyZXIoQ2xhc3MsIGZpbGUsIGxleGVyLCBwYXJzZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBsZXhlciwgcGFyc2VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aExleGVyQW5kUGFyc2VyKENsYXNzLCBmaWxlUGF0aCwgbGV4ZXIsIHBhcnNlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBsZXhlciwgcGFyc2VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJjb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwibGV4ZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImZpbmRGaWxlIiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGhNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwicHJlcGFyZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwiY2xlYXIiLCJhZGRQcm9jZWR1cmVzIiwiYnJlYWsiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZmlsZVZlcmlmaWVzIiwid2FybmluZyIsImRlYnVnIiwidmVyaWZ5RmlsZSIsImNvbXBsZXRlIiwiaW5mbyIsInRvSlNPTiIsImZyb21GaWxlTGV4ZXJBbmRQYXJlciIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0UGF0aCIsInBvcCIsImZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoTGV4ZXJBbmRQYXJzZXIiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4REFMRDt5QkFFdUI7b0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSw0QkFBTjtjQUFNQTthQUFBQSxZQUNQQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTTtnQ0FEdkNOOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFSR047O1lBV25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0Us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