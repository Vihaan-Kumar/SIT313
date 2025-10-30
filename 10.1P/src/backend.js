import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vihaan4905.se24@chitkara.edu.in", 
    pass: "nuyy djum iafi mvzi",
  },
});

app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    await transporter.sendMail({
      from: "youremail@gmail.com",
      to: email,
      subject: "Welcome to DEV@Deakin Newsletter!",
      text: `Hi there! 👋\n\nThanks for subscribing to DEV@Deakin. You'll now receive the latest updates straight to your inbox.\n\nBest,\nThe DEV@Deakin Team`,
    });

    console.log("Welcome email sent to:", email);
    res.json({ message: "Subscription successful! Check your inbox for a welcome email." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
