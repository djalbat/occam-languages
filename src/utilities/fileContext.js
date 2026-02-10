"use strict";

export function fileContextsFromJSON(json, fileContexts, releaseContext, FileContextFromFilePath) {
  const fileContextsJSON = json;  ///

  fileContextsJSON.forEach((fileContextJSON) => {
    const { filePath } = fileContextJSON,
          json = fileContextJSON, ///
          FileContext = FileContextFromFilePath(filePath),
          fileContext = FileContext.fromJSON(json, releaseContext);

    fileContexts.push(fileContext);
  });
}

export function fileContextsFromEntries(entries, fileContexts, releaseContext, FileContextFromFilePath) {
  entries.forEachFile((file) => {
    const filePath = file.getPath(),
          FileContext = FileContextFromFilePath(filePath),
          fileContext = FileContext.fromFile(file, releaseContext);

    fileContexts.push(fileContext);
  });
}

export default {
  fileContextsFromJSON,
  fileContextsFromEntries
};
