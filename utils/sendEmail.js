import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.SMTP_PORT), // e.g., 465
      secure: process.env.SMTP_PORT == "465", // true for port 465, false for other ports
      service: process.env.SMTP_SERVICE, // e.g., 'gmail'
      auth: {
        user: process.env.SMTP_MAIL, // e.g., 'youremail@gmail.com'
        pass: process.env.SMTP_PASSWORD, // your app password or less secure app password
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL, // e.g., 'youremail@gmail.com'
      to: email,
      subject: subject,
      text: message,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// import nodeMailer from "nodemailer";

// export const sendEmail = async ({ email, subject, message }) => {
//   const transporter = nodeMailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     service: process.env.SMTP_SERVICE,
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });
//   const options = {
//     from: process.env.SMTP_MAIL,
//     to: email,
//     subject: subject,
//     text: message,
//   };
//   await transporter.sendMail(options);
// };
