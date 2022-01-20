const { Option } = require('commander');

module.exports = new Option('--rokuDevPassword <string>', 'Roku developer password')
  .env('ROKU_DEV_PASSWORD');
