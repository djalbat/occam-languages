"use strict";

import { nonTerminalNodeQuery, areChildNodesCongruent } from "../utilities/pass";

export default class ForwardZipPass {
  run(generalNode, specificNode, ...remainingArguments) {
    let success;

    const visited = this.visitNode(generalNode, specificNode, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(index, generalChildNodes, specificChildNodes, ...remainingArguments) {
    let descendedForward = false;

    const childNodesCongruent = areChildNodesCongruent(generalChildNodes, specificChildNodes);

    if (childNodesCongruent) {
      const descendForward = remainingArguments.pop(),  ///
            generalChildNodesLength = generalChildNodes.length;

      if (index === generalChildNodesLength) {
        descendedForward = descendForward();
      } else {
        const generalChildNode = generalChildNodes[index],
              specificChildNode = specificChildNodes[index],
              generalNode = generalChildNode, ///
              specificNode = specificChildNode, ///
              visited = this.visitNode(generalNode, specificNode, ...remainingArguments, () => {
                remainingArguments.push(descendForward);

                const aheadIndex = index + 1,
                      descendedForward = this.descend(aheadIndex, generalChildNodes, specificChildNodes, ...remainingArguments);

                return descendedForward;
              });

        if (visited) {
          descendedForward = true;
        }
      }
    }

    return descendedForward;
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

  visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) {
    let visited = false;

    const descendForward = remainingArguments.pop(), ///
          descendedForward = descendForward();

    if (descendedForward) {
      visited = true;
    }

    remainingArguments.push(descendForward);

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
            const index = 0,
                  generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                  specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
                  generalChildNodes = generalNonTerminalNodeChildNodes, ///
                  specificChildNodes = specificNonTerminalNodeChildNodes, ///
                  descended = this.descend(index, generalChildNodes, specificChildNodes, ...remainingArguments);

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
