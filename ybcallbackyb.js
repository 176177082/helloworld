// 函数表达式，匿名函数
var func2=function(){
    setTimeout(function(){console.log('func2')},1000);
    //console.log("333");
    console.log("func2");
}
var func1=function(callback){
    //do something.
    console.log("func1");
    for (var i =0; i<5;i++){
        console.log(i);
    }
    setTimeout(function(){console.log('func1')},1000);
    callback();
}

func1(func2);