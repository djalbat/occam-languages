"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AsyncPass;
    }
});
var _query = require("../utilities/query");
var _asynchronous = require("../utilities/asynchronous");
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
var nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var AsyncPass = /*#__PURE__*/ function() {
    function AsyncPass() {
        _class_call_check(this, AsyncPass);
    }
    _create_class(AsyncPass, [
        {
            key: "run",
            value: function run(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var success, visited;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.visitNode.apply(this, [
                                        node
                                    ].concat(_to_consumable_array(remainingArguments)))
                                ];
                            case 1:
                                visited = _state.sent();
                                success = visited; ///
                                return [
                                    2,
                                    success
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "descend",
            value: function descend(childNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var _this, descended, visited;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                descended = false;
                                return [
                                    4,
                                    (0, _asynchronous.asyncEvery)(childNodes, function(childNode) {
                                        return _async_to_generator(function() {
                                            var node, visited;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        node = childNode;
                                                        return [
                                                            4,
                                                            this.visitNode.apply(this, [
                                                                node
                                                            ].concat(_to_consumable_array(remainingArguments)))
                                                        ];
                                                    case 1:
                                                        visited = _state.sent();
                                                        if (visited) {
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
                                        }).call(_this);
                                    })
                                ];
                            case 1:
                                visited = _state.sent();
                                if (visited) {
                                    descended = true;
                                }
                                return [
                                    2,
                                    descended
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "visitNode",
            value: function visitNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var visited, nodeTerminalNode, terminalNode, nonTerminalNode;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nodeTerminalNode = node.isTerminalNode();
                                if (!nodeTerminalNode) return [
                                    3,
                                    2
                                ];
                                terminalNode = node; ///
                                return [
                                    4,
                                    this.visitTerminalNode.apply(this, [
                                        terminalNode
                                    ].concat(_to_consumable_array(remainingArguments)))
                                ];
                            case 1:
                                visited = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                nonTerminalNode = node; ///
                                return [
                                    4,
                                    this.visitNonTerminalNode.apply(this, [
                                        nonTerminalNode
                                    ].concat(_to_consumable_array(remainingArguments)))
                                ];
                            case 3:
                                visited = _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2,
                                    visited
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var visited;
                    return _ts_generator(this, function(_state) {
                        visited = true;
                        return [
                            2,
                            visited
                        ];
                    });
                })();
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _async_to_generator(function() {
                    var _this, visited, maps;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                visited = false;
                                maps = this.constructor.maps;
                                maps = _to_consumable_array(maps).concat([
                                    {
                                        nodeQuery: nonTerminalNodeQuery,
                                        run: function(node) {
                                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                                remainingArguments[_key - 1] = arguments[_key];
                                            }
                                            return _async_to_generator(function() {
                                                var visited, childNodes, descended;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            visited = false;
                                                            childNodes = nonTerminalNode.getChildNodes();
                                                            return [
                                                                4,
                                                                this.descend.apply(this, [
                                                                    childNodes
                                                                ].concat(_to_consumable_array(remainingArguments)))
                                                            ];
                                                        case 1:
                                                            descended = _state.sent();
                                                            if (descended) {
                                                                visited = true;
                                                            }
                                                            return [
                                                                2,
                                                                visited
                                                            ];
                                                    }
                                                });
                                            }).call(_this);
                                        }
                                    }
                                ]);
                                return [
                                    4,
                                    (0, _asynchronous.asyncSome)(maps, function(map) {
                                        return _async_to_generator(function() {
                                            var _$nodeQuery, run, node, success;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        _$nodeQuery = map.nodeQuery, run = map.run;
                                                        node = _$nodeQuery(nonTerminalNode);
                                                        if (!(node !== null)) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            run.apply(void 0, [
                                                                node
                                                            ].concat(_to_consumable_array(remainingArguments)))
                                                        ];
                                                    case 1:
                                                        success = _state.sent();
                                                        visited = success; ///
                                                        return [
                                                            2,
                                                            true
                                                        ];
                                                    case 2:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        })();
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    visited
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return AsyncPass;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2FzeW5jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBhc3luY1NvbWUsIGFzeW5jRXZlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3luY1Bhc3Mge1xuICBhc3luYyBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gYXdhaXQgdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGFzeW5jIGRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGF3YWl0IGFzeW5jRXZlcnkoY2hpbGROb2RlcywgYXN5bmMgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB2aXNpdGVkID0gYXdhaXQgdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmlzaXRlZCkge1xuICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSBhd2FpdCB0aGlzLnZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gYXdhaXQgdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICBhc3luYyB2aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICBhc3luYyB2aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IGFzeW5jIChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IGF3YWl0IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBhd2FpdCBhc3luY1NvbWUobWFwcywgYXN5bmMgKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBc3luY1Bhc3MiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1biIsIm5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJjaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwiYXN5bmNFdmVyeSIsImNoaWxkTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwiZ2V0Q2hpbGROb2RlcyIsImFzeW5jU29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTEs7NEJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFeEIsSUFBQSxBQUFNRiwwQkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDYkcsS0FBQUE7bUJBQU4sU0FBTUEsSUFBSUMsSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7Ozt3QkFDL0JDLFNBRUVDOzs7O2dDQUFVOztvQ0FBTSxJQUFJLENBQUNDLFNBQVMsT0FBZCxJQUFJLEVBQUo7d0NBQWVKO3NDQUFmLE9BQXFCLHFCQUFHQzs7O2dDQUF4Q0UsVUFBVTtnQ0FFaEJELFVBQVVDLFNBQVUsR0FBRztnQ0FFdkI7O29DQUFPRDs7OztnQkFDVDs7OztZQUVNRyxLQUFBQTttQkFBTixTQUFNQSxRQUFRQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHTCxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7OytCQUN6Q00sV0FFRUo7Ozs7O2dDQUZGSSxZQUFZO2dDQUVBOztvQ0FBTUMsSUFBQUEsd0JBQVUsRUFBQ0Ys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