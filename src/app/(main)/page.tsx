'use client'

import Container from "@/components/Container"
import Card from '@/components/Card'
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import { skimspotService } from '@/service/skimspotService'

export default function Home() {

    const [lastAddedSkimspots, setLastAddedSkimspots] = useState([])
    const [top6Skimspots, setTop6Skimspots] = useState([])
    const [mostWatchedSkimspots, setMostWatchedSkimspots] = useState([])

    useEffect(() => {
        //skimspotService.getSorted('age', 3)
        //    .then(result => {
        //        setLastAddedSkimspots(result.data)
        //    })

        //skimspotService.getSorted('rating', 6)
        //    .then(result => {
        //        setTop6Skimspots(result.data)
        //    })

        //skimspotService.getSorted('views', 3)
        //    .then(result => {
        //        setMostWatchedSkimspots(result.data)
        //    })
    }, [])

    return (
      <div className="w-full">
        {/* Video Container */}
        <div className="relative w-full h-[80vh]"> {/* h-[80vh] makes it 80% of viewport height - adjust this value as needed */}
          <video
            className="absolute w-full h-full object-cover"
            autoPlay
           muted
            loop
          >
            <source src="/video/homevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-[50vw]">
                <h1 className="text-white text-6xl font-extrabold">Skimspots Worldwide</h1>
                <p className="text-white text-2xl font-extrabold mt-6">WAVE, FLATLAND AND URBAN</p>
                <p className="text-white text-xl font-thin text-center mt-4">Difficult to find skim spots near you or on vactions? Find skimspots from all over the world on skimspots.com!</p>
            </div>
          </div>
          <span className="absolute bottom-0 left-0 p-3 text-white text-xs">Credit to: Victoria Skimboards, DB Skimboards</span>
        </div>
        
        <Container>
            <h2 className="text-slate-700 text-dark text-4xl font-extrabold my-16">Latest added spots</h2>
            <div className="flex gap-4">
                <div className="flex-1">
                    <Card 
                        imageUrl="/images/VesterStrand1.png" 
                        title="Vester Strand"
                        type="Flatland"
                        location="Denmark, Europe"
                        uuid="vester-strand"
                        rating={5}
                        tags={['Beach', 'sand', 'Beach', 'sand', 'Beach', 'sand', 'Beach', 'sand', 'Beach', 'sand', 'Beach', 'sand']}
                    />
                </div>
                <div className="flex-1">
                    <Card 
                        imageUrl="/images/VesterStrand2.jpg" 
                        title="Strand"
                        type="Flatland"
                        location="Denmark, Europe"
                        rating={2}
                    />
                </div>
                <div className="flex-1">
                    <Card 
                        imageUrl="/images/Buresoe.jpg" 
                        title="Buresø"
                        type="Flatland"
                        location="Denmark, Europe"
                        rating={4}
                    />
                </div>
            </div>

            <h2 className="text-slate-700 text-dark text-4xl font-extrabold my-16">Top 6 spots</h2>
            <div className="grid gap-6 grid-cols-3 mb-8">
                <Card 
                    imageUrl="/images/VesterStrand1.png" 
                    title="Vester Strand"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={5}
                />
                <Card 
                    imageUrl="/images/VesterStrand2.jpg" 
                    title="Strand"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={2}
                />
                <Card 
                    imageUrl="/images/Buresoe.jpg" 
                    title="Buresø"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={4}
                />

                <Card 
                    imageUrl="/images/VesterStrand1.png" 
                    title="Vester Strand"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={5}
                />
                <Card 
                    imageUrl="/images/VesterStrand2.jpg" 
                    title="Strand"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={2}
                />
                <Card 
                    imageUrl="/images/Buresoe.jpg" 
                    title="Buresø"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={4}
                />

               
            </div>
            <a className="rounded text-white bg-sky-500 px-5 py-3">
                    Browse spots
                </a>

            <h2 className="text-slate-700 text-dark text-4xl font-extrabold my-16">Most visited spots</h2>
            <div className="grid gap-6 grid-cols-3">
                <Card 
                    imageUrl="/images/VesterStrand1.png" 
                    title="Vester Strand"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={5}
                />
                <Card 
                    imageUrl="/images/VesterStrand2.jpg" 
                    title="Strand"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={2}
                />
                <Card 
                    imageUrl="/images/Buresoe.jpg" 
                    title="Buresø"
                    type="Flatland"
                    location="Denmark, Europe"
                    rating={4}
                />
            </div>
        </Container>
      </div>
    )
  }