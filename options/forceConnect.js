const { Option } = require('commander');

module.exports = new Option('--forceConnect', 'Before deploying, kill any local process connected to port 8085 and proceed regardless of existing debug sessions');
