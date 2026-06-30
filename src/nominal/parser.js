"use strict";

import { NominalParser as NominalParserBase } from "occam-grammars";

import NonTerminalNode from "../nonTerminalNode";
import NonTerminalNodeMap from "./nonTerminalNodeMap";

export default class NominalParser extends NominalParserBase {
  static defaultNonTerminalNode = NonTerminalNode;  ///

  static NonTerminalNodeMap = NonTerminalNodeMap;
}
