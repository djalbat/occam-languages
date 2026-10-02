"use strict";

import { NonTerminalNode } from "occam-grammar-utilities";

import nodeMixins from "../../mixins/node";

class STatementNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(STatementNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(STatementNode.prototype, nodeMixins);

export default STatementNode;
