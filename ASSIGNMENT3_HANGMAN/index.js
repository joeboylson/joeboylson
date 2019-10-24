const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

// ROUTES

app.get('/', (req, res) => res.sendFile('index.html'))

app.get('/word', async (req, res) => {
  let randomWord = await axios.get(`https://hangman-api.lively.software/?difficulty=${req.query.difficulty}`)  
  res.send(randomWord.data.word)}
)


// START

app.listen(port, () => console.log(`::: ${port}`));