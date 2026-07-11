"use strict";

import { some, every } from "../utilities/continuation";
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

      return continuation(descended);
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

      return continuation(visited);
    }
  }

  visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    const visited = true,
          continuation = remainingArguments.pop();

    return continuation(visited);
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

            return continuation(visited);
          }

          const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
                generalChildNodes = generalNonTerminalNodeChildNodes, ///
                specificChildNodes = specificNonTerminalNodeChildNodes; ///

          this.descend(generalChildNodes, specificChildNodes, ...remainingArguments, continuation);
        }
      }
    ];

    let generalNode,
        specificNode;

    const map = maps.find((map) => {
      const { generalNodeQuery, specificNodeQuery } = map;

      generalNode = generalNodeQuery(generalNonTerminalNode);
      specificNode = specificNodeQuery(specificNonTerminalNode);

      if ((generalNode !== null) && (specificNode !== null)) {
        return true;
      }
    }) || null;

    if (map === null) {
      const visited = false;

      return continuation(visited);
    }

    const { run } = map;

    run(generalNode, specificNode, ...remainingArguments, continuation);
  }
}
