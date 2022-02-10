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
