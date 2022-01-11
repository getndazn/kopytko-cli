const { Option } = require('commander');

module.exports = new Option('-d, --dry-run', 'Reports changes that would be made, but does not change the filesystem.')
  .default(false);
