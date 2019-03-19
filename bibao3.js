function fun(n,o) {
    console.log(n);
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}


var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
console.dir(a);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);