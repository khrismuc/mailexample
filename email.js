const nodemailer = require('nodemailer');

const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.server.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

function send() {
    return new Promise((resolve, reject) => {

        var mailOptions = {
            from: 'sender@dot.net',
            to: 'recipient@dot.net',
            subject: 'Revenue Report',
            text: "Hello"
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) reject(err);
            else resolve(info);
        });
    });
}

module.exports = {
    send
}