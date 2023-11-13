const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server, bitch', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post into this dumphole');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Defining routs in Express.js
