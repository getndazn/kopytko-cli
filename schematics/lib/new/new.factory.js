const { apply, mergeWith, move, chain, template, url, branchAndMerge } = require('@angular-devkit/schematics');
const { NodePackageInstallTask } = require('@angular-devkit/schematics/tasks');
const { strings } = require('@angular-devkit/core');
const { basename, parse } = require('path');
const { removePackageJsonDependency } = require('../package-helper');

function resolvePackagePath(path) {
  const { name } = parse(path);
  if (name === '.') {
    return basename(process.cwd());
  }
  return path;
}

function generate(options) {
  return apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
    move(options.path),
  ]);
}

function addOrRemoveDependency(options) {
  return (tree, context) => {
    if (!options.testingFramework) {
      removePackageJsonDependency(tree, {
        type: 'devDependencies',
        name: '@dazn/kopytko-unit-testing-framework',
      }, options);
    }

    if (options.npmInstall) {
      context.addTask(new NodePackageInstallTask());
    }
  };
}

function main(options) {
  options.path = resolvePackagePath(options.name);

  return (tree, context) => branchAndMerge(
    chain([
      mergeWith(generate(options)),
      addOrRemoveDependency(options),
    ]),
  )(tree, context);
}

module.exports = {
  main,
};
