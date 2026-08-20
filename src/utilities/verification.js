"use strict";

import { Dependency } from "occam-model";
import { arrayUtilities } from "necessary";

import { every  } from "../utilities/continuation";
import { SINGLE_SPACE } from "../constants";

const { last } = arrayUtilities;

export function createReleaseContexts(dependencyName, context, fail, succeed) {
  const name = dependencyName,  ///
        dependency = Dependency.fromName(name),
        dependentNames = [],
        dependentReleased = false;

  return createReleaseContext(dependency, dependentNames, dependentReleased, context, fail, (releaseContextCreated) => {
    let releaseContextsCreated = false;

    if (releaseContextCreated) {
      releaseContextsCreated = true;
    }

    return succeed(releaseContextsCreated);
  });
}

export function initialiseReleaseContexts(context) {
  const { releaseContexts } = context;

  releaseContexts.forEach((releaseContext) => {
    initialiseReleaseContext(releaseContext, context);
  });
}

export function verifyReleaseContexts(context, fail, succeed) {
  const { releaseContexts } = context,
        back = fail,  ///
        forward = succeed;  ///

  return every(releaseContexts, verifyReleaseContext, context, back, forward);
}

export default {
  createReleaseContexts,
  initialiseReleaseContexts,
  verifyReleaseContexts
};

function verifyReleaseContext(releaseContext, context, back, forward) {
  const released = releaseContext.isReleased(),
        verified = releaseContext.hasVerified();

  if (released || verified) {
    return forward();
  }

  const { log } = context,
        name = releaseContext.getName(),
        releaseName = name; ///

  log.info(`Verifying the '${releaseName}' project...`);

  return releaseContext.verify(back, () => {
    log.info(`...verified the '${releaseName}' project.`);

    return forward(context);
  });
}

function createReleaseContext(dependency, dependentNames, dependentReleased, context, fail, succeed) {
  const { log } = context,
        releaseContext = findReleaseContext(dependency, context);

  if (releaseContext !== null) {
    const releaseContextCreated = true;

    return succeed(releaseContextCreated);
  }

  const dependencyName = dependency.getName(),
        dependentNamesLength = dependentNames.length;

  if (dependentNamesLength === 0) {
    log.info(`Creating the '${dependencyName}' package context...`);
  } else {
    const lastDependentName = last(dependentNames),
          dependentName = lastDependentName,  ///
          dependencyString = dependency.asString();

    log.info(`Creating the '${dependencyName}' package context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
  }

  const { releaseContextFromDependency } = context;

  return releaseContextFromDependency(dependency, context, fail, (releaseContext) => {
    let releaseContextCreated = false;

    const releatePresent = checkReleasePresent(releaseContext, dependencyName, context);

    if (!releatePresent) {
      return succeed(releaseContextCreated);
    }

    const projectDependencyOfPackage = checkProjectDependencyOfPackage(releaseContext, dependentReleased, dependentNames, context);

    if (projectDependencyOfPackage) {
      return succeed(releaseContextCreated);
    }

    const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    if (!releaseMatchesDependency) {
      return succeed(releaseContextCreated);
    }

    return createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context, fail, (dependencyReleaseContextsCreated) => {
      if (dependencyReleaseContextsCreated) {
        releaseContextCreated = true;
      }

      if (releaseContextCreated) {
        addReleaseContext(releaseContext, context);
      }

      releaseContextCreated ?
        log.debug(`...created the '${dependencyName}' package context.`) :
          log.warning(`...unable to create the '${dependencyName}' package context.`);

      return succeed(releaseContextCreated);
    });
  });
}

function createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context, fail, succeed) {
  const name = releaseContext.getName(),
        released = releaseContext.isReleased(),
        dependencies = releaseContext.getDependencies(),
        dependentName = name,  ///
        dependentReleased = released;  ///

  dependentNames = [ ...dependentNames, dependentName ];  ///

  const array = dependencies.getArray();

  return every(array, (dependency, back, forward) => {
    const cyclicDependencyPresent = checkCyclicDependencyPresent(dependency, dependentNames, context);

    if (cyclicDependencyPresent) {
      return back();
    }

    return createReleaseContext(dependency, dependentNames, dependentReleased, context, fail, (releaseContextCreated) => {
      return (releaseContextCreated) ?
                forward() :
                  back();
    });
  }, () => succeed(false), () => succeed(true));
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

function checkReleasePresent(releaseContext, dependencyName, context) {
  let releasePresent = true;

  if (releaseContext === null) {
    const { log } = context;

    log.warning(`The '${dependencyName}' package context could not be created. Perhaps the 'meta.json' file is missing or invalid.`);

    releasePresent = false;
  }

  return releasePresent;
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
    const unreleased = releaseContext.isUnreleased();

    if (unreleased) {
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
