// Task 5 : send email
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "email-de-sardine@gmail.com",
        pass: "tu-veux-connaitre-mon-mot-de-passe-hein",
    },
});

const mailOptions = {
    from: "email-de-sardine@gmail.com",
    to: "jsp-quelquun@gmail.com",
    subject: "Test Email from Node.js",
    text: "Hello, SARDINE is testing, this is a test email sent from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("Email sent: ", +info.response);
    }
});
