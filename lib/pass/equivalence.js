"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EquivalencePass;
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
var EquivalencePass = /*#__PURE__*/ function() {
    function EquivalencePass() {
        _class_call_check(this, EquivalencePass);
    }
    _create_class(EquivalencePass, [
        {
            key: "run",
            value: function run(leftNode, rightNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    leftNode,
                    rightNode
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(leftChildNodes, rightChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descended = false;
                var leftChildNodesLength = leftChildNodes.length, rightChildNodesLength = rightChildNodes.length;
                if (leftChildNodesLength === rightChildNodesLength) {
                    var leftTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(leftChildNodes), rightTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(rightChildNodes), terminalNodeMapsEqual = areTerminalNodeMapsEqual(leftTerminalNodeMap, rightTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        descended = leftChildNodes.every(function(leftChildNode, index) {
                            var rightChildNode = rightChildNodes[index], leftNode = leftChildNode, rightNode = rightChildNode, visited = _this.visitNode.apply(_this, [
                                leftNode,
                                rightNode
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (visited) {
                                return true;
                            }
                        });
                    }
                }
                return descended;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(leftNode, rightNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited = false;
                var leftNodeTerminalNode = leftNode.isTerminalNode(), rightNodeTerminalNode = rightNode.isTerminalNode(), leftNodeNonTerminalNode = leftNode.isNonTerminalNode(), rightNodeNonTerminalNode = rightNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (leftNodeTerminalNode && rightNodeTerminalNode) {
                    var leftTerminalNode = leftNode, rightTerminalNode = rightNode; ///
                    visited = this.visitTerminalNode.apply(this, [
                        leftTerminalNode,
                        rightTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else if (leftNodeNonTerminalNode && rightNodeNonTerminalNode) {
                    var leftNonTerminalNode = leftNode, rightNonTerminalNode = rightNode; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        leftNonTerminalNode,
                        rightNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(leftTerminalNode, rightTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited;
                visited = true;
                return visited;
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        leftNodeQuery: _pass.nonTerminalNodeQuery,
                        rightNodeQuery: _pass.nonTerminalNodeQuery,
                        run: function(leftNode, rightNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var visited = false;
                            var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(); ///
                            if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                                var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, descended = _this.descend.apply(_this, [
                                    leftChildNodes,
                                    rightChildNodes
                                ].concat(_to_consumable_array(remainingArguments)));
                                if (descended) {
                                    visited = true;
                                }
                            }
                            return visited;
                        }
                    }
                ]);
                maps.some(function(map) {
                    var leftNodeQuery = map.leftNodeQuery, rightNodeQuery = map.rightNodeQuery, run = map.run;
                    var leftNode = leftNodeQuery(leftNonTerminalNode), rightNode = rightNodeQuery(rightNonTerminalNode); ///
                    if (leftNode !== null && rightNode !== null) {
                        var success = run.apply(void 0, [
                            leftNode,
                            rightNode
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success; ///
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return EquivalencePass;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSwgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWl2YWxlbmNlUGFzcyB7XG4gIHJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0Q2hpbGROb2Rlc0xlbmd0aCA9IGxlZnRDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgIHJpZ2h0Q2hpbGROb2Rlc0xlbmd0aCA9IHJpZ2h0Q2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobGVmdENoaWxkTm9kZXNMZW5ndGggPT09IHJpZ2h0Q2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgbGVmdFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhsZWZ0Q2hpbGROb2RlcyksXG4gICAgICAgICAgICByaWdodFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhyaWdodENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGxlZnRUZXJtaW5hbE5vZGVNYXAsIHJpZ2h0VGVybWluYWxOb2RlTWFwKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBkZXNjZW5kZWQgPSBsZWZ0Q2hpbGROb2Rlcy5ldmVyeSgobGVmdENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCByaWdodENoaWxkTm9kZSA9IHJpZ2h0Q2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgbGVmdE5vZGUgPSBsZWZ0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodE5vZGUgPSByaWdodENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0Tm9kZVRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmlnaHROb2RlVGVybWluYWxOb2RlID0gcmlnaHROb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbGVmdE5vZGVOb25UZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0Tm9kZU5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGxlZnROb2RlVGVybWluYWxOb2RlICYmIHJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShsZWZ0VGVybWluYWxOb2RlLCByaWdodFRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGxlZnROb2RlTm9uVGVybWluYWxOb2RlICYmIHJpZ2h0Tm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUobGVmdFRlcm1pbmFsTm9kZSwgcmlnaHRUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGxlZnROb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICByaWdodE5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBsZWZ0Q2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGxlZnROb2RlUXVlcnksIHJpZ2h0Tm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3QgbGVmdE5vZGUgPSBsZWZ0Tm9kZVF1ZXJ5KGxlZnROb25UZXJtaW5hbE5vZGUpLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vZGUgPSByaWdodE5vZGVRdWVyeShyaWdodE5vblRlcm1pbmFsTm9kZSk7ICAvLy9cblxuICAgICAgaWYgKChsZWZ0Tm9kZSAhPT0gbnVsbCkgJiYgKHJpZ2h0Tm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJ1bihsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIHZpc2l0ZWQgPSBzdWNjZXNzOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWl2YWxlbmNlUGFzcyIsInJ1biIsImxlZnROb2RlIiwicmlnaHROb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJsZWZ0Q2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Q2hpbGROb2Rlc0xlbmd0aCIsImxlZnRUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJyaWdodFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImV2ZXJ5IiwibGVmdENoaWxkTm9kZSIsImluZGV4IiwicmlnaHRDaGlsZE5vZGUiLCJsZWZ0Tm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwicmlnaHROb2RlVGVybWluYWxOb2RlIiwibGVmdE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9kZU5vblRlcm1pbmFsTm9kZSIsImxlZnRUZXJtaW5hbE5vZGUiLCJyaWdodFRlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwibGVmdE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwicmlnaHROb2RlUXVlcnkiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJzb21lIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztvQkFGMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFBLEFBQU1BLGdDQUFOO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLFFBQVEsRUFBRUMsU0FBUztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FB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