const { Option } = require('commander');

module.exports = new Option('--telnet', 'Enables telnet')
  .env('TELNET');
