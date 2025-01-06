import { getAnimeById } from '@/lib/actions/anime';
import React from 'react'

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function Page({params} : PageProps) {
  const {id} = await params
  console.log(id)
  const d = await getAnimeById(id)
  console.log(d)
  return (
    <div>Page</div>
  )
}
