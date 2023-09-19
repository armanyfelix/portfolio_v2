import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  title: string
  button:
    | {
        href: string
        label: string | ReactNode
      }
    | undefined
}

export default function Header({ title, button }: Props) {
  return (
    <div className="mx-auto flex w-full items-center pt-[4.5rem] pb-28 justify-evenly">
      <h1 className="text-5xl md:text-6xl font-bold text-secondary lg:text-7xl">{title}</h1>
      {button ? (
        <Link
          href={button.href}
          target="_blank"
          className="btn glass btn-circle font-bold text-lg md:text-xl lg:text-2xl px-2 lg:btn-lg"
        >
          {button.label}
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}
