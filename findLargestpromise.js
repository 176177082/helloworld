var fs = require('fs');
var path = require('path');

var readDir = function(dir) {
    return new Promise(function(resolve, reject) {
        fs.readdir(dir, function(err, files) {
            if (err) reject(err);
            //console.log(files)
            resolve(files)
        })
    })
}

var stat = function(path) {
    return new Promise(function(resolve, reject) {
        fs.stat(path, function(err, stat) {
            if (err) reject(err)
            // console.log(stat)
            resolve(stat)
        })
    })
}

function findLargest(dir) {
    return readDir(dir)
        .then(function(files) {
            // files是数组，map是数组自带的迭代方法
            // 箭头函数就是一函数
            const maps=files.map(file=>file+'2')
            //console.log(maps)
            let promises = files.map(file => stat(path.join(dir, file)))
            //console.log(promises)
            return Promise.all(promises).then(function(stats) {
                return { stats, files }
            })
        })
        .then(data => {
            console.log("ooo")
            console.table(data)
            console.log(data)

            let largest = data.stats
                .filter(function(stat) { return stat.isFile() })
                .reduce((prev, next) => {
                    if (prev.size > next.size) return prev
                    return next
                })

            return data.files[data.stats.indexOf(largest)]
        })

}

findLargest('./')
    .then(function(filename) {
        console.log('largest file was:', filename);
    })
    .catch(function() {
        console.log(error);
    });