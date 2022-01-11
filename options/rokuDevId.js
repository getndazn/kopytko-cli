const { Option } = require('commander');

module.exports = new Option('--rokuDevId <string>', 'Roku developer application id.')
  .default('')
  .env('ROKU_DEV_ID');
