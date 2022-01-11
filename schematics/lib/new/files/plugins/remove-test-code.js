const glob = require('glob-promise');
const fs = require('fs').promises;

const MOCK_DIR_PATH_PATTERN = '/components/**/_mocks';
const TEST_DIR_PATH_PATTERN = '/components/**/_tests';
const TESTING_FRAMEWORK_DIR = '/**/*UnitTestingFramework*';

async function removeDirectories(directories) {
  await Promise.all(
    directories.map((dir) => fs.rm(dir, { recursive: true, force: true })),
  );
}

module.exports = async function removeTestCode(rootDir) {
  const mockDirPaths = await glob(`${rootDir}${MOCK_DIR_PATH_PATTERN}`);
  const testDirPaths = await glob(`${rootDir}${TEST_DIR_PATH_PATTERN}`);
  const testingFrameworkPaths = await glob(`${rootDir}${TESTING_FRAMEWORK_DIR}`);

  await removeDirectories([
    ...mockDirPaths,
    ...testDirPaths,
    ...testingFrameworkPaths,
  ]);
};
