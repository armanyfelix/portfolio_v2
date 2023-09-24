import { revalidatePath } from 'next/cache'
import PocketBase from 'pocketbase'
import { cache } from 'react'
import { apiUrl } from '../constants/api'

const pb = new PocketBase(apiUrl)

// export const revalidate = 30 // Currently not working, big L from vercel

export const getProyects = cache(async () => {
  const res = await pb.collection('Proyects').getFullList({ sort: 'name' })
  revalidatePath('/') // Add everytime I need to refresh the data
  return res
})

export const getTechonolgies = cache(async () => {
  const res = await pb.collection('technologies').getFullList({ sort: 'name' })
  revalidatePath('/') // Add everytime I need to refresh the data
  return res
})

export const getResources = cache(async () => {
  const res = await pb.collection('resources').getFullList({ sort: 'name' })
  // revalidatePath('/') // Add everytime I need to refresh the data
  return res
})
