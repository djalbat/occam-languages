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
                    descended = this.descendForward.apply(this, [
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
            key: "descendForward",
            value: function descendForward(index, childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descendedForward = false;
                var descendForward = remainingArguments.pop(), childNodesLength = childNodes.length;
                if (index === childNodesLength) {
                    descendedForward = descendForward();
                } else {
                    var childNode = childNodes[index], node = childNode, visited = this.visitNode.apply(this, [
                        node
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(descendForward);
                            var aheadIndex = index + 1, descendedForward = _this.descendForward.apply(_this, [
                                aheadIndex,
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            return descendedForward;
                        }
                    ]));
                    if (visited) {
                        descendedForward = true;
                    }
                }
                return descendedForward;
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
                    var descendForward = remainingArguments.pop(), descendedForward = descendForward();
                    if (descendedForward) {
                        visited = true;
                    }
                    remainingArguments.push(descendForward);
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
                        nodeQuery: _pass.nonTerminalNodeQuery,
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
                    var nodeQuery = map.nodeQuery, run = map.run;
                    var node = nodeQuery(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2ZvcndhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LCBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcndhcmRQYXNzIHtcbiAgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZEZvcndhcmQoaW5kZXgsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2aXNpdGVkID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICBkZXNjZW5kRm9yd2FyZChpbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZEZvcndhcmQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlc2NlbmRGb3J3YXJkID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGRlc2NlbmRlZEZvcndhcmQgPSBkZXNjZW5kRm9yd2FyZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgKCkgPT4ge1xuICAgICAgICAgICAgICByZW1haW5pbmdBcmd1bWVudHMucHVzaChkZXNjZW5kRm9yd2FyZCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkRm9yd2FyZCA9IHRoaXMuZGVzY2VuZEZvcndhcmQoYWhlYWRJbmRleCwgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVzY2VuZGVkRm9yd2FyZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICBkZXNjZW5kZWRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkRm9yd2FyZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgaWYgKGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKSB7XG4gICAgICBjb25zdCBkZXNjZW5kRm9yd2FyZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgICBkZXNjZW5kZWRGb3J3YXJkID0gZGVzY2VuZEZvcndhcmQoKTtcblxuICAgICAgaWYgKGRlc2NlbmRlZEZvcndhcmQpIHtcbiAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRGb3J3YXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBub2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBub2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9kZVF1ZXJ5KG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzcztcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9yd2FyZFBhc3MiLCJydW4iLCJub2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImluZGV4IiwiZGVzY2VuZEZvcndhcmQiLCJldmVyeSIsImNoaWxkTm9kZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJkZXNjZW5kZWRGb3J3YXJkIiwicG9wIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJhaGVhZEluZGV4IiwibWFwcyIsIm5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiZ2V0Q2hpbGROb2RlcyIsInNvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29CQUZpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQUEsQUFBTUEsNEJBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFB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