const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, ".", "public");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});

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
    to: "Email_Server",
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
