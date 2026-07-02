"use strict";

import { NominalParser as NominalParserBase } from "occam-grammars";

import NonTerminalNode from "../nonTerminalNode";

export default class NominalParser extends NominalParserBase {
  static defaultNonTerminalNode = NonTerminalNode;  ///
}
