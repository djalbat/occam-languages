"use strict";

const { releaseContextUtilities } = require("../../lib/index"), ///
      { fileSystemUtilities: occamFileSystemUtilities } = require("occam-server");

const { loadProject } = occamFileSystemUtilities,
      { releaseContextFromProject } = releaseContextUtilities;

async function releaseContextFromDependency(dependency, context) {
  let releaseContext;

  const { projectsDirectoryPath } = context,
        dependencyName = dependency.getName();

  const projectName = dependencyName, ///
        project = loadProject(projectName, projectsDirectoryPath);

  releaseContext = releaseContextFromProject(project, context);

  return releaseContext;
}

module.exports = {
  releaseContextFromDependency
};
