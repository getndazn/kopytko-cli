const { Option } = require('commander');

module.exports = new Option('--tests <string>', 'Semicolon-separated glob patterns of unit test names to run (e.g. Rail*;Video*;Tile*)')
  .env('TESTS');
