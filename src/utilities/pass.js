"use strict";

import { arrayUtilities } from "necessary";

import { nodeQuery } from "../utilities/query";

const { match } = arrayUtilities;

export const nonTerminalNodeQuery = nodeQuery("/*");

export function areChildNodesCongruent(childNodesA, childNodesB) {
  const childNodesCongruent = match(childNodesA, childNodesB, (childNodeA, childNodeB) => {
    const childNodeCongruent = isChildNodeCongruent(childNodeA, childNodeB);

    if (childNodeCongruent) {
      return true;
    }
  });

  return childNodesCongruent;
}

function isChildNodeCongruent(childNodeA, childNodeB) {
  let childNodeCongruent = false;

  const childNodeANonTerminalNode = childNodeA.isNonTerminalNode(),
        childNodeBNonTerminalNode = childNodeB.isNonTerminalNode();

  if (childNodeANonTerminalNode && childNodeBNonTerminalNode) {
    childNodeCongruent = true;
  } else {
    const childNodeATerminalNode = !childNodeANonTerminalNode,
          childNodeBTerminalNode = !childNodeBNonTerminalNode;

    if (childNodeATerminalNode && childNodeBTerminalNode) {
      const terminalNodeA = childNodeA, ///
            terminalNodeB = childNodeB, ///
            terminalNodeAMatchesTerminalNodeB = terminalNodeA.match(terminalNodeB);

      if (terminalNodeAMatchesTerminalNodeB) {
        childNodeCongruent = true;
      }
    }
  }

  return childNodeCongruent;
}
