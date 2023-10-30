'use client'

export default function Home() {
  return (
    <section className="h-screen w-full px-3">
      <div className="mx-auto flex h-screen flex-col justify-center pb-10 text-center align-middle text-primary">
        <h3 className="text-xl font-semibold italic sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Hey there, I{"'"}m Armany
        </h3>
        <h1 className="text-4xl font-bold subpixel-antialiased sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ">
          Software Developer
        </h1>
      </div>
    </section>
  )
}
