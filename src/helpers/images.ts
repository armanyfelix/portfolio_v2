import { ImageLoaderProps } from 'next/image'
import { apiUrl } from '../constants/api'

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const pbImagePath = (record: any, image: any) => {
  return `${apiUrl}/api/files/${record.collectionId}/${record.id}/${image}`
}
