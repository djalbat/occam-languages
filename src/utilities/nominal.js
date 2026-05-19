"use strict";

import { lexersUtilities } from "occam-custom-grammars";
import { parsersUtilities } from "occam-custom-grammars";

import NominalLexer from "../nominal/lexer";
import NominalParser from "../nominal/parser";

const { lexerFromNothing, lexerFromCombinedCustomGrammar, lexerFromEntriesAndCombinedCustomGrammar } = lexersUtilities,
      { parserFromNothing,
        parserFromStartRuleName,
        parserFromCombinedCustomGrammar,
        parserFromBNFAndCombinedCustomGrammar,
        parserFromStartRuleNameAndCombinedCustomGrammar,
        parserFromBNFStartRuleNameAndCombinedCustomGrammar } = parsersUtilities;

export function nominalLexerFromNothing(Class) {
  if (Class === undefined) {
    Class = NominalLexer; ///
  }

  const lexer = lexerFromNothing(Class),
        nominalLexer = lexer; ///

  return nominalLexer;
}

export function nominalLexerFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
  if (combinedCustomGrammar === undefined) {
    combinedCustomGrammar = Class;  ///

    Class = NominalLexer; ///
  }

  const lexer = lexerFromCombinedCustomGrammar(Class, combinedCustomGrammar),
        nominalLexer = lexer; ///

  return nominalLexer;
}

export function nominalLexerFromEntriesAndCombinedCustomGrammar(Class, entries, combinedCustomGrammar) {
  if (combinedCustomGrammar === undefined) {
    combinedCustomGrammar = entries;  ///

    entries = Class;  ///

    Class = NominalLexer; ///
  }

  const lexer = lexerFromEntriesAndCombinedCustomGrammar(Class, entries, combinedCustomGrammar),
        nominalLexer = lexer; ///

  return nominalLexer;
}

export function nominalParserFromNothing(Class) {
  if (Class === undefined) {
    Class = NominalParser;  ///
  }

  const parser = parserFromNothing(Class),
        nominalParser = parser; ///

  return nominalParser;
}

export function nominalParserFromStartRuleName(Class, startRuleName) {
  if (startRuleName === undefined) {
    startRuleName = Class;  ///

    Class = NominalParser;  ///
  }

  const parser =  parserFromStartRuleName(Class, startRuleName),
        nominalParser = parser; ///

  return nominalParser;
}

export function nominalParserFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
  if (combinedCustomGrammar === undefined) {
    combinedCustomGrammar = Class;  ///

    Class = NominalParser;  ///
  }

  const parser = parserFromCombinedCustomGrammar(Class, combinedCustomGrammar),
        nominalParser = parser; ///

  return nominalParser;
}

export function nominalParserFromBNFAndCombinedCustomGrammar(Class, bnf, combinedCustomGrammar) {
  if (combinedCustomGrammar === undefined) {
    combinedCustomGrammar = bnf;  ///

    bnf = Class;  ///

    Class = NominalParser;  ///
  }

  const parser = parserFromBNFAndCombinedCustomGrammar(Class, bnf, combinedCustomGrammar),
        nominalParser = parser; ///

  return nominalParser;
}

export function nominalParserFromStartRuleNameAndCombinedCustomGrammar(Class, startRuleName, combinedCustomGrammar) {
  if (combinedCustomGrammar === undefined) {
    combinedCustomGrammar = startRuleName;  ///

    startRuleName = Class;  ///

    Class = NominalParser;  ///
  }

  const parser = parserFromStartRuleNameAndCombinedCustomGrammar(Class, startRuleName, combinedCustomGrammar),
        nominalParser = parser; ///

  return nominalParser;
}

export function nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar(Class, bnf, startRuleName, combinedCustomGrammar) {
  if (combinedCustomGrammar === undefined) {
    combinedCustomGrammar = startRuleName;  ///

    startRuleName = bnf;  ///

    bnf = Class;  ///

    Class = NominalParser;  ///
  }

  const parser = parserFromBNFStartRuleNameAndCombinedCustomGrammar(Class, bnf, startRuleName, combinedCustomGrammar),
        nominalParser = parser; ///

  return nominalParser;
}

export default {
  nominalLexerFromNothing,
  nominalLexerFromCombinedCustomGrammar,
  nominalLexerFromEntriesAndCombinedCustomGrammar,
  nominalParserFromNothing,
  nominalParserFromStartRuleName,
  nominalParserFromCombinedCustomGrammar,
  nominalParserFromBNFAndCombinedCustomGrammar,
  nominalParserFromStartRuleNameAndCombinedCustomGrammar,
  nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar
};
