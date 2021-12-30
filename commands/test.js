const rokuDevPasswordOption = require('../options/rokuDevPassword');
const rokuDevUserOption = require('../options/rokuDevUser');
const forceHttpOption = require('../options/forceHttp');
const rokuIPOption = require('../options/rokuIP');
const telnetOption = require('../options/telnet');
const envOption = require('../options/env');

function load(program) {
  program
    .command('test')
    .alias('t')
    .description('Compiles and runs unit tests on a Roku device.')
    .addOption(envOption)
    .addOption(rokuIPOption)
    .addOption(rokuDevUserOption)
    .addOption(rokuDevPasswordOption)
    .addOption(telnetOption)
    .addOption(forceHttpOption)
    .action(() => {
      try {
        require('../actions/test');
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
