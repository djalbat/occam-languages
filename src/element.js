"use strict";

export default class Element {
  constructor(context, string, node, breakPoint) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.breakPoint = breakPoint;
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

  getBreakPoint() {
    return this.breakPoint;
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

  setBreakPoint(breakPoint) {
    this.breakPoint = breakPoint;
  }

  commit(context) {
    this.context = context;
  }

  async break(context) {
    this.breakPoint = await context.break(this.node, this.breakPoint);
  }

  matchNode(node) { return this.node.match(node); }
}
