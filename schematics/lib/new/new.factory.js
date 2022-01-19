const { apply, mergeWith, move, chain, template, url, branchAndMerge } = require('@angular-devkit/schematics');
const { NodePackageInstallTask } = require('@angular-devkit/schematics/tasks');
const { strings } = require('@angular-devkit/core');
const { basename, parse } = require('path');

function resolvePackageName(path) {
  const { name } = parse(path);
  if (name === '.') {
    return basename(process.cwd());
  }
  return name;
}

function generate(options, path) {
  return apply(url('./files'), [
    template({
      ...strings,
      ...options,
    }),
    move(path),
  ]);
}

function installTask(options, path) {
  return (_, context) => {
    if (!options.skipInstall) {
      context.addTask(new NodePackageInstallTask(path));
    }
  }
}

function main(options) {
  const path = strings.dasherize(options.name);

  options.name = strings.dasherize(resolvePackageName(path));

  return (tree, context) => branchAndMerge(
    chain([
      mergeWith(generate(options, path)),
      installTask(options, path),
    ]),
  )(tree, context);
}

module.exports = {
  main,
};
