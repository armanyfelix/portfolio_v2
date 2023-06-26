'use client';

import { FC, useState, useEffect } from 'react';
import { themeChange } from 'theme-change';
import Link from 'next/link';
import themes from '../../data/themes.module';
import HamburgerSwap from '../svg/HamburgerSwap';

interface Props {}

const Header: FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [topClasses, setTopClasses] = useState<string>('');
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setTopClasses('ease-in transform duration-300');
      } else {
        setTopClasses(
          'shadow-xl backdrop-filter backdrop-blur backdrop-brightness-90 bg-opacity-20 bg-black'
        );
      }
      if (prevScrollpos > currentScrollPos) {
        const position = (document.getElementById('top') as HTMLElement) || null;
        position.style.top = '0';
        const transition = (document.getElementById('top') as HTMLElement) || null;
        transition.style.transition = 'top 0.6s';
      } else {
        const position = (document.getElementById('top') as HTMLElement) || null;
        position.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    async function init() {
      const currentTheme = (await localStorage.getItem('theme')) || 'dark';
      setTheme(currentTheme);
    }
    init();
  }, []);

  return (
    <>
      <header
        id="top"
        className={`fixed top-0 right-0 left-0 flex justify-evenly z-40 items-center py-2 ${topClasses}`}
      >
        <div className="py-3">
          <Link href="/" legacyBehavior>
            <h1 className="text-2xl font-light italic cursor-pointer text-primary">Luis Armany</h1>
          </Link>
        </div>
        <div id="site-menu" className="flex flex-col z-50 sm:flex-row justify-between items-center">
          <nav className="w-full sm:w-auto hidden md:block self-end">
            <ul className="flex items-center space-x-3 text-secondary">
              <li>
                <Link onClick={() => setOpen(false)} href="#proyects" className="btn-nav">
                  Proyects
                </Link>
              </li>
              <li>
                <Link onClick={() => setOpen(false)} href="#about" className="btn-nav">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => setOpen(false)} href="#contact" className="btn-nav">
                  Contact
                </Link>
              </li>
              <li>
                <ThemesSelector theme={theme} setTheme={setTheme} />
              </li>
            </ul>
          </nav>
          <label className="md:hidden inline-grid swap swap-rotate">
            <input type="checkbox" checked={open} onChange={() => setOpen(!open)} />
            <HamburgerSwap />
          </label>
        </div>
      </header>
      {/* MENU */}
      <section
        className={`${
          open ? 'left-0' : '-left-full'
        }         w-3/5 transition duration-700 easy-in-out fixed top-0 z-50 h-screen bg-black/30 backdrop-blur-md`}
      >
        <nav className={`font-bold text-white flex flex-col space-y-5 mt-20 items-left`}>
          <Nav setOpen={setOpen} />
        </nav>
      </section>
      <div
        className={`${open ? 'block' : 'hidden'} opacity-50 bg-black fixed inset-0 z-40`}
        onClick={() => setOpen(false)}
      />
    </>
  );
};

const Nav = ({ setOpen }: any) => {
  return (
    <ul className="menu">
      <li>
        <Link
          onClick={() => setOpen(false)}
          href="#proyects"
          // className="text-center font-mono text-white no-underline items-center hover:text-blue-400"
        >
          <span className="text-xl">Proyects</span>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setOpen(false)}
          href="#about"
          className=" text-center font-mono text-white no-underline text-xl items-center hover:text-indigo-400"
        >
          <span className="text-xl">About</span>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setOpen(false)}
          href="#contact"
          className="text-center font-mono text-white no-underline text-xl items-center hover:text-purple-400"
        >
          <span className="text-xl">Contact</span>
        </Link>
      </li>
    </ul>
  );
};

const ThemesSelector = ({ theme, setTheme }: any) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-nav">
        {theme && themes.find((t) => t.name === theme)?.emoji}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content max-h-[40rem] z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        {themes.map((theme) => (
          <li key={theme.name}>
            <button
              data-set-theme={theme.name}
              data-act-class="ACTIVECLASS"
              onClick={() => setTheme(theme.name)}
            >
              {theme.emoji} {theme.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
