const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();
myEmitter.on('event', function() {
    console.log('listener1');

});
setTimeout(() => {
    console.log("ppp");
}, 1000);
myEmitter.on('event', async function() {
    console.log('listener2');
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ppp");
            resolve(1);
        }, 1000);
    });
});
myEmitter.on('event', function() {
    console.log('listener3');
});
myEmitter.emit('event');
console.log('end');
