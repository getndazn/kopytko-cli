const { Option } = require('commander');

module.exports = new Option('--rokuDevId <string>', 'Roku developer id.')
  .default('')
  .env('ROKU_DEV_ID');
