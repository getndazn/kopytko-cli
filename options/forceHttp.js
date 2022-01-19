const { Option } = require('commander');

module.exports = new Option('--forceHttp', 'Disable secured connections')
  .env('FORCE_HTTP');
