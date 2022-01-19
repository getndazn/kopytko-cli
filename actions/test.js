process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.ENV = 'test';

const path = require('path');
const fs = require('fs');

const script = path.join(process.cwd(), 'node_modules', '@dazn', 'kopytko-unit-testing-framework', 'scripts', 'test.js');

if (!fs.existsSync(script)) {
  throw new Error("Cannot find module '@dazn/kopytko-unit-testing-framework', run npm install --save-dev @dazn/kopytko-unit-testing-framework");
}

require(script);
