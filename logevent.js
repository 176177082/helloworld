const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    constructor(opt) {
        super(opt);
    }
}

// 创建事件对象实例。
const myEmitter = new MyEmitter();
console.dir(myEmitter);

// 注册event事件，event是事件名字，最好符合以驼峰命名规范。
myEmitter.on('event', (a,b) => {
    console.log('触发了一个事件！');
    console.log(a);
    console.log(b);
});

// 触发event事件
myEmitter.emit('event',"aaa","bbbb");