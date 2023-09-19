'use client'

import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { RecordModel } from 'pocketbase'
import { imageLoader, pbImagePath } from '../helpers/images'
import Header from './common/Header'
import Github from './svg/Github'

interface Props {
  proyects: RecordModel[]
}

export default function Proyects({ proyects }: Props) {
  return (
    <section id="proyects" className="min-h-screen">
      <Header title="Proyects" button={{ content: <Github />, href: 'https://www.github.com/armanyfelix' }} />
      <div className="mt-36 mx-auto lg:w-2/3 grid gap-5 h-full w-full justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {proyects.length
          ? proyects.map((p: RecordModel, i: number) => (
              <div key={p.name}>
                <div className="card glass h-full w-full max-w-[29rem]">
                  <figure>
                    <div className="carousel carousel-center h-[180px] max-h-[200px] min-h-[220px] w-full md:max-h-[220px]">
                      {p.images?.map((img: string, j: number) => (
                        <div
                          key={`${i}.${j}`}
                          id={`proyect-${i}.${j}`}
                          className={`group/item carousel-item relative mx-auto justify-center ${
                            p.type === 'web' ? 'w-full' : 'w-1/4'
                          } `}
                        >
                          <Image
                            src={pbImagePath(p, img)}
                            width={p.type === 'web' ? 500 : 120}
                            loader={imageLoader}
                            height={300}
                            alt=""
                          />
                          {p.type === 'web' && (
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 duration-300 ease-in group-hover/item:opacity-100">
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
                  <div className="card-body h-[260px] max-h-[260px] min-h-[260px]">
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
              </div>
            ))
          : ''}
      </div>
    </section>
  )
}
