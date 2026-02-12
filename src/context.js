"use strict";

import { DOUBLE_SPACE, TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, ERROR_LEVEL, WARNING_LEVEL } from "./constants";

export default class Context {
  constructor(context) {
    this.context = context;
  }

  getContext() {
    return this.context;
  }

  getDepth() {
    let depth = this.context.getDepth();

    depth++;

    return depth;
  }

  getReleaseContext() { return this.context.getReleaseContext(); }

  trace(message) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message);
  }

  debug(message) {
    const level = DEBUG_LEVEL;

    this.writeToLog(level, message);
  }

  info(message) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message);
  }

  warning(message) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message);
  }

  error(message) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message);
  }

  writeToLog(level, message) {
    const depth = this.getDepth(),
          indent = DOUBLE_SPACE.repeat(depth);

    message = `${indent}${message}`;  ///

    const releaseContext = this.getReleaseContext();

    releaseContext.writeToLog(level, message);
  }

  async break(node) { await this.context.break(node); }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    context = new Class(context, ...remainingArguments);  ///

    return context;
  }
}
