'use client'

import Container from "@/components/Container"
import PageProps from "@/interface/PageProps"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import NotFound from 'next/error'
import SpotPage from "@/components/page/SpotPage"

export default function SpotLegacy() 
  {
    const searchParams = useSearchParams()
    const id = searchParams.get('spotID')
    const validation = ValidateID(id)
    if(validation !== true) return validation 

    return (
      <Container className="mt-24">
        <SpotPage slug={null} id={id} />
      </Container>
    )
  }

  function ValidateID(id : any){
    if(id === null || id === undefined) return <NotFound statusCode={404} />

    const tryParseID = parseInt(id)
    if(isNaN(tryParseID)) return <NotFound statusCode={404} />

    return true
  }