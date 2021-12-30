const { Option } = require('commander');

module.exports = new Option('--rokuDevPassword <string>', 'Roku developer password.')
  .default('')
  .env('ROKU_DEV_PASSWORD');
