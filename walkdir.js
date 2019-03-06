console.time("我是参数");
var fs = require('fs');
var path = require('path');
var i;
i=0;

//解析需要遍历的文件夹，我这以E盘根目录为例
// var filePath = path.resolve('f:');

//调用文件遍历方法

// fileDisplay(filePath);


// var callback = function(arg3) {
//     console.log('callback Totle is:' + arg3)
// }

// function fn(arg1, arg2, cb) {
//     var Total = arg1 + arg2;
//     cb(filePath);
//     console.log(i)
// }
//
// fn(2, 2, fileDisplay)
var func1 = function(req,res,callback){
    setTimeout(function(){
        console.log('in func1');
        // i+=1;
        console.log(i);
        callback(req,res,1);
    },10);
}
var func2 = function(req,res,callback){
    var filePath = path.resolve('f:');
    console.log("ppp");
    myfile(filePath);
    callback(req,res,1);
}

var myfile=    function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    //console.log("ppp");
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror,stats){
                    if(eror){
                        console.log(eror);
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            // var obj = {};
                            // obj.path = filedir;//路径

                            i += 1;
                            console.log(i);
                            // filesList.push(obj);
                            // count();
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}


//深层嵌套
var req = null;
var res = null;

func2(req,res,function(){
        func1(req,res,function(){
            process.exit(0);
        })

});

// ;(async () => {
//     await fileDisplay(filePath);
//     console.log(`总代码行数：${i}`)
// })()

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */


// function fileDisplay(filePath){
//     //根据文件路径读取文件，返回文件列表
//     fs.readdir(filePath,function(err,files){
//         if(err){
//             console.warn(err)
//         }else{
//             //遍历读取到的文件列表
//             files.forEach(function(filename){
//                 //获取当前文件的绝对路径
//                 var filedir = path.join(filePath,filename);
//                 //根据文件路径获取文件信息，返回一个fs.Stats对象
//                 fs.stat(filedir,function(eror,stats){
//                     if(eror){
//                         console.log(eror);
//                         console.warn('获取文件stats失败');
//                     }else{
//                         var isFile = stats.isFile();//是文件
//                         var isDir = stats.isDirectory();//是文件夹
//                         if(isFile){
//                             // var obj = {};
//                             // obj.path = filedir;//路径
//                             //console.log(i);
//                             i += 1;
//                             // filesList.push(obj);
//                             // count();
//                         }
//                         if(isDir){
//                             fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
//                         }
//                     }
//                 })
//             });
//         }
//     });
// }
// console.log(i);
// console.timeEnd("我是参数");