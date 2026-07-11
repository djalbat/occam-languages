"use strict";

import BreakPoint from "../breakPoint";

export function breakable(innerFunction) {
  return function(...remainingArguments) {
    const continuation = remainingArguments.pop(),
          context = remainingArguments.pop();

    this.break(context, () => {
      setImmediate(() => {
        // 1. Identify what we are about to run
        const nodeString = this.getString ? this.getString() : 'Unknown Node';
        const funcName = innerFunction.name || 'anonymous function';

        const watchdog = setTimeout(() => {
          console.error(`\n🚨 CONTINUATION LEAK DETECTED!`);
          console.error(`Function: ${funcName}`);
          console.error(`Node: ${nodeString}`);
          console.error(`The baton was passed here but never handed back.\n`);
        }, 2000);

        const safeContinuation = (...args) => {
          clearTimeout(watchdog);
          continuation(...args);
        };

        innerFunction.call(this, ...remainingArguments, context, safeContinuation);
      });
    });
  };
}

// export function _breakable(innerFunction) {
//   return function(...remainingArguments) {
//     const continuation = remainingArguments.pop(),
//           context = remainingArguments.pop();
//
//     this.break(context, () => {
//       setImmediate(() => {
//         innerFunction.call(this, ...remainingArguments, context, continuation);
//       });
//     });
//   };
// }

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
