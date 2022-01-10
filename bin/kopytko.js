#!/usr/bin/env node

const { Command } = require('commander');

const packageCommand = require('../commands/package');
const buildCommand = require('../commands/build');
const startCommand = require('../commands/start');
const testCommand = require('../commands/test');
const newCommand = require('../commands/new');

const program = new Command();

program
  .version(
    require('../package.json').version,
    '-v, --version',
    'Output the current version.',
  )
  .usage('<command> [options]')
  .helpOption('-h, --help', 'Output usage information.');

packageCommand.load(program);
buildCommand.load(program);
startCommand.load(program);
testCommand.load(program);
newCommand.load(program);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
