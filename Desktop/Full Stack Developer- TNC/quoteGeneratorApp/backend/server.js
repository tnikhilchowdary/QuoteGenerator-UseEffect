const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "Success is not in what you have, but who you are.",
  "It's not whether you get knocked down, it's whether you get up.",
];

app.get('/', (req, res) => {
  res.send('Hello World from Backend');
});

app.get('/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
