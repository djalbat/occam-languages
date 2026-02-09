"use strict";

import { CustomGrammar } from "occam-custom-grammars"

export function customGrammarFromNameAndEntries(name, entries) {
  const termBNF = entries.getTermBNF(),
        statementBNF = entries.getStatementBNF(),
        typeVocabulary = entries.getTypeVocabulary(),
        symbolVocabulary = entries.getSymbolVocabulary(),
        customGrammar = CustomGrammar.fromNameTermBNFStatementBNFTypeVocabularyAndSymbolVocabulary(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary);

  return customGrammar;
}