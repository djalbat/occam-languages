"use strict";

import { CustomGrammar, customGrammarUtilities } from "occam-custom-grammars";

const { combinedCustomGrammarFromCustomGrammars } = customGrammarUtilities;

export function customGrammarFromNameAndEntries(name, entries) {
  const termBNF = entries.getTermBNF(),
        statementBNF = entries.getStatementBNF(),
        typeVocabulary = entries.getTypeVocabulary(),
        symbolVocabulary = entries.getSymbolVocabulary(),
        customGrammar = CustomGrammar.fromNameTermBNFStatementBNFTypeVocabularyAndSymbolVocabulary(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary);

  return customGrammar;
}

export function combinedCustomGrammarFromReleaseContexts(releaseContexts) {
  const customGrammars = releaseContexts.map((releaseContext) => {
    const customGrammar = releaseContext.getCustomGrammar();

    return customGrammar;
  });

  const combinedCustomGrammar = combinedCustomGrammarFromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}
