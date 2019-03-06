let i=0;
var func1 = function(req,res,callback){
    setTimeout(function(){
        console.log('in func1');
        i+=1;
        // console.log(i);
        callback(req,res,1);
    },13);
}
var func2 = function(req,res,callback){

        console.log('in func2');
        i+=1;
        callback(req,res,3);
        // console.log(i);

}

var func3 = function(req,res,callback){
    setTimeout(function(){
        console.log('in func3');
        i+=1;
        console.log(i);
        callback(req,res,3);
    },10);
}


//深层嵌套
var req = null;
var res = null;

// var callback = function(){};
// func1(req,res,callback);
// func2(req,res,callback);
// func3(req,res,callback);

func1(req,res,function(){
    func2(req,res,function(){
        func3(req,res,function(){
            process.exit(0);
        })
    });
});