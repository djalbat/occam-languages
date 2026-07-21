"use strict";

import { every } from "../utilities/continuation";
import { nonTerminalNodeQuery } from "../utilities/pass";

export default class ContinuationPass {
  run(node, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    return this.visitNode(node, ...remainingArguments, continuation);
  }

  descend(childNodes, ...remainingArguments) {
    const continuation = remainingArguments.pop();

    return every(childNodes, (childNode, continuation) => {
      const node = childNode; ///

      return this.visitNode(node, ...remainingArguments, continuation);
    }, (descended) => {
      return continuation(descended, ...remainingArguments);
    });
  }

  visitNode(node, ...remainingArguments) {
    const continuation = remainingArguments.pop(),
          nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      return this.visitTerminalNode(terminalNode, ...remainingArguments, continuation);
    }

    const nonTerminalNode = node;  ///

    return this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments, continuation);
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    const visited = true,
          continuation = remainingArguments.pop();

    return continuation(visited, ...remainingArguments);
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

          return this.descend(childNodes, ...remainingArguments, continuation);
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

      return continuation(visited, ...remainingArguments);
    }

    const { run } = map;

    return run(node, ...remainingArguments, continuation);
  }
}
