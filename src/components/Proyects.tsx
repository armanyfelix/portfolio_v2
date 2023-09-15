'use client'

import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { RecordModel } from 'pocketbase'
import { imageLoader } from '../helpers/images'
import Github from './svg/Github'

interface Props {
  proyects: RecordModel[]
  apiUrl: string | undefined
}

export default function Proyects({ apiUrl, proyects }: Props) {
  return (
    <section id="proyects" className="min-h-screen pt-36">
      <div className="mx-auto flex w-full items-center justify-between px-5 sm:justify-evenly sm:px-10">
        <h1 className="text-5xl font-bold text-secondary lg:text-7xl">Proyects</h1>
        <Link
          href="https://www.github.com/armanyfelix"
          target="_blank"
          className="btn glass px-2 text-7xl lg:btn-lg"
        >
          <Github />
        </Link>
      </div>
      <div className="mt-36 grid h-full w-full justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {proyects.length
          ? proyects.map((d: RecordModel, i: number) => (
              <div key={d.name} className="m-3">
                <div className="card glass h-full w-full max-w-[28rem]">
                  <figure>
                    <div className="carousel carousel-center h-[200px] max-h-[200px] min-h-[240px] w-full md:max-h-[240px]">
                      {d.images?.map((img: string, j: number) => (
                        <div
                          key={`${i}.${j}`}
                          id={`proyect-${i}.${j}`}
                          className={`group/item carousel-item relative mx-auto justify-center ${
                            d.type === 'web' ? 'w-full' : 'w-1/4'
                          } `}
                        >
                          <Image
                            src={`${apiUrl}/api/files/${d.collectionId}/${d.id}/${img}`}
                            width={d.type === 'web' ? 500 : 120}
                            loader={imageLoader}
                            height={300}
                            alt=""
                          />
                          {d.type === 'web' && (
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 duration-300 ease-in group-hover/item:opacity-100">
                              <a
                                href={`#${
                                  j === 0 ? `proyect-${i}.${d.images.length - 1}` : `proyect-${i}.${j - 1}`
                                }`}
                                className="btn btn-circle"
                              >
                                ❮
                              </a>
                              <a
                                href={`#${
                                  j + 1 === d.images.length ? `proyect-${i}.0` : `proyect-${i}.${j + 1}`
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
                    <h2 className="card-title">{d.name}</h2>
                    <p className="overflow-auto">{d.description}</p>
                    <div className="card-actions mt-4 justify-end">
                      {d?.source && (
                        <Link href={d?.source} className="btn btn-primary px-3">
                          <CodeBracketSquareIcon className="h-6 w-6" />
                        </Link>
                      )}
                      <Link href={d.url} target="_blank" className="btn btn-primary px-3">
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
