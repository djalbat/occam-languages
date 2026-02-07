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
                        generalNodeQuery: nonTerminalNodeQuery,
                        specificNodeQuery: nonTerminalNodeQuery,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXNzL3ppcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5pbXBvcnQgeyB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMsIGFyZVRlcm1pbmFsTm9kZU1hcHNFcXVhbCwgaXNMYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFzc1wiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5leHBvcnQgY2xhc3MgWmlwUGFzcyB7XG4gIHJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgc3VjY2VzcztcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgc3VjY2VzcyA9IHZpc2l0ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzY2VuZChnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgZGVzY2VuZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCA9IGdlbmVyYWxDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgIHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCA9IHNwZWNpZmljQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbENoaWxkTm9kZXNMZW5ndGggPT09IHNwZWNpZmljQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoc3BlY2lmaWNDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAgPSB0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMpLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlTWFwc0VxdWFsID0gYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsKGdlbmVyYWxUZXJtaW5hbE5vZGVNYXAsIHNwZWNpZmljVGVybWluYWxOb2RlTWFwKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU1hcHNFcXVhbCkge1xuICAgICAgICBjb25zdCBsYXN0UmVtYWluaW5nQXJndW1lbnRGdW5jdGlvbiA9IGlzTGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0aGlzLmRlc2NlbmRBaGVhZChpbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgICAgICAgaWYgKGRlc2NlbmRlZEFoZWFkKSB7XG4gICAgICAgICAgICBkZXNjZW5kZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2aXNpdGVkID0gZ2VuZXJhbENoaWxkTm9kZXMuZXZlcnkoKGdlbmVyYWxDaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGVjaWZpY0NoaWxkTm9kZSA9IHNwZWNpZmljQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIGRlc2NlbmRBaGVhZChpbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IGRlc2NlbmRlZEFoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZXNjZW5kQWhlYWQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoID0gZ2VuZXJhbENoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID09PSBnZW5lcmFsQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgZGVzY2VuZGVkQWhlYWQgPSBkZXNjZW5kQWhlYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENoaWxkTm9kZSA9IGdlbmVyYWxDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHNwZWNpZmljQ2hpbGROb2RlID0gc3BlY2lmaWNDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY0NoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICB2aXNpdGVkID0gdGhpcy52aXNpdE5vZGUoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRBaGVhZCk7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnN0IGFoZWFkSW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gdGhpcy5kZXNjZW5kQWhlYWQoYWhlYWRJbmRleCwgZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVzY2VuZGVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgICAgZGVzY2VuZGVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjZW5kZWRBaGVhZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vZGVUZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHNwZWNpZmljTm9kZVRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIGdlbmVyYWxOb2RlTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICBzcGVjaWZpY05vZGVOb25UZXJtaW5hbE5vZGUgPSBzcGVjaWZpY05vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSAmJiBzcGVjaWZpY05vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxUZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNUZXJtaW5hbE5vZGUgPSBzcGVjaWZpY05vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmIChnZW5lcmFsTm9kZU5vblRlcm1pbmFsTm9kZSAmJiBzcGVjaWZpY05vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZSwgIC8vL1xuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljTm9kZTsgLy8vXG5cbiAgICAgIHZpc2l0ZWQgPSB0aGlzLnZpc2l0Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUoZ2VuZXJhbFRlcm1pbmFsTm9kZSwgc3BlY2lmaWNUZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyAvLy9cbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24gPSBpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBpZiAobGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24pIHtcbiAgICAgIGNvbnN0IGRlc2NlbmRBaGVhZCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGRlc2NlbmRlZEFoZWFkID0gZGVzY2VuZEFoZWFkKCk7XG5cbiAgICAgIGlmIChkZXNjZW5kQWhlYWQpIHtcbiAgICAgICAgdmlzaXRlZCA9IGRlc2NlbmRlZEFoZWFkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ0FyZ3VtZW50cy5wdXNoKGRlc2NlbmRBaGVhZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB2aXNpdGVkID0gZmFsc2U7XG5cbiAgICBsZXQgeyBtYXBzIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgbWFwcyA9IFsgLy8vXG4gICAgICAuLi5tYXBzLFxuICAgICAge1xuICAgICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICBydW46IChnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpID0+IHtcbiAgICAgICAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgICAgICAgICBpZiAoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgICAgdmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZpc2l0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICBtYXBzLnNvbWUoKG1hcCkgPT4ge1xuICAgICAgY29uc3QgeyBnZW5lcmFsTm9kZVF1ZXJ5LCBzcGVjaWZpY05vZGVRdWVyeSwgcnVuIH0gPSBtYXA7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbE5vZGVRdWVyeShnZW5lcmFsTm9uVGVybWluYWxOb2RlKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNOb2RlUXVlcnkoc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUpOyAgLy8vXG5cbiAgICAgIGlmICgoZ2VuZXJhbE5vZGUgIT09IG51bGwpICYmIChzcGVjaWZpY05vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgID0gcnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG59XG4iXSwibmFtZXMiOlsiWmlwUGFzcyIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVuIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzdWNjZXNzIiwidmlzaXRlZCIsInZpc2l0Tm9kZSIsImRlc2NlbmQiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImdlbmVyYWxDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNDaGlsZE5vZGVzTGVuZ3RoIiwic3BlY2lmaWNUZXJtaW5hbE5vZGVNYXAiLCJ0ZXJtaW5hbE5vZGVNYXBGcm9tTm9kZXMiLCJnZW5lcmFsVGVybWluYWxOb2RlTWFwIiwidGVybWluYWxOb2RlTWFwc0VxdWFsIiwiYXJlVGVybWluYWxOb2RlTWFwc0VxdWFsIiwibGFzdFJlbWFpbmluZ0FyZ3VtZW50RnVuY3Rpb24iLCJpc0xhc3RSZW1haW5pbmdBcmd1bWVudEZ1bmN0aW9uIiwiaW5kZXgiLCJkZXNjZW5kZWRBaGVhZCIsImRlc2NlbmRBaGVhZCIsImV2ZXJ5IiwiZ2VuZXJhbENoaWxkTm9kZSIsInNwZWNpZmljQ2hpbGROb2RlIiwicG9wIiwicHVzaCIsImFoZWFkSW5kZXgiLCJnZW5lcmFsTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb2RlVGVybWluYWxOb2RlIiwiZ2VuZXJhbE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9kZU5vblRlcm1pbmFsTm9kZSIsImdlbmVyYWxUZXJtaW5hbE5vZGUiLCJzcGVjaWZpY1Rlcm1pbmFsTm9kZSIsInZpc2l0VGVybWluYWxOb2RlIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwidmlzaXROb25UZXJtaW5hbE5vZGUiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwic29tZSIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWFBOzs7ZUFBQUE7OztxQkFOYTtvQkFFMEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRyxJQUFNQyx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNRix3QkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDWEcsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLFdBQVcsRUFBRUMsWUFBWTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUNsRCxJQUFJQztnQkFFSixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsU0FBUyxPQUFkLElBQUksRUFBSjtv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