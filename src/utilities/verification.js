"use strict";

import { DirectedGraph } from "occam-directed-graphs";
import { arrayUtilities } from "necessary";

import {  SINGLE_SPACE} from "../constants";
import { asyncEveryDependency } from "../utilities/dependency";

const { first, last } = arrayUtilities;

export async function createReleaseContexts(dependency, context) {
  let releaseContextsCreated = false;

  const dependentNames = [],
        releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);

  if (releaseContextCreated) {
    releaseContextsCreated = true;
  }

  return releaseContextsCreated;
}

export function initialiseReleaseContexts(dependency, context) {
  let releaseContextsInitialised = false;

  const directedGraph = DirectedGraph.fromNothing(),
        visitedDependencyNames = [];

  addDependencyRelations(dependency, directedGraph, visitedDependencyNames, context);

  const cyclicDependenciesPresent = checkCyclicDependenciesPresent(directedGraph, context);

  if (!cyclicDependenciesPresent) {
    const { releaseContextMap } = context,
          releaseNames = Object.keys(releaseContextMap),
          orderedVertexNames = directedGraph.getOrderedVertexNames(),
          orderedDependencyNames = orderedVertexNames.reverse();  ///

    releaseNames.forEach((releaseName) => {
      const releaseContext = releaseContextMap[releaseName];

      initialiseReleaseContext(releaseContext, orderedDependencyNames, context);
    });

    releaseContextsInitialised = true;
  }

  return releaseContextsInitialised;
}

export async function verifyReleaseContexts(dependency, context) {
  let releaseContextsVerify = false;

  const dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        dependentName = null,
        dependentReleased = false,
        releaseContextVerifies = await verifyReleaseContext(releaseName, dependentName, dependentReleased, context);

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

function addDependencyRelations(dependency, directedGraph, visitedDependencyNames, context) {
  const dependencyName = dependency.getName(),
        visitedDependencyNameIncludesDependencyName = visitedDependencyNames.includes(dependencyName);

  if (visitedDependencyNameIncludesDependencyName) {
    return;
  }

  const visiteddependencyName = dependencyName; ///

  visitedDependencyNames.push(visiteddependencyName);

  const { log, releaseContextMap } = context,
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    const dependencyString = dependency.getString();

    log.warning(`No package context has been created for the '${dependencyString}' dependency. `);

    return;
  }

  const dependencies = releaseContext.getDependencies(),
        targetVertexName = dependencyName;  ///

  dependencies.forEachDependency((dependency) => {
    const dependencyName = dependency.getName(),
          sourceVertexName = dependencyName;  ///

    directedGraph.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

    addDependencyRelations(dependency, directedGraph, visitedDependencyNames, context);
  });
}

function initialiseReleaseContext(releaseContext, orderedDependencyNames, context) {
  const { log, releaseContextMap, FileContextFromFilePath } = context,
        releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap),
        releaseContextName = releaseContext.getName();

  releaseContexts.sort((releaseContextA, releaseContextB) => {
    const releaseContextAName = releaseContextA.getName(),
          releaseContextBName = releaseContextB.getName(),
          dependencyNameA = releaseContextAName,  ///
          dependencyNameB = releaseContextBName,  ///
          indexA = orderedDependencyNames.indexOf(dependencyNameA),
          indexB = orderedDependencyNames.indexOf(dependencyNameB);

    return (indexA - indexB);
  });

  log.info(`Initialising the '${releaseContextName}' package context...`);

  releaseContext.initialise(releaseContexts, FileContextFromFilePath);

  log.debug(`...initialised the '${releaseContextName}' package context.`);
}

async function createReleaseContext(dependency, dependentNames, context) {
  let releaseContextCreated = false;

  const { log, releaseContextMap, releaseContextFromDependency } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    if (releaseMatchesDependency) {
      log.debug(`The '${releaseName}' package context has already been created.`);

      releaseContextCreated = true;
    }
  } else {
    const dependencyString = dependency.asString(),
          dependentNamesLength = dependentNames.length;

    if (dependentNamesLength === 0) {
      log.info(`Creating the '${releaseName}' package context...`);
    } else {
      const lastDependentName = last(dependentNames),
            dependentName = lastDependentName;  ///

      log.info(`Creating the '${releaseName}' package context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
    }

    const releaseContext = await releaseContextFromDependency(dependency, context);

    if (releaseContext !== null) {
      const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

      if (releaseMatchesDependency) {
        releaseContextMap[releaseName] = releaseContext;

        const dependencyReleaseContextsCreated = await createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context);

        if (dependencyReleaseContextsCreated) {
          releaseContextCreated = true;
        }
      }
    } else {
      const dependencyName = dependency.getName(),
            releaseName = dependencyName; ///

      log.warning(`The '${releaseName}' package context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch.`);
    }

    releaseContextCreated ?
      log.debug(`...created the '${releaseName}' package context.`) :
        log.warning(`...unable to create the '${releaseName}' package context.`);
  }

  return releaseContextCreated;
}

async function verifyReleaseContext(releaseName, dependentName, dependentReleased, releaseContextMap) {
  let releaseContextVerifies = false;

  const releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const released = releaseContext.isReleased();

    if (released) {
      releaseContextVerifies = true;
    } else {
      if (dependentReleased) {
        releaseContext.warning(`The '${releaseName}' project cannot be verified because its '${dependentName}' dependent is a package.`);
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

async function createDependencyReleaseContexts(releaseContext, dependency, dependentNames, context) {
  let dependencyReleaseContextsCreated;

  const name = releaseContext.getName(),
        dependencies = releaseContext.getDependencies(),
        dependencyName = name;  ///

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  dependencyReleaseContextsCreated = await asyncEveryDependency(dependencies, async (dependency) => {
    const releaseContextCreated = await createReleaseContext(dependency, dependentNames, context);

    if (releaseContextCreated) {
      return true;
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

function retrieveReleaseContexts(releaseContext, releaseContextMap, releaseContexts = []) {
  const releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext);

  if (releaseContextsIncludesReleaseContext) {
    return;
  }

  releaseContexts.push(releaseContext);

  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {
    const dependencyName = dependency.getName(),
          releaseName = dependencyName, ///
          releaseContext = releaseContextMap[releaseName];

    retrieveReleaseContexts(releaseContext, releaseContextMap, releaseContexts);
  });

  return releaseContexts;
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

function checkCyclicDependenciesPresent(directedGraph, context) {
  let cyclicDependenciesPresent = false;

  const firstCycle = directedGraph.getFirstCycle();

  if (firstCycle !== null) {
    const { log } = context,
          vertexNames = firstCycle.getVertexNames(),
          dependencyNames = vertexNames,  ///
          firstDependencyName = first(dependencyNames),
          cyclicDependencyNames = [
            ...dependencyNames,
            firstDependencyName
          ],
          cycleString = cyclicDependencyNames.join(SINGLE_SPACE);

    log.warning(`There is at least one '${cycleString}'. cyclic dependency`);

    cyclicDependenciesPresent = true;
  }

  return cyclicDependenciesPresent;
}
