const { apply, mergeWith, move, chain, template, url, branchAndMerge } = require('@angular-devkit/schematics');
const { strings } = require('@angular-devkit/core');
const { basename } = require('path');

function resolvePackageName(name) {
  if (name === '.') {
    return basename(process.cwd());
  }
  return name;
}

function resolvePackagePath(name) {
  if (name === '.') {
    return '';
  }
  return name;
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

function main(options) {
  const name = resolvePackageName(options.name);
  const path = resolvePackagePath(options.name);

  return (tree, context) => branchAndMerge(
    chain([
      mergeWith(generate({
        ...options,
        name,
        path,
      })),
    ]),
  )(tree, context);
}

module.exports = {
  main,
};
