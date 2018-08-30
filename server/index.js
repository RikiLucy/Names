const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  const sum = +req.query.first + +req.query.second;
  res.status(200).json({ sum });
});

app.listen(3000);
