var callback = function(arg3) {
    console.log('callback Totle is:' + arg3)
    setTimeout(function(){console.log('2')},1000);
}

function fn(arg1, arg2, cb) {
    var Total = arg1 + arg2;
    cb(Total);
    console.log('mainFunction Totle is:' + Total)
}

fn(2, 2, callback)