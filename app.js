const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

const app = express();

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

// Test send mails with nodemailer
app.post('/sendmail', (req, res, next) => {
  const inputName = req.body.name;
  const inputEmail = req.body.email;
  const inputMessage = req.body.message;
  //   console.log(inputName, inputEmail, inputMessage);
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GOOGLE_MAIL_APP,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.GOOGLE_MAIL_APP,
    to: process.env.GOOGLE_MAIL_APP,
    subject: 'New message from web dev portfolio',
    // text: 'Alternative text',
    html: `
    <h1>New message from web dev portfolio</h1>
    <p>Input name = ${inputName}</p>
    <p>Input email = ${inputEmail}</p>
    <p>Input message = ${inputMessage}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('An error occurred while sending the email.', error);
      res
        .status(500)
        .json({ message: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent with success : ' + info.response);
      res.status(200).json({ message: 'Sending email successfully!' });
    }
  });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok server' });
});

module.exports = app;
