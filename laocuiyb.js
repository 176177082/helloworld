const fs = require('fs');
fs.readdir("f:/", function (err, filenames) {
    var i;

    for (i = 0; i < filenames.length; i++) {

        console.log(filenames[i]);
    }
});
console.log('Current uid: ' + process.pid);