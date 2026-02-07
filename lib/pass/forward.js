"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ForwardPass;
    }
});
var _query = require("../utilities/query");
var _pass = require("../utilities/pass");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
var nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var ForwardPass = /*#__PURE__*/ function() {
    function ForwardPass() {
        _class_call_check(this, ForwardPass);
    }
    _create_class(ForwardPass, [
        {
            key: "run",
            value: function run(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var descended = false;
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var index = 0;
                    descended = this.descendAhead.apply(this, [
                        index,
                        childNodes
                    ].concat(_to_consumable_array(remainingArguments))); ///
                } else {
                    var visited = childNodes.every(function(childNode) {
                        var node = childNode, visited = _this.visitNode.apply(_this, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        if (visited) {
                            return true;
                        }
                    });
                    if (visited) {
                        descended = true;
                    }
                }
                return descended;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var visited;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node; ///
                    visited = this.visitTerminalNode.apply(this, [
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else {
                    var nonTerminalNode = node; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        nonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "descendAhead",
            value: function descendAhead(index, childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descendedAhead = false;
                var descendAhead = remainingArguments.pop(), childNodesLength = childNodes.length;
                if (index === childNodesLength) {
                    descendedAhead = descendAhead();
                } else {
                    var childNode = childNodes[index], node = childNode, visited = this.visitNode.apply(this, [
                        node
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(descendAhead);
                            var aheadIndex = index + 1, descendedAhead = _this.descendAhead.apply(_this, [
                                aheadIndex,
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            return descendedAhead;
                        }
                    ]));
                    if (visited) {
                        descendedAhead = true;
                    }
                }
                return descendedAhead;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var visited = false;
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var descendAhead = remainingArguments.pop(), descendedAhead = descendAhead();
                    if (descendedAhead) {
                        visited = true;
                    }
                    remainingArguments.push(descendAhead);
                } else {
                    visited = true;
                }
                return visited;
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        run: function(node) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                remainingArguments[_key - 1] = arguments[_key];
                            }
                            var visited = false;
                            var childNodes = nonTerminalNode.getChildNodes(), descended = _this.descend.apply(_this, [
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (descended) {
                                visited = true;
                            }
                            return visited;
                        }
                    }
                ]);
                maps.some(function(map) {
                    var _$nodeQuery = map.nodeQuery, run = map.run;
                    var node = _$nodeQuery(nonTerminalNode);
                    if (node !== null) {
                        var success = run.apply(void 0, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success;
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return ForwardPass;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2ZvcndhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuaW1wb3J0IHsgaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J3YXJkUGFzcyB7XG4gIHJ1bihub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmRBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICBkZXNjZW5kZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIGRlc2NlbmRBaGVhZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZEFoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZXNjZW5kQWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgZGVzY2VuZGVkQWhlYWQgPSBkZXNjZW5kQWhlYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTtcblxuICAgICAgICAgICAgICBjb25zdCBhaGVhZEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGFoZWFkSW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIGRlc2NlbmRlZEFoZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkQWhlYWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgY29uc3QgZGVzY2VuZEFoZWFkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gZGVzY2VuZEFoZWFkKCk7XG5cbiAgICAgIGlmIChkZXNjZW5kZWRBaGVhZCkge1xuICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzcztcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9yd2FyZFBhc3MiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJ1biIsIm5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJjaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJkZXNjZW5kQWhlYWQiLCJldmVyeSIsImNoaWxkTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJkZXNjZW5kZWRBaGVhZCIsInBvcCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJwdXNoIiwiYWhlYWRJbmRleCIsIm1hcHMiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUJBTks7b0JBRXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXhCLElBQUEsQUFBTUYsNEJBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lB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