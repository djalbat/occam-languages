"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

import nodeMixins from "./mixins/node";

class NonTerminalNode extends NonTerminalNodeBase {
  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}

Object.assign(NonTerminalNode.prototype, nodeMixins);

export default NonTerminalNode;
