"use strict";

import { some, every } from "../utilities/continuation";
import { nonTerminalNodeQuery } from "../utilities/pass";

export default class ContinuationPass {
  run(node, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    this.visitNode(node, ...remainingArguments, continuation);
  }

  descend(childNodes, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    every(childNodes, (childNode, continuation) => {
      const node = childNode; ///

      this.visitNode(node, ...remainingArguments, continuation);
    }, continuation);
  }

  visitNode(node, ...remainingArguments) {
    const continuation = remainingArguments.pop(),
          nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      this.visitTerminalNode(terminalNode, ...remainingArguments, continuation);
    } else {
      const nonTerminalNode = node;  ///

      this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments, continuation);
    }
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    const visited = true,
          continuation = remainingArguments.pop();

    continuation(visited);
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        run: (node, ...remainingArguments) => {
          const continuation = remainingArguments.pop(),
                childNodes = nonTerminalNode.getChildNodes();

          this.descend(childNodes, ...remainingArguments, continuation);
        }
      }
    ];

    let node;

    const map = maps.find((map) => {
      const { nodeQuery } = map;

      node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        return true;
      }
    }) || null;

    if (map === null) {
      const visited = false;

      continuation(visited);

      return;
    }

    const { run } = map;

    run(node, ...remainingArguments, continuation);
  }
}
