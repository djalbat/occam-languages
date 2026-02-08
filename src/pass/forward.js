"use strict";

import { nonTerminalNodeQuery, isLastRemainingArgumentFunction } from "../utilities/pass";

export default class ForwardPass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(childNodes, ...remainingArguments) {
    let descended = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const index = 0;

      descended = this.descendForward(index, childNodes, ...remainingArguments); ///
    } else {
      const visited = childNodes.every((childNode) => {
        const node = childNode, ///
              visited = this.visitNode(node, ...remainingArguments);

        if (visited) {
          return true;
        }
      });

      if (visited) {
        descended = true;
      }
    }

    return descended;
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

  descendForward(index, childNodes, ...remainingArguments) {
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
                    descendedForward = this.descendForward(aheadIndex, childNodes, ...remainingArguments);

              return descendedForward;
            });

      if (visited) {
        descendedForward = true;
      }
    }

    return descendedForward;
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    let visited = false;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const descendForward = remainingArguments.pop(), ///
            descendedForward = descendForward();

      if (descendedForward) {
        visited = true;
      }

      remainingArguments.push(descendForward);
    } else {
      visited = true;
    }

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

          const childNodes = nonTerminalNode.getChildNodes(), ///
                descended = this.descend(childNodes, ...remainingArguments);

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
