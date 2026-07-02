"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

import nodeMixins from "./mixins/node";

class NonTerminalNode extends NonTerminalNodeBase {
  isUnprecedented() {
    const unprecedented = false;

    return unprecedented;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const nonTerminalNode = NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return nonTerminalNode;
  }
}

Object.assign(NonTerminalNode.prototype, nodeMixins);

export default NonTerminalNode;
