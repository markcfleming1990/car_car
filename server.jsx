const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 5000, () => console.log("server Listening"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Email_Server",
    pass: "Email_PW",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Ready to Send email");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "markcfleming1990@gmail.com",
    subject: "I'd like some more information",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
