"use strict";

import { FurtleParser as FurtleParserBase } from "occam-grammars";

import NonTerminalNode from "../nonTerminalNode";
import NonTerminalNodeMap from "./nonTerminalNodeMap";

export default class FurtleParser extends FurtleParserBase {
  static defaultNonTerminalNode = NonTerminalNode;  ///

  static NonTerminalNodeMap = NonTerminalNodeMap;
}
