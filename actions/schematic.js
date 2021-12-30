const tools = require('@angular-devkit/schematics/tools');
const node = require('@angular-devkit/core/node');
const ansiColors = require('ansi-colors');
const inquirer = require('inquirer');
const path = require('path');

const colors = ansiColors.create();
const logger = node.createConsoleLogger();

function createPromptProvider() {
  return (definitions) => {
    const questions = definitions.map((definition) => {
      const question = {
        name: definition.id,
        message: definition.message,
        default: definition.default,
      };
      const { validator } = definition;
      if (validator) {
        question.validate = (input) => validator(input);
      }
      switch (definition.type) {
        case 'confirmation':
          return { ...question, type: 'confirm' };
        case 'list':
          return {
            ...question,
            type: definition.multiselect ? 'checkbox' : 'list',
            choices: definition.items
              && definition.items.map((item) => {
                if (typeof item === 'string') {
                  return item;
                }

                return {
                  name: item.label,
                  value: item.value,
                };
              }),
          };
        default:
          return { ...question, type: definition.type };
      }
    });
    return inquirer.prompt(questions);
  };
}

async function execute(options) {
  const collection = path.resolve(__dirname, '..');
  let nothingDone = true;
  let loggingQueue = [];
  let error = false;

  const { schematic, force, dryRun } = options;
  const workflow = new tools.NodeWorkflow(process.cwd(), {
    force,
    dryRun,
    resolvePaths: [process.cwd(), __dirname],
    schemaValidation: true,
  });

  workflow.reporter.subscribe((event) => {
    const desc = event.description === 'alreadyExist' ? 'already exists' : 'does not exist';
    const eventPath = event.path?.startsWith('/') ? event.path.substring(1) : event.path;
    const eventToPath = event.to?.startsWith('/') ? event.to.substring(1) : event.to;
    nothingDone = false;

    switch (event.kind) {
      case 'error':
        error = true;
        logger.error(`ERROR! ${eventPath} ${desc}.`);
        break;
      case 'update':
        loggingQueue.push(`${colors.cyan('UPDATE')} ${eventPath} (${event.content.length} bytes)`);
        break;
      case 'create':
        loggingQueue.push(`${colors.green('CREATE')} ${eventPath} (${event.content.length} bytes)`);
        break;
      case 'delete':
        loggingQueue.push(`${colors.yellow('DELETE')} ${eventPath}`);
        break;
      case 'rename':
        loggingQueue.push(`${colors.blue('RENAME')} ${eventPath} => ${eventToPath}`);
        break;
      default:
        loggingQueue.push(eventPath);
    }
  });

  workflow.lifeCycle.subscribe((event) => {
    if (['workflow-end', 'post-tasks-start'].includes(event.kind)) {
      if (!error) {
        loggingQueue.forEach((log) => logger.info(log));
      }
      loggingQueue = [];
      error = false;
    }
  });

  workflow.registry.useXDeprecatedProvider((msg) => logger.warn(msg));
  workflow.registry.usePromptProvider(createPromptProvider());

  await workflow
    .execute({
      collection,
      schematic,
      options,
      allowPrivate: true,
      debug: false,
      logger,
    }).toPromise();

  if (nothingDone) {
    logger.info('Nothing to be done.');
  } else if (dryRun) {
    logger.info('Dry run enabled. No files written to disk.');
  }
}

module.exports = {
  execute,
};
