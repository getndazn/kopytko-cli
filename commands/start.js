const rokuDevPasswordOption = require('../options/rokuDevPassword');
const rokuDevUserOption = require('../options/rokuDevUser');
const forceHttpOption = require('../options/forceHttp');
const rokuIPOption = require('../options/rokuIP');
const telnetOption = require('../options/telnet');
const envOption = require('../options/env');

function load(program) {
  program
    .command('start')
    .alias('s')
    .description('Compiles and runs an application on a Roku device')
    .addOption(envOption)
    .addOption(rokuIPOption)
    .addOption(rokuDevUserOption)
    .addOption(rokuDevPasswordOption)
    .addOption(forceHttpOption)
    .addOption(telnetOption)
    .action(() => {
      try {
        require('../actions/start');
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
