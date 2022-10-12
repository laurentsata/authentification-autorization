/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
// eslint-disable-next-line import/extensions
// require("dotenv").config();

const mailer = require("./mailers");

const sendEmail = (req) => {
  const { email } = req.body;

  mailer.sendMail(
    {
      from: "laurent.saez@sncf.fr",
      to: email,
      subject: `Bienvenue ${req.body.firstname} sur MODELPRO`,
      text: "Nous te souhaitons la bienvenue",
      html: "<p>Nous te souhaitons la bienvenue</p>",
    },
    (err, info) => {
      if (err) console.error(err);
      else console.log(info);
    }
  );
};

const sendEmailContact = (req) => {
  const { email } = req.body;

  mailer.sendMailContact(
    {
      from: "laurent.saez@sncf.fr",
      to: email,
      subject: `message de ${req.body.firstname} sur MODELPRO`,
      text: `Message de ${req.body.firstname},
      Sujet :${req.body.Sujet},
      Message : ${req.body.Votre} `,
      html: "<p>Merci pour votre message</p>",
    },
    (err, info) => {
      if (err) console.error(err);
      else console.log(info);
    }
  );
};

module.exports = {
  sendEmail,
  sendEmailContact,
};
