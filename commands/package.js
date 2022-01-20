const rokuDevSigningPasswordOption = require('../options/rokuDevSigningPassword');
const signedPackagePathOption = require('../options/signedPackagePath');
const rokuDevPasswordOption = require('../options/rokuDevPassword');
const rokuDevUserOption = require('../options/rokuDevUser');
const forceHttpOption = require('../options/forceHttp');
const rokuDevIdOption = require('../options/rokuDevId');
const rokuIPOption = require('../options/rokuIP');
const telnetOption = require('../options/telnet');
const envOption = require('../options/env');

function load(program) {
  program
    .command('package')
    .alias('p')
    .description('Compiles and signs an application into an output folder')
    .addOption(envOption)
    .addOption(rokuIPOption)
    .addOption(rokuDevIdOption)
    .addOption(rokuDevUserOption)
    .addOption(rokuDevPasswordOption)
    .addOption(rokuDevSigningPasswordOption)
    .addOption(signedPackagePathOption)
    .addOption(telnetOption)
    .addOption(forceHttpOption)
    .action(() => {
      try {
        require('../actions/package');
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
