const fs = require('fs');
const path = require('path');

const script = path.join(process.cwd(), 'node_modules', '@dazn', 'kopytko-packager', 'scripts', 'screenshot.js');

if (!fs.existsSync(script)) {
  throw new Error("Cannot find module '@dazn/kopytko-packager', run npm install --save-dev @dazn/kopytko-packager");
}

require(script);
