"use strict";

import { some, every } from "../utilities/asynchronous";
import { nonTerminalNodeQuery, areChildNodesCongruent } from "../utilities/pass";

export default class ContinuationZipPass {
  run(generalNode, specificNode, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    this.visitNode(generalNode, specificNode, ...remainingArguments, continuation);
  }

  descend(generalChildNodes, specificChildNodes, ...remainingArguments) {
    const continuation = remainingArguments.pop(),
          childNodesCongruent = areChildNodesCongruent(generalChildNodes, specificChildNodes);

    if (!childNodesCongruent) {
      const descended = false;

      continuation(descended);

      return;
    }

    let index = -1;

    every(generalChildNodes, (generalChildNode, continuation) => {
      index++;

      const specificChildNode = specificChildNodes[index],
            specificNode = specificChildNode, ///
            generalNode = generalChildNode; ///

      this.visitNode(generalNode, specificNode, ...remainingArguments, continuation);
    }, continuation);
  }

  visitNode(generalNode, specificNode, ...remainingArguments) {
    const continuation = remainingArguments.pop(),
          generalNodeTerminalNode = generalNode.isTerminalNode(),
          specificNodeTerminalNode = specificNode.isTerminalNode(),
          generalNodeNonTerminalNode = generalNode.isNonTerminalNode(),
          specificNodeNonTerminalNode = specificNode.isNonTerminalNode();

    if (false) {
      ///
    } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
      const generalTerminalNode = generalNode,  ///
            specificTerminalNode = specificNode;  ///

      this.visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments, continuation);
    } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
            specificNonTerminalNode = specificNode; ///

      this.visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments, continuation);
    } else {
      const visited = false;

      continuation(visited);
    }
  }

  visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    const visited = true,
          continuation = remainingArguments.pop();

    continuation(visited);
  }

  visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        generalNodeQuery: nonTerminalNodeQuery,
        specificNodeQuery: nonTerminalNodeQuery,
        run: (generalNode, specificNode, ...remainingArguments) => {
          const continuation = remainingArguments.pop(),
                generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
                specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///

          if (generalNonTerminalNodeRuleName !== specificNonTerminalNodeRuleName) {
            const visited = false;

            continuation(visited);

            return;
          }

          const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
                generalChildNodes = generalNonTerminalNodeChildNodes, ///
                specificChildNodes = specificNonTerminalNodeChildNodes; ///

          this.descend(generalChildNodes, specificChildNodes, ...remainingArguments, continuation);
        }
      }
    ]

    some(maps, (map, continuation) => {
      const { generalNodeQuery, specificNodeQuery, run } = map;

      const generalNode = generalNodeQuery(generalNonTerminalNode),  ///
            specificNode = specificNodeQuery(specificNonTerminalNode);  ///

      if ((generalNode === null) || (specificNode === null)) {
        const visited = false;

        continuation(visited);

        return;
      }

      run(generalNode, specificNode, ...remainingArguments, continuation);
    }, continuation);
  }
}
