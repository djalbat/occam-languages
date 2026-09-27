"use strict";

import TermNode from "./node/term";
import StatementNode from "./node/statement";

import { TERM_RULE_NAME, STATEMENT_RULE_NAME } from "./ruleNames";

const NonTerminalNodeMap = {
  [TERM_RULE_NAME]: TermNode,
  [STATEMENT_RULE_NAME]: StatementNode
};

export default NonTerminalNodeMap;
