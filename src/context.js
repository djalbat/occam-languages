"use strict";

import { jsonUtilities } from "necessary";

import { DOUBLE_SPACE, TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, ERROR_LEVEL, WARNING_LEVEL } from "./constants";

const { isBoolean } = jsonUtilities;

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

  commit(context, recursive = false) {
    const contextBoolean = isBoolean(context);

    if (contextBoolean) {
      recursive = context;  ///

      context = undefined;
    }

    if (context === undefined) {
      context = this.context;
    }

    this.merge(context);

    if (recursive) {
      context = context.commit(recursive);
    }

    return context;
  }

  merge(context) {
    ///
  }

  isReleased() { return this.context.isReleased(); }

  isUnreleased() { return this.context.isUnreleased(); }

  getReleaseContext() { return this.context.getReleaseContext(); }

  nodesAsString(node) { return this.context.nodesAsString(node); }

  nodeAsString(node) { return this.context.nodeAsString(node); }

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

  break(node, breakPoint, forward, bcak) { return this.context.break(node, breakPoint, forward, bcak); }

  static fromNothing(Class, ...remainingArguments) {
    let context = remainingArguments.pop();

    context = new Class(context, ...remainingArguments);  ///

    return context;
  }
}
