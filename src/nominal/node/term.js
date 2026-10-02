"use strict";

import { NonTerminalNode } from "occam-grammar-utilities";

import nodeMixins from "../../mixins/node";

class TermNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(TermNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(TermNode.prototype, nodeMixins);

export default TermNode;
