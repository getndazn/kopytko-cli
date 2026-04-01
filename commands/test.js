const rokuDevPasswordOption = require('../options/rokuDevPassword');
const testFileNameOption = require('../options/testFileName');
const testsOption = require('../options/tests');
const forceConnectOption = require('../options/forceConnect');
const forceHttpOption = require('../options/forceHttp');
const rokuIPOption = require('../options/rokuIP');
const telnetOption = require('../options/telnet');

function load(program) {
  program
    .command('test [testFileName]')
    .alias('t')
    .description('Compiles and runs unit tests on a Roku device')
    .addOption(rokuIPOption)
    .addOption(rokuDevPasswordOption)
    .addOption(testFileNameOption)
    .addOption(testsOption)
    .addOption(telnetOption)
    .addOption(forceHttpOption)
    .addOption(forceConnectOption)
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
