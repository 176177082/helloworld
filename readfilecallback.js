// callback.js
const fs = require('fs');

fs.readFile('./tt.json',  'utf8',(err, data) => {
    if (err) return console.log(err);
    console.log(data);
    data = JSON.parse(data);
    console.log(data.aaa);
});
