const express = require('express');
const path = require('path');

const api = require('./routes/index.js');
// boiler plate
const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));
// GET route for landing page
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/assests/index.html'))
);
// GET route for notes
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/assests/notes.html'))
);
// listen for server request from local host
app.listen(PORT, () => 
console.log(`app listening at http://localhost:${PORT}`)
);

