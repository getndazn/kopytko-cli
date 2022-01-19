const { Option } = require('commander');

module.exports = new Option('--signedPackagePath <string>', 'Path for signed package')
  .env('SIGNED_PACKAGE_PATH');

