"use strict";

import { characters } from "necessary";
import { specialSymbols } from "occam-lexers";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { endOfLine } = specialSymbols,
      { NEW_LINE_CHARACTER } = characters;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function ruleFromRuleName(ruleName, delimiter = endOfLine) {
  const bnf = ` _ ::= ${ruleName}...  ${delimiter}; `,
        tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens),
        firstRule = first(rules),
        rule = firstRule; ///

  return rule;
}

export function instantiate(placeholderRule, string, delimiter, context) {
  if (context === undefined) {
    context = delimiter;  ///

    delimiter = NEW_LINE_CHARACTER;
  }

  let node;

  const lexer = context.getLexer(),
        parser = context.getParser(),
        content = `${string}${delimiter}`,
        tokens = lexer.tokenise(content);

  context.setTokens(tokens);

  const startRule = placeholderRule;  ///

  node = parser.parse(tokens, startRule);

  const nonTerminalNode = node; ///

  nonTerminalNode.someChildNode((childNode) => {
    node = childNode; ///

    return true;
  });

  return node;
}

export default {
  instantiate,
  ruleFromRuleName
};
