'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { themeChange } from 'theme-change'
import * as THREE from 'three'
import waves from 'vanta/dist/vanta.waves.min'
import themes from '../../data/themes.json'
import { backgroundColor } from '../../helpers/background'
import { Theme } from '../../types/themes'
import HamburgerSwap from '../svg/HamburgerSwap'

export default function Navbar() {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [themesOpen, setThemesOpen] = useState<boolean>(false)
  const [topClasses, setTopClasses] = useState<string>('')
  const [theme, setTheme] = useState<string>('')
  const vantaRef = useRef(null)
  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos === 0) {
        setTopClasses('ease-in ')
      } else {
        setTopClasses('bg-accent bg-opacity-30 shadow-xl backdrop-blur-md')
      }
      if (prevScrollpos > currentScrollPos) {
        const position = (document.getElementById('top') as HTMLElement) || null
        position.style.top = '0'
        const transition = (document.getElementById('top') as HTMLElement) || null
        transition.style.transition = 'top 0.6s'
      } else if (!menuOpen) {
        const position = (document.getElementById('top') as HTMLElement) || null
        position.style.top = '-100px'
      }
      prevScrollpos = currentScrollPos
    }
  }, [menuOpen])

  useEffect(() => {
    themeChange(false)

    function init() {
      let systemTheme = 'dark'
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
      if (!darkThemeMq.matches) {
        systemTheme = 'light'
      }
      const currentTheme = localStorage.getItem('theme') || systemTheme
      setTheme(currentTheme)
    }
    init()
  }, [])

  useEffect(() => {
    if (theme) {
      const color = backgroundColor(theme)
      if (!vantaEffect || color !== vantaEffect?.options?.color) {
        setVantaEffect(
          waves({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 100.0,
            minWidth: 100.0,
            scale: 1.0,
            scaleMobile: 0.5,
            color,
            shininess: 30,
            waveHeight: 30,
            waveSpeed: 0.3,
            zoom: 1,
          })
        )
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [theme, vantaEffect])

  return (
    <>
      <header
        id="top"
        className={`fixed right-1/2 top-0 z-40 w-full translate-x-1/2 px-3 pt-3 md:w-5/6 lg:w-4/6 xl:w-3/5`}
      >
        <div
          className={`${
            menuOpen ? 'rounded-2xl py-8' : 'rounded-btn py-3'
          } transform px-10 duration-500 ease-in-out md:py-1 ${topClasses}`}
        >
          <section className="flex w-full items-center justify-between">
            <Link href="/">
              <h1 className="cursor-pointer text-3xl font-bold italic " onClick={() => setThemesOpen(false)}>
                Armany
              </h1>
            </Link>
            <div className="z-50 flex flex-col items-center justify-between sm:flex-row">
              <nav className="hidden w-full self-end sm:w-auto md:block">
                <NavList
                  setMenuOpen={setMenuOpen}
                  menuOpen={menuOpen}
                  setThemesOpen={setThemesOpen}
                  themesOpen={themesOpen}
                  theme={theme}
                />
              </nav>
              <label className="swap swap-rotate inline-grid p-0 md:hidden">
                <input
                  type="checkbox"
                  checked={menuOpen}
                  onChange={() => {
                    setMenuOpen(!menuOpen)
                    setThemesOpen(false)
                  }}
                />
                <HamburgerSwap />
              </label>
            </div>
          </section>
          <nav className={`${menuOpen ? 'block' : 'hidden'} mx-4 mt-4`}>
            <NavList
              setMenuOpen={setMenuOpen}
              menuOpen={menuOpen}
              setThemesOpen={setThemesOpen}
              themesOpen={themesOpen}
              theme={theme}
            />
          </nav>
        </div>
      </header>
      {/* THEMES MENU */}
      <ul
        className={`${
          themesOpen ? 'fixed' : 'hidden'
        } rounded-box right-1/2 top-[16.4rem] z-40 mt-7 max-h-[40vh] w-[93vw] translate-x-1/2 overflow-auto bg-accent-focus bg-opacity-30 p-3 shadow-lg backdrop-blur-md backdrop-brightness-75 md:right-1/4 md:top-[3.2rem] md:max-h-[70vh] md:w-auto md:translate-x-24`}
      >
        {themes.map((t: Theme) => (
          <li key={t.name}>
            <button
              data-set-theme={t.name}
              data-act-class="ACTIVECLASS"
              onClick={() => {
                setTheme(t.name)
                setThemesOpen(false)
                setMenuOpen(false)
              }}
              className="btn btn-ghost w-full md:justify-start"
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
      {/* BACKGROUND ANIMATION */}
      <div>
        {theme && (
          <div id="main" ref={vantaRef} className="fixed bottom-0 left-0 right-0 top-0">
            {' '}
          </div>
        )}
      </div>
    </>
  )
}

const NavList = ({ setMenuOpen, menuOpen, setThemesOpen, themesOpen, theme }: any) => {
  const navItems = [
    {
      label: 'Proyects',
      href: '#proyects',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ]
  return (
    <ul className="block md:flex md:items-center md:space-x-3">
      {navItems.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setMenuOpen(false)
            setThemesOpen(false)
          }}
        >
          <Link href={item.href} className="btn btn-ghost w-full text-lg md:w-auto">
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <button onClick={() => setThemesOpen(!themesOpen)} className="btn btn-ghost w-full">
          {theme && themes.find((t) => t.name === theme)?.emoji}
        </button>
      </li>
    </ul>
  )
}
