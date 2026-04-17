"use strict";

import { arrayUtilities } from "necessary";

import { nodeQuery } from "../utilities/query";

const { match } = arrayUtilities;

export const nonTerminalNodeQuery = nodeQuery("/*");

export function areChildNodesCongruent(childNodesA, childNodesB) {
  let areChildNodesCongruent = false;

  const childNodesALength = childNodesA.length,
        childNodesBLength = childNodesB.length;

  if (childNodesALength === childNodesBLength) {
    const specificTerminalNodeMap = terminalNodeMapFromChildNodes(childNodesB),
          generalTerminalNodeMap = terminalNodeMapFromChildNodes(childNodesA),
          terminalNodeMapsEqual = areTerminalNodeMapsEqual(generalTerminalNodeMap, specificTerminalNodeMap);

    if (terminalNodeMapsEqual) {
      areChildNodesCongruent = true;
    }
  }

  return areChildNodesCongruent;
}

function terminalNodeMapFromChildNodes(childNodes) {
  const terminalNodeMap = {};

  childNodes.forEach((childNode, index) => {
    const childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      const terminalNode = childNode;  //

      terminalNodeMap[index] = terminalNode;
    }
  });

  return terminalNodeMap;
}

function areTerminalNodeMapsEqual(generalTerminalNodeMap, specificTerminalNodeMap) {
  let terminalNodeMapsEqual = false;

  const generalIndexes = Object.keys(generalTerminalNodeMap), ///
        specificIndexes = Object.keys(specificTerminalNodeMap), ///
        terminalNodeMapKeysMatch = match(generalIndexes, specificIndexes, (generalIndex, specificIndex) => {
          if (generalIndex === specificIndex) {
            return true;
          }
        });

  if (terminalNodeMapKeysMatch) {
    const generalTerminalNodes = Object.values(generalTerminalNodeMap), ///
          specificTerminalNodes = Object.values(specificTerminalNodeMap), ///
          terminalNodeMapValuesMatch = match(generalTerminalNodes, specificTerminalNodes, (generalTerminalNode, specificTerminalNode) => {
            const generalTerminalNodeMatchesSpecificTerminalNode = generalTerminalNode.match(specificTerminalNode);

            if (generalTerminalNodeMatchesSpecificTerminalNode) {
              return true;
            }
          });

    terminalNodeMapsEqual = terminalNodeMapValuesMatch; ///
  }

  return terminalNodeMapsEqual;
}
