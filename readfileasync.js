const fs = require('fs');

function readFileAsync (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

async function init () {
    try {
        let data = await readFileAsync('./tt.json');
        data = JSON.parse(data);
        console.log(data.aaa)
    } catch (err) {
        console.log(err)
    }
}

init();