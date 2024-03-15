const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// let nodemailer = require('nodemailer');

const mailRoutes = require('./routes/sendmail');
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/', mailRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok server' });
});

module.exports = app;
