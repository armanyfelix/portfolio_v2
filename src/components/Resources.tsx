import Image from 'next/image'
import { RecordModel } from 'pocketbase'

interface Props {
  resources: RecordModel[]
}

export default function Resources({ resources }: Props) {
  return (
    <div className="px-4 pb-12 md:px-8 lg:px-16">
      <div className="mb-28 text-center">
        <h2 className="text-3xl font-bold text-accent md:text-4xl lg:text-6xl">Resouces</h2>
      </div>
      <div className="card image-full w-96 bg-base-100 shadow-xl">
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
