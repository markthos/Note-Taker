const router = require('express').Router();
const path = require('path');

// GET Route for homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET Route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
   