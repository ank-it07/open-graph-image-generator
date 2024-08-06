require('dotenv').config({
  path: './.env'
});

const express = require('express');
const cors = require('cors');
const puppeteer = require('./puppeteer');


const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions)); 

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('server is running');
});



app.get('/og-image', puppeteer.generateImage);
