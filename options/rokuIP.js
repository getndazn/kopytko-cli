const { Option } = require('commander');

module.exports = new Option('--rokuIP <string>', 'Roku IP address.')
  .default('')
  .env('ROKU_IP');
