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
            key: "getTypePrefix",
            value: function getTypePrefix() {
                var context = this.getContext(), typePrefix = context.getTypePrefix();
                return typePrefix;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGw7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbnVsbDtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKTtcblxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBmaW5kRmlsZSgpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKSxcbiAgICAgICAgICBmaWxlID0gcmVsZWFzZUNvbnRleHQuZmluZEZpbGUodGhpcy5maWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuYWRkUHJvY2VkdXJlcygpO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsobm9kZSkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLmdldFJlbGVhc2VDb250ZXh0KCk7XG5cbiAgICBhd2FpdCByZWxlYXNlQ29udGV4dC5icmVhayhmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlGaWxlKCk7XG5cbiAgICAgIGlmIChmaWxlVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllcyA/XG4gICAgICAgIHRoaXMuY29tcGxldGUoKSA6XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoQ2xhc3MsIGZpbGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChDbGFzcywgZmlsZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgQ2xhc3MoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiY29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRUeXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsInR5cGVQcmVmaXgiLCJnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJyZWxlYXNlQ29udGV4dCIsImdldFJlbGVhc2VDb250ZXh0IiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwibWF0Y2hGaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsImZpbmRGaWxlIiwiZmlsZSIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsInByZXBhcmUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwianNvbiIsImNsZWFyIiwiYWRkUHJvY2VkdXJlcyIsImJyZWFrIiwibGluZUluZGV4IiwibGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImZpbGVWZXJpZmllcyIsIndhcm5pbmciLCJkZWJ1ZyIsInZlcmlmeUZpbGUiLCJjb21wbGV0ZSIsImluZm8iLCJ0b0pTT04iLCJmcm9tRmlsZSIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0UGF0aCIsInBvcCIsImZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7OERBTEQ7eUJBRXVCO29CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUEsWUFDUEMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEeEJKOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxJQUFJLEdBQUdBOzs7a0JBTktKOztZQVNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVE7Z0JBRWQsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTO2dCQUVm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