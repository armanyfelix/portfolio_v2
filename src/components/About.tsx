'use client'

import Image from 'next/image'
import me from '../../public/images/me.png'
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
      <style jsx>{`
        @property --rotate {
          syntax: '<angle>';
          initial-value: 132deg;
          inherits: false;
        }

        :root {
          --card-height: 65vh;
          --card-width: calc(var(--card-height) / 1.5);
        }

        .card {
          background: #191c29;
          width: var(--card-width);
          height: var(--card-height);
          padding: 3px;
          position: relative;
          border-radius: 6px;
          justify-content: center;
          align-items: center;
          text-align: center;
          display: flex;
          font-size: 1.5em;
          color: rgb(88 199 250 / 0%);
          cursor: pointer;
          font-family: cursive;
        }

        .card:hover {
          color: rgb(88 199 250 / 100%);
          transition: color 1s;
        }
        .card:hover:before,
        .card:hover:after {
          animation: none;
          opacity: 0;
        }

        .card::before {
          content: '';
          width: 104%;
          height: 102%;
          border-radius: 8px;
          background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
          position: absolute;
          z-index: -1;
          top: -1%;
          left: -2%;
          animation: spin 2.5s linear infinite;
        }

        .card::after {
          position: absolute;
          content: '';
          top: calc(var(--card-height) / 6);
          left: 0;
          right: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          transform: scale(0.8);
          filter: blur(calc(var(--card-height) / 6));
          background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
          opacity: 1;
          transition: opacity 0.5s;
          animation: spin 2.5s linear infinite;
        }

        @keyframes spin {
          0% {
            --rotate: 0deg;
          }
          100% {
            --rotate: 360deg;
          }
        }
      `}</style>
      <div className="rounded-box mx-3 flex flex-col-reverse items-center bg-accent bg-opacity-30 text-center antialiased shadow-2xl backdrop-blur md:mx-auto md:w-3/5 xl:flex-row">
        <div className="px-10 pb-10 text-left font-sans tracking-tighter md:pt-10 ">
          <p>
            Hi! I’m Luis, a full stack software developer with a strong background in development with Node.js
            and React. I studied Mechatronics Engineering at Universidad Nacional de Baja California by but I
            decided to leave it to focus on my career as a programmer on my own.
          </p>
          <br />
          <p>
            Since I was 15 years old I’ve been creating basic HTML websites, android apps and just playing
            around with tech, I have gone through languages like c#, c, c++, php, java, python, but I’ve
            chosen to stick with JavaScript. I am always looking for ways to improve my skills, make my stack
            better and create solutions to make the internet awesome.
          </p>
        </div>
        <div className="rounded-t-box mb-6 w-full bg-black/30 shadow-2xl lg:mb-0 lg:mr-6 lg:bg-transparent lg:shadow-none">
          <Image src={me} width="420" height="320" alt="me" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
