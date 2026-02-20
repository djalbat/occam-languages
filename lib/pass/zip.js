"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZipPass;
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
var ZipPass = /*#__PURE__*/ function() {
    function ZipPass() {
        _class_call_check(this, ZipPass);
    }
    _create_class(ZipPass, [
        {
            key: "run",
            value: function run(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    generalNode,
                    specificNode
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var descended = false;
                var generalChildNodesLength = generalChildNodes.length, specificChildNodesLength = specificChildNodes.length;
                if (generalChildNodesLength === specificChildNodesLength) {
                    var specificTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(specificChildNodes), generalTerminalNodeMap = (0, _pass.terminalNodeMapFromNodes)(generalChildNodes), terminalNodeMapsEqual = (0, _pass.areTerminalNodeMapsEqual)(generalTerminalNodeMap, specificTerminalNodeMap);
                    if (terminalNodeMapsEqual) {
                        var visited = generalChildNodes.every(function(generalChildNode, index) {
                            var specificChildNode = specificChildNodes[index], specificNode = specificChildNode, generalNode = generalChildNode, visited = _this.visitNode.apply(_this, [
                                generalNode,
                                specificNode
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (visited) {
                                return true;
                            }
                        });
                        if (visited) {
                            descended = true;
                        }
                    }
                }
                return descended;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(generalNode, specificNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var visited = false;
                var generalNodeTerminalNode = generalNode.isTerminalNode(), specificNodeTerminalNode = specificNode.isTerminalNode(), generalNodeNonTerminalNode = generalNode.isNonTerminalNode(), specificNodeNonTerminalNode = specificNode.isNonTerminalNode();
                if (false) {
                ///
                } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
                    var generalTerminalNode = generalNode, specificTerminalNode = specificNode; ///
                    visited = this.visitTerminalNode.apply(this, [
                        generalTerminalNode,
                        specificTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
                    var generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        generalNonTerminalNode,
                        specificNonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(generalTerminalNode, specificTerminalNode) {
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
            value: function visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        generalNodeQuery: _pass.nonTerminalNodeQuery,
                        specificNodeQuery: _pass.nonTerminalNodeQuery,
                        run: function(generalNode, specificNode) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var visited = false;
                            var generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///
                            if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
                                var generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, descended = _this.descend.apply(_this, [
                                    generalChildNodes,
                                    specificChildNodes
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
                    var generalNodeQuery = map.generalNodeQuery, specificNodeQuery = map.specificNodeQuery, run = map.run;
                    var generalNode = generalNodeQuery(generalNonTerminalNode), specificNode = specificNodeQuery(specificNonTerminalNode); ///
                    if (generalNode !== null && specificNode !== null) {
                        var success = run.apply(void 0, [
                            generalNode,
                            specificNode
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success; ///
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return ZipPass;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3ppcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnksIHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFppcFBhc3Mge1xuICBydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHN1Y2Nlc3M7XG5cbiAgICBjb25zdCB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHN1Y2Nlc3MgPSB2aXNpdGVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGRlc2NlbmQoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoID0gc3BlY2lmaWNDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCA9PT0gc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY1Rlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhzcGVjaWZpY0NoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhnZW5lcmFsQ2hpbGROb2RlcyksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwoZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCwgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXApO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBnZW5lcmFsQ2hpbGROb2Rlcy5ldmVyeSgoZ2VuZXJhbENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NoaWxkTm9kZSA9IHNwZWNpZmljQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIHZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cblxuICB2aXNpdE5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgIGxldCB7IG1hcHMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICBtYXBzID0gWyAvLy9cbiAgICAgIC4uLm1hcHMsXG4gICAgICB7XG4gICAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBzcGVjaWZpY05vZGVRdWVyeTogbm9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgIHJ1bjogKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgPT4ge1xuICAgICAgICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgICAgICAgIGlmIChnZW5lcmFsTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHNwZWNpZmljTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgICAgICAgICB2aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmlzaXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cblxuICAgIG1hcHMuc29tZSgobWFwKSA9PiB7XG4gICAgICBjb25zdCB7IGdlbmVyYWxOb2RlUXVlcnksIHNwZWNpZmljTm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTm9kZVF1ZXJ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUpLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY05vZGVRdWVyeShzcGVjaWZpY05vblRlcm1pbmFsTm9kZSk7ICAvLy9cblxuICAgICAgaWYgKChnZW5lcmFsTm9kZSAhPT0gbnVsbCkgJiYgKHNwZWNpZmljTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyAgPSBydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICB2aXNpdGVkID0gc3VjY2VzczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJaaXBQYXNzIiwicnVuIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoIiwic3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJnZW5lcmFsVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwiZXZlcnkiLCJnZW5lcmFsQ2hpbGROb2RlIiwiaW5kZXgiLCJzcGVjaWZpY0NoaWxkTm9kZSIsImdlbmVyYWxOb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlTm9uVGVybWluYWxOb2RlIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZSIsInNwZWNpZmljVGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsInNvbWUiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29CQUZvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsd0JBQU47YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsV0FBVyxFQUFFQyxZQUFZO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ2xELElBQUlDO2dCQUVKLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLE9BQWQsSUFBSSxFQUFKO29CQUFlTDtvQkFBYUM7aUJBQW9DLENBQWhFLE9BQTBDLHFCQUFHQztnQkFFN0RDLFVBQVVDLFNBQVUsR0FBRztnQkFFdkIsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxpQkFBaUIsRUFBRUMsa0JBQWtCOztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR04scUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNsRSxJQUFJTyxZQUFZO2dCQUVoQixJQUFNQywwQkFBMEJILGtCQUFrQkksTUFBTSxFQUNsREMsMkJBQTJCSixtQkFBbUJHLE1BQU07Z0JBRTFELElBQUlELDRCQUE0QkUsMEJB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