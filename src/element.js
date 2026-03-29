"use strict";

export default class Element {
  constructor(context, string, node, lineIndex) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.lineIndex = lineIndex;
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

  getLineIndex() {
    return this.lineIndex;
  }

  setContext(context) {
    this.context = context;
  }

  setString(string) {
    this.string = string;
  }

  setNode(node) {
    this.node = node;
  }

  setLineIndex(lineIndex) {
    this.lineIndex = lineIndex;
  }

  async break(context) {
    this.lineIndex = await context.break(this.node, this.lineIndex);
  }

  matchNode(node) { return this.node.match(node); }
}
