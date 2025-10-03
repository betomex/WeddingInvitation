import express, { type Request, Response, NextFunction } from "express";
import { setupVite, serveStatic, log } from "./vite";
import nodemailer from "nodemailer";
import { createServer } from "http";
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: [
    'https://your-domain.vercel.app',
    'http://localhost:5000'
  ],
  credentials: true
}));

const transporter = nodemailer.createTransport({
  service: "gmail", 
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: { 
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const {
      fullName,
      guestCount,
      attendingCeremony,
      attendingReception,
      specialRequests,
      message,
    } = req.body;

    const mailOptions = {
      from: `${fullName} <test@example.com>`,
      to: process.env.EMAIL_USER,
      subject: `Новое сообщение от ${fullName}`,
      html: `
        <h3>Новое сообщение с сайта</h3>
        <p><strong>Имя:</strong> ${fullName}</p>
        <p><strong>Количество гостей:</strong> ${guestCount}</p>
        <p><strong>Буду ли на церемонии:</strong> ${attendingCeremony}</p>
        <p><strong>Буду ли на банкете:</strong> ${attendingReception}</p>
        <p><strong>Сцепзапросы:</strong> ${specialRequests}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Письмо отправлено!", data: req.body });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    res.status(500).json({ success: false, message: "Ошибка отправки письма" });
  }
});

const port = process.env.PORT || 5000;
app.listen(
  {
    port,
    host: "0.0.0.0",
  },
  () => {
    log(`serving on port ${port}`);
  }
);

(async () => {
  const httpServer = createServer(app);

  if (app.get("env") === "development") {
    await setupVite(app, httpServer);
  } else {
    serveStatic(app);
  }
})();
