"use strict";

import { arrayUtilities } from "necessary";

import { asyncEvery  } from "../utilities/asynchronous";
import { SINGLE_SPACE } from "../constants";

const { last } = arrayUtilities;

export async function createReleaseContexts(dependency, context) {
  let releaseContextsCreated = false;

  const dependentNames = [],
        dependentReleased = false,
        releaseContextCreated = await createReleaseContext(dependency, dependentNames, dependentReleased, context);

  if (releaseContextCreated) {
    releaseContextsCreated = true;
  }

  return releaseContextsCreated;
}

export function initialiseReleaseContexts(context) {
  const { releaseContexts } = context;

  releaseContexts.forEach((releaseContext) => {
    initialiseReleaseContext(releaseContext, context);
  });
}

export async function verifyReleaseContexts(context) {
  let releaseContextsVerify;

  const { releaseContexts } = context;

  releaseContextsVerify = await asyncEvery(releaseContexts, async (releaseContext) => {
    const releaseContextVerifies = await verifyReleaseContext(releaseContext, context);

    if (releaseContextVerifies) {
      return true;
    }
  });

  return releaseContextsVerify;
}

export default {
  createReleaseContexts,
  initialiseReleaseContexts,
  verifyReleaseContexts
};

async function verifyReleaseContext(releaseContext, context) {
  let releaseContextVerifies = false;

  const released = releaseContext.isReleased(),
        verified = releaseContext.hasVerified();

  if (released || verified) {
    releaseContextVerifies = true;
  } else {
    const { log } = context,
          name = releaseContext.getName(),
          releaseName = name; ///

    log.info(`Verifying the '${releaseName}' project...`);

    const verifies = await releaseContext.verify();

    if (verifies) {
      log.info(`...verified the '${releaseName}' project.`);

      releaseContextVerifies = true;
    }
  }

  return releaseContextVerifies;
}

async function createReleaseContext(dependency, dependentNames, dependentReleased, context) {
  let releaseContextCreated = false;

  const { log } = context,
        dependencyName = dependency.getName();

  let releaseContext;

  releaseContext = findReleaseContext(dependency, context);

  const releaseContextFound = (releaseContext !== null);

  if (!releaseContextFound) {
    const dependentNamesLength = dependentNames.length,
          dependencyString = dependency.asString();

    if (dependentNamesLength === 0) {
      log.info(`Creating the '${dependencyName}' package context...`);
    } else {
      const lastDependentName = last(dependentNames),
            dependentName = lastDependentName;  ///

      log.info(`Creating the '${dependencyName}' package context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
    }

    const { releaseContextFromDependency } = context;

    releaseContext = await releaseContextFromDependency(dependency, context);
  }

  if (releaseContext === null) {
    log.warning(`The '${dependencyName}' package context could not be created. Perhaps the 'meta.json' file is missing or invalid.`);
  } else {
    const projectDependencyOfPackage = checkProjectDependencyOfPackage(releaseContext, dependentReleased, dependentNames, context);

    if (!projectDependencyOfPackage) {
      const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

      if (releaseMatchesDependency) {
        if (releaseContextFound) {
          releaseContextCreated = true;
        } else {
          const dependencyReleaseContextsCreated = await createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context);

          if (dependencyReleaseContextsCreated) {
            addReleaseContext(releaseContext, context);

            releaseContextCreated = true;
          }
        }
      }
    }

    if (!releaseContextFound) {
      releaseContextCreated ?
        log.debug(`...created the '${dependencyName}' package context.`) :
          log.warning(`...unable to create the '${dependencyName}' package context.`);
    }
  }

  return releaseContextCreated;
}

async function createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context) {
  let dependencyReleaseContextsCreated;

  const name = releaseContext.getName(),
        released = releaseContext.isReleased(),
        dependencies = releaseContext.getDependencies(),
        dependentName = name,  ///
        dependentReleased = released;  ///

  dependentNames = [ ...dependentNames, dependentName ];  ///

  const array = dependencies.getArray();

  dependencyReleaseContextsCreated = await asyncEvery(array, async (dependency) => {
    const cyclicDependencyPresent = checkCyclicDependencyPresent(dependency, dependentNames, context);

    if (!cyclicDependencyPresent) {
      const releaseContextCreated = await createReleaseContext(dependency, dependentNames, dependentReleased, context);

      if (releaseContextCreated) {
        return true;
      }
    }
  });

  return dependencyReleaseContextsCreated;
}

function addReleaseContext(releaseContext, context) {
  const { releaseContexts } = context;

  releaseContexts.push(releaseContext);
}

function findReleaseContext(dependency, context) {
  const { releaseContexts } = context,
        dependencyName = dependency.getName(),
        releaseContext = releaseContexts.find((releaseContext) => {
          const dependencyNameMatches = releaseContext.matchDependencyName(dependencyName);

          if (dependencyNameMatches) {
            return true;
          }
        }) || null;

  return releaseContext;
}

function retrieveReleaseContexts(releaseContext, context, releaseContexts = []) {
  const releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext);

  if (!releaseContextsIncludesReleaseContext) {
    const dependencies = releaseContext.getDependencies();

    dependencies.forEachDependency((dependency) => {
      const releaseContext = findReleaseContext(dependency, context);

      retrieveReleaseContexts(releaseContext, context, releaseContexts);
    });

    releaseContexts.unshift(releaseContext);
  }

  return releaseContexts;
}

function initialiseReleaseContext(releaseContext, context) {
  const { log } = context,
        name = releaseContext.getName(),
        releaseName = name, ///
        releaseContexts = retrieveReleaseContexts(releaseContext, context);

  log.info(`Initialising the '${releaseName}' package context...`);

  const { FileContextFromFilePath } = context;

  releaseContext.initialise(releaseContexts, FileContextFromFilePath);

  log.debug(`...initialised the '${releaseName}' package context.`);
}

function checkCyclicDependencyPresent(dependency, dependentNames, context) {
  let cyclicDependencyPresent = false;

  const dependencyName = dependency.getName(),
        index = dependentNames.indexOf(dependencyName);

  if (index > -1) {
    const { log } = context,
          circularDependentNames = dependentNames.slice(index),
          circularDependencyNames = [
            ...circularDependentNames,
            dependencyName
          ],
          circularDependencyNamesString = circularDependencyNames.join(SINGLE_SPACE);

    log.warning(`There is a cyclic dependency, '${circularDependencyNamesString}'.`);

    cyclicDependencyPresent = true;
  }

  return cyclicDependencyPresent;
}

function checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context) {
  let releaseMatchesDependency = true;

  const shortenedVersion = dependency.getShortenedVersion();

  if (shortenedVersion !== null) {
    const entriesMatchShortenedVersion = releaseContext.matchShortenedVersion(shortenedVersion);

    if (!entriesMatchShortenedVersion) {
      const { log } = context,
            version = releaseContext.getVersion(),
            lastDependentName = last(dependentNames),
            dependentName = lastDependentName,  ///
            versionString = version.toString(),
            dependencyString = dependency.asString();

      log.warning(`The '${dependentName}' dependent requires the '${dependencyString}' dependency but a context with version '${versionString}' was provided.`);

      releaseMatchesDependency = false;
    }
  }

  return releaseMatchesDependency;
}

function checkProjectDependencyOfPackage(releaseContext, dependentReleased, dependentNames, context) {
  let projectDependencyOfPackage = false;

  if (dependentReleased) {
    const released = releaseContext.isReleased();

    if (!released) {
      const { log } = context,
            name = releaseContext.getName(),
            lastDependentName = last(dependentNames),
            dependencyName = name,///
            dependentName = lastDependentName;  ///

      log.warning(`The '${dependencyName}' dependency is a project whilst its '${dependentName}' dependent is a package.`);

      projectDependencyOfPackage = true;
    }
  }

  return projectDependencyOfPackage;
}
