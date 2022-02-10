const rokuDevPasswordOption = require('../options/rokuDevPassword');
const rokuDevUserOption = require('../options/rokuDevUser');
const rokuIPOption = require('../options/rokuIP');

function load(program) {
  program
    .command('screenshot')
    .alias('sc')
    .description('Takes a screenshot of the dev application')
    .addOption(rokuIPOption)
    .addOption(rokuDevUserOption)
    .addOption(rokuDevPasswordOption)
    .action(() => {
      try {
        require('../actions/screenshot');
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
