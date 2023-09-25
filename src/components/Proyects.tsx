'use client'

import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { RecordModel } from 'pocketbase'
import { imageLoader, pbImagePath } from '../helpers/images'
import Title from './common/Title'
import Github from './svg/Github'

interface Props {
  proyects: RecordModel[]
}

export default function Proyects({ proyects }: Props) {
  return (
    <section id="proyects" className="mb-40">
      <Title title="Proyects" button={{ label: <Github />, href: 'https://www.github.com/armanyfelix' }} />
      <div className=" mx-5 flex flex-wrap items-start justify-center gap-5 xl:mx-40">
        {proyects.length
          ? proyects.map((p: RecordModel, i: number) => (
              <div key={p.name} className="card glass max-h-[500px] max-w-[400px]">
                <figure>
                  <div className="carousel-center carousel w-auto items-start">
                    {p.images?.map((img: string, j: number) => (
                      <div
                        key={`${i}.${j}`}
                        id={`proyect-${i}.${j}`}
                        className={`group/item carousel-item relative mx-auto max-h-[210px] items-start justify-center ${
                          p.type === 'mobile' ? 'w-1/4 border border-black' : 'w-auto'
                        }`}
                      >
                        <Image
                          src={pbImagePath(p, img)}
                          className="object-fit max-h-[200px] object-center"
                          width={400}
                          loader={imageLoader}
                          height={200}
                          alt=""
                        />
                        {p.type === 'web' && (
                          <div className="max-w-5/6 absolute left-5 right-5 top-1/2 mx-auto flex -translate-y-1/2 transform justify-between opacity-0 duration-300 ease-in group-hover/item:opacity-100">
                            <a
                              href={`#${
                                j === 0 ? `proyect-${i}.${p.images.length - 1}` : `proyect-${i}.${j - 1}`
                              }`}
                              className="btn btn-circle"
                            >
                              ❮
                            </a>
                            <a
                              href={`#${
                                j + 1 === p.images.length ? `proyect-${i}.0` : `proyect-${i}.${j + 1}`
                              }`}
                              className="btn btn-circle"
                            >
                              ❯
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </figure>
                <div className="card-body max-h-[260px] min-h-[260px] pt-4">
                  <h2 className="card-title">{p.name}</h2>
                  <p className="overflow-auto">{p.description}</p>
                  <div className="card-actions justify-end">
                    {p?.source_url && (
                      <Link href={p.source_url} className="btn btn-primary px-3">
                        <CodeBracketSquareIcon className="h-6 w-6" />
                      </Link>
                    )}
                    <Link href={p.url} target="_blank" className="btn btn-primary px-3">
                      <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : ''}
      </div>
    </section>
  )
}
