const { Option } = require('commander');

module.exports = new Option('--telnet <true|false>', 'Enables telnet.')
  .default('false')
  .env('TELNET');
