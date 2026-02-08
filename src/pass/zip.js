"use strict";

import { nonTerminalNodeQuery, terminalNodeMapFromNodes, areTerminalNodeMapsEqual, isLastRemainingArgumentFunction } from "../utilities/pass";

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
        const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

        if (lastRemainingArgumentFunction) {
          const index = 0,
                descendedAhead = this.descendAhead(index, generalChildNodes, specificChildNodes,...remainingArguments);

          if (descendedAhead) {
            descended = true;
          }
        } else {
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
    }

    return descended;
  }

  descendAhead(index, generalChildNodes, specificChildNodes, ...remainingArguments) {
    let descendedAhead = false;

    const descendAhead = remainingArguments.pop(), ///
          generalChildNodesLength = generalChildNodes.length;

    if (index === generalChildNodesLength) {
      descendedAhead = descendAhead();
    } else {
      const generalChildNode = generalChildNodes[index],
            specificChildNode = specificChildNodes[index],
            generalNode = generalChildNode, ///
            specificNode = specificChildNode, ///
            visited = this.visitNode(generalNode, specificNode, ...remainingArguments, () => {
              remainingArguments.push(descendAhead); ///

              const aheadIndex = index + 1,
                    descendedAhead = this.descendAhead(aheadIndex, generalChildNodes, specificChildNodes, ...remainingArguments);

              return descendedAhead;
            });

      if (visited) {
        descendedAhead = true;
      }
    }

    return descendedAhead;
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
    let visited = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const descendAhead = remainingArguments.pop(),
            descendedAhead = descendAhead();

      if (descendAhead) {
        visited = descendedAhead;  ///
      }

      remainingArguments.push(descendAhead);
    } else {
      visited = true;
    }

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
