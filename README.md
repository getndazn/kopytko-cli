# Kopytko CLI

The Kopytko CLI is a command-line interface tool which helps developers to build and maintain applications for Roku devices.

Kopytko CLI is part of Kopytko Roku Ecosystem which consists of:
- [Kopytko Framework](https://github.com/getndazn/kopytko-framework) - declarative framework for Roku SceneGraph,
- [Kopytko Utils](https://github.com/getndazn/kopytko-utils) - a collection of modern utility functions for Brightscript applications,
- [Kopytko Packager](https://github.com/getndazn/kopytko-packager) - a package builder for the Roku platform,
- [Kopytko Unit Testing Framework](https://github.com/getndazn/kopytko-unit-testing-framework) - extended Roku's Unit Testing Framework
- [Kopytko ESLint Plugin](https://github.com/getndazn/kopytko-eslint-plugin) - set of Brightscript rules for ESLint

## Prerequisites
- node version 16+
- npm version 8+

## Quick start
1. Install the Kopytko CLI
```
npm install -g @dazn/kopytko-cli
```
2. Create new project
```
kopytko new my-project
```

2. Run the project
```
cd my-project && npm run start
```

If you want to change predefined configuration please see instructions [here](https://github.com/getndazn/kopytko-packager#configuration).

# Supported commands

You can see available commands and command-specific options by entering the following:
```
kopytko --help
kopytko <command> --help
```

|  Command   | Alias | Description                                              |
|:----------:|:-----:|----------------------------------------------------------|
| screenshot |  	sc  | 	Takes a screenshot of current application               |
|  package   |  	p   | 	Compiles and signs an application into an output folder |
|   build    |  	b   | 	Compiles an application into an output folder           |
|   start    |  	s   | 	Compiles and runs an application on a Roku device       |
|    test    |  	t   | 	Compiles and runs unit tests on a Roku device           |
|    new     |  	n   | 	Creates new kopytko application                         |

## Test command options

| Option | Env var | Description |
|--------|---------|-------------|
| `--testFileName=<name>` | `TEST_FILE_NAME` | Run only tests whose file name matches `<name>` |
| `--tests=<patterns>` | `TESTS` | Semicolon-separated glob patterns of unit names to build and run (e.g. `Home*;Video*;Button`). Filters at build time — only matching test files are compiled and deployed |
| `--forceConnect` | — | Kill any process occupying port 8085 before connecting to read test results |
| `--rokuIP=<ip>` | `ROKU_IP` | IP address of the target Roku device |
| `--rokuDevPassword=<password>` | `ROKU_DEV_PASSWORD` | Developer password for the target Roku device |

```shell
# Run all tests
npm test

# Run tests for a single unit (shorthand)
npm test -- MyService

# Run tests matching glob patterns in a single build+deploy
npm test -- --tests="Home*;Video*;Button"

# Force-take port 8085 if occupied
npm test -- --forceConnect
```
