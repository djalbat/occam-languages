"use strict";

import Context from '../context';

import { lineIndexFromNodeAndTokens } from "../utilities/lineIndex";
import { nodeAsString, nodesAsString } from "../utilities/node";

export default class FileContext extends Context {
  constructor(context, filePath, tokens, node) {
    super(context);

    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
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

  prepare() {
    if (this.tokens !== null) {
      return;
    }

    const file = this.findFile(this.filePath),
          lexer = this.getLexer(),
          parser = this.getParser(),
          content = file.getContent();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);
  }

  initialise(json) {
    const { content } = json,
          lexer = this.getLexer(),
          parser = this.getParser();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);

    this.clear();

    this.addProcedures();
  }

  async break(node) {
    const filePath = this.filePath,
          lineIndex = lineIndexFromNodeAndTokens(node, this.tokens),
          releaseContext = this.getReleaseContext();

    await releaseContext.break(filePath, lineIndex);
  }

  async verify() {
    let verifies = false;

    this.prepare();

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

  toJSON() {
    const file = this.findFile(this.filePath),
          filePath = this.filePath, ///
          content = file.getContent(),
          json = {
            filePath,
            content
          };

    return json;
  }

  static fromFile(Class, file, ...remainingArguments) {
    const filePath = file.getPath(),
          tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }

  static fromFilePath(Class, filePath, ...remainingArguments) {
    const tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }

  static fromFilePathTokensAndNode(Class, filePath, tokens, node, ...remainingArguments) {
    const context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }
}
