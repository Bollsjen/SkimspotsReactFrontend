'use client'

import { use } from "react"
import Container from "@/components/Container"
import SpotPage from "@/components/page/SpotPage"

export default function BrowseSpot({ params }: { params: Promise<{ slug?: string[] }> }) 
  {
    const { slug } = use(params)
    return (
      <Container className="mt-24 h-screen">
        <h1>{slug?.[0]}</h1>
        <h3>{slug?.[1]}</h3>
        <h5>{slug?.[2]}</h5>
      </Container>
    )
  }