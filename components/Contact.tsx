'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AtSymbolIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: { value: string };
  email: { value: string };
  message: { value: string };
}

function Contact() {
  const [status, setStatus] = useState<string>('Submit');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target as typeof e.target & FormData;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
        setStatus('Submit');
      })
      .catch((err) => {
        alert(err);
        setStatus('Error');
      });
  };

  return (
    <section className=" lg:py-1 py-24 lg:h-screen antialiased">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 justify-between  space-y-6 md:space-y-0 backdrop-filter backdrop-blur border-2 border-opacity-30 border-gray-400 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-bold font-simplex text-5xl tracking-wide">Contact</h1>
              <p className="pt-2 pb-9 text-indigo-400 text-sm">
                If you are interested in working with me, please leave me a message.
                <br />I will answer you as soon as possible.
              </p>
            </div>
            <div className="flex flex-col mt-8 md:mt-0 space-y-4">
              <div className="inline-flex space-x-2">
                <PhoneIcon className="w-6 h-6" />
                <span>+(52) 664 212 2325</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <AtSymbolIcon className="w-6 h-6" />
                <span>luis.armany.felix@gmail.com</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <MapPinIcon className="w-6 h-6" />
                <span>Lomas Terrabella 22203, Tijuana B.C. Mexico</span>
              </div>
            </div>
            <div className="flex mt-6 space-x-4">
              <Link href="https://www.linkedin.com/in/armany-felix">
                <Image src="/icons/linkedin.svg" width="40" height="40" alt="logo-linkedIn" />
              </Link>
              <Link href="https://github.com/armanyfelix/">
                <Image src="/icons/github.svg" width="40" height="40" alt="logo-github" />
              </Link>
              <Link href="https://www.instagram.com/armanyf/">
                <Image src="/icons/instagram.svg" width="40" height="40" alt="logo-instagram" />
              </Link>
            </div>
          </div>
          <div>
            <div className=" backdrop-filter backdrop-blur bg-white bg-opacity-10 box-border backdrop-contrast-150 border-opacity-30 border-2 rounded-xl shadow-lg p-8 md:w-80">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="form-group">
                  <label htmlFor="name">
                    <input
                      id="name"
                      type="text"
                      className="py-2 px-4 rounded-lg shadow-xl bg-opacity-50 bg-gray-900 font-semibold focus:shadow-inner w-full"
                      placeholder="Name"
                      required
                    />
                  </label>
                </div>
                <div className="">
                  <label htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      className="py-2 px-4 rounded-lg shadow-xl bg-opacity-50 bg-gray-900 font-semibold focus:shadow-inner w-full"
                      placeholder="Email"
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <textarea
                      id="message"
                      className="py-2 px-4 rounded-lg shadow-xl bg-opacity-50 bg-gray-900 font-semibold focus:shadow-inner mr-5 w-full"
                      placeholder="Message"
                      required
                    />
                  </label>
                </div>
                <div className="text-right justify-end">
                  <button
                    type="submit"
                    className="py-2 px-6 hover:ring-2 hover:bg-transparent bg-gradient-to-b from-blue-500 to-purple-700 rounded-xl"
                  >
                    <span className="font-mono f">{status}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
