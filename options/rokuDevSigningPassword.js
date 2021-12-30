const { Option } = require('commander');

module.exports = new Option('--rokuDevSigningPassword <string>', 'Roku developer signing password.')
  .default('')
  .env('ROKU_DEV_SIGNING_PASSWORD');
