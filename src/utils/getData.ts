import { revalidatePath } from 'next/cache'
import PocketBase from 'pocketbase'
import { cache } from 'react'
import { apiUrl } from '../constants/api'

const pb = new PocketBase(apiUrl)

// export const revalidate = 30 // Currently not working, big L from vercel

export const getProyects = cache(async () => {
  const res = await pb.collection('Proyects').getFullList({ sort: 'created' })
  // revalidatePath('/') // Add everytime I add new data on the database to refresh
  return res
})

export const getTechonolgies = cache(async () => {
  const res = await pb.collection('technologies').getFullList({ sort: 'created' })
  revalidatePath('/') // Add everytime I need to refresh the database
  return res
})
