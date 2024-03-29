# Sending Mail with Nodemailer (portfolio-web-dev-backend)

This backend is necessary for sending emails from [this repo](https://github.com/gtcore902/portfolio-web-dev).
This code snippet demonstrates how to send an email using Nodemailer in a Node.js backend.

## Prerequisites

Before running this code, ensure that you have the following:

- Node.js installed on your machine
- Nodemailer package installed (`npm install nodemailer`)
- A Gmail account with access to SMTP

## Configuration

You need to configure your Gmail account to allow access via SMTP. Follow these steps:

1. Enable Less Secure Apps: Go to your Google Account settings and enable "Allow less secure apps".
2. Generate App Password: If you have two-factor authentication enabled, you need to generate an app password for your Gmail account.

## Usage

1. Clone this repository or create a new Node.js project.
2. Install dependencies: `npm install`
3. Set environment variables for `GOOGLE_MAIL_APP` (your Gmail address) and `GOOGLE_APP_PASSWORD` (app password generated in the previous step).
4. Modify the `sendingMail` function in `mailController.js` according to your requirements.
5. Run the server: `node server.js` (or whatever your main file is named).
6. Send a POST request to the appropriate endpoint with the necessary data (name, email, message) to trigger the email sending process.

## Example

```javascript
// Example POST request using fetch
const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  message: 'This is a test message.',
};

fetch('http://localhost:4000/sendmail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

## Contribution

_No contribution needed but you can use this repository._

_[How to use Git?](https://docs.github.com/fr/get-started/using-git/about-git)_

## Contact

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gtcore902)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ga%C3%ABtan-tremois-a956a91a3)
