const path = require('path');
const fs = require('fs');

const script = path.join(process.cwd(), 'node_modules', '@dazn', 'kopytko-packager', 'scripts', 'generate-package.js');

if (!fs.existsSync(script)) {
  throw new Error("Cannot find module '@dazn/kopytko-packager', run npm install --save @dazn/kopytko-packager");
}

require(script);
