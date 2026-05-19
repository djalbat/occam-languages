"use strict";

import { lexerUtilities } from "occam-lexers";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import FurtleLexer from "../furtle/lexer";
import FurtleParser from "../furtle/parser";

const { lexerFromRules, rulesFromEntries } = lexerUtilities,
      { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function furtleLexerFromNothing(Class) {
  if (Class === undefined) {
    Class = FurtleLexer;  ///
  }

  const { entries } = FurtleLexer;

  let rules;

  rules = rulesFromEntries(entries);

  const furtleLexer = lexerFromRules(Class, rules);

  return furtleLexer;
}

export function furtleLexerFromEntries(Class, entries) {
  if (entries === undefined) {
    entries = Class;  ///

    Class = FurtleLexer;  ///
  }

  let rules;

  rules = rulesFromEntries(entries);

  const furtleLexer = lexerFromRules(Class, rules);

  return furtleLexer;
}

export function furtleParserFromBNF(Class, bnf) {
  if (bnf === undefined) {
    bnf = Class;  ///

    Class = FurtleParser;  ///
  }

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(Class, rules);

  return furtleParser;
}

export function furtleParserFromNothing(Class) {
  if (Class === undefined) {
    Class = FurtleParser;  ///
  }

  const { bnf } = FurtleParser;

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(Class, rules);

  return furtleParser;
}

export function furtleParserFromBNFAndStartRuleName(Class, bnf, startRuleName) {
  if (startRuleName === undefined) {
    startRuleName = bnf;  ///

    bnf = Class;  ///

    Class = FurtleParser;  ///
  }

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);

  return furtleParser;
}

export default {
  furtleLexerFromEntries,
  furtleLexerFromNothing,
  furtleParserFromBNF,
  furtleParserFromNothing,
  furtleParserFromBNFAndStartRuleName
};
