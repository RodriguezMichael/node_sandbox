var fs = require('fs');

fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));