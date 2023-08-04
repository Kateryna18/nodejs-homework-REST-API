const nodemailer = require('nodemailer');
require('dotenv').config();

const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: "katerynahumeniuk@meta.ua",
      pass: process.env.MAIL_PASSWORD,
    },
  };

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data) => {
    const email = {...data, from: "katerynahumeniuk@meta.ua"};
    await transporter.sendMail(email);
    return true;
}


module.exports = sendEmail;