"use strict";

import { nonTerminalNodeQuery, terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "../utilities/pass";

export default class ZipPass {
  run(generalNode, specificNode, ...remainingArguments) {
    let success;

    const visited = this.visitNode(generalNode, specificNode, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(generalChildNodes, specificChildNodes, ...remainingArguments) {
    let descended = false;

    const generalChildNodesLength = generalChildNodes.length,
          specificChildNodesLength = specificChildNodes.length;

    if (generalChildNodesLength === specificChildNodesLength) {
      const specificTerminalNodeMap = terminalNodeMapFromNodes(specificChildNodes),
            generalTerminalNodeMap = terminalNodeMapFromNodes(generalChildNodes),
            terminalNodeMapsEqual = areTerminalNodeMapsEqual(generalTerminalNodeMap, specificTerminalNodeMap);

      if (terminalNodeMapsEqual) {
        const visited = generalChildNodes.every((generalChildNode, index) => {
          const specificChildNode = specificChildNodes[index],
                specificNode = specificChildNode, ///
                generalNode = generalChildNode, ///
                visited = this.visitNode(generalNode, specificNode, ...remainingArguments);

          if (visited) {
            return true;
          }
        });

        if (visited) {
          descended = true;
        }
      }
    }

    return descended;
  }

  visitNode(generalNode, specificNode, ...remainingArguments) {
    let visited = false;

    const generalNodeTerminalNode = generalNode.isTerminalNode(),
          specificNodeTerminalNode = specificNode.isTerminalNode(),
          generalNodeNonTerminalNode = generalNode.isNonTerminalNode(),
          specificNodeNonTerminalNode = specificNode.isNonTerminalNode();

    if (false) {
      ///
    } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
      const generalTerminalNode = generalNode,  ///
            specificTerminalNode = specificNode;  ///

      visited = this.visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments);
    } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
            specificNonTerminalNode = specificNode; ///

      visited = this.visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    let visited;

    visited = true;

    return visited;
  }

  visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        generalNodeQuery: nonTerminalNodeQuery,
        specificNodeQuery: nonTerminalNodeQuery,
        run: (generalNode, specificNode, ...remainingArguments) => {
          let visited = false;

          const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
                specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///

          if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
            const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                  specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
                  generalChildNodes = generalNonTerminalNodeChildNodes, ///
                  specificChildNodes = specificNonTerminalNodeChildNodes, ///
                  descended = this.descend(generalChildNodes, specificChildNodes, ...remainingArguments);

            if (descended) {
              visited = true;
            }
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { generalNodeQuery, specificNodeQuery, run } = map;

      const generalNode = generalNodeQuery(generalNonTerminalNode),  ///
            specificNode = specificNodeQuery(specificNonTerminalNode);  ///

      if ((generalNode !== null) && (specificNode !== null)) {
        const success  = run(generalNode, specificNode, ...remainingArguments);

        visited = success;  ///

        return true;
      }
    });

    return visited;
  }
}
