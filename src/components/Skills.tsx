'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RecordModel } from 'pocketbase'
import { imageLoader, pbImagePath } from '../helpers/images'

interface Props {
  technologies: RecordModel[]
}

export default function Skills({ technologies }: Props) {
  return (
    <section className="mx-auto my-32 md:w-2/3">
      <div className="my-16 text-center">
        <h2 className="text-2xl font-bold text-accent lg:text-5xl">Technologies that I have worked with</h2>
      </div>
      <ul className="flex flex-wrap gap-10 mt-10 justify-center">
        {technologies.map((t) => (
          <li key={t.id}>
            <Link
              href={t.url}
              target="_blank"
              data-tip={t.description}
              className="flex items-center space-x-2"
            >
              <Image src={pbImagePath(t, t.icon)} loader={imageLoader} width={40} height={40} alt="" />
              <p className="text-center text-lg font-semibold">{t.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
