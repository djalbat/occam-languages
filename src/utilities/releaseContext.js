"use strict";

import { Entries, metaJSONUtilities } from "occam-model";
import { fileSystemUtilities as occamFileSystemUtilities } from "occam-server";
import { pathUtilities, fileSystemUtilities as necessaryFileSystemUtilities } from "necessary";

import ReleaseContext from "../context/release";

import { customGrammarFromNameAndEntries } from "../utilities/customGrammar";

const { loadProject } = occamFileSystemUtilities,
      { concatenatePaths } = pathUtilities,
      { isMetaJSONFileValid } = metaJSONUtilities,
      { readFile, isEntryFile, checkEntryExists } = necessaryFileSystemUtilities;

export function releaseContextFromJSON(json, context) {
  const { log, callback } = context,
        { name } = json;

  let { entries } = json;

  ({context} = json); ///

  json = entries; ///

  entries = Entries.fromJSON(json);

  const contextJSON = context;  ///

  json = contextJSON; ///

  const customGrammar = customGrammarFromNameAndEntries(name, entries),
        releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);

  return releaseContext;
}

export function releaseContextFromProject(project, context) {
  let releaseContext = null;

  if (project !== null) {
    const metaJSONFile = project.getMetaJSONFile();

    if (metaJSONFile !== null) {
      const metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);

      if (metaJSONFileValid) {
        const { log, callback } = context,
              name = project.getName(),
              json = null,
              entries = project.getEntries(),
              customGrammar = customGrammarFromNameAndEntries(name, entries);

        releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
      }
    }
  }

  return releaseContext;
}

export function releaseContextFromRelease(release, context) {
  let releaseContext = null;

  if (release !== null) {
    const { log, callback } = context,
          name = release.getName(),
          json = null,
          entries = release.getEntries(),
          customGrammar = customGrammarFromNameAndEntries(name, entries);

    releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
  }

  return releaseContext;
}

export async function releaseContextFromDependency(dependency, context) {
  let releaseContext = null;

  const { projectsDirectoryPath } = context,
        dependencyName = dependency.getName(),
        entryPath = concatenatePaths(projectsDirectoryPath, dependencyName),
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    const entryFile = isEntryFile(entryPath);

    if (entryFile) {
      const filePath = entryPath, ///
            content = readFile(filePath),
            jsonString = content, ///
            json = JSON.parse(jsonString);

      releaseContext = releaseContextFromJSON(json, context);
    } else {
      const projectName = dependencyName, ///
            project = loadProject(projectName, projectsDirectoryPath);

      releaseContext = releaseContextFromProject(project, context);
    }
  }

  return releaseContext;
}

export default {
  releaseContextFromJSON,
  releaseContextFromProject,
  releaseContextFromRelease,
  releaseContextFromDependency
};
