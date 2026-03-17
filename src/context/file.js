"use strict";

import Context from '../context';

import { lineIndexFromNodeAndTokens } from "../utilities/lineIndex";
import { nodeAsString, nodesAsString } from "../utilities/node";

export default class FileContext extends Context {
  constructor(context, fileContent, filePath, tokens, node) {
    super(context);

    this.fileContent = fileContent;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
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

  isFileContext() {
    const fileContext = true;

    return fileContext;
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

    const lexer = this.getLexer(),
          parser = this.getParser(),
          content = this.fileContent; ///

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);
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

  static fromFile(Class, file, ...remainingArguments) {
    const fileContent = file.getContent(),
          filePath = file.getPath(),
          tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, fileContent, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }

  static fromJSON(Class, json, ...remainingArguments) {
    const { fileContent, filePath } = json,
          tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, fileContent, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }
}
