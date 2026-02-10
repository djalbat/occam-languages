"use strict";

import { DOUBLE_SPACE } from "./constants";

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

  writeToLog(level, message) {
    const depth = this.getDepth(),
          indent = DOUBLE_SPACE.repeat(depth);

    message = `${indent}${message}`;  ///

    const releaseContext = this.getReleaseContext();

    releaseContext.writeToLog(level, message);
  }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    context = new Class(context, ...remainingArguments);  ///

    return context;
  }
}
