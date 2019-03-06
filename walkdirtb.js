var fs = require("fs")
var path = require("path")

var root = path.join(__dirname)

readDir('f:');
function readDir(path){
    fs.readdir(path,function(err,menu){
        if(!menu)
            return;
        menu.forEach(function(ele){
            fs.stat(path+"/"+ele,function(err,info){
                if(info.isDirectory()){
                    console.log("dir: "+ele)
                    readDir(path+"/"+ele);
                }else{
                    console.log("file: "+ele)
                }
            })
        })
    })
}

