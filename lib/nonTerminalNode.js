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
const _necessary = require("necessary");
const _occamparsers = require("occam-parsers");
const { first } = _necessary.arrayUtilities;
class NonTerminalNode extends _occamparsers.NonTerminalNode {
    someTerminalNode(callback, tokenType) {
        return this.someChildNode((childNode, index)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, terminalNodeType = terminalNode.getType();
                if (terminalNodeType === tokenType) {
                    return callback(terminalNode, index);
                }
            }
        });
    }
    getNodeByRuleName(...ruleNames) {
        const node = this.findChildNode((childNode)=>{
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                const nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    return true;
                }
            }
        }) || null;
        return node;
    }
    getNodesByRuleName(...ruleNames) {
        const nodes = this.filterChildNode((childNode)=>{
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                const nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    return true;
                }
            }
        });
        return nodes;
    }
    getLastNodeByRuleName(...ruleNames) {
        let lastNode = null;
        this.backwardsSomeChildNode((childNode)=>{
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                const nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    lastNode = childNode; ///
                    return true;
                }
            }
        });
        return lastNode;
    }
    getFirstNodeByRuleName(...ruleNames) {
        let firstNode = null;
        this.forwardsSomeChildNode((childNode)=>{
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                const nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    firstNode = childNode; ///
                    return true;
                }
            }
        });
        return firstNode;
    }
    getSingularNodeByRuleName(...ruleNames) {
        let singularNode = null;
        const nodes = this.filterChildNode((childNode)=>{
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();
            if (childNodeNonTerminalNode) {
                const nonTerminalNode = childNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    return true;
                }
            }
        }), nodesLength = nodes.length;
        if (nodesLength === 1) {
            const firstNode = first(nodes);
            singularNode = firstNode; ///
        }
        return singularNode;
    }
    getDescendantNodesByRuleName(...ruleNames) {
        const nodes = this.filterDescendantNode((descendantNode)=>{
            const descendantNodeNonTerminalNode = descendantNode.isNonTerminalNode();
            if (descendantNodeNonTerminalNode) {
                const nonTerminalNode = descendantNode, ruleName = nonTerminalNode.getRuleName(), ruleNamesIncludesRuleName = ruleNames.includes(ruleName);
                if (ruleNamesIncludesRuleName) {
                    return true;
                }
            }
        });
        return nodes;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
        return _occamparsers.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub25UZXJtaW5hbE5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgYXMgTm9uVGVybWluYWxOb2RlQmFzZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGVCYXNlIHtcbiAgc29tZVRlcm1pbmFsTm9kZShjYWxsYmFjaywgdG9rZW5UeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlVHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmFsTm9kZVR5cGUgPT09IHRva2VuVHlwZSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayh0ZXJtaW5hbE5vZGUsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Tm9kZUJ5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXNCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGxldCBsYXN0Tm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBsYXN0Tm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3ROb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBsZXQgZmlyc3ROb2RlID0gbnVsbDtcblxuICAgIHRoaXMuZm9yd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgZmlyc3ROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3ROb2RlO1xuICB9XG5cbiAgZ2V0U2luZ3VsYXJOb2RlQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBsZXQgc2luZ3VsYXJOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5maWx0ZXJDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgIHNpbmd1bGFyTm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbmd1bGFyTm9kZTtcbiAgfVxuXG4gIGdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmZpbHRlckRlc2NlbmRhbnROb2RlKChkZXNjZW5kYW50Tm9kZSkgPT4ge1xuICAgICAgY29uc3QgZGVzY2VuZGFudE5vZGVOb25UZXJtaW5hbE5vZGUgPSBkZXNjZW5kYW50Tm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoZGVzY2VuZGFudE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gZGVzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlQmFzZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGVCYXNlIiwic29tZVRlcm1pbmFsTm9kZSIsImNhbGxiYWNrIiwidG9rZW5UeXBlIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVUeXBlIiwiZ2V0VHlwZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwicnVsZU5hbWVzIiwibm9kZSIsImZpbmRDaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJub2RlcyIsImZpbHRlckNoaWxkTm9kZSIsImdldExhc3ROb2RlQnlSdWxlTmFtZSIsImxhc3ROb2RlIiwiYmFja3dhcmRzU29tZUNoaWxkTm9kZSIsImdldEZpcnN0Tm9kZUJ5UnVsZU5hbWUiLCJmaXJzdE5vZGUiLCJmb3J3YXJkc1NvbWVDaGlsZE5vZGUiLCJnZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lIiwic2luZ3VsYXJOb2RlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJnZXREZXNjZW5kYW50Tm9kZXNCeVJ1bGVOYW1lIiwiZmlsdGVyRGVzY2VuZGFudE5vZGUiLCJkZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiQ2xhc3MiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7MkJBTlU7OEJBRXdCO0FBRXZELE1B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