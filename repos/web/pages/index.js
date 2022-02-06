import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Load Scene View on Demand
const SceneView = dynamic(() => import(`../../client/views/SceneView`), {ssr: false})

export default function HomePage (props) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true))
  return <>
    <Head>
      <title>Babylon + Next.js Setup Successful!</title>
    </Head>
    {loaded && <SceneView {...props}/>}
    </>
}
