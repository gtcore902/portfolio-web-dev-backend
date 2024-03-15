const express = require('express');
const router = express.Router();
const mailCtrl = require('../controllers/sendmail');

router.post('/sendmail', mailCtrl.sendingMail);

module.exports = router;
