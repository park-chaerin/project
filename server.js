const express = require('express');
const app = express();

const mysql = require('mysql')
const conn = {
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'0000',
    database:'test'
};

app.use(express.static('dist')); 


app.get('/', function(요청,응답){
    응답.sendFile(__dirname+'/dist/index.html' );
});



app.listen(8080);