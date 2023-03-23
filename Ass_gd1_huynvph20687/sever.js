const express = require('express');
const path = require('path');
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars').create();
const session = require('express-session');
const multer = require('multer');
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: false
}));
app.set('view engine', '.hbs');
app.set('views', './views');
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('.hbs', expressHbs.engine);
// app.get('/', (req, res) => {
//     res.render('home', { title: 'Home Page' });
//   });

app.get('/', (req, res) => {
  res.render('register', {
    layout: 'register',
    showBody: true,
  })

});
// up avata
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const str = file.originalname;
        const parts = str.split(".");
        let doandau = parts[0];
        let doansau = parts[1];

        cb(null, doandau + '-' + Date.now() + '.' + doansau)
    }
})

var upload = multer({ storage: storage })

app.post('/register', upload.single('myFile'), (req, res) => {
  const { name, email, password, repassword } = req.body;
  const file = req.file;
  if (name === '' || password === '' || repassword === '' || email === '') {
    res.send('<script>alert("Vui lòng nhập đầy đủ thông tin đăng ký!"); window.location.href="/";</script>');
    res.render('register', { showSuccess: false });
  } else {
    req.session.email = email;
    req.session.password = password;
    req.session.name = name;
    req.session.filename = file.filename;
    res.redirect('/login');

  }
});

app.get('/login', (req, res) => {
  const email = req.session.email||'';
  const password = req.session.password||'';
  const name = req.session.name||'';
  
  if (name && email && password) {
    res.render('login', {
      layout: 'login',
      title: 'Đăng ký thành công',
      showSuccess: true,
      email: email, // truyền email và password vào đối tượng context
      password: password
      , name: name
    });
  } else if( email==='' ){
    res.render('login', {
      layout: 'login',
      title: 'Đăng ký thành công',
      showSuccess: false,
      email: email, 
      password: password
      , name: name
    });

  }
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

