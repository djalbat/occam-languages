"use strict";

const { levels } = require("necessary");

const { Log, verificationUtilities } =require("../../lib/index"); ///

const { FileContextFromFilePath } = require("../utilities/fileContext"),
      { releaseContextFromDependency } = require("../utilities/releaseContext");

const { TRACE_LEVEL } = levels;

const logLevel = TRACE_LEVEL,
      projectName = "minimal-propositional-logic",
      projectsDirectoryPath = "../../Logic";

const { createReleaseContexts, initialiseReleaseContexts, verifyReleaseContexts } = verificationUtilities;

describe("continuations", () => {
  const log = Log.fromLogLevel(logLevel),
        callback = (breakPoint, resume, context) => {
          resume();
        },
        releaseContexts = [];

  let context;

  before(() => {
    context = {
      log,
      callback,
      releaseContexts,
      projectsDirectoryPath,
      FileContextFromFilePath,
      releaseContextFromDependency
    }
  });

  it("create", async () => {
    const dependencyName = projectName,  ///
          releaseContextsCreated = await createReleaseContexts(dependencyName, context);

    assert.isTrue(releaseContextsCreated);
  });

  it("initialise", () => {
    initialiseReleaseContexts(context);
  });

  it("verify", (done) => {
    verifyReleaseContexts(context, (releaseContextsVerify) => {
      assert.isTrue(releaseContextsVerify);

      done();
    });
  });
});
