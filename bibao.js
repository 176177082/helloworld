var counter = (!function(){
    var num = 0;
    console.log(num);
    return function(){ return  ++num; }
}())

function counter(){
    var num = 0;
    console.log(n);
    return {
        reset:function(){
            num = 0;
        },
        count:function(){
            return num++;
        }
    }
}

function counter_get (n){
    console.log("oo");
    return {
        get counte(){
            return ++n;
        },
        set counte(m){
            if(m<n){ throw Error("error: param less than value"); }
            else {
                n = m; return n;
            }
        }
    }
}

