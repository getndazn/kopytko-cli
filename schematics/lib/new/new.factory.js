const { apply, mergeWith, move, chain, template, url, branchAndMerge } = require('@angular-devkit/schematics');
const { strings } = require('@angular-devkit/core');
const { basename, parse } = require('path');

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

function main(options) {
  options.path = resolvePackagePath(options.name);

  return (tree, context) => branchAndMerge(
    chain([
      mergeWith(generate(options)),
    ]),
  )(tree, context);
}

module.exports = {
  main,
};
