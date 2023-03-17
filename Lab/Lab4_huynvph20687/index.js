const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

// Đặt view engine là Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Đặt đường dẫn tới thư mục chứa các file view
app.set('views', path.join(__dirname, 'views'));

// Tạo một route đến trang home
app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
