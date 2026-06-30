"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-grammar-utilities";

import nodeMixins from "../mixins/node";

import { TERM_RULE_NAME } from "../ruleNames";

class NonTerminalNode extends NonTerminalNodeBase {}

Object.assign(NonTerminalNode.prototype, nodeMixins);

const NonTerminalNodeMap = {
  [TERM_RULE_NAME]: NonTerminalNode
};

export default NonTerminalNodeMap;
