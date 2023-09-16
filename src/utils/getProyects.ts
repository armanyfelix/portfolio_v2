// import { revalidatePath } from 'next/cache'
import PocketBase from 'pocketbase'
import { cache } from 'react'
import { apiUrl } from '../constants/api'

const pb = new PocketBase(apiUrl)

// export const revalidate = 30

export const getProyects = cache(async () => {
  const res = await pb.collection('Proyects').getFullList({ sort: 'created' })
  // revalidatePath('/')
  return res
})
