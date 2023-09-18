import Image from 'next/image'

export default function Tools() {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto flex items-center justify-between px-5 md:w-2/4 md:justify-evenly">
        <h1 className="text-5xl font-bold text-secondary lg:w-3/5 lg:text-7xl">Tools & Assets</h1>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <Image src="/images/proyects/felixgarages_1.png" width={400} height={200} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
