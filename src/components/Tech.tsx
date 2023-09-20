'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RecordModel } from 'pocketbase'
import { useState } from 'react'
import techTypesFilters from '../data/techTypesFilters.json'
import { imageLoader, pbImagePath } from '../helpers/images'

interface Props {
  technologies: RecordModel[]
}

export default function Tech({ technologies }: Props) {
  const [filter, setFilter] = useState('all')

  return (
    <section className="my-64 mx-5">
      <div className="my-28 text-center">
        <h2 className="text-2xl font-bold text-accent lg:text-6xl">Technologies that I have worked with</h2>
      </div>
      <div className="tabs justify-center gap-1">
        {techTypesFilters.map((t: string, i: number) => (
          <button
            key={`${t}.${i}`}
            className={`tab btn btn-xs md:btn-sm py-0 px-5 ${filter === t ? 'btn-secondary' : 'btn-ghost'}`}
            onClick={() => setFilter(t)}
          >
            {t}
            {i !== 0 && 's'}
          </button>
        ))}
      </div>
      <div className="divider w-2/3 md:w-1/2 mx-auto" />
      <ul className="flex flex-wrap gap-10 mt-10 md:w-2/3 mx-auto justify-center">
        {technologies.map((t) => (
          <li
            key={t.id}
            data-tip={t.description}
            className={`${
              filter === techTypesFilters[0] || filter === t.type ? '' : 'hidden'
            } md:tooltip tooltip-primary`}
          >
            <Link href={t.url} target="_blank" className="flex items-center space-x-2">
              <Image src={pbImagePath(t, t.icon)} loader={imageLoader} width={40} height={40} alt="" />
              <p className="text-center text-lg md:text-xl font-semibold">{t.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
