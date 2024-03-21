let nodemailer = require('nodemailer');

exports.sendingMail = (req, res, next) => {
  const inputName = req.body.name;
  const inputEmail = req.body.email;
  const inputMessage = req.body.message;
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

  function validateEmail(inputEmail) {
    let regexEmail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
    return regexEmail.test(inputEmail);
  }
  function validateName(inputName) {
    if (inputName !== undefined) {
      inputName = inputName.trim();
      return inputName !== '';
    }
  }
  const send = () => {
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
  };

  validateEmail(inputEmail) & validateName(inputName)
    ? send()
    : res.status(400).json({ message: 'Error with sent data' });
};
