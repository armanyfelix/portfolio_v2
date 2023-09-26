'use client'

import Title from './common/Title'

export default function About() {
  return (
    <section id="about">
      <Title
        title="About Me"
        button={{
          label: 'CV',
          href: 'https://drive.google.com/file/d/1v9ak1DxxRvnM-n03WpKYsnaMixlxpZ19/view?usp=sharing',
        }}
      />
      <div className="rounded-box mx-3 flex flex-col-reverse items-center bg-accent bg-opacity-30 text-center antialiased shadow-2xl backdrop-blur md:mx-auto md:w-3/5 xl:flex-row">
        <div className="px-6 pb-10 text-left font-sans tracking-tighter md:pt-10 ">
          <p>
            Hi! I{'’'}m Luis, a full stack software developer with a strong background in development with
            Node.js and React. I studied Mechatronics Engineering at Universidad Nacional de Baja California
            by but I decided to leave it to focus on my career as a programmer on my own.
          </p>
          <br />
          <p>
            Since I was 15 years old I{"'"}ve been creating basic HTML websites, android apps and just playing
            around with tech, I like challenges and I am always looking for ways to improve my skills, make my
            stack better and create solutions to make the web even better.
          </p>
        </div>
        {/* <div className="rounded-t-box mb-6 w-full bg-black/30 shadow-2xl lg:mb-0 lg:mr-6 lg:bg-transparent lg:shadow-none">
          <Image src={me} width="420" height="320" alt="me" className="mx-auto" />
        </div> */}
      </div>
    </section>
  )
}
