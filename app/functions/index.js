
//functions/index.js

//import needed modules
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url'
const cors = require('cors')({ origin: true });

// get email and pass from firebase environment
const email = functions.config().email.user;
const pass = functions.config().email.pass;

//create and config transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass,
    }
});

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {

    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')

    if (req.method === 'OPTIONS') {
        res.end()
        return;
    } else {

        cors(req, res, () => {
            if (req.method !== 'POST') {
                return
            }

            const htmlMessage = `<p>Contact info offered: </p> <br/> 
                    <p>Phone: ${req.body.phone} </p> <br/> 
                    <p>Email: ${req.body.email}</p><br/><br/>
                    <p>Message body:</p><br/>${req.body.message}`;

            const mailOptions = {
                from: req.body.email,
                replyTo: req.body.email,
                to: email,
                subject: "New message from: " + req.body.name,
                text: req.body.message,
                html: htmlMessage,
            };

            return transporter.sendMail(mailOptions).then(() => {
                console.log('New email sent to:', email)
                res.status(200).send({
                    isEmailSend: true
                })
                return;
            });
        })
    }
});