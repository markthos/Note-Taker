const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');

// GET Route for retrieving all the notes
router.get('/notes', async (req, res) => {
    try {
        const data = await fs.promises.readFile('./db/db.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to read DB.'});
    }
});

// POST Route for a new note
router.post('/notes', async (req, res) => {
    try {
        const data = await fs.promises.readFile('./db/db.json', 'utf8');
        const notes = JSON.parse(data);
        const newNote = {
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text
        };
        notes.push(newNote);
        await fs.promises.writeFile('./db/db.json', JSON.stringify(notes));
        res.json(newNote);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to save note.'});
    }
});

// DELETE Route for deleting a note
router.delete('/notes/:id', async (req, res) => {
    try {
        const data = await fs.promises.readFile('./db/db.json', 'utf8');
        const notes = JSON.parse(data);
        const filteredNotes = notes.filter(note => note.id !== req.params.id);
        await fs.promises.writeFile('./db/db.json', JSON.stringify(filteredNotes));
        res.json({ok: true});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to delete note.'});
    }
});

module.exports = router;