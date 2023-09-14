import PocketBase from 'pocketbase'
import { cache } from 'react'
import { apiUrl } from '../constants/api'

export const revalidate = 3600
const pb = new PocketBase(apiUrl)

export const getProyects = cache(async () => {
  const res = await pb.collection('Proyects').getFullList({ sort: '-created' })
  return res
})
