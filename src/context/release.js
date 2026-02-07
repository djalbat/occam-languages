"use strict";

import { arrayUtilities } from "necessary";

import { asyncResolve } from "../utilities/asynchronous";
import { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, BREAK_MESSAGE} from "../constants";

const { push } = arrayUtilities;

export default class ReleaseContext {
  constructor(log, entries, callback, fileContexts) {
    this.log = log;
    this.entries = entries;
    this.callback = callback;
    this.fileContexts = fileContexts;
  }

  getLog() {
    return this.log;
  }

  getEntries() {
    return this.entries;
  }

  getCallback() {
    return this.callback;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getReleaseContext() {
    const releaseContext = this;  ///

    return releaseContext;
  }

  getProcedures() {
    const procedures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextProcedures = fileContext.getProcedures(includeRelease);

      push(procedures, fileContextProcedures);
    });

    return procedures;
  }

  findFile(filePath) { return this.entries.findFile(filePath); }

  findFileContext(filePath) {
    const fileContext = this.fileContexts.find(((fileContext) => {
      const filePathMatches = fileContext.matchFilePath(filePath);

      if (filePathMatches) {
        return true;
      }
    })) || null;

    return fileContext;
  }

  findProcedureByName(name) {
    const procedures = this.getProcedures(),
          procedure = procedures.find((procedure) => {
            const nameMatches = procedure.matchName(name);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return procedure;
  }

  isProcedurePresentByName(name) {
    const procedure = this.findProcedureByName(name),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

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

  writeToLog(level, message, filePath = null, lineIndex = null) {
    this.log.write(level, message, filePath, lineIndex);
  }

  getDepth() {
    const depth = 0;

    return depth;
  }

  initialise() {
    const releaseContext = this;  ///

    fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);

    this.initialised = true;
  }

  async verify() {
    let verifies = false;

    const verifiedFileContexts = [],
          fileContextsVerify = await verifyFileContexts(this.fileContexts, verifiedFileContexts);

    if (fileContextsVerify) {
      this.fileContexts = verifiedFileContexts; ///

      this.verified = true;

      verifies = true;
    }

    return verifies;
  }

  async break(filePath, lineIndex) {
    const level = TRACE_LEVEL,
          message = BREAK_MESSAGE;

    this.writeToLog(level, message, filePath, lineIndex);

    const context = this; ///

    await this.callback(context, filePath, lineIndex);
  }

  static fromLogEntriesAndCallback(log, entries, callback) {
    const fileContexts = [],
          releaseContext = new ReleaseContext(log, entries, callback, fileContexts);

    return releaseContext;
  }
}

async function verifyFileContexts(fileContexts, verifiedFileContexts) {
  const resolved = await asyncResolve(fileContexts, verifiedFileContexts, async (fileContext) => {
          const fileContextVerifies = await fileContext.verify();

          if (fileContextVerifies) {
            return true;
          }
        }),
        fileContextsVerify = resolved;  ///

  return fileContextsVerify;
}

function fileContextsFromEntries(entries, fileContexts, releaseContext) {
  entries.forEachFile((file) => {
    const FileContext = file.getFileContext(),
          fileContext = FileContext.fromFile(file, releaseContext);

    fileContexts.push(fileContext);
  });
}
