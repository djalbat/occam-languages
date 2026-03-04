"use strict";

import { arrayUtilities } from "necessary";

import { SINGLE_SPACE } from "../constants";
import { asyncEveryDependency } from "../utilities/dependency";

const { last } = arrayUtilities;

export async function createReleaseContexts(dependency, context) {
  let releaseContextsCreated = false;

  const dependentNames = [],
        releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);

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

export async function verifyReleaseContexts(dependency, context) {
  let releaseContextsVerify = false;

  const dependentName = null,
        dependentReleased = false,
        releaseContextVerifies = await verifyReleaseContext(dependency, dependentName, dependentReleased, context);

  if (releaseContextVerifies) {
    releaseContextsVerify = true;
  }

  return releaseContextsVerify;
}

export default {
  createReleaseContexts,
  initialiseReleaseContexts,
  verifyReleaseContexts
};

async function createReleaseContext(dependency, dependentNames, context) {
  let releaseContextCreated = false;

  const { log, releaseContextFromDependency } = context,
        releaseContext = findReleaseContext(dependency, context);

  if (releaseContext !== null) {
    releaseContextCreated = true;
  } else {
    const dependentNamesLength = dependentNames.length,
          dependencyString = dependency.asString(),
          dependencyName = dependency.getName(),
          releaseName = dependencyName; ///

    if (dependentNamesLength === 0) {
      log.info(`Creating the '${releaseName}' package context...`);
    } else {
      const lastDependentName = last(dependentNames),
            dependentName = lastDependentName;  ///

      log.info(`Creating the '${releaseName}' package context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
    }

    const releaseContext = await releaseContextFromDependency(dependency, context);

    if (releaseContext === null) {
      log.warning(`The '${releaseName}' package context could not be created. Perhaps the 'meta.json' file is missing or invalid..`);
    } else {
      const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

      if (releaseMatchesDependency) {
        const dependencyReleaseContextsCreated = await createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context);

        if (dependencyReleaseContextsCreated) {
          const { releaseContexts } = context;

          releaseContexts.push(releaseContext);

          releaseContextCreated = true;
        }
      }
    }

    releaseContextCreated ?
      log.debug(`...created the '${releaseName}' package context.`) :
        log.warning(`...unable to create the '${releaseName}' package context.`);
  }

  return releaseContextCreated;
}

async function verifyReleaseContext(dependency, dependentName, dependentReleased, context) {
  let releaseContextVerifies = false;

  const { log } = context,
        releaseContext = findReleaseContext(dependency, context),
        name = releaseContext.getName(),
        released = releaseContext.isReleased(),
        releaseName = name; ///

  if (dependentReleased && !released) {
    log.warning(`The '${releaseName}' project cannot be verified because its '${dependentName}' dependent is a package.`);
  } else {
    const dependencies = releaseContext.getDependencies(),
          dependentName = releaseName,  ///
          dependentReleased = released, ///
          dependencyReleaseContextsVerify = await verifyDependencyReleaseContexts(dependencies, dependentName, dependentReleased, context);

    if (dependencyReleaseContextsVerify) {
      const verified = releaseContext.hasVerified();

      if (verified || released) {
        releaseContextVerifies = true;
      } else {
        log.info(`Verifying the '${releaseName}' project...`);

        const verifies = await releaseContext.verify();

        if (verifies) {
          log.info(`...verified the '${releaseName}' project.`);

          releaseContextVerifies = true;
        }
      }
    }
  }

  return releaseContextVerifies;
}

async function createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context) {
  let dependencyReleaseContextsCreated;

  const name = releaseContext.getName(),
        dependencies = releaseContext.getDependencies(),
        dependencyName = name;  ///

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  dependencyReleaseContextsCreated = await asyncEveryDependency(dependencies, async (dependency) => {
    const cyclicDependencPresent = checkCyclicDependencyPresent(dependency, dependentNames, context);

    if (!cyclicDependencPresent) {
      const releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);

      if (releaseContextCreated) {
        return true;
      }
    }
  });

  return dependencyReleaseContextsCreated;
}

async function verifyDependencyReleaseContexts(dependencies, dependentName, dependentReleased, context) {
  const dependencyReleaseContextsVerify = await asyncEveryDependency(dependencies, async (dependency) => {
          const releaseContextVerifies = await verifyReleaseContext(dependency, dependentName, dependentReleased, context);

          if (releaseContextVerifies) {
            return true;
          }
        });

  return dependencyReleaseContextsVerify;
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
  const { log, FileContextFromFilePath } = context,
        name = releaseContext.getName(),
        releaseName = name, ///
        releaseContexts = retrieveReleaseContexts(releaseContext, context);

  log.info(`Initialising the '${releaseName}' package context...`);

  releaseContext.initialise(releaseContexts, FileContextFromFilePath);

  log.debug(`...initialised the '${releaseName}' package context.`);
}

function checkCyclicDependencyPresent(dependency, dependentNames, context) {
  let cyclicDependencPresent = false;

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

    cyclicDependencPresent = true;
  }

  return cyclicDependencPresent;
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
