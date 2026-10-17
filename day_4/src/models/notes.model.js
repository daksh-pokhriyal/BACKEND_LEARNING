const mongoose= require('mongoose');

const notesSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const noteModel= mongoose.model('Notes',notesSchema); // Notes is the name of the collection in the database


module.exports= noteModel;