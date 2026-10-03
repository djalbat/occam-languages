"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

import nodeMixins from "./mixins/node";

class NonTerminalNode extends NonTerminalNodeBase {
  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const nonTerminalNode = NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }
}

Object.assign(NonTerminalNode.prototype, nodeMixins);

export default NonTerminalNode;
