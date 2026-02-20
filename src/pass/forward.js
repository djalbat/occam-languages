"use strict";

import { nonTerminalNodeQuery } from "../utilities/pass";

export default class ForwardPass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(index, childNodes, ...remainingArguments) {
    let descendedForward = false;

    const descendForward = remainingArguments.pop(), ///
          childNodesLength = childNodes.length;

    if (index === childNodesLength) {
      descendedForward = descendForward();
    } else {
      const childNode = childNodes[index],
            node = childNode, ///
            visited = this.visitNode(node, ...remainingArguments, () => {
              remainingArguments.push(descendForward);

              const aheadIndex = index + 1,
                    descendedForward = this.descend(aheadIndex, childNodes, ...remainingArguments);

              return descendedForward;
            });

      if (visited) {
        descendedForward = true;
      }
    }

    return descendedForward;
  }

  visitNode(node, ...remainingArguments) {
    let visited;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      visited = this.visitTerminalNode(terminalNode, ...remainingArguments);
    } else {
      const nonTerminalNode = node;  ///

      visited = this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    let visited = false;

    const descendForward = remainingArguments.pop(), ///
          descendedForward = descendForward();

    if (descendedForward) {
      visited = true;
    }

    remainingArguments.push(descendForward);

    return visited;
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        run: (node, ...remainingArguments) => {
          let visited = false;

          const index = 0,
                childNodes = nonTerminalNode.getChildNodes(), ///
                descended = this.descend(index, childNodes, ...remainingArguments);

          if (descended) {
            visited = true;
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { nodeQuery, run } = map;

      const node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        const success = run(node, ...remainingArguments);

        visited = success;

        return true;
      }
    });

    return visited;
  }
}
