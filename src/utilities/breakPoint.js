"use strict";

export function lineIndexFromNodeAndTokens(node, tokens) {
  let lineIndex = 0;

  const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);

  tokens.some((token, tokenIndex) => {
    const tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      lineIndex += 1;
    }

    if (tokenIndex === firstSignificantTokenIndex) {
      return true;
    }
  });

  return lineIndex;
}
