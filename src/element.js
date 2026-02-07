"use strict";

export default class Element {
  constructor(context, string, node) {
    this.context = context;
    this.string = string;
    this.node = node;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  async break(context) {
    await context.break(this.node);
  }

  matchNode(node) { return this.node.match(node); }
}
