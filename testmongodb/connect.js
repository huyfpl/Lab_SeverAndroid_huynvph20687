const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const port = 3000;
const app = express();


//mongoose db connection

const mongoose = require('mongoose');

const url = 'mongodb+srv://huynvph20687:c1sas2Dnu6fPDo6F@mongo-huynvph20687.f01mcft.mongodb.net/test_mongodb?retryWrites=true&w=majority';
const sachModel = require('./sqlmodel');
app.get('/sach', async (req, res) => {
    await mongoose.connect(url).then(console.log('kets noi db thanh cong'));
    const sach = await sachModel.find();
    

    try {
        console.log(sach);
        res.send(sach);

    } catch (e) {
        res.status(500).send(e);
    }
});
app.get("/update_sach", async (request, response) => {

    await mongoose.connect(url).then(console.log('Ket noi DB thanh cong.'));

    try {
        var kq = await sachModel.updateOne({tensach: 'võ công tà '}, {tensach: 'võ công tà đạo', gia: 25000});

        console.log(kq);

        //await sach.save();
        response.send(kq);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/xoa_sach", async (request, response) => {

    await mongoose.connect(url).then(console.log('Ket noi DB thanh cong.'));

    try {
        var kq = await sachModel.findOneAndRemove({tensach: 'cuu am chan kinh'});

        console.log(kq);

        //await sach.save();
        response.send(kq);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/add_sach", async (request, response) => {

    await mongoose.connect(url).then(console.log('Ket noi DB thanh cong.'));

    let sach = new sachModel({
        tensach: 'võ công tà ',
        gia: 22322
    });

    sach.tonkho = 100;

    try {
        console.log(sach);
        await sach.save();
        response.send(sach);
    } catch (error) {
        response.status(500).send(error);
    }
});



app.listen(port, () => console.log('Server started on port 3000'));