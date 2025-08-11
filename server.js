require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Front.html');
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  const msg = {
    to: email,
    from: 'vihaankumar228.2012@gmail.com',
    subject: 'DEV@Deakin welcomes you!!!',
    text: `Hello there! Thank you for joining our platform.`,
    html: `<strong>Welcome to DEV@Deakin!</strong><br>We’re excited to have you on board.`,
  };

  try {
    await sgMail.send(msg);
    res.send('Welcome email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email.');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
