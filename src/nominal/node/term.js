"use strict";

import { NonTerminalNode } from "occam-grammar-utilities";

import nodeMixins from "../../mixins/node";

class TermNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence); }
}

Object.assign(TermNode.prototype, nodeMixins);

export default TermNode;
