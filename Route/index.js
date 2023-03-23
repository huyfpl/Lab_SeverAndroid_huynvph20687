var express = require('express');
var app = express();
 
app.get('/hello', function(req, res){
   res.send("Hello World!");
});
 
app.post('/hello', function(req, res){
    res.send("Ban vua gui yeu cua bang phuong thuc POST toi dia chi /hello");
});
 
var userRouters = require('./userRouters');
// Lưu ý: userRouters và index.js phải ở cùng 1 thư mục
app.use('/user', userRouters);
 
app.listen(3000);