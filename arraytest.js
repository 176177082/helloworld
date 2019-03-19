var number=[1,2,3,4,5,4,3,111];

let num=number.filter(function(stat) { return stat>3 }).reduce((prev, next) => {return prev+next})
console.log(num)

let num1=number.reduce((prev, next,currentIndex) => {
    console.log(currentIndex)
    return next})
console.log(num1)
