"use strict";

import { every } from "../utilities/continuation";
import { nonTerminalNodeQuery } from "../utilities/pass";

export default class ContinuationPass {
  run(node, ...remainingArguments) {
    const back = remainingArguments.pop(),
          forward = remainingArguments.pop();

    return this.visitNode(node, ...remainingArguments, forward, back);
  }

  descend(childNodes, ...remainingArguments) {
    const back = remainingArguments.pop(),
          forward = remainingArguments.pop();

    return every(childNodes, (childNode, ...remainingArguments) => {
      const index = remainingArguments.pop(),
            back = remainingArguments.pop(),
            forward = remainingArguments.pop(),
            node = childNode; ///

      return this.visitNode(node, ...remainingArguments, forward, back);
    }, ...remainingArguments, forward, back);
  }

  visitNode(node, ...remainingArguments) {
    const back = remainingArguments.pop(),
          forward = remainingArguments.pop(),
          nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      return this.visitTerminalNode(terminalNode, ...remainingArguments, forward, back);
    }

    const nonTerminalNode = node;  ///

    return this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments, forward, back);
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    const back = remainingArguments.pop(),
          forward = remainingArguments.pop();

    return forward(...remainingArguments, back);
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    const back = remainingArguments.pop(),
          forward = remainingArguments.pop();

    let { maps } = this.constructor;

    let node;

    const map = maps.find((map) => {
      const { nodeQuery } = map;

      node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        return true;
      }
    }) || null;

    if (map !== null) {
      const { run } = map;

      return run(node, ...remainingArguments, forward, back);
    }

    node = nonTerminalNode; ///

    nonTerminalNode = nonTerminalNodeQuery(node);

    if (nonTerminalNode === null) {
      return back();
    }

    const childNodes = nonTerminalNode.getChildNodes();

    return this.descend(childNodes, ...remainingArguments, forward, back);
  }
}
