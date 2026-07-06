"use strict";

const { FileContext } = require("../../../lib/index");  ///

const Procedure = require("../../element/procedure");

class TestFileContext extends FileContext {
  constructor(context, fileContent, filePath, tokens, node, json, procedure) {
    super(context, fileContent, filePath, tokens, node, json);

    this.procedure = procedure;
  }

  getProcedure() {
    return this.procedure;
  }

  getTypePrefixes(includeRelease) {
    const typePrefixes = [];

    return typePrefixes;
  }

  clear() {
    ///
  }

  complete() {
    ///
  }

  initialise() {
    ///
  }

  verify(continuation) {
    this.verifyFile((fileVerifies) => {
      let verifies = false;

      const filePath = this.getFilePath();

      this.debug(`Verifying the '${filePath}' file...`);

      if (fileVerifies) {
        verifies = true;
      }

      verifies ?
        this.complete() :
          this.clear();

      if (verifies) {
        this.info(`...verified the '${filePath}' file.`);
      }

      continuation(verifies);
    });
  }

  verifyFile(continuation) {
    const context =this;  ///

    this.procedure.call(context, (value) => {
      const fileVerifies = value; ///

      continuation(fileVerifies);
    });
  }

  static fromFile(file, context) {
    const procedure = Procedure.fromNothing(context),
          testFileContext = FileContext.fromFile(TestFileContext, file, procedure, context);

    return testFileContext;
  }
}

module.exports = TestFileContext;
