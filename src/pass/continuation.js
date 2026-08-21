"use strict";

import { every } from "../utilities/continuation";
import { nonTerminalNodeQuery } from "../utilities/pass";

export default class ContinuationPass {
  run(node, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

    return this.visitNode(node, ...remainingArguments, back, forward);
  }

  descend(childNodes, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

    return every(childNodes, (childNode, ...remainingArguments) => {
      const index = remainingArguments.pop(),
            forward = remainingArguments.pop(),
            back = remainingArguments.pop(),
            node = childNode; ///

      return this.visitNode(node, ...remainingArguments, back, forward);
    }, ...remainingArguments, back, forward);
  }

  visitNode(node, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop(),
          nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      return this.visitTerminalNode(terminalNode, ...remainingArguments, back, forward);
    }

    const nonTerminalNode = node;  ///

    return this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments, back, forward);
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

    return forward(...remainingArguments);
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

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

      return run(node, ...remainingArguments, back, forward);
    }

    node = nonTerminalNode; ///

    nonTerminalNode = nonTerminalNodeQuery(node);

    if (nonTerminalNode === null) {
      return back();
    }

    const childNodes = nonTerminalNode.getChildNodes();

    return this.descend(childNodes, ...remainingArguments, back, forward);
  }
}
