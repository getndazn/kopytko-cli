const { Option } = require('commander');

module.exports = new Option('--forceHttp <true|false>', 'Disable secured connections.')
  .default('false')
  .env('FORCE_HTTP');
