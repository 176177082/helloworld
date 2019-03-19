function createFunctions() {
    var result = new Array();

    for (var i=0;i<10;i++){
        result[i]=function (num) {
            return num;
            }(i);

    }
    return result;
}

var f =createFunctions();
console.log(f[6]);
// createFunctions();