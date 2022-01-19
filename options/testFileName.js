const { Option } = require('commander');

module.exports = new Option('--testFileName <string>', 'Unit test file/suite name')
  .env('TEST_FILE_NAME');
