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
    <div className="mx-auto flex w-full items-center justify-evenly pb-28 pt-[4.5rem]">
      <h1 className="text-5xl font-bold text-secondary md:text-6xl lg:text-7xl">{title}</h1>
      {button ? (
        <Link
          href={button.href}
          target="_blank"
          className="btn btn-circle glass px-2 text-lg font-bold lg:btn-lg md:text-xl lg:text-2xl"
        >
          {button.label}
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}
