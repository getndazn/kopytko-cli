const schematicAction = require('../actions/schematic');
const dryRunOption = require('../options/dryRun');

function load(program) {
  program
    .command('init')
    .alias('i')
    .description('Initialize new kopytko application.')
    .addOption(dryRunOption)
    .action((options) => {
      try {
        schematicAction.execute({
          schematic: 'init',
          ...options,
        });
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
