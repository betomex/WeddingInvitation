import nodemailer from "nodemailer";

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

const form = async (req: any, res: any) => {
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
};

export default form