"use strict";

import { NonTerminalNode } from "occam-grammar-utilities";

import nodeMixins from "../../mixins/node";

class STatementNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(STatementNode, ruleName, childNodes, opacity, precedence); }
}

Object.assign(STatementNode.prototype, nodeMixins);

export default STatementNode;
