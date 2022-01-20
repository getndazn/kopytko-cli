const { Option } = require('commander');

module.exports = new Option('--env <string>', 'Environment file name')
  .default('dev')
  .env('ENV');
