"use strict";

import { arrayUtilities } from "necessary";

import { asyncEveryDependency } from "../utilities/dependency";

const { last } = arrayUtilities;

export function initialiseReleaseContext(dependency, context) {
  const { log, releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    log.warning(`Unable to initialise the '${dependencyName}' context because it has not been created.`);
  } else {
    const releaseContextInitialised = releaseContext.isInitialised();

    if (!releaseContextInitialised) {
      initialiseDependencyReleaseContexts(dependency, releaseContext, context);

      const releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);

      log.info(`Initialising the '${dependencyName}' context...`);

      const { FileContextFromFilePath } = context;

      releaseContext.initialise(releaseContexts, FileContextFromFilePath);

      log.debug(`...initialised the '${dependencyName}' context.`);
    }
  }
}

export async function createReleaseContext(dependency, dependentNames, context) {
  let releaseContextCreated = false;

  const { log, releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    if (releaseMatchesDependency) {
      log.debug(`The '${releaseName}' context has already been created.`);

      releaseContextCreated = true;
    }
  } else {
    const dependencyString = dependency.asString(),
          dependentNamesLength = dependentNames.length;

    if (dependentNamesLength === 0) {
      log.info(`Creating the '${releaseName}' context...`);
    } else {
      const lastDependentName = last(dependentNames),
            dependentName = lastDependentName;  ///

      log.info(`Creating the '${releaseName}' context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
    }

    const { releaseContextFromDependency } = context,
          releaseContext = await releaseContextFromDependency(dependency, context);

    if (releaseContext !== null) {
      const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

      if (releaseMatchesDependency) {
        releaseContextMap[releaseName] = releaseContext;

        const dependencyReleaseContextsCreated = await createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context);

        if (dependencyReleaseContextsCreated) {
          releaseContextCreated = true;
        }
      }
    } else {
      const dependencyName = dependency.getName(),
            releaseName = dependencyName; ///

      log.warning(`The '${releaseName}' context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch.`);
    }

    releaseContextCreated ?
      log.debug(`...created the '${releaseName}' context.`) :
        log.warning(`...unable to create the '${releaseName}' context.`);
  }

  return releaseContextCreated;
}

export async function verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap) {
  let releaseContextVerifies = false;

  const releaseContext = releaseContextMap[releaseName];

  if (releaseContext !== null) {
    const released = releaseContext.isReleased();

    if (released) {
      releaseContextVerifies = true;
    } else {
      if (dependentReleased) {
        releaseContext.warning(`The '${releaseName}' project cannot be verifies because its '${dependentName}' dependent is a package.`);
      } else {
        const dependentName = releaseName,  ///
              dependentReleased = released, ///
              dependencyReleaseContextsVerify = await verifyDependencyReleaseContexts(releaseContext, dependentName, dependentReleased, releaseContextMap);

        if (dependencyReleaseContextsVerify) {
          const releaseContextVerified = releaseContext.hasVerified();

          if (releaseContextVerified) {
            releaseContextVerifies = true;
          } else {
            releaseContext.info(`Verifying the '${releaseName}' project...`);

            const verifies = await releaseContext.verify();

            if (verifies) {
              releaseContext.info(`...verified the '${releaseName}' project.`);

              releaseContextVerifies = true;
            }
          }
        }
      }
    }
  }

  return releaseContextVerifies;
}

export default {
  createReleaseContext,
  verifyReleaseContext,
  initialiseReleaseContext
};

async function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context) {
  let dependencyReleaseContextsCreated;

  const dependencyName = dependency.getName(),
        dependencies = releaseContext.getDependencies();

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  dependencyReleaseContextsCreated = await asyncEveryDependency(dependencies, async (dependency) => {
    const cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);

    if (!cyclicDependencyExists) {
      const releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);

      if (releaseContextCreated) {
        return true;
      }
    }
  });

  return dependencyReleaseContextsCreated;
}

async function verifyDependencyReleaseContexts(releaseContext, dependentName, dependentReleased, releaseContextMap) {
  const dependencies = releaseContext.getDependencies(),
        dependencyReleaseContextsVerify = await asyncEveryDependency(dependencies, async (dependency) => {
          const name = dependency.getName(),
                releaseName = name, ///
                releaseContextVerifies = await verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap);

          if (releaseContextVerifies) {
            return true;
          }
        });

  return dependencyReleaseContextsVerify;
}

function retrieveReleaseContexts(releaseContext, releaseContextMap) {
  const releaseContexts = [],
        remainingReleaseContext = releaseContext,  ///
        remainingReleaseContexts = [
          remainingReleaseContext
        ];

  let remainingReleaseContextsLength = remainingReleaseContexts.length;

  while (remainingReleaseContextsLength > 0) {
    const remainingReleaseContext = remainingReleaseContexts.shift(),
          releaseContext = remainingReleaseContext;  ///

    releaseContexts.push(releaseContext);

    const dependencies = releaseContext.getDependencies();

    dependencies.forEachDependency((dependency) => {
      const dependencyName = dependency.getName(),
            releaseName = dependencyName, ///
            releaseContext = releaseContextMap[releaseName],
            releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext),
            remainingReleaseContextsIncludesReleaseContext = remainingReleaseContexts.includes(releaseContext);

      if (!releaseContextsIncludesReleaseContext && !remainingReleaseContextsIncludesReleaseContext) {
        const remainingReleaseContext = releaseContext; ///

        remainingReleaseContexts.push(remainingReleaseContext);
      }
    });

    remainingReleaseContextsLength = remainingReleaseContexts.length;
  }

  return releaseContexts;
}

function checkCyclicDependencyExists(dependency, dependentNames, context) {
  const dependencyName = dependency.getName(),
        dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName),
        cyclicDependencyExists = dependentNamesIncludesDependencyName;  ///

  if (cyclicDependencyExists) {
    const { log } = context,
          firstDependentName = first(dependentNames),
          dependencyNames = [  ///
            ...dependentNames,
            firstDependentName
          ],
          dependencyNamesString = dependencyNames.join(`' -> '`);

    log.warning(`There is a cyclic dependency, '${dependencyNamesString}'.`);
  }

  return cyclicDependencyExists;
}

function checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context) {
  let releaseMatchesDependency = true;

  const shortenedVersion = dependency.getShortedVersion();

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

function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {  ///
    initialiseReleaseContext(dependency, context);
  });
}
