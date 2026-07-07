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

  break(context, continuation) {
    this.breakPoint = context.break(this.node, this.breakPoint, continuation);
  }

  matchNode(node) { return this.node.match(node); }
}
