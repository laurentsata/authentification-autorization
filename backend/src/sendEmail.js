/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
// eslint-disable-next-line import/extensions
const mailer = require("./mailer");
const sendEmail = (req) => {
  const { email } = req.body;
  mailer.sendMail(
    {
      from: "amina.aitm@gmail.com",
      to: email,
      subject: `Bienvenue ${req.body.firstname}`,
      text: "Nous te souhaitons la bienvenue",
      html: "<p>Nous te souhaitons la bienvenue</p>",
    },
    (err, info) => {
      if (err) console.error(err);
      else console.log(info);
    }
  );
};
module.exports = {
  sendEmail,
};
