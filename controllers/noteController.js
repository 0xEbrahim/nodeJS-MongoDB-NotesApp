const Note = require('../database/schema/note')

const addNote = async (req, res) => {
    const {title , body} = req.body;
    const notUniqueTitle = await Note.findOne({title : title});
   if(!notUniqueTitle){
        if(body){
       await Note.create({title , body});
       console.log({title,body});
       res.send(201)
        }else{
        res.status(400).send({msg : "body cannot be empty"})
        }
    }else{
        res.status(400).send({msg : "There is another not with this title."})
    }
}

const deleteNote = async (req, res) => {
    const { title } = req.params;
    if(title){
        const noteDB = await Note.findOne({title});
        if(noteDB){
            await Note.findOneAndDelete({title});
            res.send(201);
        }else{
            res.status(400).send({msg : "There is no note with this title"});
        }
    }else{
        res.status(400).send({msg : "Title can't be empty"})
    }
    
}

const updateNote = async (req, res) => {
    const {title : noteName} = req.params;
    const noteDB = await Note.findOne({title : noteName});
    if(noteDB){
        const {title , body} = req.body;
        if(title){
            await Note.findByIdAndUpdate(noteDB,{title});
        }
        if(body){
            await Note.findOneAndUpdate(noteDB, {body});
        }
        res.status(201).send({msg : "Updated"});
    }else{
        res.status(400).send({msg : "There is no note with this title"});
    }
}

const getSingleNote = async (req, res) => {
    const { title } = req.params;
    if(title){
    const noteDB = await Note.findOne({title});
    if(noteDB){
          //  console.log(noteDB);
            res.status(201).send({note : noteDB});
        }else{
            res.status(400).send({msg : "There is no note with this title"});
        }
    }else{
        res.status(400).send({msg : "Title can't be empty"})
    }
}

const getAllNotes = async (req, res) => {
    const notes = await Note.find({});
    res.status(201).send({notes});
}

module.exports = {
    addNote,
    getAllNotes,
    getSingleNote,
    deleteNote,
    updateNote
}