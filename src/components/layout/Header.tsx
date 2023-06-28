'use client';

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import themes from '../../data/themes.module';
import HamburgerSwap from '../svg/HamburgerSwap';

interface Props {}

const Header: FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [themesOpen, setThemesOpen] = useState<boolean>(false);
  const [topClasses, setTopClasses] = useState<string>('');
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setTopClasses('ease-in transform duration-300');
      } else {
        setTopClasses('bg-primary bg-opacity-30 shadow-lg backdrop-blur backdrop-brightness-75');
      }
      if (prevScrollpos > currentScrollPos) {
        const position = (document.getElementById('top') as HTMLElement) || null;
        position.style.top = '0';
        const transition = (document.getElementById('top') as HTMLElement) || null;
        transition.style.transition = 'top 0.6s';
      } else if (!menuOpen) {
        const position = (document.getElementById('top') as HTMLElement) || null;
        position.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };
  }, [menuOpen]);

  useEffect(() => {
    themeChange(false);

    function init() {
      let systemTheme = 'dark';
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (!darkThemeMq.matches) {
        systemTheme = 'light';
      }
      const currentTheme = localStorage.getItem('theme') || systemTheme;
      setTheme(currentTheme);
    }

    init();
  }, []);

  return (
    <>
      <header id="top" className={`fixed left-0 right-0 top-0 z-40 px-3 pt-3`}>
        <div className={`rounded-btn py-3 md:py-1 ${topClasses}`}>
          <section className="flex w-full items-center justify-evenly">
            <Link href="/" legacyBehavior>
              <h1 className="cursor-pointer text-2xl font-light italic ">Armany Felix</h1>
            </Link>
            <div className="z-50 flex flex-col items-center justify-between sm:flex-row">
              <nav className="hidden w-full self-end sm:w-auto md:block">
                <ul className="flex items-center space-x-3">
                  <li>
                    <Link href="#proyects" onClick={() => setThemesOpen(false)} className="btn-ghost btn">
                      Proyects
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" onClick={() => setThemesOpen(false)} className="btn-ghost btn">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" onClick={() => setThemesOpen(false)} className="btn-ghost btn">
                      Contact
                    </Link>
                  </li>
                  <li className="tooltip tooltip-bottom" data-tip={theme}>
                    <button onClick={() => setThemesOpen(!themesOpen)} className="btn-ghost btn w-full">
                      {theme && themes.find((t) => t.name === theme)?.emoji}
                    </button>
                  </li>
                </ul>
              </nav>
              <label className="swap swap-rotate inline-grid p-0 md:hidden">
                <input type="checkbox" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <HamburgerSwap />
              </label>
            </div>
          </section>
          <section
            className={`${
              menuOpen
                ? 'block transform transition duration-700 ease-in-out '
                : 'hidden transform transition duration-700 ease-in-out'
            } mx-4 mt-4`}
          >
            <ul>
              <li>
                <Link
                  href="#proyects"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    setThemesOpen(false);
                  }}
                  className="btn-ghost btn w-full"
                >
                  Proyects
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    setThemesOpen(false);
                  }}
                  className="btn-ghost btn w-full"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    setThemesOpen(false);
                  }}
                  className="btn-ghost btn w-full"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button onClick={() => setThemesOpen(!themesOpen)} className="btn-ghost btn w-full">
                  {theme && themes.find((t) => t.name === theme)?.emoji}
                </button>
              </li>
            </ul>
          </section>
        </div>
      </header>
      {/* THEMES MENU */}
      <ul
        className={`${
          themesOpen ? 'fixed' : 'hidden'
        } rounded-box right-1/2 top-[16.4rem] z-40 mt-7 max-h-[40vh] w-[93vw] translate-x-1/2 overflow-auto bg-accent-focus bg-opacity-30 p-3 shadow-lg backdrop-blur-md backdrop-brightness-75 md:right-1/4 md:top-[3.2rem] md:max-h-[70vh] md:w-auto md:translate-x-24`}
      >
        {themes.map((t: { name: string; emoji: string }) => (
          <li key={t.name}>
            <button
              data-set-theme={t.name}
              data-act-class="ACTIVECLASS"
              onClick={() => {
                setTheme(t.name);
                setThemesOpen(false);
                setMenuOpen(false);
              }}
              className="btn-ghost btn w-full md:justify-start"
            >
              {t.emoji} {t.name}
            </button>
          </li>
        ))}
      </ul>
      {/* BACKDROPS */}
      <div
        className={`${menuOpen ? 'block' : 'hidden'} fixed inset-0 z-30 bg-black opacity-50`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`${themesOpen ? 'block' : 'hidden'} fixed inset-0 z-30`}
        onClick={() => setThemesOpen(false)}
      />
    </>
  );
};

export default Header;
