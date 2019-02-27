// app.js
const koa = require('koa');
const app = new koa();
const koaBody = require('koa-body');

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024	// 设置上传文件大小最大限制，默认2M
    }
}));

app.listen(3001, ()=>{
    console.log('koa is listening in 3001');
});
