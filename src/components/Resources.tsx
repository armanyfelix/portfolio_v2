'use client'

import { imageLoader, pbImagePath } from '@/helpers/images'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { RecordModel } from 'pocketbase'

interface Props {
  resources: RecordModel[]
}

export default function Resources({ resources }: Props) {
  return (
    <section className="px-4 pb-12 md:px-8 lg:px-16">
      <div className="mb-28 text-center">
        <h2 className="text-3xl font-bold text-accent md:text-4xl lg:text-6xl">Resources</h2>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-6">
        {resources &&
          resources.map((r) => (
            <div key={r.id} className="card image-full w-96 bg-base-100 text-neutral shadow-xl">
              <figure>
                <Image
                  src={pbImagePath(r, r.preview)}
                  className="object-fit object-center"
                  width={384}
                  loader={imageLoader}
                  height={208}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{r.name}</h2>
                <p className="font-mono tracking-tighter">{r.description}</p>
                <div className="card-actions justify-end">
                  <Link href={r.url} target="_blank" className="btn btn-primary px-3">
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
