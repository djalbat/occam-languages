"use strict";

import { FurtleParser as FurtleParserBase } from "occam-grammars";

import NonTerminalNode from "../nonTerminalNode";

export default class FurtleParser extends FurtleParserBase {
  static defaultNonTerminalNode = NonTerminalNode;  ///
}
