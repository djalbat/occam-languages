"use strict";

import { asyncSome, asyncEvery } from "../utilities/asynchronous";
import { nonTerminalNodeQuery, areChildNodesCongruent } from "../utilities/pass";

export default class AsyncZipPass {
  async run(generalNode, specificNode, ...remainingArguments) {
    let success;

    const visited = await this.visitNode(generalNode, specificNode, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  async descend(generalChildNodes, specificChildNodes, ...remainingArguments) {
    let descended = false;

    const childNodesCongruent = areChildNodesCongruent(generalChildNodes, specificChildNodes);

    if (childNodesCongruent) {
      const visited = await asyncEvery(generalChildNodes, async (generalChildNode, index) => {
        const specificChildNode = specificChildNodes[index],
              specificNode = specificChildNode, ///
              generalNode = generalChildNode, ///
              visited = await this.visitNode(generalNode, specificNode, ...remainingArguments);

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

  async visitNode(generalNode, specificNode, ...remainingArguments) {
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

      visited = await this.visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments);
    } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
            specificNonTerminalNode = specificNode; ///

      visited = await this.visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  async visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    let visited;

    visited = true;

    return visited;
  }

  async visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        generalNodeQuery: nonTerminalNodeQuery,
        specificNodeQuery: nonTerminalNodeQuery,
        run: async (generalNode, specificNode, ...remainingArguments) => {
          let visited = false;

          const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
                specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///

          if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
            const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                  specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(),
                  generalChildNodes = generalNonTerminalNodeChildNodes, ///
                  specificChildNodes = specificNonTerminalNodeChildNodes, ///
                  descended = await this.descend(generalChildNodes, specificChildNodes, ...remainingArguments);

            if (descended) {
              visited = true;
            }
          }

          return visited;
        }
      }
    ]

    await asyncSome(maps, async (map) => {
      const { generalNodeQuery, specificNodeQuery, run } = map;

      const generalNode = generalNodeQuery(generalNonTerminalNode),  ///
            specificNode = specificNodeQuery(specificNonTerminalNode);  ///

      if ((generalNode !== null) && (specificNode !== null)) {
        const success  = await run(generalNode, specificNode, ...remainingArguments);

        visited = success;  ///

        return true;
      }
    });

    return visited;
  }
}
