const express = require('express');

const PORT = 3001;

const app = express();

app.get('/', (req, res) => res.send('<h1>docker test</h1>'));
app.get('/container', (req, res) => res.send('Hello from express container'))

app.listen(PORT, () => console.log('express container run on port ' + PORT));
