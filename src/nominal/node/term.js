"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "../../mixins/node";

class TermNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(TermNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(TermNode.prototype, nodeMixins);

export default TermNode;
