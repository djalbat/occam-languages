"use strict";

import Context from '../context';
import BreakPoint from "../breakPoint";

import { nodeAsString, nodesAsString } from "../utilities/node";

export default class FileContext extends Context {
  constructor(context, fileContent, filePath, tokens, node, json) {
    super(context);

    this.fileContent = fileContent;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.json = json;
  }

  getFileContent() {
    return this.fileContent;
  }

  getFilePath() {
    return this.filePath;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getJSON() {
    return this.json;
  }

  getLexer() {
    const lexer = null;

    return lexer;
  }

  getParser() {
    const parser = null;

    return parser;
  }

  getTypePrefix() {
    const context = this.getContext(),
          typePrefix = context.getTypePrefix();

    return typePrefix;
  }

  matchFilePath(filePath) {
    const filePathMatches = (this.filePath === filePath);

    return filePathMatches;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  async break(node, breakPoint) {
    const filePath = this.filePath,
          releaseContext = this.getReleaseContext();

    if (breakPoint === null) {
      breakPoint = BreakPoint.fromFilePathNodeAndTokens(filePath, node, this.tokens);
    }

    await releaseContext.break(breakPoint);

    return breakPoint;
  }

  async verify() {
    let verifies = false;

    if (this.node === null) {
      this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
    } else {
      this.debug(`Verifying the '${this.filePath}' file...`);

      const fileVerifies = await this.verifyFile();

      if (fileVerifies) {
        verifies = true;
      }

      verifies ?
        this.complete() :
          this.clear();

      if (verifies) {
        this.info(`...verified the '${this.filePath}' file.`);
      }
    }

    return verifies;
  }

  initialise() {
    const lexer = this.getLexer(),
          parser = this.getParser(),
          content = this.fileContent; ///

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);
  }

  static fromFile(Class, file, ...remainingArguments) {
    const fileContent = file.getContent(),
          filePath = file.getPath(),
          tokens = null,
          node = null,
          json = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, fileContent, filePath, tokens, node, json, ...remainingArguments);

    return fileContext;
  }

  static fromJSON(Class, json, ...remainingArguments) {
    const { fileContent, filePath } = json,
          tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, fileContent, filePath, tokens, node, json, ...remainingArguments);

    return fileContext;
  }
}
