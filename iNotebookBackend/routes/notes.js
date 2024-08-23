const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");


//ROUTE:1 get all the notes:GET "/api/notes/fetchallnotes "     login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.error(error.messsage);
        res.status(500).send("internal server error");
    }
})
//ROUTE:2 Add a New note:POST "/api/notes/addnote "     login required
router.post('/addnote',fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'enter a valid decription').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        //    if there are error are error returnes bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag ,user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (error) {
        console.error(error.messsage);
        res.status(500).send("internal server error");
    }
})
//ROUTE:3 Update a existing note:PUT "/api/notes/updatenote/:id "     login required
router.put('/updatenote/:id',fetchuser, async (req, res) => {
        const {title,description,tag}=req.body;
    try {
        //creating a new notes
        const newNote = {}
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        // find the  note that will be updated

        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("page not found") };
        if (note.user.toString() !== req.user.id) {
            return res.status(410).send("you are note allowed");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.messsage);
        res.status(500).send("internal server error");
    }
         
}) 

//ROUTE:4 Delete a existing note:DELETE "/api/notes/deletenote/:id "     login required
router.delete('/deletenote/:id',fetchuser, async (req, res) => {
    try {
      // find the  note that delete will be deleted

      let note = await Notes.findById(req.params.id);
      if (!note) {
        return res.status(404).send("page not found");
      }

      // allow delete if the user owns this particular note
      if (note.user.toString() !== req.user.id) {
        return res.status(410).send("you are note allowed");
      }
      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({ Success: "note hase been deleted", note: note });
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("internal server error");
    } 
}) 

module.exports = router;