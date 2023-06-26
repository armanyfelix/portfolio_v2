'use client';

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import themes from '../../data/themes.module';
import HamburgerSwap from '../../svgs/HamburgerSwap';

interface Props {}

const Header: FC<Props> = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const [topClasses, setTopClasses] = useState<string>('');
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setTopClasses('ease-in transform duration-300');
      } else {
        setTopClasses('bg-accent-focus bg-opacity-30 shadow-lg backdrop-blur-md backdrop-brightness-75');
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
      <header id="top" className={`fixed left-0 right-0 top-0 z-40 px-3 pt-3`}>
        <div className={`group flex items-center justify-evenly rounded-xl ${topClasses}`}>
          <div className="py-3">
            <Link href="/" legacyBehavior>
              <h1 className="cursor-pointer text-2xl font-light italic text-primary">Luis Armany</h1>
            </Link>
          </div>
          <div className="z-50 flex flex-col items-center justify-between sm:flex-row">
            <nav className="hidden w-full self-end sm:w-auto md:block">
              <ul className="flex items-center space-x-3 text-secondary">
                <li>
                  <Link href="#proyects" className="btn-ghost btn">
                    Proyects
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="btn-ghost btn">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="btn-ghost btn">
                    Contact
                  </Link>
                </li>
                <li>
                  <div className="dropdown-end dropdown">
                    <label tabIndex={0} className="btn-ghost btn">
                      {theme && themes.find((t) => t.name === theme)?.emoji}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu rounded-box z-[1] mt-4 max-h-[60vh] w-[30rem] overflow-auto bg-accent-focus bg-opacity-30 p-3 shadow-lg backdrop-blur-md backdrop-brightness-75"
                    >
                      {themes.map((t: { name: string; emoji: string }) => (
                        <li key={t.name}>
                          <button
                            data-set-theme={t.name}
                            data-act-class="ACTIVECLASS"
                            onClick={() => setTheme(t.name)}
                          >
                            {t.emoji} {t.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
            <label className="swap swap-rotate inline-grid p-0 md:hidden">
              <input type="checkbox" />
              <HamburgerSwap />
            </label>
          </div>
        </div>
        {/* <section className="text-center">
          <ul className="flex justify-evenly items-center">
            <li>
              <Link onClick={() => setOpen(false)} href="#proyects" className="btn btn-ghost">
                Proyects
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="#about" className="btn btn-ghost">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="#contact" className="btn btn-ghost">
                Contact
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn-nav">
              {theme && `${themes.find((t) => t.name === theme)?.emoji} ${theme}`}
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content max-h-[40rem] z-[1] p-2 shadow bg-base-100 rounded-box w-40 mt-4"
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
        </section> */}
      </header>
      {/* <div
        className={`${open ? 'block' : 'hidden'} opacity-50 bg-black fixed inset-0 z-40`}
        onClick={() => setOpen(false)}
      /> */}
    </>
  );
};

export default Header;
