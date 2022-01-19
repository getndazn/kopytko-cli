const { Option } = require('commander');

module.exports = new Option('--rokuDevUser <string>', 'Roku developer username')
  .default('rokudev')
  .env('ROKU_DEV_USER');
