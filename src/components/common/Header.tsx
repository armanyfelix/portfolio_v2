import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  title: string
  button:
    | {
        href: string
        content: string | ReactNode
      }
    | undefined
}

export default function Header({ title, button }: Props) {
  return (
    <div className="mx-auto flex w-full items-center justify-between my-28 sm:justify-evenly ">
      <h1 className="text-5xl font-bold text-secondary lg:text-7xl">{title}</h1>
      {button ? (
        <Link href={button.href} target="_blank" className="btn glass btn-circle px-2 text-7xl lg:btn-lg">
          {button.content}
        </Link>
      ) : (
        ''
      )}
    </div>
  )
}
