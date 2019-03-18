function foo(){
    var a = 10;
    return function(){
        a *= 2;
        console.log(a);
        return a;
    };
}
var f = foo();
f(); //return 20.
f(); //return 40.

// 闭包