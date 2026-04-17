"use strict";

import { lineIndexFromNodeAndTokens } from "./utilities/breakPoint";

export default class BreakPoint {
  constructor(filePath, lineIndex) {
    this.filePath = filePath;
    this.lineIndex = lineIndex;
  }

  getFilePath() {
    return this.filePath;
  }

  getLineIndex() {
    return this.lineIndex;
  }

  setFilePath(filePath) {
    this.filePath = filePath;
  }

  setLineIndex(lineIndex) {
    this.lineIndex = lineIndex;
  }

  toJSON() {
    const filePath = this.filePath,
          lineIndex = this.lineIndex,
          json = {
            filePath,
            lineIndex
          }

    return json;
  }

  static fromJSON(json) {
    const { filePath, lineIndex } = json,
          breakPoint = new BreakPoint(filePath, lineIndex);

    return breakPoint;
  }

  static fromFilePathNodeAndTokens(filePath, node, tokens) {
    const lineIndex = lineIndexFromNodeAndTokens(node, tokens),
          breakPoint = new BreakPoint(filePath, lineIndex);

    return breakPoint;
  }
}
