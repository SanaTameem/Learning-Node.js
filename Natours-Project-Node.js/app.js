const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server' });
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'You can post to this endpoint...' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listens on port ${port}`);
});
