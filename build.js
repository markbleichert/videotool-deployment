const fs = require('fs-extra');

fs.emptyDirSync('.tmp');
fs.copySync('src', '.tmp/dist');