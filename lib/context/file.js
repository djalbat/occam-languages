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
                var file = this.findFile(this.filePath), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
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
        },
        {
            key: "fromFilePathTokensAndNode",
            value: function fromFilePathTokensAndNode(Class, filePath, tokens, node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var context = remainingArguments.pop(), fileContext = _construct(Class, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBtYXRjaEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gKHRoaXMuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcblxuICAgIHJldHVybiBmaWxlUGF0aE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICBhc3luYyBicmVhayhub2RlKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMuZ2V0UmVsZWFzZUNvbnRleHQoKTtcblxuICAgIGF3YWl0IHJlbGVhc2VDb250ZXh0LmJyZWFrKGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCBmaWxlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUZpbGUoKTtcblxuICAgICAgaWYgKGZpbGVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShDbGFzcywgZmlsZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKENsYXNzLCBmaWxlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aFRva2Vuc0FuZE5vZGUoQ2xhc3MsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGhNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwicHJlcGFyZSIsImZpbGUiLCJmaW5kRmlsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwianNvbiIsImNsZWFyIiwiYWRkUHJvY2VkdXJlcyIsImJyZWFrIiwibGluZUluZGV4IiwicmVsZWFzZUNvbnRleHQiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImdldFJlbGVhc2VDb250ZXh0IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJmaWxlVmVyaWZpZXMiLCJ3YXJuaW5nIiwiZGVidWciLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJpbmZvIiwidG9KU09OIiwiZnJvbUZpbGUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImdldFBhdGgiLCJwb3AiLCJmaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aCIsImZyb21GaWxlUGF0aFRva2Vuc0FuZE5vZGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4REFMRDt5QkFFdUI7b0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0Is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