let promise = new Promise(function (resolve, reject) {
    console.log("promise in ");
    resolve();
});
console.log("Hi!!");

promise.then(function () {
    console.log("resolve");
},function (err) {
    console.error(err.message);
})
