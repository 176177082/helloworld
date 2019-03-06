let i=0;
var func1 = function(req,res,callback){
    i+=1;
    callback(req,res,3);
    console.log('in func1');
    console.log(i);
}
var func2 = function(req,res,callback){
    i+=1;
    callback(req,res,3);
    console.log('in func2');
    console.log(i);
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
        })
});