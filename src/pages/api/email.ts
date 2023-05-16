import type { NextApiRequest, NextApiResponse } from 'next';
require('dotenv').config();
const nodemailer = require('nodemailer');

type Data = {
  status: string;
  error: string;
  message: string;
};

/**
 * @param req
 * @param res
 * @returns
 */
export default async function mailer(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, email, message } = req.body;
  if (req.method === 'POST') {
    // await new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    // });
    // JUST NECESSARY FOR TEST THE EMAIL CONNECTION
    // transporter.verify((error: Boolean) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Ready to Send");
    //     }
    // });
    const mail = {
      from: email,
      to: process.env.EMAIL,
      text: ` `,
      subject: `${name} contact you through your portfolio`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mail, (err: string, info: string) => {
        if (err) {
          console.error(err);
          reject(err);
          // res.status(500).json({
          //   error: 'error' + JSON.stringify(err),
          //   status: 'ERROR',
          //   message: 'There was an error, the email could not be sent',
          // });
        } else {
          resolve(info);
          // res.status(200).json({
          //   message: 'Mail sent successfully',
          //   status: 'OK',
          //   error: '',
          // });
        }
      });
    });

    const mailReply = {
      from: process.env.EMAIL_BOT,
      to: email,
      subject: `Hi ${name}, thanks for check my portfolio!`,
      text: 'Hello, I am Armany[bot]! You sent a message through the Contact form of my portfolio, thanks! Your message has been received, and you should get a reply soon.',
      html: '<div><h3>Hello, I am Armany[bot]!</h3><p>You sent a message through the Contact form on my <a href="https://armany.herokuapp.com/">portfolio</a>, thanks! Your message has been received, and you should get a reply ASAP. Meanwhile, check out my <a href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">Linkedin</a> and <a href="https://github.com/armanyfelix">Github!</a></p><h3>¡Peace!</h3></div>',
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailReply, (err: string, info: string) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    // } else {
    //   res.status(400).json({
    //     status: 'ERROR',
    //     error: '',
    //     message: '',
    //   });
  }
  return res.status(200).json({
    status: 'OK',
    error: '',
    message: '',
  });
}
