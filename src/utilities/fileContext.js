"use strict";

export function fileContextsFromJSON(json,fileContexts, releaseContext, fileContextFromJSON) {
  const fileContextsJSON = json;  ///

  fileContextsJSON.forEach((fileContextJSON) => {
    const json = fileContextJSON, ///
          fileContext = fileContextFromJSON(json, releaseContext);

    fileContexts.push(fileContext);
  });
}

export function fileContextsFromEntries(entries, fileContexts, releaseContext) {
  entries.forEachFile((file) => {
    const FileContext = file.getFileContext(),
          fileContext = FileContext.fromFile(file, releaseContext);

    fileContexts.push(fileContext);
  });
}
