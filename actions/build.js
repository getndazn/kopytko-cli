const path = require('path');
const fs = require('fs');
console.log(process.cwd());
const script = path.join(process.cwd(), 'node_modules', '@dazn', 'kopytko-packager', 'scripts', 'build.js');

if (!fs.existsSync(script)) {
  throw new Error("Cannot find module '@dazn/kopytko-packager', run npm install --save-dev @dazn/kopytko-packager");
}

require(script);
