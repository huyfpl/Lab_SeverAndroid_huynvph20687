const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const port = 3000;
const app = express();
const { engine } = require('express-handlebars');


//mongoose db connection

const mongoose = require('mongoose');

const url = 'mongodb+srv://huynvph20687:c1sas2Dnu6fPDo6F@mongo-huynvph20687.f01mcft.mongodb.net/test_mongodb?retryWrites=true&w=majority';
const {sachModel} = require('./sqlmodel');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.json())
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs');

app.get('/', async (req, res) => {
  res.redirect('sach')
});
app.get('/sach', async (req, res) => {
    await mongoose.connect(url).then(console.log('kets noi db thanh cong'));
    const sach = await sachModel.find();
    res.render('home',{allsach : sach.map(data=>data.toJSON())});
    for(let i=0;i<sach.length;i++){
        let s=sach[i];
        console.log("sach thứ :",i+1);
        console.log("tên sách: "+s.tensach,"giá sách: "+s.gia,"tồn kho: "+s.tonkho)
    }

    try {
        console.log(sach);
        
       

    } catch (e) {
        res.status(500).send(e);
    }
});
app.get('/search_sach_theo_gia', async (req, res) => {
    try {
      const query = req.query.search;
      if(query==''){
        const sach = await sachModel.find();
        res.render('home',{allsach : sach.map(data=>data.toJSON())});
      }
      else{
        const gia = await sachModel.find({gia:query});
        res.render('home',{allsach : gia.map(data=>data.toJSON())});
      }
      
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
app.get("/update_sach/:id", async (request, response) => {

    await mongoose.connect(url).then(console.log('Ket noi DB thanh cong.'));

    try {
        var kq = await sachModel.findById(request.params.id);

        console.log(kq);
        response.render('quanlysach',{object:kq.toJSON()});
        //await sach.save();
        // response.send(kq);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/xoa_sach/:id", async (request, response) => {

    await mongoose.connect(url).then(console.log('Ket noi DB thanh cong.'));

    try {
        var kq = await sachModel.findByIdAndDelete(request.params.id, request.body);

        console.log(kq);  
        response.redirect('/sach');
        //await sach.save();
        // response.send(kq);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.get('/quanlysach', (req, res) => {
    res.render('quanlysach');
});
app.post("/quanlysach", async (req, res) => {
    console.log(req.body.tensach);
    if (req.body.id == '') {
        try {
            sachModel.create(req.body)
                .then(data => {
                    
                })
                .catch(err => console.log(err));
                res.redirect('/sach');
        } catch (error) {
            console.log(error);
        }
        res.render('quanlysach');
    } else {
        await sachModel.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true });
        res.redirect('/sach');
    }
});

app.listen(port, () => console.log('Server started on port 3000'));
