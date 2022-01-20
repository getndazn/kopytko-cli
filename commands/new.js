const colors = require('ansi-colors');
const schematicAction = require('../actions/schematic');
const skipInstallOption = require('../options/skipInstall');
const dryRunOption = require('../options/dryRun');

function load(program) {
  program
    .command('new <name>')
    .alias('n')
    .description('Creates new kopytko application')
    .addOption(skipInstallOption)
    .addOption(dryRunOption)
    .action(async (name, options) => {
      try {
        await schematicAction.execute({
          schematic: 'new',
          ...options,
          name,
        });

        console.info();
        console.info('Your project is ready!');
        console.info();
        console.info(colors.gray(`cd ${name}`));
        console.info(colors.gray('npm start'));
        console.info();

      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    });
}

module.exports = {
  load,
};
