var func2=function(){
    console.log("func2");
}
var func1=function(callback){
    //do something.
    console.log("func1");
    callback();
}

func1(func2);

// 以上代码等同于1
/*
var func2=function(){
    console.log("func2");
}
var func1=function(){
    console.log("func1");
}

func1();
func2();
*/

