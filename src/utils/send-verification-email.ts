import { sendMail } from "@/utils";

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const resp = await sendMail(
      email,
      "Verifica tu correo electrónico",
      html(token)
    );

    return resp;
  } catch (error) {
    return {
      ok: false,
      message: "No se pudo enviar el correo de verificación",
    };
  }
};

const html = (token: string) => `
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifica tu correo electrónico</title>
</head>
<body style="margin: 0; padding: 0; background-color: #ececec; font-family: Arial, sans-serif;">
  <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #ececec; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600px" cellspacing="0" cellpadding="0" style="background-color: white; border-radius: 8px; padding: 20px;">
          <tr>
            <td align="center" style="padding: 20px 0;">
              <h1 style="color: #333; margin: 0;">Verifica tu correo electrónico</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px 0;">
              <p style="color: #555; margin: 0; font-size: 16px;">Para confirmar tu correo electrónico, haz clic en el siguiente enlace:</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px 0;">
              <a href="${process.env.NEXT_PUBLIC_URL}/auth/verify-email?token=${token}" 
                 style="display: inline-block; text-decoration: none; color: white; background-color: black; padding: 8px 32px; border-radius: 4px; font-size: 16px;">
                Verificar correo electrónico
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>

  `;
