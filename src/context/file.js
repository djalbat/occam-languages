"use strict";

import Context from '../context';

import { lineIndexFromNodeAndTokens } from "../utilities/lineIndex";
import { nodeAsString, nodesAsString } from "../utilities/node";

export default class FileContext extends Context {
  constructor(context, filePath, tokens, node, lexer, parser) {
    super(context);

    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.lexer = lexer;
    this.parser = parser;
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
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  findFile() {
    const releaseContext = this.getReleaseContext(),
          file = releaseContext.findFile(this.filePath);

    return file;
  }

  getCombinedCustomGrammar() {
    const releaseContext = this.getReleaseContext(),
          combinedCustomGrammar = releaseContext.getCombinedCustomGrammar();

    return combinedCustomGrammar;
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

    const file = this.findFile(),
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

  static fromFileLexerAndParser(Class, file, lexer, parser, ...remainingArguments) {
    const filePath = file.getPath(),
          tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, lexer, parser, ...remainingArguments);

    return fileContext;
  }

  static fromFilePathLexerAndParser(Class, filePath, lexer, parser, ...remainingArguments) {
    const tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, lexer, parser, ...remainingArguments);

    return fileContext;
  }
}
