const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Dave!! This is the third update!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
