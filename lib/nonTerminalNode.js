"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first;
var NonTerminalNode = /*#__PURE__*/ function(NonTerminalNodeBase) {
    _inherits(NonTerminalNode, NonTerminalNodeBase);
    function NonTerminalNode() {
        _class_call_check(this, NonTerminalNode);
        return _call_super(this, NonTerminalNode, arguments);
    }
    _create_class(NonTerminalNode, [
        {
            key: "someTerminalNode",
            value: function someTerminalNode(callback, tokenType) {
                return this.someChildNode(function(childNode, index) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, terminalNodeType = terminalNode.getType();
                        if (terminalNodeType === tokenType) {
                            return callback(terminalNode, index);
                        }
                    }
                });
            }
        },
        {
            key: "getNodeByRuleName",
            value: function getNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var node = this.findChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                }) || null;
                return node;
            }
        },
        {
            key: "getNodesByRuleName",
            value: function getNodesByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var nodes = this.filterChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                });
                return nodes;
            }
        },
        {
            key: "getLastNodeByRuleName",
            value: function getLastNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var lastNode = null;
                this.backwardsSomeChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            lastNode = childNode; ///
                            return true;
                        }
                    }
                });
                return lastNode;
            }
        },
        {
            key: "getFirstNodeByRuleName",
            value: function getFirstNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var firstNode = null;
                this.forwardsSomeChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            firstNode = childNode; ///
                            return true;
                        }
                    }
                });
                return firstNode;
            }
        },
        {
            key: "getSingularNodeByRuleName",
            value: function getSingularNodeByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var singularNode = null;
                var nodes = this.filterChildNode(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                }), nodesLength = nodes.length;
                if (nodesLength === 1) {
                    var firstNode = first(nodes);
                    singularNode = firstNode; ///
                }
                return singularNode;
            }
        },
        {
            key: "getDescendantNodesByRuleName",
            value: function getDescendantNodesByRuleName() {
                for(var _len = arguments.length, ruleNames = new Array(_len), _key = 0; _key < _len; _key++){
                    ruleNames[_key] = arguments[_key];
                }
                var nodes = this.filterDescendantNode(function(descendantNode) {
                    var descendantNodeNonTerminalNode = descendantNode.isNonTerminalNode();
                    if (descendantNodeNonTerminalNode) {
                        var nonTerminalNode = descendantNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                        if (ruleNamesIncludesRuleName) {
                            return true;
                        }
                    }
                });
                return nodes;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return NonTerminalNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub25UZXJtaW5hbE5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgYXMgTm9uVGVybWluYWxOb2RlQmFzZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGVCYXNlIHtcbiAgc29tZVRlcm1pbmFsTm9kZShjYWxsYmFjaywgdG9rZW5UeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlVHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmFsTm9kZVR5cGUgPT09IHRva2VuVHlwZSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayh0ZXJtaW5hbE5vZGUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Tm9kZUJ5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXNCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGxldCBsYXN0Tm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBsYXN0Tm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3ROb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBsZXQgZmlyc3ROb2RlID0gbnVsbDtcblxuICAgIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgZmlyc3ROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3ROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJOb2RlQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBsZXQgc2luZ3VsYXJOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyTm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyTm9kZTtcbiAgfVxuXG4gIGdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmZpbHRlckRlc2NlbmRhbnROb2RlKChkZXNjZW5kYW50Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgZGVzY2VuZGFudE5vZGVOb25UZXJtaW5hbE5vZGUgPSBkZXNjZW5kYW50Tm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoZGVzY2VuZGFudE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZGVzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlQmFzZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzb21lVGVybWluYWxOb2RlIiwiY2FsbGJhY2siLCJ0b2tlblR5cGUiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVR5cGUiLCJnZXRUeXBlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJydWxlTmFtZXMiLCJub2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsIm5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwibGFzdE5vZGUiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImZpcnN0Tm9kZSIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUiLCJzaW5ndWxhck5vZGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUiLCJmaWx0ZXJEZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlIiwiZGVzY2VuZGFudE5vZGVOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZUJhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VOzRCQUV3Qjs7Ozs7Ozs7Ozs7Ozs7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