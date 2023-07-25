const express = require('express');
const htmlRoutes = require('./public/routes/htmlRoutes');
const apiRoutes = require('./public/routes/apiRoutes');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for serving all the files in the public folder
app.use(express.static('public'));

// Middleware for serving all the files in the public folder
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

 // Listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
    );
    