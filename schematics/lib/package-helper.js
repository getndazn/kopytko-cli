const JSONFile = require('./json-file');

function resolvePackagePath(options) {
  const { path } = options;
  return (path ? path : '/') + 'package.json';
}

function addPackageJsonDependency(tree, dependency, options) {
  const json = new JSONFile(tree, resolvePackagePath(options));
  const { type, name, version } = dependency;
  const path = [type, name];

  json.modify(path, version);
}

function addPackageJsonScript(tree, script, options) {
  const json = new JSONFile(tree, resolvePackagePath(options));
  const { name, command } = script;
  const path = ['scripts', name];

  json.modify(path, command);
}

function removePackageJsonDependency(tree, dependency, options) {
  const json = new JSONFile(tree, resolvePackagePath(options));
  const { type, name } = dependency;
  const path = [type, name];

  json.remove(path);
}


module.exports = {
  removePackageJsonDependency,
  addPackageJsonDependency,
  addPackageJsonScript
}
