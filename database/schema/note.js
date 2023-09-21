const mongoose = require('mongoose');

const Note = new mongoose.Schema({
    title : {
        type : mongoose.SchemaTypes.String,
        required : true,
        default : "Untitled",
        unique : true,
    },
    body : {
        type : mongoose.SchemaTypes.String,
        required : true,
    },
    createdAt : {
        type : mongoose.SchemaTypes.Date,
        required : true,
        default : new Date(),
    },
  
})

module.exports = mongoose.model('note',Note);