const mongoose = require('mongoose');
const sach = new mongoose.Schema({
    tensach: {
        type: String,
        require: true
    },
    gia: {
        type: Number,
        require: true
    },
    soluong: {
        type: Number,
        require: true
    },
    chitiet: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    


})
const sachModel=mongoose.model('sach',sach)
module.exports={sachModel};
