const fs = require('fs');

// 同步读取文件
let buf = fs.readFileSync('./tt.json');
console.log(buf.toString());

// 异步读取文件
fs.readFile('./tt.json', (err, data) => {
    if (err) {
        console.log('读取文件失败');
    } else {
        console.log(data.toString());
    }
});

console.log('kkk');