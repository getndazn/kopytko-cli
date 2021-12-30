const schematicAction = require('../actions/schematic');
const dryRunOption = require('../options/dryRun');

function load(program) {
  program
    .command('new <name>')
    .alias('n')
    .description('Creates new kopytko application.')
    .addOption(dryRunOption)
    .action((name, options) => {
      try {
        schematicAction.execute({
          schematic: 'new',
          name,
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
