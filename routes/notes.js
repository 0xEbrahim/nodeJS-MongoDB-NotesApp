const {Router} = require('express');
const router = Router();
const {
    getAllNotes,
    getSingleNote,
    updateNote,
    deleteNote,
    addNote
        } = require('../controllers/noteController')

/*
TODO:
    - add / delete / update / get ROURTERS
*/ 
router.get('/getAll',getAllNotes);
router.post('/add',addNote);
router.get('/getNote/:title',getSingleNote);
router.delete('/deleteNote/:title',deleteNote);
router.put('/updateNote/:title',updateNote);

module.exports = router
