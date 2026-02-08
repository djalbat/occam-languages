"use strict";

import { nonTerminalNodeQuery } from "../utilities/pass";
import { asyncSome, asyncEvery } from "../utilities/asynchronous";

export default class AsyncPass {
  async run(node, ...remainingArguments) {
    let success;

    const visited = await this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  async descend(childNodes, ...remainingArguments) {
    let descended = false;

    const visited = await asyncEvery(childNodes, async (childNode) => {
      const node = childNode, ///
            visited = await this.visitNode(node, ...remainingArguments);

      if (visited) {
        return true;
      }
    });

    if (visited) {
      descended = true;
    }

    return descended;
  }

  async visitNode(node, ...remainingArguments) {
    let visited;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      visited = await this.visitTerminalNode(terminalNode, ...remainingArguments);
    } else {
      const nonTerminalNode = node;  ///

      visited = await this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  async visitTerminalNode(terminalNode, ...remainingArguments) {
    const visited = true;

    return visited;
  }

  async visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        run: async (node, ...remainingArguments) => {
          let visited = false;

          const childNodes = nonTerminalNode.getChildNodes(), ///
                descended = await this.descend(childNodes, ...remainingArguments);

          if (descended) {
            visited = true;
          }

          return visited;
        }
      }
    ]

    await asyncSome(maps, async (map) => {
      const { nodeQuery, run } = map;

      const node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        const success = await run(node, ...remainingArguments);

        visited = success;  ///

        return true;
      }
    });

    return visited;
  }
}
