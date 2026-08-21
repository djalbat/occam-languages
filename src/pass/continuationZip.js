"use strict";

import { match } from "../utilities/continuation";
import { nonTerminalNodeQuery, areChildNodesCongruent } from "../utilities/pass";

export default class ContinuationZipPass {
  run(generalNode, specificNode, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

    return this.visitNode(generalNode, specificNode, ...remainingArguments, back, forward);
  }

  descend(generalChildNodes, specificChildNodes, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop(),
          childNodesCongruent = areChildNodesCongruent(generalChildNodes, specificChildNodes);

    if (!childNodesCongruent) {
      return back();
    }

    return match(generalChildNodes, specificChildNodes, (generalChildNode, specificChildNode, ...remainingArguments) => {
      const index = remainingArguments.pop(),
            forward = remainingArguments.pop(),
            back = remainingArguments.pop(),
            generalNode = generalChildNode, ///
            specificNode = specificChildNode; ///

      return this.visitNode(generalNode, specificNode, ...remainingArguments, back, forward);
    }, ...remainingArguments, back, forward);
  }

  visitNode(generalNode, specificNode, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop(),
          generalNodeTerminalNode = generalNode.isTerminalNode(),
          specificNodeTerminalNode = specificNode.isTerminalNode(),
          generalNodeNonTerminalNode = generalNode.isNonTerminalNode(),
          specificNodeNonTerminalNode = specificNode.isNonTerminalNode();

    if (generalNodeTerminalNode && specificNodeTerminalNode) {
      const generalTerminalNode = generalNode,  ///
            specificTerminalNode = specificNode;  ///

      return this.visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments, back, forward);
    }

    if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
        specificNonTerminalNode = specificNode; ///

      return this.visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments, back, forward);
    }

    return back();
  }

  visitTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

    return forward(...remainingArguments);
  }

  visitNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    const forward = remainingArguments.pop(),
          back = remainingArguments.pop();

    let { maps } = this.constructor;

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

    if (map !== null) {
      const { run } = map;

      return run(generalNode, specificNode, ...remainingArguments, back, forward);
    }

    generalNode = generalNonTerminalNode; ///
    specificNode = specificNonTerminalNode; ///

    generalNonTerminalNode = nonTerminalNodeQuery(generalNode);
    specificNonTerminalNode = nonTerminalNodeQuery(specificNode);

    if ((generalNonTerminalNode === null) || (specificNonTerminalNode === null)) {
      return back();
    }

    const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
          specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///

    if (generalNonTerminalNodeRuleName !== specificNonTerminalNodeRuleName) {
      return back();
    }

    const generalChildNodes = generalNonTerminalNode.getChildNodes(), ///
          specificChildNodes = specificNonTerminalNode.getChildNodes(); ///

    return this.descend(generalChildNodes, specificChildNodes, ...remainingArguments, back, forward);
  }
}