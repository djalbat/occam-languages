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
var _pass = require("../utilities/pass");
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
                                        nodeQuery: _pass.nonTerminalNodeQuery,
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
                                            var nodeQuery, run, node, success;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        nodeQuery = map.nodeQuery, run = map.run;
                                                        node = nodeQuery(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2FzeW5jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuaW1wb3J0IHsgYXN5bmNTb21lLCBhc3luY0V2ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN5bmNQYXNzIHtcbiAgYXN5bmMgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhc3luYyBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBhd2FpdCBhc3luY0V2ZXJ5KGNoaWxkTm9kZXMsIGFzeW5jIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIGFzeW5jIHZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gYXdhaXQgdGhpcy52aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IGF3YWl0IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgYXN5bmMgdmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiBhc3luYyAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSBhd2FpdCB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgYXdhaXQgYXN5bmNTb21lKG1hcHMsIGFzeW5jIChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXN5bmNQYXNzIiwicnVuIiwibm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImNoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJhc3luY0V2ZXJ5IiwiY2hpbGROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJub2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsImdldENoaWxk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