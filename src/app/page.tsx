import { FC } from 'react';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Proyects from '../components/Proyects';
import * as nodemailer from 'nodemailer';

interface Props {}

const Page: FC<Props> = () => {
  async function sendEmail(data: FormData) {
    'use server';

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASS,
      },
    });
    // JUST NECESSARY FOR TEST THE EMAIL CONNECTION
    // transporter.verify((error: Boolean) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Ready to Send");
    //     }
    // });
    const mail: Object = {
      from: email,
      to: process.env.REACT_APP_EMAIL,
      text: ` `,
      subject: `${name} contact you through your portfolio`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mail, (err, info) => {
        if (err) {
          // console.error(err);
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
    const mailReply: Object = {
      from: process.env.REACT_APP_EMAIL,
      to: email,
      subject: `Hi ${name}, thanks for check my portfolio!`,
      text: 'Hello, I am Armany[bot]! You sent a message through the Contact form of my portfolio, thanks! Your message has been received, and you should get a reply soon.',
      html: '<div><h3>Hello, I am Armany[bot]!</h3><p>You sent a message through the Contact form on my <a href="https://armany.herokuapp.com/">portfolio</a>, thanks! Your message has been received, and you should get a reply ASAP. Meanwhile, check out my <a href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">Linkedin</a> and <a href="https://github.com/armanyfelix">Github!</a></p><h3>¡Peace!</h3></div>',
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailReply, (err, info) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  }

  return (
    <div className="w-full">
      <Home />
      <Proyects />
      <About />
      <Skills />
      <Contact sendEmail={sendEmail} />
    </div>
  );
};

// Multiple layouts example
// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default Page;
