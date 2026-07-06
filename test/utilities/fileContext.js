"use strict";

const TestFileContext = require("../context/file/test");

function FileContextFromFilePath(filePath) {
  let FileContext = TestFileContext;  ///

  return FileContext;
}

module.exports = {
  FileContextFromFilePath
};
