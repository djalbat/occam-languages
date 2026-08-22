"use strict";

import BreakPoint from "../breakPoint";

export function breakable(innerFunction) {
  return function(...remainingArguments) {
    const back = remainingArguments.pop(),
          forward = remainingArguments.pop(),
          context = remainingArguments.pop();

    return this.break(context, (back) => {
      setImmediate(() => {
        return innerFunction.call(this, ...remainingArguments, context, forward, back);
      });
    }, back);
  };
}

export function breakPointFromJSON(json) {
  let breakPoint;

  ({ breakPoint } = json);

  if (breakPoint !== null) {
    const breakPointJSON = breakPoint;  ///

    json = breakPointJSON;  ///

    breakPoint = BreakPoint.fromJSON(json);  ///
  }

  return breakPoint;
}

export function breakPointToBreakPointJSON(breakPoint) {
  let breakPointJSON = null;

  if (breakPoint !== null) {
    breakPointJSON = breakPoint.toJSON();
  }

  return breakPointJSON;
}

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

export default {
  breakable,
  breakPointFromJSON,
  breakPointToBreakPointJSON,
  lineIndexFromNodeAndTokens
};
