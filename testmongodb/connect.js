const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const port = 3000;
const app = express();


//mongoose db connection
const mongoose = require('mongoose');

const url = 'mongodb+srv://ducmong6969:Zaf0CdvLYyMkR8b0@maitienduc.gimicfu.mongodb.net/test_mongo?retryWrites=true&w=majority';
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



app.listen(port, () => console.log('Server started on port 3000'));