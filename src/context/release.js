"use strict";

import { arrayUtilities } from "necessary";

import { verifyTypePrefixes, verifyFileContexts } from "../utilities/verify";
import { fileContextsFromJSON, fileContextsFromEntries } from "../utilities/fileContext";
import { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, BREAK_MESSAGE} from "../constants";

const { push, tail, first } = arrayUtilities;

export default class ReleaseContext {
  constructor(log, name, json, entries, callback, customGrammar, verifies, initialised, fileContexts, combinedCustomGrammar, dependencyReleaseContexts) {
    this.log = log;
    this.name = name;
    this.json = json;
    this.entries = entries;
    this.callback = callback;
    this.customGrammar = customGrammar;
    this.verifies = verifies;
    this.initialised = initialised;
    this.fileContexts = fileContexts;
    this.combinedCustomGrammar = combinedCustomGrammar;
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  getLog() {
    return this.log;
  }

  getName() {
    return this.name;
  }

  getJSON() {
    return this.json;
  }

  getEntries() {
    return this.entries;
  }

  getCallback() {
    return this.callback;
  }

  getCustomGrammar() {
    return this.customGrammar;
  }

  getVerifies() {
    return this.verifies;
  }

  isInitialised() {
    return this.initialised;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getCombinedCustomGrammar() {
    return this.combinedCustomGrammar;
  }

  getDependencyReleaseContexts() {
    return this.dependencyReleaseContexts;
  }

  getReleaseContext() {
    const releaseContext = this;  ///

    return releaseContext;
  }

  isReleased() {
    const released = (this.json !== null);

    return released;
  }

  getTypePrefix() {
    let typePrefix = null;

    const includeDependencies = false,
          typePrefixes = this.getTypePrefixes(includeDependencies),
          typePrefixesLength = typePrefixes.length;

    if (typePrefixesLength === 1) {
      const firstTypePrefix = first(typePrefixes);

      typePrefix = firstTypePrefix; ///
    }

    return typePrefix;
  }

  getLabels(includeDependencies = true) {
    const labels = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextLabels = fileContext.getLabels(includeRelease);

      push(labels, fileContextLabels);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextLabels = releaseContext.getLabels(includeDependencies);

        push(labels, releaseContextLabels);
      });
    }

    return labels;
  }

  getTypes(includeDependencies = true) {
    const types = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextTypes = fileContext.getTypes(includeRelease);

      push(types, fileContextTypes);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTypes = releaseContext.getTypes(includeDependencies);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getRules(includeDependencies = true) {
    const rules = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextRules = fileContext.getRules(includeRelease);

      push(rules, fileContextRules);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextRules = releaseContext.getRules(includeDependencies);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getAxioms(includeDependencies = true) {
    const axioms = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextAxioms = fileContext.getAxioms(includeRelease);

      push(axioms, fileContextAxioms);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextAxioms = releaseContext.getAxioms(includeDependencies);

        push(axioms, releaseContextAxioms);
      });
    }

    return axioms;
  }

  getLemmas(includeDependencies = true) {
    const lemmas = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextLemmas = fileContext.getLemmas(includeRelease);

      push(lemmas, fileContextLemmas);
    });

    return lemmas;
  }

  getTheorems(includeDependencies = true) {
    const theorems = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextTheorems = fileContext.getTheorems(includeRelease);

      push(theorems, fileContextTheorems);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTheorems = releaseContext.getTheorems(includeDependencies);

        push(theorems, releaseContextTheorems);
      });
    }

    return theorems;
  }

  getProcedures(includeDependencies = true) {
    const procedures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextProcedures = fileContext.getProcedures(includeRelease);

      push(procedures, fileContextProcedures);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextProcedures = releaseContext.getProcedures(includeDependencies);

        push(procedures, releaseContextProcedures);
      });
    }

    return procedures;
  }

  getMetaLemmas(includeDependencies = true) {
    const metaLemmas = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextMetaLemmas = fileContext.getMetaLemmas(includeRelease);

      push(metaLemmas, fileContextMetaLemmas);
    });

    return metaLemmas;
  }

  getConjectures(includeDependencies = true) {
    const conjectures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextConjectures = fileContext.getConjectures(includeRelease);

      push(conjectures, fileContextConjectures);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextConjectures = releaseContext.getConjectures(includeDependencies);

        push(conjectures, releaseContextConjectures);
      });
    }

    return conjectures;
  }

  getCombinators(includeDependencies = true) {
    const combinators = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextCombinators = fileContext.getCombinators(includeRelease);

      push(combinators, fileContextCombinators);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextCombinators = releaseContext.getCombinators(includeDependencies);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getTypePrefixes(includeDependencies = true) {
    const typePrefixes = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextTypePrefixes = fileContext.getTypePrefixes(includeRelease);

      push(typePrefixes, fileContextTypePrefixes);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTypePrefixes = releaseContext.getTypePrefixes(includeDependencies);

        push(typePrefixes, releaseContextTypePrefixes);
      });
    }

    return typePrefixes;
  }

  getConstructors(includeDependencies = true) {
    const constructors = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextConstructors = fileContext.getConstructors(includeRelease);

      push(constructors, fileContextConstructors);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextConstructors = releaseContext.getConstructors(includeDependencies);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  getMetatheorems(includeDependencies = true) {
    const metatheorems = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextMetatheorems = fileContext.getMetatheorems(includeRelease);

      push(metatheorems, fileContextMetatheorems);
    });

    if (includeDependencies) {
      this.dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextMetatheorems = releaseContext.getMetatheorems(includeDependencies);

        push(metatheorems, releaseContextMetatheorems);
      });
    }

    return metatheorems;
  }

  matchShortenedVersion(shortenedVersion) { return this.entries.matchShortenedVersion(shortenedVersion); }

  findFile(filePath) { return this.entries.findFile(filePath); }

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

  initialise(releaseContexts, fileContextFromJSON) {
    const released = this.isReleased(),
          releaseContext = this;  ///

    released ?
      fileContextsFromJSON(this.json, this.fileContexts, releaseContext, fileContextFromJSON) :
        fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);

    this.dependencyReleaseContexts = tail(releaseContexts); ///

    this.initialised = true;
  }

  async break(filePath, lineIndex) {
    const level = TRACE_LEVEL,
          message = BREAK_MESSAGE;

    this.writeToLog(level, message, filePath, lineIndex);

    const context = this; ///

    await this.callback(context, filePath, lineIndex);
  }

  async verify() {
    let verifies = false;

    const typePrefixes = this.getTypePrefixes(),
          releaseContext = this, ///
          typePrefixesVerify = verifyTypePrefixes(typePrefixes, releaseContext);

    if (typePrefixesVerify) {
      const verifiedFileContexts = [],
            fileContextsVerify = await verifyFileContexts(this.fileContexts, verifiedFileContexts);

      if (fileContextsVerify) {
        this.fileContexts = verifiedFileContexts; ///

        this.verifies = true;

        verifies = true;
      }
    }

    return verifies;
  }

  toJSON() {
    const fileContextsJSON = this.fileContexts.map((fileContext) => {
            const fileContextJSON = fileContext.toJSON();

            return fileContextJSON;
          }),
          json = fileContextsJSON;  ///

    return json;
  }

  static fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar) {
    const verifies = false,
          initialised = false,
          fileContexts = [],
          combinedCustomGrammar = null,
          dependencyReleaseContexts = null,
          releaseContext = new ReleaseContext(log, name, json, entries, callback, customGrammar, verifies, initialised, fileContexts, combinedCustomGrammar, dependencyReleaseContexts);

    return releaseContext;
  }
}
