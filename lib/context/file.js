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
    function FileContext(context, filePath, tokens, node) {
        _class_call_check(this, FileContext);
        var _this;
        _this = _call_super(this, FileContext, [
            context
        ]);
        _this.filePath = filePath;
        _this.tokens = tokens;
        _this.node = node;
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
                var lexer = null;
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var parser = null;
                return parser;
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
            key: "findFile",
            value: function findFile() {
                var releaseContext = this.getReleaseContext(), file = releaseContext.findFile(this.filePath);
                return file;
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
            key: "fromFile",
            value: function fromFile(Class, file) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var filePath = file.getPath(), tokens = null, node = null, context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(Class, filePath) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var tokens = null, node = null, context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        }
    ]);
    return FileContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyKCk7XG5cbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgbWF0Y2hGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVQYXRoTWF0Y2hlcyA9ICh0aGlzLmZpbGVQYXRoID09PSBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhNYXRjaGVzO1xuICB9XG5cbiAgZmluZEZpbGUoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCksXG4gICAgICAgICAgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmFkZFByb2NlZHVyZXMoKTtcbiAgfVxuXG4gIGFzeW5jIGJyZWFrKG5vZGUpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgbGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcy5nZXRSZWxlYXNlQ29udGV4dCgpO1xuXG4gICAgYXdhaXQgcmVsZWFzZUNvbnRleHQuYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZpbGVWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RmlsZSgpO1xuXG4gICAgICBpZiAoZmlsZVZlcmlmaWVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmVyaWZpZXMgP1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCkgOlxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKENsYXNzLCBmaWxlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoQ2xhc3MsIGZpbGVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwicmVsZWFzZUNvbnRleHQiLCJnZXRSZWxlYXNlQ29udGV4dCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm1hdGNoRmlsZVBhdGgiLCJmaWxlUGF0aE1hdGNoZXMiLCJmaW5kRmlsZSIsImZpbGUiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXMiLCJwcmVwYXJlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJjbGVhciIsImFkZFByb2NlZHVyZXMiLCJicmVhayIsImxpbmVJbmRleCIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJmaWxlVmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJpbmZvIiwidG9KU09OIiwiZnJvbUZpbGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldFBhdGgiLCJwb3AiLCJmaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzhEQUxEO3lCQUV1QjtvQkFDQzs7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