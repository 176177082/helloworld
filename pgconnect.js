var pg = require('pg');
//数据库配置
var conString = "tcp://postgres:postgres123@localhost/nodejspg"; //tcp://用户名：密码@localhost/数据库名
var client =  new pg.Client(conString);

var tem = 33;
//sql语句
selectSQLString = 'select * from student2 ';
//客户端连接，进行数据插入,回调函数写法
client.connect(function(error, results){
    if (error) {
        console.log('clientConnectionReady Error:'+error.message);
        client.end();
        return;
    }
    console.log('connection success...\n');
    // client.query(selectSQLString,function(error,results){
    //     console.log(error);
    //     console.log(results);
    // })
    // promise写法
    client.query(selectSQLString)
        .then(res => console.log(res.rows[0].name))
        .catch(e => console.error(e.stack))
});

