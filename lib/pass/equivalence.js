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
                    var leftTerminalNodeMap = terminalNodeMapFromNodes(leftChildNodes), rightTerminalNodeMap = terminalNodeMapFromNodes(rightChildNodes), terminalNodeMapsEqual = areTerminalNodeMapsEqual(leftTerminalNodeMap, rightTerminalNodeMap);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL2VxdWl2YWxlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub25UZXJtaW5hbE5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVpdmFsZW5jZVBhc3Mge1xuICBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdENoaWxkTm9kZXNMZW5ndGggPSBsZWZ0Q2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICByaWdodENoaWxkTm9kZXNMZW5ndGggPSByaWdodENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnRDaGlsZE5vZGVzTGVuZ3RoID09PSByaWdodENoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMobGVmdENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMocmlnaHRDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZU1hcHNFcXVhbCA9IGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbChsZWZ0VGVybWluYWxOb2RlTWFwLCByaWdodFRlcm1pbmFsTm9kZU1hcCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVNYXBzRXF1YWwpIHtcbiAgICAgICAgZGVzY2VuZGVkID0gbGVmdENoaWxkTm9kZXMuZXZlcnkoKGxlZnRDaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmlnaHRDaGlsZE5vZGUgPSByaWdodENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGxlZnROb2RlID0gbGVmdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdE5vZGVUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSA9IHJpZ2h0Tm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGxlZnROb2RlTm9uVGVybWluYWxOb2RlID0gbGVmdE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZVRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUobGVmdFRlcm1pbmFsTm9kZSwgcmlnaHRUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmIChsZWZ0Tm9kZU5vblRlcm1pbmFsTm9kZSAmJiByaWdodE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSBsZWZ0Tm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodE5vZGU7IC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxuXG4gIHZpc2l0VGVybWluYWxOb2RlKGxlZnRUZXJtaW5hbE5vZGUsIHJpZ2h0VGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgLy8vXG4gICAgbGV0IHZpc2l0ZWQ7XG5cbiAgICB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBsZWZ0Tm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcmlnaHROb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChsZWZ0Tm9kZSwgcmlnaHROb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodENoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBsZWZ0Tm9kZVF1ZXJ5LCByaWdodE5vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbGVmdE5vZGVRdWVyeShsZWZ0Tm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHROb2RlUXVlcnkocmlnaHROb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgobGVmdE5vZGUgIT09IG51bGwpICYmIChyaWdodE5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBydW4obGVmdE5vZGUsIHJpZ2h0Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVpdmFsZW5jZVBhc3MiLCJydW4iLCJsZWZ0Tm9kZSIsInJpZ2h0Tm9kZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInN1Y2Nlc3MiLCJ2aXNpdGVkIiwidmlzaXROb2RlIiwiZGVzY2VuZCIsImxlZnRDaGlsZE5vZGVzIiwicmlnaHRDaGlsZE5vZGVzIiwiZGVzY2VuZGVkIiwibGVmdENoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodENoaWxkTm9kZXNMZW5ndGgiLCJsZWZ0VGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwicmlnaHRUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwiLCJldmVyeSIsImxlZnRDaGlsZE5vZGUiLCJpbmRleCIsInJpZ2h0Q2hpbGROb2RlIiwibGVmdE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJpZ2h0Tm9kZVRlcm1pbmFsTm9kZSIsImxlZnROb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vZGVOb25UZXJtaW5hbE5vZGUiLCJsZWZ0VGVybWluYWxOb2RlIiwicmlnaHRUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImxlZnROb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInJpZ2h0Tm9kZVF1ZXJ5IiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7b0JBRmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxnQ0FBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDNUMsSUFBSUM7Z0JBRUosSUFBTUMsVUFBVSxJQUFJLENBQUNDLFNBQVMsT0FBZCxJQUFJLEVBQUo7b0JBQWVMO29CQUFVQztpQkFBaUMsQ0FBMUQsT0FBb0MscUJBQUdDO2dCQUV2REMsVUFBVUMsU0FBVSxHQUFHO2dCQUV2QixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGNBQWMsRUFBRUMsZUFBZTs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdOLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDNUQsSUFBSU8sWUFBWTtnQkFFaEIsSUFBTUMsdUJBQXVCSCxlQUFlSSxNQUFNLEVBQ2hEQyx3QkFBd0JKLGdCQUFnQkcsTUFBTTtnQkFFaEQsSUFBSUQseUJBQXlCRSx1QkFBdUI7b0JBQ2xELElBQU1DLHNCQUFzQkMseUJBQXlCUCxpQkFDL0NRLHVCQUF1QkQseUJBQXlCTixrQkFDaERRLHdCQUF3QkMseUJBQXlCSixxQkFBcUJFO29CQUU1RSxJQUFJQyx1QkFBdUI7d0JBQ3pCUCxZQUFZRixlQUFlVyxLQUFLLENBQUMsU0FBQ0MsZUFBZUM7NEJBQy9DLElBQU1DLGlCQUFpQmIsZUFBZSxDQUFDWSxNQUFNLEVBQ3ZDcEIsV0FBV21CLGVBQ1hsQixZQUFZb0IsZ0JBQ1pqQixVQUFVLE1BQUtDLFNBQVMsY0FBZDtnQ0FBZUw7Z0NBQVVDOzZCQUFpQyxDQUExRCxPQUFvQyxxQkFBR0M7NEJBRXZELElBQUlFLFNBQVM7Z0NBQ1gsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPSztZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVMLFFBQVEsRUFBRUMsU0FBUztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNsRCxJQUFJRSxVQUFVO2dCQUVkLElBQU1rQix1QkFBdUJ0QixTQUFTdUIsY0FBYyxJQUM5Q0Msd0JBQXdCdkIsVUFBVXNCLGNBQWMsSUFDaERFLDBCQUEwQnpCLFNBQVMwQixpQkFBaUIsSUFDcERDLDJCQUEyQjFCLFVBQVV5QixpQkFBaUI7Z0JBRTVELElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSUosd0JBQXdCRSx1QkFBdUI7b0JBQ3hELElBQU1JLG1CQUFtQjVCLFVBQ25CNkIsb0JBQW9CNUIsV0FBWSxHQUFHO29CQUV6Q0csVUFBVSxJQUFJLENBQUMwQixpQkFBaUIsT0FBdEIsSUFBSSxFQUFKO3dCQUF1QkY7d0JBQWtCQztxQkFBeUMsQ0FBbEYsT0FBNEQscUJBQUczQjtnQkFDM0UsT0FBTyxJQUFJdUIsMkJBQTJCRSwwQkFBMEI7b0JBQzlELElBQU1JLHNCQUFzQi9CLFVBQ3RCZ0MsdUJBQXVCL0IsV0FBVyxHQUFHO29CQUUzQ0csVUFBVSxJQUFJLENBQUM2QixvQkFBb0IsT0FBekIsSUFBSSxFQUFKO3dCQUEwQkY7d0JBQXFCQztxQkFBNEMsQ0FBM0YsT0FBcUUscUJBQUc5QjtnQkFDcEY7Z0JBRUEsT0FBT0U7WUFDVDs7O1lBRUEwQixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCRixnQkFBZ0IsRUFBRUMsaUJBQWlCO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHM0IscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUMxRSxJQUFJRTtnQkFFSkEsVUFBVTtnQkFFVixPQUFPQTtZQUNUOzs7WUFFQTZCLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLG1CQUFtQixFQUFFQyxvQkFBb0I7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUc5QixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7O2dCQUNuRixJQUFJRSxVQUFVO2dCQUVkLElBQUksQUFBRThCLE9BQVMsSUFBSSxDQUFDLFdBQVcsQ0FBekJBO2dCQUVOQSxPQUFPLEFBQ0wscUJBQUdBLGFBREU7b0JBRUw7d0JBQ0VDLGVBQWVDLDBCQUFvQjt3QkFDbkNDLGdCQUFnQkQsMEJBQW9CO3dCQUNwQ3JDLEtBQUssU0FBQ0MsVUFBVUM7NkRBQWNDO2dDQUFBQTs7NEJBQzVCLElBQUlFLFVBQVU7NEJBRWQsSUFBTWtDLDhCQUE4QlAsb0JBQW9CUSxXQUFXLElBQzdEQywrQkFBK0JSLHFCQUFxQk8sV0FBVyxJQUFJLEdBQUc7NEJBRTVFLElBQUlELGdDQUFnQ0UsOEJBQThCO2dDQUNoRSxJQUFNQyxnQ0FBZ0NWLG9CQUFvQlcsYUFBYSxJQUNqRUMsaUNBQWlDWCxxQkFBcUJVLGFBQWEsSUFDbkVuQyxpQkFBaUJrQywrQkFDakJqQyxrQkFBa0JtQyxnQ0FDbEJsQyxZQUFZLE1BQUtILE9BQU8sY0FBWjtvQ0FBYUM7b0NBQWdCQztpQ0FBdUMsQ0FBcEUsT0FBOEMscUJBQUdOO2dDQUVuRSxJQUFJTyxXQUFXO29DQUNiTCxVQUFVO2dDQUNaOzRCQUNGOzRCQUVBLE9BQU9BO3dCQUNUO29CQUNGO2lCQUNEO2dCQUVEOEIsS0FBS1UsSUFBSSxDQUFDLFNBQUNDO29CQUNULElBQVFWLGdCQUF1Q1UsSUFBdkNWLGVBQWVFLGlCQUF3QlEsSUFBeEJSLGdCQUFnQnRDLE1BQVE4QyxJQUFSOUM7b0JBRXZDLElBQU1DLFdBQVdtQyxjQUFjSixzQkFDekI5QixZQUFZb0MsZUFBZUwsdUJBQXdCLEdBQUc7b0JBRTVELElBQUksQUFBQ2hDLGFBQWEsUUFBVUMsY0FBYyxNQUFPO3dCQUMvQyxJQUFNRSxVQUFVSixVQUFBQSxLQUFBQSxHQUFBQTs0QkFBSUM7NEJBQVVDO3lCQUFpQyxDQUEvQ0YsT0FBeUIscUJBQUdHO3dCQUU1Q0UsVUFBVUQsU0FBVSxHQUFHO3dCQUV2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQXpIbUJOIn0=