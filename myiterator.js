function makeIterator(array){
    var nextIndex = 0;
    console.log("00");
    return {
        next: function(){
            console.log("001");
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().done);  // true
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().value);
console.log(it.next().done);  // true