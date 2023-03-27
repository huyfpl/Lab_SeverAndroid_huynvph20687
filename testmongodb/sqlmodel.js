const mongoose = require('mongoose');
const sach = new mongoose.Schema({
    tensach: {
        type: String,
        require: true
    },
    gia: {
        type: Number,
        default: 3000
    },
    tonkho: {
        type: Number,
        default: 100
    },

})
const sachModel=mongoose.model('sach',sach)
module.exports=sachModel;
