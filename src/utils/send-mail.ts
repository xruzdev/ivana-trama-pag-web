"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL,
  },
});

export const sendMail = async (to: string, subject: string, html: string) => {

  try {
    await transporter.sendMail({
      from: process.env.USER_MAIL,
      to,
      subject,
      html,
    });

    transporter.close();

    return {
      ok: true,
      message: "Mail enviado",
    };
  } catch (e) {
    console.error(e);

    return {
      ok: false,
      message: "Error al enviar el mail, intente nuevamente.",
    };
  }
};
