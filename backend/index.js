require('dotenv').config({
  path: './.env'
});

const express = require('express');
const cors = require('cors');
const puppeteer = require('./puppeteer');



const corsOptions = {
  origin: process.env.FRONTEND_URL_1,

  optionsSuccessStatus: 200,
};
console.log(process.env.FRONTEND_URL_1);

const app = express();

app.use(cors(corsOptions)); 

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/og-image', puppeteer.generateImage);
