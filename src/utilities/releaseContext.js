"use strict";

import { Entries, metaJSONUtilities } from "occam-model";

import ReleaseContext from "../context/release";

import { customGrammarFromNameAndEntries } from "../utilities/customGrammar";

const { isMetaJSONFileValid } = metaJSONUtilities;

export function releaseContextFromJSON(json, context) {
  const { log, callback } = context,
        { name } = json;

  let { entries } = json;

  json = entries; ///

  entries = Entries.fromJSON(json);

  ({context} = json); ///

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

export default {
  releaseContextFromJSON,
  releaseContextFromProject,
  releaseContextFromRelease
};
