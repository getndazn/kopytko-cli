const { apply, mergeWith, chain, template, url, branchAndMerge } = require('@angular-devkit/schematics');
const { NodePackageInstallTask } = require('@angular-devkit/schematics/tasks');
const { strings } = require('@angular-devkit/core');
const { addPackageJsonScript, addPackageJsonDependency } = require('../package-helper');

function generatePackage(tree) {
  if (!tree.exists("/package.json")) {
    tree.create("/package.json", JSON.stringify({ version: "1.0.0" }, null, 2));
  }
  return tree;
}

function generateFiles(options) {
  return apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
  ]);
}

function addOrRemoveDependency(options) {
  return (tree, context) => {
    addPackageJsonScript(tree, {
      name: 'package',
      command: 'kopytko package',
    }, options);

    addPackageJsonScript(tree, {
      name: 'build',
      command: 'kopytko build',
    }, options);

    addPackageJsonScript(tree, {
      name: 'start',
      command: 'kopytko start',
    }, options);

    addPackageJsonScript(tree, {
      name: 'test',
      command: 'kopytko test',
    }, options);

    addPackageJsonDependency(tree, {
      type: 'devDependencies',
      name: '@dazn/kopytko-cli',
      version: '^1.0.0',
    }, options);

    addPackageJsonDependency(tree, {
      type: 'devDependencies',
      name: '@dazn/kopytko-packager',
      version: '^1.0.0',
    }, options);

    if (options.testingFramework) {
      addPackageJsonDependency(tree, {
        type: 'devDependencies',
        name: '@dazn/kopytko-unit-testing-framework',
        version: '^1.0.0',
      }, options);
    }

    if (options.npmInstall) {
      context.addTask(new NodePackageInstallTask());
    }
  };
}

function main(options) {
  return (tree) => {
    generatePackage(tree);

    return branchAndMerge(
      chain([
        mergeWith(generateFiles(options)),
        addOrRemoveDependency(options),
      ]));
  }
}

module.exports = {
  main,
};
