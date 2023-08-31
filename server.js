const express = require('express');
const path = require('path');

// boiler plate
const PORT = process.env.PORT || 3001;

const app = express();

const routes = require('./routes/apiRoutes.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// GET route for landing page
app.use(routes);

// GET route for notes
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);
// listen for server request from local host
app.listen(PORT, () => 
console.log(`app listening at http://localhost:${PORT}`)
);

