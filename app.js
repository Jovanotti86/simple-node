const express = require('express');

const app = express();
const port = 3131;

app.get('/', (req, res) => res.send('Hello Jovanotti'));

app.listen(port, () => console.log(`App running at ${[port]}`));
