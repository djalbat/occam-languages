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
        let index = 0;
        return this.someChildNode((childNode)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, terminalNodeType = terminalNode.getType();
                if (terminalNodeType === tokenType) {
                    return callback(terminalNode, index++);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub25UZXJtaW5hbE5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgYXMgTm9uVGVybWluYWxOb2RlQmFzZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGVCYXNlIHtcbiAgc29tZVRlcm1pbmFsTm9kZShjYWxsYmFjaywgdG9rZW5UeXBlKSB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHJldHVybiB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlVHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmFsTm9kZVR5cGUgPT09IHRva2VuVHlwZSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayh0ZXJtaW5hbE5vZGUsIGluZGV4KyspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXROb2RlQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5maW5kQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBnZXROb2Rlc0J5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBnZXRMYXN0Tm9kZUJ5UnVsZU5hbWUoLi4ucnVsZU5hbWVzKSB7XG4gICAgbGV0IGxhc3ROb2RlID0gbnVsbDtcblxuICAgIHRoaXMuYmFja3dhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgIGxhc3ROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdE5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGxldCBmaXJzdE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICBmaXJzdE5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdE5vZGU7XG4gIH1cblxuICBnZXRTaW5ndWxhck5vZGVCeVJ1bGVOYW1lKC4uLnJ1bGVOYW1lcykge1xuICAgIGxldCBzaW5ndWxhck5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmZpbHRlckNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgc2luZ3VsYXJOb2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2luZ3VsYXJOb2RlO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudE5vZGVzQnlSdWxlTmFtZSguLi5ydWxlTmFtZXMpIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuZmlsdGVyRGVzY2VuZGFudE5vZGUoKGRlc2NlbmRhbnROb2RlKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50Tm9kZU5vblRlcm1pbmFsTm9kZSA9IGRlc2NlbmRhbnROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChkZXNjZW5kYW50Tm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBkZXNjZW5kYW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBydWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGVCYXNlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZUJhc2UiLCJzb21lVGVybWluYWxOb2RlIiwiY2FsbGJhY2siLCJ0b2tlblR5cGUiLCJpbmRleCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVR5cGUiLCJnZXRUeXBlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJydWxlTmFtZXMiLCJub2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsIm5vZGVzIiwiZmlsdGVyQ2hpbGROb2RlIiwiZ2V0TGFzdE5vZGVCeVJ1bGVOYW1lIiwibGFzdE5vZGUiLCJiYWNrd2FyZHNTb21lQ2hpbGROb2RlIiwiZ2V0Rmlyc3ROb2RlQnlSdWxlTmFtZSIsImZpcnN0Tm9kZSIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImdldFNpbmd1bGFyTm9kZUJ5UnVsZU5hbWUiLCJzaW5ndWxhck5vZGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImdldERlc2NlbmRhbnROb2Rlc0J5UnVsZU5hbWUiLCJmaWx0ZXJEZXNjZW5kYW50Tm9kZSIsImRlc2NlbmRhbnROb2RlIiwiZGVzY2VuZGFudE5vZGVOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJDbGFzcyIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OzsyQkFO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