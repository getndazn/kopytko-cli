const { Option } = require('commander');

module.exports = new Option('--rokuDevId <string>', 'Roku developer application id')
  .env('ROKU_DEV_ID');
