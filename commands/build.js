const forceHttpOption = require('../options/forceHttp');
const envOption = require('../options/env');

function load(program) {
  program
    .command('build')
    .alias('b')
    .description('Compiles an application into an output folder')
    .addOption(envOption)
    .addOption(forceHttpOption)
    .action(() => {
      try {
        require('../actions/build');
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
