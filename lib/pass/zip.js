"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ZipPass", {
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
                        var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                        if (lastRemainingArgumentFunction) {
                            var index = 0, descendedAhead = this.descendAhead.apply(this, [
                                index,
                                generalChildNodes,
                                specificChildNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (descendedAhead) {
                                descended = true;
                            }
                        } else {
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
                }
                return descended;
            }
        },
        {
            key: "descendAhead",
            value: function descendAhead(index, generalChildNodes, specificChildNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var descendedAhead = false;
                var descendAhead = remainingArguments.pop(), generalChildNodesLength = generalChildNodes.length;
                if (index === generalChildNodesLength) {
                    descendedAhead = descendAhead();
                } else {
                    var generalChildNode = generalChildNodes[index], specificChildNode = specificChildNodes[index], generalNode = generalChildNode, specificNode = specificChildNode, visited = this.visitNode.apply(this, [
                        generalNode,
                        specificNode
                    ].concat(_to_consumable_array(remainingArguments), [
                        function() {
                            remainingArguments.push(descendAhead); ///
                            var aheadIndex = index + 1, descendedAhead = _this.descendAhead.apply(_this, [
                                aheadIndex,
                                generalChildNodes,
                                specificChildNodes
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
                var visited = false;
                var lastRemainingArgumentFunction = (0, _pass.isLastRemainingArgumentFunction)(remainingArguments);
                if (lastRemainingArgumentFunction) {
                    var descendAhead = remainingArguments.pop(), descendedAhead = descendAhead();
                    if (descendAhead) {
                        visited = descendedAhead; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3ppcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9uVGVybWluYWxOb2RlUXVlcnksIHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcywgYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsLCBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBaaXBQYXNzIHtcbiAgcnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoID0gc3BlY2lmaWNDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCA9PT0gc3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY1Rlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhzcGVjaWZpY0NoaWxkTm9kZXMpLFxuICAgICAgICAgICAgZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCA9IHRlcm1pbmFsTm9kZU1hcEZyb21Ob2RlcyhnZW5lcmFsQ2hpbGROb2RlcyksXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVNYXBzRXF1YWwgPSBhcmVUZXJtaW5hbE5vZGVNYXBzRXF1YWwoZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCwgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXApO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlTWFwc0VxdWFsKSB7XG4gICAgICAgIGNvbnN0IGxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uID0gaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgIGlmIChsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbikge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRoaXMuZGVzY2VuZEFoZWFkKGluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICBpZiAoZGVzY2VuZGVkQWhlYWQpIHtcbiAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBnZW5lcmFsQ2hpbGROb2Rlcy5ldmVyeSgoZ2VuZXJhbENoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICAgICAgZGVzY2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY2VuZGVkO1xuICB9XG5cbiAgZGVzY2VuZEFoZWFkKGluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPSBnZW5lcmFsQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPT09IGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoKSB7XG4gICAgICBkZXNjZW5kZWRBaGVhZCA9IGRlc2NlbmRBaGVhZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ2hpbGROb2RlID0gZ2VuZXJhbENoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMsICgpID0+IHtcbiAgICAgICAgICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnB1c2goZGVzY2VuZEFoZWFkKTsgLy8vXG5cbiAgICAgICAgICAgICAgY29uc3QgYWhlYWRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0aGlzLmRlc2NlbmRBaGVhZChhaGVhZEluZGV4LCBnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZXNjZW5kZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodmlzaXRlZCkge1xuICAgICAgICBkZXNjZW5kZWRBaGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZEFoZWFkO1xuICB9XG5cbiAgdmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgc3BlY2lmaWNOb2RlVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbFRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZShnZW5lcmFsVGVybWluYWxOb2RlLCBzcGVjaWZpY1Rlcm1pbmFsTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICB9IGVsc2UgaWYgKGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlICYmIHNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gZGVzY2VuZEFoZWFkKCk7XG5cbiAgICAgIGlmIChkZXNjZW5kQWhlYWQpIHtcbiAgICAgICAgdmlzaXRlZCA9IGRlc2NlbmRlZEFoZWFkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBnZW5lcmFsTm9kZVF1ZXJ5LCBzcGVjaWZpY05vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbE5vZGVRdWVyeShnZW5lcmFsTm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNOb2RlUXVlcnkoc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgoZ2VuZXJhbE5vZGUgIT09IG51bGwpICYmIChzcGVjaWZpY05vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgID0gcnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiWmlwUGFzcyIsInJ1biIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiZ2VuZXJhbENoaWxkTm9kZXMiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJkZXNjZW5kZWQiLCJnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCIsInNwZWNpZmljVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwRnJvbU5vZGVzIiwiZ2VuZXJhbFRlcm1pbmFsTm9kZU1hcCIsInRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCIsImxhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiIsImluZGV4IiwiZGVzY2VuZGVkQWhlYWQiLCJkZXNjZW5kQWhlYWQiLCJldmVyeSIsImdlbmVyYWxDaGlsZE5vZGUiLCJzcGVjaWZpY0NoaWxkTm9kZSIsInBvcCIsInB1c2giLCJhaGVhZEluZGV4IiwiZ2VuZXJhbE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vZGVOb25UZXJtaW5hbE5vZGUiLCJnZW5lcmFsVGVybWluYWxOb2RlIiwic3BlY2lmaWNUZXJtaW5hbE5vZGUiLCJ2aXNpdFRlcm1pbmFsTm9kZSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInZpc2l0Tm9uVGVybWluYWxOb2RlIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWFBOzs7ZUFBQUE7OztvQkFGNkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuSCxJQUFBLEFBQU1BLHdCQUFOO2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNYQyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsV0FBVyxFQUFFQyxZQUFZO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ2xELElBQUlDO2dCQUVKLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTLE9BQWQsSUFBSSxFQUFKO29CQUFlTDtvQkFBYUM7aUJBQW9DLENBQWhFLE9BQTBDLHFCQUFHQztnQkFFN0RDLFVBQVVDLFNBQVUsR0FBRztnQkFFdkIsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxpQkFBaUIsRUFBRUMsa0JBQWtC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