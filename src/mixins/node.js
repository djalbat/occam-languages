"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

function someTerminalNode(callback, tokenType) {
  let index = 0;

  return this.someChildNode((childNode) => {
    const childNodeTerminalNode = childNode.isTerminalNode();

    if (childNodeTerminalNode) {
      const terminalNode = childNode, ///
            terminalNodeType = terminalNode.getType();

      if (terminalNodeType === tokenType) {
        return callback(terminalNode, index++);
      }
    }
  });
}

function getNodeByRuleName(...ruleNames) {
  const node = this.findChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode, ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

      if (ruleNamesIncludesRuleName) {
        return true;
      }
    }
  }) || null;

  return node;
}

function getNodesByRuleName(...ruleNames) {
  const nodes = this.filterChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode, ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

      if (ruleNamesIncludesRuleName) {
        return true;
      }
    }
  });

  return nodes;
}

function getLastNodeByRuleName(...ruleNames) {
  let lastNode = null;

  this.backwardsSomeChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode, ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

      if (ruleNamesIncludesRuleName) {
        lastNode = childNode; ///

        return true;
      }
    }
  });

  return lastNode;
}

function getFirstNodeByRuleName(...ruleNames) {
  let firstNode = null;

  this.forwardsSomeChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode, ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

      if (ruleNamesIncludesRuleName) {
        firstNode = childNode; ///

        return true;
      }
    }
  });

  return firstNode;
}

function getSingularNodeByRuleName(...ruleNames) {
  let singularNode = null;

  const nodes = this.filterChildNode((childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            const nonTerminalNode = childNode, ///
                  ruleName = nonTerminalNode.getRuleName(),
                  ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

            if (ruleNamesIncludesRuleName) {
              return true;
            }
          }
        }),
        nodesLength = nodes.length;

  if (nodesLength === 1) {
    const firstNode = first(nodes);

    singularNode = firstNode; ///
  }

  return singularNode;
}

function getDescendantNodesByRuleName(...ruleNames) {
  const nodes = this.filterDescendantNode((descendantNode) => {
    const descendantNodeNonTerminalNode = descendantNode.isNonTerminalNode();

    if (descendantNodeNonTerminalNode) {
      const nonTerminalNode = descendantNode, ///
            ruleName = nonTerminalNode.getRuleName(),
            ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

      if (ruleNamesIncludesRuleName) {
        return true;
      }
    }
  });

  return nodes;
}

const nodeMixins = {
  someTerminalNode,
  getNodeByRuleName,
  getNodesByRuleName,
  getLastNodeByRuleName,
  getFirstNodeByRuleName,
  getSingularNodeByRuleName,
  getDescendantNodesByRuleName
};

export default nodeMixins;
