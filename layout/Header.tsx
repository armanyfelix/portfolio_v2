'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function Header({ mohaveFont }: { mohaveFont: string }) {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        const position = (document.getElementById('top') as HTMLElement) || null
        position.style.top = '0'
        const transition = (document.getElementById('top') as HTMLElement) || null
        transition.style.transition = 'top 0.6s'
      } else {
        const position = (document.getElementById('top') as HTMLElement) || null
        position.style.top = '-70px'
      }
      prevScrollpos = currentScrollPos
    }
  }, [])
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <header id="top" className="fixed top-0 right-0 left-0 flex justify-between z-40 items-center shadow-xl backdrop-filter backdrop-blur backdrop-brightness-90 bg-opacity-90 bg-black-800 px-6 py-1">
        <div>
          <Link href="/" legacyBehavior>
            <svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0L1 19H12.5" stroke="black" strokeWidth="2" />
              <path d="M11.5 19.5L20 1H21L30.5 19.5M30.5 0V20" stroke="black" strokeWidth="2" />
              <path d="M41.5 0.5L50.5 18.5H51.5L60.5 0.5" stroke="black" strokeWidth="2" />
              <path d="M30.5 1H42.5" stroke="black" strokeWidth="2" />
            </svg>
          </Link>
        </div>
        <div id="site-menu" className="flex flex-col z-50 sm:flex-row justify-between items-center">
          <nav className={`w-full sm:w-auto hidden md:block font-bold text-white self-end sm:space-x-6 sm:self-center sm:flex flex-row items-center`}>
            <Link onClick={() => setOpen(false)} href="#proyects" className="text-center font-mono text-white no-underline text-xl items-center hover:text-blue-400">
              <span className={`${mohaveFont}`}>Proyects</span>
            </Link>
            <Link onClick={() => setOpen(false)} href="#about" className=" text-center font-mono text-white no-underline text-xl items-center hover:text-indigo-400">
              <span className={`${mohaveFont}`}>About</span>
            </Link>
            <Link onClick={() => setOpen(false)} href="#contact" className="text-center font-mono text-white no-underline text-xl items-center hover:text-purple-400">
              <span className={`${mohaveFont}`}>Contact</span>
            </Link>
          </nav>
          <button id="menuBtn" aria-label="menu" className={`p-0 hamburger block focus:outline-none ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <span className="hamburger__top-bun" />
            <span className="hamburger__bottom-bun" />
          </button>
        </div>
      </header>

      {/* MENU */}
      <section
        className={`${open ? 'right-0 w-full md:w-[50%] lg:w-[30%]' : 'translate-x-96 right-0'}
          transition duration-700 easy-in-out fixed top-0 text-white z-50 h-screen bg-black/30 backdrop-blur-md b`}
      >
        <button id="menuBtn" aria-label="menu" className={`mt-2 mr-6 hamburger block float-right ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span className="hamburger__top-bun" />
          <span className="hamburger__bottom-bun" />
        </button>
        <nav className={` font-bold text-white flex flex-col space-y-5 mt-20 items-center`}>
          <Link onClick={() => setOpen(false)} href="#proyects" className="text-center font-mono text-white no-underline items-center hover:text-blue-400">
            <span className={`${mohaveFont} text-5xl`}>Proyects</span>
          </Link>
          <Link onClick={() => setOpen(false)} href="#about" className=" text-center font-mono text-white no-underline text-xl items-center hover:text-indigo-400">
            <span className={`${mohaveFont} text-5xl`}>About</span>
          </Link>
          <Link onClick={() => setOpen(false)} href="#contact" className="text-center font-mono text-white no-underline text-xl items-center hover:text-purple-400">
            <span className={`${mohaveFont} text-5xl`}>Contact</span>
          </Link>
        </nav>
      </section>
      <style jsx>{`
        /* HAMBURGER MENU */
        .hamburger {
          cursor: pointer;
          width: 48px;
          height: 48px;
          transition: all 0.25s;
          border: 0;
          background: transparent;
        }
        .hamburger__top-bun,
        .hamburger__bottom-bun {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: #fff;
          transform: rotate(0);
          transition: all 0.5s;
        }
        .hamburger:hover [className*='-bun'] {
          background: #333;
        }
        .hamburger__top-bun {
          transform: translateY(-5px);
        }
        .hamburger__bottom-bun {
          transform: translateY(3px);
        }
        .open {
          transform: rotate(90deg);
          transform: translateY(-1px);
        }
        .open .hamburger__top-bun {
          transform: rotate(45deg) translateY(0px);
        }
        .open .hamburger__bottom-bun {
          transform: rotate(-45deg) translateY(0px);
        }
      `}</style>
    </>
  )
}

// const ThemeIcon = () => {
//   const { theme, setTheme } = useTheme();
//   const router = useRouter()
//   const handleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//     router.reload();
//   };
//   return (
//     <button onClick={() => handleTheme()} className=" outline-none border-none decoration-slice">
//       {theme === 'light' ? (
//         <div className="w-6 h-6 rounded-full bg-gradient-to-tl from-red-600 via-red-60  to-yellow-600 shadow-sun hover:animate-pulse"></div>
//       ) : (
//         <div className="w-6 h-6 rounded-full bg-gradient-to-bl from-gray-600  to-gray-700 shadow-moon hover:animate-pulse"></div>
//       )}
//     </button>
//   );
// };

export default Header
