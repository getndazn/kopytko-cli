const { Option } = require('commander');

module.exports = new Option('--rokuIP <string>', 'Roku IP address')
  .env('ROKU_IP');
