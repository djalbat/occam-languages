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
                    var leftTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(leftChildNodes), rightTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(rightChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(leftTerminalNodeMap, rightTerminalNodeMap);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSwgdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzLCBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1aXZhbGVuY2VQYXNzIHtcbiAgcnVuKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRDaGlsZE5vZGVzTGVuZ3RoID0gbGVmdENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgcmlnaHRDaGlsZE5vZGVzTGVuZ3RoID0gcmlnaHRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Q2hpbGROb2Rlc0xlbmd0aCA9PT0gcmlnaHRDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybWluYWxOb2RlTWFwID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKGxlZnRDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybWluYWxOb2RlTWFwID0gdGVybWluYWxOb2RlTWFwRnJvbU5vZGVzKHJpZ2h0Q2hpbGROb2RlcyksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwobGVmdFRlcm1pbmFsTm9kZU1hcCwgcmlnaHRUZXJtaW5hbE5vZGVNYXApO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGRlc2NlbmRlZCA9IGxlZnRDaGlsZE5vZGVzLmV2ZXJ5KChsZWZ0Q2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0Q2hpbGROb2RlID0gcmlnaHRDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBsZWZ0Tm9kZSA9IGxlZnRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWQ7XG4gIH1cblxuICB2aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb2RlVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVUZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSA9IGxlZnROb2RlLmlzTm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVUZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH0gZWxzZSBpZiAobGVmdE5vZGVOb25UZXJtaW5hbE5vZGUgJiYgcmlnaHROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHROb2RlOyAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdFRlcm1pbmFsTm9kZShsZWZ0VGVybWluYWxOb2RlLCByaWdodFRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IC8vL1xuICAgIGxldCB2aXNpdGVkO1xuXG4gICAgdmlzaXRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbGVmdE5vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJpZ2h0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiAobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gICAgICAgICAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICBpZiAoZGVzY2VuZGVkKSB7XG4gICAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbWFwcy5zb21lKChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbGVmdE5vZGVRdWVyeSwgcmlnaHROb2RlUXVlcnksIHJ1biB9ID0gbWFwO1xuXG4gICAgICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnROb2RlUXVlcnkobGVmdE5vblRlcm1pbmFsTm9kZSksICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZVF1ZXJ5KHJpZ2h0Tm9uVGVybWluYWxOb2RlKTsgIC8vL1xuXG4gICAgICBpZiAoKGxlZnROb2RlICE9PSBudWxsKSAmJiAocmlnaHROb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcnVuKGxlZnROb2RlLCByaWdodE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1aXZhbGVuY2VQYXNzIiwicnVuIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJsZWZ0Q2hpbGROb2RlcyIsInJpZ2h0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImxlZnRDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHRDaGlsZE5vZGVzTGVuZ3RoIiwibGVmdFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyIsInJpZ2h0VGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiZXZlcnkiLCJsZWZ0Q2hpbGROb2RlIiwiaW5kZXgiLCJyaWdodENoaWxkTm9kZSIsImxlZnROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVUZXJtaW5hbE5vZGUiLCJsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwicmlnaHROb2RlTm9uVGVybWluYWxOb2RlIiwibGVmdFRlcm1pbmFsTm9kZSIsInJpZ2h0VGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJsZWZ0Tm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJyaWdodE5vZGVRdWVyeSIsImxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29CQUZvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsZ0NBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsUUFBUSxFQUFFQyxTQUFTO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9B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