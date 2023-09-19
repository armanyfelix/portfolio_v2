import * as nodemailer from 'nodemailer'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Proyects from '../components/Proyects'
import Skills from '../components/Skills'
// import Tools from '../components/Tools'
import { gmailPassword, gmailUser } from '../constants/nodemailer'
import { getProyects, getTechonolgies } from '../utils/getData'

export default async function Page() {
  async function sendEmail(data: FormData) {
    'use server'

    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })
    // JUST NECESSARY TO TEST THE EMAIL CONNECTION
    // transporter.verify((error: Boolean) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Ready to Send");
    //     }
    // });
    const mail: Object = {
      from: email,
      to: gmailUser,
      text: ` `,
      subject: `${name} contact you through the portfolio`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    }
    await new Promise((resolve, reject) => {
      transporter.sendMail(mail, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
    const mailReply: Object = {
      from: gmailUser,
      to: email,
      subject: `Hi ${name}, thanks for check my portfolio!`,
      text: "Hello, I am Armany[bot]! You contact me through my web portfolio, awesome!. Your message has been received and you're going to have an answer very soon",
      html: '<div><h3>Hello, I\'m Armany[bot]!</h3><p>You contact me through the my web <a href="https://armanyfelix.vercel.app">portfolio</a>, awesome! Your message has been received, and you wolud get a reply ASAP. Meanwhile, check out my <a href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">Linkedin</a> and <a href="https://github.com/armanyfelix">Github!</a></p><h3>¡Peace!</h3></div>',
    }
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailReply, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }

  const proyects = await getProyects()

  const technologies = await getTechonolgies()

  return (
    <div className="w-full">
      <Home />
      <Proyects proyects={proyects} />
      <About />
      <Skills technologies={technologies} />
      {/* <Tools /> */}
      <Contact sendEmail={sendEmail} />
    </div>
  )
}
